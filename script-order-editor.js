/**
 * ============================================
 * SCRIPT TOOL ONLINE ORDER EDITOR (V5.0.0)
 * ============================================
 * This component handles all UI and logic for the
 * "Online Order" editor in Part 5.
 *
 * It depends on:
 * - `appState`, `DOM` (global)
 * - `renderAllScript()` (from script.js)
 */

/**
 * Renders the list of items in the online order editor.
 */
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

/**
 * Renders the search results dropdown for the online order editor.
 * @param {string} query - The search query from the input box.
 */
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

/**
 * Attaches event listeners for the Online Order Editor component.
 */
AppUI.initOrderEditorEventListeners = function() {
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
            renderAllScript(); // Defined in script.js
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
