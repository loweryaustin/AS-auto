/**
 * ============================================
 * SCRIPT TOOL APPLICATION LOGIC (V6.5.0)
 * ============================================
 * This is the main "controller" file.
 * It handles state, core logic, and event listeners.
 *
 * It orchestrates all components:
 * - `AppUI` (script-ui.js)
 * - `AppUI.initTimerEventListeners` (script-timer.js)
 * - `AppUI.initSettingsEventListeners` (script-settings.js)
 * - `AppUI.initSearchEventListeners` (script-search.js)
 * - `AppUI.initIOEventListeners` (script-io.js)
 * - `AppUI.initOrderEditorEventListeners` (script-order-editor.js)
 * - `AppUI.initReferenceEventListeners` (script-references.js)
 */

// --- App State ---

// Version-gated localStorage keys.
// SCRIPT_VERSION is injected by build.sh
const APP_VERSION = typeof SCRIPT_VERSION !== 'undefined' ? SCRIPT_VERSION : 'dev';
const APP_SETTINGS_KEY = `appSettings_${APP_VERSION}`;
const EDITED_DATABASES_KEY = `editedDatabases_${APP_VERSION}`;
const LAST_DB_NAME_KEY = `lastDbName_${APP_VERSION}`;

// This will be populated by loadState()
let appState = {
    settings: {},           // Holds agentName, segments
    allDatabaseDefaults: {}, // Holds the original, default DBs
    editedDatabases: {},     // Holds user-edited DBs from localStorage
    supplementDatabase: {},  // The *currently active* supplement DB
    currentDbName: null,     // The key of the currently active DB
    onlineOrder: [],         // Holds {name, quantity} objects
    currentSegmentIndex: -1,
    globalTimerInterval: null,
    isSettingsOpen: false,
    isSearching: false,
    isReferenceModalOpen: false // Still needed for global state
};

// --- Module-level drag variables ---
let draggedSymptomGroup = null;
let lastDragOverSymptomGroup = null;

// --- DOM CACHE (Query once) ---
// This object is shared with all component files
const DOM = {};
function cacheDOMElements() {
    // Core App
    DOM.regimenLengthSelect = document.getElementById('regimen-length');
    DOM.authoRegimenLengthSelect = document.getElementById('autho-regimen-length'); 
    DOM.genderSelect = document.getElementById('gender');
    DOM.clientNameInput = document.getElementById('client-name');
    DOM.clientNamePlaceholders = document.querySelectorAll('.client-name-placeholder');
    DOM.agentNamePlaceholders = document.querySelectorAll('.agent-name-placeholder');
    DOM.agentPhonePlaceholder = document.getElementById('agent-phone-placeholder');
    DOM.dynamicPitchContent = document.getElementById('dynamic-pitch-content');
    DOM.dynamicBenefitsList = document.getElementById('dynamic-benefits-list');
    DOM.symptomChecklistContainer = document.getElementById('symptom-checklist-container');
    DOM.dynamicRecommendations = document.getElementById('dynamic-recommendations');
    DOM.sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    DOM.baseProductNameSidebar = document.getElementById('base-product-name-sidebar');
    DOM.baseProductPitchSidebar = document.getElementById('base-product-pitch-sidebar');
    DOM.baseProductNameScriptPlaceholders = document.querySelectorAll('.base-product-name-script');
    DOM.discoveryQuestionsList = document.getElementById('discovery-questions-list');
    DOM.guaranteeDays1 = document.getElementById('guarantee-days-1');
    DOM.guaranteeDays2 = document.getElementById('guarantee-days-2');
    DOM.orderBreakdownCompletionWording = document.getElementById('order-breakdown-completion-wording');
    
    // Notes (Shared Utility)
    DOM.generatedNotes = document.getElementById('generated-notes');
    DOM.customNotes = document.getElementById('custom-notes');
    DOM.copyNotesBtn = document.getElementById('copy-notes-btn');

    // Timer
    DOM.floatingTimerBar = document.getElementById('floating-timer-bar');
    DOM.startTimerManualBtn = document.getElementById('start-timer-manual-btn');
    DOM.timerSegments = []; // Array to hold timer segment DOM elements
    
    // Settings
    DOM.settingsCogBtn = document.getElementById('settings-cog-btn');
    DOM.settingsModal = document.getElementById('settings-modal');
    DOM.settingsCloseBtn = document.getElementById('settings-close-btn');
    DOM.agentNameSettingInput = document.getElementById('agent-name-setting');
    DOM.segmentSettingsList = document.getElementById('segment-settings-list');
    DOM.addSegmentBtn = document.getElementById('add-segment-btn');
    DOM.questionsEditorList = document.getElementById('questions-editor-list');
    DOM.addQuestionBtn = document.getElementById('add-question-btn');
    DOM.baseProductNameSetting = document.getElementById('base-product-name-setting');
    DOM.baseProductPitchSetting = document.getElementById('base-product-pitch-setting');
    DOM.baseProductGuaranteeSetting = document.getElementById('base-product-guarantee-setting');
    DOM.supplementSettingsList = document.getElementById('supplement-settings-list');
    DOM.addSupplementBtn = document.getElementById('add-supplement-btn');
    DOM.resetToDefaultsBtn = document.getElementById('reset-to-defaults-btn');
    DOM.settingsWarningBox = document.getElementById('settings-warning-box');
    DOM.currentDbNameDisplay = document.getElementById('current-db-name-display');
    
    // NEW: Quick Edit Modal Elements
    DOM.quickEditModal = document.getElementById('quick-edit-modal');
    DOM.quickEditTitle = document.getElementById('quick-edit-title');
    DOM.quickEditContent = document.getElementById('quick-edit-content');
    DOM.quickEditCloseBtn = document.getElementById('quick-edit-close-btn');

    // Reset Modals
    DOM.resetAppBtn = document.getElementById('reset-app-btn');
    DOM.resetConfirmModal = document.getElementById('reset-confirm-modal');
    DOM.resetConfirmBtn = document.getElementById('reset-confirm-btn');
    DOM.resetCancelBtn = document.getElementById('reset-cancel-btn');
    DOM.resetDefaultsConfirmModal = document.getElementById('reset-defaults-confirm-modal');
    DOM.resetDefaultsConfirmBtn = document.getElementById('reset-defaults-confirm-btn');
    DOM.resetDefaultsCancelBtn = document.getElementById('reset-defaults-cancel-btn');
    
    // Import/Export
    DOM.exportAppSettingsBtn = document.getElementById('export-app-settings-btn');
    DOM.importAppSettingsBtn = document.getElementById('import-app-settings-btn');
    DOM.exportDbBtn = document.getElementById('export-db-btn');
    DOM.importDbBtn = document.getElementById('import-db-btn');
    DOM.importModal = document.getElementById('import-modal');
    DOM.importModalTitle = document.getElementById('import-modal-title');
    DOM.importModalDescription = document.getElementById('import-modal-description');
    DOM.importModalCloseBtn = document.getElementById('import-modal-close-btn');
    DOM.importTextarea = document.getElementById('import-textarea');
    DOM.importConfirmBtn = document.getElementById('import-confirm-btn');
    DOM.importCancelBtn = document.getElementById('import-cancel-btn');
    DOM.importMessage = document.getElementById('import-message');

    // Title Search
    DOM.titleSearchContainer = document.getElementById('title-search-container');
    DOM.scriptTitleDisplay = document.getElementById('script-title-display');
    DOM.titleClickWrapper = document.getElementById('title-click-wrapper');
    DOM.titleSearchNote = document.getElementById('title-search-note');
    DOM.scriptSearchInput = document.getElementById('script-search-input');
    DOM.scriptSearchResults = document.getElementById('script-search-results');

    // Online Order Editor
    DOM.onlineOrderEditor = document.getElementById('online-order-editor');
    DOM.onlineOrderList = document.getElementById('online-order-list');
    DOM.onlineOrderSearch = document.getElementById('online-order-search');
    DOM.onlineOrderSearchResults = document.getElementById('online-order-search-results');
    DOM.orderBreakdownOnlinePart = document.getElementById('order-breakdown-online-part');
    DOM.authoScriptOnlinePart = document.getElementById('autho-script-online-part');
    
    // NEW: Cache elements for the Reference component
    AppUI.cacheReferenceDOMElements();
}


