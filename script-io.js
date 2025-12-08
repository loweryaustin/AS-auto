/**
 * ============================================
 * SCRIPT TOOL I/O LOGIC (V7.3.2)
 * ============================================
 * This component handles all Import/Export modal UI,
 * file downloading, file uploading, and NEW database creation logic.
 *
 * It depends on:
 * - `appState`, `DOM` (global)
 * - `AppUI.copyToClipboard` (from script-ui.js)
 * - `loadState()`, `initAppUI()`, `loadSupplementDb()` (from script.js)
 * - `AppUI.createNewSupplement()` (from script-search.js)
 */

// --- Import/Export Functions ---

/**
 * Triggers a file download in the browser.
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
 */
AppUI.openImportModal = function(type) {
    DOM.importMessage.textContent = '';
    DOM.importMessage.className = 'import-message';
    DOM.importTextarea.value = '';

    if (type === 'app') {
        DOM.importModalTitle.textContent = 'Import App Settings';
        DOM.importModalDescription.textContent = 'Paste your exported App Settings JSON object below. This will overwrite your Agent Name and Timer Segments.';
        DOM.importConfirmBtn.dataset.importType = 'app';
    }
    
    DOM.importModal.classList.remove('hidden');
}

/**
 * Handles the logic when the "Import & Save" button is clicked (Text paste).
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
            
            DOM.importMessage.textContent = 'Success! Reloading application...';
            DOM.importMessage.classList.add('success');

            setTimeout(() => {
                loadState(); 
                initAppUI(); 
                DOM.importModal.classList.add('hidden');
                appState.isSettingsOpen = false;
                if (AppUI.renderSettingsModal) AppUI.renderSettingsModal(); 
            }, 1000);
        }

    } catch (e) {
        console.error("Import failed:", e);
        DOM.importMessage.textContent = `Error: ${e.message}.`;
        DOM.importMessage.classList.add('error');
    }
}

/**
 * Handles file selection for database import.
 */
AppUI.handleFileSelect = function(event, mode) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedJson = JSON.parse(e.target.result);
            AppUI.processDatabaseImport(importedJson, mode);
        } catch (err) {
            console.error("File parse error:", err);
            alert("Error parsing JSON file: " + err.message);
        }
        // Reset input value so change event fires again if same file selected
        event.target.value = ''; 
    };
    reader.readAsText(file);
}

/**
 * Processes the imported database JSON.
 */
AppUI.processDatabaseImport = function(dbData, mode) {
    // 1. Validation Schema
    if (!dbData.baseProduct || !dbData.baseProduct.name) {
        alert("Invalid Database File: Missing `baseProduct.name`.");
        return;
    }
    if (!Array.isArray(dbData.recommendations)) {
        alert("Invalid Database File: `recommendations` must be an array.");
        return;
    }
    if (!Array.isArray(dbData.questions)) {
        alert("Invalid Database File: `questions` must be an array.");
        return;
    }

    // Ensure guaranteeDays defaults if missing
    if (!dbData.guaranteeDays) dbData.guaranteeDays = 60;

    // 2. Logic Split
    if (mode === 'overwrite') {
        // --- OVERWRITE MODE ---
        const targetDbName = appState.currentDbName;
        
        // Confirm with user
        if (!confirm(`Are you sure you want to overwrite the current database "${targetDbName}" with the data from the file? This cannot be undone.`)) {
            return;
        }

        // Save to editedDatabases using CURRENT key
        appState.editedDatabases[targetDbName] = dbData;
        saveSettingsToStorage(); 
        
        // Reload
        loadSupplementDb(targetDbName);
        alert(`Successfully overwrote "${targetDbName}".`);
        
    } else if (mode === 'new') {
        // --- NEW DATABASE MODE ---
        let baseName = dbData.baseProduct.name.replace(' (Base)', '').trim();
        
        let finalName = baseName;
        let counter = 2;

        // Check for collisions in both defaults and edited
        while (appState.allDatabaseDefaults[finalName] || appState.editedDatabases[finalName]) {
            finalName = `${baseName} (${counter})`;
            counter++;
        }

        // Save new entry
        appState.editedDatabases[finalName] = dbData;
        
        // Update the internal name
        dbData.baseProduct.name = finalName + " (Base)";
        
        saveSettingsToStorage();
        
        // Load the new DB immediately
        loadSupplementDb(finalName);
        
        // Close modal if open
        DOM.settingsModal.classList.add('hidden');
        appState.isSettingsOpen = false;
        
        alert(`Successfully imported new database: "${finalName}".`);
    }
}

