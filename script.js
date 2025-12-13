/**
 * ============================================
 * SCRIPT TOOL APPLICATION LOGIC (V7.27.0)
 * ============================================
 */

// Version-gated localStorage keys
const APP_VERSION = typeof SCRIPT_VERSION !== 'undefined' ? SCRIPT_VERSION : 'dev';
const APP_SETTINGS_KEY = `appSettings_${APP_VERSION}`;
const EDITED_DATABASES_KEY = `editedDatabases_${APP_VERSION}`;
const LAST_DB_NAME_KEY = `lastDbName_${APP_VERSION}`;

// Global State
let appState = {
    settings: {},           
    allDatabaseDefaults: {}, 
    editedDatabases: {},     
    supplementDatabase: {},  
    currentDbName: null,     
    currentProductLine: null,
    onlineOrder: [],         
    currentSegmentIndex: -1,
    globalTimerInterval: null,
    isSettingsOpen: false,
    isSearching: false,
    isReferenceModalOpen: false,
    bmiData: {
        unit: 'standard', 
        weightLbs: '',
        heightFt: '',
        heightIn: '',
        weightKg: '',
        heightCm: ''
    }
};

// Drag and Drop State
let draggedSymptomGroup = null;
let lastDragOverSymptomGroup = null;

// DOM Cache
const DOM = {};

function cacheDOMElements() {
    // [DOM Caching logic remains identical to V7.24.0]
    // ... (All DOM elements cached here)
    DOM.regimenLengthSelect = document.getElementById('regimen-length');
    DOM.authoRegimenLengthSelect = document.getElementById('autho-regimen-length'); 
    DOM.genderSelect = document.getElementById('gender');
    DOM.clientNameInput = document.getElementById('client-name');
    DOM.clientNamePlaceholders = document.querySelectorAll('.client-name-placeholder');
    DOM.agentNamePlaceholders = document.querySelectorAll('.agent-name-placeholder');
    DOM.agentPhonePlaceholder = document.getElementById('agent-phone-placeholder');
    DOM.baseProductNameScriptPlaceholders = document.querySelectorAll('.base-product-name-script');
    DOM.dynamicPitchContent = document.getElementById('dynamic-pitch-content');
    DOM.dynamicBenefitsList = document.getElementById('dynamic-benefits-list');
    DOM.symptomChecklistContainer = document.getElementById('symptom-checklist-container');
    DOM.dynamicRecommendations = document.getElementById('dynamic-recommendations');
    DOM.sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    DOM.baseProductNameSidebar = document.getElementById('base-product-name-sidebar');
    DOM.baseProductPitchSidebar = document.getElementById('base-product-pitch-sidebar');
    DOM.discoveryQuestionsList = document.getElementById('discovery-questions-list');
    DOM.guaranteeDays1 = document.getElementById('guarantee-days-1');
    DOM.guaranteeDays2 = document.getElementById('guarantee-days-2');
    DOM.orderBreakdownCompletionWording = document.getElementById('order-breakdown-completion-wording');
    DOM.generatedNotes = document.getElementById('generated-notes');
    DOM.customNotes = document.getElementById('custom-notes');
    DOM.copyNotesBtn = document.getElementById('copy-notes-btn');
    DOM.floatingTimerBar = document.getElementById('floating-timer-bar');
    DOM.startTimerManualBtn = document.getElementById('start-timer-manual-btn');
    DOM.timerSegments = [];
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
    DOM.quickEditModal = document.getElementById('quick-edit-modal');
    DOM.quickEditTitle = document.getElementById('quick-edit-title');
    DOM.quickEditContent = document.getElementById('quick-edit-content');
    DOM.quickEditCloseBtn = document.getElementById('quick-edit-close-btn');
    DOM.quickEditQuestionsBtn = document.getElementById('quick-edit-questions-btn');
    DOM.resetAppBtn = document.getElementById('reset-app-btn');
    DOM.resetConfirmModal = document.getElementById('reset-confirm-modal');
    DOM.resetConfirmBtn = document.getElementById('reset-confirm-btn');
    DOM.resetCancelBtn = document.getElementById('reset-cancel-btn');
    DOM.resetDefaultsConfirmModal = document.getElementById('reset-defaults-confirm-modal');
    DOM.resetDefaultsConfirmBtn = document.getElementById('reset-defaults-confirm-btn');
    DOM.resetDefaultsCancelBtn = document.getElementById('reset-defaults-cancel-btn');
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
    DOM.titleSearchContainer = document.getElementById('title-search-container');
    DOM.scriptTitleDisplay = document.getElementById('script-title-display');
    DOM.titleClickWrapper = document.getElementById('title-click-wrapper');
    DOM.titleSearchNote = document.getElementById('title-search-note');
    DOM.scriptSearchInput = document.getElementById('script-search-input');
    DOM.scriptSearchResults = document.getElementById('script-search-results');
    DOM.onlineOrderEditor = document.getElementById('online-order-editor');
    DOM.onlineOrderList = document.getElementById('online-order-list');
    DOM.onlineOrderSearch = document.getElementById('online-order-search');
    DOM.onlineOrderSearchResults = document.getElementById('online-order-search-results');
    DOM.orderBreakdownOnlinePart = document.getElementById('order-breakdown-online-part');
    DOM.authoScriptOnlinePart = document.getElementById('autho-script-online-part');
    DOM.bmiModal = document.getElementById('bmi-modal');
    DOM.bmiModalCloseBtn = document.getElementById('bmi-modal-close-btn');
    DOM.bmiUnitStandard = document.getElementById('bmi-unit-standard');
    DOM.bmiUnitMetric = document.getElementById('bmi-unit-metric');
    DOM.bmiInputsStandard = document.getElementById('bmi-inputs-standard');
    DOM.bmiInputsMetric = document.getElementById('bmi-inputs-metric');
    DOM.bmiWeightLbs = document.getElementById('bmi-weight-lbs');
    DOM.bmiHeightFt = document.getElementById('bmi-height-ft');
    DOM.bmiHeightIn = document.getElementById('bmi-height-in');
    DOM.bmiWeightKg = document.getElementById('bmi-weight-kg');
    DOM.bmiHeightCm = document.getElementById('bmi-height-cm');
    DOM.bmiResultValue = document.getElementById('bmi-result-value');
    DOM.bmiResultCategory = document.getElementById('bmi-result-category');
    DOM.bmiHealthyRange = document.getElementById('bmi-healthy-range');
    DOM.bmiWeightGoal = document.getElementById('bmi-weight-goal');
    DOM.psaModal = document.getElementById('psa-modal');
    DOM.psaModalCloseBtn = document.getElementById('psa-modal-close-btn');

    if (AppUI.cacheReferenceDOMElements) {
        AppUI.cacheReferenceDOMElements();
    }
}

