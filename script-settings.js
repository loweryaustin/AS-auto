/**
 * ============================================
 * SCRIPT TOOL SETTINGS MODAL LOGIC (V7.24.0)
 * ============================================
 * Includes null checks to prevent crashes if HTML is missing.
 */

let autoSaveTimer = null;
let qeDraggedItem = null;
let qeDragSourceGroup = null;
let libAvailableSupps = [];

AppUI.createSupplementEditorElement = function(supp) {
    const suppEl = document.createElement('div');
    suppEl.className = 'p-4 bg-gray-700 rounded-lg space-y-3 settings-supplement-editor-card';
    suppEl.dataset.suppId = supp.id;
    const safeName = supp.name ? supp.name.replace(/"/g, '&quot;') : "Unnamed Supplement";
    suppEl.innerHTML = `
        <div class="flex justify-between items-center pb-2 border-b border-gray-600">
            <div class="flex-1"><label class="text-xs text-gray-400">Supplement Name</label><input type="text" value="${safeName}" class="supp-name-input w-full bg-gray-600 text-white rounded p-2 text-sm"></div>
            <select class="supp-gender-select bg-gray-600 text-white rounded p-2 text-sm ml-3"><option value="any" ${supp.gender === 'any' ? 'selected' : ''}>Gender: Any</option><option value="male" ${supp.gender === 'male' ? 'selected' : ''}>Gender: Male Only</option><option value="female" ${supp.gender === 'female' ? 'selected' : ''}>Gender: Female Only</option></select>
            <button class="remove-supplement-btn bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-1 px-3 rounded-lg ml-3">Remove</button>
        </div><h5 class="text-sm font-semibold text-gray-300 pt-2 border-t border-gray-600">Symptoms</h5>`;
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
            symptomGroup.innerHTML = `<div class="symptom-input-row"><input type="text" value="${safeSympText}" class="supp-symptom-text-input w-full bg-gray-500 text-white rounded p-2 text-sm" placeholder="Symptom Text"><button class="remove-symptom-btn bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">X</button></div><div><label>Sidebar Pitch</label><textarea rows="2" class="supp-symptom-pitch-input w-full bg-gray-500 text-white rounded p-2 text-sm" placeholder="Sidebar pitch...">${safePitch}</textarea></div><div><label>Script Benefit</label><input type="text" value="${safeBenefit}" class="supp-symptom-benefit-input w-full bg-gray-500 text-white rounded p-2 text-sm" placeholder="Script benefit..."></div>`;
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

AppUI.createNestedQuestionRow = function(q) {
    const row = document.createElement('div');
    row.className = 'qe-question-row';
    row.draggable = true;
    row.dataset.qid = q.id || `q-${Date.now()}-${Math.random()}`;
    const safeText = q.text ? q.text.replace(/"/g, '&quot;') : "";
    row.innerHTML = `<div class="qe-question-drag-handle">::</div><input type="text" value="${safeText}" class="question-text-input w-full bg-transparent text-white text-sm focus:outline-none" placeholder="Question text..."><button class="qe-remove-btn remove-question-btn" title="Remove Question">X</button>`;
    return row;
}

AppUI.createNestedGroupCard = function(group, questions = []) {
    const card = document.createElement('div');
    card.className = 'qe-group-card';
    card.dataset.gid = group.id;
    const safeName = group.name.replace(/"/g, '&quot;');
    card.innerHTML = `<div class="qe-group-header"><div class="qe-group-drag-handle" title="Drag to reorder groups">::</div><input type="text" value="${safeName}" class="group-name-input flex-1 bg-transparent text-white font-bold text-sm focus:outline-none focus:border-b focus:border-blue-500" placeholder="Group Name"><select class="group-gender-select bg-gray-700 text-white text-xs rounded p-1 border border-gray-600"><option value="any" ${group.gender === 'any' ? 'selected' : ''}>Any</option><option value="male" ${group.gender === 'male' ? 'selected' : ''}>Male</option><option value="female" ${group.gender === 'female' ? 'selected' : ''}>Female</option></select><button class="qe-remove-btn remove-group-btn ml-2" title="Delete Group">X</button></div><div class="qe-questions-container min-h-[50px]"></div><button class="qe-add-question-btn">+ Add Question</button>`;
    const container = card.querySelector('.qe-questions-container');
    questions.forEach(q => container.appendChild(AppUI.createNestedQuestionRow(q)));
    return card;
}

AppUI.renderSettingsModal = function() {
    if (appState.isSettingsOpen && DOM.settingsModal) {
        DOM.settingsModal.classList.remove('hidden');
        if(DOM.agentNameSettingInput) DOM.agentNameSettingInput.value = appState.settings.agentName;
        if(DOM.currentDbNameDisplay) DOM.currentDbNameDisplay.textContent = appState.currentDbName;

        const hasSavedSettings = localStorage.getItem(APP_SETTINGS_KEY) !== null;
        const hasSavedDatabases = localStorage.getItem(EDITED_DATABASES_KEY) !== null;
        if(DOM.settingsWarningBox) DOM.settingsWarningBox.classList.toggle('hidden', !hasSavedSettings && !hasSavedDatabases);

        if(DOM.segmentSettingsList) {
            DOM.segmentSettingsList.innerHTML = '';
            appState.settings.segments.forEach((segment, index) => {
                const segmentEl = document.createElement('div');
                segmentEl.className = 'flex items-center gap-3 p-3 bg-gray-700 rounded-lg';
                segmentEl.dataset.id = segment.id;
                segmentEl.innerHTML = `<span class="text-gray-400 font-bold">${index + 1}</span><div class="flex-1"><label class="text-xs text-gray-400">Title</label><input type="text" value="${segment.title.replace(/"/g, '&quot;')}" class="segment-title-input w-full bg-gray-600 text-white rounded p-2 text-sm"></div><div class="w-24"><label class="text-xs text-gray-400">Duration (sec)</label><input type="number" value="${segment.duration}" class="segment-duration-input w-full bg-gray-600 text-white rounded p-2 text-sm"></div><button data-segment-id="${segment.id}" class="remove-segment-btn bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">X</button>`;
                DOM.segmentSettingsList.appendChild(segmentEl);
            });
        }

        if(DOM.questionsEditorList) DOM.questionsEditorList.innerHTML = '<div class="text-gray-500 italic text-sm">Please use the Quick Edit (Cog icon) on the main page to edit questions and groups.</div>';

        const productLineInput = document.getElementById('product-line-setting');
        if (productLineInput) productLineInput.value = appState.supplementDatabase.productLine || "General";

        if(DOM.baseProductNameSetting) DOM.baseProductNameSetting.value = appState.supplementDatabase.baseProduct.name;
        if(DOM.baseProductPitchSetting) DOM.baseProductPitchSetting.value = appState.supplementDatabase.baseProduct.pitch;
        if(DOM.baseProductGuaranteeSetting) DOM.baseProductGuaranteeSetting.value = appState.supplementDatabase.guaranteeDays || 60;
        
        const currentGender = appState.supplementDatabase.baseProduct.gender || 'any';
        const genderSelect = document.getElementById('base-product-gender-setting');
        if (genderSelect) genderSelect.value = currentGender;
        
        if(DOM.supplementSettingsList) {
            DOM.supplementSettingsList.innerHTML = '';
            if (appState.supplementDatabase.recommendations) {
                appState.supplementDatabase.recommendations.forEach(supp => {
                    DOM.supplementSettingsList.appendChild(AppUI.createSupplementEditorElement(supp));
                });
            }
        }
        
        if(DOM.referenceSettingsList) {
            DOM.referenceSettingsList.innerHTML = '';
            if (appState.supplementDatabase.references) {
                 appState.supplementDatabase.references.forEach(ref => {
                    DOM.referenceSettingsList.appendChild(AppUI.createReferenceEditorElement(ref));
                });
            }
        }
    } else if (DOM.settingsModal) {
        DOM.settingsModal.classList.add('hidden');
    }
}

AppUI.readAndSaveAllSettings = function() {
    if(DOM.agentNameSettingInput) appState.settings.agentName = DOM.agentNameSettingInput.value || "[Agent Name]";
    
    if(DOM.segmentSettingsList) {
        const newSegments = [];
        const segmentElements = DOM.segmentSettingsList.querySelectorAll('[data-id]');
        segmentElements.forEach(el => {
            const id = el.dataset.id;
            const titleInput = el.querySelector('.segment-title-input');
            const durationInput = el.querySelector('.segment-duration-input');
            if (!titleInput || !durationInput) return;
            const existingSegment = appState.settings.segments.find(s => s.id === id) || {};
            newSegments.push({ ...existingSegment, id: id, title: titleInput.value || "Segment", duration: parseInt(durationInput.value, 10) || 60 });
        });
        appState.settings.segments = newSegments;
    }

    if(DOM.baseProductNameSetting) appState.supplementDatabase.baseProduct.name = DOM.baseProductNameSetting.value;
    if(DOM.baseProductPitchSetting) appState.supplementDatabase.baseProduct.pitch = DOM.baseProductPitchSetting.value;
    if(DOM.baseProductGuaranteeSetting) appState.supplementDatabase.guaranteeDays = parseInt(DOM.baseProductGuaranteeSetting.value, 10) || 60;
    
    const genderSelect = document.getElementById('base-product-gender-setting');
    if (genderSelect) appState.supplementDatabase.baseProduct.gender = genderSelect.value;

    const productLineInput = document.getElementById('product-line-setting');
    if (productLineInput) {
        const newLine = productLineInput.value.trim() || "General";
        if (appState.supplementDatabase.productLine !== newLine) {
            appState.supplementDatabase.productLine = newLine;
            appState.currentProductLine = newLine;
            if (AppUI.renderProductLineSwitcher) AppUI.renderProductLineSwitcher();
        }
    }
    
    if(DOM.supplementSettingsList) {
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
                    newSymptoms.push({ id: sympId, text: sympTextInput.value, pitch: sympPitchInput.value, benefit: sympBenefitInput.value });
                }
            });
            
            if (existingRec) { existingRec.name = nameInput.value; existingRec.gender = genderSelect.value; existingRec.symptoms = newSymptoms; } 
            else { appState.supplementDatabase.recommendations.push({ id: suppId, name: nameInput.value, gender: genderSelect.value, symptoms: newSymptoms }); }
        });
    }
    
    if(DOM.referenceSettingsList) {
        const newReferences = [];
        const refElements = DOM.referenceSettingsList.querySelectorAll('[data-ref-id]');
        refElements.forEach(el => {
            const id = el.dataset.refId;
            const title = el.querySelector('.ref-title-input').value;
            const icon = el.querySelector('.ref-icon-input').value;
            const type = el.querySelector('.ref-type-select').value;
            const shortcut = el.querySelector('.ref-shortcut-input').value;
            const url = el.querySelector('.ref-url-input').value;
            if (title && url) { newReferences.push({ id: id, title: title, icon: icon || 'book', type: type, shortcut: shortcut.trim().slice(0, 1), url: url }); }
        });
        appState.supplementDatabase.references = newReferences;
    }
    
    saveSettingsToStorage();
    initAppUI();
}