// --- State Management Functions ---

/**
 * Loads the application state from defaults and localStorage.
 * Populates `appState`.
 */
function loadState() {
    // 1. Load default app settings and merge saved app settings
    let savedAppSettings = {};
    try {
        savedAppSettings = JSON.parse(localStorage.getItem(APP_SETTINGS_KEY)) || {};
    } catch (e) {
        console.error("Failed to parse saved appSettings:", e);
    }
    appState.settings = AppUI.simpleDeepMerge(AppUI.deepCopy(APP_CONFIG), savedAppSettings);
    appState.settings.segments.forEach(s => {
        s.state = 'pending'; s.progress = 0; s.overtime = 0; s.startTime = null;
    });

    // 2. Load all default supplement databases
    appState.allDatabaseDefaults = AppUI.deepCopy(DATABASE_CONFIGS);

    // 3. Load all *edited* supplement databases
    try {
        appState.editedDatabases = JSON.parse(localStorage.getItem(EDITED_DATABASES_KEY)) || {};
    } catch (e) {
        console.error("Failed to parse saved editedDatabases:", e);
        appState.editedDatabases = {};
    }

    // 4. Load the last used supplement
    const defaultDbName = Object.keys(appState.allDatabaseDefaults)[0]; // Fallback to the first DB
    const lastDbName = localStorage.getItem(LAST_DB_NAME_KEY) || defaultDbName;
    
    // 5. Load the active supplement config
    loadSupplementDb(lastDbName, false); // false = don't reset call
}

/**
 * Loads a specific supplement database into the active state.
 * @param {string} dbName - The key of the database to load (e.g., "GL Pro")
 * @param {boolean} [resetCall=true] - Whether to reset the call state (timer, client name, etc.)
 */
