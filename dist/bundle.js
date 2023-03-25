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

/***/ "./Common/Constants/CanvasConstants.ts":
/*!*********************************************!*\
  !*** ./Common/Constants/CanvasConstants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CanvasConstants = void 0;\nvar CanvasConstants = exports.CanvasConstants = /** @class */ (function () {\n    function CanvasConstants() {\n    }\n    CanvasConstants.WIDTH = 300;\n    CanvasConstants.HEIGHT = 260;\n    return CanvasConstants;\n}());\n\n\n//# sourceURL=webpack://Assigment/./Common/Constants/CanvasConstants.ts?");

/***/ }),

/***/ "./Common/Player.ts":
/*!**************************!*\
  !*** ./Common/Player.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Player = void 0;\nvar Transform_1 = __webpack_require__(/*! ./RenderComponents/Transform */ \"./Common/RenderComponents/Transform.ts\");\nvar Vector2_1 = __webpack_require__(/*! ./RenderComponents/Vector2 */ \"./Common/RenderComponents/Vector2.ts\");\nvar Canvas_1 = __webpack_require__(/*! ./RenderComponents/Canvas */ \"./Common/RenderComponents/Canvas.ts\");\nvar CanvasConstants_1 = __webpack_require__(/*! ./Constants/CanvasConstants */ \"./Common/Constants/CanvasConstants.ts\");\nvar Player = /** @class */ (function () {\n    function Player() {\n        this.Transform = new Transform_1.Transform();\n        this.Canvas = new Canvas_1.Canvas();\n        this.PLAYER_XSIZE = 20;\n        this.PLAYER_YSIZE = 20;\n        this.PLAYER_COLOR = \"brown\";\n        this.Transform.setSize(new Vector2_1.Vector2(this.PLAYER_XSIZE, this.PLAYER_YSIZE));\n        this.Transform.setColor(this.PLAYER_COLOR);\n        this.setMouseOverEvent();\n    }\n    Player.prototype.render = function () {\n        this.Canvas.draw(this.Transform);\n    };\n    Player.prototype.getTransform = function () {\n        return this.Transform;\n    };\n    Player.prototype.setMouseOverEvent = function () {\n        var _this = this;\n        window.addEventListener('mousemove', function (event) {\n            var playerSize = _this.Transform.getSize();\n            var canvasRect = _this.Canvas.getRectangle();\n            var mouseX = event.clientX - canvasRect.left;\n            var mouseY = event.clientY - canvasRect.top;\n            var posX = Math.min(Math.max(mouseX - playerSize.X / 2, 0), CanvasConstants_1.CanvasConstants.WIDTH - playerSize.X);\n            var posY = Math.min(Math.max(mouseY - playerSize.Y / 2, 0), CanvasConstants_1.CanvasConstants.HEIGHT - playerSize.Y);\n            var newPos = new Vector2_1.Vector2(posX, posY);\n            _this.Transform.setPosition(newPos);\n        });\n    };\n    return Player;\n}());\nexports.Player = Player;\n\n\n//# sourceURL=webpack://Assigment/./Common/Player.ts?");

/***/ }),

/***/ "./Common/RenderComponents/Canvas.ts":
/*!*******************************************!*\
  !*** ./Common/RenderComponents/Canvas.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Canvas = void 0;\nvar Canvas = /** @class */ (function () {\n    function Canvas() {\n        this.Canvas = document.querySelector('canvas');\n        this.Canvas.width = 300;\n        this.Canvas.height = 260;\n    }\n    Canvas.prototype.draw = function (transform) {\n        var objPos = transform.getPosition();\n        var objSize = transform.getSize();\n        var objColor = transform.getColor();\n        var ctx = this.Canvas.getContext('2d');\n        ctx.fillStyle = objColor;\n        ctx.fillRect(objPos.X, objPos.Y, objSize.X, objSize.Y);\n    };\n    Canvas.prototype.clear = function () {\n        var ctx = this.Canvas.getContext('2d');\n        ctx.clearRect(0, 0, this.Canvas.width, this.Canvas.height);\n    };\n    Canvas.prototype.getRectangle = function () {\n        var canvasRect = this.Canvas.getBoundingClientRect();\n        return canvasRect;\n    };\n    return Canvas;\n}());\nexports.Canvas = Canvas;\n\n\n//# sourceURL=webpack://Assigment/./Common/RenderComponents/Canvas.ts?");

