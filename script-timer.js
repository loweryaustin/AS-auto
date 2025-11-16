/**
 * ============================================
 * SCRIPT TOOL TIMER LOGIC (V5.3.8)
 * ============================================
 * This component handles all logic and UI for
 * the floating call timer bar.
 *
 * It depends on:
 * - `appState`, `DOM` (global)
 * - `AppUI.formatTime` (from script-ui.js)
 * - `updateTimerControlsVisibility` (from script.js)
 */

/**
 * NEW: Creates the timer bar's HTML skeleton *once*.
 * This function builds the elements and stores references in DOM.timerSegments.
 */
AppUI.createTimerBar = function() {
    DOM.timerSegments = []; // Clear any existing references
    DOM.floatingTimerBar.innerHTML = ''; // Clear the bar
    
    appState.settings.segments.forEach((segment, index) => {
        // 1. Create all elements
        const segmentEl = document.createElement('div');
        segmentEl.dataset.index = index;
        
        const progressEl = document.createElement('div');
        
        const contentDiv = document.createElement('div');
        contentDiv.className = "relative z-10 flex flex-col items-center justify-center";
        
        const titleEl = document.createElement('span');
        titleEl.className = "text-sm";
        titleEl.textContent = segment.title;
        
        const timeEl = document.createElement('span');
        timeEl.className = "timer-time text-lg -mt-1";
        timeEl.textContent = AppUI.formatTime(segment.duration);
        
        // 2. Assemble them
        contentDiv.appendChild(titleEl);
        contentDiv.appendChild(timeEl);
        segmentEl.appendChild(progressEl);
        segmentEl.appendChild(contentDiv);
        DOM.floatingTimerBar.appendChild(segmentEl);

        // 3. Store references
        DOM.timerSegments[index] = {
            segmentEl,
            progressEl,
            contentDiv,
            titleEl,
            timeEl
        };
    });
}

/**
 * MODIFIED: This function is now NON-DESTRUCTIVE.
 * It updates the existing elements created by createTimerBar.
 */
AppUI.updateTimerBarUI = function() {
    if (!DOM.timerSegments || DOM.timerSegments.length === 0) {
        console.error("Timer bar elements not found. Was createTimerBar() called?");
        return;
    }
    
    let isCurrentSegmentOvertime = appState.currentSegmentIndex !== -1 && appState.settings.segments[appState.currentSegmentIndex].state === 'overtime';

    appState.settings.segments.forEach((segment, index) => {
        const elements = DOM.timerSegments[index];
        if (!elements) return;

        let progressWidth = '0%', 
            bgClass = 'bg-gray-700', 
            animationClass = '', 
            extraSegmentClasses = '',
            timeText = '';

        switch(segment.state) {
            case 'active':
                const elapsed = (Date.now() - segment.startTime) / 1000;
                const remaining = Math.max(0, segment.duration - elapsed);
                progressWidth = `${Math.min(100, segment.progress)}%`;
                bgClass = 'bg-blue-600';
                timeText = AppUI.formatTime(Math.ceil(remaining));
                if (segment.progress >= 90) animationClass = 'flash-grow';
                extraSegmentClasses = 'expanding-outline'; 
                break;
            case 'overtime':
                progressWidth = '100%'; 
                bgClass = 'bg-red-600';
                timeText = `+${AppUI.formatTime(Math.floor(segment.overtime))}`;
                break;
            case 'overtime-complete':
                progressWidth = '100%'; 
                bgClass = 'bg-red-600';
                timeText = `+${AppUI.formatTime(Math.floor(segment.overtime))}`;
                break;
            case 'complete':
                progressWidth = '100%'; 
                bgClass = 'bg-green-700';
                timeText = AppUI.formatTime(Math.floor(segment.duration));
                break;
            case 'pending':
            default:
                let isNextSegment = index === appState.currentSegmentIndex + 1;
                bgClass = 'bg-gray-700';
                if (isNextSegment || (appState.currentSegmentIndex === -1 && index === 0)) {
                    bgClass += ' hover:bg-gray-600 opacity-100';
                    if (isNextSegment && isCurrentSegmentOvertime) extraSegmentClasses = 'attention-pulse';
                } else {
                    bgClass += ' opacity-60 hover:opacity-80';
                }
                timeText = AppUI.formatTime(segment.duration);
                break;
        }

        // 4. Apply all updates to the cached DOM elements
        elements.titleEl.textContent = segment.title;
        elements.timeEl.textContent = timeText;
        elements.progressEl.style.width = progressWidth;
        
        let segmentBaseClass = 'timer-segment relative w-36 h-12 flex flex-col items-center justify-center rounded-full text-white font-semibold shadow-md transition-all duration-300';
        let progressBaseClass = 'timer-segment-progress absolute top-0 left-0 h-full rounded-full transition-all duration-300';

        // MODIFIED: Check for attention-pulse to apply correct bg
        if (extraSegmentClasses === 'attention-pulse') {
             segmentBaseClass += ' bg-gray-600'; // Base for animation
        } else if (segment.state === 'complete' || segment.state === 'overtime' || segment.state === 'active' || segment.state === 'overtime-complete') {
            segmentBaseClass += ' bg-gray-600';
        } else {
            segmentBaseClass += ` ${bgClass}`; // Add hover state for pending
        }

        elements.segmentEl.className = `${segmentBaseClass} ${extraSegmentClasses}`;
        elements.progressEl.className = `${progressBaseClass} ${bgClass} ${animationClass}`;
    });
}

