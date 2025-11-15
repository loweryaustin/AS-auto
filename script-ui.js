/**
 * ============================================
 * SCRIPT TOOL UI LOGIC
 * ============================================
 * This file contains all logic for manipulating the DOM, handling
 * UI components (modals, timers, search), and utility functions.
 * It is loaded *before* script.js and depends on nothing.
 * It exposes a single global object: AppUI.
 *
 * It accesses `appState` and `DOM` as global variables
 * defined in `script.js`.
 */

const AppUI = {};

// --- Utility Functions ---

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

AppUI.getPricePerBottle = function(months) {
    if (months >= 12) return 45;
    if (months >= 6) return 47;
    return 49;
}

AppUI.formatAddonList = function(names) {
    if (names.length === 0) return "no additional supplements";
    if (names.length === 1) return names[0];
    if (names.length === 2) return names.join(' and ');
    return names.slice(0, -1).join(', ') + ', and '.concat(names.slice(-1));
}

AppUI.formatBenefitsList = function(benefits) {
    if (benefits.length === 0) return "This regimen is designed to help your pancreas heal.";
    let benefitString = "Now, this is going to " + benefits.slice(0, -1).join(', ') + (benefits.length > 1 ? ', and ' : '') + benefits.slice(-1) + ".";
    return benefitString.charAt(0).toUpperCase() + benefitString.slice(1);
}