// REMOVED: getAvailableProductLines (Moved to script-ui.js)

// --- Initialization Logic ---

function init() {
    // Check for critical config files
    if (typeof APP_CONFIG === 'undefined' || typeof DATABASE_CONFIGS === 'undefined' || typeof SCRIPT_VERSION === 'undefined') {
        let error = "CRITICAL ERROR: Failed to load config files.";
        if (typeof APP_CONFIG === 'undefined') error += " `APP_CONFIG` is missing. ";
        if (typeof DATABASE_CONFIGS === 'undefined') error += " `DATABASE_CONFIGS` is missing. ";
        if (typeof SCRIPT_VERSION === 'undefined') error += " `SCRIPT_VERSION` is missing (build error). ";
        console.error(error);
        setTimeout(() => {
            document.body.innerHTML = `<div style="color: red; padding: 20px;">${error} Check console.</div>`;
        }, 100);
        return;
    }
    
    cacheDOMElements();
    loadState();
    setupEventListeners();
    initAppUI();
}

function initAppUI() {
    updateAgentNameUI();
    updateSupplementWordingUI(); 
    
    // Render Sidebar Components
    if (AppUI.renderReferenceSidebar) AppUI.renderReferenceSidebar(); 
    if (AppUI.renderKnowledgeButton) AppUI.renderKnowledgeButton(); 
    
    renderDiscoveryQuestions();
    renderSymptomChecklist();
    AppUI.renderOnlineOrderEditor();
    renderAllScript();
    
    // Initialize Timer UI
    AppUI.createTimerBar(); 
    AppUI.updateTimerBarUI(); 
    
    // Misc UI
    updateClientName(DOM.clientNameInput.value);
    updateTimerControlsVisibility();
    
    // Init Product Line Switcher
    if (AppUI.renderProductLineSwitcher) AppUI.renderProductLineSwitcher();
}

// --- State Loading ---

function loadState() {
    let savedAppSettings = {};
    try {
        savedAppSettings = JSON.parse(localStorage.getItem(APP_SETTINGS_KEY)) || {};
    } catch (e) {
        console.error("Failed to parse saved appSettings:", e);
    }
    appState.settings = AppUI.simpleDeepMerge(AppUI.deepCopy(APP_CONFIG), savedAppSettings);
    
    // Reset timer states on load
    if (appState.settings.segments) {
        appState.settings.segments.forEach(s => {
            s.state = 'pending'; s.progress = 0; s.overtime = 0; s.startTime = null;
        });
    }

    appState.allDatabaseDefaults = AppUI.deepCopy(DATABASE_CONFIGS);

    try {
        appState.editedDatabases = JSON.parse(localStorage.getItem(EDITED_DATABASES_KEY)) || {};
    } catch (e) {
        console.error("Failed to parse saved editedDatabases:", e);
        appState.editedDatabases = {};
    }

    const defaultDbName = Object.keys(appState.allDatabaseDefaults)[0]; 
    const lastDbName = localStorage.getItem(LAST_DB_NAME_KEY) || defaultDbName;
    
    loadSupplementDb(lastDbName, false);
}

