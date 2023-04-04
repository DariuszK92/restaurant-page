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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    height: 100%;\n    overflow-y: auto;\n}\n\nbody{\n    width: 100%;\n   \n}\n\n#content{\n    width: 100%;\n  \n    background-color: green;\n    display: grid;\n    grid-template-rows: 80px 1fr;\n    color: white;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    position: relative;\n}\n\n.nav{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    overflow-y:hidden;\n  \n}\n\n.nav > div {\n    background-color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px gray solid;\n    cursor:pointer;\n    opacity: 0.75;\n    font-size: 22px;\n\n}\n\n\n.nav > div:hover, .nav>div.clicked{\n    opacity:1;\n    font-weight:800;\n    font-size: 25px;\n}\n\n.main{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n \n}\n\n.card{\n    width: clamp(200px, 90%, 1000px);\n    background-color: black;\n    opacity: 0.75;\n    border: 5px gray solid;\n    border-radius: 15px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    position: absolute;\n    top: 120px;\n    margin-bottom: 40px;\n    height: auto;\n    padding-bottom: 30px;\n}\n\n.card > div, .card>h2{\n    height: auto;\n    font-size: 32px;\n    margin-top: 15px;\n    text-align: center;\n}\n\n.card > div{\n    font-size: 20px;\n    overflow: unset;\n}\n\n/* \n * Always set the map height explicitly to define the size of the div element\n * that contains the map. \n */\n #map {\n    height: 100%;\n  }\n  \n\n  /*MENU*/\n\n  .item{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 90%;\n  }\n\n  h2, h3 {\n    overflow:hidden;\n    display: block;\n    height: auto;\n    width: 90%;\n  }\n\n  h3 { \n    margin-top: 20px;\n  }\n\n  h3 { \n    font-size: 1.5rem;\n  }\n\n  div.ingredients {\n    font-style: italic;\n    font-size: 1rem;\n    align-self: flex-start;\n    margin-top: 5px;\n    margin-left: 5%;\n  }\n\n  .margin {\n    height: 30px;\n  }\n\n  /* Home */\n  h1 {\n    font-size: 3.3rem;\n    font-family: 'Patrick Hand', cursive;\n    height: auto;\n  }\n\n  img {\n    width: 90%;\n    margin-top: 40px;\n    object-fit: contain;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  }\n\n\n #map {\n  width: 90%;\n  height: 500px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,WAAW;;AAEf;;AAEA;IACI,WAAW;;IAEX,uBAAuB;IACvB,aAAa;IACb,4BAA4B;IAC5B,YAAY;IACZ,mDAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,iBAAiB;;AAErB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,cAAc;IACd,aAAa;IACb,eAAe;;AAEnB;;;AAGA;IACI,SAAS;IACT,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,UAAU;IACV,mBAAmB;IACnB,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;;;EAGE;CACD;IACG,YAAY;EACd;;;EAGA,OAAO;;EAEP;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,UAAU;EACZ;;EAEA;IACE,eAAe;IACf,cAAc;IACd,YAAY;IACZ,UAAU;EACZ;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,YAAY;EACd;;EAEA,SAAS;EACT;IACE,iBAAiB;IACjB,oCAAoC;IACpC,YAAY;EACd;;EAEA;IACE,UAAU;IACV,gBAAgB;IAChB,mBAAmB;IACnB,yDAAqC;EACvC;;;CAGD;EACC,UAAU;EACV,aAAa;AACf","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');\n\n*{\n    margin: 0;\n    height: 100%;\n    overflow-y: auto;\n}\n\nbody{\n    width: 100%;\n   \n}\n\n#content{\n    width: 100%;\n  \n    background-color: green;\n    display: grid;\n    grid-template-rows: 80px 1fr;\n    color: white;\n    background: url('/src/background.jpg');\n    position: relative;\n}\n\n.nav{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    overflow-y:hidden;\n  \n}\n\n.nav > div {\n    background-color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px gray solid;\n    cursor:pointer;\n    opacity: 0.75;\n    font-size: 22px;\n\n}\n\n\n.nav > div:hover, .nav>div.clicked{\n    opacity:1;\n    font-weight:800;\n    font-size: 25px;\n}\n\n.main{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n \n}\n\n.card{\n    width: clamp(200px, 90%, 1000px);\n    background-color: black;\n    opacity: 0.75;\n    border: 5px gray solid;\n    border-radius: 15px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    position: absolute;\n    top: 120px;\n    margin-bottom: 40px;\n    height: auto;\n    padding-bottom: 30px;\n}\n\n.card > div, .card>h2{\n    height: auto;\n    font-size: 32px;\n    margin-top: 15px;\n    text-align: center;\n}\n\n.card > div{\n    font-size: 20px;\n    overflow: unset;\n}\n\n/* \n * Always set the map height explicitly to define the size of the div element\n * that contains the map. \n */\n #map {\n    height: 100%;\n  }\n  \n\n  /*MENU*/\n\n  .item{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 90%;\n  }\n\n  h2, h3 {\n    overflow:hidden;\n    display: block;\n    height: auto;\n    width: 90%;\n  }\n\n  h3 { \n    margin-top: 20px;\n  }\n\n  h3 { \n    font-size: 1.5rem;\n  }\n\n  div.ingredients {\n    font-style: italic;\n    font-size: 1rem;\n    align-self: flex-start;\n    margin-top: 5px;\n    margin-left: 5%;\n  }\n\n  .margin {\n    height: 30px;\n  }\n\n  /* Home */\n  h1 {\n    font-size: 3.3rem;\n    font-family: 'Patrick Hand', cursive;\n    height: auto;\n  }\n\n  img {\n    width: 90%;\n    margin-top: 40px;\n    object-fit: contain;\n    background-image: url(/src/pizza.jpg);\n  }\n\n\n #map {\n  width: 90%;\n  height: 500px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ID": () => (/* binding */ DEFAULT_ID),
/* harmony export */   "Loader": () => (/* binding */ Loader),
/* harmony export */   "LoaderStatus": () => (/* binding */ LoaderStatus)
/* harmony export */ });
// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */
var LoaderStatus;
(function (LoaderStatus) {
    LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
    LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
    LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
    LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
class Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version, }) {
        this.CALLBACK = "__googleMapsCallback";
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.apiKey = apiKey;
        this.authReferrerPolicy = authReferrerPolicy;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string
        this.language = language;
        this.libraries = libraries;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.region = region;
        this.retries = retries;
        this.url = url;
        this.version = version;
        if (Loader.instance) {
            if (!fastDeepEqual(this.options, Loader.instance.options)) {
                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
            }
            return Loader.instance;
        }
        Loader.instance = this;
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
            authReferrerPolicy: this.authReferrerPolicy,
        };
    }
    get status() {
        if (this.errors.length) {
            return LoaderStatus.FAILURE;
        }
        if (this.done) {
            return LoaderStatus.SUCCESS;
        }
        if (this.loading) {
            return LoaderStatus.LOADING;
        }
        return LoaderStatus.INITIALIZED;
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     */
    createUrl() {
        let url = this.url;
        url += `?callback=${this.CALLBACK}`;
        if (this.apiKey) {
            url += `&key=${this.apiKey}`;
        }
        if (this.channel) {
            url += `&channel=${this.channel}`;
        }
        if (this.client) {
            url += `&client=${this.client}`;
        }
        if (this.libraries.length > 0) {
            url += `&libraries=${this.libraries.join(",")}`;
        }
        if (this.language) {
            url += `&language=${this.language}`;
        }
        if (this.region) {
            url += `&region=${this.region}`;
        }
        if (this.version) {
            url += `&v=${this.version}`;
        }
        if (this.mapIds) {
            url += `&map_ids=${this.mapIds.join(",")}`;
        }
        if (this.authReferrerPolicy) {
            url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
        }
        return url;
    }
    deleteScript() {
        const script = document.getElementById(this.id);
        if (script) {
            script.remove();
        }
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     */
    load() {
        return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     */
    loadPromise() {
        return new Promise((resolve, reject) => {
            this.loadCallback((err) => {
                if (!err) {
                    resolve(window.google);
                }
                else {
                    reject(err.error);
                }
            });
        });
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     */
    loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }
    /**
     * Set the script on document.
     */
    setScript() {
        if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
        }
        const url = this.createUrl();
        const script = document.createElement("script");
        script.id = this.id;
        script.type = "text/javascript";
        script.src = url;
        script.onerror = this.loadErrorCallback.bind(this);
        script.defer = true;
        script.async = true;
        if (this.nonce) {
            script.nonce = this.nonce;
        }
        document.head.appendChild(script);
    }
    /**
     * Reset the loader state.
     */
    reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
        if (this.failed) {
            this.reset();
        }
    }
    loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
            const delay = this.errors.length * Math.pow(2, this.errors.length);
            console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);
            setTimeout(() => {
                this.deleteScript();
                this.setScript();
            }, delay);
        }
        else {
            this.onerrorEvent = e;
            this.callback();
        }
    }
    setCallback() {
        window.__googleMapsCallback = this.callback.bind(this);
    }
    callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb) => {
            cb(this.onerrorEvent);
        });
        this.callbacks = [];
    }
    execute() {
        this.resetIfRetryingFailed();
        if (this.done) {
            this.callback();
        }
        else {
            // short circuit and warn if google.maps is already loaded
            if (window.google && window.google.maps && window.google.maps.version) {
                console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." +
                    "This may result in undesirable behavior as options and script parameters may not match.");
                this.callback();
                return;
            }
            if (this.loading) ;
            else {
                this.loading = true;
                this.setCallback();
                this.setScript();
            }
        }
    }
}




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
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js");