AppUI.formatTime = function(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

// --- Title/Search UI Functions ---

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

AppUI.closeSearch = function(e) {
    // Closes search if clicking outside the title/search container
    if (DOM.titleSearchContainer && !DOM.titleSearchContainer.contains(e.target)) {
        if (appState.isSearching) {
            appState.isSearching = false;
            AppUI.renderTitleUI();
        }
    }
}

// --- Timer Functions ---

AppUI.renderTimerBar = function() {
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
                content = `<span class="text-sm">${segment.title}</span><span class="timer-time text-lg -mt-1">${AppUI.formatTime(Math.ceil(remaining))}</span>`;
                if (segment.progress >= 90) animationClass = 'flash-grow';
                break;
            case 'overtime':
                progressWidth = '100%'; bgClass = 'bg-red-600';
                content = `<span class="text-sm">${segment.title}</span><span class="timer-time text-lg -mt-1">+${AppUI.formatTime(Math.floor(segment.overtime))}</span>`;
                break;
            case 'overtime-complete':
                progressWidth = '100%'; bgClass = 'bg-red-600';
                content = `<span class="text-sm">${segment.title}</span><span class="timer-time text-lg -mt-1">+${AppUI.formatTime(Math.floor(segment.overtime))}</span>`;
                break;
            case 'complete':
                progressWidth = '100%'; bgClass = 'bg-green-700';
                content = `<span class="text-sm">${segment.title}</span><span class="timer-time text-lg -mt-1">${AppUI.formatTime(Math.floor(segment.duration))}</span>`;
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
                content = `<span class="text-sm">${segment.title}</span><span class="timer-time text-lg -mt-1">${AppUI.formatTime(segment.duration)}</span>`;
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

AppUI.updateGlobalTimer = function() {
    const index = appState.currentSegmentIndex;
    if (index === -1) { AppUI.stopGlobalTimer(); return; }
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
    AppUI.renderTimerBar();
}

AppUI.startGlobalTimer = function() { if (!appState.globalTimerInterval) appState.globalTimerInterval = setInterval(AppUI.updateGlobalTimer, 100); }
AppUI.stopGlobalTimer = function() { clearInterval(appState.globalTimerInterval); appState.globalTimerInterval = null; }

AppUI.tryStartSegment = function(index) {
    if (appState.currentSegmentIndex === index && appState.settings.segments[index].state === 'active') return;
    if (appState.currentSegmentIndex === -1 && index === 0) { AppUI.startSegment(0); return; }
    if (appState.currentSegmentIndex !== -1) {
        const currentSeg = appState.settings.segments[appState.currentSegmentIndex];
        if (index === appState.currentSegmentIndex + 1) {
            currentSeg.state = (currentSeg.state === 'overtime') ? 'overtime-complete' : 'complete';
            currentSeg.progress = 100;
            AppUI.startSegment(index);
        }
    }
}

AppUI.startSegment = function(index) {
    if (!appState.settings.segments[index]) return;
    appState.currentSegmentIndex = index;
    const segment = appState.settings.segments[index];
    segment.state = 'active'; segment.progress = 0; segment.overtime = 0; segment.startTime = Date.now();
    AppUI.startGlobalTimer(); 
    AppUI.renderTimerBar(); 
    updateTimerControlsVisibility(); // This function lives in script.js
}

// --- Settings Modal Functions ---

// NEW: Helper function to create the HTML for a single supplement editor
AppUI.createSupplementEditorElement = function(supp) {
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
    return suppEl;
}

AppUI.renderSettingsModal = function() {
    if (appState.isSettingsOpen) {
        DOM.settingsModal.classList.remove('hidden');
        DOM.agentNameSettingInput.value = appState.settings.agentName;
        DOM.currentDbNameDisplay.textContent = appState.currentDbName;

        // NEW: Show warning if user has any saved data
        const hasSavedSettings = localStorage.getItem(APP_SETTINGS_KEY) !== null;
        const hasSavedDatabases = localStorage.getItem(EDITED_DATABASES_KEY) !== null;
        DOM.settingsWarningBox.classList.toggle('hidden', !hasSavedSettings && !hasSavedDatabases);

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

        // NEW: Populate Discovery Questions
        DOM.questionsEditorList.innerHTML = '';
        if (appState.supplementDatabase.questions) {
            appState.supplementDatabase.questions.forEach((question, index) => {
                const questionEl = document.createElement('div');
                questionEl.className = 'flex items-center gap-2';
                questionEl.dataset.index = index;
                questionEl.innerHTML = `
                    <input type="text" value="${question.replace(/"/g, '&quot;')}" class="question-input w-full bg-gray-600 text-white rounded p-2 text-sm">
                    <button class="remove-question-btn bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                `;
                DOM.questionsEditorList.appendChild(questionEl);
            });
        }


        // Populate Supplement Wording (for *current* DB)
        DOM.baseProductNameSetting.value = appState.supplementDatabase.baseProduct.name;
        DOM.baseProductPitchSetting.value = appState.supplementDatabase.baseProduct.pitch;
        DOM.baseProductGuaranteeSetting.value = appState.supplementDatabase.guaranteeDays || 60; // NEW
        
        DOM.supplementSettingsList.innerHTML = '';
        if (appState.supplementDatabase.recommendations) {
            // UPDATED: Use the new helper function to render
            appState.supplementDatabase.recommendations.forEach(supp => {
                const suppEl = AppUI.createSupplementEditorElement(supp);
                DOM.supplementSettingsList.appendChild(suppEl);
            });
        }

    } else {
        DOM.settingsModal.classList.add('hidden');
    }
}

AppUI.saveSettings = function() {
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
    
    // NEW: Save Discovery Questions
    const newQuestions = [];
    const questionElements = DOM.questionsEditorList.querySelectorAll('.question-input');
    questionElements.forEach(input => {
        if (input.value) {
            newQuestions.push(input.value);
        }
    });
    appState.supplementDatabase.questions = newQuestions;

    // Save Base Product
    appState.supplementDatabase.baseProduct.name = DOM.baseProductNameSetting.value;
    appState.supplementDatabase.baseProduct.pitch = DOM.baseProductPitchSetting.value;
    appState.supplementDatabase.guaranteeDays = parseInt(DOM.baseProductGuaranteeSetting.value, 10) || 60; // NEW
    
    // Save Recommendations
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
    saveSettingsToStorage(); // This function lives in script.js
    
    // 4. Close modal and re-render UI
    appState.isSettingsOpen = false;
    AppUI.renderSettingsModal();
    initAppUI(); // This function lives in script.js
}

AppUI.resetSettingsToDefaults = function() {
    localStorage.removeItem(APP_SETTINGS_KEY);
    localStorage.removeItem(EDITED_DATABASES_KEY);
    localStorage.removeItem(LAST_DB_NAME_KEY);
    
    loadState(); // This function lives in script.js
    initAppUI(); // This function lives in script.js
    
    appState.isSettingsOpen = false;
    AppUI.renderSettingsModal();
    DOM.resetDefaultsConfirmModal.classList.add('hidden');
}

// --- Import/Export Functions ---

// NEW: Helper function to trigger a file download
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

// NEW: Helper function to copy text to clipboard
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
        buttonElement.classList.add('bg-green-600');
        setTimeout(() => {
            buttonElement.textContent = originalText;
            buttonElement.classList.remove('bg-green-600');
        }, 2000);
    }
}


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
            AppUI.renderSettingsModal();
        }, 1000);

    } catch (e) {
        console.error("Import failed:", e);
        DOM.importMessage.textContent = `Error: ${e.message}. Please check console.`;
        DOM.importMessage.classList.add('error');
    }
}

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


