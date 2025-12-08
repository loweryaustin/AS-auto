/**
 * ============================================
 * SCRIPT TOOL TITLE/SEARCH LOGIC (V7.3.8)
 * ============================================
 * This component handles the main title bar,
 * the supplement search/switcher, and the new
 * Product Line Switcher logic.
 *
 * It depends on:
 * - `appState`, `DOM` (global)
 * - `saveSettingsToStorage()`, `loadSupplementDb()` (from script.js)
 * - `getAvailableProductLines()` (from script.js)
 */

/**
 * Renders the main title UI, switching between
 * "display" and "search" modes.
 */
AppUI.renderTitleUI = function() {
    if (appState.isSearching) {
        DOM.titleClickWrapper.classList.add('hidden');
        DOM.scriptSearchInput.classList.remove('hidden');
        DOM.scriptSearchInput.value = '';
        DOM.scriptSearchInput.focus();
        AppUI.renderSearchResults('');
    } else {
        DOM.titleClickWrapper.classList.remove('hidden');
        DOM.scriptSearchInput.classList.add('hidden');
        DOM.scriptSearchResults.classList.add('hidden');
        
        if (appState.supplementDatabase && appState.supplementDatabase.baseProduct) {
            const baseProductName = appState.supplementDatabase.baseProduct.name.replace(' (Base)', '');
            DOM.scriptTitleDisplay.textContent = `${baseProductName} Call Script`;
        } else {
            DOM.scriptTitleDisplay.textContent = 'Call Script';
        }
    }
    
    // Also update the Product Line display
    if (DOM.currentProductLineDisplay) {
        DOM.currentProductLineDisplay.textContent = appState.currentProductLine || "General";
    }
}

/**
 * NEW (V7.0.1): Renders the Product Line Switcher Dropdown
 */
AppUI.renderProductLineSwitcher = function() {
    if (!DOM.productLineDropdown) {
        // Cache these if not already cached (safe fallback)
        DOM.productLineSwitcher = document.getElementById('product-line-switcher');
        DOM.currentProductLineDisplay = document.getElementById('current-product-line-display');
        DOM.productLineDropdown = document.getElementById('product-line-dropdown');
        
        // Add click listener to the switcher itself
        if (DOM.productLineSwitcher) {
            // Remove old listeners to prevent duplicates (though typical usage is one-time init)
            const newClone = DOM.productLineSwitcher.cloneNode(true);
            DOM.productLineSwitcher.parentNode.replaceChild(newClone, DOM.productLineSwitcher);
            DOM.productLineSwitcher = newClone;
            DOM.currentProductLineDisplay = document.getElementById('current-product-line-display'); // Re-cache child

            DOM.productLineSwitcher.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent closing immediately
                DOM.productLineDropdown.classList.toggle('hidden');
            });
        }
    }

    if (!DOM.productLineDropdown) return; // Guard

    // V7.3.8 FIX: Ensure display is synced immediately on render
    if (DOM.currentProductLineDisplay && appState.currentProductLine) {
        DOM.currentProductLineDisplay.textContent = appState.currentProductLine;
    }

    const availableLines = getAvailableProductLines(); // From script.js

    let html = '';
    availableLines.forEach(line => {
        const isActive = line === appState.currentProductLine;
        html += `
            <div class="product-line-option ${isActive ? 'bg-blue-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}" data-line="${line}">
                ${line}
                ${isActive ? '<span class="ml-auto text-xs font-bold text-blue-400">ACTIVE</span>' : ''}
            </div>
        `;
    });

    DOM.productLineDropdown.innerHTML = html;

    // Attach click listeners to options
    DOM.productLineDropdown.querySelectorAll('.product-line-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
            const selectedLine = e.currentTarget.dataset.line;
            AppUI.switchProductLine(selectedLine);
        });
    });
}

/**
 * NEW (V7.0.1): Switches the active product line and loads the default DB for it.
 */
AppUI.switchProductLine = function(lineName) {
    appState.currentProductLine = lineName;
    DOM.productLineDropdown.classList.add('hidden');
    DOM.currentProductLineDisplay.textContent = lineName;

    // Find the first database that matches this line
    let firstDbInLine = null;
    
    // Check Defaults first
    for (const [key, db] of Object.entries(appState.allDatabaseDefaults)) {
        if ((db.productLine || "General") === lineName) {
            firstDbInLine = key;
            break;
        }
    }
    
    // If not found, check Edited
    if (!firstDbInLine) {
        for (const [key, db] of Object.entries(appState.editedDatabases)) {
            if ((db.productLine || "General") === lineName) {
                firstDbInLine = key;
                break;
            }
        }
    }

    if (firstDbInLine) {
        loadSupplementDb(firstDbInLine); // This will re-render everything
    } else {
        // Even if no DB found (rare), update UI to reflect line switch
        alert(`No databases found for Product Line: ${lineName}`);
    }
}