/**
 * NEW: Handles creating a brand new blank database.
 */
AppUI.handleCreateNewDatabase = function() {
    const dbName = prompt("Enter a name for the new supplement database:");
    
    if (dbName && dbName.trim() !== "") {
        const cleanName = dbName.trim();
        
        // Check for collisions
        if (appState.allDatabaseDefaults[cleanName] || appState.editedDatabases[cleanName]) {
            alert(`A database named "${cleanName}" already exists. Please choose a different name.`);
            return;
        }

        // Use the existing logic in script-search.js to create it
        if (AppUI.createNewSupplement) {
            AppUI.createNewSupplement(cleanName);
            
            // Close settings modal to show the new DB
            DOM.settingsModal.classList.add('hidden');
            appState.isSettingsOpen = false;
        } else {
            console.error("createNewSupplement function missing.");
        }
    }
}

/**
 * Exports the current app-level settings (agent, segments) as a JSON file.
 */
AppUI.exportAppSettings = function(e) {
    const exportString = JSON.stringify(appState.settings, null, 2); 
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
 */
AppUI.handleDatabaseExport = function(e) {
    const dbName = appState.currentDbName;
    const buttonElement = e.currentTarget;
    const originalText = buttonElement.textContent;

    if (e.shiftKey) {
        // --- SHIFT-CLICK: Copy .js file ---
        const dbObjectString = JSON.stringify(appState.supplementDatabase, null, 4);
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
        const dbObjectString = JSON.stringify(appState.supplementDatabase, null, 4); 
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
    // App Settings
    const exportAppBtn = document.getElementById('export-app-settings-btn');
    if (exportAppBtn) exportAppBtn.addEventListener('click', (e) => AppUI.exportAppSettings(e));
    
    const importAppBtn = document.getElementById('import-app-settings-btn');
    if (importAppBtn) importAppBtn.addEventListener('click', () => AppUI.openImportModal('app'));

    // Database Export
    const exportDbBtn = document.getElementById('export-db-btn');
    if (exportDbBtn) exportDbBtn.addEventListener('click', (e) => AppUI.handleDatabaseExport(e));

    // Database Overwrite
    const overwriteBtn = document.getElementById('overwrite-db-btn');
    const overwriteInput = document.getElementById('file-input-overwrite');
    if (overwriteBtn && overwriteInput) {
        overwriteBtn.addEventListener('click', () => overwriteInput.click());
        overwriteInput.addEventListener('change', (e) => AppUI.handleFileSelect(e, 'overwrite'));
    }

    // Database New Upload
    const uploadNewBtn = document.getElementById('upload-new-db-btn');
    const uploadNewInput = document.getElementById('file-input-new');
    if (uploadNewBtn && uploadNewInput) {
        uploadNewBtn.addEventListener('click', () => uploadNewInput.click());
        uploadNewInput.addEventListener('change', (e) => AppUI.handleFileSelect(e, 'new'));
    }
    
    // NEW: Create Blank Database
    const createBlankBtn = document.getElementById('create-blank-db-btn');
    if (createBlankBtn) {
        createBlankBtn.addEventListener('click', AppUI.handleCreateNewDatabase);
    }

    // Import Modal Listeners (for text paste)
    DOM.importModalCloseBtn.addEventListener('click', () => DOM.importModal.classList.add('hidden'));
    DOM.importCancelBtn.addEventListener('click', () => DOM.importModal.classList.add('hidden'));
    DOM.importConfirmBtn.addEventListener('click', AppUI.handleImport);
}
