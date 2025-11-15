/**
 * ============================================
 * SCRIPT TOOL APPLICATION LOGIC (V6.3)
 * ============================================
 * * This file contains all the business logic for the script tool.
 * * CHANGES (V6.3):
 * - REMOVED the "dev mode" script loader.
 * - The project is now built *only* via the build.sh script.
 */

// --- App State ---
// This will be populated by loadState()
let appState = {
    settings: {},           // Holds agentName, segments
    allDatabaseDefaults: {}, // Holds the original, default DBs
    editedDatabases: {},     // Holds user-edited DBs from localStorage
    supplementDatabase: {},  // The *currently active* supplement DB
    currentDbName: null,     // The key of the currently active DB
    currentSegmentIndex: -1,
    globalTimerInterval: null,
    isSettingsOpen: false
};

// --- DOM CACHE (Query once) ---
const DOM = {};
function cacheDOMElements() {
    DOM.regimenLengthSelect = document.getElementById('regimen-length');
    DOM.authoRegimenLengthSelect = document.getElementById('autho-regimen-length'); 
    DOM.onlineBottlesSelect = document.getElementById('online-bottles');
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
    DOM.baseProductNameSetting = document.getElementById('base-product-name-setting');
    DOM.baseProductPitchSetting = document.getElementById('base-product-pitch-setting');
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
    DOM.exportBtn = document.getElementById('export-btn');
    DOM.importBtn = document.getElementById('import-btn');
    DOM.importModal = document.getElementById('import-modal');
    DOM.importModalCloseBtn = document.getElementById('import-modal-close-btn');
    DOM.importTextarea = document.getElementById('import-textarea');
    DOM.importConfirmBtn = document.getElementById('import-confirm-btn');
    DOM.importCancelBtn = document.getElementById('import-cancel-btn');
    DOM.importMessage = document.getElementById('import-message');
    DOM.databaseSwitcher = document.getElementById('database-switcher');
    DOM.scriptTitle = document.getElementById('script-title');
}


// --- Utility Functions ---

function simpleDeepMerge(target, source) {
    let output = { ...target };
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                output[key] = simpleDeepMerge(target[key] || {}, source[key]);
            } else {
                output[key] = source[key];
            }
        }
    }
    return output;
}