function loadSupplementDb(dbName, resetCall = true) {
    appState.isSearching = false; 
    let defaultConfig = appState.allDatabaseDefaults[dbName];
    let editedConfig = appState.editedDatabases[dbName];
    
    if (!defaultConfig && !editedConfig) {
        console.error(`Database "${dbName}" not found. Loading first available.`);
        dbName = Object.keys(appState.allDatabaseDefaults)[0];
        defaultConfig = appState.allDatabaseDefaults[dbName];
        editedConfig = appState.editedDatabases[dbName];
    }
    
    const baseConfig = defaultConfig ? AppUI.deepCopy(defaultConfig) : {};
    appState.supplementDatabase = AppUI.simpleDeepMerge(baseConfig, editedConfig || {});
    
    appState.currentDbName = dbName;
    appState.currentProductLine = appState.supplementDatabase.productLine || "General";
    
    localStorage.setItem(LAST_DB_NAME_KEY, dbName);

    // Data Migrations & Safety Checks
    if (!appState.supplementDatabase.questions) appState.supplementDatabase.questions = [];
    else if (appState.supplementDatabase.questions.length > 0 && typeof appState.supplementDatabase.questions[0] === 'string') {
        appState.supplementDatabase.questions = appState.supplementDatabase.questions.map(q => ({
            id: `q-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            text: q,
            group: "General"
        }));
    }

    if (!appState.supplementDatabase.questionGroups) {
        const uniqueGroups = [...new Set(appState.supplementDatabase.questions.map(q => q.group || "General"))];
        appState.supplementDatabase.questionGroups = uniqueGroups.map(g => ({
            id: `group-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
            name: g,
            gender: "any"
        }));
    }
    
    if (!appState.supplementDatabase.guaranteeDays) appState.supplementDatabase.guaranteeDays = 60; 
    
    if (!appState.supplementDatabase.references) {
        appState.supplementDatabase.references = [];
    } else {
        appState.supplementDatabase.references.forEach(ref => {
            if (!ref.icon) ref.icon = 'book';
            if (!ref.type) ref.type = 'website';
            if (!ref.id) ref.id = `ref-${Date.now()}-${Math.random()}`;
        });
    }

    appState.onlineOrder = [
        { name: appState.supplementDatabase.baseProduct.name.replace(' (Base)', ''), quantity: 6 }
    ];

    try {
        initAppUI();
    } catch (e) {
        console.error("Critical Render Error in loadSupplementDb:", e);
    }
    
    handleStrictGenderLogic();

    if (resetCall) {
        resetForNextCall();
    }
    
    if (typeof lucide !== 'undefined') {
        setTimeout(() => lucide.createIcons(), 50);
    }
}

function handleStrictGenderLogic() {
    if (appState.supplementDatabase.baseProduct && appState.supplementDatabase.baseProduct.gender) {
        const requiredGender = appState.supplementDatabase.baseProduct.gender;
        if (requiredGender === 'male' || requiredGender === 'female') {
            if (DOM.genderSelect) {
                DOM.genderSelect.value = requiredGender;
                DOM.genderSelect.disabled = true; 
            }
            let modified = false;
            if (appState.supplementDatabase.recommendations) {
                appState.supplementDatabase.recommendations.forEach(rec => {
                    if (rec.gender !== requiredGender) {
                        rec.gender = requiredGender;
                        modified = true;
                    }
                });
            }
            if (modified) saveSettingsToStorage();
        } else {
            if (DOM.genderSelect) DOM.genderSelect.disabled = false;
        }
    } else {
        if (DOM.genderSelect) DOM.genderSelect.disabled = false;
    }
}

function saveSettingsToStorage() {
    try {
        localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(appState.settings));
        appState.editedDatabases[appState.currentDbName] = appState.supplementDatabase;
        localStorage.setItem(EDITED_DATABASES_KEY, JSON.stringify(appState.editedDatabases));
    } catch (e) {
        console.error("Failed to save settings to localStorage:", e);
    }
}

// --- UI Helpers ---

function updateAgentNameUI() {
    const displayName = appState.settings.agentName || "[Agent Name]";
    if (DOM.agentNamePlaceholders) DOM.agentNamePlaceholders.forEach(el => el.textContent = displayName);
}

