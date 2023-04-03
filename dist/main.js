/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/pizza.jpg */ "./src/pizza.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    height: 100%;\n    overflow-y: auto;\n}\n\nbody{\n    width: 100%;\n   \n}\n\n#content{\n    width: 100%;\n  \n    background-color: green;\n    display: grid;\n    grid-template-rows: 80px 1fr;\n    color: white;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    position: relative;\n}\n\n.nav{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    overflow-y:hidden;\n  \n}\n\n.nav > div {\n    background-color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px gray solid;\n    cursor:pointer;\n    opacity: 0.75;\n    font-size: 22px;\n\n}\n\n\n.nav > div:hover, .nav>div.clicked{\n    opacity:1;\n    font-weight:800;\n    font-size: 25px;\n}\n\n.main{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n \n}\n\n.card{\n    width: clamp(200px, 90%, 1000px);\n    background-color: black;\n    opacity: 0.75;\n    border: 5px gray solid;\n    border-radius: 15px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    position: absolute;\n    top: 120px;\n    margin-bottom: 40px;\n    height: auto;\n    padding-bottom: 30px;\n}\n\n.card > div, .card>h2{\n    height: auto;\n    font-size: 32px;\n    margin-top: 15px;\n}\n\n.card > div{\n    font-size: 20px;\n    overflow: unset;\n}\n\n/* \n * Always set the map height explicitly to define the size of the div element\n * that contains the map. \n */\n #map {\n    height: 100%;\n  }\n  \n\n  /*MENU*/\n\n  .item{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 90%;\n  }\n\n  h2, h3 {\n    overflow:hidden;\n    display: block;\n    height: auto;\n    width: 90%;\n  }\n\n  h3 { \n    margin-top: 20px;\n  }\n\n  h3 { \n    font-size: 1.5rem;\n  }\n\n  div.ingredients {\n    font-style: italic;\n    font-size: 1rem;\n    align-self: flex-start;\n    margin-top: 5px;\n    margin-left: 5%;\n  }\n\n  .margin {\n    height: 30px;\n  }\n\n  /* Home */\n  h1 {\n    font-size: 3.3rem;\n    font-family: 'Patrick Hand', cursive;\n    height: auto;\n  }\n\n  img {\n    width: 90%;\n    margin-top: 40px;\n    object-fit: contain;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,WAAW;;AAEf;;AAEA;IACI,WAAW;;IAEX,uBAAuB;IACvB,aAAa;IACb,4BAA4B;IAC5B,YAAY;IACZ,mDAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,iBAAiB;;AAErB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,cAAc;IACd,aAAa;IACb,eAAe;;AAEnB;;;AAGA;IACI,SAAS;IACT,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,UAAU;IACV,mBAAmB;IACnB,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;;;EAGE;CACD;IACG,YAAY;EACd;;;EAGA,OAAO;;EAEP;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,UAAU;EACZ;;EAEA;IACE,eAAe;IACf,cAAc;IACd,YAAY;IACZ,UAAU;EACZ;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,YAAY;EACd;;EAEA,SAAS;EACT;IACE,iBAAiB;IACjB,oCAAoC;IACpC,YAAY;EACd;;EAEA;IACE,UAAU;IACV,gBAAgB;IAChB,mBAAmB;IACnB,yDAAqC;EACvC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');\n\n*{\n    margin: 0;\n    height: 100%;\n    overflow-y: auto;\n}\n\nbody{\n    width: 100%;\n   \n}\n\n#content{\n    width: 100%;\n  \n    background-color: green;\n    display: grid;\n    grid-template-rows: 80px 1fr;\n    color: white;\n    background: url('/src/background.jpg');\n    position: relative;\n}\n\n.nav{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    overflow-y:hidden;\n  \n}\n\n.nav > div {\n    background-color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px gray solid;\n    cursor:pointer;\n    opacity: 0.75;\n    font-size: 22px;\n\n}\n\n\n.nav > div:hover, .nav>div.clicked{\n    opacity:1;\n    font-weight:800;\n    font-size: 25px;\n}\n\n.main{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n \n}\n\n.card{\n    width: clamp(200px, 90%, 1000px);\n    background-color: black;\n    opacity: 0.75;\n    border: 5px gray solid;\n    border-radius: 15px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    position: absolute;\n    top: 120px;\n    margin-bottom: 40px;\n    height: auto;\n    padding-bottom: 30px;\n}\n\n.card > div, .card>h2{\n    height: auto;\n    font-size: 32px;\n    margin-top: 15px;\n}\n\n.card > div{\n    font-size: 20px;\n    overflow: unset;\n}\n\n/* \n * Always set the map height explicitly to define the size of the div element\n * that contains the map. \n */\n #map {\n    height: 100%;\n  }\n  \n\n  /*MENU*/\n\n  .item{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 90%;\n  }\n\n  h2, h3 {\n    overflow:hidden;\n    display: block;\n    height: auto;\n    width: 90%;\n  }\n\n  h3 { \n    margin-top: 20px;\n  }\n\n  h3 { \n    font-size: 1.5rem;\n  }\n\n  div.ingredients {\n    font-style: italic;\n    font-size: 1rem;\n    align-self: flex-start;\n    margin-top: 5px;\n    margin-left: 5%;\n  }\n\n  .margin {\n    height: 30px;\n  }\n\n  /* Home */\n  h1 {\n    font-size: 3.3rem;\n    font-family: 'Patrick Hand', cursive;\n    height: auto;\n  }\n\n  img {\n    width: 90%;\n    margin-top: 40px;\n    object-fit: contain;\n    background-image: url(/src/pizza.jpg);\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function createContact(){
  const card = document.querySelector('.card');
  
  const title = document.createElement('h2');
  title.innerText = "Contact";
  const telephone = document.createElement('div');
  telephone.innerText = "Call us +49 921-001-982"
  const email = document.createElement('div');
  email.innerText = "Send us an email at: Tessima@contact.com"
  const local = document.createElement('div');
  local.setAttribute('id', 'map');
  card.appendChild(title)
  card.appendChild(telephone)
  card.appendChild(email)
  card.appendChild(local)


  

 

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza.jpg */ "./src/pizza.jpg");