function deepCopy(obj) {
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

function getPricePerBottle(months) {
    if (months >= 12) return 45;
    if (months >= 6) return 47;
    return 49;
}

function formatAddonList(names) {
    if (names.length === 0) return "no additional supplements";
    if (names.length === 1) return names[0];
    if (names.length === 2) return names.join(' and ');
    return names.slice(0, -1).join(', ') + ', and '.concat(names.slice(-1));
}

function formatBenefitsList(benefits) {
    if (benefits.length === 0) return "This regimen is designed to help your pancreas heal.";
    let benefitString = "Now, this is going to " + benefits.slice(0, -1).join(', ') + (benefits.length > 1 ? ', and ' : '') + benefits.slice(-1) + ".";
    return benefitString.charAt(0).toUpperCase() + benefitString.slice(1);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

// --- State Management Functions ---

function loadState() {
    // 1. Load default app settings and merge saved app settings
    let savedAppSettings = {};
    try {
        savedAppSettings = JSON.parse(localStorage.getItem('appSettings')) || {};
    } catch (e) {
        console.error("Failed to parse saved appSettings:", e);
    }
    appState.settings = simpleDeepMerge(deepCopy(APP_CONFIG), savedAppSettings);
    appState.settings.segments.forEach(s => {
        s.state = 'pending'; s.progress = 0; s.overtime = 0; s.startTime = null;
    });

    // 2. Load all default supplement databases
    appState.allDatabaseDefaults = deepCopy(DATABASE_CONFIGS);

    // 3. Load all *edited* supplement databases
    try {
        appState.editedDatabases = JSON.parse(localStorage.getItem('editedDatabases')) || {};
    } catch (e) {
        console.error("Failed to parse saved editedDatabases:", e);
        appState.editedDatabases = {};
    }

    // 4. Load the last used supplement
    const defaultDbName = Object.keys(appState.allDatabaseDefaults)[0]; // Fallback to the first DB
    const lastDbName = localStorage.getItem('lastDbName') || defaultDbName;
    
    // 5. Populate the DB switcher
    DOM.databaseSwitcher.innerHTML = '';
    Object.keys(appState.allDatabaseDefaults).forEach(dbName => {
        const option = document.createElement('option');
        option.value = dbName;
        option.textContent = dbName;
        if (dbName === lastDbName) {
            option.selected = true;
        }
        DOM.databaseSwitcher.appendChild(option);
    });

    // 6. Load the active supplement config
    loadSupplementDb(lastDbName, false); // false = don't reset call
}

/**
 * Loads a specific supplement database into the active state.
 * @param {string} dbName - The key of the database to load (e.g., "GL Pro")
 * @param {boolean} [resetCall=true] - Whether to reset the call state (timer, client name, etc.)
 */
function loadSupplementDb(dbName, resetCall = true) {
    let defaultConfig = appState.allDatabaseDefaults[dbName];
    if (!defaultConfig) {
        console.error(`Database "${dbName}" not found. Loading first available.`);
        dbName = Object.keys(appState.allDatabaseDefaults)[0];
        defaultConfig = appState.allDatabaseDefaults[dbName];
    }
    
    const editedConfig = appState.editedDatabases[dbName];
    
    // Merge edited version over the default
    appState.supplementDatabase = simpleDeepMerge(deepCopy(defaultConfig), editedConfig || {});
    appState.currentDbName = dbName;
    localStorage.setItem('lastDbName', dbName);

    // Update the dropdown just in case
    DOM.databaseSwitcher.value = dbName;
    
    // Re-render the entire UI
    initAppUI();

    if (resetCall) {
        resetForNextCall();
    }
}

function saveSettingsToStorage() {
    try {
        // 1. Save app-level settings (agent, segments)
        appState.settings.agentName = appState.settings.agentName;
        appState.settings.segments = appState.settings.segments;
        localStorage.setItem('appSettings', JSON.stringify(appState.settings));

        // 2. Save the *currently edited* supplement DB
        appState.editedDatabases[appState.currentDbName] = appState.supplementDatabase;
        localStorage.setItem('editedDatabases', JSON.stringify(appState.editedDatabases));

    } catch (e) {
        console.error("Failed to save settings to localStorage:", e);
    }
}

// --- UI Update Functions (State -> DOM) ---

function updateAgentNameUI() {
    const displayName = appState.settings.agentName || "[Agent Name]";
    DOM.agentNamePlaceholders.forEach(el => el.textContent = displayName);
}

function updateSupplementWordingUI() {
    const baseProduct = appState.supplementDatabase.baseProduct;
    const baseProductName = baseProduct.name.replace(' (Base)', '');

    // Update script title
    DOM.scriptTitle.textContent = `${baseProductName} Call Script`;
    
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

// --- Timer Functions ---

function renderTimerBar() {
    DOM.floatingTimerBar.innerHTML = '';
    let isCurrentSegmentOvertime = appState.currentSegmentIndex !== -1 && appState.settings.segments[appState.currentSegmentIndex].state === 'overtime';

    appState.settings.segments.forEach((segment, index) => {
        const segmentEl = document.createElement('div');
        segmentEl.dataset.index = index;
        let content = '', progressWidth = '0%', bgClass = 'bg-gray-700 hover:bg-gray-600', animationClass = '', extraSegmentClasses = '';

        switch(segment.state) {
            case 'active':
                const elapsed = (Date.now() - segment.startTime) / 1000;
                const remaining = Math.max(0, segment.duration - elapsed);
                progressWidth = `${Math.min(100, segment.progress)}%`;
                bgClass = 'bg-blue-600';
                content = `<span class="text-sm">${segment.title}</span><span class="timer-time text-lg -mt-1">${formatTime(Math.ceil(remaining))}</span>`;
                if (segment.progress >= 90) animationClass = 'flash-grow';
                break;
            case 'overtime':
                progressWidth = '100%'; bgClass = 'bg-red-600';
                content = `<span class="text-sm">${segment.title}</span><span class="timer-time text-lg -mt-1">+${formatTime(Math.floor(segment.overtime))}</span>`;
                break;
            case 'overtime-complete':
                progressWidth = '100%'; bgClass = 'bg-red-600';
                content = `<span class="text-sm">${segment.title}</span><span class="timer-time text-lg -mt-1">+${formatTime(Math.floor(segment.overtime))}</span>`;
                break;
            case 'complete':
                progressWidth = '100%'; bgClass = 'bg-green-700';
                content = `<span class="text-sm">${segment.title}</span><span class="timer-time text-lg -mt-1">${formatTime(Math.floor(segment.duration))}</span>`;
                break;
            case 'pending':
            default:
                let isNextSegment = index === appState.currentSegmentIndex + 1;
                bgClass = 'bg-gray-700';
                if (isNextSegment || (appState.currentSegmentIndex === -1 && index === 0)) {
                    bgClass += ' hover:bg-gray-600 opacity-100';
                    if (isNextSegment && isCurrentSegmentOvertime) extraSegmentClasses = 'pulse';
                } else {
                    bgClass += ' opacity-60 hover:opacity-80';
                }
                content = `<span class="text-sm">${segment.title}</span><span class="timer-time text-lg -mt-1">${formatTime(segment.duration)}</span>`;
                break;
        }
        segmentEl.className = `timer-segment relative w-36 h-12 flex flex-col items-center justify-center rounded-full text-white font-semibold shadow-md transition-all duration-300 ${extraSegmentClasses}`;
        const progressEl = document.createElement('div');
        progressEl.className = `timer-segment-progress absolute top-0 left-0 h-full rounded-full ${bgClass} ${animationClass}`;
        progressEl.style.width = progressWidth;
        if (segment.state === 'complete' || segment.state === 'overtime' || segment.state === 'active' || segment.state === 'overtime-complete') {
            segmentEl.className += ' bg-gray-600';
        } else {
            segmentEl.className += ` ${bgClass}`;
        }
        segmentEl.innerHTML = `<div class="relative z-10 flex flex-col items-center justify-center">${content}</div>`;
        segmentEl.prepend(progressEl);
        if (animationClass) segmentEl.classList.add(...animationClass.split(' '));
        DOM.floatingTimerBar.appendChild(segmentEl);
    });
}

function updateGlobalTimer() {
    const index = appState.currentSegmentIndex;
    if (index === -1) { stopGlobalTimer(); return; }
    const segment = appState.settings.segments[index];
    if (!segment) return;
    if (segment.state === 'active') {
        const elapsed = (Date.now() - segment.startTime) / 1000;
        segment.progress = (elapsed / segment.duration) * 100;
        if (elapsed >= segment.duration) {
            segment.state = 'overtime'; segment.progress = 100; segment.startTime = Date.now();
        }
    } else if (segment.state === 'overtime') {
        segment.overtime = (Date.now() - segment.startTime) / 1000;
    }
    renderTimerBar();
}

function startGlobalTimer() { if (!appState.globalTimerInterval) appState.globalTimerInterval = setInterval(updateGlobalTimer, 100); }
function stopGlobalTimer() { clearInterval(appState.globalTimerInterval); appState.globalTimerInterval = null; }

function tryStartSegment(index) {
    if (appState.currentSegmentIndex === index && appState.settings.segments[index].state === 'active') return;
    if (appState.currentSegmentIndex === -1 && index === 0) { startSegment(0); return; }
    if (appState.currentSegmentIndex !== -1) {
        const currentSeg = appState.settings.segments[appState.currentSegmentIndex];
        if (index === appState.currentSegmentIndex + 1) {
            currentSeg.state = (currentSeg.state === 'overtime') ? 'overtime-complete' : 'complete';
            currentSeg.progress = 100;
            startSegment(index);
        }
    }
}

function startSegment(index) {
    if (!appState.settings.segments[index]) return;
    appState.currentSegmentIndex = index;
    const segment = appState.settings.segments[index];
    segment.state = 'active'; segment.progress = 0; segment.overtime = 0; segment.startTime = Date.now();
    startGlobalTimer(); renderTimerBar(); updateTimerControlsVisibility();
}

// --- Settings Modal Functions ---

function renderSettingsModal() {
    if (appState.isSettingsOpen) {
        DOM.settingsModal.classList.remove('hidden');
        DOM.agentNameSettingInput.value = appState.settings.agentName;

        // Populate segments
        DOM.segmentSettingsList.innerHTML = '';
        appState.settings.segments.forEach((segment, index) => {
            const segmentEl = document.createElement('div');
            segmentEl.className = 'flex items-center gap-3 p-3 bg-gray-700 rounded-lg';
            segmentEl.dataset.id = segment.id;
            segmentEl.innerHTML = `
                <span class="text-gray-400 font-bold">${index + 1}</span>
                <div class="flex-1">
                    <label class="text-xs text-gray-400">Title</label>
                    <input type="text" value="${segment.title.replace(/"/g, '&quot;')}" class="segment-title-input w-full bg-gray-600 text-white rounded p-2 text-sm">
                </div>
                <div class="w-24">
                    <label class="text-xs text-gray-400">Duration (sec)</label>
                    <input type="number" value="${segment.duration}" class="segment-duration-input w-full bg-gray-600 text-white rounded p-2 text-sm">
                </div>
                <button data-segment-id="${segment.id}" class="remove-segment-btn bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
            `;
            DOM.segmentSettingsList.appendChild(segmentEl);
        });

        // Populate Supplement Wording (for *current* DB)
        DOM.baseProductNameSetting.value = appState.supplementDatabase.baseProduct.name;
        DOM.baseProductPitchSetting.value = appState.supplementDatabase.baseProduct.pitch;
        
        DOM.supplementSettingsList.innerHTML = '';
        if (appState.supplementDatabase.recommendations) {
            appState.supplementDatabase.recommendations.forEach(supp => {
                const suppEl = document.createElement('div');
                suppEl.className = 'p-4 bg-gray-700 rounded-lg space-y-3';
                suppEl.dataset.suppId = supp.id;
                
                const safeName = supp.name ? supp.name.replace(/"/g, '&quot;') : "Unnamed Supplement";
                suppEl.innerHTML = `
                    <div class="flex justify-between items-center pb-2 border-b border-gray-600">
                        <div class="flex-1">
                            <label class="text-xs text-gray-400">Supplement Name</label>
                            <input type="text" value="${safeName}" class="supp-name-input w-full bg-gray-600 text-white rounded p-2 text-sm">
                        </div>
                        <select class="supp-gender-select bg-gray-600 text-white rounded p-2 text-sm ml-3">
                            <option value="any" ${supp.gender === 'any' ? 'selected' : ''}>Gender: Any</option>
                            <option value="male" ${supp.gender === 'male' ? 'selected' : ''}>Gender: Male Only</option>
                            <option value="female" ${supp.gender === 'female' ? 'selected' : ''}>Gender: Female Only</option>
                        </select>
                        <button class="remove-supplement-btn bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-1 px-3 rounded-lg ml-3">Remove</button>
                    </div>
                    <h5 class="text-sm font-semibold text-gray-300 pt-2 border-t border-gray-600">Symptoms</h5>
                `;

                const symptomsListDiv = document.createElement('div');
                symptomsListDiv.className = 'space-y-2 supp-symptoms-list';
                
                if (supp.symptoms) {
                    supp.symptoms.forEach(symp => {
                        const symptomGroup = document.createElement('div');
                        symptomGroup.className = 'symptom-input-group';
                        symptomGroup.dataset.sympId = symp.id;
                        const safeSympText = symp.text ? symp.text.replace(/"/g, '&quot;') : "";
                        const safeBenefit = symp.benefit ? symp.benefit.replace(/"/g, '&quot;') : "";
                        const safePitch = symp.pitch || "";
                        
                        symptomGroup.innerHTML = `
                            <div class="symptom-input-row">
                                <input type="text" value="${safeSympText}" class="supp-symptom-text-input w-full bg-gray-500 text-white rounded p-2 text-sm" placeholder="Symptom Text">
                                <button class="remove-symptom-btn bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </button>
                            </div>
                            <div>
                                <label>Sidebar Pitch</label>
                                <textarea rows="2" class="supp-symptom-pitch-input w-full bg-gray-500 text-white rounded p-2 text-sm" placeholder="Sidebar pitch for this symptom...">${safePitch}</textarea>
                            </div>
                            <div>
                                <label>Script Benefit</label>
                                <input type="text" value="${safeBenefit}" class="supp-symptom-benefit-input w-full bg-gray-500 text-white rounded p-2 text-sm" placeholder="Script benefit for this symptom...">
                            </div>
                        `;
                        symptomsListDiv.appendChild(symptomGroup);
                    });
                }
                suppEl.appendChild(symptomsListDiv);

                const addSymptomBtn = document.createElement('button');
                addSymptomBtn.className = 'add-symptom-btn bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-1 px-3 rounded-lg mt-2';
                addSymptomBtn.textContent = 'Add Symptom';
                suppEl.appendChild(addSymptomBtn);
                DOM.supplementSettingsList.appendChild(suppEl);
            });
        }

    } else {
        DOM.settingsModal.classList.add('hidden');
    }
}

function saveSettings() {
    // 1. Save App Settings
    appState.settings.agentName = DOM.agentNameSettingInput.value || "[Agent Name]";
    
    const newSegments = [];
    const segmentElements = DOM.segmentSettingsList.querySelectorAll('[data-id]');
    segmentElements.forEach(el => {
        const id = el.dataset.id;
        const titleInput = el.querySelector('.segment-title-input');
        const durationInput = el.querySelector('.segment-duration-input');
        if (!titleInput || !durationInput) return;
        const title = titleInput.value;
        const duration = parseInt(durationInput.value, 10);
        const existingSegment = appState.settings.segments.find(s => s.id === id) || {};
        newSegments.push({ ...existingSegment, id: id, title: title || "Segment", duration: duration || 60, });
    });
    appState.settings.segments = newSegments;

    // 2. Save *Current* Supplement DB Settings
    appState.supplementDatabase.baseProduct.name = DOM.baseProductNameSetting.value;
    appState.supplementDatabase.baseProduct.pitch = DOM.baseProductPitchSetting.value;
    
    const newRecommendations = [];
    const suppElements = DOM.supplementSettingsList.querySelectorAll('[data-supp-id]');
    suppElements.forEach(el => {
        const suppId = el.dataset.suppId;
        const nameInput = el.querySelector('.supp-name-input');
        const genderSelect = el.querySelector('.supp-gender-select');
        if (!nameInput || !genderSelect) return;
        const newSymptoms = [];
        const symptomElements = el.querySelectorAll('.symptom-input-group');
        symptomElements.forEach(sympEl => {
            const sympId = sympEl.dataset.sympId;
            const sympTextInput = sympEl.querySelector('.supp-symptom-text-input');
            const sympPitchInput = sympEl.querySelector('.supp-symptom-pitch-input');
            const sympBenefitInput = sympEl.querySelector('.supp-symptom-benefit-input');
            if (sympTextInput && sympTextInput.value && sympPitchInput && sympBenefitInput) {
                newSymptoms.push({
                    id: sympId,
                    text: sympTextInput.value,
                    pitch: sympPitchInput.value,
                    benefit: sympBenefitInput.value
                });
            }
        });
        newRecommendations.push({
            id: suppId,
            name: nameInput.value,
            gender: genderSelect.value,
            symptoms: newSymptoms
        });
    });
    appState.supplementDatabase.recommendations = newRecommendations;
    
    // 3. Persist all settings to localStorage
    saveSettingsToStorage();
    
    // 4. Close modal and re-render UI
    appState.isSettingsOpen = false;
    renderSettingsModal();
    initAppUI(); // Full re-render
}

function resetSettingsToDefaults() {
    localStorage.removeItem('appSettings');
    localStorage.removeItem('editedDatabases');
    localStorage.removeItem('lastDbName');
    
    loadState();
    initAppUI();
    
    appState.isSettingsOpen = false;
    renderSettingsModal();
    DOM.resetDefaultsConfirmModal.classList.add('hidden');
}

// --- Import/Export Functions ---

function exportConfig() {
    // Export *all* current settings and *all* edited databases
    const configToExport = {
        settings: appState.settings,
        databases: appState.editedDatabases
    };
    
    const exportString = JSON.stringify(configToExport, null, 2);

    const tempTextarea = document.createElement('textarea');
    tempTextarea.style.position = 'absolute'; tempTextarea.style.left = '-9999px';
    tempTextarea.value = exportString;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    let success = false;
    try { success = document.execCommand('copy'); } catch (err) { console.error('Failed to copy: ', err); }
    document.body.removeChild(tempTextarea);

    if (success) {
        const originalText = DOM.exportBtn.textContent;
        DOM.exportBtn.textContent = 'Copied!';
        setTimeout(() => { DOM.exportBtn.textContent = originalText; }, 2000);
    }
}

function importConfig() {
    let rawText = DOM.importTextarea.value.trim();
    DOM.importMessage.textContent = '';
    DOM.importMessage.className = 'import-message';

    try {
        const importedConfig = JSON.parse(rawText);
        
        if (!importedConfig.settings || !importedConfig.databases) {
            throw new Error('Invalid config object. Missing `settings` or `databases` keys.');
        }

        // Save to localStorage
        localStorage.setItem('appSettings', JSON.stringify(importedConfig.settings));
        localStorage.setItem('editedDatabases', JSON.stringify(importedConfig.databases));
        
        DOM.importMessage.textContent = 'Success! Reloading application...';
        DOM.importMessage.classList.add('success');

        // Reload the app with new settings
        setTimeout(() => {
            loadState();
            initAppUI();
            DOM.importModal.classList.add('hidden');
            appState.isSettingsOpen = false;
            renderSettingsModal();
        }, 1000);

    } catch (e) {
        console.error("Import failed:", e);
        DOM.importMessage.textContent = `Error: ${e.message}. Please check console.`;
        DOM.importMessage.classList.add('error');
    }
}


// --- Symptom Checklist Rendering ---

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
    const months = parseInt(DOM.regimenLengthSelect.value, 10);
    const onlineBottlesOrdered = parseInt(DOM.onlineBottlesSelect.value, 10);
    const mainSuppName = appState.supplementDatabase.baseProduct.name.replace(' (Base)', '');
    const pricePerBottle = getPricePerBottle(months);

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
    
    let addonNames = activeRecommendations.map(rec => rec.name.replace(/\(.*\)/, '').trim());
    let addonListString = formatAddonList(addonNames);

    const numAddOns = activeSupplementIds.size;
    const bottlesOfMainToOrder = Math.max(0, months - onlineBottlesOrdered);
    const bottlesOfAddonsToOrder = months * numAddOns;
    const totalCost = (bottlesOfMainToOrder * pricePerBottle) + (bottlesOfAddonsToOrder * pricePerBottle);
    
    const pitchedSupps = [mainSuppName, ...addonNames];
    DOM.generatedNotes.textContent = 'Pitched: ' + pitchedSupps.join(', ');

    if (activeRecommendations.length === 0) {
        DOM.dynamicPitchContent.innerHTML = `<p class="italic text-yellow-400">No additional symptoms selected. The regimen will only be for ${mainSuppName}.</p>`;
    } else {
        let pitch = `<p>And I'm also going to have you take <strong class="text-yellow-400">${numAddOns}</strong> additional supplement${numAddOns > 1 ? 's' : ''} with the ${mainSuppName}. `;
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
    DOM.dynamicBenefitsList.innerHTML = `<p class="text-lg">${formatBenefitsList(benefits)} Okay?</p>`;

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

    const hasOnlyAddons = (bottlesOfMainToOrder === 0 && bottlesOfAddonsToOrder > 0);
    const hasOnlyMain = (bottlesOfMainToOrder > 0 && bottlesOfAddonsToOrder === 0);
    const hasBoth = (bottlesOfMainToOrder > 0 && bottlesOfAddonsToOrder > 0);
    let authoScriptWording = "", orderBreakdownWording = "";
    const regimenCompletionText = (months < 18) 
        ? `for the first <strong class="text-yellow-400">${months} months</strong> of your regimen` 
        : "to complete your regiment";

    if (hasOnlyAddons) {
        authoScriptWording = `<p>Now online you've already ordered your full <strong class="text-yellow-400">${onlineBottlesOrdered} months</strong> of the <strong class="text-yellow-400">${mainSuppName}</strong>. So all I have left to do now is send you the full <strong class="text-yellow-400">${months}-month</strong> supply of <strong class="text-yellow-400">${addonListString}</strong> ${regimenCompletionText}.</p>`;
        orderBreakdownWording = `<p>Now with your new order, you'll be getting the full <strong class="text-yellow-400">${months}-month</strong> supply of <strong class="text-yellow-400">${addonListString}</strong> for the additional <strong class="text-yellow-400">$<span id="order-cost">${totalCost.toFixed(2)}</span></strong>.</p>`;
    } else if (hasOnlyMain) {
        authoScriptWording = `<p>Now online you've already ordered <strong class="text-yellow-400">${onlineBottlesOrdered}</strong> of the <strong class="text-yellow-400">${mainSuppName}</strong>. So all I have left to do now is send you <strong class="text-yellow-400">${bottlesOfMainToOrder}</strong> more of the <strong class="text-yellow-400">${mainSuppName}</strong> to take that up to <strong class="text-yellow-400">${months}</strong> ${regimenCompletionText}.</p>`;
        orderBreakdownWording = `<p>Now with your new order, you'll be getting <strong class="text-yellow-400">${bottlesOfMainToOrder}</strong> additional <strong class="text-yellow-400">${mainSuppName}</strong> for the additional <strong class="text-yellow-400">$<span id="order-cost">${totalCost.toFixed(2)}</span></strong>.</p>`;
    } else if (hasBoth) {
        authoScriptWording = `<p>Now online you've already ordered <strong class="text-yellow-400">${onlineBottlesOrdered}</strong> of the <strong class="text-yellow-400">${mainSuppName}</strong>. So all I have left to do now is send you <strong class="text-yellow-400">${bottlesOfMainToOrder}</strong> more of the <strong class="text-yellow-400">${mainSuppName}</strong> to take that up to <strong class="text-yellow-400">${months}</strong>, as well as the <strong class="text-yellow-400">${months}-month</strong> supply of <strong class="text-yellow-400">${addonListString}</strong> ${regimenCompletionText}.</p>`;
        orderBreakdownWording = `<p>Now with your new order, you'll be getting <strong class="text-yellow-400">${bottlesOfMainToOrder}</strong> additional <strong class="text-yellow-400">${mainSuppName}</strong> and the full <strong class="text-yellow-400">${months}-month</strong> supply of <strong class="text-yellow-400">${addonListString}</strong> for the additional <strong class="text-yellow-400">$<span id="order-cost">${totalCost.toFixed(2)}</span></strong>.</p>`;
    } else {
        authoScriptWording = `<p>It looks like your order is already complete with <strong class="text-yellow-400">${onlineBottlesOrdered} months</strong> of <strong class="text-yellow-400">${mainSuppName}</strong> and no additional supplements.</p>`;
        orderBreakdownWording = `<p>Now with your new order, it looks like your order is already complete.</p>`;
    }
    
    document.getElementById('autho-length-1').textContent = months;
    document.getElementById('autho-script-dynamic-wording').innerHTML = authoScriptWording;
    document.getElementById('autho-cost').textContent = totalCost.toFixed(2);
    document.getElementById('autho-cost-2').textContent = totalCost.toFixed(2);
    document.getElementById('order-online-bottles').textContent = onlineBottlesOrdered;
    document.getElementById('order-breakdown-dynamic-wording').innerHTML = orderBreakdownWording;
    document.getElementById('decline-cost').textContent = totalCost.toFixed(2);
}

// --- Call Reset Functions ---

function resetForNextCall() {
    stopGlobalTimer();
    appState.currentSegmentIndex = -1;
    appState.settings.segments.forEach(s => { s.state = 'pending'; s.progress = 0; s.overtime = 0; s.startTime = null; });
    DOM.clientNameInput.value = '';
    updateClientName('');
    DOM.symptomChecklistContainer.querySelectorAll('.script-checkbox').forEach(cb => cb.checked = false);
    DOM.authoRegimenLengthSelect.value = '18';
    DOM.regimenLengthSelect.value = '18';
    DOM.customNotes.value = '';
    renderAllScript();
    renderTimerBar();
    updateTimerControlsVisibility();
    DOM.resetConfirmModal.classList.add('hidden');
}


// --- Event Listeners ---

function setupEventListeners() {
    DOM.copyNotesBtn.addEventListener('click', () => {
        const fullNotes = DOM.generatedNotes.textContent + '\n\n' + DOM.customNotes.value;
        const tempTextarea = document.createElement('textarea');
        tempTextarea.style.position = 'absolute'; tempTextarea.style.left = '-9999px';
        tempTextarea.value = fullNotes;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        let success = false;
        try { success = document.execCommand('copy'); } catch (err) { console.error('Failed to copy: ', err); }
        document.body.removeChild(tempTextarea);
        if (success) {
            const span = DOM.copyNotesBtn.querySelector('span');
            span.textContent = 'Copied!';
            DOM.copyNotesBtn.classList.add('bg-green-600', 'hover:bg-green-700');
            DOM.copyNotesBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
            setTimeout(() => {
                span.textContent = 'Copy Notes';
                DOM.copyNotesBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
                DOM.copyNotesBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
            }, 2000);
        }
    });

    DOM.symptomChecklistContainer.addEventListener('change', (e) => {
        if (e.target.classList.contains('script-checkbox')) renderAllScript();
    });

    DOM.authoRegimenLengthSelect.addEventListener('change', () => {
        DOM.regimenLengthSelect.value = DOM.authoRegimenLengthSelect.value;
        renderAllScript();
    });

    DOM.onlineBottlesSelect.addEventListener('change', renderAllScript);
    DOM.genderSelect.addEventListener('change', () => { renderSymptomChecklist(); renderAllScript(); });

    DOM.clientNameInput.addEventListener('input', () => {
        updateClientName(DOM.clientNameInput.value.trim());
        if (appState.currentSegmentIndex === -1) tryStartSegment(0);
    });

    DOM.startTimerManualBtn.addEventListener('click', () => { if (appState.currentSegmentIndex === -1) tryStartSegment(0); });

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

    DOM.settingsCogBtn.addEventListener('click', () => { appState.isSettingsOpen = true; renderSettingsModal(); });
    DOM.settingsCloseBtn.addEventListener('click', () => { appState.isSettingsOpen = false; renderSettingsModal(); });
    DOM.settingsSaveBtn.addEventListener('click', saveSettings);

    DOM.addSegmentBtn.addEventListener('click', () => {
        appState.settings.segments.push({
            id: `seg-${Date.now()}`, title: "New Segment", duration: 60,
            progress: 0, state: 'pending', overtime: 0, startTime: null
        });
        renderSettingsModal();
    });

    DOM.segmentSettingsList.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-segment-btn');
        if (removeBtn) {
            const idToRemove = removeBtn.dataset.segmentId;
            appState.settings.segments = appState.settings.segments.filter(s => s.id !== idToRemove);
            renderSettingsModal();
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
        const newSympId = `symp-${Date.now()}`;
        const newSupp = {
            id: `supp-${Date.now()}`, name: "New Supplement", gender: "any",
            symptoms: [
                { id: newSympId, text: "New Symptom", pitch: "", benefit: "" }
            ]
        };
        appState.supplementDatabase.recommendations.push(newSupp);
        renderSettingsModal();
    });
    
    DOM.resetToDefaultsBtn.addEventListener('click', () => DOM.resetDefaultsConfirmModal.classList.remove('hidden'));
    DOM.resetDefaultsCancelBtn.addEventListener('click', () => DOM.resetDefaultsConfirmModal.classList.add('hidden'));
    DOM.resetDefaultsConfirmBtn.addEventListener('click', resetSettingsToDefaults);

    DOM.floatingTimerBar.addEventListener('click', (e) => {
        const segmentEl = e.target.closest('.timer-segment');
        if (segmentEl) tryStartSegment(Number(segmentEl.dataset.index));
    });

    DOM.exportBtn.addEventListener('click', exportConfig);
    DOM.importBtn.addEventListener('click', () => {
        DOM.importModal.classList.remove('hidden');
        DOM.importMessage.textContent = '';
        DOM.importMessage.className = 'import-message';
        DOM.importTextarea.value = '';
    });
    DOM.importModalCloseBtn.addEventListener('click', () => DOM.importModal.classList.add('hidden'));
    DOM.importCancelBtn.addEventListener('click', () => DOM.importModal.classList.add('hidden'));
    DOM.importConfirmBtn.addEventListener('click', importConfig);

    DOM.databaseSwitcher.addEventListener('change', (e) => {
        loadSupplementDb(e.target.value);
    });
}

// --- INITIALIZATION ---

/**
 * Renders the entire application UI based on the current appState.
 * This is separated from init() to allow for re-rendering after import.
 */
function initAppUI() {
    updateAgentNameUI();
    updateSupplementWordingUI();
    renderSymptomChecklist();
    renderAllScript();
    renderTimerBar();
    updateClientName(DOM.clientNameInput.value);
    updateTimerControlsVisibility();
}

/**
 * Main application entry point.
 */
function init() {
    // 1. Check for critical config files
    if (typeof APP_CONFIG === 'undefined' || typeof DATABASE_CONFIGS === 'undefined') {
        let error = "CRITICAL ERROR: Failed to load config files.";
        if (typeof APP_CONFIG === 'undefined') error += " `APP_CONFIG` is missing. ";
        if (typeof DATABASE_CONFIGS === 'undefined') error += " `DATABASE_CONFIGS` is missing. ";
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
