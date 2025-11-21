/**
 * ============================================
 * SCRIPT TOOL SETTINGS MODAL LOGIC (V6.5.0)
 * ============================================
 * This component handles all logic and UI for
 * the main settings modal, including:
 * - App Settings (Agent, Segments)
 * - Database Editor (Base Product, Questions, Recommendations)
 * - Reset functions
 * - Auto-saving
 *
 * It depends on:
 * - `appState`, `DOM` (global)
 * - `saveSettingsToStorage()`, `loadState()`, `initAppUI()` (from script.js)
 * - `lucide` (from CDN)
 * - `AppUI.initReferenceSettingsEventListeners()` (from script-references.js)
 */

// --- Module-level variables ---
let autoSaveTimer = null;
// Note: lucideIconNames and activeIconPicker moved to script-references.js

/**
 * Creates the HTML element for a single supplement
 * in the settings modal editor.
 * @param {object} supp - The supplement configuration object.
 * @returns {HTMLElement} - The fully constructed div element.
 */
AppUI.createSupplementEditorElement = function(supp) {
    const suppEl = document.createElement('div');
    suppEl.className = 'p-4 bg-gray-700 rounded-lg space-y-3 settings-supplement-editor-card';
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

// REMOVED: AppUI.createReferenceEditorElement (moved to script-references.js)

// REMOVED: AppUI.renderIconPickerResults (moved to script-references.js)

/**
 * Renders the entire settings modal, populating
 * all fields from the current appState.
 */
AppUI.renderSettingsModal = function() {
    if (appState.isSettingsOpen) {
        // REMOVED: lucide icon loading block (moved to script-references.js)
        
        DOM.settingsModal.classList.remove('hidden');
        DOM.agentNameSettingInput.value = appState.settings.agentName;
        DOM.currentDbNameDisplay.textContent = appState.currentDbName;

        // Show warning if user has any saved data
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

        // Populate Discovery Questions
        DOM.questionsEditorList.innerHTML = '';
        if (appState.supplementDatabase.questions) {
            appState.supplementDatabase.questions.forEach((question, index) => {
                const questionEl = document.createElement('div');
                questionEl.className = 'flex items-center gap-2';
                questionEl.dataset.index = index;
                
                // Disable Up/Down buttons based on position
                const isFirst = index === 0;
                const isLast = index === appState.supplementDatabase.questions.length - 1;

                questionEl.innerHTML = `
                    <div class="flex flex-col gap-1 mr-1">
                         <button class="move-question-up-btn p-1 bg-gray-600 hover:bg-gray-500 text-white rounded ${isFirst ? 'opacity-30 cursor-not-allowed' : ''}" ${isFirst ? 'disabled' : ''}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                            </svg>
                        </button>
                        <button class="move-question-down-btn p-1 bg-gray-600 hover:bg-gray-500 text-white rounded ${isLast ? 'opacity-30 cursor-not-allowed' : ''}" ${isLast ? 'disabled' : ''}>
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
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
        DOM.baseProductGuaranteeSetting.value = appState.supplementDatabase.guaranteeDays || 60;
        
        DOM.supplementSettingsList.innerHTML = '';
        if (appState.supplementDatabase.recommendations) {
            // Use the helper function to render
            appState.supplementDatabase.recommendations.forEach(supp => {
                const suppEl = AppUI.createSupplementEditorElement(supp);
                DOM.supplementSettingsList.appendChild(suppEl);
            });
        }
        
        // Populate References
        DOM.referenceSettingsList.innerHTML = '';
        if (appState.supplementDatabase.references) {
             appState.supplementDatabase.references.forEach(ref => {
                // MODIFIED: Call the function from the new component
                const refEl = AppUI.createReferenceEditorElement(ref);
                DOM.referenceSettingsList.appendChild(refEl);
            });
        }


    } else {
        DOM.settingsModal.classList.add('hidden');
    }
}

/**
 * Reads all values from the settings modal,
 * updates appState, saves to localStorage, and
 * re-renders the main UI.
 */
AppUI.readAndSaveAllSettings = function() {
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
    
    // Save Discovery Questions
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
    appState.supplementDatabase.guaranteeDays = parseInt(DOM.baseProductGuaranteeSetting.value, 10) || 60;
    
    // Save Recommendations
    // This logic respects the drag-and-drop order from the main page
    // by only updating/deleting items, not re-ordering them.
    const newRecommendations = [];
    const suppElements = DOM.supplementSettingsList.querySelectorAll('[data-supp-id]');
    const domSuppIds = Array.from(suppElements).map(el => el.dataset.suppId);

    // Filter appState to only include items that still exist in the DOM
    appState.supplementDatabase.recommendations = appState.supplementDatabase.recommendations.filter(rec => 
        domSuppIds.includes(rec.id)
    );

    // Update the content of the remaining items
    suppElements.forEach(el => {
        const suppId = el.dataset.suppId;
        const existingRec = appState.supplementDatabase.recommendations.find(r => r.id === suppId);
        
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
        
        if (existingRec) {
            // Update existing record
            existingRec.name = nameInput.value;
            existingRec.gender = genderSelect.value;
            existingRec.symptoms = newSymptoms;
        } else {
            // Add new record (was just created)
            appState.supplementDatabase.recommendations.push({
                id: suppId,
                name: nameInput.value,
                gender: genderSelect.value,
                symptoms: newSymptoms
            });
        }
    });
    
    // NEW: Save References
    const newReferences = [];
    const refElements = DOM.referenceSettingsList.querySelectorAll('[data-ref-id]');
    refElements.forEach(el => {
        const id = el.dataset.refId;
        const title = el.querySelector('.ref-title-input').value;
        const icon = el.querySelector('.ref-icon-input').value;
        const type = el.querySelector('.ref-type-select').value;
        const shortcut = el.querySelector('.ref-shortcut-input').value;
        const url = el.querySelector('.ref-url-input').value;
        
        if (title && url) { // Only save if title and URL are present
             newReferences.push({
                id: id,
                title: title,
                icon: icon || 'book', // Default to 'book' if empty
                type: type,
                shortcut: shortcut.trim().slice(0, 1), // Only first char
                url: url
            });
        }
    });
    appState.supplementDatabase.references = newReferences;
    
    // 3. Persist all settings to localStorage
    saveSettingsToStorage(); // This function lives in script.js
    
    // 4. Re-render the main UI to reflect changes
    initAppUI(); // This function lives in script.js
    
    console.log("Auto-saved settings.");
}

/**
 * Debouncer function to trigger auto-save.
 * @param {number} [delay=500] - The delay in milliseconds.
 */
AppUI.triggerAutoSave = function(delay = 500) {
    clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
        if (appState.isSettingsOpen) {
            AppUI.readAndSaveAllSettings();
        } else if (DOM.quickEditModal && !DOM.quickEditModal.classList.contains('hidden')) {
            // NEW: Handle Quick Edit Auto-save
            AppUI.saveQuickEdit();
        }
    }, delay);
}

/**
 * NEW: Opens the Quick Edit modal for a specific supplement.
 * @param {string} suppId - The ID of the supplement to edit.
 */
AppUI.openQuickEdit = function(suppId) {
    const supp = appState.supplementDatabase.recommendations.find(s => s.id === suppId);
    if (!supp) return;

    DOM.quickEditContent.innerHTML = '';
    const editorEl = AppUI.createSupplementEditorElement(supp);
    
    // Hide the "Remove Supplement" button in Quick Edit mode
    const removeBtn = editorEl.querySelector('.remove-supplement-btn');
    if (removeBtn) removeBtn.classList.add('hidden');

    DOM.quickEditContent.appendChild(editorEl);
    DOM.quickEditModal.classList.remove('hidden');
}

/**
 * NEW: Saves the changes from the Quick Edit modal specifically.
 */
AppUI.saveQuickEdit = function() {
    const editorEl = DOM.quickEditContent.querySelector('.settings-supplement-editor-card');
    if (!editorEl) return;
    
    const suppId = editorEl.dataset.suppId;
    const existingRec = appState.supplementDatabase.recommendations.find(r => r.id === suppId);
    if (!existingRec) return;
    
    const nameInput = editorEl.querySelector('.supp-name-input');
    const genderSelect = editorEl.querySelector('.supp-gender-select');
    if (!nameInput || !genderSelect) return;

    const newSymptoms = [];
    const symptomElements = editorEl.querySelectorAll('.symptom-input-group');
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
    
    // Update just this record
    existingRec.name = nameInput.value;
    existingRec.gender = genderSelect.value;
    existingRec.symptoms = newSymptoms;
    
    // Save and update UI
    saveSettingsToStorage();
    initAppUI();
    
    console.log(`Quick-saved supplement: ${suppId}`);
}


/**
 * Clears all data from localStorage and reloads
 * the application from its default state.
 */
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

/**
 * Attaches event listeners for the Settings Modal component.
 */
AppUI.initSettingsEventListeners = function() {
    // REMOVED: DOM cache for reference elements (moved to script-references.js)
    
    DOM.settingsCogBtn.addEventListener('click', () => { 
        appState.isSettingsOpen = true; 
        AppUI.renderSettingsModal(); 
    });
    
    DOM.settingsCloseBtn.addEventListener('click', () => { 
        appState.isSettingsOpen = false; 
        AppUI.renderSettingsModal(); 
    });

    // --- Auto-save triggers for Main Settings ---
    DOM.settingsModal.addEventListener('input', (e) => {
        // Standard auto-save for most inputs
        AppUI.triggerAutoSave(500); // 500ms delay for typing
    });
    
    DOM.settingsModal.addEventListener('click', (e) => {
        const actionButton = e.target.closest(
            '.remove-segment-btn, .add-segment-btn, .remove-question-btn, .add-question-btn, .remove-symptom-btn, .add-symptom-btn, .remove-supplement-btn, .add-supplement-btn, .remove-reference-btn, .add-reference-btn'
        );
        if (actionButton) {
            AppUI.triggerAutoSave(50); // 50ms delay, just to let DOM update first
        }
    });

    // NEW: Listeners for Quick Edit Modal
    if (DOM.quickEditModal) {
        DOM.quickEditModal.addEventListener('input', () => {
            AppUI.triggerAutoSave(500);
        });
        
        DOM.quickEditModal.addEventListener('click', (e) => {
            const removeSymptomBtn = e.target.closest('.remove-symptom-btn');
            if (removeSymptomBtn) {
                removeSymptomBtn.closest('.symptom-input-group').remove();
                AppUI.triggerAutoSave(50);
                return;
            }

            const addSymptomBtn = e.target.closest('.add-symptom-btn');
            if (addSymptomBtn) {
                const symptomsListDiv = addSymptomBtn.closest('.settings-supplement-editor-card').querySelector('.supp-symptoms-list');
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
                AppUI.triggerAutoSave(50);
                return;
            }
        });
    }
    // --- End of Quick Edit Listeners ---


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

    // Listeners for Question Editor
    DOM.addQuestionBtn.addEventListener('click', () => {
        const questionEl = document.createElement('div');
        questionEl.className = 'flex items-center gap-2';
        questionEl.innerHTML = `
            <div class="flex flex-col gap-1 mr-1">
                <!-- Placeholder buttons for new items, they will work on save/reload -->
                <button class="move-question-up-btn p-1 bg-gray-600 hover:bg-gray-500 text-white rounded opacity-30 cursor-not-allowed" disabled>
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" /></svg>
                </button>
                <button class="move-question-down-btn p-1 bg-gray-600 hover:bg-gray-500 text-white rounded opacity-30 cursor-not-allowed" disabled>
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
            </div>
            <input type="text" value="" class="question-input w-full bg-gray-600 text-white rounded p-2 text-sm" placeholder="New question...">
            <button class="remove-question-btn bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
        `;
        DOM.questionsEditorList.appendChild(questionEl);
    });

    DOM.questionsEditorList.addEventListener('click', (e) => {
        // Remove
        const removeBtn = e.target.closest('.remove-question-btn');
        if (removeBtn) {
            removeBtn.parentElement.remove();
            return; // Exit early
        }

        // Move Up
        const upBtn = e.target.closest('.move-question-up-btn');
        if (upBtn && !upBtn.disabled) {
            const row = upBtn.closest('[data-index]');
            const index = parseInt(row.dataset.index, 10);
            if (index > 0) {
                // 1. Get current values from DOM to preserve unsaved text
                const currentQuestions = [];
                DOM.questionsEditorList.querySelectorAll('.question-input').forEach(input => currentQuestions.push(input.value));
                
                // 2. Swap
                const temp = currentQuestions[index];
                currentQuestions[index] = currentQuestions[index - 1];
                currentQuestions[index - 1] = temp;

                // 3. Update state and re-render
                appState.supplementDatabase.questions = currentQuestions;
                AppUI.renderSettingsModal();
                AppUI.triggerAutoSave(50);
            }
            return;
        }

        // Move Down
        const downBtn = e.target.closest('.move-question-down-btn');
        if (downBtn && !downBtn.disabled) {
            const row = downBtn.closest('[data-index]');
            const index = parseInt(row.dataset.index, 10);
            
            // 1. Get current values from DOM
            const currentQuestions = [];
            DOM.questionsEditorList.querySelectorAll('.question-input').forEach(input => currentQuestions.push(input.value));
            
            // Check if swap is valid
            if (index < currentQuestions.length - 1) {
                 // 2. Swap
                const temp = currentQuestions[index];
                currentQuestions[index] = currentQuestions[index + 1];
                currentQuestions[index + 1] = temp;

                // 3. Update state and re-render
                appState.supplementDatabase.questions = currentQuestions;
                AppUI.renderSettingsModal();
                AppUI.triggerAutoSave(50);
            }
            return;
        }
    });


    // Listeners for Supplement/Symptom Editor (MAIN SETTINGS)
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
        const newSuppElement = AppUI.createSupplementEditorElement(newSupp);
        DOM.supplementSettingsList.appendChild(newSuppElement);
    });
    
    // REMOVED: Reference editor listeners (moved to script-references.js)

    // Reset to Defaults Modal
    DOM.resetToDefaultsBtn.addEventListener('click', () => DOM.resetDefaultsConfirmModal.classList.remove('hidden'));
    DOM.resetDefaultsCancelBtn.addEventListener('click', () => DOM.resetDefaultsConfirmModal.classList.add('hidden'));
    DOM.resetDefaultsConfirmBtn.addEventListener('click', AppUI.resetSettingsToDefaults);

    // NEW: Initialize the refactored reference settings listeners
    AppUI.initReferenceSettingsEventListeners();
}
