/**
 * ============================================
 * SCRIPT TOOL SETTINGS MODAL LOGIC (V5.2.0)
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
 */

// --- Module-level variables for drag-and-drop ---
let draggedSupplement = null;
let lastDragOverEl = null;

// --- Module-level variables for auto-saving ---
let autoSaveTimer = null;

/**
 * Creates the HTML element for a single supplement
 * in the settings modal editor.
 * @param {object} supp - The supplement configuration object.
 * @returns {HTMLElement} - The fully constructed div element.
 */
AppUI.createSupplementEditorElement = function(supp) {
    const suppEl = document.createElement('div');
    // NEW: Added .settings-supplement-editor-card class
    suppEl.className = 'p-4 bg-gray-700 rounded-lg space-y-3 settings-supplement-editor-card';
    suppEl.dataset.suppId = supp.id;
    suppEl.draggable = true; // NEW: Make the card draggable
    
    const safeName = supp.name ? supp.name.replace(/"/g, '&quot;') : "Unnamed Supplement";
    
    // NEW: Added drag handle icon and modified header structure
    suppEl.innerHTML = `
        <div class="flex justify-between items-center pb-2 border-b border-gray-600">
            <!-- NEW: Drag Handle -->
            <svg class="drag-handle h-6 w-6 text-gray-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <div class="flex-1 ml-3"> <!-- Added ml-3 -->
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

/**
 * Renders the entire settings modal, populating
 * all fields from the current appState.
 */
AppUI.renderSettingsModal = function() {
    if (appState.isSettingsOpen) {
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
        DOM.baseProductGuaranteeSetting.value = appState.supplementDatabase.guaranteeDays || 60;
        
        DOM.supplementSettingsList.innerHTML = '';
        if (appState.supplementDatabase.recommendations) {
            // Use the helper function to render
            appState.supplementDatabase.recommendations.forEach(supp => {
                const suppEl = AppUI.createSupplementEditorElement(supp);
                DOM.supplementSettingsList.appendChild(suppEl);
            });
        }

    } else {
        DOM.settingsModal.classList.add('hidden');
    }
}

/**
 * NEW: Reads all values from the settings modal,
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
    // This logic automatically respects the new DOM order from drag-and-drop.
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
    
    // 4. Re-render the main UI to reflect changes
    initAppUI(); // This function lives in script.js
    
    console.log("Auto-saved settings.");
}

/**
 * NEW: Debouncer function to trigger auto-save.
 * @param {number} [delay=500] - The delay in milliseconds.
 */
AppUI.triggerAutoSave = function(delay = 500) {
    clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
        // Must check if modal is still open. If user closes it,
        // we don't need to read values.
        if (appState.isSettingsOpen) {
            AppUI.readAndSaveAllSettings();
        }
    }, delay);
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
    DOM.settingsCogBtn.addEventListener('click', () => { appState.isSettingsOpen = true; AppUI.renderSettingsModal(); });
    DOM.settingsCloseBtn.addEventListener('click', () => { appState.isSettingsOpen = false; AppUI.renderSettingsModal(); });
    // DOM.settingsSaveBtn.addEventListener('click', AppUI.saveSettings); // REMOVED

    // --- NEW: Auto-save triggers ---
    // 1. Listen for any text input
    DOM.settingsModal.addEventListener('input', () => {
        AppUI.triggerAutoSave(500); // 500ms delay for typing
    });

    // 2. Listen for discrete actions (add/remove buttons)
    DOM.settingsModal.addEventListener('click', (e) => {
        const actionButton = e.target.closest(
            '.remove-segment-btn, .add-segment-btn, .remove-question-btn, .add-question-btn, .remove-symptom-btn, .add-symptom-btn, .remove-supplement-btn, .add-supplement-btn'
        );
        if (actionButton) {
            AppUI.triggerAutoSave(50); // 50ms delay, just to let DOM update first
        }
    });

    // --- End of Auto-save triggers ---

    DOM.addSegmentBtn.addEventListener('click', () => {
        appState.settings.segments.push({
            id: `seg-${Date.now()}`, title: "New Segment", duration: 60,
            progress: 0, state: 'pending', overtime: 0, startTime: null
        });
        AppUI.renderSettingsModal(); // Re-render to show new segment
        // Auto-save will be triggered by the click listener above
    });

    DOM.segmentSettingsList.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-segment-btn');
        if (removeBtn) {
            const idToRemove = removeBtn.dataset.segmentId;
            appState.settings.segments = appState.settings.segments.filter(s => s.id !== idToRemove);
            AppUI.renderSettingsModal(); // Re-render to remove segment
            // Auto-save will be triggered by the click listener above
        }
    });

    // Listeners for Question Editor
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
        // Auto-save will be triggered by the click listener above
    });

    DOM.questionsEditorList.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-question-btn');
        if (removeBtn) {
            removeBtn.parentElement.remove();
            // Auto-save will be triggered by the click listener above
        }
    });


    // Listeners for Supplement/Symptom Editor
    DOM.supplementSettingsList.addEventListener('click', (e) => {
        const removeSymptomBtn = e.target.closest('.remove-symptom-btn');
        if (removeSymptomBtn) {
            removeSymptomBtn.closest('.symptom-input-group').remove();
            // Auto-save will be triggered by the click listener above
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
            // Auto-save will be triggered by the click listener above
            return;
        }

        const removeSuppBtn = e.target.closest('.remove-supplement-btn');
        if (removeSuppBtn) {
            removeSuppBtn.closest('[data-supp-id]').remove();
            // Auto-save will be triggered by the click listener above
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
        // Auto-save will be triggered by the click listener above
    });
    
    // Reset to Defaults Modal
    DOM.resetToDefaultsBtn.addEventListener('click', () => DOM.resetDefaultsConfirmModal.classList.remove('hidden'));
    DOM.resetDefaultsCancelBtn.addEventListener('click', () => DOM.resetDefaultsConfirmModal.classList.add('hidden'));
    DOM.resetDefaultsConfirmBtn.addEventListener('click', AppUI.resetSettingsToDefaults);

    // --- NEW: Drag-and-Drop Event Listeners ---
    DOM.supplementSettingsList.addEventListener('dragstart', (e) => {
        // Only allow dragging from the handle
        if (!e.target.classList.contains('drag-handle')) {
            // Check if the target is the SVG path inside the handle
            if (!e.target.closest('.drag-handle')) {
                e.preventDefault();
                return;
            }
        }
        
        draggedSupplement = e.target.closest('.settings-supplement-editor-card');
        if (!draggedSupplement) return;

        e.dataTransfer.effectAllowed = 'move';
        // Use a slight delay to allow the DOM to update
        setTimeout(() => {
            if (draggedSupplement) draggedSupplement.classList.add('dragging');
        }, 0);
    });

    DOM.supplementSettingsList.addEventListener('dragover', (e) => {
        e.preventDefault(); // Necessary to allow dropping
        
        const targetEl = e.target.closest('.settings-supplement-editor-card');
        
        // Clear previous target
        if (lastDragOverEl && lastDragOverEl !== targetEl) {
            lastDragOverEl.classList.remove('drag-over-target');
        }

        if (targetEl && targetEl !== draggedSupplement) {
            targetEl.classList.add('drag-over-target');
            lastDragOverEl = targetEl;
        }
    });

    DOM.supplementSettingsList.addEventListener('dragend', () => {
        if (draggedSupplement) {
            draggedSupplement.classList.remove('dragging');
        }
        if (lastDragOverEl) {
            lastDragOverEl.classList.remove('drag-over-target');
        }
        draggedSupplement = null;
        lastDragOverEl = null;
    });

    DOM.supplementSettingsList.addEventListener('drop', (e) => {
        e.preventDefault();
        
        if (lastDragOverEl) {
            lastDragOverEl.classList.remove('drag-over-target');
        }

        const targetEl = e.target.closest('.settings-supplement-editor-card');
        
        if (targetEl && draggedSupplement && targetEl !== draggedSupplement) {
            // Insert the dragged element *before* the target element
            targetEl.parentNode.insertBefore(draggedSupplement, targetEl);
        }
        
        if (draggedSupplement) {
            draggedSupplement.classList.remove('dragging');
        }
        draggedSupplement = null;
        lastDragOverEl = null;

        // NEW: Trigger auto-save on drop
        AppUI.triggerAutoSave(50);
    });
}
