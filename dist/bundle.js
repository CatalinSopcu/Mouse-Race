/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Common/ScoreCounter.ts":
/*!********************************!*\
  !*** ./Common/ScoreCounter.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ScoreCounter = void 0;\nvar ScoreCounter = /** @class */ (function () {\n    function ScoreCounter() {\n        this.counter = 0;\n    }\n    ScoreCounter.prototype.startCounter = function () {\n        var _this = this;\n        setInterval(function () {\n            _this.counter++;\n            document.getElementById(\"score_counter\").innerHTML = \"Score: \" + _this.counter;\n        }, 1000);\n        console.log(\"asd\");\n    };\n    ScoreCounter.prototype.addScore = function (addValue) {\n        this.counter += addValue;\n    };\n    ScoreCounter.prototype.getScore = function () {\n        return this.counter;\n    };\n    return ScoreCounter;\n}());\nexports.ScoreCounter = ScoreCounter;\n\n\n//# sourceURL=webpack://Assigment/./Common/ScoreCounter.ts?");

/***/ }),

/***/ "./test.ts":
/*!*****************!*\
  !*** ./test.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ScoreCounter_1 = __webpack_require__(/*! ./Common/ScoreCounter */ \"./Common/ScoreCounter.ts\");\nvar startContainer = document.querySelector(\".start_container\");\nstartContainer.addEventListener(\"click\", function () {\n    startContainer.classList.add(\"hidden\");\n    setTimeout(function () {\n        // Create an instance of the ScoreCounter class\n        var scoreCounter = new ScoreCounter_1.ScoreCounter();\n        // Call the startCounter method to start the score counter\n        scoreCounter.startCounter();\n        startContainer.style.display = \"none\";\n        var playContainer = document.querySelector(\".play_container\");\n        playContainer.style.display = \"flex\";\n        var canvas = document.querySelector('canvas');\n        // Set the canvas width and height to match the window size\n        canvas.width = 300;\n        canvas.height = 260;\n        // Get the canvas drawing context\n        var ctx = canvas.getContext('2d');\n        // Listen for mouse movement events\n        window.addEventListener('mousemove', function (event) {\n            // Clear the canvas on each frame\n            var canvasRect = canvas.getBoundingClientRect();\n            // Get the mouse position\n            var mouseX = event.clientX - canvasRect.left;\n            var mouseY = event.clientY - canvasRect.top;\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            // Draw a square centered on the mouse position\n            var squareSize = 20;\n            var squareX = mouseX - squareSize / 2;\n            if (squareX > 280) {\n                squareX = 280;\n            }\n            else if (squareX < 0) {\n                squareX = 0;\n            }\n            var squareY = mouseY - squareSize / 2;\n            if (squareY > 240) {\n                squareY = 240;\n            }\n            else if (squareY < 0) {\n                squareY = 0;\n            }\n            ctx.fillStyle = 'brown';\n            ctx.strokeStyle = 'black'; // set the color of the border\n            ctx.fillRect(squareX, squareY, squareSize, squareSize);\n            ctx.strokeRect(squareX + 0.5, squareY + 0.5, squareSize - 1, squareSize - 1); // draw the square with a border\n        });\n    }, 1000);\n});\n\n\n//# sourceURL=webpack://Assigment/./test.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./test.ts");
/******/ 	
/******/ })()
;