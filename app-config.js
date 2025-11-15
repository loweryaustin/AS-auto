/**
 * APP_CONFIG
 * This file contains the default *application-level* settings.
 * These are settings that do not change when the supplement database is swapped.
 */

// NEW: This is the global manifest for all supplement databases.
// All files in /database/ will add their configs to this object.
const DATABASE_CONFIGS = {};

const APP_CONFIG = {
    // Default agent details
    agentName: "[Agent Name]",

    // Default call timer segments
    segments: [
        { id: "seg-1", title: "Gree", duration: 45, progress: 0, state: 'pending', overtime: 0, startTime: null },
        { id: "seg-2", title: "Discovery", duration: 120, progress: 0, state: 'pending', overtime: 0, startTime: null },
        { id: "seg-3", title: "Tell", duration: 240, progress: 0, state: 'pending', overtime: 0, startTime: null },
        { id: "seg-4", title: "Card & Autho", duration: 230, progress: 0, state: 'pending', overtime: 0, startTime: null },
    ]
};
