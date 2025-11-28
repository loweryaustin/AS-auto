/**
 * ============================================
 * SCRIPT TOOL SETTINGS MODAL LOGIC (V6.8.0)
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
// Drag and Drop State for Quick Edit
let qeDraggedItem = null;
let qeDragSourceGroup = null;

/**
 * Creates the HTML element for a single supplement
 * in the settings modal editor.
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

/**
 * Creates a nested question row for the new editor.
 */
AppUI.createNestedQuestionRow = function(q) {
    const row = document.createElement('div');
    row.className = 'qe-question-row';
    row.draggable = true;
    row.dataset.qid = q.id || `q-${Date.now()}-${Math.random()}`;
    
    const safeText = q.text ? q.text.replace(/"/g, '&quot;') : "";

    row.innerHTML = `
        <div class="qe-question-drag-handle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" /></svg>
        </div>
        <input type="text" value="${safeText}" class="question-text-input w-full bg-transparent text-white text-sm focus:outline-none" placeholder="Question text...">
        <button class="qe-remove-btn remove-question-btn" title="Remove Question">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
    `;
    return row;
}

/**
 * Creates a Group Card for the new editor.
 */
AppUI.createNestedGroupCard = function(group, questions = []) {
    const card = document.createElement('div');
    card.className = 'qe-group-card';
    card.dataset.gid = group.id;

    const safeName = group.name.replace(/"/g, '&quot;');

    card.innerHTML = `
        <div class="qe-group-header">
            <div class="qe-group-drag-handle" title="Drag to reorder groups">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <input type="text" value="${safeName}" class="group-name-input flex-1 bg-transparent text-white font-bold text-sm focus:outline-none focus:border-b focus:border-blue-500" placeholder="Group Name">
            <select class="group-gender-select bg-gray-700 text-white text-xs rounded p-1 border border-gray-600">
                <option value="any" ${group.gender === 'any' ? 'selected' : ''}>Any</option>
                <option value="male" ${group.gender === 'male' ? 'selected' : ''}>Male</option>
                <option value="female" ${group.gender === 'female' ? 'selected' : ''}>Female</option>
            </select>
            <button class="qe-remove-btn remove-group-btn ml-2" title="Delete Group">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
        </div>
        <div class="qe-questions-container min-h-[50px]">
            <!-- Questions go here -->
        </div>
        <button class="qe-add-question-btn">+ Add Question</button>
    `;

    const container = card.querySelector('.qe-questions-container');
    questions.forEach(q => {
        container.appendChild(AppUI.createNestedQuestionRow(q));
    });

    return card;
}

// --- Main Settings Render (Legacy/Global) ---
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

        // Clear legacy editor placeholder
        DOM.questionsEditorList.innerHTML = '<div class="text-gray-500 italic text-sm">Please use the Quick Edit (Cog icon) on the main page to edit questions and groups.</div>';

        // Populate Supplement Wording (for *current* DB)
        DOM.baseProductNameSetting.value = appState.supplementDatabase.baseProduct.name;
        DOM.baseProductPitchSetting.value = appState.supplementDatabase.baseProduct.pitch;
        DOM.baseProductGuaranteeSetting.value = appState.supplementDatabase.guaranteeDays || 60;
        
        DOM.supplementSettingsList.innerHTML = '';
        if (appState.supplementDatabase.recommendations) {
            appState.supplementDatabase.recommendations.forEach(supp => {
                const suppEl = AppUI.createSupplementEditorElement(supp);
                DOM.supplementSettingsList.appendChild(suppEl);
            });
        }
        
        // Populate References
        DOM.referenceSettingsList.innerHTML = '';
        if (appState.supplementDatabase.references) {
             appState.supplementDatabase.references.forEach(ref => {
                const refEl = AppUI.createReferenceEditorElement(ref);
                DOM.referenceSettingsList.appendChild(refEl);
            });
        }
    } else {
        DOM.settingsModal.classList.add('hidden');
    }
}

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

    // 2. Save Base Product
    appState.supplementDatabase.baseProduct.name = DOM.baseProductNameSetting.value;
    appState.supplementDatabase.baseProduct.pitch = DOM.baseProductPitchSetting.value;
    appState.supplementDatabase.guaranteeDays = parseInt(DOM.baseProductGuaranteeSetting.value, 10) || 60;
    
    // 3. Save Recommendations (Settings Modal)
    const newRecommendations = [];
    const suppElements = DOM.supplementSettingsList.querySelectorAll('[data-supp-id]');
    const domSuppIds = Array.from(suppElements).map(el => el.dataset.suppId);

    appState.supplementDatabase.recommendations = appState.supplementDatabase.recommendations.filter(rec => domSuppIds.includes(rec.id));

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
            existingRec.name = nameInput.value;
            existingRec.gender = genderSelect.value;
            existingRec.symptoms = newSymptoms;
        } else {
            appState.supplementDatabase.recommendations.push({
                id: suppId,
                name: nameInput.value,
                gender: genderSelect.value,
                symptoms: newSymptoms
            });
        }
    });
    
    // 4. Save References
    const newReferences = [];
    const refElements = DOM.referenceSettingsList.querySelectorAll('[data-ref-id]');
    refElements.forEach(el => {
        const id = el.dataset.refId;
        const title = el.querySelector('.ref-title-input').value;
        const icon = el.querySelector('.ref-icon-input').value;
        const type = el.querySelector('.ref-type-select').value;
        const shortcut = el.querySelector('.ref-shortcut-input').value;
        const url = el.querySelector('.ref-url-input').value;
        if (title && url) {
             newReferences.push({
                id: id,
                title: title,
                icon: icon || 'book',
                type: type,
                shortcut: shortcut.trim().slice(0, 1),
                url: url
            });
        }
    });
    appState.supplementDatabase.references = newReferences;
    
    saveSettingsToStorage();
    initAppUI();
    console.log("Auto-saved main settings.");
}

