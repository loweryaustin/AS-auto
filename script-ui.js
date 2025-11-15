/**
 * ============================================
 * SCRIPT TOOL UI UTILITIES (V5.0.0)
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
 * Merges two objects, with source overwriting target.
 * @param {object} target - The base object.
 * @param {object} source - The object with new properties.
 * @returns {object} - The merged object.
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
 * @param {object} obj - The object to copy.
 * @returns {object} - The copied object.
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
 * @param {number} months - The regimen length in months.
 * @returns {number} - The price per bottle.
 */
AppUI.getPricePerBottle = function(months) {
    if (months >= 12) return 45;
    if (months >= 6) return 47;
    return 49;
}

/**
 * Formats an array of names into a human-readable list.
 * e.g., ["A", "B", "C"] -> "A, B, and C"
 * @param {Array<string>} names - The array of names.
 * @returns {string} - The formatted string.
 */
AppUI.formatAddonList = function(names) {
    if (names.length === 0) return "no additional supplements";
    if (names.length === 1) return names[0];
    if (names.length === 2) return names.join(' and ');
    return names.slice(0, -1).join(', ') + ', and '.concat(names.slice(-1));
}

/**
 * Formats a list of addon objects with their quantities.
 * @param {Array<Object>} addons - e.g., [{name: "A", quantity: 12}, {name: "B", quantity: 6}]
 * @returns {string} - e.g., "12 more of the A and 6 more of the B"
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
 * @param {Array<string>} benefits - The array of benefits.
 * @returns {string} - The formatted script line.
 */
AppUI.formatBenefitsList = function(benefits) {
    if (benefits.length === 0) return "This regimen is designed to help your pancreas heal.";
    let benefitString = "Now, this is going to " + benefits.slice(0, -1).join(', ') + (benefits.length > 1 ? ', and ' : '') + benefits.slice(-1) + ".";
    return benefitString.charAt(0).toUpperCase() + benefitString.slice(1);
}

/**
 * Formats a number of seconds into MM:SS format.
 * @param {number} seconds - The time in seconds.
 * @returns {string} - The formatted time string.
 */
AppUI.formatTime = function(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

/**
 * Copies text to the clipboard and provides visual feedback on a button.
 * @param {string} text - The text to copy.
 * @param {HTMLElement} buttonElement - The inner element (span) of the button to update.
 * @param {string} originalText - The default text of the button.
 * @param {string} successText - The text to show on success.
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
        // Find the parent button to change its color
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
    DOM.copyNotesBtn.addEventListener('click', () => {
        const fullNotes = DOM.generatedNotes.textContent + '\n\n' + DOM.customNotes.value;
        AppUI.copyToClipboard(fullNotes, DOM.copyNotesBtn.querySelector('span'), 'Copy Notes', 'Copied!');
    });
}