function createHome(){
    const card = document.querySelector('.card');
  
    const restaurantName = document.createElement('h1');
    restaurantName.innerText = "Buonasera";
    card.appendChild(restaurantName);


    const para1 = document.createElement('h3');
    para1.innerText = "Welcome to the best italian restaurant on the East Coast... many say that in the whole world!";
    card.appendChild(para1);

    const para2 = document.createElement('h3');
    para2.innerText = "Restaurant is located nearby Central Park in the quiet alley where you can enjoy your food and good italian music";
    card.appendChild(para2);

    const myIcon = new Image();
  myIcon.src = _pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;

  card.appendChild(myIcon);

   
   


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu(){
    const card = document.querySelector('.card');
  
    const title = document.createElement('h2');
    title.innerText = "Menu";
    card.appendChild(title);

    const title2 = document.createElement('h3');
    title2.innerText = "Pizzas";
    card.appendChild(title2);

    const item = document.createElement('div');
    item.classList.add('item')
    const name = document.createElement('span');
    name.innerText= "Pizza Havana";
    const price = document.createElement('span');
    price.innerText = "11$";
   
    item.appendChild(name);
    item.appendChild(price);
    card.appendChild(item);

    const ingredients1 = document.createElement('div');
    ingredients1.classList.add('ingredients');
    ingredients1.innerText="Pineapple, corn, ham, gouda, mushrooms";
    card.appendChild(ingredients1);


    const item2 = document.createElement('div');
    item2.classList.add('item')
    const name2 = document.createElement('span');
    name2.innerText= "Pizza Margherita";
    const price2 = document.createElement('span');
    price2.innerText = "8$";
    item2.appendChild(name2);
    item2.appendChild(price2);
    card.appendChild(item2);

    const ingredients2 = document.createElement('div');
    ingredients2.classList.add('ingredients');
    ingredients2.innerText="Cheese, tomato sauce, onion";
    card.appendChild(ingredients2);

    const item3 = document.createElement('div');
    item3.classList.add('item')
    const name3 = document.createElement('span');
    name3.innerText= "Pizza Capriciosa";
    const price3 = document.createElement('span');
    price3.innerText = "9$";
    item3.appendChild(name3);
    item3.appendChild(price3);
    card.appendChild(item3);

    const ingredients3 = document.createElement('div');
    ingredients3.classList.add('ingredients');
    ingredients3.innerText="Salami, Gouda, Emmentaler, Onion";
    card.appendChild(ingredients3);


    const item4 = document.createElement('div');
    item4.classList.add('item')
    const name4 = document.createElement('span');
    name4.innerText= "Pizza Seafood";
    const price4 = document.createElement('span');
    price4.innerText = "15$";
    item4.appendChild(name4);
    item4.appendChild(price4);
    card.appendChild(item4);

      const ingredients4 = document.createElement('div');
    ingredients4.classList.add('ingredients');
    ingredients4.innerText="Shrimps, octopus, gouda";
    card.appendChild(ingredients4);

    const item5 = document.createElement('div');
    item5.classList.add('item')
    const name5 = document.createElement('span');
    name5.innerText= "Pizza Italiano";
    const price5 = document.createElement('span');
    price5.innerText = "13$";
    item5.appendChild(name5);
    item5.appendChild(price5);
    card.appendChild(item5);

    const ingredients5 = document.createElement('div');
    ingredients5.classList.add('ingredients');
    ingredients5.innerText="Tomatoes, rucola, mozarella, prosciutto crudo";
    card.appendChild(ingredients5);
    
    const item6 = document.createElement('div');
    item6.classList.add('item')
    const name6 = document.createElement('span');
    name6.innerText= "Pizza Neapolitana";
    const price6 = document.createElement('span');
    price6.innerText = "12$";
    item6.appendChild(name6);
    item6.appendChild(price6);
    card.appendChild(item6);

    const ingredients6 = document.createElement('div');
    ingredients6.classList.add('ingredients');
    ingredients6.innerText="Mozarella, prosciutto crudo";
    card.appendChild(ingredients6);

    const title3 = document.createElement('h3');
    title3.innerText = "Burgers";
    card.appendChild(title3);

    const item7 = document.createElement('div');
    item7.classList.add('item')
    const name7 = document.createElement('span');
    name7.innerText= "Don Corleone - spicy";
    const price7 = document.createElement('span');
    price7.innerText = "14$";
    item7.appendChild(name7);
    item7.appendChild(price7);
    card.appendChild(item7);

    const ingredients7 = document.createElement('div');
    ingredients7.classList.add('ingredients');
    ingredients7.innerText="200g beef, crispy onion, jalapeno sauce, tomatoes, salad";
    card.appendChild(ingredients7);


    const item8 = document.createElement('div');
    item8.classList.add('item')
    const name8 = document.createElement('span');
    name8.innerText= "Mariano Italiano";
    const price8 = document.createElement('span');
    price8.innerText = "14$";
    item8.appendChild(name8);
    item8.appendChild(price8);
    card.appendChild(item8);

    const ingredients8 = document.createElement('div');
    ingredients8.classList.add('ingredients');
    ingredients8.innerText="200g beef, red onion, rucola, prosciutto, salad";
    card.appendChild(ingredients8);

    const item9 = document.createElement('div');
    item9.classList.add('item')
    const name9 = document.createElement('span');
    name9.innerText= "Papa Americano";
    const price9 = document.createElement('span');
    price9.innerText = "16$";
    item9.appendChild(name9);
    item9.appendChild(price9);
    card.appendChild(item9);

    const ingredients9 = document.createElement('div');
    ingredients9.classList.add('ingredients');
    ingredients9.innerText="200g beef,  onion, 2 slices bacon, emmentaler, BBQ sauce";
    card.appendChild(ingredients9);

    const title4 = document.createElement('h3');
    title4.innerText = "Beverages";
    card.appendChild(title4);

    const item10 = document.createElement('div');
    item10.classList.add('item')
    const name10 = document.createElement('span');
    name10.innerText= "Water";
    const price10 = document.createElement('span');
    price10.innerText = "1$";
    item10.appendChild(name10);
    item10.appendChild(price10);
    card.appendChild(item10);


    const item11 = document.createElement('div');
    item11.classList.add('item')
    const name11 = document.createElement('span');
    name11.innerText= "Tea";
    const price11 = document.createElement('span');
    price11.innerText = "1$";
    item11.appendChild(name11);
    item11.appendChild(price11);
    card.appendChild(item11);
    
    const item12 = document.createElement('div');
    item12.classList.add('item')
    const name12 = document.createElement('span');
    name12.innerText= "White IPA";
    const price12 = document.createElement('span');
    price12.innerText = "1$";
    item12.appendChild(name12);
    item12.appendChild(price12);
    card.appendChild(item12);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");





function createNav(){
    const nav = document.createElement('div');
    nav.className = "nav";
    const home = document.createElement('div');
    home.addEventListener("click", () => {
        home.classList.add('clicked');
        contact.classList.remove('clicked');
        menu.classList.remove('clicked');
        removeChilds();
        (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
      });
    home.innerText = 'HOME'
    const menu = document.createElement('div');
    menu.addEventListener("click", () => {
        menu.classList.add('clicked');
        contact.classList.remove('clicked');
        home.classList.remove('clicked');
        removeChilds();
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
      });
    menu.innerText='MENU'
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.addEventListener("click", () => {
        contact.classList.add('clicked');
        menu.classList.remove('clicked');
        home.classList.remove('clicked');
        removeChilds();
        (0,_contact__WEBPACK_IMPORTED_MODULE_0__["default"])();

      });
    contact.innerText="CONTACT"
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav;
}


function createMain(){
    const main = document.createElement('div');
    main.className='main';
    const card = document.createElement('div');
    card.classList.add('card');
    main.appendChild(card);
    return main
}



  function initializeWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createNav());
    content.appendChild(createMain());
    (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])()
    
  }

  function removeChilds(){
    const card = document.querySelector('.card');
    while (card.firstChild) {
        card.removeChild(card.lastChild);
      }
  }


  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56fb9e8e3742c6540207.jpg";

