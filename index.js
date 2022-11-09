"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["index"],{

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./victoria-shes-UC0HZdUitWY-unsplash.jpg */ "./src/victoria-shes-UC0HZdUitWY-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-footer-border: 2px solid rgba(0, 0, 0, 0.678);\n    --main-color: rgba(12, 0, 0, 0.377);\n}\n\nbody {\n    font-family: 'Fira Sans', sans-serif;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n\n#background {\n    position: fixed;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.container {\n    position: fixed;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(12, 0, 0, 0.377);\n}\n\n#nav {\n    display: grid;\n    width: 50%;\n    font-size: 1.3em;\n    color: rgb(255, 255, 255);\n    font-weight: bolder;\n    margin: 0 auto;\n    grid-template-columns: repeat(3, minmax(50px, 1fr));\n    text-align: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.menu {\n    padding: 5px;\n    margin: 50px 10px 0 0;\n    transition-duration: .3s;\n}\n.menu:hover {\n    scale: 1.4;\n    cursor: pointer;\n}\n.selected {\n    scale: 1.4;\n    text-decoration: underline;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    flex: auto;\n    justify-content: center;\n    color: rgb(255, 255, 255);\n    font-weight: bolder;\n    text-align: center;\n    margin-top: 100px;\n}\n#content #title {\n    font-size: 8rem;\n    font-family: 'Dancing Script', cursive;\n}\n#content #description {\n    position: relative;\n    color: rgb(255, 255, 255);\n    font-size: 3rem;\n    font-weight: bolder;\n    opacity: 0;\n}\n#content button {\n    padding: 25px;\n    color: white;\n    font-size: 2rem;\n    outline: none;\n    border:rgba(0, 0, 0, 0.678);\n    background-color: rgba(0, 0, 0, 0.25);\n    margin-top: 50px;\n    transition-duration: .3s;\n    border-radius: 5px;\n}\n#content button:hover {\n    background-color: rgba(105, 155, 189, 0.411);\n\n}\n#newContent {\n    width: 90%;\n    margin: 0 auto;\n    font-size: 1.5em;\n}\n\n@media only screen and (max-width: 750px) {\n    #content #title {\n        font-size: 4rem;\n\n    }\n    #content #description {\n        font-size: 2rem;\n\n    }\n    #content button {\n        font-size: 1em;;\n    }\n}\n\n.startAnimationRight {\n    animation: swipeRight .4s 1;\n    animation-fill-mode: forwards;\n}\n.startAnimationLeft {\n    animation: swipeLeft .4s 1;\n    animation-fill-mode: backwards;\n}\n.fadeIn {\n    animation: fadeIn .4s 1;\n    animation-delay: 1500ms;\n    animation-fill-mode: forwards;\n}\n\n@keyframes swipeRight {\n    0% { left: 0; }\n    100% { left: 150% }\n}\n@keyframes swipeLeft {\n    0% { left: 150%; }\n    100% { left: 0; }\n}\n@keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    \n    100% {\n      opacity: 100%;\n    }\n  }\n  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sDAAsD;IACtD,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;IACpC,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,WAAW;IACX,YAAY;IACZ,mDAA2D;IAC3D,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,UAAU;IACV,WAAW;IACX,YAAY;IACZ,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,UAAU;IACV,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,cAAc;IACd,mDAAmD;IACnD,kBAAkB;IAClB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,wBAAwB;AAC5B;AACA;IACI,UAAU;IACV,eAAe;AACnB;AACA;IACI,UAAU;IACV,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,UAAU;IACV,uBAAuB;IACvB,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,sCAAsC;AAC1C;AACA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;IACf,mBAAmB;IACnB,UAAU;AACd;AACA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;IACf,aAAa;IACb,2BAA2B;IAC3B,qCAAqC;IACrC,gBAAgB;IAChB,wBAAwB;IACxB,kBAAkB;AACtB;AACA;IACI,4CAA4C;;AAEhD;AACA;IACI,UAAU;IACV,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI;QACI,eAAe;;IAEnB;IACA;QACI,eAAe;;IAEnB;IACA;QACI,cAAc;IAClB;AACJ;;AAEA;IACI,2BAA2B;IAC3B,6BAA6B;AACjC;AACA;IACI,0BAA0B;IAC1B,8BAA8B;AAClC;AACA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,KAAK,OAAO,EAAE;IACd,OAAO,WAAW;AACtB;AACA;IACI,KAAK,UAAU,EAAE;IACjB,OAAO,OAAO,EAAE;AACpB;AACA;IACI;MACE,UAAU;IACZ;;IAEA;MACE,aAAa;IACf;EACF","sourcesContent":[":root {\n    --header-footer-border: 2px solid rgba(0, 0, 0, 0.678);\n    --main-color: rgba(12, 0, 0, 0.377);\n}\n\nbody {\n    font-family: 'Fira Sans', sans-serif;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n\n#background {\n    position: fixed;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    background: url('./victoria-shes-UC0HZdUitWY-unsplash.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.container {\n    position: fixed;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(12, 0, 0, 0.377);\n}\n\n#nav {\n    display: grid;\n    width: 50%;\n    font-size: 1.3em;\n    color: rgb(255, 255, 255);\n    font-weight: bolder;\n    margin: 0 auto;\n    grid-template-columns: repeat(3, minmax(50px, 1fr));\n    text-align: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.menu {\n    padding: 5px;\n    margin: 50px 10px 0 0;\n    transition-duration: .3s;\n}\n.menu:hover {\n    scale: 1.4;\n    cursor: pointer;\n}\n.selected {\n    scale: 1.4;\n    text-decoration: underline;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    flex: auto;\n    justify-content: center;\n    color: rgb(255, 255, 255);\n    font-weight: bolder;\n    text-align: center;\n    margin-top: 100px;\n}\n#content #title {\n    font-size: 8rem;\n    font-family: 'Dancing Script', cursive;\n}\n#content #description {\n    position: relative;\n    color: rgb(255, 255, 255);\n    font-size: 3rem;\n    font-weight: bolder;\n    opacity: 0;\n}\n#content button {\n    padding: 25px;\n    color: white;\n    font-size: 2rem;\n    outline: none;\n    border:rgba(0, 0, 0, 0.678);\n    background-color: rgba(0, 0, 0, 0.25);\n    margin-top: 50px;\n    transition-duration: .3s;\n    border-radius: 5px;\n}\n#content button:hover {\n    background-color: rgba(105, 155, 189, 0.411);\n\n}\n#newContent {\n    width: 90%;\n    margin: 0 auto;\n    font-size: 1.5em;\n}\n\n@media only screen and (max-width: 750px) {\n    #content #title {\n        font-size: 4rem;\n\n    }\n    #content #description {\n        font-size: 2rem;\n\n    }\n    #content button {\n        font-size: 1em;;\n    }\n}\n\n.startAnimationRight {\n    animation: swipeRight .4s 1;\n    animation-fill-mode: forwards;\n}\n.startAnimationLeft {\n    animation: swipeLeft .4s 1;\n    animation-fill-mode: backwards;\n}\n.fadeIn {\n    animation: fadeIn .4s 1;\n    animation-delay: 1500ms;\n    animation-fill-mode: forwards;\n}\n\n@keyframes swipeRight {\n    0% { left: 0; }\n    100% { left: 150% }\n}\n@keyframes swipeLeft {\n    0% { left: 150%; }\n    100% { left: 0; }\n}\n@keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    \n    100% {\n      opacity: 100%;\n    }\n  }\n  "],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutTab": () => (/* binding */ aboutTab)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