AppUI.triggerAutoSave = function(delay = 500) {
    clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
        if (appState.isSettingsOpen) { AppUI.readAndSaveAllSettings(); } 
        else if (DOM.quickEditModal && !DOM.quickEditModal.classList.contains('hidden')) {
            if (DOM.quickEditContent.querySelector('.settings-supplement-editor-card')) { AppUI.saveQuickEdit(); } 
            else if (DOM.quickEditContent.querySelector('.qe-group-card')) { AppUI.saveQuestionEditor(); }
        }
    }, delay);
}

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
        if (sympTextInput && sympTextInput.value) {
            newSymptoms.push({ id: sympId, text: sympTextInput.value, pitch: sympPitchInput.value, benefit: sympBenefitInput.value });
        }
    });
    existingRec.name = nameInput.value;
    existingRec.gender = genderSelect.value;
    existingRec.symptoms = newSymptoms;
    saveSettingsToStorage();
    initAppUI();
}

AppUI.openQuestionEditor = function() {
    DOM.quickEditTitle.textContent = "Edit Questions";
    DOM.quickEditContent.innerHTML = '';
    const groups = appState.supplementDatabase.questionGroups || [];
    const questions = appState.supplementDatabase.questions || [];
    const groupedQs = {};
    groups.forEach(g => groupedQs[g.name] = []);
    questions.forEach(q => {
        const gName = q.group || "General";
        if (!groupedQs[gName]) groupedQs[gName] = []; 
        groupedQs[gName].push(q);
    });
    groups.forEach(g => DOM.quickEditContent.appendChild(AppUI.createNestedGroupCard(g, groupedQs[g.name])));
    Object.keys(groupedQs).forEach(gName => {
        if (!groups.find(g => g.name === gName)) {
            DOM.quickEditContent.appendChild(AppUI.createNestedGroupCard({ id: `g-${Date.now()}`, name: gName, gender: 'any' }, groupedQs[gName]));
        }
    });
    const addGroupBtn = document.createElement('button');
    addGroupBtn.className = "w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg border-2 border-blue-500 border-dashed opacity-80 hover:opacity-100 transition-all";
    addGroupBtn.textContent = "+ Add New Group";
    addGroupBtn.onclick = function() {
        DOM.quickEditContent.insertBefore(AppUI.createNestedGroupCard({ id: `g-${Date.now()}`, name: "New Group", gender: "any" }, []), addGroupBtn);
        AppUI.triggerAutoSave(50);
    };
    DOM.quickEditContent.appendChild(addGroupBtn);
    DOM.quickEditModal.classList.remove('hidden');
    AppUI.initQuickEditDND();
}