/**
 * Debouncer function to trigger auto-save.
 */
AppUI.triggerAutoSave = function(delay = 500) {
    clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
        if (appState.isSettingsOpen) {
            AppUI.readAndSaveAllSettings();
        } else if (DOM.quickEditModal && !DOM.quickEditModal.classList.contains('hidden')) {
            // Check what we are editing
            if (DOM.quickEditContent.querySelector('.settings-supplement-editor-card')) {
                AppUI.saveQuickEdit(); 
            } else if (DOM.quickEditContent.querySelector('.qe-group-card')) {
                AppUI.saveQuestionEditor(); 
            }
        }
    }, delay);
}

// --- Quick Edit: Supplements ---
AppUI.openQuickEdit = function(suppId) {
    const supp = appState.supplementDatabase.recommendations.find(s => s.id === suppId);
    if (!supp) return;

    DOM.quickEditTitle.textContent = `Edit ${supp.name}`;
    DOM.quickEditContent.innerHTML = '';
    const editorEl = AppUI.createSupplementEditorElement(supp);
    const removeBtn = editorEl.querySelector('.remove-supplement-btn');
    if (removeBtn) removeBtn.classList.add('hidden');

    DOM.quickEditContent.appendChild(editorEl);
    DOM.quickEditModal.classList.remove('hidden');
}

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
    
    existingRec.name = nameInput.value;
    existingRec.gender = genderSelect.value;
    existingRec.symptoms = newSymptoms;
    
    saveSettingsToStorage();
    initAppUI();
}

// --- Quick Edit: Questions (V6.8.0) ---
AppUI.openQuestionEditor = function() {
    DOM.quickEditTitle.textContent = "Edit Questions";
    DOM.quickEditContent.innerHTML = '';
    
    // 1. Prepare Data
    const groups = appState.supplementDatabase.questionGroups || [];
    const questions = appState.supplementDatabase.questions || [];
    
    // Group questions for rendering
    const groupedQs = {};
    groups.forEach(g => groupedQs[g.name] = []);
    // Also catch questions in groups that might not exist in config
    questions.forEach(q => {
        const gName = q.group || "General";
        if (!groupedQs[gName]) groupedQs[gName] = []; // Auto-create bucket if missing
        groupedQs[gName].push(q);
    });

    // 2. Render Groups (Nested)
    // First, render the configured groups in order
    groups.forEach(g => {
        const card = AppUI.createNestedGroupCard(g, groupedQs[g.name]);
        DOM.quickEditContent.appendChild(card);
        delete groupedQs[g.name]; // Mark as rendered
    });

    // Render any remaining buckets (unconfigured groups)
    Object.keys(groupedQs).forEach(gName => {
        // Create a temporary group object
        const tempGroup = { id: `g-${Date.now()}`, name: gName, gender: 'any' };
        const card = AppUI.createNestedGroupCard(tempGroup, groupedQs[gName]);
        DOM.quickEditContent.appendChild(card);
    });

    // 3. Add "New Group" Button
    const addGroupBtn = document.createElement('button');
    addGroupBtn.className = "w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg border-2 border-blue-500 border-dashed opacity-80 hover:opacity-100 transition-all";
    addGroupBtn.textContent = "+ Add New Group";
    addGroupBtn.onclick = function() {
        const newGroup = { id: `g-${Date.now()}`, name: "New Group", gender: "any" };
        const card = AppUI.createNestedGroupCard(newGroup, []);
        DOM.quickEditContent.insertBefore(card, addGroupBtn);
        AppUI.triggerAutoSave(50);
    };
    DOM.quickEditContent.appendChild(addGroupBtn);

    DOM.quickEditModal.classList.remove('hidden');
    
    // Initialize Drag and Drop
    AppUI.initQuickEditDND();
}

