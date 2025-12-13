#!/bin/bash

# ---
# CALL SCRIPT BUILD SCRIPT (V7.14.0)
# ---

# 1. Read the master version from package.json
APP_VERSION=$(grep '"version":' package.json | cut -d '"' -f 4)
APP_NAME=$(grep '"name":' package.json | cut -d '"' -f 4)

if [ -z "$APP_VERSION" ]; then
    echo "Error: Could not find version in package.json. Exiting."
    exit 1
fi

echo "Building Call Script App v${APP_VERSION}..."

# 2. Define final filename and path
BASE_FILENAME="${APP_NAME}-v${APP_VERSION}.html"
FINAL_FILEPATH="../${BASE_FILENAME}"

# 3. Create temporary combined CSS file
TEMP_CSS="all_styles.css"
echo "<style>" > $TEMP_CSS
cat style.css >> $TEMP_CSS
echo "</style>" >> $TEMP_CSS

# 4. Create temporary combined JavaScript file
TEMP_JS="all_scripts.js"
echo "Combining JavaScript files..."
echo "<script>" > $TEMP_JS

echo "const SCRIPT_VERSION = '${APP_VERSION}';" >> $TEMP_JS
echo "" >> $TEMP_JS

# --- Critical Order ---
cat app-config.js >> $TEMP_JS
echo "" >> $TEMP_JS

echo "Finding and adding Knowledge Base files..."
if [ -d "knowledge" ]; then
    find knowledge -name "*.js" -print0 | while IFS= read -r -d '' file; do
        cat "$file" >> $TEMP_JS
        echo "" >> $TEMP_JS
        echo "  Added KB: $file"
    done
fi

echo "Finding and adding database files..."
find database -name "*.js" -print0 | while IFS= read -r -d '' file; do
    cat "$file" >> $TEMP_JS
    echo "" >> $TEMP_JS
    echo "  Added DB: $file"
done

cat script-ui.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat script-timer.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat script-search.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat script-io.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat script-order-editor.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat script-references.js >> $TEMP_JS
echo "" >> $TEMP_JS
# NEW: Add knowledge component
cat script-knowledge.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat script-library.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat script-settings.js >> $TEMP_JS
echo "" >> $TEMP_JS
cat script.js >> $TEMP_JS
# --- End Critical Order ---

echo "</script>" >> $TEMP_JS
echo "JavaScript combined."

# 5. Output
cp index.html "$FINAL_FILEPATH"
sed -i.bak "s|<span id=\"app-version\"></span>|<span id=\"app-version\">v${APP_VERSION}</span>|g" "$FINAL_FILEPATH"
sed -i.bak -e '/<!-- CSS_INJECTION_POINT -->/r '"$TEMP_CSS" -e '/<!-- CSS_INJECTION_POINT -->/d' "$FINAL_FILEPATH"
sed -i.bak '\|<link rel="stylesheet" href="style.css">|d' "$FINAL_FILEPATH"
sed -i.bak -e '/<!-- SCRIPT_INJECTION_POINT -->/r '"$TEMP_JS" -e '/<!-- SCRIPT_INJECTION_POINT -->/d' "$FINAL_FILEPATH"

rm $TEMP_JS
rm $TEMP_CSS
rm *.bak
rm "$FINAL_FILEPATH.bak"
echo ""
echo "Successfully built: ${FINAL_FILEPATH}"