AppUI.saveQuestionEditor = function() {
    const groupCards = DOM.quickEditContent.querySelectorAll('.qe-group-card');
    const newQuestions = [];
    const newGroups = [];
    groupCards.forEach(card => {
        const groupName = card.querySelector('.group-name-input').value || "Untitled Group";
        const groupGender = card.querySelector('.group-gender-select').value;
        newGroups.push({ id: card.dataset.gid, name: groupName, gender: groupGender });
        card.querySelectorAll('.qe-question-row').forEach(row => {
            const qText = row.querySelector('.question-text-input').value;
            if (qText) newQuestions.push({ id: row.dataset.qid, text: qText, group: groupName });
        });
    });
    appState.supplementDatabase.questionGroups = newGroups;
    appState.supplementDatabase.questions = newQuestions;
    saveSettingsToStorage();
    initAppUI();
}

AppUI.initQuickEditDND = function() {
    const container = DOM.quickEditContent;
    container.ondragstart = function(e) {
        if (e.target.classList.contains('qe-question-row')) {
            qeDraggedItem = e.target;
            e.target.classList.add('opacity-50');
            e.dataTransfer.effectAllowed = 'move';
            e.stopPropagation(); 
        }
    };
    container.ondragend = function(e) {
        if (qeDraggedItem) { qeDraggedItem.classList.remove('opacity-50'); qeDraggedItem = null; AppUI.triggerAutoSave(50); }
    };
    container.ondragover = function(e) {
        e.preventDefault();
        if (!qeDraggedItem) return;
        const groupContainer = e.target.closest('.qe-questions-container');
        if (groupContainer) groupContainer.appendChild(qeDraggedItem);
    };
}