function updateSupplementWordingUI() {
    const baseProduct = appState.supplementDatabase.baseProduct;
    const baseProductName = baseProduct.name.replace(' (Base)', '');
    
    if (AppUI.renderTitleUI) AppUI.renderTitleUI();
    
    if (DOM.baseProductNameSidebar) DOM.baseProductNameSidebar.textContent = baseProduct.name;
    if (DOM.baseProductPitchSidebar) DOM.baseProductPitchSidebar.textContent = baseProduct.pitch;
    
    if (DOM.baseProductNameScriptPlaceholders) {
        DOM.baseProductNameScriptPlaceholders.forEach(el => {
            el.textContent = baseProductName;
        });
    }
}

function updateClientName(name) {
    const displayName = name || "[Client Name]";
    if (DOM.clientNamePlaceholders) DOM.clientNamePlaceholders.forEach(el => el.textContent = displayName);
}

function updateTimerControlsVisibility() {
    if (DOM.startTimerManualBtn) {
        DOM.startTimerManualBtn.classList.toggle('hidden', appState.currentSegmentIndex !== -1);
    }
}

// --- Rendering Core Sections ---

function renderDiscoveryQuestions() {
    if (!DOM.discoveryQuestionsList) return;
    DOM.discoveryQuestionsList.innerHTML = '';
    
    const questions = appState.supplementDatabase.questions || [];
    if (questions.length === 0) {
        DOM.discoveryQuestionsList.innerHTML = '<div class="text-gray-400 italic pl-4">No discovery questions configured.</div>';
        return;
    }
    
    const groupsConfig = appState.supplementDatabase.questionGroups || [];
    const selectedGender = DOM.genderSelect ? DOM.genderSelect.value : 'any';
    const groupedQuestionsMap = {};
    
    questions.forEach(q => {
        const groupName = (typeof q === 'object' && q.group) ? q.group : "General";
        if (!groupedQuestionsMap[groupName]) groupedQuestionsMap[groupName] = [];
        groupedQuestionsMap[groupName].push(q);
    });
    
    const renderedGroups = new Set();
    groupsConfig.forEach(groupConf => {
        const groupName = groupConf.name;
        const groupGender = groupConf.gender || 'any';
        const shouldShow = (groupGender === 'any') || (groupGender === selectedGender);
        if (shouldShow && groupedQuestionsMap[groupName]) {
            renderGroup(groupName, groupedQuestionsMap[groupName]);
            renderedGroups.add(groupName);
        }
    });
    
    for (const [groupName, qs] of Object.entries(groupedQuestionsMap)) {
        if (!renderedGroups.has(groupName)) {
            renderGroup(groupName, qs);
        }
    }
    
    function renderGroup(name, qs) {
        const groupContainer = document.createElement('div');
        groupContainer.className = "mb-4";
        const showHeader = name !== "General" || DOM.discoveryQuestionsList.children.length > 0;
        if (showHeader) {
            const header = document.createElement('h5');
            header.className = "text-sm font-bold text-blue-300 mb-1 uppercase tracking-wide";
            header.textContent = name;
            groupContainer.appendChild(header);
        }
        const ul = document.createElement('ul');
        ul.className = "list-disc pl-5 space-y-1 text-gray-300";
        qs.forEach(q => {
            const li = document.createElement('li');
            li.textContent = typeof q === 'object' ? q.text : q;
            ul.appendChild(li);
        });
        groupContainer.appendChild(ul);
        DOM.discoveryQuestionsList.appendChild(groupContainer);
    }
}

