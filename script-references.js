/**
 * ============================================
 * SCRIPT TOOL REFERENCES COMPONENT (V7.25.0)
 * ============================================
 * This component handles all logic and UI for the
 * References feature, including:
 * - Sidebar button rendering (Including built-in BMI, A1C, BP, Testo, PSA Charts)
 * - Modal (open/close, content injection)
 * - Keyboard shortcuts
 * - Settings modal editor UI (icon picker, add/remove)
 *
 * It depends on:
 * - `appState`, `DOM` (global)
 * - `lucide` (from CDN)
 * - `saveSettingsToStorage()` (from script.js)
 * - `AppUI.triggerAutoSave()` (from script-settings.js)
 * - `AppUI.openBmiModal()` (from script.js)
 */

// --- Module-level variables ---
let lucideIconNames = []; // Cache for icon names
let activeIconPicker = null; // Track which icon picker is open

/**
 * Helper function to fix icon name format.
 * Converts "camelCase" to "kebab-case".
 * e.g., "NotebookPen" -> "notebook-pen"
 */
function camelToKebab(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Caches DOM elements specific to the References feature.
 * Called by the main `cacheDOMElements` in script.js.
 */
AppUI.cacheReferenceDOMElements = function() {
    DOM.referenceModal = document.getElementById('reference-modal');
    DOM.referenceModalTitle = document.getElementById('reference-modal-title');
    DOM.referenceModalContent = document.getElementById('reference-modal-content');
    DOM.referenceModalCloseBtn = document.getElementById('reference-modal-close-btn');
    DOM.referenceButtonsContainer = document.getElementById('reference-buttons-container');
    DOM.noReferencesPlaceholder = document.getElementById('no-references-placeholder');
    // Settings-specific elements
    DOM.addReferenceBtn = document.getElementById('add-reference-btn');
    DOM.referenceSettingsList = document.getElementById('reference-settings-list');
    
    // Charts
    DOM.a1cModal = document.getElementById('a1c-modal');
    DOM.a1cModalCloseBtn = document.getElementById('a1c-modal-close-btn');
    
    DOM.bpModal = document.getElementById('bp-modal');
    DOM.bpModalCloseBtn = document.getElementById('bp-modal-close-btn');
    
    DOM.testoModal = document.getElementById('testo-modal');
    DOM.testoModalCloseBtn = document.getElementById('testo-modal-close-btn');

    // NEW (V7.23.0): PSA Chart
    DOM.psaModal = document.getElementById('psa-modal');
    DOM.psaModalCloseBtn = document.getElementById('psa-modal-close-btn');
}

/**
 * Renders the reference buttons in the sidebar.
 * (Moved from script.js)
 */
AppUI.renderReferenceSidebar = function() {
    DOM.referenceButtonsContainer.innerHTML = ''; // Clear existing
    
    // --- Built-in Tools Container ---
    // We group these to keep them distinct from custom references
    
    // 1. BMI Calculator
    const bmiBtn = document.createElement('button');
    bmiBtn.className = 'reference-btn bg-gray-800 border-blue-900/50 hover:bg-gray-700 hover:border-blue-500';
    bmiBtn.id = 'built-in-bmi-btn';
    bmiBtn.title = 'Open BMI Calculator';
    bmiBtn.innerHTML = `
        <i data-lucide="calculator" class="w-8 h-8 text-blue-400"></i>
        <span class="reference-btn-title text-blue-200">BMI Calc</span>
    `;
    DOM.referenceButtonsContainer.appendChild(bmiBtn);

    // 2. A1C Chart
    const a1cBtn = document.createElement('button');
    a1cBtn.className = 'reference-btn bg-gray-800 border-purple-900/50 hover:bg-gray-700 hover:border-purple-500';
    a1cBtn.id = 'built-in-a1c-btn';
    a1cBtn.title = 'Open A1C Chart';
    a1cBtn.innerHTML = `
        <i data-lucide="droplet" class="w-8 h-8 text-purple-400"></i>
        <span class="reference-btn-title text-purple-200">A1C</span>
    `;
    DOM.referenceButtonsContainer.appendChild(a1cBtn);

    // 3. BP Chart
    const bpBtn = document.createElement('button');
    bpBtn.className = 'reference-btn bg-gray-800 border-red-900/50 hover:bg-gray-700 hover:border-red-500';
    bpBtn.id = 'built-in-bp-btn';
    bpBtn.title = 'Open Blood Pressure Chart';
    bpBtn.innerHTML = `
        <i data-lucide="heart-pulse" class="w-8 h-8 text-red-400"></i>
        <span class="reference-btn-title text-red-200">BP Chart</span>
    `;
    DOM.referenceButtonsContainer.appendChild(bpBtn);

    // 4. Testosterone Chart
    const tBtn = document.createElement('button');
    tBtn.className = 'reference-btn bg-gray-800 border-yellow-900/50 hover:bg-gray-700 hover:border-yellow-500';
    tBtn.id = 'built-in-testo-btn';
    tBtn.title = 'Open Testosterone Chart';
    tBtn.innerHTML = `
        <i data-lucide="activity" class="w-8 h-8 text-yellow-400"></i>
        <span class="reference-btn-title text-yellow-200">Testo</span>
    `;
    DOM.referenceButtonsContainer.appendChild(tBtn);

    // 5. PSA Chart (NEW V7.23.0)
    const psaBtn = document.createElement('button');
    psaBtn.className = 'reference-btn bg-gray-800 border-green-900/50 hover:bg-gray-700 hover:border-green-500';
    psaBtn.id = 'built-in-psa-btn';
    psaBtn.title = 'Open PSA Chart';
    psaBtn.innerHTML = `
        <i data-lucide="activity" class="w-8 h-8 text-green-400"></i>
        <span class="reference-btn-title text-green-200">PSA</span>
    `;
    DOM.referenceButtonsContainer.appendChild(psaBtn);

    // ----------------------------------------------------

    const refs = appState.supplementDatabase.references;
    
    // If no custom references, show placeholder (but BMI/Charts buttons are already there)
    if (!refs || refs.length === 0) {
        DOM.noReferencesPlaceholder.classList.remove('hidden');
    } else {
        DOM.noReferencesPlaceholder.classList.add('hidden');
        
        refs.forEach((ref, index) => {
            // Guardrail for old data without icons
            const iconName = ref.icon || 'book';
            
            const button = document.createElement('button');
            button.className = 'reference-btn';
            button.dataset.index = index;
            button.title = `${ref.title} (Shortcut: ${ref.shortcut || 'None'})`;
            
            button.innerHTML = `
                <i data-lucide="${iconName}" class="w-8 h-8"></i>
                <span class="reference-btn-title">${ref.title}</span>
            `;
            DOM.referenceButtonsContainer.appendChild(button);
        });
    }
    
    // We must call this AFTER injecting the HTML
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

/**
 * Opens the reference modal with the content
 * from the selected reference object.
 * (Moved from script.js)
 * @param {object} ref - The reference object from the database.
 */
AppUI.openReferenceModal = function(ref) {
    if (!ref) return;
    
    DOM.referenceModalTitle.textContent = ref.title;
    DOM.referenceModalContent.innerHTML = ''; // Clear previous content
    
    if (ref.type === 'image') {
        DOM.referenceModalContent.innerHTML = `<img src="${ref.url}" alt="${ref.title}" class="reference-image">`;
    } else { // 'website'
        DOM.referenceModalContent.innerHTML = `<iframe src="${ref.url}" class="reference-iframe" title="${ref.title}"></iframe>`;
    }
    
    DOM.referenceModal.classList.remove('hidden');
    appState.isReferenceModalOpen = true;
}

/**
 * Closes the reference modal and clears its content.
 * (Moved from script.js)
 */
AppUI.closeReferenceModal = function() {
    DOM.referenceModal.classList.add('hidden');
    DOM.referenceModalTitle.textContent = 'Reference';
    DOM.referenceModalContent.innerHTML = '';
    appState.isReferenceModalOpen = false;
}

/**
 * Global keydown listener for shortcuts.
 * (Moved from script.js)
 */
AppUI.handleReferenceKeydown = function(e) {
    // Do not run shortcuts if user is typing in an input
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        return;
    }
    
    // Do not run if settings modal is open
    if (appState.isSettingsOpen) {
        return;
    }

    const refs = appState.supplementDatabase.references;
    if (!refs || refs.length === 0) return;

    // Find a reference that matches the pressed key
    const pressedKey = e.key.toLowerCase();
    const matchingRef = refs.find(ref => ref.shortcut && ref.shortcut.toLowerCase() === pressedKey);
    
    if (matchingRef) {
        e.preventDefault(); // Prevent default browser action (e.g., 'f' for find)
        
        // Toggle logic
        if (appState.isReferenceModalOpen) {
            AppUI.closeReferenceModal();
        } else {
            AppUI.openReferenceModal(matchingRef);
        }
    }
    
    // Allow closing with Escape key
    if (appState.isReferenceModalOpen && e.key === 'Escape') {
        AppUI.closeReferenceModal();
    }
}

// --- Settings Modal Logic ---

/**
 * Creates the HTML element for a single reference
 * in the settings modal editor.
 * (Moved from script-settings.js)
 * @param {object} ref - The reference configuration object.
 * @returns {HTMLElement} - The fully constructed div element.
 */
AppUI.createReferenceEditorElement = function(ref) {
    const refEl = document.createElement('div');
    refEl.className = 'reference-editor-card';
    refEl.dataset.refId = ref.id;

    // Sanitize values
    const safeTitle = ref.title ? ref.title.replace(/"/g, '&quot;') : "";
    const safeUrl = ref.url ? ref.url.replace(/"/g, '&quot;') : "";
    const safeShortcut = ref.shortcut ? ref.shortcut.replace(/"/g, '&quot;') : "";
    const safeIcon = ref.icon ? ref.icon.replace(/"/g, '&quot;') : "book";

    refEl.innerHTML = `
        <div class="reference-editor-grid sm:grid-cols-4">
            <!-- Column 1: Title -->
            <div>
                <label>Title</label>
                <input type="text" value="${safeTitle}" class="ref-input ref-title-input" placeholder="e.g., Study Link">
            </div>
            
            <!-- Column 2: Icon -->
            <div class="icon-picker-container">
                <label>Icon</label>
                <div class="icon-picker-input-wrap">
                    <span class="icon-picker-preview">
                        <i data-lucide="${safeIcon}"></i>
                    </span>
                    <input type="text" value="${safeIcon}" class="ref-input ref-icon-input icon-picker-input" placeholder="Search icons...">
                </div>
                <div class="icon-picker-results hidden"></div>
            </div>

            <!-- Column 3: Type -->
            <div>
                <label>Type</label>
                <select class="ref-input ref-type-select">
                    <option value="website" ${ref.type === 'website' ? 'selected' : ''}>Website URL</option>
                    <option value="image" ${ref.type === 'image' ? 'selected' : ''}>Image URL</option>
                </select>
            </div>
            
            <!-- Column 4: Shortcut -->
            <div>
                <label>Shortcut Key</label>
                <input type="text" value="${safeShortcut}" class="ref-input ref-shortcut-input" placeholder="e.g., 1, a, A" maxlength="1">
            </div>
        </div>
        
        <!-- Full-width URL -->
        <div class="mt-2">
            <label>URL (Image link or Website link)</label>
            <input type="text" value="${safeUrl}" class="ref-input ref-url-input" placeholder="https://...">
        </div>
        
        <button class="remove-reference-btn bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-1 px-3 rounded-lg mt-3">
            Remove Reference
        </button>
    `;

    // Manually call createIcons on the new element
    if (typeof lucide !== 'undefined') {
        lucide.createIcons({
            nodes: [refEl.querySelector('.icon-picker-preview i')]
        });
    }

    return refEl;
}

/**
 * Renders the search results for the icon picker.
 * (Moved from script-settings.js)
 * @param {string} query - The search query.
 * @param {HTMLElement} resultsContainer - The DOM element to fill.
 */
AppUI.renderIconPickerResults = function(query, resultsContainer) {
    if (!lucideIconNames || lucideIconNames.length === 0) {
        // Load icon names on demand
        if (lucideIconNames.length === 0 && typeof lucide !== 'undefined' && lucide.icons) {
            const iconObject = lucide.icons || {};
            lucideIconNames = Object.keys(iconObject).map(camelToKebab); 
            console.log(`Loaded ${lucideIconNames.length} Lucide icon names.`);
        } else {
            resultsContainer.innerHTML = '<div class="p-2 text-sm text-gray-400">Loading icons...</div>';
            resultsContainer.classList.remove('hidden'); // Show "Loading"
            return;
        }
    }

    const lowerQuery = query.toLowerCase();
    const filteredIcons = lowerQuery.length > 0 
        ? lucideIconNames.filter(name => name.includes(lowerQuery)) 
        : lucideIconNames; // Show all if no query

    if (filteredIcons.length === 0) {
        resultsContainer.innerHTML = '<div class="p-2 text-sm text-gray-400">No icons found.</div>';
        resultsContainer.classList.remove('hidden');
        return;
    }

    resultsContainer.innerHTML = filteredIcons.slice(0, 100).map(name => `
        <div class="icon-picker-item" data-icon-name="${name}" title="${name}">
            <i data-lucide="${name}"></i>
            <span class="icon-name">${name}</span>
        </div>
    `).join(''); // Limit to 100 results for performance

    if (typeof lucide !== 'undefined') {
        lucide.createIcons({
            nodes: resultsContainer.querySelectorAll('i')
        });
    }
    
    resultsContainer.classList.remove('hidden');
}

/**
 * Attaches event listeners for the Reference Settings Editor
 * (called by initSettingsEventListeners)
 */
AppUI.initReferenceSettingsEventListeners = function() {
    // Listeners for Reference Editor
    if (DOM.addReferenceBtn) {
        DOM.addReferenceBtn.addEventListener('click', () => {
            const newRef = {
                id: `ref-${Date.now()}`,
                title: "New Reference",
                icon: "book",
                type: "website",
                shortcut: "",
                url: ""
            };
            const newRefElement = AppUI.createReferenceEditorElement(newRef);
            DOM.referenceSettingsList.appendChild(newRefElement);
            // Auto-save will be triggered by the main 'click' listener in script-settings.js
        });
    }

    if (DOM.referenceSettingsList) {
        DOM.referenceSettingsList.addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.remove-reference-btn');
            if (removeBtn) {
                removeBtn.closest('.reference-editor-card').remove();
                // Auto-save will be triggered by the main 'click' listener in script-settings.js
            }
        });
    }

    // --- Icon Picker Listeners (from script-settings.js) ---
    // Note: These rely on the Settings Modal being open, so listeners are typically attached to the modal itself
    if (DOM.settingsModal) {
        DOM.settingsModal.addEventListener('input', (e) => {
            // Handle icon picker search
            const iconInput = e.target.closest('.icon-picker-input');
            if (iconInput) {
                const container = iconInput.closest('.icon-picker-container');
                const results = container.querySelector('.icon-picker-results');
                AppUI.renderIconPickerResults(iconInput.value, results);
                activeIconPicker = results;
            }
        });
        
        DOM.settingsModal.addEventListener('focusin', (e) => {
            // Show icon picker results on focus
            const iconInput = e.target.closest('.icon-picker-input');
             if (iconInput) {
                const container = iconInput.closest('.icon-picker-container');
                const results = container.querySelector('.icon-picker-results');
                AppUI.renderIconPickerResults(iconInput.value, results);
                activeIconPicker = results;
            }
        });
        
        // Handle clicking an icon from the picker
        DOM.settingsModal.addEventListener('click', (e) => {
            const iconItem = e.target.closest('.icon-picker-item');
            if (iconItem) {
                const iconName = iconItem.dataset.iconName;
                const container = iconItem.closest('.icon-picker-container');
                const input = container.querySelector('.icon-picker-input');
                const previewIcon = container.querySelector('.icon-picker-preview i');
                
                input.value = iconName;
                
                if (previewIcon) {
                    previewIcon.innerHTML = ''; 
                    previewIcon.setAttribute('data-lucide', iconName);
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons({ nodes: [previewIcon] });
                    }
                }
                
                container.querySelector('.icon-picker-results').classList.add('hidden');
                activeIconPicker = null;
                // We rely on script-settings.js to trigger the autosave via bubbling click
            }
        });
    }
    
    // Close icon picker when clicking outside
    document.addEventListener('click', (e) => {
        if (activeIconPicker && !activeIconPicker.closest('.icon-picker-container').contains(e.target)) {
            activeIconPicker.classList.add('hidden');
            activeIconPicker = null;
        }
    });
}

/**
 * Attaches event listeners for the main UI (sidebar, modal)
 * (called by setupEventListeners)
 */
AppUI.initReferenceEventListeners = function() {
    // --- Reference Modal Listeners ---
    
    // Delegation for Sidebar Buttons
    if (DOM.referenceButtonsContainer) {
        DOM.referenceButtonsContainer.addEventListener('click', (e) => {
            
            // 1. Check for BMI Button
            if (e.target.closest('#built-in-bmi-btn')) {
                if (AppUI.openBmiModal) AppUI.openBmiModal();
                return;
            }

            // 2. Check for A1C Button
            if (e.target.closest('#built-in-a1c-btn')) {
                if (DOM.a1cModal) DOM.a1cModal.classList.remove('hidden');
                return;
            }

            // 3. Check for BP Button
            if (e.target.closest('#built-in-bp-btn')) {
                if (DOM.bpModal) DOM.bpModal.classList.remove('hidden');
                return;
            }

            // 4. Check for Testo Button
            if (e.target.closest('#built-in-testo-btn')) {
                if (DOM.testoModal) DOM.testoModal.classList.remove('hidden');
                return;
            }

            // 5. Check for PSA Button (NEW V7.23.0)
            if (e.target.closest('#built-in-psa-btn')) {
                if (DOM.psaModal) DOM.psaModal.classList.remove('hidden');
                return;
            }

            // 6. Check for Standard Reference Buttons
            const button = e.target.closest('.reference-btn');
            if (button && button.dataset.index !== undefined) {
                const index = parseInt(button.dataset.index, 10);
                const ref = appState.supplementDatabase.references[index];
                if (ref) {
                    AppUI.openReferenceModal(ref);
                }
            }
        });
    }
    
    // Close Logic
    if (DOM.referenceModalCloseBtn) DOM.referenceModalCloseBtn.addEventListener('click', AppUI.closeReferenceModal);
    
    if (DOM.a1cModalCloseBtn) DOM.a1cModalCloseBtn.addEventListener('click', () => DOM.a1cModal.classList.add('hidden'));
    if (DOM.bpModalCloseBtn) DOM.bpModalCloseBtn.addEventListener('click', () => DOM.bpModal.classList.add('hidden'));
    if (DOM.testoModalCloseBtn) DOM.testoModalCloseBtn.addEventListener('click', () => DOM.testoModal.classList.add('hidden'));
    
    // NEW: PSA Close Logic
    if (DOM.psaModalCloseBtn) DOM.psaModalCloseBtn.addEventListener('click', () => DOM.psaModal.classList.add('hidden'));

    // --- Global Shortcut Listener ---
    document.addEventListener('keydown', AppUI.handleReferenceKeydown);
}
