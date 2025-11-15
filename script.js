/**
 * ============================================
 * SCRIPT TOOL APPLICATION LOGIC (V4.0.0)
 * ============================================
 * This is the main "controller" file.
 * It handles state, core logic, and event listeners.
 * All DOM manipulation and UI logic is in script-ui.js (AppUI).
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
    onlineOrder: [],         // NEW: Holds {name, quantity} objects
    currentSegmentIndex: -1,
    globalTimerInterval: null,
    isSettingsOpen: false,
    isSearching: false
};

// --- DOM CACHE (Query once) ---
// This object is shared with script-ui.js
const DOM = {};
function cacheDOMElements() {
    DOM.regimenLengthSelect = document.getElementById('regimen-length');
    DOM.authoRegimenLengthSelect = document.getElementById('autho-regimen-length'); 
    // DOM.onlineBottlesSelect = document.getElementById('online-bottles'); // REMOVED
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
    DOM.generatedNotes = document.getElementById('generated-notes');
    DOM.customNotes = document.getElementById('custom-notes');
    DOM.copyNotesBtn = document.getElementById('copy-notes-btn');
    DOM.floatingTimerBar = document.getElementById('floating-timer-bar');
    DOM.startTimerManualBtn = document.getElementById('start-timer-manual-btn');
    DOM.settingsCogBtn = document.getElementById('settings-cog-btn');
    DOM.settingsModal = document.getElementById('settings-modal');
    DOM.settingsCloseBtn = document.getElementById('settings-close-btn');
    DOM.settingsSaveBtn = document.getElementById('settings-save-btn');
    DOM.agentNameSettingInput = document.getElementById('agent-name-setting');
    DOM.segmentSettingsList = document.getElementById('segment-settings-list');
    DOM.addSegmentBtn = document.getElementById('add-segment-btn');

    // NEW: Question Editor Elements
    DOM.questionsEditorList = document.getElementById('questions-editor-list');
    DOM.addQuestionBtn = document.getElementById('add-question-btn');
    
    // NEW: Discovery Questions List Container (Main Page)
    DOM.discoveryQuestionsList = document.getElementById('discovery-questions-list');

    DOM.baseProductNameSetting = document.getElementById('base-product-name-setting');
    DOM.baseProductPitchSetting = document.getElementById('base-product-pitch-setting');
    DOM.baseProductGuaranteeSetting = document.getElementById('base-product-guarantee-setting'); // NEW
    DOM.supplementSettingsList = document.getElementById('supplement-settings-list');
    DOM.addSupplementBtn = document.getElementById('add-supplement-btn');
    DOM.resetToDefaultsBtn = document.getElementById('reset-to-defaults-btn');
    DOM.resetAppBtn = document.getElementById('reset-app-btn');
    DOM.resetConfirmModal = document.getElementById('reset-confirm-modal');
    DOM.resetConfirmBtn = document.getElementById('reset-confirm-btn');
    DOM.resetCancelBtn = document.getElementById('reset-cancel-btn');
    DOM.resetDefaultsConfirmModal = document.getElementById('reset-defaults-confirm-modal');
    DOM.resetDefaultsConfirmBtn = document.getElementById('reset-defaults-confirm-btn');
    DOM.resetDefaultsCancelBtn = document.getElementById('reset-defaults-cancel-btn');
    
    // NEW: LocalStorage Warning Box
    DOM.settingsWarningBox = document.getElementById('settings-warning-box');

    // NEW Contextual Import/Export Buttons
    DOM.exportAppSettingsBtn = document.getElementById('export-app-settings-btn');
    DOM.importAppSettingsBtn = document.getElementById('import-app-settings-btn');
    DOM.exportDbBtn = document.getElementById('export-db-btn');
    DOM.importDbBtn = document.getElementById('import-db-btn');
    DOM.currentDbNameDisplay = document.getElementById('current-db-name-display');

    // Import Modal Elements
    DOM.importModal = document.getElementById('import-modal');
    DOM.importModalTitle = document.getElementById('import-modal-title');
    DOM.importModalDescription = document.getElementById('import-modal-description');
    DOM.importModalCloseBtn = document.getElementById('import-modal-close-btn');
    DOM.importTextarea = document.getElementById('import-textarea');
    DOM.importConfirmBtn = document.getElementById('import-confirm-btn');
    DOM.importCancelBtn = document.getElementById('import-cancel-btn');
    DOM.importMessage = document.getElementById('import-message');

    // Title Search Elements
    DOM.titleSearchContainer = document.getElementById('title-search-container');
    DOM.scriptTitleDisplay = document.getElementById('script-title-display');
    DOM.titleClickWrapper = document.getElementById('title-click-wrapper');
    DOM.titleSearchNote = document.getElementById('title-search-note');
    DOM.scriptSearchInput = document.getElementById('script-search-input');
    DOM.scriptSearchResults = document.getElementById('script-search-results');

    // NEW: Online Order Editor Elements
    DOM.onlineOrderEditor = document.getElementById('online-order-editor');
    DOM.onlineOrderList = document.getElementById('online-order-list');
    DOM.onlineOrderSearch = document.getElementById('online-order-search');
    DOM.onlineOrderSearchResults = document.getElementById('online-order-search-results');
    DOM.orderBreakdownOnlinePart = document.getElementById('order-breakdown-online-part');
    DOM.authoScriptOnlinePart = document.getElementById('autho-script-online-part');
    
    // NEW: Guarantee Day Placeholders
    DOM.guaranteeDays1 = document.getElementById('guarantee-days-1');
    DOM.guaranteeDays2 = document.getElementById('guarantee-days-2');
}


// --- State Management Functions ---

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

    // NEW: Guardrail for old data that might be missing the questions key
    if (!appState.supplementDatabase.questions) {
        appState.supplementDatabase.questions = []; // Add it if it's missing
    }
    
    // NEW: Guardrail for old data that might be missing guaranteeDays
    if (!appState.supplementDatabase.guaranteeDays) {
        appState.supplementDatabase.guaranteeDays = 60; // Add it if it's missing
    }

    // NEW: Set default online order
    // This MUST happen after supplementDatabase is set
    appState.onlineOrder = [
        { name: appState.supplementDatabase.baseProduct.name.replace(' (Base)', ''), quantity: 6 }
    ];

    // FIX: Manually calling render functions in order
    
    // 1. Render the title and sidebar
    updateSupplementWordingUI();

    // 2. Render the new discovery questions
    renderDiscoveryQuestions(); // NEW
    
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

function updateAgentNameUI() {
    const displayName = appState.settings.agentName || "[Agent Name]";
    DOM.agentNamePlaceholders.forEach(el => el.textContent = displayName);
}

function updateSupplementWordingUI() {
    // This function now just updates wording in the script/sidebar
    // The title itself is handled by AppUI.renderTitleUI()
    const baseProduct = appState.supplementDatabase.baseProduct;
    const baseProductName = baseProduct.name.replace(' (Base)', '');

    // Update title
    AppUI.renderTitleUI();
    
    // Update sidebar
    DOM.baseProductNameSidebar.textContent = baseProduct.name;
    DOM.baseProductPitchSidebar.textContent = baseProduct.pitch;
    
    // Update all placeholders in the main script
    DOM.baseProductNameScriptPlaceholders.forEach(el => {
        el.textContent = baseProductName;
    });
}

function updateClientName(name) {
    const displayName = name || "[Client Name]";
    DOM.clientNamePlaceholders.forEach(el => el.textContent = displayName);
}

function updateTimerControlsVisibility() {
    DOM.startTimerManualBtn.classList.toggle('hidden', appState.currentSegmentIndex !== -1);
}

// --- Symptom Checklist Rendering ---

// NEW: Render Discovery Questions
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
        groupEl.innerHTML = `<h4 class="symptom-group-header">${supp.name}</h4>`;

        const symptomsList = document.createElement('div');
        symptomsList.className = 'space-y-3';

        supp.symptoms.forEach(symp => {
            const label = document.createElement('label');
            label.className = 'flex items-start p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition cursor-pointer';
            const checkboxId = `checkbox-${supp.id}-${symp.id}`;
            label.htmlFor = checkboxId;
            
            label.innerHTML = `
                <input type="checkbox" 
                       class="script-checkbox h-6 w-6 rounded text-blue-500 bg-gray-800 border-gray-600 focus:ring-blue-600 mt-1"
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

function renderAllScript() {
    // Gracefully handle missing baseProduct
    if (!appState.supplementDatabase || !appState.supplementDatabase.baseProduct) {
        console.error("RenderAllScript: supplementDatabase.baseProduct is missing. Cannot render.");
        return; // Stop execution
    }
    const months = parseInt(DOM.regimenLengthSelect.value, 10);
    const mainSuppName = appState.supplementDatabase.baseProduct.name.replace(' (Base)', '');
    const pricePerBottle = AppUI.getPricePerBottle(months);
    const guaranteeDays = appState.supplementDatabase.guaranteeDays || 60; // NEW

    DOM.authoRegimenLengthSelect.value = months;

    const activeSupplementIds = new Set();
    const checkedBoxes = DOM.symptomChecklistContainer.querySelectorAll('.script-checkbox:checked');
    const activeSymptomsData = [];
    
    checkedBoxes.forEach(cb => {
        const suppId = cb.dataset.supplementId;
        const sympId = cb.dataset.symptomId;
        activeSupplementIds.add(suppId);
        const supp = appState.supplementDatabase.recommendations.find(s => s.id === suppId);
        if (!supp) return;
        const symp = supp.symptoms.find(s => s.id === sympId);
        if (!symp) return;
        activeSymptomsData.push({
            checkboxId: cb.id, suppName: supp.name, sympText: symp.text,
            sympPitch: symp.pitch, sympBenefit: symp.benefit
        });
    });

    const activeRecommendations = appState.supplementDatabase.recommendations.filter(supp => 
        activeSupplementIds.has(supp.id)
    );
    activeRecommendations.sort((a, b) => a.name.localeCompare(b.name));
    
    // Get ALL addon names selected in checklist
    let addonNames = activeRecommendations.map(rec => rec.name.replace(/\(.*\)/, '').trim());
    let addonListString = AppUI.formatAddonList(addonNames);

    // --- NEW PRICING LOGIC ---
    // Find how many base supplement bottles were in the online order
    const onlineBottlesOrdered = appState.onlineOrder.find(item => item.name === mainSuppName)?.quantity || 0;

    // Calculate how many *more* base bottles are needed
    const bottlesOfMainToOrder = Math.max(0, months - onlineBottlesOrdered);

    // --- LOGIC FIX V3.3.3 ---
    // Calculate how many *more* addon bottles are needed
    // This MUST loop over activeRecommendations to get the *original* name for the lookup
    let bottlesOfAddonsToOrder = 0;
    for (const rec of activeRecommendations) {
        const originalAddonName = rec.name; // e.g., "FreePain Pro (FPP)"
        const onlineAddonQty = appState.onlineOrder.find(item => item.name === originalAddonName)?.quantity || 0;
        bottlesOfAddonsToOrder += Math.max(0, months - onlineAddonQty);
    }
    // --- END LOGIC FIX ---
    
    const totalCost = (bottlesOfMainToOrder * pricePerBottle) + (bottlesOfAddonsToOrder * pricePerBottle);
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
    
    const benefits = activeSymptomsData.map(s => s.sympBenefit);
    DOM.dynamicBenefitsList.innerHTML = `<p class="text-lg">${AppUI.formatBenefitsList(benefits)} Okay?</p>`;

    DOM.dynamicRecommendations.innerHTML = '';
    if (activeSymptomsData.length === 0) {
        DOM.sidebarPlaceholder.style.display = 'block';
    } else {
        DOM.sidebarPlaceholder.style.display = 'none';
        activeSymptomsData.forEach(symptom => {
            const sidebarEl = document.createElement('div');
            sidebarEl.className = 'sidebar-symptom-card sidebar-item-enter';
            sidebarEl.innerHTML = `
                <div class="sidebar-symptom-card-header">
                    <span class="sidebar-symptom-card-supp-name">${symptom.suppName}</span>
                    <button data-checkbox-id="${symptom.checkboxId}" class="remove-btn text-xs bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full transition-colors">
                        Remove
                    </button>
                </div>
                <h3 class="sidebar-symptom-card-symptom-text">${symptom.sympText}</h3>
                <p class="sidebar-symptom-card-pitch">${symptom.sympPitch}</p>
            `;
            DOM.dynamicRecommendations.appendChild(sidebarEl);
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
    const needsAddons = bottlesOfAddonsToOrder > 0;
    let authoScriptWording = "";
    
    const regimenCompletionText = (months < 18) 
        ? `for the first <strong class="text-yellow-400">${months} months</strong> of your regimen` 
        : "to complete your regimen";

    // --- LOGIC FIX V3.3.2 (This logic is correct) ---
    // Uses bottlesOfAddonsToOrder (which is now correctly calculated in V3.3.3)
    if (needsMain && needsAddons) {
        authoScriptWording = `<p>So all I have left to do now is send you <strong class="text-yellow-400">${bottlesOfMainToOrder}</strong> more of the <strong class="text-yellow-400">${mainSuppName}</strong>, as well as <strong class="text-yellow-400">${bottlesOfAddonsToOrder}</strong> more of the <strong class="text-yellow-400">${addonListString}</strong> ${regimenCompletionText}.</p>`;
    } else if (needsMain && !needsAddons) {
        authoScriptWording = `<p>So all I have left to do now is send you <strong class="text-yellow-400">${bottlesOfMainToOrder}</strong> more of the <strong class="text-yellow-400">${mainSuppName}</strong> ${regimenCompletionText}.</p>`;
    } else if (!needsMain && needsAddons) {
        authoScriptWording = `<p>So all I have left to do now is send you <strong class="text-yellow-400">${bottlesOfAddonsToOrder}</strong> more of the <strong class="text-yellow-400">${addonListString}</strong> ${regimenCompletionText}.</p>`;
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

    let orderBreakdownWording = "";
    if (needsMain && needsAddons) {
        orderBreakdownWording = `<p>Now with your new order, you'll be getting <strong class="text-yellow-400">${bottlesOfMainToOrder}</strong> additional <strong class="text-yellow-400">${mainSuppName}</strong> and <strong class="text-yellow-400">${bottlesOfAddonsToOrder}</strong> additional bottle(s) of <strong class="text-yellow-400">${addonListString}</strong> for the additional <strong class="text-yellow-400">$<span id="order-cost">${totalCost.toFixed(2)}</span></strong>.</p>`;
    } else if (needsMain && !needsAddons) {
        orderBreakdownWording = `<p>Now with your new order, you'll be getting <strong class="text-yellow-400">${bottlesOfMainToOrder}</strong> additional <strong class="text-yellow-400">${mainSuppName}</strong> for the additional <strong class="text-yellow-400">$<span id="order-cost">${totalCost.toFixed(2)}</span></strong>.</p>`;
    } else if (!needsMain && needsAddons) {
        orderBreakdownWording = `<p>Now with your new order, you'll be getting <strong class="text-yellow-400">${bottlesOfAddonsToOrder}</strong> additional bottle(s) of <strong class="text-yellow-400">${addonListString}</strong> for the additional <strong class="text-yellow-400">$<span id="order-cost">${totalCost.toFixed(2)}</span></strong>.</p>`;
    } else {
        orderBreakdownWording = `<p>Now with your new order, it looks like your order is already complete.</p>`;
    }
    
    document.getElementById('autho-length-1').textContent = months;
    document.getElementById('autho-script-dynamic-wording').innerHTML = authoScriptWording;
    document.getElementById('autho-cost').textContent = totalCost.toFixed(2);
    document.getElementById('autho-cost-2').textContent = totalCost.toFixed(2);
    // document.getElementById('order-online-bottles').textContent = onlineBottlesOrdered; // REMOVED
    document.getElementById('order-breakdown-dynamic-wording').innerHTML = orderBreakdownWording;
    document.getElementById('decline-cost').textContent = totalCost.toFixed(2);

    // NEW: Update guarantee day placeholders
    if (DOM.guaranteeDays1) DOM.guaranteeDays1.textContent = guaranteeDays;
    if (DOM.guaranteeDays2) DOM.guaranteeDays2.textContent = guaranteeDays;
}

// --- Call Reset Functions ---

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

    // NEW: Reset online order to default
    appState.onlineOrder = [
        { name: appState.supplementDatabase.baseProduct.name.replace(' (Base)', ''), quantity: 6 }
    ];
    AppUI.renderOnlineOrderEditor();

    renderAllScript();
    AppUI.renderTimerBar();
    updateTimerControlsVisibility();
    DOM.resetConfirmModal.classList.add('hidden');
}


// --- Event Listeners ---

function setupEventListeners() {
    DOM.copyNotesBtn.addEventListener('click', () => {
        const fullNotes = DOM.generatedNotes.textContent + '\n\n' + DOM.customNotes.value;
        AppUI.copyToClipboard(fullNotes, DOM.copyNotesBtn.querySelector('span'), 'Copy Notes', 'Copied!');
    });

    DOM.symptomChecklistContainer.addEventListener('change', (e) => {
        if (e.target.classList.contains('script-checkbox')) renderAllScript();
    });

    DOM.authoRegimenLengthSelect.addEventListener('change', () => {
        DOM.regimenLengthSelect.value = DOM.authoRegimenLengthSelect.value;
        renderAllScript();
    });

    // DOM.onlineBottlesSelect.addEventListener('change', renderAllScript); // REMOVED
    DOM.genderSelect.addEventListener('change', () => { renderSymptomChecklist(); renderAllScript(); });

    DOM.clientNameInput.addEventListener('input', () => {
        updateClientName(DOM.clientNameInput.value.trim());
        if (appState.currentSegmentIndex === -1) AppUI.tryStartSegment(0);
    });

    DOM.startTimerManualBtn.addEventListener('click', () => { if (appState.currentSegmentIndex === -1) AppUI.tryStartSegment(0); });

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

    DOM.resetAppBtn.addEventListener('click', () => DOM.resetConfirmModal.classList.remove('hidden'));
    DOM.resetCancelBtn.addEventListener('click', () => DOM.resetConfirmModal.classList.add('hidden'));
    DOM.resetConfirmBtn.addEventListener('click', resetForNextCall);

    DOM.settingsCogBtn.addEventListener('click', () => { appState.isSettingsOpen = true; AppUI.renderSettingsModal(); });
    DOM.settingsCloseBtn.addEventListener('click', () => { appState.isSettingsOpen = false; AppUI.renderSettingsModal(); });
    DOM.settingsSaveBtn.addEventListener('click', AppUI.saveSettings);

    DOM.addSegmentBtn.addEventListener('click', () => {
        appState.settings.segments.push({
            id: `seg-${Date.now()}`, title: "New Segment", duration: 60,
            progress: 0, state: 'pending', overtime: 0, startTime: null
        });
        AppUI.renderSettingsModal();
    });

    DOM.segmentSettingsList.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-segment-btn');
        if (removeBtn) {
            const idToRemove = removeBtn.dataset.segmentId;
            appState.settings.segments = appState.settings.segments.filter(s => s.id !== idToRemove);
            AppUI.renderSettingsModal();
        }
    });

    // NEW: Listeners for Question Editor
    DOM.addQuestionBtn.addEventListener('click', () => {
        const questionEl = document.createElement('div');
        questionEl.className = 'flex items-center gap-2';
        questionEl.innerHTML = `
            <input type="text" value="" class="question-input w-full bg-gray-600 text-white rounded p-2 text-sm" placeholder="New question...">
            <button class="remove-question-btn bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
        `;
        DOM.questionsEditorList.appendChild(questionEl);
    });

    DOM.questionsEditorList.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-question-btn');
        if (removeBtn) {
            removeBtn.parentElement.remove();
        }
    });


    DOM.supplementSettingsList.addEventListener('click', (e) => {
        const removeSymptomBtn = e.target.closest('.remove-symptom-btn');
        if (removeSymptomBtn) {
            removeSymptomBtn.closest('.symptom-input-group').remove();
            return;
        }

        const addSymptomBtn = e.target.closest('.add-symptom-btn');
        if (addSymptomBtn) {
            const symptomsListDiv = addSymptomBtn.closest('[data-supp-id]').querySelector('.supp-symptoms-list');
            const newSymptomGroup = document.createElement('div');
            newSymptomGroup.className = 'symptom-input-group';
            newSymptomGroup.dataset.sympId = `symp-${Date.now()}`;
            newSymptomGroup.innerHTML = `
                <div class="symptom-input-row">
                    <input type="text" class="supp-symptom-text-input w-full bg-gray-500 text-white rounded p-2 text-sm" placeholder="Symptom Text">
                    <button class="remove-symptom-btn bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                </div>
                <div>
                    <label>Sidebar Pitch</label>
                    <textarea rows="2" class="supp-symptom-pitch-input w-full bg-gray-500 text-white rounded p-2 text-sm" placeholder="Sidebar pitch for this symptom..."></textarea>
                </div>
                <div>
                    <label>Script Benefit</label>
                    <input type="text" value="" class="supp-symptom-benefit-input w-full bg-gray-500 text-white rounded p-2 text-sm" placeholder="Script benefit for this symptom...">
                </div>
            `;
            symptomsListDiv.appendChild(newSymptomGroup);
            return;
        }

        const removeSuppBtn = e.target.closest('.remove-supplement-btn');
        if (removeSuppBtn) {
            removeSuppBtn.closest('[data-supp-id]').remove();
            return;
        }
    });

    DOM.addSupplementBtn.addEventListener('click', () => {
        // BUG FIX: This now appends the new element instead of re-rendering all
        const newSympId = `symp-${Date.now()}`;
        const newSupp = {
            id: `supp-${Date.now()}`, name: "New Supplement", gender: "any",
            symptoms: [
                { id: newSympId, text: "New Symptom", pitch: "", benefit: "" }
            ]
        };
        // 1. Create the new element
        const newSuppElement = AppUI.createSupplementEditorElement(newSupp);
        // 2. Append it to the list in the DOM
        DOM.supplementSettingsList.appendChild(newSuppElement);
        // Note: The new supplement is not in appState *yet*. It will be added
        // when the user hits "Save". This prevents unsaved changes from
        // being lost.
    });
    
    DOM.resetToDefaultsBtn.addEventListener('click', () => DOM.resetDefaultsConfirmModal.classList.remove('hidden'));
    DOM.resetDefaultsCancelBtn.addEventListener('click', () => DOM.resetDefaultsConfirmModal.classList.add('hidden'));
    DOM.resetDefaultsConfirmBtn.addEventListener('click', AppUI.resetSettingsToDefaults);

    DOM.floatingTimerBar.addEventListener('click', (e) => {
        const segmentEl = e.target.closest('.timer-segment');
        if (segmentEl) AppUI.tryStartSegment(Number(segmentEl.dataset.index));
    });

    // NEW Import/Export Listeners
    DOM.exportAppSettingsBtn.addEventListener('click', (e) => AppUI.exportAppSettings(e));
    DOM.exportDbBtn.addEventListener('click', (e) => AppUI.handleDatabaseExport(e));
    DOM.importAppSettingsBtn.addEventListener('click', () => AppUI.openImportModal('app'));
    DOM.importDbBtn.addEventListener('click', () => AppUI.openImportModal('db'));

    // Import Modal Listeners
    DOM.importModalCloseBtn.addEventListener('click', () => DOM.importModal.classList.add('hidden'));
    DOM.importCancelBtn.addEventListener('click', () => DOM.importModal.classList.add('hidden'));
    DOM.importConfirmBtn.addEventListener('click', AppUI.handleImport);

    // Title Search Listeners
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

    // NEW: Online Order Editor Listeners
    DOM.onlineOrderSearch.addEventListener('input', () => {
        AppUI.renderOnlineOrderSearchResults(DOM.onlineOrderSearch.value);
    });
    
    DOM.onlineOrderSearch.addEventListener('focus', () => {
        AppUI.renderOnlineOrderSearchResults('');
    });
    
    // Close search results when clicking outside the editor
    document.addEventListener('click', (e) => {
        if (DOM.onlineOrderEditor && !DOM.onlineOrderEditor.contains(e.target)) {
            DOM.onlineOrderSearchResults.classList.add('hidden');
        }
    });

    DOM.onlineOrderSearchResults.addEventListener('click', (e) => {
        const itemEl = e.target.closest('.search-result-item');
        if (itemEl) {
            const name = itemEl.dataset.name;
            appState.onlineOrder.push({ name: name, quantity: 1 });
            AppUI.renderOnlineOrderEditor();
            renderAllScript();
            DOM.onlineOrderSearch.value = '';
            DOM.onlineOrderSearchResults.classList.add('hidden');
        }
    });

    DOM.onlineOrderList.addEventListener('input', (e) => {
        if (e.target.classList.contains('online-order-item-qty')) {
            const index = parseInt(e.target.dataset.index, 10);
            const newQuantity = parseInt(e.target.value, 10);
            if (!isNaN(newQuantity) && newQuantity >= 0) {
                if(appState.onlineOrder[index]) {
                    appState.onlineOrder[index].quantity = newQuantity;
                    renderAllScript(); // Re-calculate everything
                }
            }
        }
    });

    DOM.onlineOrderList.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.online-order-item-remove-btn');
        if (removeBtn) {
            const index = parseInt(removeBtn.dataset.index, 10);
            appState.onlineOrder.splice(index, 1); // Remove item from state
            AppUI.renderOnlineOrderEditor(); // Re-render the editor list
            renderAllScript(); // Re-calculate everything
        }
    });
}

// --- INITIALIZATION ---

/**
 * Renders the entire application UI based on the current appState.
 * This is separated from init() to allow for re-rendering after import.
 */
function initAppUI() {
    updateAgentNameUI();
    updateSupplementWordingUI(); // This will also call AppUI.renderTitleUI()
    renderDiscoveryQuestions(); // NEW
    renderSymptomChecklist();
    AppUI.renderOnlineOrderEditor(); // NEW
    renderAllScript();
    AppUI.renderTimerBar();
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