function aboutTab() {
    setTimeout(() => {
        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOMElements.description.innerHTML = "About Us"
        const createDiv = document.createElement('div')
        createDiv.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOMElements.newContent.append(createDiv)
    }, 100);

}



/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactTab": () => (/* binding */ contactTab)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



function contactTab() {
    setTimeout(() => {
        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOMElements.description.innerHTML = "Contact Us"
        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOMElements.newContent.innerHTML = "Example Form goes here"
    }, 100);

}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMElements": () => (/* binding */ DOMElements)
/* harmony export */ });
const DOMElements = {
    about: document.getElementById('about'),
    menu: document.getElementById('menu'),
    contact: document.getElementById('contact'),
    content: document.getElementById('content'),
    description: document.getElementById('description'),
    callToAction: document.getElementById('callToAction'),
    title: document.getElementById('title'),
    newContent: document.getElementById('newContent'),
    about: document.getElementById('about'),
    menu: document.getElementById('menu'),
    contact: document.getElementById('contact')
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuHandler": () => (/* binding */ menuHandler)
/* harmony export */ });
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







function menuHandler(e) {
    if(_dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.contains('startAnimationRight') && !_dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.toggle('startAnimationLeft')) {
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.toggle('startAnimationLeft')
    }
    if(_dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.contains('startAnimationLeft') && !_dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.toggle('startAnimationRight')) {
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.toggle('startAnimationRight')
    }
    if(_dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.contains('startAnimationLeft') && _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.contains('startAnimationRight')) {
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.toggle('startAnimationRight')
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.toggle('startAnimationLeft')
        setTimeout(() => {
            _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.toggle('startAnimationRight')
            setTimeout(() => {
                _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.toggle('startAnimationLeft')
            }, 600);
        }, 600);
    }
    if(!_dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.contains('startAnimationRight') || !_dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.toggle('startAnimationLeft')) {
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.toggle('startAnimationRight')
        setTimeout(() => {
            _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.content.classList.toggle('startAnimationLeft')
        }, 600);
    }
    if(e.target.id === 'about') {
        e.target.classList.add('selected')
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.menu.classList.remove('selected')
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.contact.classList.remove('selected')
    }
    if(e.target.id === 'menu') {
        e.target.classList.add('selected')
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.about.classList.remove('selected')
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.contact.classList.remove('selected')
    }
    if(e.target.id === 'contact') {
        e.target.classList.add('selected')
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.menu.classList.remove('selected')
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.about.classList.remove('selected')
    }
}

_dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.about.addEventListener('click', (e) => {
    menuHandler(e)
    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.aboutTab)()
})
_dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.menu.addEventListener('click', (e) => {
    menuHandler(e)
    ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuTab)()
})
_dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.contact.addEventListener('click', (e) => {
    menuHandler(e)
    ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactTab)()
})
_dom_js__WEBPACK_IMPORTED_MODULE_3__.DOMElements.callToAction.addEventListener('click', (e) => {
    menuHandler(e)
    ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactTab)()
})





/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuTab": () => (/* binding */ menuTab)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



function menuTab() {
    setTimeout(() => {
        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOMElements.description.innerHTML = "Our Menu"
        _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOMElements.newContent.innerHTML = "Example Menu goes Here"
    }, 100);
}



/***/ }),

/***/ "./src/victoria-shes-UC0HZdUitWY-unsplash.jpg":
/*!****************************************************!*\
  !*** ./src/victoria-shes-UC0HZdUitWY-unsplash.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d58c8cb6d1fbd1464871.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQztBQUM3RyxRQUFRLHlFQUFvQztBQUM1QztBQUNBLE9BQU8sMkVBQXNDLDJCQUEyQix5RUFBb0M7QUFDNUcsUUFBUSx5RUFBb0M7QUFDNUM7QUFDQSxPQUFPLDJFQUFzQywwQkFBMEIsMkVBQXNDO0FBQzdHLFFBQVEseUVBQW9DO0FBQzVDLFFBQVEseUVBQW9DO0FBQzVDO0FBQ0EsWUFBWSx5RUFBb0M7QUFDaEQ7QUFDQSxnQkFBZ0IseUVBQW9DO0FBQ3BELGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxRQUFRLDJFQUFzQyw0QkFBNEIseUVBQW9DO0FBQzlHLFFBQVEseUVBQW9DO0FBQzVDO0FBQ0EsWUFBWSx5RUFBb0M7QUFDaEQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQWlDO0FBQ3pDLFFBQVEseUVBQW9DO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQWtDO0FBQzFDLFFBQVEseUVBQW9DO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQWlDO0FBQ3pDLFFBQVEsdUVBQWtDO0FBQzFDO0FBQ0E7O0FBRUEsdUVBQWtDO0FBQ2xDO0FBQ0EsSUFBSSxvREFBUTtBQUNaLENBQUM7QUFDRCxzRUFBaUM7QUFDakM7QUFDQSxJQUFJLGtEQUFPO0FBQ1gsQ0FBQztBQUNELHlFQUFvQztBQUNwQztBQUNBLElBQUksd0RBQVU7QUFDZCxDQUFDO0FBQ0QsOEVBQXlDO0FBQ3pDO0FBQ0EsSUFBSSx3REFBVTtBQUNkLENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRWtCO0FBQ0Q7O0FBRXJDO0FBQ0E7QUFDQSxRQUFRLHNFQUFpQztBQUN6QyxRQUFRLHFFQUFnQztBQUN4QyxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3ZpY3RvcmlhLXNoZXMtVUMwSFpkVWl0V1ktdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWhlYWRlci1mb290ZXItYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjY3OCk7XFxuICAgIC0tbWFpbi1jb2xvcjogcmdiYSgxMiwgMCwgMCwgMC4zNzcpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNiYWNrZ3JvdW5kIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMiwgMCwgMCwgMC4zNzcpO1xcbn1cXG5cXG4jbmF2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg1MHB4LCAxZnIpKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiA1MHB4IDEwcHggMCAwO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XFxufVxcbi5tZW51OmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuNDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2VsZWN0ZWQge1xcbiAgICBzY2FsZTogMS40O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG4jY29udGVudCAjdGl0bGUge1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbn1cXG4jY29udGVudCAjZGVzY3JpcHRpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuI2NvbnRlbnQgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjpyZ2JhKDAsIDAsIDAsIDAuNjc4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbiNjb250ZW50IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA1LCAxNTUsIDE4OSwgMC40MTEpO1xcblxcbn1cXG4jbmV3Q29udGVudCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgICNjb250ZW50ICN0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuXFxuICAgIH1cXG4gICAgI2NvbnRlbnQgI2Rlc2NyaXB0aW9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gICAgfVxcbiAgICAjY29udGVudCBidXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxZW07O1xcbiAgICB9XFxufVxcblxcbi5zdGFydEFuaW1hdGlvblJpZ2h0IHtcXG4gICAgYW5pbWF0aW9uOiBzd2lwZVJpZ2h0IC40cyAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuLnN0YXJ0QW5pbWF0aW9uTGVmdCB7XFxuICAgIGFuaW1hdGlvbjogc3dpcGVMZWZ0IC40cyAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XFxufVxcbi5mYWRlSW4ge1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAuNHMgMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxNTAwbXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHN3aXBlUmlnaHQge1xcbiAgICAwJSB7IGxlZnQ6IDA7IH1cXG4gICAgMTAwJSB7IGxlZnQ6IDE1MCUgfVxcbn1cXG5Aa2V5ZnJhbWVzIHN3aXBlTGVmdCB7XFxuICAgIDAlIHsgbGVmdDogMTUwJTsgfVxcbiAgICAxMDAlIHsgbGVmdDogMDsgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIFxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB9XFxuICB9XFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0RBQXNEO0lBQ3RELG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixtREFBMkQ7SUFDM0Qsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxtREFBbUQ7SUFDbkQsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDViwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRDQUE0Qzs7QUFFaEQ7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxlQUFlOztJQUVuQjtJQUNBO1FBQ0ksZUFBZTs7SUFFbkI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksS0FBSyxPQUFPLEVBQUU7SUFDZCxPQUFPLFdBQVc7QUFDdEI7QUFDQTtJQUNJLEtBQUssVUFBVSxFQUFFO0lBQ2pCLE9BQU8sT0FBTyxFQUFFO0FBQ3BCO0FBQ0E7SUFDSTtNQUNFLFVBQVU7SUFDWjs7SUFFQTtNQUNFLGFBQWE7SUFDZjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1oZWFkZXItZm9vdGVyLWJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42NzgpO1xcbiAgICAtLW1haW4tY29sb3I6IHJnYmEoMTIsIDAsIDAsIDAuMzc3KTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jYmFja2dyb3VuZCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi92aWN0b3JpYS1zaGVzLVVDMEhaZFVpdFdZLXVuc3BsYXNoLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCAwLCAwLCAwLjM3Nyk7XFxufVxcblxcbiNuYXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDUwcHgsIDFmcikpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5tZW51IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDUwcHggMTBweCAwIDA7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcXG59XFxuLm1lbnU6aG92ZXIge1xcbiAgICBzY2FsZTogMS40O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zZWxlY3RlZCB7XFxuICAgIHNjYWxlOiAxLjQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcbiNjb250ZW50ICN0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxufVxcbiNjb250ZW50ICNkZXNjcmlwdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4jY29udGVudCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOnJnYmEoMCwgMCwgMCwgMC42NzgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI2NvbnRlbnQgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDUsIDE1NSwgMTg5LCAwLjQxMSk7XFxuXFxufVxcbiNuZXdDb250ZW50IHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgI2NvbnRlbnQgI3RpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG5cXG4gICAgfVxcbiAgICAjY29udGVudCAjZGVzY3JpcHRpb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgICB9XFxuICAgICNjb250ZW50IGJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDFlbTs7XFxuICAgIH1cXG59XFxuXFxuLnN0YXJ0QW5pbWF0aW9uUmlnaHQge1xcbiAgICBhbmltYXRpb246IHN3aXBlUmlnaHQgLjRzIDE7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG4uc3RhcnRBbmltYXRpb25MZWZ0IHtcXG4gICAgYW5pbWF0aW9uOiBzd2lwZUxlZnQgLjRzIDE7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcXG59XFxuLmZhZGVJbiB7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIC40cyAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDE1MDBtcztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc3dpcGVSaWdodCB7XFxuICAgIDAlIHsgbGVmdDogMDsgfVxcbiAgICAxMDAlIHsgbGVmdDogMTUwJSB9XFxufVxcbkBrZXlmcmFtZXMgc3dpcGVMZWZ0IHtcXG4gICAgMCUgeyBsZWZ0OiAxNTAlOyB9XFxuICAgIDEwMCUgeyBsZWZ0OiAwOyB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgXFxuICAgIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIH1cXG4gIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBET01FbGVtZW50cyB9IGZyb20gXCIuL2RvbS5qc1wiXG5pbXBvcnQge3N3aXBlUmlnaHR9IGZyb20gJy4vaW5kZXguanMnXG5cbmZ1bmN0aW9uIGFib3V0VGFiKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBET01FbGVtZW50cy5kZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkFib3V0IFVzXCJcbiAgICAgICAgY29uc3QgY3JlYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY3JlYXRlRGl2LnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCJcbiAgICAgICAgRE9NRWxlbWVudHMubmV3Q29udGVudC5hcHBlbmQoY3JlYXRlRGl2KVxuICAgIH0sIDEwMCk7XG5cbn1cblxuZXhwb3J0IHsgYWJvdXRUYWIgfSIsImltcG9ydCB7IERPTUVsZW1lbnRzIH0gZnJvbSBcIi4vZG9tLmpzXCJcbmltcG9ydCB7c3dpcGVSaWdodH0gZnJvbSAnLi9pbmRleC5qcydcblxuZnVuY3Rpb24gY29udGFjdFRhYigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgRE9NRWxlbWVudHMuZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJDb250YWN0IFVzXCJcbiAgICAgICAgRE9NRWxlbWVudHMubmV3Q29udGVudC5pbm5lckhUTUwgPSBcIkV4YW1wbGUgRm9ybSBnb2VzIGhlcmVcIlxuICAgIH0sIDEwMCk7XG5cbn1cblxuZXhwb3J0IHsgY29udGFjdFRhYiB9IiwiY29uc3QgRE9NRWxlbWVudHMgPSB7XG4gICAgYWJvdXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpLFxuICAgIG1lbnU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JyksXG4gICAgY29udGFjdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKSxcbiAgICBjb250ZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLFxuICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKSxcbiAgICBjYWxsVG9BY3Rpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWxsVG9BY3Rpb24nKSxcbiAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyksXG4gICAgbmV3Q29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0NvbnRlbnQnKSxcbiAgICBhYm91dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0JyksXG4gICAgbWVudTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKSxcbiAgICBjb250YWN0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXG59XG5cbmV4cG9ydCB7IERPTUVsZW1lbnRzIH0iLCJpbXBvcnQgeyBhYm91dFRhYiB9IGZyb20gXCIuL2Fib3V0LmpzXCJcbmltcG9ydCB7IG1lbnVUYWIgfSBmcm9tIFwiLi9tZW51LmpzXCJcbmltcG9ydCB7IGNvbnRhY3RUYWIgfSBmcm9tIFwiLi9jb250YWN0LmpzXCJcbmltcG9ydCB7IERPTUVsZW1lbnRzIH0gZnJvbSBcIi4vZG9tLmpzXCJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cblxuZnVuY3Rpb24gbWVudUhhbmRsZXIoZSkge1xuICAgIGlmKERPTUVsZW1lbnRzLmNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFydEFuaW1hdGlvblJpZ2h0JykgJiYgIURPTUVsZW1lbnRzLmNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhcnRBbmltYXRpb25MZWZ0JykpIHtcbiAgICAgICAgRE9NRWxlbWVudHMuY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdzdGFydEFuaW1hdGlvbkxlZnQnKVxuICAgIH1cbiAgICBpZihET01FbGVtZW50cy5jb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnc3RhcnRBbmltYXRpb25MZWZ0JykgJiYgIURPTUVsZW1lbnRzLmNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhcnRBbmltYXRpb25SaWdodCcpKSB7XG4gICAgICAgIERPTUVsZW1lbnRzLmNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhcnRBbmltYXRpb25SaWdodCcpXG4gICAgfVxuICAgIGlmKERPTUVsZW1lbnRzLmNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFydEFuaW1hdGlvbkxlZnQnKSAmJiBET01FbGVtZW50cy5jb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnc3RhcnRBbmltYXRpb25SaWdodCcpKSB7XG4gICAgICAgIERPTUVsZW1lbnRzLmNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhcnRBbmltYXRpb25SaWdodCcpXG4gICAgICAgIERPTUVsZW1lbnRzLmNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhcnRBbmltYXRpb25MZWZ0JylcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBET01FbGVtZW50cy5jb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ3N0YXJ0QW5pbWF0aW9uUmlnaHQnKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRE9NRWxlbWVudHMuY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdzdGFydEFuaW1hdGlvbkxlZnQnKVxuICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgfSwgNjAwKTtcbiAgICB9XG4gICAgaWYoIURPTUVsZW1lbnRzLmNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFydEFuaW1hdGlvblJpZ2h0JykgfHwgIURPTUVsZW1lbnRzLmNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhcnRBbmltYXRpb25MZWZ0JykpIHtcbiAgICAgICAgRE9NRWxlbWVudHMuY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdzdGFydEFuaW1hdGlvblJpZ2h0JylcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBET01FbGVtZW50cy5jb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ3N0YXJ0QW5pbWF0aW9uTGVmdCcpXG4gICAgICAgIH0sIDYwMCk7XG4gICAgfVxuICAgIGlmKGUudGFyZ2V0LmlkID09PSAnYWJvdXQnKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgICAgRE9NRWxlbWVudHMubWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgICAgIERPTUVsZW1lbnRzLmNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgIH1cbiAgICBpZihlLnRhcmdldC5pZCA9PT0gJ21lbnUnKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgICAgRE9NRWxlbWVudHMuYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICAgICBET01FbGVtZW50cy5jb250YWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICB9XG4gICAgaWYoZS50YXJnZXQuaWQgPT09ICdjb250YWN0Jykge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAgIERPTUVsZW1lbnRzLm1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICAgICBET01FbGVtZW50cy5hYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgfVxufVxuXG5ET01FbGVtZW50cy5hYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbWVudUhhbmRsZXIoZSlcbiAgICBhYm91dFRhYigpXG59KVxuRE9NRWxlbWVudHMubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbWVudUhhbmRsZXIoZSlcbiAgICBtZW51VGFiKClcbn0pXG5ET01FbGVtZW50cy5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBtZW51SGFuZGxlcihlKVxuICAgIGNvbnRhY3RUYWIoKVxufSlcbkRPTUVsZW1lbnRzLmNhbGxUb0FjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbWVudUhhbmRsZXIoZSlcbiAgICBjb250YWN0VGFiKClcbn0pXG5cbmV4cG9ydCB7bWVudUhhbmRsZXJ9XG5cbiIsImltcG9ydCB7IERPTUVsZW1lbnRzIH0gZnJvbSBcIi4vZG9tLmpzXCJcbmltcG9ydCB7c3dpcGVSaWdodH0gZnJvbSAnLi9pbmRleC5qcydcblxuZnVuY3Rpb24gbWVudVRhYigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgRE9NRWxlbWVudHMuZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJPdXIgTWVudVwiXG4gICAgICAgIERPTUVsZW1lbnRzLm5ld0NvbnRlbnQuaW5uZXJIVE1MID0gXCJFeGFtcGxlIE1lbnUgZ29lcyBIZXJlXCJcbiAgICB9LCAxMDApO1xufVxuXG5leHBvcnQgeyBtZW51VGFiIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=