function renderSymptomChecklist() {
    if (!DOM.symptomChecklistContainer) return;
    const selectedGender = DOM.genderSelect ? DOM.genderSelect.value : 'any';
    DOM.symptomChecklistContainer.innerHTML = '';
    
    if (!appState.supplementDatabase || !appState.supplementDatabase.recommendations) {
        DOM.symptomChecklistContainer.innerHTML = `<p class="italic text-gray-400">No supplement data loaded.</p>`;
        return;
    }
    
    const baseGender = appState.supplementDatabase.baseProduct?.gender || 'any';
    const isStrictBaseGender = baseGender === 'male' || baseGender === 'female';
    
    const filteredSupplements = appState.supplementDatabase.recommendations.filter(supp => {
        if (isStrictBaseGender) return true; 
        return supp.gender === 'any' || supp.gender === selectedGender;
    });
    
    if (filteredSupplements.length === 0) {
        DOM.symptomChecklistContainer.innerHTML = `<p class="italic text-gray-400">No supplements match the selected gender.</p>`;
        return;
    }
    
    filteredSupplements.forEach(supp => {
        if (!supp.symptoms || supp.symptoms.length === 0) return;
        const groupEl = document.createElement('div');
        groupEl.className = 'symptom-group-container';
        groupEl.dataset.suppId = supp.id; 
        groupEl.innerHTML = `
            <h4 class="symptom-group-header flex justify-between items-center">
                <span>${supp.name}</span>
                <div class="flex items-center gap-2">
                    <button class="quick-edit-btn text-gray-500 hover:text-white transition-colors p-1 rounded" data-supp-id="${supp.id}" title="Quick Edit">
                        <i data-lucide="settings" class="w-5 h-5"></i>
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
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderAllScript() {
    if (!appState.supplementDatabase || !appState.supplementDatabase.baseProduct) return;
    
    const months = parseInt(DOM.regimenLengthSelect.value, 10);
    const mainSuppName = appState.supplementDatabase.baseProduct.name.replace(' (Base)', '');
    const pricePerBottle = AppUI.getPricePerBottle(months);
    const guaranteeDays = appState.supplementDatabase.guaranteeDays || 60;

    DOM.authoRegimenLengthSelect.value = months;

    const activeSupplementIds = new Set();
    const checkedBoxes = DOM.symptomChecklistContainer.querySelectorAll('.script-checkbox:checked');
    const groupedActiveSymptoms = {};

    checkedBoxes.forEach(cb => {
        const suppId = cb.dataset.supplementId;
        const sympId = cb.dataset.symptomId;
        activeSupplementIds.add(suppId);
        
        const supp = appState.supplementDatabase.recommendations.find(s => s.id === suppId);
        if (!supp) return;
        const symp = supp.symptoms.find(s => s.id === sympId);
        if (!symp) return;

        if (!groupedActiveSymptoms[suppId]) {
            groupedActiveSymptoms[suppId] = {
                suppName: supp.name,
                symptoms: []
            };
        }
        
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
    
    let addonNames = activeRecommendations.map(rec => rec.name.replace(/\(.*\)/, '').trim());
    
    const onlineBottlesOrdered = appState.onlineOrder.find(item => item.name === mainSuppName)?.quantity || 0;
    const bottlesOfMainToOrder = Math.max(0, months - onlineBottlesOrdered);

    let addonsToOrder = [];
    let totalAddonBottlesToOrder = 0;

    for (const rec of activeRecommendations) {
        const originalAddonName = rec.name; 
        const onlineAddonQty = appState.onlineOrder.find(item => item.name === originalAddonName)?.quantity || 0;
        const bottlesNeeded = Math.max(0, months - onlineAddonQty);
        if (bottlesNeeded > 0) {
            addonsToOrder.push({
                name: rec.name.replace(/\(.*\)/, '').trim(), 
                quantity: bottlesNeeded
            });
        }
        totalAddonBottlesToOrder += bottlesNeeded;
    }
    
    const totalCost = (bottlesOfMainToOrder * pricePerBottle) + (totalAddonBottlesToOrder * pricePerBottle);
    const onlinePrice = (bottlesOfMainToOrder + totalAddonBottlesToOrder) * 69;
    
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
    
    let benefits = [];
    Object.values(groupedActiveSymptoms).forEach(group => {
        group.symptoms.forEach(s => benefits.push(s.sympBenefit));
    });
    DOM.dynamicBenefitsList.innerHTML = `<p class="text-lg">${AppUI.formatBenefitsList(benefits)} Okay?</p>`;

    DOM.dynamicRecommendations.innerHTML = '';
    
    const supplementGroups = Object.values(groupedActiveSymptoms);
    if (supplementGroups.length === 0) {
        DOM.sidebarPlaceholder.style.display = 'block';
    } else {
        DOM.sidebarPlaceholder.style.display = 'none';
        supplementGroups.forEach(group => {
            const sidebarGroupEl = document.createElement('div');
            sidebarGroupEl.className = 'sidebar-supplement-card sidebar-item-enter';
            let headerHTML = `
                <div class="sidebar-supplement-card-header">
                    <h3 class="sidebar-supplement-card-supp-name">${group.suppName}</h3>
                </div>
            `;
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

    let onlineOrderSummary = "Now online you've already ordered ";
    if (appState.onlineOrder.length === 0) {
        onlineOrderSummary += "no items.";
    } else {
        onlineOrderSummary += appState.onlineOrder.map(item => `<strong class="text-yellow-400">${item.quantity} ${item.name}</strong>`).join(', ') + ".";
    }
    DOM.authoScriptOnlinePart.innerHTML = onlineOrderSummary;

    const needsMain = bottlesOfMainToOrder > 0;
    const needsAddons = totalAddonBottlesToOrder > 0; 
    let authoScriptWording = "";
    
    const regimenCompletionText = (months < 18) 
        ? `for the first <strong class="text-yellow-400">${months} months</strong> of your regimen` 
        : "to complete your regimen";

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
    
    let onlineOrderText = "Online, you ordered: ";
    if (appState.onlineOrder.length === 0) {
        onlineOrderText = "You have no items in your online order.";
    } else {
        onlineOrderText += appState.onlineOrder.map(item => `<strong class="text-yellow-400">${item.quantity} ${item.name}</strong>`).join(', ');
    }
    DOM.orderBreakdownOnlinePart.innerHTML = onlineOrderText + " for [ONLINE ORDER COST]. This was already processed before.";

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
    
    document.getElementById('autho-length-1').textContent = months;
    document.getElementById('autho-script-dynamic-wording').innerHTML = authoScriptWording;
    
    const onlineCostEl = document.getElementById('autho-online-cost');
    if (onlineCostEl) onlineCostEl.textContent = onlinePrice.toFixed(2);
    
    document.getElementById('autho-cost').textContent = totalCost.toFixed(2);
    document.getElementById('autho-cost-2').textContent = totalCost.toFixed(2);
    document.getElementById('order-breakdown-dynamic-wording').innerHTML = orderBreakdownWording;
    document.getElementById('decline-cost').textContent = totalCost.toFixed(2);

    if (DOM.guaranteeDays1) DOM.guaranteeDays1.textContent = guaranteeDays;
    if (DOM.guaranteeDays2) DOM.guaranteeDays2.textContent = guaranteeDays;

    if (DOM.orderBreakdownCompletionWording) {
        if (months < 18) {
            DOM.orderBreakdownCompletionWording.innerHTML = `That will complete the first <strong class="text-yellow-400">${months} months</strong> of your regimen and you'll see this coming out in two different packages. Give the order 5 to 7 business days to reach you, okay? And for your clarity, the bank statement will be from "Supplement Phone Order."`;
        } else {
            DOM.orderBreakdownCompletionWording.innerHTML = `That will complete your regiment and you'll see this coming out in two different packages. Give the order 5 to 7 business days to reach you, okay? And for your clarity, the bank statement will be from "Supplement Phone Order."`;
        }
    }
}

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

    appState.onlineOrder = [
        { name: appState.supplementDatabase.baseProduct.name.replace(' (Base)', ''), quantity: 6 }
    ];
    AppUI.renderOnlineOrderEditor();
    
    appState.bmiData = { unit: 'standard', weightLbs: '', heightFt: '', heightIn: '', weightKg: '', heightCm: '' };
    if(DOM.bmiModal) {
        const inputs = DOM.bmiModal.querySelectorAll('input');
        inputs.forEach(i => i.value = '');
        AppUI.updateBmiUI(0);
        AppUI.handleBmiUnitToggle('standard');
    }

    renderAllScript();
    
    if (DOM.timerSegments && DOM.timerSegments.length > 0) {
        AppUI.updateTimerBarUI(); 
    } else {
        AppUI.createTimerBar();
        AppUI.updateTimerBarUI();
    }

    updateTimerControlsVisibility();
    DOM.resetConfirmModal.classList.add('hidden');
    
    if(AppUI.reAttachTimerStartListener) {
        AppUI.reAttachTimerStartListener();
    }
}

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
        setTimeout(() => {
            if (draggedSymptomGroup) draggedSymptomGroup.classList.add('dragging');
        }, 0);
    });

    DOM.symptomChecklistContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        const targetEl = e.target.closest('.symptom-group-container');
        if (lastDragOverSymptomGroup && lastDragOverSymptomGroup !== targetEl) {
            lastDragOverSymptomGroup.classList.remove('drag-over-target');
        }
        if (targetEl && targetEl !== draggedSymptomGroup) {
            targetEl.classList.add('drag-over-target');
            lastDragOverSymptomGroup = targetEl;
        }
    });

    DOM.symptomChecklistContainer.addEventListener('dragend', () => {
        if (draggedSymptomGroup) draggedSymptomGroup.classList.remove('dragging');
        if (lastDragOverSymptomGroup) lastDragOverSymptomGroup.classList.remove('drag-over-target');
        draggedSymptomGroup = null;
        lastDragOverSymptomGroup = null;
    });

    DOM.symptomChecklistContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        if (lastDragOverSymptomGroup) lastDragOverSymptomGroup.classList.remove('drag-over-target');
        const targetEl = e.target.closest('.symptom-group-container');
        if (targetEl && draggedSymptomGroup && targetEl !== draggedSymptomGroup) {
            const draggedId = draggedSymptomGroup.dataset.suppId;
            const targetId = targetEl.dataset.suppId;
            const draggedIndex = appState.supplementDatabase.recommendations.findIndex(s => s.id === draggedId);
            const targetIndex = appState.supplementDatabase.recommendations.findIndex(s => s.id === targetId);
            if (draggedIndex > -1 && targetIndex > -1) {
                const [draggedItem] = appState.supplementDatabase.recommendations.splice(draggedIndex, 1);
                appState.supplementDatabase.recommendations.splice(targetIndex, 0, draggedItem);
                saveSettingsToStorage();
                renderSymptomChecklist(); 
            }
        }
        if (draggedSymptomGroup) draggedSymptomGroup.classList.remove('dragging');
        draggedSymptomGroup = null;
        lastDragOverSymptomGroup = null;
    });
}

