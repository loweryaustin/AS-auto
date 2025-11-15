/**
 * APP_CONFIG
 * This file contains the default *application-level* settings.
 * These are settings that do not change when the supplement database is swapped.
 */
const APP_CONFIG = {
    // Default agent details
    agentName: "[Agent Name]",

    // Default call timer segments
    segments: [
        { id: "seg-1", title: "Listening", duration: 45, progress: 0, state: 'pending', overtime: 0, startTime: null },
        { id: "seg-2", title: "Discovery", duration: 120, progress: 0, state: 'pending', overtime: 0, startTime: null },
        { id: "seg-3", title: "Tell", duration: 240, progress: 0, state: 'pending', overtime: 0, startTime: null },
        { id: "seg-4", title: "Card", duration: 45, progress: 0, state: 'pending', overtime: 0, startTime: null },
        { id: "seg-5", title: "Autho", duration: 180, progress: 0, state: 'pending', overtime: 0, startTime: null },
    ]
};
