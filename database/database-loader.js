/**
 * DATABASE_CONFIGS
 * This file collects all individual supplement database configs
 * into one object for the main script to load.
 *
 * The build script (build.sh) ensures this file is loaded *after*
 * all the individual database files.
 */
const DATABASE_CONFIGS = {
    // The key "GL Pro" is the display name in the settings dropdown.
    // The value "GLPRO_CONFIG" is the const variable from the db file.
    "GL Pro": GLPRO_CONFIG,
    "Neuro Pro": NEURO_CONFIG
    // To add another supplement, just add its file to build.sh
    // and add a new line here, e.g.:
    // "ABC Pro": ABCPRO_CONFIG
};