function setupEventListeners() {
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
        renderDiscoveryQuestions();
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

    DOM.symptomChecklistContainer.addEventListener('click', (e) => {
        const editBtn = e.target.closest('.quick-edit-btn');
        if (editBtn) {
            const suppId = editBtn.dataset.suppId;
            if (AppUI.openQuickEdit && suppId) {
                AppUI.openQuickEdit(suppId);
            }
        }
    });
    
    if(DOM.quickEditCloseBtn) {
        DOM.quickEditCloseBtn.addEventListener('click', () => {
            DOM.quickEditModal.classList.add('hidden');
        });
    }

    if (DOM.quickEditQuestionsBtn) {
        DOM.quickEditQuestionsBtn.addEventListener('click', () => {
            if (AppUI.openQuestionEditor) {
                AppUI.openQuestionEditor();
            }
        });
    }

    DOM.resetAppBtn.addEventListener('click', () => DOM.resetConfirmModal.classList.remove('hidden'));
    DOM.resetCancelBtn.addEventListener('click', () => DOM.resetConfirmModal.classList.add('hidden'));
    DOM.resetConfirmBtn.addEventListener('click', resetForNextCall);

    AppUI.initUtilityEventListeners(); 
    AppUI.initTimerEventListeners();
    AppUI.initSettingsEventListeners();
    AppUI.initSearchEventListeners();
    AppUI.initIOEventListeners();
    AppUI.initOrderEditorEventListeners();
    AppUI.initReferenceEventListeners(); 
    AppUI.initKnowledgeEventListeners();
    
    initDragAndDropEventListeners(); 
    initBmiEventListeners();
}

