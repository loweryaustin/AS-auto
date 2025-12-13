/**
 * ============================================
 * SCRIPT TOOL KNOWLEDGE BASE COMPONENT (V7.26.0)
 * ============================================
 * This component handles the "Deep Knowledge" / "Product Bible" feature.
 * It checks if the current database has a linked knowledge key,
 * renders a button, and manages the reading modal.
 *
 * It depends on:
 * - `appState`, `DOM`, `KNOWLEDGE_BASE` (global)
 */

AppUI.renderKnowledgeButton = function() {
    const container = document.getElementById('knowledge-btn-container');
    if (!container) return;

    container.innerHTML = ''; // Clear existing

    // Check if the current DB has a knowledge key
    const kbKey = appState.supplementDatabase.knowledgeBase;
    
    // Check if content exists for that key
    if (kbKey && KNOWLEDGE_BASE[kbKey]) {
        const btn = document.createElement('button');
        btn.className = "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 mb-6";
        btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Deep Knowledge</span>
        `;
        
        btn.onclick = () => AppUI.openKnowledgeModal(kbKey);
        container.appendChild(btn);
    }
}

AppUI.openKnowledgeModal = function(key) {
    const modal = document.getElementById('knowledge-modal');
    const contentDiv = document.getElementById('knowledge-modal-content');
    const title = document.getElementById('knowledge-modal-title');
    
    if (!modal || !contentDiv) return;

    const htmlContent = KNOWLEDGE_BASE[key];
    
    // Set content
    if(title) title.textContent = `${appState.supplementDatabase.baseProduct.name} - Deep Knowledge`;
    contentDiv.innerHTML = htmlContent;
    
    // Show modal
    modal.classList.remove('hidden');
}

AppUI.initKnowledgeEventListeners = function() {
    const closeBtn = document.getElementById('knowledge-modal-close-btn');
    const modal = document.getElementById('knowledge-modal');
    
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }
}