AppUI.openLibraryImportModal = function() {
    const modal = document.getElementById('library-import-modal');
    if (!modal) return;
    const suppInput = document.getElementById('lib-supplement-input');
    const suppResults = document.getElementById('lib-supplement-results');
    const currentLineDisplay = document.getElementById('lib-current-line-display');
    suppInput.value = '';
    suppResults.classList.add('hidden');
    suppResults.innerHTML = '';
    if (currentLineDisplay) currentLineDisplay.textContent = appState.currentProductLine || "General";
    if (AppLibrary && AppLibrary.getAllSupplementsInLine) libAvailableSupps = AppLibrary.getAllSupplementsInLine(appState.currentProductLine || "General");
    modal.classList.remove('hidden');
    suppInput.focus();
}

AppUI.initLibraryEventListeners = function() {
    const modal = document.getElementById('library-import-modal');
    if (!modal) return;
    const closeBtn = document.getElementById('library-import-close-btn');
    const cancelBtn = document.getElementById('library-import-cancel-btn');
    const suppInput = document.getElementById('lib-supplement-input');
    const suppResults = document.getElementById('lib-supplement-results');
    const closeModal = () => modal.classList.add('hidden');
    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(cancelBtn) cancelBtn.addEventListener('click', closeModal);

    function renderSuppResults(items, container) {
        if (!items || items.length === 0) container.innerHTML = '<div class="p-3 text-sm text-gray-400 italic">No matches found.</div>';
        else container.innerHTML = items.map((item, index) => `<div class="search-result-item px-4 py-3 hover:bg-gray-700 cursor-pointer border-b border-gray-700 last:border-0" data-index="${index}"><div class="flex justify-between items-center"><span class="text-white font-semibold">${item.name}</span><span class="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">From: ${item.sourceDb}</span></div></div>`).join('');
        container.classList.remove('hidden');
        container.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', () => {
                const selectedSupp = items[el.dataset.index];
                if (AppLibrary && AppLibrary.cloneSupplement) {
                    const importedSupp = AppLibrary.cloneSupplement(selectedSupp);
                    appState.supplementDatabase.recommendations.push(importedSupp);
                    if(DOM.supplementSettingsList) DOM.supplementSettingsList.appendChild(AppUI.createSupplementEditorElement(importedSupp));
                    AppUI.triggerAutoSave(50);
                    closeModal();
                }
            });
        });
    }
    const handleSuppSearch = () => {
        const query = suppInput.value.toLowerCase().trim();
        const filtered = query === '' ? libAvailableSupps : libAvailableSupps.filter(s => s.name.toLowerCase().includes(query));
        renderSuppResults(filtered, suppResults);
    };
    if(suppInput) {
        suppInput.addEventListener('input', handleSuppSearch);
        suppInput.addEventListener('click', handleSuppSearch);
    }
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#lib-supplement-input') && !e.target.closest('#lib-supplement-results')) {
            suppResults.classList.add('hidden');
        }
    });
}