document.addEventListener('DOMContentLoaded', init);

// --- BMI Logic ---

AppUI.openBmiModal = function() {
    DOM.bmiWeightLbs.value = appState.bmiData.weightLbs;
    DOM.bmiHeightFt.value = appState.bmiData.heightFt;
    DOM.bmiHeightIn.value = appState.bmiData.heightIn;
    DOM.bmiWeightKg.value = appState.bmiData.weightKg;
    DOM.bmiHeightCm.value = appState.bmiData.heightCm;
    
    AppUI.handleBmiUnitToggle(appState.bmiData.unit || 'standard');
    AppUI.calculateBMI();
    DOM.bmiModal.classList.remove('hidden');
}

AppUI.closeBmiModal = function() {
    DOM.bmiModal.classList.add('hidden');
}

AppUI.handleBmiUnitToggle = function(unit) {
    appState.bmiData.unit = unit;
    if (unit === 'standard') {
        DOM.bmiUnitStandard.classList.add('active');
        DOM.bmiUnitMetric.classList.remove('active');
        DOM.bmiInputsStandard.classList.remove('hidden');
        DOM.bmiInputsMetric.classList.add('hidden');
    } else {
        DOM.bmiUnitStandard.classList.remove('active');
        DOM.bmiUnitMetric.classList.add('active');
        DOM.bmiInputsStandard.classList.add('hidden');
        DOM.bmiInputsMetric.classList.remove('hidden');
    }
    AppUI.calculateBMI();
}

