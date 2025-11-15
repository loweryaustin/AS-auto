/**
 * ============================================
 * SCRIPT TOOL TIMER LOGIC (V5.0.0)
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
 * Renders the floating timer bar based on the
 * current segment states in `appState`.
 */
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

/**
 * The main timer "tick" function, called by setInterval.
 * Updates segment progress and overtime.
 */
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

/**
 * Immediately starts a segment by index.
 * @param {number} index - The index of the segment to start.
 */
AppUI.startSegment = function(index) {
    if (!appState.settings.segments[index]) return;
    appState.currentSegmentIndex = index;
    const segment = appState.settings.segments[index];
    segment.state = 'active'; segment.progress = 0; segment.overtime = 0; segment.startTime = Date.now();
    AppUI.startGlobalTimer(); 
    AppUI.renderTimerBar(); 
    updateTimerControlsVisibility(); // This function lives in script.js
}

/**
 * Attaches event listeners for the Timer component.
 */
AppUI.initTimerEventListeners = function() {
    DOM.clientNameInput.addEventListener('input', () => {
        if (appState.currentSegmentIndex === -1) {
            AppUI.tryStartSegment(0);
        }
    });

    DOM.startTimerManualBtn.addEventListener('click', () => { 
        if (appState.currentSegmentIndex === -1) {
            AppUI.tryStartSegment(0);
        }
    });

    DOM.floatingTimerBar.addEventListener('click', (e) => {
        const segmentEl = e.target.closest('.timer-segment');
        if (segmentEl) {
            AppUI.tryStartSegment(Number(segmentEl.dataset.index));
        }
    });
}