/**
 * The main timer "tick" function, called by setInterval.
 * Updates segment progress and overtime in appState.
 */
AppUI.updateGlobalTimer = function() {
    const index = appState.currentSegmentIndex;
    if (index === -1) { 
        AppUI.stopGlobalTimer(); 
        return; 
    }
    
    const segment = appState.settings.segments[index];
    if (!segment) return;
    
    if (segment.state === 'active') {
        const elapsed = (Date.now() - segment.startTime) / 1000;
        segment.progress = (elapsed / segment.duration) * 100;
        if (elapsed >= segment.duration) {
            segment.state = 'overtime'; 
            segment.progress = 100; 
            segment.startTime = Date.now();
        }
    } else if (segment.state === 'overtime') {
        segment.overtime = (Date.now() - segment.startTime) / 1000;
    }
    
    // Now that state is updated, call the non-destructive UI update
    AppUI.updateTimerBarUI();
}

/**
 * Starts the global `setInterval` timer.
 */
AppUI.startGlobalTimer = function() { 
    if (!appState.globalTimerInterval) {
        appState.globalTimerInterval = setInterval(AppUI.updateGlobalTimer, 100); 
    }
}

/**
 * Stops the global `setInterval` timer.
 */
AppUI.stopGlobalTimer = function() { 
    clearInterval(appState.globalTimerInterval); 
    appState.globalTimerInterval = null; 
}

/**
 * Logic to determine if a segment *can* be started
 * (e.g., clicking the next segment).
 * @param {number} index - The index of the segment to try starting.
 */
AppUI.tryStartSegment = function(index) {
    if (appState.currentSegmentIndex === index && appState.settings.segments[index].state === 'active') return;
    if (appState.currentSegmentIndex === -1 && index === 0) { 
        AppUI.startSegment(0); 
        return; 
    }
    
    if (appState.currentSegmentIndex !== -1) {
        const currentSeg = appState.settings.segments[appState.currentSegmentIndex];
        if (index === appState.currentSegmentIndex + 1) {
            currentSeg.state = (currentSeg.state === 'overtime') ? 'overtime-complete' : 'complete';
            currentSeg.progress = 100;
            AppUI.startSegment(index);
        }
    }
}

/**
 * Immediately starts a segment by index.
 * @param {number} index - The index of the segment to start.
 */
AppUI.startSegment = function(index) {
    if (!appState.settings.segments[index]) return;
    
    appState.currentSegmentIndex = index;
    const segment = appState.settings.segments[index];
    segment.state = 'active'; 
    segment.progress = 0; 
    segment.overtime = 0; 
    segment.startTime = Date.now();
    
    AppUI.startGlobalTimer(); 
    AppUI.updateTimerBarUI(); // MODIFIED: Call non-destructive update
    updateTimerControlsVisibility(); // This function lives in script.js
}


// --- Encapsulated listener logic for {once: true} ---

/**
 * MODIFIED: Renamed to handleFirstInput
 * The specific function that handles the *first* input
 * to start the timer.
 */
function handleFirstInput() {
    if (appState.currentSegmentIndex === -1) {
        AppUI.tryStartSegment(0);
    }
}

/**
 * MODIFIED: Changed from 'keydown' to 'input'
 * Attaches the one-time input listener.
 */
function attachTimerStartListener() {
    DOM.clientNameInput.addEventListener('input', handleFirstInput, { once: true });
}

/**
 * Public function called by script.js to re-attach the listener
 * after a call reset.
 */
AppUI.reAttachTimerStartListener = function() {
    // MODIFIED: Changed from 'keydown' to 'input'
    DOM.clientNameInput.removeEventListener('input', handleFirstInput, { capture: false }); // Ensure removal
    attachTimerStartListener();
}

/**
 * Attaches event listeners for the Timer component.
 */
AppUI.initTimerEventListeners = function() {
    // Attach the listener for the first time
    attachTimerStartListener();

    // from 'click' to 'mousedown'
    DOM.startTimerManualBtn.addEventListener('mousedown', (e) => { 
        e.preventDefault();
        if (appState.currentSegmentIndex === -1) {
            AppUI.tryStartSegment(0);
        }
    });

    // from 'click' to 'mousedown'
    DOM.floatingTimerBar.addEventListener('mousedown', (e) => {
        const segmentEl = e.target.closest('.timer-segment');
        if (segmentEl) {
            e.preventDefault(); // Prevent focus shift or text selection
            AppUI.tryStartSegment(Number(segmentEl.dataset.index));
        }
    });
}