AppUI.calculateBMI = function() {
    let bmi = 0;
    let minWeight = 0;
    let maxWeight = 0;
    let currentWeight = 0;
    const HEALTHY_BMI_MIN = 18.5;
    const HEALTHY_BMI_MAX = 24.9;
    
    if (appState.bmiData.unit === 'standard') {
        const lbs = parseFloat(DOM.bmiWeightLbs.value);
        const ft = parseFloat(DOM.bmiHeightFt.value);
        const inch = parseFloat(DOM.bmiHeightIn.value) || 0;
        appState.bmiData.weightLbs = DOM.bmiWeightLbs.value;
        appState.bmiData.heightFt = DOM.bmiHeightFt.value;
        appState.bmiData.heightIn = DOM.bmiHeightIn.value;
        
        if (lbs > 0 && ft > 0) {
            const totalInches = (ft * 12) + inch;
            bmi = 703 * (lbs / (totalInches * totalInches));
            currentWeight = lbs;
            minWeight = (HEALTHY_BMI_MIN * totalInches * totalInches) / 703;
            maxWeight = (HEALTHY_BMI_MAX * totalInches * totalInches) / 703;
        }
    } else {
        const kg = parseFloat(DOM.bmiWeightKg.value);
        const cm = parseFloat(DOM.bmiHeightCm.value);
        appState.bmiData.weightKg = DOM.bmiWeightKg.value;
        appState.bmiData.heightCm = DOM.bmiHeightCm.value;

        if (kg > 0 && cm > 0) {
            const m = cm / 100;
            bmi = kg / (m * m);
            currentWeight = kg;
            minWeight = HEALTHY_BMI_MIN * m * m;
            maxWeight = HEALTHY_BMI_MAX * m * m;
        }
    }
    AppUI.updateBmiUI(bmi, minWeight, maxWeight, currentWeight);
}

AppUI.updateBmiUI = function(bmi, minWeight, maxWeight, currentWeight) {
    if (!bmi || isNaN(bmi) || bmi === Infinity) {
        DOM.bmiResultValue.textContent = "--.-";
        DOM.bmiResultCategory.textContent = "Enter Details";
        DOM.bmiResultCategory.className = "bmi-category-badge bg-gray-800 text-gray-500";
        DOM.bmiResultValue.parentElement.style.borderColor = "#374151"; 
        DOM.bmiResultValue.parentElement.style.backgroundColor = "#111827";
        if (DOM.bmiHealthyRange) DOM.bmiHealthyRange.textContent = "-- - --";
        if (DOM.bmiWeightGoal) {
            DOM.bmiWeightGoal.textContent = "--";
            DOM.bmiWeightGoal.className = "bmi-detail-value";
        }
        return;
    }
    
    const bmiFixed = bmi.toFixed(1);
    DOM.bmiResultValue.textContent = bmiFixed;
    
    let category = "";
    let colorClass = "";
    
    if (bmi < 18.5) {
        category = "Underweight";
        colorClass = "bmi-underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Weight";
        colorClass = "bmi-normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        colorClass = "bmi-overweight";
    } else {
        category = "Obese";
        colorClass = "bmi-obese";
    }
    
    DOM.bmiResultCategory.textContent = category;
    DOM.bmiResultCategory.className = `bmi-category-badge ${colorClass}`;
    
    const colorMap = { "bmi-underweight": "#60a5fa", "bmi-normal": "#4ade80", "bmi-overweight": "#facc15", "bmi-obese": "#f87171" };
    const bgMap = { "bmi-underweight": "rgba(96, 165, 250, 0.05)", "bmi-normal": "rgba(74, 222, 128, 0.05)", "bmi-overweight": "rgba(250, 204, 21, 0.05)", "bmi-obese": "rgba(248, 113, 113, 0.05)" };

    DOM.bmiResultValue.parentElement.style.borderColor = colorMap[colorClass];
    DOM.bmiResultValue.parentElement.style.backgroundColor = bgMap[colorClass];

    const unitLabel = appState.bmiData.unit === 'standard' ? 'lbs' : 'kg';
    DOM.bmiHealthyRange.textContent = `${Math.round(minWeight)} - ${Math.round(maxWeight)} ${unitLabel}`;
    
    let goalText = "";
    let goalClass = "bmi-detail-value"; 
    
    if (bmi < 18.5) {
        const gainNeeded = minWeight - currentWeight;
        goalText = `Gain ${Math.round(gainNeeded)} ${unitLabel}`;
        goalClass += " text-goal-gain"; 
    } else if (bmi > 24.9) {
        const lossNeeded = currentWeight - maxWeight;
        goalText = `Lose ${Math.round(lossNeeded)} ${unitLabel}`;
        goalClass += " text-goal-loss";
    } else {
        goalText = "Maintain";
        goalClass += " text-goal-maintain";
    }
    DOM.bmiWeightGoal.textContent = goalText;
    DOM.bmiWeightGoal.className = goalClass;
}

function initBmiEventListeners() {
    if (!DOM.bmiModal) return;
    DOM.bmiModalCloseBtn.addEventListener('click', AppUI.closeBmiModal);
    DOM.bmiUnitStandard.addEventListener('click', () => AppUI.handleBmiUnitToggle('standard'));
    DOM.bmiUnitMetric.addEventListener('click', () => AppUI.handleBmiUnitToggle('metric'));
    const allInputs = DOM.bmiModal.querySelectorAll('input');
    allInputs.forEach(input => {
        input.addEventListener('input', AppUI.calculateBMI);
    });
}