AppUI.saveQuestionEditor = function() {
    const groupCards = DOM.quickEditContent.querySelectorAll('.qe-group-card');
    const newQuestions = [];
    const newGroups = [];

    groupCards.forEach(card => {
        const groupNameInput = card.querySelector('.group-name-input');
        const groupGenderSelect = card.querySelector('.group-gender-select');
        
        const groupName = groupNameInput.value || "Untitled Group";
        const groupGender = groupGenderSelect.value;
        const groupId = card.dataset.gid;

        // Save Group Config
        newGroups.push({
            id: groupId,
            name: groupName,
            gender: groupGender
        });

        // Save Questions inside this group
        const qRows = card.querySelectorAll('.qe-question-row');
        qRows.forEach(row => {
            const qText = row.querySelector('.question-text-input').value;
            const qId = row.dataset.qid;
            if (qText) {
                newQuestions.push({
                    id: qId,
                    text: qText,
                    group: groupName // Assign the current group name
                });
            }
        });
    });

    appState.supplementDatabase.questionGroups = newGroups;
    appState.supplementDatabase.questions = newQuestions;
    saveSettingsToStorage();
    initAppUI();
    console.log("Quick-saved nested questions.");
}

/**
 * Drag and Drop Logic for the Quick Edit Modal
 */
AppUI.initQuickEditDND = function() {
    const container = DOM.quickEditContent;

    // Cleanup old listeners if any (not strictly necessary as we rely on bubbling)
    
    container.ondragstart = function(e) {
        if (e.target.classList.contains('qe-question-row')) {
            qeDraggedItem = e.target;
            e.target.classList.add('opacity-50');
            e.dataTransfer.effectAllowed = 'move';
            // Prevent dragging the group if we are clicking the question handle
            e.stopPropagation(); 
        }
        // TODO: Implement Group reordering DND here if needed, 
        // but for now focusing on Questions inside/between groups.
    };

    container.ondragend = function(e) {
        if (qeDraggedItem) {
            qeDraggedItem.classList.remove('opacity-50');
            qeDraggedItem = null;
            AppUI.triggerAutoSave(50);
        }
    };

    container.ondragover = function(e) {
        e.preventDefault(); // Allow drop
        if (!qeDraggedItem) return;

        // 1. Handle dropping into a group container
        const groupContainer = e.target.closest('.qe-questions-container');
        if (groupContainer) {
            const afterElement = getDragAfterElement(groupContainer, e.clientY);
            if (afterElement == null) {
                groupContainer.appendChild(qeDraggedItem);
            } else {
                groupContainer.insertBefore(qeDraggedItem, afterElement);
            }
        }
    };
    
    // Helper to determine insertion position
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.qe-question-row:not(.opacity-50)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
}