function loadSupplementDb(dbName, resetCall = true) {
    appState.isSearching = false; // Close search on load
    
    // Check default DBs
    let defaultConfig = appState.allDatabaseDefaults[dbName];
    // If not in defaults, check edited DBs (for user-created ones)
    let editedConfig = appState.editedDatabases[dbName];
    
    if (!defaultConfig && !editedConfig) {
        console.error(`Database "${dbName}" not found. Loading first available.`);
        dbName = Object.keys(appState.allDatabaseDefaults)[0];
        defaultConfig = appState.allDatabaseDefaults[dbName];
        editedConfig = appState.editedDatabases[dbName]; // May be undefined, that's fine
    }
    
    // Merge edited version over the default
    // If defaultConfig is null (user-created), it just uses the editedConfig
    appState.supplementDatabase = AppUI.simpleDeepMerge(AppUI.deepCopy(defaultConfig) || {}, editedConfig || {});
    appState.currentDbName = dbName;
    localStorage.setItem(LAST_DB_NAME_KEY, dbName);

    // Guardrail for old data that might be missing the questions key
    if (!appState.supplementDatabase.questions) {
        appState.supplementDatabase.questions = []; // Add it if it's missing
    }
    
    // Guardrail for old data that might be missing guaranteeDays
    if (!appState.supplementDatabase.guaranteeDays) {
        appState.supplementDatabase.guaranteeDays = 60; // Add it if it's missing
    }
    
    // NEW: Guardrail for old data that might be missing references
    if (!appState.supplementDatabase.references) {
        appState.supplementDatabase.references = []; // Add it if it's missing
    } else {
        // NEW: Guardrail for references missing new properties
        appState.supplementDatabase.references.forEach(ref => {
            if (!ref.icon) ref.icon = 'book';
            if (!ref.type) ref.type = 'website';
            if (!ref.id) ref.id = `ref-${Date.now()}-${Math.random()}`;
        });
    }

    // Set default online order
    // This MUST happen after supplementDatabase is set
    appState.onlineOrder = [
        { name: appState.supplementDatabase.baseProduct.name.replace(' (Base)', ''), quantity: 6 }
    ];

    // Manually calling render functions in order
    
    // 1. Render the title and sidebar
    updateSupplementWordingUI();
    
    // 1b. NEW: Render reference buttons (from script-references.js)
    AppUI.renderReferenceSidebar();

    // 2. Render the new discovery questions
    renderDiscoveryQuestions();
    
    // 3. Render the new symptom checklist
    renderSymptomChecklist();
    
    // 4. Render the Online Order Editor
    AppUI.renderOnlineOrderEditor();
    
    // 5. Render the script (costs, wording, etc.)
    renderAllScript();

    if (resetCall) {
        resetForNextCall();
    }
}

/**
 * Saves the current `appState.settings` and `appState.editedDatabases`
 * to localStorage.
 */
function saveSettingsToStorage() {
    try {
        // 1. Save app-level settings (agent, segments)
        appState.settings.agentName = appState.settings.agentName;
        appState.settings.segments = appState.settings.segments;
        localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(appState.settings));

        // 2. Save the *currently edited* supplement DB
        appState.editedDatabases[appState.currentDbName] = appState.supplementDatabase;
        localStorage.setItem(EDITED_DATABASES_KEY, JSON.stringify(appState.editedDatabases));

    } catch (e) {
        console.error("Failed to save settings to localStorage:", e);
    }
}

// --- Core UI Update Functions ---

/**
 * Updates the Agent Name placeholders in the script.
 */
function updateAgentNameUI() {
    const displayName = appState.settings.agentName || "[Agent Name]";
    DOM.agentNamePlaceholders.forEach(el => el.textContent = displayName);
}

/**
 * Updates supplement-specific wording in the script and sidebar.
 */
function updateSupplementWordingUI() {
    // This function now just updates wording in the script/sidebar
    // The title itself is handled by AppUI.renderTitleUI()
    const baseProduct = appState.supplementDatabase.baseProduct;
    const baseProductName = baseProduct.name.replace(' (Base)', '');

    // Update title (calls function in script-search.js)
    AppUI.renderTitleUI();
    
    // Update sidebar
    DOM.baseProductNameSidebar.textContent = baseProduct.name;
    DOM.baseProductPitchSidebar.textContent = baseProduct.pitch;
    
    // Update all placeholders in the main script
    DOM.baseProductNameScriptPlaceholders.forEach(el => {
        el.textContent = baseProductName;
    });
}

/**
 * Updates the Client Name placeholders in the script.
 * @param {string} name - The client's name.
 */
function updateClientName(name) {
    const displayName = name || "[Client Name]";
    DOM.clientNamePlaceholders.forEach(el => el.textContent = displayName);
}

/**
 * Toggles the visibility of the manual timer start button.
 */
function updateTimerControlsVisibility() {
    DOM.startTimerManualBtn.classList.toggle('hidden', appState.currentSegmentIndex !== -1);
}

// --- Symptom Checklist Rendering ---

// REMOVED: renderReferenceSidebar (moved to script-references.js)

/**
 * Renders the list of discovery questions in Part 2.
 */
function renderDiscoveryQuestions() {
    DOM.discoveryQuestionsList.innerHTML = ''; // Clear existing
    if (!appState.supplementDatabase.questions || appState.supplementDatabase.questions.length === 0) {
        DOM.discoveryQuestionsList.innerHTML = '<li class="text-gray-400 italic">No discovery questions configured.</li>';
        return;
    }

    appState.supplementDatabase.questions.forEach(question => {
        const li = document.createElement('li');
        li.textContent = question;
        DOM.discoveryQuestionsList.appendChild(li);
    });
}

