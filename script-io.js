/**
 * ============================================
 * SCRIPT TOOL I/O LOGIC (V5.0.0)
 * ============================================
 * This component handles all Import/Export modal UI,
 * file downloading, and copy-to-clipboard helpers.
 *
 * It depends on:
 * - `appState`, `DOM` (global)
 * - `AppUI.copyToClipboard` (from script-ui.js)
 * - `loadState()`, `initAppUI()` (from script.js)
 */

// --- Import/Export Functions ---

/**
 * Triggers a file download in the browser.
 * @param {string} filename - The desired name of the file.
 * @param {string} content - The text content of the file.
 * @param {string} contentType - The MIME type (e.g., 'application/json').
 */
AppUI.downloadFile = function(filename, content, contentType) {
    const a = document.createElement('a');
    const blob = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
}

/**
 * Opens the import modal and configures it for the specific import type.
 * @param {'app' | 'db'} type - The type of import being performed.
 */
AppUI.openImportModal = function(type) {
    DOM.importMessage.textContent = '';
    DOM.importMessage.className = 'import-message';
    DOM.importTextarea.value = '';

    if (type === 'app') {
        DOM.importModalTitle.textContent = 'Import App Settings';
        DOM.importModalDescription.textContent = 'Paste your exported App Settings JSON object below. This will overwrite your Agent Name and Timer Segments.';
        DOM.importConfirmBtn.dataset.importType = 'app';
    } else if (type === 'db') {
        DOM.importModalTitle.textContent = `Import/Overwrite "${appState.currentDbName}"`;
        DOM.importModalDescription.textContent = `Paste your exported Database JSON object below. This will overwrite all data for the "${appState.currentDbName}" supplement.`;
        DOM.importConfirmBtn.dataset.importType = 'db';
    }
    
    DOM.importModal.classList.remove('hidden');
}

/**
 * Handles the logic when the "Import & Save" button is clicked.
 * Parses the text and saves to the correct localStorage key.
 */
AppUI.handleImport = function() {
    let rawText = DOM.importTextarea.value.trim();
    DOM.importMessage.textContent = '';
    DOM.importMessage.className = 'import-message';
    const importType = DOM.importConfirmBtn.dataset.importType;

    try {
        const importedJson = JSON.parse(rawText);
        
        if (importType === 'app') {
            if (!importedJson.agentName || !importedJson.segments) {
                throw new Error('Invalid App Settings object. Missing `agentName` or `segments` keys.');
            }
            // Import App Settings
            localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(importedJson));
            
        } else if (importType === 'db') {
            // Check for V4.0.0+ structure
            if (!importedJson.baseProduct || !importedJson.recommendations || !importedJson.questions || !importedJson.guaranteeDays) {
                // Check for pre-V4.0.0 structure
                if (importedJson.baseProduct && importedJson.recommendations && importedJson.questions) {
                    importedJson.guaranteeDays = 60; // Add default guarantee
                } else {
                    throw new Error('Invalid Database object. Missing `baseProduct`, `recommendations`, or `questions` keys.');
                }
            }
            // Import Database Settings
            appState.editedDatabases[appState.currentDbName] = importedJson;
            localStorage.setItem(EDITED_DATABASES_KEY, JSON.stringify(appState.editedDatabases));
        }

        DOM.importMessage.textContent = 'Success! Reloading application...';
        DOM.importMessage.classList.add('success');

        // Reload the app with new settings
        setTimeout(() => {
            loadState(); // This function lives in script.js
            initAppUI(); // This function lives in script.js
            DOM.importModal.classList.add('hidden');
            appState.isSettingsOpen = false;
            // Need to re-render settings modal if it was open
            if (AppUI.renderSettingsModal) AppUI.renderSettingsModal(); 
        }, 1000);

    } catch (e) {
        console.error("Import failed:", e);
        DOM.importMessage.textContent = `Error: ${e.message}. Please check console.`;
        DOM.importMessage.classList.add('error');
    }
}

/**
 * Exports the current app-level settings (agent, segments) as a JSON file.
 * @param {Event} e - The click event.
 */
AppUI.exportAppSettings = function(e) {
    const exportString = JSON.stringify(appState.settings, null, 2); // pretty print
    const filename = `AS-Auto-Settings-v${APP_VERSION}.json`;
    
    AppUI.downloadFile(filename, exportString, 'application/json');

    const buttonElement = e.currentTarget;
    const originalText = buttonElement.textContent;
    buttonElement.textContent = 'Downloaded!';
    buttonElement.classList.add('bg-green-600');
    setTimeout(() => {
        buttonElement.textContent = originalText;
        buttonElement.classList.remove('bg-green-600');
    }, 2000);
}

/**
 * Exports the *currently active* supplement database.
 * Normal Click: Downloads a .json file.
 * Shift-Click: Copies a .js file (for developers) to the clipboard.
 * @param {Event} e - The click event.
 */
AppUI.handleDatabaseExport = function(e) {
    const dbName = appState.currentDbName;
    const buttonElement = e.currentTarget;
    const originalText = buttonElement.textContent;

    if (e.shiftKey) {
        // --- SHIFT-CLICK: Copy .js file to clipboard ---
        
        const dbObjectString = JSON.stringify(appState.supplementDatabase, null, 4); // "pretty print"
        
        const fileContent = `/**
 * ${dbName}
 * Database file for the "${dbName}" supplement.
 * This file "self-registers" into the global DATABASE_CONFIGS object.
 */
DATABASE_CONFIGS["${dbName}"] = ${dbObjectString};
`;
        AppUI.copyToClipboard(fileContent, buttonElement, originalText, 'Copied .js File!');

    } else {
        // --- NORMAL CLICK: Download .json file ---
        const dbObjectString = JSON.stringify(appState.supplementDatabase, null, 4); // "pretty print"
        const filename = `AS-Auto-DB-${dbName.replace(/ /g, '_')}-v${APP_VERSION}.json`;

        AppUI.downloadFile(filename, dbObjectString, 'application/json');

        buttonElement.textContent = 'Downloaded!';
        buttonElement.classList.add('bg-green-600');
        setTimeout(() => {
            buttonElement.textContent = originalText;
            buttonElement.classList.remove('bg-green-600');
        }, 2000);
    }
}

/**
 * Attaches event listeners for the I/O component.
 */
AppUI.initIOEventListeners = function() {
    DOM.exportAppSettingsBtn.addEventListener('click', (e) => AppUI.exportAppSettings(e));
    DOM.exportDbBtn.addEventListener('click', (e) => AppUI.handleDatabaseExport(e));
    DOM.importAppSettingsBtn.addEventListener('click', () => AppUI.openImportModal('app'));
    DOM.importDbBtn.addEventListener('click', () => AppUI.openImportModal('db'));

    // Import Modal Listeners
    DOM.importModalCloseBtn.addEventListener('click', () => DOM.importModal.classList.add('hidden'));
    DOM.importCancelBtn.addEventListener('click', () => DOM.importModal.classList.add('hidden'));
    DOM.importConfirmBtn.addEventListener('click', AppUI.handleImport);
}
