/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.gameboard {
  position: relative;
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  border: solid black 1px;
}

.p1-row,
.p2-row {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  border: solid grey 1px;
}
.p1-cell,
.p2-cell {
  border: solid grey 1px;
}

.p2-cell {
  cursor: crosshair;
  hover {
    background-color: #8585851c;
  }
}

.fleet{
  background-color: black
}

.miss{
  background-color: blue;
}

.hit{
  background-color: red;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 601:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 72:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const startGame = __webpack_require__(467);

function loadPlayer1Attack() {}

function makeBoard(player1, player2) {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("p1-row");
    row.setAttribute("id", `p1-row${i}`);
    document.getElementById("player1-board").appendChild(row);

    player1.game.board[i].forEach((e, j) => {
      let cell = document.createElement("div");
      cell.classList.add("p1-cell");
      cell.setAttribute("id", `p1-row${i}-cell${j}`);
      row.appendChild(cell);
    });
  }

  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("p2-row");
    row.setAttribute("id", `p2-row${i}`);
    document.getElementById("player2-board").appendChild(row);

    player2.game.board[i].forEach((e, j) => {
      let cell = document.createElement("div");
      cell.classList.add("p2-cell");
      cell.setAttribute("id", `p2-row${i}-cell${j}`);
      row.appendChild(cell);

      cell.addEventListener("click", (e) => {
        loadPlayer1Attack(e, i, j, player1, player2);
      });
    });
  }
}

function makeButtons(player) {
  const boardButtons = document;
}

//renders player 1's board
function renderShips(player) {
  document.querySelectorAll(".p1-cell").forEach((e, i) => {
    let xAxis, yAxis;
    let pos = "" + i;

    // transform index string to array of xAxis and yAxis
    if (i < 10) {
      xAxis = 0;
      yAxis = i;
    } else {
      pos = pos.split("");
      xAxis = pos[0];
      yAxis = pos[1];
    }

    if (player.game.board[xAxis][yAxis] === 0) return;
    else e.classList.add("fleet");
  });
}

function loadPlayer1Attack(e, x, y, player1, player2) {
  let attack = player1.attack(player2, x, y);
  if (attack === false) {
    e.target.classList.add("miss");
  }
  if (attack === true) {
    e.target.classList.add("hit");

    if (player2.game.board[x][y].sunk) return;
  }
  loadPlayer2Attack(player1, player2);
}

function loadPlayer2Attack(player1, player2) {
  let x = player2.randomPos([0]);
  let y = player2.randomPos([1]);
  let attack = player2.attack(player1, x, y);

  let e = document.getElementById(`p1-row${x}-cell${y}`);

  console.log(e)

  if (attack === false) {
    e.classList.add("miss");
  }
  if (attack === true) {
    e.classList.add("hit");

    if (player1.game.board[x][y].sunk) return;
  }
}

module.exports = { makeBoard, renderShips };


/***/ }),

/***/ 245:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(877);

class Gameboard {
  //0 == empty space, 1 == ship in that space
  constructor() {
    this.board = new Array(10).fill(0).map(() => new Array(10).fill(0));
    this.ships = [];
    this.success = [];
    this.missed = [];
  }

  //places ship in starting position and the positions next to it given length and direction
  place(x, y, shipName, dir) {
    if (dir === "hor") {
      //gets length from ship object
      for (let i = 0; i < shipName.length; i++) {
        //checks for overlow or if ship already in spot
        if (x + shipName.length > 9 || this.board[x + i][y] != 0) {
          return false;
        } else {
          this.board[x + i][y] = shipName;
        }
      }
      this.ships.push(shipName);
    }
    if (dir === "ver") {
      //gets name from ship object
      for (let i = 0; i < shipName.length; i++) {
        //checks for overlow or if ship already in spot
        if (y + shipName.length > 9 || this.board[x][y + i] != 0) {
          return false;
        } else {
          this.board[x][y + i] = shipName;
        }
      }
      this.ships.push(shipName);
    }
  }

  allSunk() {
    //return false if any ships in ship array != sunk, otherwise true
    for (const ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }

  // if position has a ship, return true
  receiveAttack(x, y) {
    if (this.board[x][y] != 0) {
      this.success.push([x, y]);
      this.board[x][y].hit();
      this.board[x][y].isSunk()
      return true;
    } else {
      this.missed.push([x, y]);
      return false;
    }
  }

  //need to do this part
  victory() {}
}

module.exports = Gameboard;


/***/ }),

/***/ 398:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Gameboard = __webpack_require__(245);

class Player {
  constructor(name) {
    this.name = name;
    this.game = new Gameboard();
  }

  attack(player, x, y) {
    return player.game.receiveAttack(x, y);
  }

  randomPos() {
    let xAxis = Math.floor(Math.random() * 10);
    let yAxis = Math.floor(Math.random() * 10);
    return xAxis, yAxis;
  }

  randomShip(shipName) {
    let xAxis = Math.floor(Math.random() * 10);
    let yAxis = Math.floor(Math.random() * 10);
    let dir = Math.round(Math.random());

    if (dir === 0) {
      dir = "hor";
      //fix to check if space is empty, try again if it isnt
      if (this.game.place(xAxis, yAxis, shipName, dir) === false) {
        return false;
      }
    }

    if (dir === 1) {
      dir = "ver";
      //fix to check if space is empty, try again if it isnt
      if (this.game.place(xAxis, yAxis, shipName, dir) === false) {
        return false;
      }
    }
  }
}

module.exports = Player;


/***/ }),

/***/ 877:
/***/ ((module) => {

class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
  }

  hit() {
    this.timesHit++;
  }

  isSunk() {
    if (this.timesHit >= this.length) {
      this.sunk = true;
      return this.sunk;
    }
    return this.sunk;
  }
}

module.exports = Ship;


/***/ }),

/***/ 467:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Player = __webpack_require__(398);
const domFunctions = __webpack_require__(451);
const Ship = __webpack_require__(877);
const Gameboard = __webpack_require__(245);

function startGame() {
  let player1 = new Player("Player 1");
  let player2 = new Player("Player 2");

  //creates player 1's (controller's) ships
  let player1Carrier = new Ship(5);
  let player1Battleship = new Ship(4);
  let player1Destroyer = new Ship(3);
  let player1Submarine = new Ship(3);
  let player1Patrol = new Ship(2);

  //randomly places player 1's ships on their gameboard
  while (player1.randomShip(player1Carrier) === false);
  while (player1.randomShip(player1Battleship) === false);
  while (player1.randomShip(player1Destroyer) === false);
  while (player1.randomShip(player1Submarine) === false);
  while (player1.randomShip(player1Patrol) === false);

  //creates player 2's (CPU's) ships
  let player2Carrier = new Ship(5);
  let player2Battleship = new Ship(4);
  let player2Destroyer = new Ship(3);
  let player2Submarine = new Ship(3);
  let player2Patrol = new Ship(2);

  //randomly places player 2's ships on their gameboard
  while (player2.randomShip(player2Carrier) === false);
  while (player2.randomShip(player2Battleship) === false);
  while (player2.randomShip(player2Destroyer) === false);
  while (player2.randomShip(player2Submarine) === false);
  while (player2.randomShip(player2Patrol) === false);

  domFunctions.makeBoard(player1, player2);
  domFunctions.renderShips(player1);
}

module.exports = startGame;


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(208);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const src_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/index.js

const startGame = __webpack_require__(467);

startGame();

})();

/******/ })()
;