// --- Event Listeners ---
AppUI.initSettingsEventListeners = function() {
    DOM.settingsCogBtn.addEventListener('click', () => { 
        appState.isSettingsOpen = true; 
        AppUI.renderSettingsModal(); 
    });
    DOM.settingsCloseBtn.addEventListener('click', () => { 
        appState.isSettingsOpen = false; 
        AppUI.renderSettingsModal(); 
    });

    // Global Inputs
    DOM.settingsModal.addEventListener('input', () => AppUI.triggerAutoSave(500));
    DOM.settingsModal.addEventListener('click', (e) => {
        if (e.target.closest('button')) AppUI.triggerAutoSave(50);
    });

    if (DOM.quickEditModal) {
        DOM.quickEditModal.addEventListener('input', () => AppUI.triggerAutoSave(500));
        
        DOM.quickEditModal.addEventListener('click', (e) => {
            // Remove Supplement Symptom
            if (e.target.closest('.remove-symptom-btn')) {
                e.target.closest('.symptom-input-group').remove();
                AppUI.triggerAutoSave(50);
                return;
            }
            // Add Supplement Symptom
            if (e.target.closest('.add-symptom-btn')) {
                // ... (Existing logic logic reused from previous step) ...
                const symptomsListDiv = e.target.closest('.settings-supplement-editor-card').querySelector('.supp-symptoms-list');
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
                    <div><label>Sidebar Pitch</label><textarea rows="2" class="supp-symptom-pitch-input w-full bg-gray-500 text-white rounded p-2 text-sm"></textarea></div>
                    <div><label>Script Benefit</label><input type="text" class="supp-symptom-benefit-input w-full bg-gray-500 text-white rounded p-2 text-sm"></div>`;
                symptomsListDiv.appendChild(newSymptomGroup);
                AppUI.triggerAutoSave(50);
                return;
            }

            // NEW V6.8.0: Nested Question Editor Actions
            
            // Add Question to Group
            if (e.target.classList.contains('qe-add-question-btn')) {
                const card = e.target.closest('.qe-group-card');
                const container = card.querySelector('.qe-questions-container');
                container.appendChild(AppUI.createNestedQuestionRow({ text: "" }));
                AppUI.triggerAutoSave(50);
                return;
            }
            // Remove Question
            if (e.target.closest('.qe-remove-btn.remove-question-btn')) {
                e.target.closest('.qe-question-row').remove();
                AppUI.triggerAutoSave(50);
                return;
            }
            // Remove Group
            if (e.target.closest('.qe-remove-btn.remove-group-btn')) {
                if(confirm("Delete this group and all its questions?")) {
                    e.target.closest('.qe-group-card').remove();
                    AppUI.triggerAutoSave(50);
                }
                return;
            }
        });
    }

    // ... (Legacy listeners for Segment/Main Settings kept for safety) ...
    DOM.addSegmentBtn.addEventListener('click', () => {
        appState.settings.segments.push({ id: `seg-${Date.now()}`, title: "New Segment", duration: 60, state: 'pending', progress: 0, overtime: 0 });
        AppUI.renderSettingsModal(); 
    });
    DOM.segmentSettingsList.addEventListener('click', (e) => {
        if (e.target.closest('.remove-segment-btn')) {
            const id = e.target.closest('.remove-segment-btn').dataset.segmentId;
            appState.settings.segments = appState.settings.segments.filter(s => s.id !== id);
            AppUI.renderSettingsModal(); 
        }
    });
    
    // Main Supplement Editor Listeners
    DOM.addSupplementBtn.addEventListener('click', () => {
        const newSupp = { id: `supp-${Date.now()}`, name: "New Supplement", gender: "any", symptoms: [{ id: `symp-${Date.now()}`, text: "New Symptom" }] };
        DOM.supplementSettingsList.appendChild(AppUI.createSupplementEditorElement(newSupp));
    });
    DOM.supplementSettingsList.addEventListener('click', (e) => {
        if (e.target.closest('.remove-supplement-btn')) { e.target.closest('.settings-supplement-editor-card').remove(); }
        if (e.target.closest('.remove-symptom-btn')) { e.target.closest('.symptom-input-group').remove(); }
        if (e.target.closest('.add-symptom-btn')) {
             // ... (Same add symptom logic as above, purely fallback for main modal) ...
             const list = e.target.closest('.settings-supplement-editor-card').querySelector('.supp-symptoms-list');
             const group = document.createElement('div'); group.className = 'symptom-input-group';
             group.innerHTML = `<div class="symptom-input-row"><input type="text" class="supp-symptom-text-input w-full bg-gray-500 text-white rounded p-2 text-sm"><button class="remove-symptom-btn bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">X</button></div><div><label>Sidebar</label><textarea rows="2" class="supp-symptom-pitch-input w-full bg-gray-500 text-white rounded p-2 text-sm"></textarea></div><div><label>Benefit</label><input type="text" class="supp-symptom-benefit-input w-full bg-gray-500 text-white rounded p-2 text-sm"></div>`;
             list.appendChild(group);
        }
    });

    // Initialize Ref Listeners
    AppUI.initReferenceSettingsEventListeners();
}