function createContact(){
  const card = document.querySelector('.card');
  
  const title = document.createElement('h2');
  title.innerText = "Contact";
  const telephone = document.createElement('div');
  telephone.innerText = "Call us +49 921-001-982"
  const email = document.createElement('div');
  email.innerText = "Or send us an email at: Tessima@contact.com";
  card.appendChild(title)
  card.appendChild(telephone)
  card.appendChild(email)
  const empty = document.createElement('div');
  empty.innerText = "   "
  card.appendChild(empty);
  const address = document.createElement('div');
  address.innerText = "Address:"
  card.appendChild(address);
  const address2 = document.createElement('div');
  address2.innerText = "8155 Foxrun Ave."
  card.appendChild(address2);
  const address3 = document.createElement('div');
  address3.innerText = "Levittown, NY 11756"
  card.appendChild(address3);

  const local = document.createElement('div');
  local.setAttribute('id', 'map');
  card.appendChild(local)
 

  const loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__.Loader({
    apiKey: "",
    version: "weekly",
    libraries: ["places"]
  });

  const mapOptions = {
    center: {
      lat: 40.785, lng: -73.968 
    },
    zoom: 16,
  };
  
  // Promise
  loader
    .load()
    .then((google) => {
      new google.maps.Map(document.getElementById("map"), mapOptions);
    })
    .catch(e => {
      // do something
    });
  

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlOzs7Ozs7Ozs7Ozs7OztBQzNCZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlMc0I7QUFDTjtBQUNBOzs7QUFHL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBVTtBQUNsQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFVO0FBQ2xCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBYTs7QUFFckIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVU7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBLEVBQUUsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVsQyxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUI3RTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBMEM7QUFDckI7OztBQUdyQixvREFBaUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL0Bnb29nbGVtYXBzL2pzLWFwaS1sb2FkZXIvbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvQGdvb2dsZW1hcHMvanMtYXBpLWxvYWRlci9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9waXp6YS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhdHJpY2srSGFuZCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5ib2R5e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICBcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgb3ZlcmZsb3cteTpoaWRkZW47XFxuICBcXG59XFxuXFxuLm5hdiA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggZ3JheSBzb2xpZDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG5cXG59XFxuXFxuXFxuLm5hdiA+IGRpdjpob3ZlciwgLm5hdj5kaXYuY2xpY2tlZHtcXG4gICAgb3BhY2l0eToxO1xcbiAgICBmb250LXdlaWdodDo4MDA7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiBcXG59XFxuXFxuLmNhcmR7XFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgOTAlLCAxMDAwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgYm9yZGVyOiA1cHggZ3JheSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5jYXJkID4gZGl2LCAuY2FyZD5oMntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgPiBkaXZ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xcbn1cXG5cXG4vKiBcXG4gKiBBbHdheXMgc2V0IHRoZSBtYXAgaGVpZ2h0IGV4cGxpY2l0bHkgdG8gZGVmaW5lIHRoZSBzaXplIG9mIHRoZSBkaXYgZWxlbWVudFxcbiAqIHRoYXQgY29udGFpbnMgdGhlIG1hcC4gXFxuICovXFxuICNtYXAge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBcXG5cXG4gIC8qTUVOVSovXFxuXFxuICAuaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgaDIsIGgzIHtcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgaDMgeyBcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG5cXG4gIGgzIHsgXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgZGl2LmluZ3JlZGllbnRzIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgfVxcblxcbiAgLm1hcmdpbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG5cXG4gIC8qIEhvbWUgKi9cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAzLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUGF0cmljayBIYW5kJywgY3Vyc2l2ZTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIH1cXG5cXG5cXG4gI21hcCB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFdBQVc7O0lBRVgsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1EQUFzQztJQUN0QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZUFBZTs7QUFFbkI7OztBQUdBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBOzs7RUFHRTtDQUNEO0lBQ0csWUFBWTtFQUNkOzs7RUFHQSxPQUFPOztFQUVQO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUEsU0FBUztFQUNUO0lBQ0UsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5REFBcUM7RUFDdkM7OztDQUdEO0VBQ0MsVUFBVTtFQUNWLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXRyaWNrK0hhbmQmZGlzcGxheT1zd2FwJyk7XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmJvZHl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgIFxcbn1cXG5cXG4jY29udGVudHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcvc3JjL2JhY2tncm91bmQuanBnJyk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgb3ZlcmZsb3cteTpoaWRkZW47XFxuICBcXG59XFxuXFxuLm5hdiA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggZ3JheSBzb2xpZDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG5cXG59XFxuXFxuXFxuLm5hdiA+IGRpdjpob3ZlciwgLm5hdj5kaXYuY2xpY2tlZHtcXG4gICAgb3BhY2l0eToxO1xcbiAgICBmb250LXdlaWdodDo4MDA7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiBcXG59XFxuXFxuLmNhcmR7XFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgOTAlLCAxMDAwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgYm9yZGVyOiA1cHggZ3JheSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5jYXJkID4gZGl2LCAuY2FyZD5oMntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgPiBkaXZ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xcbn1cXG5cXG4vKiBcXG4gKiBBbHdheXMgc2V0IHRoZSBtYXAgaGVpZ2h0IGV4cGxpY2l0bHkgdG8gZGVmaW5lIHRoZSBzaXplIG9mIHRoZSBkaXYgZWxlbWVudFxcbiAqIHRoYXQgY29udGFpbnMgdGhlIG1hcC4gXFxuICovXFxuICNtYXAge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBcXG5cXG4gIC8qTUVOVSovXFxuXFxuICAuaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgaDIsIGgzIHtcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgaDMgeyBcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG5cXG4gIGgzIHsgXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgZGl2LmluZ3JlZGllbnRzIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgfVxcblxcbiAgLm1hcmdpbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG5cXG4gIC8qIEhvbWUgKi9cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAzLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUGF0cmljayBIYW5kJywgY3Vyc2l2ZTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvcGl6emEuanBnKTtcXG4gIH1cXG5cXG5cXG4gI21hcCB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gZG8gbm90IGVkaXQgLmpzIGZpbGVzIGRpcmVjdGx5IC0gZWRpdCBzcmMvaW5kZXguanN0XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYS5jb25zdHJ1Y3RvciAhPT0gYi5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIGxlbmd0aCwgaSwga2V5cztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICAgIGlmICghZXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG5cbiAgICBpZiAoYS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwKSByZXR1cm4gYS5zb3VyY2UgPT09IGIuc291cmNlICYmIGEuZmxhZ3MgPT09IGIuZmxhZ3M7XG4gICAgaWYgKGEudmFsdWVPZiAhPT0gT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mKSByZXR1cm4gYS52YWx1ZU9mKCkgPT09IGIudmFsdWVPZigpO1xuICAgIGlmIChhLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG5cbiAgICBrZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFlcXVhbChhW2tleV0sIGJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHRydWUgaWYgYm90aCBOYU4sIGZhbHNlIG90aGVyd2lzZVxuICByZXR1cm4gYSE9PWEgJiYgYiE9PWI7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQuXG4gKlxuICogICAgICBIdHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgaXNFcXVhbCBmcm9tIFwiZmFzdC1kZWVwLWVxdWFsXCI7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fZ29vZ2xlTWFwc0NhbGxiYWNrOiAoZTogRXZlbnQpID0+IHZvaWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSUQgPSBcIl9fZ29vZ2xlTWFwc1NjcmlwdElkXCI7XG5cbmV4cG9ydCB0eXBlIExpYnJhcmllcyA9IChcbiAgfCBcImRyYXdpbmdcIlxuICB8IFwiZ2VvbWV0cnlcIlxuICB8IFwibG9jYWxDb250ZXh0XCJcbiAgfCBcIm1hcmtlclwiXG4gIHwgXCJwbGFjZXNcIlxuICB8IFwidmlzdWFsaXphdGlvblwiXG4pW107XG5cbi8qKlxuICogVGhlIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJXG4gKiBbZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvdHV0b3JpYWwpXG4gKiBpcyB0aGUgYXV0aG9yaXRhdGl2ZSBzb3VyY2UgZm9yIFtbTG9hZGVyT3B0aW9uc11dLlxuLyoqXG4gKiBMb2FkZXIgb3B0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlck9wdGlvbnMge1xuICAvKipcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2dldC1hcGkta2V5LlxuICAgKi9cbiAgYXBpS2V5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9wcmVtaXVtL292ZXJ2aWV3LlxuICAgKi9cbiAgY2hhbm5lbD86IHN0cmluZztcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL3ByZW1pdW0vb3ZlcnZpZXcsIHVzZSBgYXBpS2V5YCBpbnN0ZWFkLlxuICAgKi9cbiAgY2xpZW50Pzogc3RyaW5nO1xuICAvKipcbiAgICogSW4geW91ciBhcHBsaWNhdGlvbiB5b3UgY2FuIHNwZWNpZnkgcmVsZWFzZSBjaGFubmVscyBvciB2ZXJzaW9uIG51bWJlcnM6XG4gICAqXG4gICAqIFRoZSB3ZWVrbHkgdmVyc2lvbiBpcyBzcGVjaWZpZWQgd2l0aCBgdmVyc2lvbj13ZWVrbHlgLiBUaGlzIHZlcnNpb24gaXNcbiAgICogdXBkYXRlZCBvbmNlIHBlciB3ZWVrLCBhbmQgaXMgdGhlIG1vc3QgY3VycmVudC5cbiAgICpcbiAgICogYGBgXG4gICAqIGNvbnN0IGxvYWRlciA9IExvYWRlcih7YXBpS2V5LCB2ZXJzaW9uOiAnd2Vla2x5J30pO1xuICAgKiBgYGBcbiAgICpcbiAgICogVGhlIHF1YXJ0ZXJseSB2ZXJzaW9uIGlzIHNwZWNpZmllZCB3aXRoIGB2ZXJzaW9uPXF1YXJ0ZXJseWAuIFRoaXMgdmVyc2lvblxuICAgKiBpcyB1cGRhdGVkIG9uY2UgcGVyIHF1YXJ0ZXIsIGFuZCBpcyB0aGUgbW9zdCBwcmVkaWN0YWJsZS5cbiAgICpcbiAgICogYGBgXG4gICAqIGNvbnN0IGxvYWRlciA9IExvYWRlcih7YXBpS2V5LCB2ZXJzaW9uOiAncXVhcnRlcmx5J30pO1xuICAgKiBgYGBcbiAgICpcbiAgICogVGhlIHZlcnNpb24gbnVtYmVyIGlzIHNwZWNpZmllZCB3aXRoIGB2ZXJzaW9uPW4ubm5gLiBZb3UgY2FuIGNob29zZVxuICAgKiBgdmVyc2lvbj0zLjQwYCwgYHZlcnNpb249My4zOWAsIG9yIGB2ZXJzaW9uPTMuMzhgLiBWZXJzaW9uIG51bWJlcnMgYXJlXG4gICAqIHVwZGF0ZWQgb25jZSBwZXIgcXVhcnRlci5cbiAgICpcbiAgICogYGBgXG4gICAqIGNvbnN0IGxvYWRlciA9IExvYWRlcih7YXBpS2V5LCB2ZXJzaW9uOiAnMy40MCd9KTtcbiAgICogYGBgXG4gICAqXG4gICAqIElmIHlvdSBkbyBub3QgZXhwbGljaXRseSBzcGVjaWZ5IGEgdmVyc2lvbiwgeW91IHdpbGwgcmVjZWl2ZSB0aGVcbiAgICogd2Vla2x5IHZlcnNpb24gYnkgZGVmYXVsdC5cbiAgICovXG4gIHZlcnNpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIHNjcmlwdCB0YWcuIEJlZm9yZSBhZGRpbmcgYSBuZXcgc2NyaXB0LCB0aGUgTG9hZGVyIHdpbGwgY2hlY2sgZm9yIGFuIGV4aXN0aW5nIG9uZS5cbiAgICovXG4gIGlkPzogc3RyaW5nO1xuICAvKipcbiAgICogV2hlbiBsb2FkaW5nIHRoZSBNYXBzIEphdmFTY3JpcHQgQVBJIHZpYSB0aGUgVVJMIHlvdSBtYXkgb3B0aW9uYWxseSBsb2FkXG4gICAqIGFkZGl0aW9uYWwgbGlicmFyaWVzIHRocm91Z2ggdXNlIG9mIHRoZSBsaWJyYXJpZXMgVVJMIHBhcmFtZXRlci4gTGlicmFyaWVzXG4gICAqIGFyZSBtb2R1bGVzIG9mIGNvZGUgdGhhdCBwcm92aWRlIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSB0byB0aGUgbWFpbiBNYXBzXG4gICAqIEphdmFTY3JpcHQgQVBJIGJ1dCBhcmUgbm90IGxvYWRlZCB1bmxlc3MgeW91IHNwZWNpZmljYWxseSByZXF1ZXN0IHRoZW0uXG4gICAqXG4gICAqIGBgYFxuICAgKiBjb25zdCBsb2FkZXIgPSBMb2FkZXIoe1xuICAgKiAgYXBpS2V5LFxuICAgKiAgbGlicmFyaWVzOiBbJ2RyYXdpbmcnLCAnZ2VvbWV0cnknLCAncGxhY2VzJywgJ3Zpc3VhbGl6YXRpb24nXSxcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBTZXQgdGhlIFtsaXN0IG9mIGxpYnJhcmllc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvbGlicmFyaWVzKSBmb3IgbW9yZSBvcHRpb25zLlxuICAgKi9cbiAgbGlicmFyaWVzPzogTGlicmFyaWVzO1xuICAvKipcbiAgICogQnkgZGVmYXVsdCwgdGhlIE1hcHMgSmF2YVNjcmlwdCBBUEkgdXNlcyB0aGUgdXNlcidzIHByZWZlcnJlZCBsYW5ndWFnZVxuICAgKiBzZXR0aW5nIGFzIHNwZWNpZmllZCBpbiB0aGUgYnJvd3Nlciwgd2hlbiBkaXNwbGF5aW5nIHRleHR1YWwgaW5mb3JtYXRpb25cbiAgICogc3VjaCBhcyB0aGUgbmFtZXMgZm9yIGNvbnRyb2xzLCBjb3B5cmlnaHQgbm90aWNlcywgZHJpdmluZyBkaXJlY3Rpb25zIGFuZFxuICAgKiBsYWJlbHMgb24gbWFwcy4gSW4gbW9zdCBjYXNlcywgaXQncyBwcmVmZXJhYmxlIHRvIHJlc3BlY3QgdGhlIGJyb3dzZXJcbiAgICogc2V0dGluZy4gSG93ZXZlciwgaWYgeW91IHdhbnQgdGhlIE1hcHMgSmF2YVNjcmlwdCBBUEkgdG8gaWdub3JlIHRoZVxuICAgKiBicm93c2VyJ3MgbGFuZ3VhZ2Ugc2V0dGluZywgeW91IGNhbiBmb3JjZSBpdCB0byBkaXNwbGF5IGluZm9ybWF0aW9uIGluIGFcbiAgICogcGFydGljdWxhciBsYW5ndWFnZSB3aGVuIGxvYWRpbmcgdGhlIE1hcHMgSmF2YVNjcmlwdCBBUEkgY29kZS5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSBsb2NhbGl6ZXMgdGhlIGxhbmd1YWdlIHRvIEphcGFuOlxuICAgKlxuICAgKiBgYGBcbiAgICogY29uc3QgbG9hZGVyID0gTG9hZGVyKHthcGlLZXksIGxhbmd1YWdlOiAnamEnLCByZWdpb246ICdKUCd9KTtcbiAgICogYGBgXG4gICAqXG4gICAqIFNlZSB0aGUgW2xpc3Qgb2Ygc3VwcG9ydGVkXG4gICAqIGxhbmd1YWdlc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9mYXEjbGFuZ3VhZ2VzdXBwb3J0KS4gTm90ZVxuICAgKiB0aGF0IG5ldyBsYW5ndWFnZXMgYXJlIGFkZGVkIG9mdGVuLCBzbyB0aGlzIGxpc3QgbWF5IG5vdCBiZSBleGhhdXN0aXZlLlxuICAgKlxuICAgKi9cbiAgbGFuZ3VhZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaGVuIHlvdSBsb2FkIHRoZSBNYXBzIEphdmFTY3JpcHQgQVBJIGZyb20gbWFwcy5nb29nbGVhcGlzLmNvbSBpdCBhcHBsaWVzIGFcbiAgICogZGVmYXVsdCBiaWFzIGZvciBhcHBsaWNhdGlvbiBiZWhhdmlvciB0b3dhcmRzIHRoZSBVbml0ZWQgU3RhdGVzLiBJZiB5b3VcbiAgICogd2FudCB0byBhbHRlciB5b3VyIGFwcGxpY2F0aW9uIHRvIHNlcnZlIGRpZmZlcmVudCBtYXAgdGlsZXMgb3IgYmlhcyB0aGVcbiAgICogYXBwbGljYXRpb24gKHN1Y2ggYXMgYmlhc2luZyBnZW9jb2RpbmcgcmVzdWx0cyB0b3dhcmRzIHRoZSByZWdpb24pLCB5b3UgY2FuXG4gICAqIG92ZXJyaWRlIHRoaXMgZGVmYXVsdCBiZWhhdmlvciBieSBhZGRpbmcgYSByZWdpb24gcGFyYW1ldGVyIHdoZW4gbG9hZGluZ1xuICAgKiB0aGUgTWFwcyBKYXZhU2NyaXB0IEFQSSBjb2RlLlxuICAgKlxuICAgKiBUaGUgcmVnaW9uIHBhcmFtZXRlciBhY2NlcHRzIFVuaWNvZGUgcmVnaW9uIHN1YnRhZyBpZGVudGlmaWVycyB3aGljaFxuICAgKiAoZ2VuZXJhbGx5KSBoYXZlIGEgb25lLXRvLW9uZSBtYXBwaW5nIHRvIGNvdW50cnkgY29kZSBUb3AtTGV2ZWwgRG9tYWluc1xuICAgKiAoY2NUTERzKS4gTW9zdCBVbmljb2RlIHJlZ2lvbiBpZGVudGlmaWVycyBhcmUgaWRlbnRpY2FsIHRvIElTTyAzMTY2LTFcbiAgICogY29kZXMsIHdpdGggc29tZSBub3RhYmxlIGV4Y2VwdGlvbnMuIEZvciBleGFtcGxlLCBHcmVhdCBCcml0YWluJ3MgY2NUTEQgaXNcbiAgICogXCJ1a1wiIChjb3JyZXNwb25kaW5nIHRvIHRoZSBkb21haW4gLmNvLnVrKSB3aGlsZSBpdHMgcmVnaW9uIGlkZW50aWZpZXIgaXNcbiAgICogXCJHQi5cIlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSwgdGhlIGZvbGxvd2luZyBleGFtcGxlIGxvY2FsaXplcyB0aGUgbWFwIHRvIHRoZSBVbml0ZWQgS2luZ2RvbTpcbiAgICpcbiAgICogYGBgXG4gICAqIGNvbnN0IGxvYWRlciA9IExvYWRlcih7YXBpS2V5LCByZWdpb246ICdHQid9KTtcbiAgICogYGBgXG4gICAqL1xuICByZWdpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBQYXNzaW5nIGBtYXBJZHNgIGlzIG5vIGxvbmdlciByZXF1aXJlZCBpbiB0aGUgc2NyaXB0IHRhZy5cbiAgICovXG4gIG1hcElkcz86IHN0cmluZ1tdO1xuICAvKipcbiAgICogVXNlIGEgY3VzdG9tIHVybCBhbmQgcGF0aCB0byBsb2FkIHRoZSBHb29nbGUgTWFwcyBBUEkgc2NyaXB0LlxuICAgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogVXNlIGEgY3J5cHRvZ3JhcGhpYyBub25jZSBhdHRyaWJ1dGUuXG4gICAqL1xuICBub25jZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2Ygc2NyaXB0IGxvYWQgcmV0cmllcy5cbiAgICovXG4gIHJldHJpZXM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBNYXBzIEpTIGN1c3RvbWVycyBjYW4gY29uZmlndXJlIEhUVFAgUmVmZXJyZXIgUmVzdHJpY3Rpb25zIGluIHRoZSBDbG91ZFxuICAgKiBDb25zb2xlIHRvIGxpbWl0IHdoaWNoIFVSTHMgYXJlIGFsbG93ZWQgdG8gdXNlIGEgcGFydGljdWxhciBBUEkgS2V5LiBCeVxuICAgKiBkZWZhdWx0LCB0aGVzZSByZXN0cmljdGlvbnMgY2FuIGJlIGNvbmZpZ3VyZWQgdG8gYWxsb3cgb25seSBjZXJ0YWluIHBhdGhzXG4gICAqIHRvIHVzZSBhbiBBUEkgS2V5LiBJZiBhbnkgVVJMIG9uIHRoZSBzYW1lIGRvbWFpbiBvciBvcmlnaW4gbWF5IHVzZSB0aGUgQVBJXG4gICAqIEtleSwgeW91IGNhbiBzZXQgYGF1dGhfcmVmZXJyZXJfcG9saWN5PW9yaWdpbmAgdG8gbGltaXQgdGhlIGFtb3VudCBvZiBkYXRhXG4gICAqIHNlbnQgd2hlbiBhdXRob3JpemluZyByZXF1ZXN0cyBmcm9tIHRoZSBNYXBzIEphdmFTY3JpcHQgQVBJLiBUaGlzIGlzXG4gICAqIGF2YWlsYWJsZSBzdGFydGluZyBpbiB2ZXJzaW9uIDMuNDYuIFdoZW4gdGhpcyBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkIGFuZFxuICAgKiBIVFRQIFJlZmVycmVyIFJlc3RyaWN0aW9ucyBhcmUgZW5hYmxlZCBvbiBDbG91ZCBDb25zb2xlLCBNYXBzIEphdmFTY3JpcHRcbiAgICogQVBJIHdpbGwgb25seSBiZSBhYmxlIHRvIGxvYWQgaWYgdGhlcmUgaXMgYW4gSFRUUCBSZWZlcnJlciBSZXN0cmljdGlvbiB0aGF0XG4gICAqIG1hdGNoZXMgdGhlIGN1cnJlbnQgd2Vic2l0ZSdzIGRvbWFpbiB3aXRob3V0IGEgcGF0aCBzcGVjaWZpZWQuXG4gICAqL1xuICBhdXRoUmVmZXJyZXJQb2xpY3k/OiBcIm9yaWdpblwiO1xufVxuXG4vKipcbiAqIFRoZSBzdGF0dXMgb2YgdGhlIFtbTG9hZGVyXV0uXG4gKi9cbmV4cG9ydCBlbnVtIExvYWRlclN0YXR1cyB7XG4gIElOSVRJQUxJWkVELFxuICBMT0FESU5HLFxuICBTVUNDRVNTLFxuICBGQUlMVVJFLFxufVxuXG4vKipcbiAqIFtbTG9hZGVyXV0gbWFrZXMgaXQgZWFzaWVyIHRvIGFkZCBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSSB0byB5b3VyIGFwcGxpY2F0aW9uXG4gKiBkeW5hbWljYWxseSB1c2luZ1xuICogW1Byb21pc2VzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9Qcm9taXNlKS5cbiAqIEl0IHdvcmtzIGJ5IGR5bmFtaWNhbGx5IGNyZWF0aW5nIGFuZCBhcHBlbmRpbmcgYSBzY3JpcHQgbm9kZSB0byB0aGUgdGhlXG4gKiBkb2N1bWVudCBoZWFkIGFuZCB3cmFwcGluZyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gc28gYXMgdG8gcmV0dXJuIGEgcHJvbWlzZS5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXIoe1xuICogICBhcGlLZXk6IFwiXCIsXG4gKiAgIHZlcnNpb246IFwid2Vla2x5XCIsXG4gKiAgIGxpYnJhcmllczogW1wicGxhY2VzXCJdXG4gKiB9KTtcbiAqXG4gKiBsb2FkZXIubG9hZCgpLnRoZW4oKGdvb2dsZSkgPT4ge1xuICogICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKC4uLilcbiAqIH0pXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIExvYWRlciB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBMb2FkZXI7XG4gIC8qKlxuICAgKiBTZWUgW1tMb2FkZXJPcHRpb25zLnZlcnNpb25dXVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZztcbiAgLyoqXG4gICAqIFNlZSBbW0xvYWRlck9wdGlvbnMuYXBpS2V5XV1cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhcGlLZXk6IHN0cmluZztcbiAgLyoqXG4gICAqIFNlZSBbW0xvYWRlck9wdGlvbnMuY2hhbm5lbF1dXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgY2hhbm5lbDogc3RyaW5nO1xuICAvKipcbiAgICogU2VlIFtbTG9hZGVyT3B0aW9ucy5jbGllbnRdXVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGNsaWVudDogc3RyaW5nO1xuICAvKipcbiAgICogU2VlIFtbTG9hZGVyT3B0aW9ucy5pZF1dXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFNlZSBbW0xvYWRlck9wdGlvbnMubGlicmFyaWVzXV1cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBsaWJyYXJpZXM6IExpYnJhcmllcztcbiAgLyoqXG4gICAqIFNlZSBbW0xvYWRlck9wdGlvbnMubGFuZ3VhZ2VdXVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGxhbmd1YWdlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNlZSBbW0xvYWRlck9wdGlvbnMucmVnaW9uXV1cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSByZWdpb246IHN0cmluZztcblxuICAvKipcbiAgICogU2VlIFtbTG9hZGVyT3B0aW9ucy5tYXBJZHNdXVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG1hcElkczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFNlZSBbW0xvYWRlck9wdGlvbnMubm9uY2VdXVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG5vbmNlOiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTZWUgW1tMb2FkZXJPcHRpb25zLnJldHJpZXNdXVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHJldHJpZXM6IG51bWJlcjtcblxuICAvKipcbiAgICogU2VlIFtbTG9hZGVyT3B0aW9ucy51cmxdXVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHVybDogc3RyaW5nO1xuICAvKipcbiAgICogU2VlIFtbTG9hZGVyT3B0aW9ucy5hdXRoUmVmZXJyZXJQb2xpY3ldXVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGF1dGhSZWZlcnJlclBvbGljeTogXCJvcmlnaW5cIjtcblxuICBwcml2YXRlIENBTExCQUNLID0gXCJfX2dvb2dsZU1hcHNDYWxsYmFja1wiO1xuICBwcml2YXRlIGNhbGxiYWNrczogKChlOiBFcnJvckV2ZW50KSA9PiB2b2lkKVtdID0gW107XG4gIHByaXZhdGUgZG9uZSA9IGZhbHNlO1xuICBwcml2YXRlIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBvbmVycm9yRXZlbnQ6IEVycm9yRXZlbnQ7XG4gIHByaXZhdGUgZXJyb3JzOiBFcnJvckV2ZW50W10gPSBbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBMb2FkZXIgdXNpbmcgW1tMb2FkZXJPcHRpb25zXV0uIE5vIGRlZmF1bHRzIGFyZSBzZXRcbiAgICogdXNpbmcgdGhpcyBsaWJyYXJ5LCBpbnN0ZWFkIHRoZSBkZWZhdWx0cyBhcmUgc2V0IGJ5IHRoZSBHb29nbGUgTWFwc1xuICAgKiBKYXZhU2NyaXB0IEFQSSBzZXJ2ZXIuXG4gICAqXG4gICAqIGBgYFxuICAgKiBjb25zdCBsb2FkZXIgPSBMb2FkZXIoe2FwaUtleSwgdmVyc2lvbjogJ3dlZWtseScsIGxpYnJhcmllczogWydwbGFjZXMnXX0pO1xuICAgKiBgYGBcbiAgICovXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBhcGlLZXksXG4gICAgYXV0aFJlZmVycmVyUG9saWN5LFxuICAgIGNoYW5uZWwsXG4gICAgY2xpZW50LFxuICAgIGlkID0gREVGQVVMVF9JRCxcbiAgICBsYW5ndWFnZSxcbiAgICBsaWJyYXJpZXMgPSBbXSxcbiAgICBtYXBJZHMsXG4gICAgbm9uY2UsXG4gICAgcmVnaW9uLFxuICAgIHJldHJpZXMgPSAzLFxuICAgIHVybCA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzXCIsXG4gICAgdmVyc2lvbixcbiAgfTogTG9hZGVyT3B0aW9ucykge1xuICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuICAgIHRoaXMuYXV0aFJlZmVycmVyUG9saWN5ID0gYXV0aFJlZmVycmVyUG9saWN5O1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5pZCA9IGlkIHx8IERFRkFVTFRfSUQ7IC8vIERvIG5vdCBhbGxvdyBlbXB0eSBzdHJpbmdcbiAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgdGhpcy5saWJyYXJpZXMgPSBsaWJyYXJpZXM7XG4gICAgdGhpcy5tYXBJZHMgPSBtYXBJZHM7XG4gICAgdGhpcy5ub25jZSA9IG5vbmNlO1xuICAgIHRoaXMucmVnaW9uID0gcmVnaW9uO1xuICAgIHRoaXMucmV0cmllcyA9IHJldHJpZXM7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcblxuICAgIGlmIChMb2FkZXIuaW5zdGFuY2UpIHtcbiAgICAgIGlmICghaXNFcXVhbCh0aGlzLm9wdGlvbnMsIExvYWRlci5pbnN0YW5jZS5vcHRpb25zKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYExvYWRlciBtdXN0IG5vdCBiZSBjYWxsZWQgYWdhaW4gd2l0aCBkaWZmZXJlbnQgb3B0aW9ucy4gJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICAgICl9ICE9PSAke0pTT04uc3RyaW5naWZ5KExvYWRlci5pbnN0YW5jZS5vcHRpb25zKX1gXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBMb2FkZXIuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgTG9hZGVyLmluc3RhbmNlID0gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb3B0aW9ucygpOiBMb2FkZXJPcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uLFxuICAgICAgYXBpS2V5OiB0aGlzLmFwaUtleSxcbiAgICAgIGNoYW5uZWw6IHRoaXMuY2hhbm5lbCxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIGxpYnJhcmllczogdGhpcy5saWJyYXJpZXMsXG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIHJlZ2lvbjogdGhpcy5yZWdpb24sXG4gICAgICBtYXBJZHM6IHRoaXMubWFwSWRzLFxuICAgICAgbm9uY2U6IHRoaXMubm9uY2UsXG4gICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgYXV0aFJlZmVycmVyUG9saWN5OiB0aGlzLmF1dGhSZWZlcnJlclBvbGljeSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldCBzdGF0dXMoKTogTG9hZGVyU3RhdHVzIHtcbiAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gTG9hZGVyU3RhdHVzLkZBSUxVUkU7XG4gICAgfVxuICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgIHJldHVybiBMb2FkZXJTdGF0dXMuU1VDQ0VTUztcbiAgICB9XG4gICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgcmV0dXJuIExvYWRlclN0YXR1cy5MT0FESU5HO1xuICAgIH1cbiAgICByZXR1cm4gTG9hZGVyU3RhdHVzLklOSVRJQUxJWkVEO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZmFpbGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRvbmUgJiYgIXRoaXMubG9hZGluZyAmJiB0aGlzLmVycm9ycy5sZW5ndGggPj0gdGhpcy5yZXRyaWVzICsgMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVVcmwgcmV0dXJucyB0aGUgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgc2NyaXB0IHVybCBnaXZlbiB0aGUgW1tMb2FkZXJPcHRpb25zXV0uXG4gICAqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVVcmwoKTogc3RyaW5nIHtcbiAgICBsZXQgdXJsID0gdGhpcy51cmw7XG5cbiAgICB1cmwgKz0gYD9jYWxsYmFjaz0ke3RoaXMuQ0FMTEJBQ0t9YDtcblxuICAgIGlmICh0aGlzLmFwaUtleSkge1xuICAgICAgdXJsICs9IGAma2V5PSR7dGhpcy5hcGlLZXl9YDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jaGFubmVsKSB7XG4gICAgICB1cmwgKz0gYCZjaGFubmVsPSR7dGhpcy5jaGFubmVsfWA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2xpZW50KSB7XG4gICAgICB1cmwgKz0gYCZjbGllbnQ9JHt0aGlzLmNsaWVudH1gO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxpYnJhcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICB1cmwgKz0gYCZsaWJyYXJpZXM9JHt0aGlzLmxpYnJhcmllcy5qb2luKFwiLFwiKX1gO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhbmd1YWdlKSB7XG4gICAgICB1cmwgKz0gYCZsYW5ndWFnZT0ke3RoaXMubGFuZ3VhZ2V9YDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWdpb24pIHtcbiAgICAgIHVybCArPSBgJnJlZ2lvbj0ke3RoaXMucmVnaW9ufWA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmVyc2lvbikge1xuICAgICAgdXJsICs9IGAmdj0ke3RoaXMudmVyc2lvbn1gO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1hcElkcykge1xuICAgICAgdXJsICs9IGAmbWFwX2lkcz0ke3RoaXMubWFwSWRzLmpvaW4oXCIsXCIpfWA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0aFJlZmVycmVyUG9saWN5KSB7XG4gICAgICB1cmwgKz0gYCZhdXRoX3JlZmVycmVyX3BvbGljeT0ke3RoaXMuYXV0aFJlZmVycmVyUG9saWN5fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVTY3JpcHQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgaWYgKHNjcmlwdCkge1xuICAgICAgc2NyaXB0LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSSBzY3JpcHQgYW5kIHJldHVybiBhIFByb21pc2UuXG4gICAqL1xuICBwdWJsaWMgbG9hZCgpOiBQcm9taXNlPHR5cGVvZiBnb29nbGU+IHtcbiAgICByZXR1cm4gdGhpcy5sb2FkUHJvbWlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIHNjcmlwdCBhbmQgcmV0dXJuIGEgUHJvbWlzZS5cbiAgICpcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHVibGljIGxvYWRQcm9taXNlKCk6IFByb21pc2U8dHlwZW9mIGdvb2dsZT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmxvYWRDYWxsYmFjaygoZXJyOiBFcnJvckV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgcmVzb2x2ZSh3aW5kb3cuZ29vZ2xlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoZXJyLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgc2NyaXB0IHdpdGggYSBjYWxsYmFjay5cbiAgICovXG4gIHB1YmxpYyBsb2FkQ2FsbGJhY2soZm46IChlOiBFcnJvckV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5jYWxsYmFja3MucHVzaChmbik7XG4gICAgdGhpcy5leGVjdXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzY3JpcHQgb24gZG9jdW1lbnQuXG4gICAqL1xuICBwcml2YXRlIHNldFNjcmlwdCgpOiB2b2lkIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkpIHtcbiAgICAgIC8vIFRPRE8gd3JhcCBvbmVycm9yIGNhbGxiYWNrIGZvciBjYXNlcyB3aGVyZSB0aGUgc2NyaXB0IHdhcyBsb2FkZWQgZWxzZXdoZXJlXG4gICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gdGhpcy5jcmVhdGVVcmwoKTtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIHNjcmlwdC5pZCA9IHRoaXMuaWQ7XG4gICAgc2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgc2NyaXB0Lm9uZXJyb3IgPSB0aGlzLmxvYWRFcnJvckNhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMubm9uY2UpIHtcbiAgICAgIHNjcmlwdC5ub25jZSA9IHRoaXMubm9uY2U7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBsb2FkZXIgc3RhdGUuXG4gICAqL1xuICBwcml2YXRlIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuZGVsZXRlU2NyaXB0KCk7XG4gICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICB0aGlzLm9uZXJyb3JFdmVudCA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0SWZSZXRyeWluZ0ZhaWxlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mYWlsZWQpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRFcnJvckNhbGxiYWNrKGU6IEVycm9yRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmVycm9ycy5wdXNoKGUpO1xuXG4gICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA8PSB0aGlzLnJldHJpZXMpIHtcbiAgICAgIGNvbnN0IGRlbGF5ID0gdGhpcy5lcnJvcnMubGVuZ3RoICogMiAqKiB0aGlzLmVycm9ycy5sZW5ndGg7XG5cbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgRmFpbGVkIHRvIGxvYWQgR29vZ2xlIE1hcHMgc2NyaXB0LCByZXRyeWluZyBpbiAke2RlbGF5fSBtcy5gXG4gICAgICApO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxldGVTY3JpcHQoKTtcbiAgICAgICAgdGhpcy5zZXRTY3JpcHQoKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbmVycm9yRXZlbnQgPSBlO1xuICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2FsbGJhY2soKTogdm9pZCB7XG4gICAgd2luZG93Ll9fZ29vZ2xlTWFwc0NhbGxiYWNrID0gdGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxsYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5jYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgIGNiKHRoaXMub25lcnJvckV2ZW50KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gIH1cblxuICBwcml2YXRlIGV4ZWN1dGUoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldElmUmV0cnlpbmdGYWlsZWQoKTtcblxuICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2hvcnQgY2lyY3VpdCBhbmQgd2FybiBpZiBnb29nbGUubWFwcyBpcyBhbHJlYWR5IGxvYWRlZFxuICAgICAgaWYgKHdpbmRvdy5nb29nbGUgJiYgd2luZG93Lmdvb2dsZS5tYXBzICYmIHdpbmRvdy5nb29nbGUubWFwcy52ZXJzaW9uKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIkdvb2dsZSBNYXBzIGFscmVhZHkgbG9hZGVkIG91dHNpZGUgQGdvb2dsZW1hcHMvanMtYXBpLWxvYWRlci5cIiArXG4gICAgICAgICAgICBcIlRoaXMgbWF5IHJlc3VsdCBpbiB1bmRlc2lyYWJsZSBiZWhhdmlvciBhcyBvcHRpb25zIGFuZCBzY3JpcHQgcGFyYW1ldGVycyBtYXkgbm90IG1hdGNoLlwiXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmcgYnV0IHdhaXRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0Q2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5zZXRTY3JpcHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAZ29vZ2xlbWFwcy9qcy1hcGktbG9hZGVyJztcblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpe1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcbiAgXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG4gIGNvbnN0IHRlbGVwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZWxlcGhvbmUuaW5uZXJUZXh0ID0gXCJDYWxsIHVzICs0OSA5MjEtMDAxLTk4MlwiXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVtYWlsLmlubmVyVGV4dCA9IFwiT3Igc2VuZCB1cyBhbiBlbWFpbCBhdDogVGVzc2ltYUBjb250YWN0LmNvbVwiO1xuICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKVxuICBjYXJkLmFwcGVuZENoaWxkKHRlbGVwaG9uZSlcbiAgY2FyZC5hcHBlbmRDaGlsZChlbWFpbClcbiAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZW1wdHkuaW5uZXJUZXh0ID0gXCIgICBcIlxuICBjYXJkLmFwcGVuZENoaWxkKGVtcHR5KTtcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRyZXNzLmlubmVyVGV4dCA9IFwiQWRkcmVzczpcIlxuICBjYXJkLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBjb25zdCBhZGRyZXNzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRyZXNzMi5pbm5lclRleHQgPSBcIjgxNTUgRm94cnVuIEF2ZS5cIlxuICBjYXJkLmFwcGVuZENoaWxkKGFkZHJlc3MyKTtcbiAgY29uc3QgYWRkcmVzczMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkcmVzczMuaW5uZXJUZXh0ID0gXCJMZXZpdHRvd24sIE5ZIDExNzU2XCJcbiAgY2FyZC5hcHBlbmRDaGlsZChhZGRyZXNzMyk7XG5cbiAgY29uc3QgbG9jYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jYWwuc2V0QXR0cmlidXRlKCdpZCcsICdtYXAnKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChsb2NhbClcbiBcblxuICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyKHtcbiAgICBhcGlLZXk6IFwiXCIsXG4gICAgdmVyc2lvbjogXCJ3ZWVrbHlcIixcbiAgICBsaWJyYXJpZXM6IFtcInBsYWNlc1wiXVxuICB9KTtcblxuICBjb25zdCBtYXBPcHRpb25zID0ge1xuICAgIGNlbnRlcjoge1xuICAgICAgbGF0OiA0MC43ODUsIGxuZzogLTczLjk2OCBcbiAgICB9LFxuICAgIHpvb206IDE2LFxuICB9O1xuICBcbiAgLy8gUHJvbWlzZVxuICBsb2FkZXJcbiAgICAubG9hZCgpXG4gICAgLnRoZW4oKGdvb2dsZSkgPT4ge1xuICAgICAgbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwgbWFwT3B0aW9ucyk7XG4gICAgfSlcbiAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICB9KTtcbiAgXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3Q7XG4iLCJpbXBvcnQgaW1hZ2VQaXp6YSBmcm9tICcuL3BpenphLmpwZydcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xuICBcbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcmVzdGF1cmFudE5hbWUuaW5uZXJUZXh0ID0gXCJCdW9uYXNlcmFcIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcblxuXG4gICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHBhcmExLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byB0aGUgYmVzdCBpdGFsaWFuIHJlc3RhdXJhbnQgb24gdGhlIEVhc3QgQ29hc3QuLi4gbWFueSBzYXkgdGhhdCBpbiB0aGUgd2hvbGUgd29ybGQhXCI7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChwYXJhMSk7XG5cbiAgICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcGFyYTIuaW5uZXJUZXh0ID0gXCJSZXN0YXVyYW50IGlzIGxvY2F0ZWQgbmVhcmJ5IENlbnRyYWwgUGFyayBpbiB0aGUgcXVpZXQgYWxsZXkgd2hlcmUgeW91IGNhbiBlbmpveSB5b3VyIGZvb2QgYW5kIGdvb2QgaXRhbGlhbiBtdXNpY1wiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocGFyYTIpO1xuXG4gICAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gIG15SWNvbi5zcmMgPSBpbWFnZVBpenphO1xuXG4gIGNhcmQuYXBwZW5kQ2hpbGQobXlJY29uKTtcblxuICAgXG4gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZSIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKXtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcbiAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZTIuaW5uZXJUZXh0ID0gXCJQaXp6YXNcIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlMik7XG5cbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJylcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5hbWUuaW5uZXJUZXh0PSBcIlBpenphIEhhdmFuYVwiO1xuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlLmlubmVyVGV4dCA9IFwiMTEkXCI7XG4gICBcbiAgICBpdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQocHJpY2UpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50czEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmdyZWRpZW50czEuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50czEuaW5uZXJUZXh0PVwiUGluZWFwcGxlLCBjb3JuLCBoYW0sIGdvdWRhLCBtdXNocm9vbXNcIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzMSk7XG5cblxuICAgIGNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTIuY2xhc3NMaXN0LmFkZCgnaXRlbScpXG4gICAgY29uc3QgbmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmFtZTIuaW5uZXJUZXh0PSBcIlBpenphIE1hcmdoZXJpdGFcIjtcbiAgICBjb25zdCBwcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJpY2UyLmlubmVyVGV4dCA9IFwiOCRcIjtcbiAgICBpdGVtMi5hcHBlbmRDaGlsZChuYW1lMik7XG4gICAgaXRlbTIuYXBwZW5kQ2hpbGQocHJpY2UyKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW0yKTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnRzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZ3JlZGllbnRzMi5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnRzMi5pbm5lclRleHQ9XCJDaGVlc2UsIHRvbWF0byBzYXVjZSwgb25pb25cIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzMik7XG5cbiAgICBjb25zdCBpdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0zLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxuICAgIGNvbnN0IG5hbWUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5hbWUzLmlubmVyVGV4dD0gXCJQaXp6YSBDYXByaWNpb3NhXCI7XG4gICAgY29uc3QgcHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlMy5pbm5lclRleHQgPSBcIjkkXCI7XG4gICAgaXRlbTMuYXBwZW5kQ2hpbGQobmFtZTMpO1xuICAgIGl0ZW0zLmFwcGVuZENoaWxkKHByaWNlMyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChpdGVtMyk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50czMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmdyZWRpZW50czMuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50czMuaW5uZXJUZXh0PVwiU2FsYW1pLCBHb3VkYSwgRW1tZW50YWxlciwgT25pb25cIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzMyk7XG5cblxuICAgIGNvbnN0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTQuY2xhc3NMaXN0LmFkZCgnaXRlbScpXG4gICAgY29uc3QgbmFtZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmFtZTQuaW5uZXJUZXh0PSBcIlBpenphIFNlYWZvb2RcIjtcbiAgICBjb25zdCBwcmljZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJpY2U0LmlubmVyVGV4dCA9IFwiMTUkXCI7XG4gICAgaXRlbTQuYXBwZW5kQ2hpbGQobmFtZTQpO1xuICAgIGl0ZW00LmFwcGVuZENoaWxkKHByaWNlNCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChpdGVtNCk7XG5cbiAgICAgIGNvbnN0IGluZ3JlZGllbnRzNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZ3JlZGllbnRzNC5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnRzNC5pbm5lclRleHQ9XCJTaHJpbXBzLCBvY3RvcHVzLCBnb3VkYVwiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHM0KTtcblxuICAgIGNvbnN0IGl0ZW01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTUuY2xhc3NMaXN0LmFkZCgnaXRlbScpXG4gICAgY29uc3QgbmFtZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmFtZTUuaW5uZXJUZXh0PSBcIlBpenphIEl0YWxpYW5vXCI7XG4gICAgY29uc3QgcHJpY2U1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlNS5pbm5lclRleHQgPSBcIjEzJFwiO1xuICAgIGl0ZW01LmFwcGVuZENoaWxkKG5hbWU1KTtcbiAgICBpdGVtNS5hcHBlbmRDaGlsZChwcmljZTUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbTUpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudHM1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ncmVkaWVudHM1LmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudHM1LmlubmVyVGV4dD1cIlRvbWF0b2VzLCBydWNvbGEsIG1vemFyZWxsYSwgcHJvc2NpdXR0byBjcnVkb1wiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHM1KTtcbiAgICBcbiAgICBjb25zdCBpdGVtNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW02LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxuICAgIGNvbnN0IG5hbWU2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5hbWU2LmlubmVyVGV4dD0gXCJQaXp6YSBOZWFwb2xpdGFuYVwiO1xuICAgIGNvbnN0IHByaWNlNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcmljZTYuaW5uZXJUZXh0ID0gXCIxMiRcIjtcbiAgICBpdGVtNi5hcHBlbmRDaGlsZChuYW1lNik7XG4gICAgaXRlbTYuYXBwZW5kQ2hpbGQocHJpY2U2KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW02KTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnRzNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZ3JlZGllbnRzNi5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnRzNi5pbm5lclRleHQ9XCJNb3phcmVsbGEsIHByb3NjaXV0dG8gY3J1ZG9cIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzNik7XG5cbiAgICBjb25zdCB0aXRsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlMy5pbm5lclRleHQgPSBcIkJ1cmdlcnNcIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlMyk7XG5cbiAgICBjb25zdCBpdGVtNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW03LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxuICAgIGNvbnN0IG5hbWU3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5hbWU3LmlubmVyVGV4dD0gXCJEb24gQ29ybGVvbmUgLSBzcGljeVwiO1xuICAgIGNvbnN0IHByaWNlNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcmljZTcuaW5uZXJUZXh0ID0gXCIxNCRcIjtcbiAgICBpdGVtNy5hcHBlbmRDaGlsZChuYW1lNyk7XG4gICAgaXRlbTcuYXBwZW5kQ2hpbGQocHJpY2U3KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW03KTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnRzNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZ3JlZGllbnRzNy5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnRzNy5pbm5lclRleHQ9XCIyMDBnIGJlZWYsIGNyaXNweSBvbmlvbiwgamFsYXBlbm8gc2F1Y2UsIHRvbWF0b2VzLCBzYWxhZFwiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHM3KTtcblxuXG4gICAgY29uc3QgaXRlbTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtOC5jbGFzc0xpc3QuYWRkKCdpdGVtJylcbiAgICBjb25zdCBuYW1lOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBuYW1lOC5pbm5lclRleHQ9IFwiTWFyaWFubyBJdGFsaWFub1wiO1xuICAgIGNvbnN0IHByaWNlOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcmljZTguaW5uZXJUZXh0ID0gXCIxNCRcIjtcbiAgICBpdGVtOC5hcHBlbmRDaGlsZChuYW1lOCk7XG4gICAgaXRlbTguYXBwZW5kQ2hpbGQocHJpY2U4KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW04KTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnRzOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZ3JlZGllbnRzOC5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnRzOC5pbm5lclRleHQ9XCIyMDBnIGJlZWYsIHJlZCBvbmlvbiwgcnVjb2xhLCBwcm9zY2l1dHRvLCBzYWxhZFwiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHM4KTtcblxuICAgIGNvbnN0IGl0ZW05ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTkuY2xhc3NMaXN0LmFkZCgnaXRlbScpXG4gICAgY29uc3QgbmFtZTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmFtZTkuaW5uZXJUZXh0PSBcIlBhcGEgQW1lcmljYW5vXCI7XG4gICAgY29uc3QgcHJpY2U5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlOS5pbm5lclRleHQgPSBcIjE2JFwiO1xuICAgIGl0ZW05LmFwcGVuZENoaWxkKG5hbWU5KTtcbiAgICBpdGVtOS5hcHBlbmRDaGlsZChwcmljZTkpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbTkpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudHM5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ncmVkaWVudHM5LmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudHM5LmlubmVyVGV4dD1cIjIwMGcgYmVlZiwgIG9uaW9uLCAyIHNsaWNlcyBiYWNvbiwgZW1tZW50YWxlciwgQkJRIHNhdWNlXCI7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChpbmdyZWRpZW50czkpO1xuXG4gICAgY29uc3QgdGl0bGU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZTQuaW5uZXJUZXh0ID0gXCJCZXZlcmFnZXNcIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlNCk7XG5cbiAgICBjb25zdCBpdGVtMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtMTAuY2xhc3NMaXN0LmFkZCgnaXRlbScpXG4gICAgY29uc3QgbmFtZTEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5hbWUxMC5pbm5lclRleHQ9IFwiV2F0ZXJcIjtcbiAgICBjb25zdCBwcmljZTEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlMTAuaW5uZXJUZXh0ID0gXCIxJFwiO1xuICAgIGl0ZW0xMC5hcHBlbmRDaGlsZChuYW1lMTApO1xuICAgIGl0ZW0xMC5hcHBlbmRDaGlsZChwcmljZTEwKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW0xMCk7XG5cblxuICAgIGNvbnN0IGl0ZW0xMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0xMS5jbGFzc0xpc3QuYWRkKCdpdGVtJylcbiAgICBjb25zdCBuYW1lMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmFtZTExLmlubmVyVGV4dD0gXCJUZWFcIjtcbiAgICBjb25zdCBwcmljZTExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaWNlMTEuaW5uZXJUZXh0ID0gXCIxJFwiO1xuICAgIGl0ZW0xMS5hcHBlbmRDaGlsZChuYW1lMTEpO1xuICAgIGl0ZW0xMS5hcHBlbmRDaGlsZChwcmljZTExKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW0xMSk7XG4gICAgXG4gICAgY29uc3QgaXRlbTEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTEyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxuICAgIGNvbnN0IG5hbWUxMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBuYW1lMTIuaW5uZXJUZXh0PSBcIldoaXRlIElQQVwiO1xuICAgIGNvbnN0IHByaWNlMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJpY2UxMi5pbm5lclRleHQgPSBcIjEkXCI7XG4gICAgaXRlbTEyLmFwcGVuZENoaWxkKG5hbWUxMik7XG4gICAgaXRlbTEyLmFwcGVuZENoaWxkKHByaWNlMTIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbTEyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudSIsImltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gJy4vY29udGFjdCdcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudSdcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZSdcblxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuY2xhc3NOYW1lID0gXCJuYXZcIjtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICByZW1vdmVDaGlsZHMoKTtcbiAgICAgICAgY3JlYXRlSG9tZSgpO1xuICAgICAgfSk7XG4gICAgaG9tZS5pbm5lclRleHQgPSAnSE9NRSdcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICByZW1vdmVDaGlsZHMoKTtcbiAgICAgICAgY3JlYXRlTWVudSgpO1xuICAgICAgfSk7XG4gICAgbWVudS5pbm5lclRleHQ9J01FTlUnXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICBob21lLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICAgICAgcmVtb3ZlQ2hpbGRzKCk7XG4gICAgICAgIGNyZWF0ZUNvbnRhY3QoKTtcblxuICAgICAgfSk7XG4gICAgY29udGFjdC5pbm5lclRleHQ9XCJDT05UQUNUXCJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTmFtZT0nbWFpbic7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgcmV0dXJuIG1haW5cbn1cblxuXG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgY3JlYXRlSG9tZSgpXG4gICAgXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDaGlsZHMoKXtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcbiAgICB3aGlsZSAoY2FyZC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoY2FyZC5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICB9XG5cblxuXG5cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL3dlYnNpdGVcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cbmluaXRpYWxpemVXZWJzaXRlKCk7Il0sIm5hbWVzIjpbImlzRXF1YWwiXSwic291cmNlUm9vdCI6IiJ9