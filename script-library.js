/**
 * ============================================
 * SCRIPT TOOL LIBRARY COMPONENT (V7.6.0)
 * ============================================
 * This component handles "Cross-Database" operations,
 * specifically the ability to scan other product lines/databases
 * and clone supplements into the current one.
 *
 * It depends on:
 * - `appState` (global)
 * - `AppUI.deepCopy` (script-ui.js)
 */

const AppLibrary = {};

/**
 * Returns a list of all database names (keys) that belong to a specific Product Line.
 * @param {string} lineName - The product line to filter by (e.g., "General Health").
 * @returns {Array<string>} - Array of database names.
 */
AppLibrary.getDatabasesInLine = function(lineName) {
    const dbNames = new Set();

    // 1. Scan Defaults
    Object.entries(appState.allDatabaseDefaults).forEach(([key, db]) => {
        if ((db.productLine || "General") === lineName) {
            dbNames.add(key);
        }
    });

    // 2. Scan Edited
    Object.entries(appState.editedDatabases).forEach(([key, db]) => {
        if ((db.productLine || "General") === lineName) {
            dbNames.add(key);
        }
    });

    return Array.from(dbNames).sort();
}

/**
 * Returns the list of recommendations (supplements) for a specific database.
 * Handles merging defaults with edited versions to ensure we get the latest data.
 * @param {string} dbName - The name of the database.
 * @returns {Array<Object>} - Array of supplement objects.
 */
AppLibrary.getSupplementsFromDb = function(dbName) {
    let defaultConfig = appState.allDatabaseDefaults[dbName];
    let editedConfig = appState.editedDatabases[dbName];

    // V7.3.11 FIX: Handle case where defaultConfig is undefined (User-created DB)
    const baseConfig = defaultConfig ? AppUI.deepCopy(defaultConfig) : {};
    
    // Merge to get the most up-to-date version of that DB
    const mergedDb = AppUI.simpleDeepMerge(baseConfig, editedConfig || {});
    
    return mergedDb.recommendations || [];
}

/**
 * NEW (V7.6.0): Returns a flat list of ALL supplements in a product line,
 * tagged with their source database name. Sorted by Supplement Name.
 * @param {string} lineName - The product line to scan.
 * @returns {Array<Object>} - Array of supplement objects with an added `sourceDb` property.
 */
AppLibrary.getAllSupplementsInLine = function(lineName) {
    const allSupplements = [];
    const dbNames = AppLibrary.getDatabasesInLine(lineName);

    dbNames.forEach(dbName => {
        const supps = AppLibrary.getSupplementsFromDb(dbName);
        supps.forEach(supp => {
            // Clone first to avoid mutating the original reference
            const suppEntry = AppUI.deepCopy(supp);
            suppEntry.sourceDb = dbName; // Tag it
            allSupplements.push(suppEntry);
        });
    });

    // Sort by Name, then by Source DB (for grouping duplicates)
    allSupplements.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        
        // If names are equal, sort by source DB
        const sourceA = a.sourceDb.toLowerCase();
        const sourceB = b.sourceDb.toLowerCase();
        if (sourceA < sourceB) return -1;
        if (sourceA > sourceB) return 1;
        return 0;
    });

    return allSupplements;
}

/**
 * Deep copies a supplement object and REGENERATES unique IDs
 * for the supplement itself and all its symptoms.
 * This is crucial to prevent ID collisions when importing.
 * * @param {Object} sourceSupp - The supplement object to clone.
 * @returns {Object} - The new, safe-to-import supplement object.
 */
AppLibrary.cloneSupplement = function(sourceSupp) {
    if (!sourceSupp) return null;

    // 1. Deep copy the object to break references
    const newSupp = AppUI.deepCopy(sourceSupp);

    // 2. Regenerate Supplement ID
    const newSuppId = `supp-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
    newSupp.id = newSuppId;

    // 3. Regenerate Symptom IDs
    if (newSupp.symptoms && Array.isArray(newSupp.symptoms)) {
        newSupp.symptoms.forEach(symp => {
            const newSympId = `symp-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
            symp.id = newSympId;
        });
    }

    // Remove internal properties if they exist
    delete newSupp.sourceDb;

    return newSupp;
}