/**
 * Renders the list of supplement search results.
 * @param {string} query - The search query from the input box.
 */
AppUI.renderSearchResults = function(query) {
    const lowerQuery = query ? query.toLowerCase().trim() : ""; // V7.3.8 fix for empty query

    // Search both default and user-created (edited) databases
    const defaultDbNames = Object.keys(appState.allDatabaseDefaults);
    const editedDbNames = Object.keys(appState.editedDatabases);
    const allDbNames = Array.from(new Set([...defaultDbNames, ...editedDbNames])).sort();

    // FILTER: Only show databases in the CURRENT Product Line
    const currentLineDbs = allDbNames.filter(name => {
        const def = appState.allDatabaseDefaults[name];
        const edit = appState.editedDatabases[name];
        // Use edited if available, else default
        const db = edit || def;
        return db && ((db.productLine || "General") === appState.currentProductLine);
    });

    // Filter based on query (if exists)
    const filteredDbNames = lowerQuery.length > 0 
        ? currentLineDbs.filter(name => name.toLowerCase().includes(lowerQuery))
        : currentLineDbs; // V7.3.8 Fix: show all if query is empty

    let html = '';

    if (filteredDbNames.length === 0) {
        html = `<div class="search-result-empty">No supplements found in ${appState.currentProductLine}.</div>`;
    } else {
         html = filteredDbNames.map(name => `
            <div class="search-result-item" data-dbname="${name.replace(/"/g, '&quot;')}">
                ${name}
            </div>
        `).join('');
    }

    DOM.scriptSearchResults.innerHTML = html;
    DOM.scriptSearchResults.classList.remove('hidden');
}

/**
 * Handles the logic for closing the search box
 * when the user clicks outside of it.
 * @param {Event} e - The global click event.
 */
AppUI.closeSearch = function(e) {
    // Closes search if clicking outside the title/search container
    if (DOM.titleSearchContainer && !DOM.titleSearchContainer.contains(e.target)) {
        if (appState.isSearching) {
            appState.isSearching = false;
            AppUI.renderTitleUI();
        }
    }

    // NEW: Close Product Line Dropdown
    if (DOM.productLineDropdown && !DOM.productLineDropdown.classList.contains('hidden')) {
        // If click is NOT inside dropdown AND NOT on switcher
        if (!DOM.productLineDropdown.contains(e.target) && !DOM.productLineSwitcher.contains(e.target)) {
            DOM.productLineDropdown.classList.add('hidden');
        }
    }
}

/**
 * Creates a new, blank supplement configuration.
 * (Now primarily used by script-io.js logic, but kept here as core utility)
 * @param {string} dbName - The name for the new supplement.
 */
AppUI.createNewSupplement = function(dbName) {
    console.log(`Creating new supplement: ${dbName} in ${appState.currentProductLine}`);
    
    // 1. Create the blank template
    const newDbConfig = {
        "productLine": appState.currentProductLine, 
        "baseProduct": {
            name: `${dbName} (Base)`,
            pitch: "Click the settings cog to edit this pitch.",
            gender: "any" // Default to Any
        },
        "guaranteeDays": 60, 
        "questions": [ 
            "How long have you been dealing with this?",
            "What other health conditions are you dealing with?",
            "What medications are you taking?",
            "What is your biggest health concern?"
        ],
        "recommendations": [],
        "references": []
    };

    // 2. Add to the editedDatabases in memory
    appState.editedDatabases[dbName] = newDbConfig;

    // 3. Save to localStorage
    saveSettingsToStorage(); 

    // 4. Load the new DB
    loadSupplementDb(dbName);
}

/**
 * Attaches event listeners for the Title/Search component.
 */
AppUI.initSearchEventListeners = function() {
    DOM.titleClickWrapper.addEventListener('click', () => {
        appState.isSearching = true;
        AppUI.renderTitleUI();
    });

    DOM.scriptSearchInput.addEventListener('input', () => {
        AppUI.renderSearchResults(DOM.scriptSearchInput.value);
    });
    
    // V7.3.8 FIX: Trigger search results (browsing) immediately on click/focus
    DOM.scriptSearchInput.addEventListener('click', () => {
         AppUI.renderSearchResults(DOM.scriptSearchInput.value);
    });

    DOM.scriptSearchResults.addEventListener('click', (e) => {
        // Check for click on an existing item
        const resultItem = e.target.closest('.search-result-item');
        if (resultItem) {
            const dbName = resultItem.dataset.dbname;
            if (dbName) {
                loadSupplementDb(dbName); // This will reset the call
            }
        }
    });

    // Add listener to close search when clicking outside
    document.addEventListener('click', AppUI.closeSearch);
    
    // Initialize Product Line Switcher
    setTimeout(() => {
        AppUI.renderProductLineSwitcher();
    }, 100);
}
