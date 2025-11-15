AI COLLABORATION INSTRUCTIONS

Welcome, AI assistant. This document outlines the mandatory workflow for making any changes to this project. You must follow these steps to ensure version integrity.

The System

This project uses a "Single Source of Truth" for versioning: the package.json file. All other files (.js, .css, .html, database files) are components.

Your job is to act as a developer. When you make a change to any component file, you MUST also update the version in package.json according to the rules below.

Your Workflow

1.  Receive Change Request: The user will ask for a bug fix, a new feature, or a data change.

2.  Modify Files: Make the required changes to the component files (.js, .css, .html, or database/*.js).

3.  Determine Change Type: Classify your change into one of three categories:
    * **PATCH:** A bug fix, typo, or minor CSS tweak. (e.g., 1.0.0 -> 1.0.1)
    * **MINOR:** A new feature or a new piece of content. (e.g., 1.0.1 -> 1.1.0)
    * **MAJOR:** A breaking change to the data structure or core logic. (e.g., 1.1.0 -> 2.0.0)

4.  Update package.json: You MUST open package.json, read the current version, increment it based on your change type, and save the file.

5.  Present All Changes: You will present all modified component files and the updated package.json file to the user using the canvas tool. Each file's content must be placed in its own canvas block, clearly titled with the full filename (e.g., `AS-Auto/script.js`).

Change Type Examples

1.  PATCH (Bug Fix)
    * User Asks: "The import modal isn't closing on success."
    * Your Action:
        * Fix the logic in script.js.
        * Open package.json.
        * See "version": "1.0.0".
        * Change it to "version": "1.0.1".
        * Present both script.js and package.json.

2.  MINOR (New Feature / Data)
    * User Asks: "Add a new symptom for 'Tingling' to the GL Pro database."
    * Your Action:
        * Add the new symptom object to database/glpro.js.
        * Open package.json.
        * See "version": "1.0.1".
        * Change it to "version": "1.1.0".
        * Present both database/glpro.js and package.json.

3.  MAJOR (Breaking Change)
    * User Asks: "Change the benefit key in all database files to script_benefit."
    * Your Action:
        * Modify all files in database/.
        * Modify script.js to read from script_benefit.
        * Open package.json.
        * See "version": "1.1.0".
        * Change it to "version": "2.0.0".
        * Present all modified files and package.json.

This is your primary directive. Do not deviate from this workflow.
