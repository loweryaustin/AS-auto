/**
 * ============================================
 * SCRIPT TOOL TITLE/SEARCH LOGIC (V5.0.0)
 * ============================================
 * This component handles the main title bar,
 * the supplement search/switcher, and the logic
 * for creating a new supplement.
 *
 * It depends on:
 * - `appState`, `DOM` (global)
 * - `saveSettingsToStorage()`, `loadSupplementDb()` (from script.js)
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
}

/**
 * Renders the list of supplement search results.
 * @param {string} query - The search query from the input box.
 */
AppUI.renderSearchResults = function(query) {
    const lowerQuery = query.toLowerCase().trim();

    // Search both default and user-created (edited) databases
    const defaultDbNames = Object.keys(appState.allDatabaseDefaults);
    const editedDbNames = Object.keys(appState.editedDatabases);
    const allDbNames = Array.from(new Set([...defaultDbNames, ...editedDbNames])).sort();

    // Filter based on query
    const filteredDbNames = allDbNames.filter(name => 
        name.toLowerCase().includes(lowerQuery)
    );

    let html = '';

    if (filteredDbNames.length === 0 && lowerQuery.length > 0) {
        html = `<div class="search-result-empty">No supplements found.</div>`;
    } else {
         html = filteredDbNames.map(name => `
            <div class="search-result-item" data-dbname="${name.replace(/"/g, '&quot;')}">
                ${name}
            </div>
        `).join('');
    }

    // Add "Create" button if query is new and valid
    const exactMatchFound = allDbNames.some(name => name.toLowerCase() === lowerQuery);
    if (lowerQuery.length > 0 && !exactMatchFound) {
        // Sanitize query for HTML attribute
        const safeDbName = query.trim().replace(/"/g, '&quot;');
        html += `
            <div class="search-result-create-btn" data-dbname="${safeDbName}">
                + Create "${safeDbName}"
            </div>
        `;
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
}

/**
 * Creates a new, blank supplement configuration.
 * @param {string} dbName - The name for the new supplement.
 */
AppUI.createNewSupplement = function(dbName) {
    console.log(`Creating new supplement: ${dbName}`);
    
    // 1. Create the blank template
    const newDbConfig = {
        "baseProduct": {
            name: `${dbName} (Base)`,
            pitch: "Click the settings cog to edit this pitch."
        },
        "guaranteeDays": 60, // NEW
        "questions": [ // NEW: Add default questions for new supplements
            "How long have you been dealing with this?",
            "What other health conditions are you dealing with?",
            "What medications are you taking?",
            "What is your biggest health concern?"
        ],
        "recommendations": []
    };

    // 2. Add to the editedDatabases in memory
    appState.editedDatabases[dbName] = newDbConfig;

    // 3. Save to localStorage
    saveSettingsToStorage(); // This function lives in script.js

    // 4. Load the new DB
    // This will reset the call and update all UI
    loadSupplementDb(dbName); // This function lives in script.js
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

    DOM.scriptSearchResults.addEventListener('click', (e) => {
        // Check for click on a create button
        const createBtn = e.target.closest('.search-result-create-btn');
        if (createBtn) {
            const dbName = createBtn.dataset.dbname;
            if (dbName) {
                AppUI.createNewSupplement(dbName);
                // createNewSupplement will call loadSupplementDb, which
                // handles closing the search UI.
            }
            return; // Stop execution
        }

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
}