/***/ }),

/***/ "./Common/RenderComponents/Transform.ts":
/*!**********************************************!*\
  !*** ./Common/RenderComponents/Transform.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Transform = void 0;\nvar Vector2_1 = __webpack_require__(/*! ./Vector2 */ \"./Common/RenderComponents/Vector2.ts\");\nvar Transform = /** @class */ (function () {\n    function Transform() {\n        this.Size = new Vector2_1.Vector2(0, 0);\n        this.Position = new Vector2_1.Vector2(0, 0);\n        this.Velocity = new Vector2_1.Vector2(0, 0);\n    }\n    Transform.prototype.getSize = function () {\n        return this.Size;\n    };\n    Transform.prototype.setSize = function (newSize) {\n        this.Size = newSize;\n    };\n    Transform.prototype.getPosition = function () {\n        return this.Position;\n    };\n    Transform.prototype.setPosition = function (newPos) {\n        this.Position = newPos;\n    };\n    Transform.prototype.getVelocity = function () {\n        return this.Velocity;\n    };\n    Transform.prototype.getColor = function () {\n        return this.Color;\n    };\n    Transform.prototype.setColor = function (newColor) {\n        this.Color = newColor;\n    };\n    Transform.prototype.collide = function (other) {\n        var thisPos = this.Position;\n        var thisSize = this.Size;\n        var otherPos = other.getPosition();\n        var otherSize = other.getSize();\n        return (thisPos.X < otherPos.X + otherSize.X &&\n            thisPos.X + thisSize.X > otherPos.X &&\n            thisPos.Y < otherPos.Y + otherSize.Y &&\n            thisPos.Y + thisSize.Y > otherPos.Y);\n    };\n    return Transform;\n}());\nexports.Transform = Transform;\n\n\n//# sourceURL=webpack://Assigment/./Common/RenderComponents/Transform.ts?");

/***/ }),

/***/ "./Common/RenderComponents/Vector2.ts":
/*!********************************************!*\
  !*** ./Common/RenderComponents/Vector2.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Vector2 = void 0;\nvar Vector2 = /** @class */ (function () {\n    function Vector2(x, y) {\n        this.X = x;\n        this.Y = y;\n    }\n    return Vector2;\n}());\nexports.Vector2 = Vector2;\n\n\n//# sourceURL=webpack://Assigment/./Common/RenderComponents/Vector2.ts?");

/***/ }),

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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ScoreCounter_1 = __webpack_require__(/*! ./Common/ScoreCounter */ \"./Common/ScoreCounter.ts\");\nvar Player_1 = __webpack_require__(/*! ./Common/Player */ \"./Common/Player.ts\");\nvar Canvas_1 = __webpack_require__(/*! ./Common/RenderComponents/Canvas */ \"./Common/RenderComponents/Canvas.ts\");\nvar startContainer = document.querySelector(\".start_container\");\nstartContainer.addEventListener(\"click\", function () {\n    startContainer.classList.add(\"hidden\");\n    setTimeout(function () {\n        // Create an instance of the ScoreCounter class\n        var scoreCounter = new ScoreCounter_1.ScoreCounter();\n        // Call the startCounter method to start the score counter\n        scoreCounter.startCounter();\n        startContainer.style.display = \"none\";\n        var playContainer = document.querySelector(\".play_container\");\n        playContainer.style.display = \"flex\";\n        var canvasObj = new Canvas_1.Canvas();\n        var player = new Player_1.Player();\n        setInterval(function () {\n            canvasObj.clear();\n            player.render();\n        }, 5);\n    }, 1000);\n});\n\n\n//# sourceURL=webpack://Assigment/./test.ts?");

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