/**
 * Renders the symptom checklist in Part 2 based on
 * the selected gender and active database.
 */
function renderSymptomChecklist() {
    const selectedGender = DOM.genderSelect.value;
    DOM.symptomChecklistContainer.innerHTML = '';
    
    if (!appState.supplementDatabase || !appState.supplementDatabase.recommendations) {
        DOM.symptomChecklistContainer.innerHTML = `<p class="italic text-gray-400">No supplement data loaded.</p>`;
        return;
    }

    const filteredSupplements = appState.supplementDatabase.recommendations.filter(supp => {
        return supp.gender === 'any' || supp.gender === selectedGender;
    });

    if (filteredSupplements.length === 0) {
        DOM.symptomChecklistContainer.innerHTML = `<p class="italic text-gray-400">No supplements match the selected gender.</p>`;
        return;
    }

    filteredSupplements.forEach(supp => {
        if (!supp.symptoms || supp.symptoms.length === 0) return; // Robustness check

        const groupEl = document.createElement('div');
        groupEl.className = 'symptom-group-container';
        groupEl.dataset.suppId = supp.id; // Add data-id for drag-and-drop

        // MODIFIED: Wrapped the SVG in a larger, draggable div
        // MODIFIED V6.5.0: Added Quick Edit Cog button
        groupEl.innerHTML = `
            <h4 class="symptom-group-header flex justify-between items-center">
                <span>${supp.name}</span>
                <div class="flex items-center gap-2">
                    <button class="quick-edit-btn text-gray-500 hover:text-white transition-colors p-1 rounded" data-supp-id="${supp.id}" title="Quick Edit">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826 3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                    <div draggable="true" class="drag-handle-main h-8 w-8 flex items-center justify-center rounded-md text-gray-500 cursor-grab hover:text-white transition-colors">
                        <svg class="h-6 w-6 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </div>
            </h4>`;

        const symptomsList = document.createElement('div');
        symptomsList.className = 'space-y-3';

        supp.symptoms.forEach(symp => {
            const label = document.createElement('label');
            label.className = 'flex items-start p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition cursor-pointer';
            const checkboxId = `checkbox-${supp.id}-${symp.id}`;
            label.htmlFor = checkboxId;
            
            label.innerHTML = `
                <input type="checkbox" 
                       class="script-checkbox h-6 w-6 rounded text-blue-500 bg-gray-800 border-gray-600 focus:ring-blue-500 mt-1"
                       id="${checkboxId}"
                       data-supplement-id="${supp.id}"
                       data-symptom-id="${symp.id}">
                <span class="ml-3 text-lg text-gray-200">${symp.text}</span>
            `;
            symptomsList.appendChild(label);
        });

        groupEl.appendChild(symptomsList);
        DOM.symptomChecklistContainer.appendChild(groupEl);
    });
}

// --- Main Script Rendering Function ---

/**
 * This is the "heart" of the app. It reads all inputs (symptoms,
 * regimen length, online order) and calculates the final
 * script, pricing, and sidebar.
 */
