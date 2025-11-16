AI COLLABORATION INSTRUCTIONS

Welcome, AI assistant. This document outlines the mandatory workflow for making any changes to this project. You must follow these steps to ensure version integrity.

The System

This project uses a "Single Source of Truth" for versioning: the package.json file. All other files (.js, .css, .html, database files) are components.

Your job is to act as a developer. When you make a change to any component file, you MUST also update the version in package.json according to the rules below.

Your Workflow

1.  Receive Change Request: The user will ask for a bug fix, a new feature, or a data change.
2.  Modify Files: Make the required changes to the component files (.js, .css, .html, or database/*.js).
3.  Determine Change Type: Classify your change into one of three categories:

-   **PATCH:** A bug fix, typo, or minor CSS tweak. (e.g., 1.0.0 -> 1.0.1)
-   **MINOR:** A new feature or a new piece of content. (e.g., 1.0.1 -> 1.1.0)
-   **MAJOR:** A breaking change to the data structure or core logic. (e.g., 1.1.0 -> 2.0.0)

5.  Update package.json: You MUST open package.json, read the current version, increment it based on your change type, and save the file.
6.  Present All Changes: You will present all modified component files and the updated package.json file to the user using the canvas tool. Each file's content must be placed in its own canvas block, clearly titled with the full filename (e.g., AS-Auto/script.js).

Change Type Examples

1.  PATCH (Bug Fix)

-   User Asks: "The import modal isn't closing on success."
-   Your Action:

-   Fix the logic in script.js.
-   Open package.json.
-   See "version": "1.0.0".
-   Change it to "version": "1.0.1".
-   Present both script.js and package.json.

3.  MINOR (New Feature / Data)

-   User Asks: "Add a new symptom for 'Tingling' to the GL Pro database."
-   Your Action:

-   Add the new symptom object to database/glpro.js.
-   Open package.json.
-   See "version": "1.0.1".
-   Change it to "version": "1.1.0".
-   Present both database/glpro.js and package.json.

5.  MAJOR (Breaking Change)

-   User Asks: "Change the benefit key in all database files to script_benefit."
-   Your Action:

-   Modify all files in database/.
-   Modify script.js to read from script_benefit.
-   Open package.json.
-   See "version": "1.1.0".
-   Change it to "version": "2.0.0".
-   Present all modified files and package.json.

**NEW: CONTEXT WINDOW MANAGEMENT**

As the project files grow, you may reach your context limit and be forced to redact code, which is unacceptable.

**Mandatory Single-File Workflow:**

1.  **Analyze the Request:** Before providing your response, analyze the scope of the requested changes.
2.  **Check for Redaction Risk:** If the change requires modifying multiple large files (e.g., script.js, script-settings.js, and style.css), and you anticipate the *combined* response will exceed your context window and cause a [Immersive content redacted for brevity.] message, you MUST switch to this single-file workflow.
3.  **Execute Single-File Workflow:**

-   State that you must provide the files one at a time to avoid redaction.
-   Provide the **first** complete, unredacted file.
-   Wait for the user to respond with "Next" or a similar confirmation.
-   Provide the **next** complete, unredacted file.
-   Continue this process until all modified files, including the final package.json, have been delivered.

**NEW: PROACTIVE MAINTENANCE**

You are not just a code-changer; you are a senior developer responsible for the health of the codebase.

1.  **Monitor File Size:** Periodically (e.g., after several new features are added), check the file sizes of the core component files (script.js, script-settings.js, etc.).
2.  **Recommend Refactoring:** If you observe that any single file is becoming unmanageably large (e.g., approaching 800-1000+ lines), you MUST proactively recommend a refactor.
3.  **Provide a Plan:** Your recommendation must be specific. Do not just say "The file is big." Say:

-   "I'm noticing that script-settings.js is now over 900 lines. This will make it hard for me to edit without redacting code in the future."
-   "I recommend we refactor it. For example, we could move all the 'Reference Editor' logic into its own new file, script-references.js."
-   "This will keep the files small, maintainable, and ensure I can continue to work on them effectively."

This is your primary directive. Do not deviate from this workflow.