/***/ }),

/***/ "./src/pizza.jpg":
/*!***********************!*\
  !*** ./src/pizza.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91fb797bc550d9899bb5.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDekJROztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHVDQUFVOztBQUV6Qjs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUM3QmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5THNCO0FBQ047QUFDQTs7O0FBRy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVU7QUFDbEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBVTtBQUNsQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQWE7O0FBRXJCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsRUFBRSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekVsQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBMEM7QUFDckI7O0FBRXJCLG9EQUFpQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL3BpenphLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0cmljaytIYW5kJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmJvZHl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgIFxcbn1cXG5cXG4jY29udGVudHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmF2e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBvdmVyZmxvdy15OmhpZGRlbjtcXG4gIFxcbn1cXG5cXG4ubmF2ID4gZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBncmF5IHNvbGlkO1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcblxcbn1cXG5cXG5cXG4ubmF2ID4gZGl2OmhvdmVyLCAubmF2PmRpdi5jbGlja2Vke1xcbiAgICBvcGFjaXR5OjE7XFxuICAgIGZvbnQtd2VpZ2h0OjgwMDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIFxcbn1cXG5cXG4uY2FyZHtcXG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCA5MCUsIDEwMDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbiAgICBib3JkZXI6IDVweCBncmF5IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmNhcmQgPiBkaXYsIC5jYXJkPmgye1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLmNhcmQgPiBkaXZ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xcbn1cXG5cXG4vKiBcXG4gKiBBbHdheXMgc2V0IHRoZSBtYXAgaGVpZ2h0IGV4cGxpY2l0bHkgdG8gZGVmaW5lIHRoZSBzaXplIG9mIHRoZSBkaXYgZWxlbWVudFxcbiAqIHRoYXQgY29udGFpbnMgdGhlIG1hcC4gXFxuICovXFxuICNtYXAge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBcXG5cXG4gIC8qTUVOVSovXFxuXFxuICAuaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgaDIsIGgzIHtcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgaDMgeyBcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG5cXG4gIGgzIHsgXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgZGl2LmluZ3JlZGllbnRzIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgfVxcblxcbiAgLm1hcmdpbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG5cXG4gIC8qIEhvbWUgKi9cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAzLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUGF0cmljayBIYW5kJywgY3Vyc2l2ZTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXOztBQUVmOztBQUVBO0lBQ0ksV0FBVzs7SUFFWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osbURBQXNDO0lBQ3RDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlOztBQUVuQjs7O0FBR0E7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTs7O0VBR0U7Q0FDRDtJQUNHLFlBQVk7RUFDZDs7O0VBR0EsT0FBTzs7RUFFUDtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBLFNBQVM7RUFDVDtJQUNFLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseURBQXFDO0VBQ3ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhdHJpY2srSGFuZCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuYm9keXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgXFxufVxcblxcbiNjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDFmcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zcmMvYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmF2e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBvdmVyZmxvdy15OmhpZGRlbjtcXG4gIFxcbn1cXG5cXG4ubmF2ID4gZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBncmF5IHNvbGlkO1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcblxcbn1cXG5cXG5cXG4ubmF2ID4gZGl2OmhvdmVyLCAubmF2PmRpdi5jbGlja2Vke1xcbiAgICBvcGFjaXR5OjE7XFxuICAgIGZvbnQtd2VpZ2h0OjgwMDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIFxcbn1cXG5cXG4uY2FyZHtcXG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCA5MCUsIDEwMDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbiAgICBib3JkZXI6IDVweCBncmF5IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmNhcmQgPiBkaXYsIC5jYXJkPmgye1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLmNhcmQgPiBkaXZ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xcbn1cXG5cXG4vKiBcXG4gKiBBbHdheXMgc2V0IHRoZSBtYXAgaGVpZ2h0IGV4cGxpY2l0bHkgdG8gZGVmaW5lIHRoZSBzaXplIG9mIHRoZSBkaXYgZWxlbWVudFxcbiAqIHRoYXQgY29udGFpbnMgdGhlIG1hcC4gXFxuICovXFxuICNtYXAge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBcXG5cXG4gIC8qTUVOVSovXFxuXFxuICAuaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgaDIsIGgzIHtcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgaDMgeyBcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG5cXG4gIGgzIHsgXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgZGl2LmluZ3JlZGllbnRzIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgfVxcblxcbiAgLm1hcmdpbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG5cXG4gIC8qIEhvbWUgKi9cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAzLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUGF0cmljayBIYW5kJywgY3Vyc2l2ZTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvcGl6emEuanBnKTtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCl7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xuICBcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0aXRsZS5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcbiAgY29uc3QgdGVsZXBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRlbGVwaG9uZS5pbm5lclRleHQgPSBcIkNhbGwgdXMgKzQ5IDkyMS0wMDEtOTgyXCJcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZW1haWwuaW5uZXJUZXh0ID0gXCJTZW5kIHVzIGFuIGVtYWlsIGF0OiBUZXNzaW1hQGNvbnRhY3QuY29tXCJcbiAgY29uc3QgbG9jYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jYWwuc2V0QXR0cmlidXRlKCdpZCcsICdtYXAnKTtcbiAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgY2FyZC5hcHBlbmRDaGlsZCh0ZWxlcGhvbmUpXG4gIGNhcmQuYXBwZW5kQ2hpbGQoZW1haWwpXG4gIGNhcmQuYXBwZW5kQ2hpbGQobG9jYWwpXG5cblxuICBcblxuIFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0OyIsImltcG9ydCBpbWFnZVBpenphIGZyb20gJy4vcGl6emEuanBnJ1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCl7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XG4gIFxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICByZXN0YXVyYW50TmFtZS5pbm5lclRleHQgPSBcIkJ1b25hc2VyYVwiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuXG5cbiAgICBjb25zdCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcGFyYTEuaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIHRoZSBiZXN0IGl0YWxpYW4gcmVzdGF1cmFudCBvbiB0aGUgRWFzdCBDb2FzdC4uLiBtYW55IHNheSB0aGF0IGluIHRoZSB3aG9sZSB3b3JsZCFcIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHBhcmExKTtcblxuICAgIGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwYXJhMi5pbm5lclRleHQgPSBcIlJlc3RhdXJhbnQgaXMgbG9jYXRlZCBuZWFyYnkgQ2VudHJhbCBQYXJrIGluIHRoZSBxdWlldCBhbGxleSB3aGVyZSB5b3UgY2FuIGVuam95IHlvdXIgZm9vZCBhbmQgZ29vZCBpdGFsaWFuIG11c2ljXCI7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChwYXJhMik7XG5cbiAgICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbXlJY29uLnNyYyA9IGltYWdlUGl6emE7XG5cbiAgY2FyZC5hcHBlbmRDaGlsZChteUljb24pO1xuXG4gICBcbiAgIFxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZSIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKXtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcbiAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZTIuaW5uZXJUZXh0ID0gXCJQaXp6YXNcIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlMik7XG5cbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJylcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5hbWUuaW5uZXJUZXh0PSBcIlBpenphIEhhdmFuYVwiO1xuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlLmlubmVyVGV4dCA9IFwiMTEkXCI7XG4gICBcbiAgICBpdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQocHJpY2UpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50czEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmdyZWRpZW50czEuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50czEuaW5uZXJUZXh0PVwiUGluZWFwcGxlLCBjb3JuLCBoYW0sIGdvdWRhLCBtdXNocm9vbXNcIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzMSk7XG5cblxuICAgIGNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTIuY2xhc3NMaXN0LmFkZCgnaXRlbScpXG4gICAgY29uc3QgbmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmFtZTIuaW5uZXJUZXh0PSBcIlBpenphIE1hcmdoZXJpdGFcIjtcbiAgICBjb25zdCBwcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJpY2UyLmlubmVyVGV4dCA9IFwiOCRcIjtcbiAgICBpdGVtMi5hcHBlbmRDaGlsZChuYW1lMik7XG4gICAgaXRlbTIuYXBwZW5kQ2hpbGQocHJpY2UyKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW0yKTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnRzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZ3JlZGllbnRzMi5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnRzMi5pbm5lclRleHQ9XCJDaGVlc2UsIHRvbWF0byBzYXVjZSwgb25pb25cIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzMik7XG5cbiAgICBjb25zdCBpdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0zLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxuICAgIGNvbnN0IG5hbWUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5hbWUzLmlubmVyVGV4dD0gXCJQaXp6YSBDYXByaWNpb3NhXCI7XG4gICAgY29uc3QgcHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlMy5pbm5lclRleHQgPSBcIjkkXCI7XG4gICAgaXRlbTMuYXBwZW5kQ2hpbGQobmFtZTMpO1xuICAgIGl0ZW0zLmFwcGVuZENoaWxkKHByaWNlMyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChpdGVtMyk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50czMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmdyZWRpZW50czMuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50czMuaW5uZXJUZXh0PVwiU2FsYW1pLCBHb3VkYSwgRW1tZW50YWxlciwgT25pb25cIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzMyk7XG5cblxuICAgIGNvbnN0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTQuY2xhc3NMaXN0LmFkZCgnaXRlbScpXG4gICAgY29uc3QgbmFtZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmFtZTQuaW5uZXJUZXh0PSBcIlBpenphIFNlYWZvb2RcIjtcbiAgICBjb25zdCBwcmljZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJpY2U0LmlubmVyVGV4dCA9IFwiMTUkXCI7XG4gICAgaXRlbTQuYXBwZW5kQ2hpbGQobmFtZTQpO1xuICAgIGl0ZW00LmFwcGVuZENoaWxkKHByaWNlNCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChpdGVtNCk7XG5cbiAgICAgIGNvbnN0IGluZ3JlZGllbnRzNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZ3JlZGllbnRzNC5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnRzNC5pbm5lclRleHQ9XCJTaHJpbXBzLCBvY3RvcHVzLCBnb3VkYVwiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHM0KTtcblxuICAgIGNvbnN0IGl0ZW01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTUuY2xhc3NMaXN0LmFkZCgnaXRlbScpXG4gICAgY29uc3QgbmFtZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmFtZTUuaW5uZXJUZXh0PSBcIlBpenphIEl0YWxpYW5vXCI7XG4gICAgY29uc3QgcHJpY2U1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlNS5pbm5lclRleHQgPSBcIjEzJFwiO1xuICAgIGl0ZW01LmFwcGVuZENoaWxkKG5hbWU1KTtcbiAgICBpdGVtNS5hcHBlbmRDaGlsZChwcmljZTUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbTUpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudHM1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ncmVkaWVudHM1LmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudHM1LmlubmVyVGV4dD1cIlRvbWF0b2VzLCBydWNvbGEsIG1vemFyZWxsYSwgcHJvc2NpdXR0byBjcnVkb1wiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHM1KTtcbiAgICBcbiAgICBjb25zdCBpdGVtNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW02LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxuICAgIGNvbnN0IG5hbWU2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5hbWU2LmlubmVyVGV4dD0gXCJQaXp6YSBOZWFwb2xpdGFuYVwiO1xuICAgIGNvbnN0IHByaWNlNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcmljZTYuaW5uZXJUZXh0ID0gXCIxMiRcIjtcbiAgICBpdGVtNi5hcHBlbmRDaGlsZChuYW1lNik7XG4gICAgaXRlbTYuYXBwZW5kQ2hpbGQocHJpY2U2KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW02KTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnRzNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZ3JlZGllbnRzNi5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnRzNi5pbm5lclRleHQ9XCJNb3phcmVsbGEsIHByb3NjaXV0dG8gY3J1ZG9cIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzNik7XG5cbiAgICBjb25zdCB0aXRsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlMy5pbm5lclRleHQgPSBcIkJ1cmdlcnNcIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlMyk7XG5cbiAgICBjb25zdCBpdGVtNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW03LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxuICAgIGNvbnN0IG5hbWU3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5hbWU3LmlubmVyVGV4dD0gXCJEb24gQ29ybGVvbmUgLSBzcGljeVwiO1xuICAgIGNvbnN0IHByaWNlNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcmljZTcuaW5uZXJUZXh0ID0gXCIxNCRcIjtcbiAgICBpdGVtNy5hcHBlbmRDaGlsZChuYW1lNyk7XG4gICAgaXRlbTcuYXBwZW5kQ2hpbGQocHJpY2U3KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW03KTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnRzNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZ3JlZGllbnRzNy5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnRzNy5pbm5lclRleHQ9XCIyMDBnIGJlZWYsIGNyaXNweSBvbmlvbiwgamFsYXBlbm8gc2F1Y2UsIHRvbWF0b2VzLCBzYWxhZFwiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHM3KTtcblxuXG4gICAgY29uc3QgaXRlbTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtOC5jbGFzc0xpc3QuYWRkKCdpdGVtJylcbiAgICBjb25zdCBuYW1lOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBuYW1lOC5pbm5lclRleHQ9IFwiTWFyaWFubyBJdGFsaWFub1wiO1xuICAgIGNvbnN0IHByaWNlOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcmljZTguaW5uZXJUZXh0ID0gXCIxNCRcIjtcbiAgICBpdGVtOC5hcHBlbmRDaGlsZChuYW1lOCk7XG4gICAgaXRlbTguYXBwZW5kQ2hpbGQocHJpY2U4KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW04KTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnRzOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZ3JlZGllbnRzOC5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnRzOC5pbm5lclRleHQ9XCIyMDBnIGJlZWYsIHJlZCBvbmlvbiwgcnVjb2xhLCBwcm9zY2l1dHRvLCBzYWxhZFwiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHM4KTtcblxuICAgIGNvbnN0IGl0ZW05ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTkuY2xhc3NMaXN0LmFkZCgnaXRlbScpXG4gICAgY29uc3QgbmFtZTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmFtZTkuaW5uZXJUZXh0PSBcIlBhcGEgQW1lcmljYW5vXCI7XG4gICAgY29uc3QgcHJpY2U5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlOS5pbm5lclRleHQgPSBcIjE2JFwiO1xuICAgIGl0ZW05LmFwcGVuZENoaWxkKG5hbWU5KTtcbiAgICBpdGVtOS5hcHBlbmRDaGlsZChwcmljZTkpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbTkpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudHM5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ncmVkaWVudHM5LmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudHM5LmlubmVyVGV4dD1cIjIwMGcgYmVlZiwgIG9uaW9uLCAyIHNsaWNlcyBiYWNvbiwgZW1tZW50YWxlciwgQkJRIHNhdWNlXCI7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChpbmdyZWRpZW50czkpO1xuXG4gICAgY29uc3QgdGl0bGU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZTQuaW5uZXJUZXh0ID0gXCJCZXZlcmFnZXNcIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlNCk7XG5cbiAgICBjb25zdCBpdGVtMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtMTAuY2xhc3NMaXN0LmFkZCgnaXRlbScpXG4gICAgY29uc3QgbmFtZTEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5hbWUxMC5pbm5lclRleHQ9IFwiV2F0ZXJcIjtcbiAgICBjb25zdCBwcmljZTEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlMTAuaW5uZXJUZXh0ID0gXCIxJFwiO1xuICAgIGl0ZW0xMC5hcHBlbmRDaGlsZChuYW1lMTApO1xuICAgIGl0ZW0xMC5hcHBlbmRDaGlsZChwcmljZTEwKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW0xMCk7XG5cblxuICAgIGNvbnN0IGl0ZW0xMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0xMS5jbGFzc0xpc3QuYWRkKCdpdGVtJylcbiAgICBjb25zdCBuYW1lMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmFtZTExLmlubmVyVGV4dD0gXCJUZWFcIjtcbiAgICBjb25zdCBwcmljZTExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlMTEuaW5uZXJUZXh0ID0gXCIxJFwiO1xuICAgIGl0ZW0xMS5hcHBlbmRDaGlsZChuYW1lMTEpO1xuICAgIGl0ZW0xMS5hcHBlbmRDaGlsZChwcmljZTExKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW0xMSk7XG4gICAgXG4gICAgY29uc3QgaXRlbTEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTEyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxuICAgIGNvbnN0IG5hbWUxMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBuYW1lMTIuaW5uZXJUZXh0PSBcIldoaXRlIElQQVwiO1xuICAgIGNvbnN0IHByaWNlMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJpY2UxMi5pbm5lclRleHQgPSBcIjEkXCI7XG4gICAgaXRlbTEyLmFwcGVuZENoaWxkKG5hbWUxMik7XG4gICAgaXRlbTEyLmFwcGVuZENoaWxkKHByaWNlMTIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbTEyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudSIsImltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gJy4vY29udGFjdCdcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudSdcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZSdcblxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuY2xhc3NOYW1lID0gXCJuYXZcIjtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICByZW1vdmVDaGlsZHMoKTtcbiAgICAgICAgY3JlYXRlSG9tZSgpO1xuICAgICAgfSk7XG4gICAgaG9tZS5pbm5lclRleHQgPSAnSE9NRSdcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICByZW1vdmVDaGlsZHMoKTtcbiAgICAgICAgY3JlYXRlTWVudSgpO1xuICAgICAgfSk7XG4gICAgbWVudS5pbm5lclRleHQ9J01FTlUnXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICBob21lLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICAgICAgcmVtb3ZlQ2hpbGRzKCk7XG4gICAgICAgIGNyZWF0ZUNvbnRhY3QoKTtcblxuICAgICAgfSk7XG4gICAgY29udGFjdC5pbm5lclRleHQ9XCJDT05UQUNUXCJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTmFtZT0nbWFpbic7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgcmV0dXJuIG1haW5cbn1cblxuXG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgY3JlYXRlSG9tZSgpXG4gICAgXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDaGlsZHMoKXtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcbiAgICB3aGlsZSAoY2FyZC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoY2FyZC5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICB9XG5cblxuICBcbiAgZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9