function renderAllScript() {
    // Gracefully handle missing baseProduct
    if (!appState.supplementDatabase || !appState.supplementDatabase.baseProduct) {
        console.error("RenderAllScript: supplementDatabase.baseProduct is missing. Cannot render.");
        return; // Stop execution
    }
    const months = parseInt(DOM.regimenLengthSelect.value, 10);
    const mainSuppName = appState.supplementDatabase.baseProduct.name.replace(' (Base)', '');
    const pricePerBottle = AppUI.getPricePerBottle(months);
    const guaranteeDays = appState.supplementDatabase.guaranteeDays || 60;

    DOM.authoRegimenLengthSelect.value = months;

    const activeSupplementIds = new Set();
    const checkedBoxes = DOM.symptomChecklistContainer.querySelectorAll('.script-checkbox:checked');
    
    // REFACTOR V4.2.0: Group symptoms by supplement
    const groupedActiveSymptoms = {};

    checkedBoxes.forEach(cb => {
        const suppId = cb.dataset.supplementId;
        const sympId = cb.dataset.symptomId;
        activeSupplementIds.add(suppId);
        
        const supp = appState.supplementDatabase.recommendations.find(s => s.id === suppId);
        if (!supp) return;
        const symp = supp.symptoms.find(s => s.id === sympId);
        if (!symp) return;

        // Initialize group if it doesn't exist
        if (!groupedActiveSymptoms[suppId]) {
            groupedActiveSymptoms[suppId] = {
                suppName: supp.name,
                symptoms: []
            };
        }
        
        // Add symptom data to its supplement group
        groupedActiveSymptoms[suppId].symptoms.push({
            checkboxId: cb.id,
            sympText: symp.text,
            sympPitch: symp.pitch,
            sympBenefit: symp.benefit
        });
    });

    const activeRecommendations = appState.supplementDatabase.recommendations.filter(supp => 
        activeSupplementIds.has(supp.id)
    );
    // NEW: We no longer sort this, we respect the array's order
    // activeRecommendations.sort((a, b) => a.name.localeCompare(b.name));
    
    // Get ALL addon names selected in checklist (for pitch)
    let addonNames = activeRecommendations.map(rec => rec.name.replace(/\(.*\)/, '').trim());
    let addonListString = AppUI.formatAddonList(addonNames);

    // --- NEW PRICING LOGIC ---
    // Find how many base supplement bottles were in the online order
    const onlineBottlesOrdered = appState.onlineOrder.find(item => item.name === mainSuppName)?.quantity || 0;

    // Calculate how many *more* base bottles are needed
    const bottlesOfMainToOrder = Math.max(0, months - onlineBottlesOrdered);

    // --- LOGIC FIX V4.1.0 ---
    // Calculate *individual* addon bottles needed
    let addonsToOrder = []; // e.g., [{name: "A", quantity: 12}, {name: "B", quantity: 6}]
    let totalAddonBottlesToOrder = 0;

    for (const rec of activeRecommendations) {
        const originalAddonName = rec.name; // e.g., "FreePain Pro (FPP)"
        const onlineAddonQty = appState.onlineOrder.find(item => item.name === originalAddonName)?.quantity || 0;
        const bottlesNeeded = Math.max(0, months - onlineAddonQty);
        
        if (bottlesNeeded > 0) {
            addonsToOrder.push({
                name: rec.name.replace(/\(.*\)/, '').trim(), // Clean name for script
                quantity: bottlesNeeded
            });
        }
        totalAddonBottlesToOrder += bottlesNeeded;
    }
    // --- END LOGIC FIX ---
    
    const totalCost = (bottlesOfMainToOrder * pricePerBottle) + (totalAddonBottlesToOrder * pricePerBottle);
    
    // NEW: Calculate the "Online Price" for the new script
    const onlinePrice = (bottlesOfMainToOrder + totalAddonBottlesToOrder) * 69;
    
    // --- END NEW PRICING LOGIC ---
    
    const pitchedSupps = [mainSuppName, ...addonNames];
    DOM.generatedNotes.textContent = 'Pitched: ' + pitchedSupps.join(', ');

    if (activeRecommendations.length === 0) {
        DOM.dynamicPitchContent.innerHTML = `<p class="italic text-yellow-400">No additional symptoms selected. The regimen will only be for ${mainSuppName}.</p>`;
    } else {
        let pitch = `<p>And I'm also going to have you take <strong class="text-yellow-400">${addonNames.length}</strong> additional supplement${addonNames.length > 1 ? 's' : ''} with the ${mainSuppName}. `;
        if (addonNames.length === 1) {
            pitch += `It's the <strong class="text-green-400">${addonNames[0]}</strong>. Okay?</p>`;
        } else if (addonNames.length === 2) {
            pitch += `The first is <strong class="text-green-400">${addonNames[0]}</strong>, and the second is <strong class="text-green-400">${addonNames[1]}</strong>. Okay?</p>`;
        } else {
             pitch += addonNames.map((name, index) => {
                let ordinal = (index === addonNames.length - 1) ? "And the last one here is" : (index === 0 ? "The first is" : "Second is");
                if(addonNames.length > 3) ordinal = (index === 0 ? "The first is" : (index === addonNames.length - 1) ? "and the last one is" : "the next is");
                return `${ordinal} <strong class="text-green-400">${name}</strong>`;
            }).join(addonNames.length > 3 ? ', ' : '. ') + '. Okay?</p>';
        }
        pitch += `<p>And you don't have to worry about writing any of this down. All of the instructions are going to be on the bottles, and I'll give you my number here so you can reach me if you have any questions throughout. Okay?</p>`;
        DOM.dynamicPitchContent.innerHTML = pitch;
    }
    
    // REFACTOR V4.2.0: Get benefits from new grouped object
    let benefits = [];
    Object.values(groupedActiveSymptoms).forEach(group => {
        group.symptoms.forEach(s => benefits.push(s.sympBenefit));
    });
    DOM.dynamicBenefitsList.innerHTML = `<p class="text-lg">${AppUI.formatBenefitsList(benefits)} Okay?</p>`;

    DOM.dynamicRecommendations.innerHTML = '';
    
    // REFACTOR V4.2.0: Render sidebar from new grouped object
    const supplementGroups = Object.values(groupedActiveSymptoms);
    if (supplementGroups.length === 0) {
        DOM.sidebarPlaceholder.style.display = 'block';
    } else {
        DOM.sidebarPlaceholder.style.display = 'none';
        
        supplementGroups.forEach(group => {
            const sidebarGroupEl = document.createElement('div');
            sidebarGroupEl.className = 'sidebar-supplement-card sidebar-item-enter';
            
            // Create the header with the supplement name
            let headerHTML = `
                <div class="sidebar-supplement-card-header">
                    <h3 class="sidebar-supplement-card-supp-name">${group.suppName}</h3>
                </div>
            `;
            
            // Create the list of symptoms
            let symptomsHTML = '<div class="sidebar-symptom-list">';
            group.symptoms.forEach(symptom => {
                symptomsHTML += `
                    <div class="sidebar-symptom-item">
                        <div class="sidebar-symptom-item-content">
                            <h4 class="sidebar-symptom-card-symptom-text">${symptom.sympText}</h4>
                            <p class="sidebar-symptom-card-pitch">${symptom.sympPitch}</p>
                        </div>
                        <button data-checkbox-id="${symptom.checkboxId}" class="remove-btn text-xs bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full transition-colors">
                            Remove
                        </button>
                    </div>
                `;
            });
            symptomsHTML += '</div>';
            
            sidebarGroupEl.innerHTML = headerHTML + symptomsHTML;
            DOM.dynamicRecommendations.appendChild(sidebarGroupEl);
        });
        
        setTimeout(() => {
            document.querySelectorAll('.sidebar-item-enter').forEach(el => {
                el.classList.add('sidebar-item-enter-active');
            });
        }, 10);
    }

    const halfMonths = Math.ceil(months / 2);
    document.getElementById('pitch-length-1').textContent = months;
    document.getElementById('pitch-length-half').textContent = halfMonths;
    document.getElementById('pitch-length-half-2').textContent = months - halfMonths;
    document.getElementById('pitch-price').textContent = pricePerBottle;

    // --- NEW AUTHO SCRIPT LOGIC ---
    
    // 1. Populate the "Online you've already ordered" line
    let onlineOrderSummary = "Now online you've already ordered ";
    if (appState.onlineOrder.length === 0) {
        onlineOrderSummary += "no items.";
    } else {
        onlineOrderSummary += appState.onlineOrder.map(item => `<strong class="text-yellow-400">${item.quantity} ${item.name}</strong>`).join(', ') + ".";
    }
    DOM.authoScriptOnlinePart.innerHTML = onlineOrderSummary;

    // 2. Populate the "So all I have left to do" line
    const needsMain = bottlesOfMainToOrder > 0;
    const needsAddons = totalAddonBottlesToOrder > 0; // Use new total
    let authoScriptWording = "";
    
    const regimenCompletionText = (months < 18) 
        ? `for the first <strong class="text-yellow-400">${months} months</strong> of your regimen` 
        : "to complete your regimen";

    // --- LOGIC FIX V4.1.0 ---
    // Use new helper function for addon list
    const addonQuantityListString = AppUI.formatAddonListWithQuantities(addonsToOrder);

    if (needsMain && needsAddons) {
        authoScriptWording = `<p>So all I have left to do now is send you <strong class="text-yellow-400">${bottlesOfMainToOrder}</strong> more of the <strong class="text-yellow-400">${mainSuppName}</strong>, as well as ${addonQuantityListString} ${regimenCompletionText}.</p>`;
    } else if (needsMain && !needsAddons) {
        authoScriptWording = `<p>So all I have left to do now is send you <strong class="text-yellow-400">${bottlesOfMainToOrder}</strong> more of the <strong class="text-yellow-400">${mainSuppName}</strong> ${regimenCompletionText}.</p>`;
    } else if (!needsMain && needsAddons) {
        authoScriptWording = `<p>So all I have left to do now is send you ${addonQuantityListString} ${regimenCompletionText}.</p>`;
    } else {
        authoScriptWording = `<p>It looks like your order is already complete with everything you need for the full <strong class="text-yellow-400">${months}-month</strong> regimen.</p>`;
    }
    // --- END LOGIC FIX ---
    
    // 3. Populate the "Order Breakdown" section
    let onlineOrderText = "Online, you ordered: ";
    if (appState.onlineOrder.length === 0) {
        onlineOrderText = "You have no items in your online order.";
    } else {
        onlineOrderText += appState.onlineOrder.map(item => `<strong class="text-yellow-400">${item.quantity} ${item.name}</strong>`).join(', ');
    }
    DOM.orderBreakdownOnlinePart.innerHTML = onlineOrderText + " for [ONLINE ORDER COST]. This was already processed before.";

    // --- LOGIC FIX V4.1.0 ---
    let orderBreakdownWording = "";
    if (needsMain && needsAddons) {
        orderBreakdownWording = `<p>Now with your new order, you'll be getting <strong class="text-yellow-400">${bottlesOfMainToOrder}</strong> additional <strong class="text-yellow-400">${mainSuppName}</strong> and ${addonQuantityListString} for the additional <strong class="text-yellow-400">$<span id="order-cost">${totalCost.toFixed(2)}</span></strong>.</p>`;
    } else if (needsMain && !needsAddons) {
        orderBreakdownWording = `<p>Now with your new order, you'll be getting <strong class="text-yellow-400">${bottlesOfMainToOrder}</strong> additional <strong class="text-yellow-400">${mainSuppName}</strong> for the additional <strong class="text-yellow-400">$<span id="order-cost">${totalCost.toFixed(2)}</span></strong>.</p>`;
    } else if (!needsMain && needsAddons) {
        orderBreakdownWording = `<p>Now with your new order, you'll be getting ${addonQuantityListString} for the additional <strong class="text-yellow-400">$<span id="order-cost">${totalCost.toFixed(2)}</span></strong>.</p>`;
    } else {
        orderBreakdownWording = `<p>Now with your new order, it looks like your order is already complete.</p>`;
    }
    // --- END LOGIC FIX ---
    
    document.getElementById('autho-length-1').textContent = months;
    document.getElementById('autho-script-dynamic-wording').innerHTML = authoScriptWording;
    
    // NEW: Inject the new online price and the existing totalCost
    const onlineCostEl = document.getElementById('autho-online-cost');
    if (onlineCostEl) onlineCostEl.textContent = onlinePrice.toFixed(2);
    
    document.getElementById('autho-cost').textContent = totalCost.toFixed(2);
    document.getElementById('autho-cost-2').textContent = totalCost.toFixed(2);
    document.getElementById('order-breakdown-dynamic-wording').innerHTML = orderBreakdownWording;
    document.getElementById('decline-cost').textContent = totalCost.toFixed(2);

    // Update guarantee day placeholders
    if (DOM.guaranteeDays1) DOM.guaranteeDays1.textContent = guaranteeDays;
    if (DOM.guaranteeDays2) DOM.guaranteeDays2.textContent = guaranteeDays;

    // Update order breakdown completion wording
    if (DOM.orderBreakdownCompletionWording) {
        if (months < 18) {
            DOM.orderBreakdownCompletionWording.innerHTML = `That will complete the first <strong class="text-yellow-400">${months} months</strong> of your regimen and you'll see this coming out in two different packages. Give the order 5 to 7 business days to reach you, okay? And for your clarity, the bank statement will be from "Supplement Phone Order."`;
        } else {
            DOM.orderBreakdownCompletionWording.innerHTML = `That will complete your regiment and you'll see this coming out in two different packages. Give the order 5 to 7 business days to reach you, okay? And for your clarity, the bank statement will be from "Supplement Phone Order."`;
        }
    }
}

