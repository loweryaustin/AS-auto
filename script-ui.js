/**
 * ============================================
 * SCRIPT TOOL UI UTILITIES (V7.27.0)
 * ============================================
 * This file contains SHARED utility functions for formatting
 * and data manipulation.
 *
 * It is loaded *before* all other component .js files.
 * It exposes a single global object: AppUI.
 */

const AppUI = {};

// --- Utility Functions ---

/**
 * NEW (Moved from script.js): Helper to discover all unique product lines
 * from both default and edited databases.
 * Needed early for UI rendering.
 */
function getAvailableProductLines() {
    const lines = new Set();
    
    // Check if appState exists (it might not be fully initialized yet, but the objects should be there if loaded)
    if (typeof appState !== 'undefined') {
        // 1. Scan Defaults
        if (appState.allDatabaseDefaults) {
            Object.values(appState.allDatabaseDefaults).forEach(db => {
                lines.add(db.productLine || "General");
            });
        }

        // 2. Scan Edited (User created/modified)
        if (appState.editedDatabases) {
            Object.values(appState.editedDatabases).forEach(db => {
                lines.add(db.productLine || "General");
            });
        }
    }
    
    return Array.from(lines).sort();
}

/**
 * Merges two objects, with source overwriting target.
 */
AppUI.simpleDeepMerge = function(target, source) {
    let output = { ...target };
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                output[key] = AppUI.simpleDeepMerge(target[key] || {}, source[key]);
            } else {
                output[key] = source[key];
            }
        }
    }
    return output;
}

/**
 * Creates a deep copy of an object using JSON.
 */
AppUI.deepCopy = function(obj) {
    if (typeof obj === 'undefined' || obj === null) {
        console.error("Cannot deep copy undefined or null object.");
        return {};
    }
    try {
        return JSON.parse(JSON.stringify(obj));
    } catch (e) {
        console.error("Failed to deep copy object:", e, obj);
        return {};
    }
}

/**
 * Gets the price per bottle based on regimen length.
 */
AppUI.getPricePerBottle = function(months) {
    if (months >= 12) return 45;
    if (months >= 6) return 47;
    return 49;
}

/**
 * Formats an array of names into a human-readable list.
 */
AppUI.formatAddonList = function(names) {
    if (names.length === 0) return "no additional supplements";
    if (names.length === 1) return names[0];
    if (names.length === 2) return names.join(' and ');
    return names.slice(0, -1).join(', ') + ', and '.concat(names.slice(-1));
}

/**
 * Formats a list of addon objects with their quantities.
 */
AppUI.formatAddonListWithQuantities = function(addons) {
    if (!addons || addons.length === 0) return "";
    
    const formattedItems = addons.map(item => 
        `<strong class="text-yellow-400">${item.quantity}</strong> more of the <strong class="text-yellow-400">${item.name}</strong>`
    );

    if (formattedItems.length === 1) {
        return formattedItems[0];
    }
    
    if (formattedItems.length === 2) {
        return formattedItems.join(' and ');
    }
    
    // For 3 or more: "A, B, and C"
    return formattedItems.slice(0, -1).join(', ') + ', and ' + formattedItems.slice(-1);
}

/**
 * Formats an array of benefit strings into a script line.
 */
AppUI.formatBenefitsList = function(benefits) {
    if (benefits.length === 0) return "This regimen is designed to help your pancreas heal.";
    let benefitString = "Now, this is going to " + benefits.slice(0, -1).join(', ') + (benefits.length > 1 ? ', and ' : '') + benefits.slice(-1) + ".";
    return benefitString.charAt(0).toUpperCase() + benefitString.slice(1);
}

/**
 * Formats a number of seconds into MM:SS format.
 */
AppUI.formatTime = function(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

/**
 * Copies text to the clipboard and provides visual feedback on a button.
 */
AppUI.copyToClipboard = function(text, buttonElement, originalText, successText) {
    const tempTextarea = document.createElement('textarea');
    tempTextarea.style.position = 'absolute';
    tempTextarea.style.left = '-9999px';
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    let success = false;
    try {
        success = document.execCommand('copy');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
    document.body.removeChild(tempTextarea);

    if (success && buttonElement) {
        buttonElement.textContent = successText;
        const parentButton = buttonElement.closest('button');
        if (parentButton) parentButton.classList.add('bg-green-600');
        
        setTimeout(() => {
            buttonElement.textContent = originalText;
            if (parentButton) parentButton.classList.remove('bg-green-600');
        }, 2000);
    }
}

/**
 * Attaches event listeners for shared UI utilities (e.g., notes).
 */
AppUI.initUtilityEventListeners = function() {
    if (DOM.copyNotesBtn) {
        DOM.copyNotesBtn.addEventListener('click', () => {
            const fullNotes = DOM.generatedNotes.textContent + '\n\n' + DOM.customNotes.value;
            AppUI.copyToClipboard(fullNotes, DOM.copyNotesBtn.querySelector('span'), 'Copy Notes', 'Copied!');
        });
    }
}
