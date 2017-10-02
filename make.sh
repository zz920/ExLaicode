rapydscript -b -p plan_extension.py > plan_extension.js
rapydscript -b -p editor_extension.py > editor_extension.js
rapydscript -b -p background.py > background.js


rm -f laicode_extension/*.js

mv plan_extension.js laicode_extension
mv editor_extension.js laicode_extension
mv background.js laicode_extension