// --- Call Reset Functions ---

/**
 * Resets the application state for a new call,
 * preserving all user settings.
 */
function resetForNextCall() {
    AppUI.stopGlobalTimer();
    appState.currentSegmentIndex = -1;
    appState.settings.segments.forEach(s => { s.state = 'pending'; s.progress = 0; s.overtime = 0; s.startTime = null; });
    DOM.clientNameInput.value = '';
    updateClientName('');
    DOM.symptomChecklistContainer.querySelectorAll('.script-checkbox').forEach(cb => cb.checked = false);
    DOM.authoRegimenLengthSelect.value = '18';
    DOM.regimenLengthSelect.value = '18';
    DOM.customNotes.value = '';

    // Reset online order to default
    appState.onlineOrder = [
        { name: appState.supplementDatabase.baseProduct.name.replace(' (Base)', ''), quantity: 6 }
    ];
    AppUI.renderOnlineOrderEditor();

    renderAllScript();
    AppUI.updateTimerBarUI(); // MODIFIED: Call non-destructive update
    updateTimerControlsVisibility();
    DOM.resetConfirmModal.classList.add('hidden');
    
    // Re-attach the one-time keydown listener for the timer
    if(AppUI.reAttachTimerStartListener) {
        AppUI.reAttachTimerStartListener();
    }
}


