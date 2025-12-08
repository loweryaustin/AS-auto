#!/bin/bash

# ---
# CALL SCRIPT BUILD SCRIPT (V7.1.0)
# This script reads the master version from package.json and compiles
# all separate .css, .js, and database/ files into a single,
# versioned HTML file for distribution.
#
# Make sure to run `chmod +x build.sh` to make it executable.
# ---

# 1. Read the master version from package.json
APP_VERSION=$(grep '"version":' package.json | cut -d '"' -f 4)
APP_NAME=$(grep '"name":' package.json | cut -d '"' -f 4)

if [ -z "$APP_VERSION" ]; then
    echo "Error: Could not find version in package.json. Exiting."
    exit 1
fi

echo "Building Call Script App v${APP_VERSION}..."

# 2. Define final filename and path (one directory up)
BASE_FILENAME="${APP_NAME}-v${APP_VERSION}.html"
FINAL_FILEPATH="../${BASE_FILENAME}" # Output path is one directory up

# 3. Create temporary combined CSS file (with <style> tags)
TEMP_CSS="all_styles.css"
echo "<style>" > $TEMP_CSS
cat style.css >> $TEMP_CSS
echo "</style>" >> $TEMP_CSS

# 4. Create temporary combined JavaScript file (with <script> tags)
TEMP_JS="all_scripts.js"
echo "Combining JavaScript files..."
echo "<script>" > $TEMP_JS

# Inject the app version as a JS constant.
# This MUST be the very first line of JS.
echo "const SCRIPT_VERSION = '${APP_VERSION}';" >> $TEMP_JS
echo "" >> $TEMP_JS

# --- The order here is CRITICAL ---
# app-config.js MUST be first to define DATABASE_CONFIGS
cat app-config.js >> $TEMP_JS
echo "" >> $TEMP_JS

# Automatically find and add all DB files.
echo "Finding and adding database files..."
find database -name "*.js" -print0 | while IFS= read -r -d '' file; do
    cat "$file" >> $TEMP_JS
    echo "" >> $TEMP_JS
    echo "  Added: $file"
done

# script-ui.js MUST be next (defines AppUI and utilities)
cat script-ui.js >> $TEMP_JS
echo "" >> $TEMP_JS

# Add all the new component files
cat script-timer.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat script-search.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat script-io.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat script-order-editor.js >> $TEMP_JS
echo "" >> $TEMP_JS
# NEW: Add script-references.js
cat script-references.js >> $TEMP_JS
echo "" >> $TEMP_JS
# NEW: Add script-library.js before settings
cat script-library.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat script-settings.js >> $TEMP_JS
echo "" >> $TEMP_JS

# script.js (main controller) MUST be last
cat script.js >> $TEMP_JS
# --- End of critical order ---
echo "</script>" >> $TEMP_JS
echo "JavaScript combined."

# 5. Start with the base HTML file, outputting to new path
cp index.html "$FINAL_FILEPATH"
echo "Base HTML copied to $FINAL_FILEPATH"

# 6. Inject the version number into the app's UI
sed -i.bak "s|<span id=\"app-version\"></span>|<span id=\"app-version\">v${APP_VERSION}</span>|g" "$FINAL_FILEPATH"
echo "Version ${APP_VERSION} injected."

# 7. Inject CSS (ROBUST METHOD)
sed -i.bak -e '/<!-- CSS_INJECTION_POINT -->/r '"$TEMP_CSS" -e '/<!-- CSS_INJECTION_POINT -->/d' "$FINAL_FILEPATH"
sed -i.bak '\|<link rel="stylesheet" href="style.css">|d' "$FINAL_FILEPATH"
echo "CSS injected."

# 8. Inject combined JavaScript (ROBUST METHOD)
sed -i.bak -e '/<!-- SCRIPT_INJECTION_POINT -->/r '"$TEMP_JS" -e '/<!-- SCRIPT_INJECTION_POINT -->/d' "$FINAL_FILEPATH"
echo "JavaScript injected."


# 9. Clean up temporary files
rm $TEMP_JS
rm $TEMP_CSS
rm *.bak # Cleans up .bak files in the local dir
rm "$FINAL_FILEPATH.bak" # Cleans up the .bak file in the parent dir
echo ""
echo "Successfully built: ${FINAL_FILEPATH}"
