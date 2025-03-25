/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/icon.png
const icon_namespaceObject = __webpack_require__.p + "31d6cfe0d16ae931b73c.png";
;// ./src/modules/formatter.js
//TODO: Add rules as exceptions arise. Refactor when needed.
function format(str) {
  return str.replaceAll(/(?<![.A-Z])\n(?=[a-z0-9])/gm, ' ');
}

;// ./src/modules/ui.js
function resizeTextAreaHeight(textArea) {
  const resizeWrapper = textArea.parentElement;
  resizeWrapper.dataset.replicatedValue = textArea.value;
}

;// ./src/index.js




const input = document.getElementById('text-input');
const output = document.getElementById('text-output');
const src_submit = document.getElementById('submit');
input.addEventListener('input', () => {
  resizeTextAreaHeight(input);
});
src_submit.addEventListener('click', () => {
  output.textContent = format(input.value);
});
/******/ })()
;
//# sourceMappingURL=appbundle.js.map