// --- Event Listeners ---

/**
 * Encapsulated DND listeners for the main page
 */
function initDragAndDropEventListeners() {
    DOM.symptomChecklistContainer.addEventListener('dragstart', (e) => {
        const handle = e.target.closest('.drag-handle-main');
        if (!handle) {
            e.preventDefault();
            return;
        }
        
        draggedSymptomGroup = e.target.closest('.symptom-group-container');
        if (!draggedSymptomGroup) return;

        e.dataTransfer.effectAllowed = 'move';
        // Use a slight delay to allow the DOM to update
        setTimeout(() => {
            if (draggedSymptomGroup) draggedSymptomGroup.classList.add('dragging');
        }, 0);
    });

    DOM.symptomChecklistContainer.addEventListener('dragover', (e) => {
        e.preventDefault(); // Necessary to allow dropping
        
        const targetEl = e.target.closest('.symptom-group-container');
        
        // Clear previous target
        if (lastDragOverSymptomGroup && lastDragOverSymptomGroup !== targetEl) {
            lastDragOverSymptomGroup.classList.remove('drag-over-target');
        }

        if (targetEl && targetEl !== draggedSymptomGroup) {
            targetEl.classList.add('drag-over-target');
            lastDragOverSymptomGroup = targetEl;
        }
    });

    DOM.symptomChecklistContainer.addEventListener('dragend', () => {
        if (draggedSymptomGroup) {
            draggedSymptomGroup.classList.remove('dragging');
        }
        if (lastDragOverSymptomGroup) {
            lastDragOverSymptomGroup.classList.remove('drag-over-target');
        }
        draggedSymptomGroup = null;
        lastDragOverSymptomGroup = null;
    });

    DOM.symptomChecklistContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        
        if (lastDragOverSymptomGroup) {
            lastDragOverSymptomGroup.classList.remove('drag-over-target');
        }

        const targetEl = e.target.closest('.symptom-group-container');
        
        if (targetEl && draggedSymptomGroup && targetEl !== draggedSymptomGroup) {
            const draggedId = draggedSymptomGroup.dataset.suppId;
            const targetId = targetEl.dataset.suppId;

            // Find indices in the *data array*
            const draggedIndex = appState.supplementDatabase.recommendations.findIndex(s => s.id === draggedId);
            const targetIndex = appState.supplementDatabase.recommendations.findIndex(s => s.id === targetId);

            if (draggedIndex > -1 && targetIndex > -1) {
                // Move the item in the array
                const [draggedItem] = appState.supplementDatabase.recommendations.splice(draggedIndex, 1);
                appState.supplementDatabase.recommendations.splice(targetIndex, 0, draggedItem);
                
                // Save and re-render
                saveSettingsToStorage();
                renderSymptomChecklist(); // Re-render to show new order
            }
        }
        
        if (draggedSymptomGroup) {
            draggedSymptomGroup.classList.remove('dragging');
        }
        draggedSymptomGroup = null;
        lastDragOverSymptomGroup = null;
    });
}