AppUI.initSettingsEventListeners = function() {
    // --- Null Checks added here to prevent crash ---
    if (DOM.settingsCogBtn) DOM.settingsCogBtn.addEventListener('click', () => { appState.isSettingsOpen = true; AppUI.renderSettingsModal(); });
    if (DOM.settingsCloseBtn) DOM.settingsCloseBtn.addEventListener('click', () => { appState.isSettingsOpen = false; AppUI.renderSettingsModal(); });

    if (DOM.settingsModal) {
        DOM.settingsModal.addEventListener('input', () => AppUI.triggerAutoSave(500));
        DOM.settingsModal.addEventListener('click', (e) => { if (e.target.closest('button')) AppUI.triggerAutoSave(50); });
        
        DOM.settingsModal.addEventListener('input', (e) => {
            if (e.target.id === 'product-line-setting') {
                const input = e.target;
                const container = document.getElementById('product-line-setting-results');
                if (!container) return;
                const lines = getAvailableProductLines();
                const query = input.value.toLowerCase().trim();
                const filtered = query === '' ? lines : lines.filter(l => l.toLowerCase().includes(query));
                
                if(filtered.length > 0) {
                    container.innerHTML = filtered.map(l => `<div class="p-2 hover:bg-gray-600 cursor-pointer text-sm text-gray-200">${l}</div>`).join('');
                    container.classList.remove('hidden');
                    container.querySelectorAll('div').forEach(div => div.onclick = () => { input.value = div.textContent; container.classList.add('hidden'); AppUI.triggerAutoSave(50); });
                } else { container.classList.add('hidden'); }
            }
        });
        
        DOM.settingsModal.addEventListener('focusin', (e) => {
             if (e.target.id === 'product-line-setting') { e.target.dispatchEvent(new Event('input', { bubbles: true })); }
        });
        
        document.addEventListener('click', (e) => {
            const plContainer = document.getElementById('product-line-setting-results');
            const plInput = document.getElementById('product-line-setting');
            if (plContainer && !plContainer.contains(e.target) && e.target !== plInput) { plContainer.classList.add('hidden'); }
        });
    }

    if (DOM.quickEditModal) {
        DOM.quickEditModal.addEventListener('input', () => AppUI.triggerAutoSave(500));
        DOM.quickEditModal.addEventListener('click', (e) => {
            if (e.target.closest('.remove-symptom-btn')) { e.target.closest('.symptom-input-group').remove(); AppUI.triggerAutoSave(50); return; }
            if (e.target.closest('.add-symptom-btn')) {
                const symptomsListDiv = e.target.closest('.settings-supplement-editor-card').querySelector('.supp-symptoms-list');
                const newSymptomGroup = document.createElement('div');
                newSymptomGroup.className = 'symptom-input-group';
                newSymptomGroup.dataset.sympId = `symp-${Date.now()}`;
                newSymptomGroup.innerHTML = `<div class="symptom-input-row"><input type="text" class="supp-symptom-text-input w-full bg-gray-500 text-white rounded p-2 text-sm" placeholder="Symptom Text"><button class="remove-symptom-btn bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">X</button></div><div><label>Sidebar Pitch</label><textarea rows="2" class="supp-symptom-pitch-input w-full bg-gray-500 text-white rounded p-2 text-sm"></textarea></div><div><label>Script Benefit</label><input type="text" class="supp-symptom-benefit-input w-full bg-gray-500 text-white rounded p-2 text-sm"></div>`;
                symptomsListDiv.appendChild(newSymptomGroup);
                AppUI.triggerAutoSave(50);
                return;
            }
            if (e.target.classList.contains('qe-add-question-btn')) {
                const card = e.target.closest('.qe-group-card');
                card.querySelector('.qe-questions-container').appendChild(AppUI.createNestedQuestionRow({ text: "" }));
                AppUI.triggerAutoSave(50); return;
            }
            if (e.target.closest('.qe-remove-btn.remove-question-btn')) { e.target.closest('.qe-question-row').remove(); AppUI.triggerAutoSave(50); return; }
            if (e.target.closest('.qe-remove-btn.remove-group-btn')) { if(confirm("Delete this group and all its questions?")) { e.target.closest('.qe-group-card').remove(); AppUI.triggerAutoSave(50); } return; }
        });
    }

    if (DOM.addSegmentBtn) DOM.addSegmentBtn.addEventListener('click', () => { appState.settings.segments.push({ id: `seg-${Date.now()}`, title: "New Segment", duration: 60, state: 'pending', progress: 0, overtime: 0 }); AppUI.renderSettingsModal(); });
    
    if (DOM.segmentSettingsList) DOM.segmentSettingsList.addEventListener('click', (e) => {
        if (e.target.closest('.remove-segment-btn')) {
            const id = e.target.closest('.remove-segment-btn').dataset.segmentId;
            appState.settings.segments = appState.settings.segments.filter(s => s.id !== id);
            AppUI.renderSettingsModal(); 
        }
    });
    
    if (DOM.addSupplementBtn) DOM.addSupplementBtn.addEventListener('click', () => {
        const newSupp = { id: `supp-${Date.now()}`, name: "New Supplement", gender: "any", symptoms: [{ id: `symp-${Date.now()}`, text: "New Symptom" }] };
        if(DOM.supplementSettingsList) DOM.supplementSettingsList.appendChild(AppUI.createSupplementEditorElement(newSupp));
    });

    if (DOM.supplementSettingsList) DOM.supplementSettingsList.addEventListener('click', (e) => {
        if (e.target.closest('.remove-supplement-btn')) { e.target.closest('.settings-supplement-editor-card').remove(); }
        if (e.target.closest('.remove-symptom-btn')) { e.target.closest('.symptom-input-group').remove(); }
        if (e.target.closest('.add-symptom-btn')) {
             const list = e.target.closest('.settings-supplement-editor-card').querySelector('.supp-symptoms-list');
             const group = document.createElement('div'); group.className = 'symptom-input-group';
             group.innerHTML = `<div class="symptom-input-row"><input type="text" class="supp-symptom-text-input w-full bg-gray-500 text-white rounded p-2 text-sm"><button class="remove-symptom-btn bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">X</button></div><div><label>Sidebar</label><textarea rows="2" class="supp-symptom-pitch-input w-full bg-gray-500 text-white rounded p-2 text-sm"></textarea></div><div><label>Benefit</label><input type="text" class="supp-symptom-benefit-input w-full bg-gray-500 text-white rounded p-2 text-sm"></div>`;
             list.appendChild(group);
        }
    });
    
    const importBtn = document.getElementById('import-from-library-btn');
    if (importBtn) { importBtn.addEventListener('click', AppUI.openLibraryImportModal); }
    
    AppUI.initLibraryEventListeners();
    AppUI.initReferenceSettingsEventListeners();
}
