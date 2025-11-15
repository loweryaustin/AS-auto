#!/bin/bash

# ---
# CALL SCRIPT BUILD SCRIPT
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

# 2. Define final filename
FINAL_FILENAME="${APP_NAME}-v${APP_VERSION}.html"

# 3. Create temporary combined CSS file (with <style> tags)
TEMP_CSS="all_styles.css"
echo "<style>" > $TEMP_CSS
cat style.css >> $TEMP_CSS
echo "</style>" >> $TEMP_CSS

# 4. Create temporary combined JavaScript file (with <script> tags)
TEMP_JS="all_scripts.js"
echo "Combining JavaScript files..."
# FIX: Removed 'defer' attribute. It's not needed at the end
# of the body and was causing a race condition.
echo "<script>" > $TEMP_JS
# --- The order here is CRITICAL ---
cat app-config.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat database/glpro-db.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat database/neuro-db.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat database/database-loader.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat script.js >> $TEMP_JS
# --- End of critical order ---
echo "</script>" >> $TEMP_JS
echo "JavaScript combined."

# 5. Start with the base HTML file
cp index.html $FINAL_FILENAME

# 6. Inject the version number into the app's UI
sed -i.bak "s|<span id=\"app-version\"></span>|<span id=\"app-version\">v${APP_VERSION}</span>|g" $FINAL_FILENAME.html
echo "Version ${APP_VERSION} injected."

# 7. Inject CSS (ROBUST METHOD)
# Replaces the placeholder comment and deletes the dev <link>
sed -i.bak -e '/<!-- CSS_INJECTION_POINT -->/r '"$TEMP_CSS" -e '/<!-- CSS_INJECTION_POINT -->/d' $FINAL_FILENAME.html
sed -i.bak '\|<link rel="stylesheet" href="style.css">|d' $FINAL_FILENAME.html
echo "CSS injected."

# 8. Inject combined JavaScript (ROBUST METHOD)
# Replaces the placeholder comment
sed -i.bak -e '/<!-- SCRIPT_INJECTION_POINT -->/r '"$TEMP_JS" -e '/<!-- SCRIPT_INJECTION_POINT -->/d' $FINAL_FILENAME.html
echo "JavaScript injected."


# 9. Clean up temporary files
rm $TEMP_JS
rm $TEMP_CSS
rm *.bak
echo ""
echo "Successfully built: ${FINAL_FILENAME}.html"