// --- Reference Modal Logic ---

// REMOVED: openReferenceModal (moved to script-references.js)
// REMOVED: closeReferenceModal (moved to script-references.js)
// REMOVED: handleGlobalKeydown (moved to script-references.js)


/**
 * Attaches all event listeners for the main application
 * and initializes all component event listeners.
 */
function setupEventListeners() {
    // --- Core Listeners (that trigger re-renders) ---
    
    DOM.symptomChecklistContainer.addEventListener('change', (e) => {
        if (e.target.classList.contains('script-checkbox')) {
            renderAllScript();
        }
    });

    DOM.authoRegimenLengthSelect.addEventListener('change', () => {
        DOM.regimenLengthSelect.value = DOM.authoRegimenLengthSelect.value;
        renderAllScript();
    });
    
    DOM.genderSelect.addEventListener('change', () => { 
        renderSymptomChecklist(); 
        renderAllScript(); 
    });

    DOM.clientNameInput.addEventListener('input', () => {
        updateClientName(DOM.clientNameInput.value.trim());
    });

    DOM.dynamicRecommendations.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-btn');
        if (removeBtn) {
            const checkboxId = removeBtn.dataset.checkboxId;
            if (checkboxId) {
                const checkbox = document.getElementById(checkboxId);
                if (checkbox) {
                    checkbox.checked = false;
                    renderAllScript();
                }
            }
        }
    });

    // NEW: Quick Edit Listener
    DOM.symptomChecklistContainer.addEventListener('click', (e) => {
        const editBtn = e.target.closest('.quick-edit-btn');
        if (editBtn) {
            const suppId = editBtn.dataset.suppId;
            if (AppUI.openQuickEdit && suppId) {
                AppUI.openQuickEdit(suppId);
            } else {
                console.error("Quick edit function or ID missing.");
            }
        }
    });
    
    // NEW: Quick Edit Modal Close
    if(DOM.quickEditCloseBtn) {
        DOM.quickEditCloseBtn.addEventListener('click', () => {
            DOM.quickEditModal.classList.add('hidden');
        });
    }

    // --- Reset Modal Listeners ---
    DOM.resetAppBtn.addEventListener('click', () => DOM.resetConfirmModal.classList.remove('hidden'));
    DOM.resetCancelBtn.addEventListener('click', () => DOM.resetConfirmModal.classList.add('hidden'));
    DOM.resetConfirmBtn.addEventListener('click', resetForNextCall);
    
    // --- Reference Modal Listeners ---
    // REMOVED: (moved to script-references.js)
    
    // --- Global Shortcut Listener ---
    // REMOVED: (moved to script-references.js)

    // --- Initialize Component Event Listeners ---
    AppUI.initUtilityEventListeners(); // Notes
    AppUI.initTimerEventListeners();
    AppUI.initSettingsEventListeners();
    AppUI.initSearchEventListeners();
    AppUI.initIOEventListeners();
    AppUI.initOrderEditorEventListeners();
    AppUI.initReferenceEventListeners(); // NEW
    initDragAndDropEventListeners(); // Add main page DND listeners
}

// --- INITIALIZATION ---

/**
 * Renders the entire application UI based on the current appState.
 * This is separated from init() to allow for re-rendering after import.
 */
function initAppUI() {
    updateAgentNameUI();
    updateSupplementWordingUI(); // This will also call AppUI.renderTitleUI()
    AppUI.renderReferenceSidebar(); // MODIFIED
    renderDiscoveryQuestions();
    renderSymptomChecklist();
    AppUI.renderOnlineOrderEditor();
    renderAllScript();
    AppUI.createTimerBar(); // MODIFIED: Create the timer skeleton
    AppUI.updateTimerBarUI(); // MODIFIED: Fill in the initial state
    updateClientName(DOM.clientNameInput.value);
    updateTimerControlsVisibility();
}

/**
 * Main application entry point.
 */
function init() {
    // 1. Check for critical config files
    if (typeof APP_CONFIG === 'undefined' || typeof DATABASE_CONFIGS === 'undefined' || typeof SCRIPT_VERSION === 'undefined') {
        let error = "CRITICAL ERROR: Failed to load config files.";
        if (typeof APP_CONFIG === 'undefined') error += " `APP_CONFIG` is missing. ";
        if (typeof DATABASE_CONFIGS === 'undefined') error += " `DATABASE_CONFIGS` is missing. ";
        if (typeof SCRIPT_VERSION === 'undefined') error += " `SCRIPT_VERSION` is missing (build error). ";
        console.error(error);
        // Defer the error message slightly to ensure body exists
        setTimeout(() => {
            document.body.innerHTML = `<div style="color: red; padding: 20px;">${error} Check console.</div>`;
        }, 100);
        return;
    }
    
    // 2. Cache all DOM elements
    cacheDOMElements();
    
    // 3. Load initial state from defaults and localStorage
    loadState();
    
    // 4. Set up all event listeners
    setupEventListeners();
    
    // 5. Perform the initial render
    initAppUI();
}

// Wait for the DOM to be fully loaded before running the app
document.addEventListener('DOMContentLoaded', init);