// --- Create New Supplement Function ---

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


// --- NEW: Online Order Editor UI Functions ---

AppUI.renderOnlineOrderEditor = function() {
    DOM.onlineOrderList.innerHTML = ''; // Clear list
    if (!appState.onlineOrder || appState.onlineOrder.length === 0) {
        DOM.onlineOrderList.innerHTML = `<div class="online-order-empty">No online order items.</div>`;
    }

    // Get all supplement names from the current DB
    const allSuppNames = [
        appState.supplementDatabase.baseProduct.name.replace(' (Base)', ''),
        ...appState.supplementDatabase.recommendations.map(r => r.name)
    ];

    appState.onlineOrder.forEach((item, index) => {
        // Ensure item is valid
        if (!allSuppNames.includes(item.name)) {
            // This item is from a different database, don't render it.
            return;
        }
        
        const itemEl = document.createElement('div');
        itemEl.className = 'online-order-item';
        itemEl.innerHTML = `
            <span class="online-order-item-name">${item.name}</span>
            <input type="number" class="online-order-item-qty" value="${item.quantity}" min="0" data-index="${index}" onfocus="this.select()">
            <button class="online-order-item-remove-btn" data-index="${index}">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        `;
        DOM.onlineOrderList.appendChild(itemEl);
    });
}

AppUI.renderOnlineOrderSearchResults = function(query) {
    const lowerQuery = query.toLowerCase().trim();
    
    // Get all supplement names
    const allSuppNames = [
        appState.supplementDatabase.baseProduct.name.replace(' (Base)', ''),
        ...appState.supplementDatabase.recommendations.map(r => r.name)
    ];

    // Filter names that are NOT already in the online order list
    const currentOrderNames = appState.onlineOrder.map(item => item.name);
    let filteredNames = allSuppNames.filter(name => !currentOrderNames.includes(name));

    if (lowerQuery.length > 0) {
        filteredNames = filteredNames.filter(name => name.toLowerCase().includes(lowerQuery));
    }

    if (filteredNames.length === 0) {
        DOM.onlineOrderSearchResults.innerHTML = `<div class="search-result-empty" style="padding: 0.75rem 1rem; color: #9ca3af; font-style: italic;">No more supplements to add.</div>`;
    } else {
        DOM.onlineOrderSearchResults.innerHTML = filteredNames.map(name => `
            <div class="search-result-item" data-name="${name.replace(/"/g, '&quot;')}">
                ${name}
            </div>
        `).join('');
    }
    DOM.onlineOrderSearchResults.classList.remove('hidden');
}
