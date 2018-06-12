# node-omron-read
===============
### Overview
This is a Node-RED node module to directly interface OMRON PLCs over FINS Ethernet protocol. For now it only supports direct data readout from memory but it's VERY use friendly. More functions will be added when needed.
Credits to [Patrick Servello (patrick--)](https://github.com/patrick--) for his implementation of the FINS node backbone.

### Prerequisites for Windows

* git	(Used for repository cloning/downloads)
* node.js	(Background system for Node-RED)
* Node-RED
* node-omron-fins	( follow Install section )

### Install for Windows
Make a directory for the base files on the disk (somewhere secure) and open the created folder and open PowerShell (SHIFT + right_click) or "Git Bash Here" with right mouse inside the folder. Now enter the following:
```sh
git clone https://github.com/Jozo132/node-omron-fins.git
git clone https://github.com/Jozo132/node-omron-read.git

setx NODE_PATH %AppData%\npm\node_modules
set NODE_PATH=%AppData%\npm\node_modules

cd node-omron-fins
npm link
cd ..

cd node-omron-read
npm link
cd ..

cd ~/.node-red
npm install C:/Users/----/AppData/npm/node_modules/omron-fins
npm install C:/Users/----/AppData/npm/node_modules/node-omron-read
```

### Usage

* Restart Node-RED and there's the thingy now