Laicode Extension 
-----------------

## Description:
It's a chrome extension to enhance laicode with reset function. And it's very easy to install. I don't know much about JavaScript, so the code is basically written with Python, and be translated to JS with RapydScript. If you are interested in this project, you could push your code with different features or bug-fixes here.

And some useful documents are listed here:
* [Chrome extensions Guide](https://developer.chrome.com/extensions/devguide)
* [Chinese version of Guide](http://open.chrome.360.cn/extension_dev/overview.html) (神tm翻译了一遍 [滑稽脸])

* [RapydScript](http://www.rapydscript.com/)


## Usage:

* For normal user:
    * Download "extension.crx"
    * [Drap & Drop](https://stackoverflow.com/questions/9931906/crx-file-install-in-chrome) - the ".crx" on to the 'Extensions' Page
        1. Settings-Icon > Tools > Extensions 
        2. Drag and drop the "crx" extension file onto the Extensions page from [step 1]
        3. Install
    * Done
* For develper:
  * Install npm:
    ```sudo apt-get install npm```
  * Install optimist library:
    ```sudo npm install optimist```
  * Install [RapydScript](http://www.rapydscript.com/installation/):

    ```sudo npm install rapydscript -g```

## Features:

* Version 0.1:
  click "Reset" button to start a new round of match. It will reset all problem to unsolved and record the number of solved problem with total time.


## TODO List:
* Random pick problem
* Fixed time match mode
* Any suggestions are welcomed 