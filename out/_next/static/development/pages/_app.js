(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/_app.js"],{

/***/ "./assets/solarized-light.css":
/*!************************************!*\
  !*** ./assets/solarized-light.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./solarized-light.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./assets/solarized-light.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./solarized-light.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./assets/solarized-light.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./solarized-light.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./assets/solarized-light.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./assets/styles.css":
/*!***************************!*\
  !*** ./assets/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./assets/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./assets/styles.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./assets/styles.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./assets/solarized-light.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./assets/solarized-light.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/*\n\nOrginal Style from ethanschoonover.com/solarized (c) Jeremy Hull <sourdrums@gmail.com>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #fdf6e3;\n  color: #657b83;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #93a1a1;\n}\n\n/* Solarized Green */\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-addition {\n  color: #859900;\n}\n\n/* Solarized Cyan */\n.hljs-number,\n.hljs-string,\n.hljs-meta .hljs-meta-string,\n.hljs-literal,\n.hljs-doctag,\n.hljs-regexp {\n  color: #2aa198;\n}\n\n/* Solarized Blue */\n.hljs-title,\n.hljs-section,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #268bd2;\n}\n\n/* Solarized Yellow */\n.hljs-attribute,\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-class .hljs-title,\n.hljs-type {\n  color: #b58900;\n}\n\n/* Solarized Orange */\n.hljs-symbol,\n.hljs-bullet,\n.hljs-subst,\n.hljs-meta,\n.hljs-meta .hljs-keyword,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-link {\n  color: #cb4b16;\n}\n\n/* Solarized Red */\n.hljs-built_in,\n.hljs-deletion {\n  color: #dc322f;\n}\n\n.hljs-formula {\n  background: #eee8d5;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n", "",{"version":3,"sources":["/Users/zhouyang/CodeZone/wordog/assets/solarized-light.css"],"names":[],"mappings":"AAAA;;;;CAIC;;AAED;EACE,cAAc;EACd,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;AAEA,oBAAoB;AACpB;;;EAGE,cAAc;AAChB;;AAEA,mBAAmB;AACnB;;;;;;EAME,cAAc;AAChB;;AAEA,mBAAmB;AACnB;;;;;EAKE,cAAc;AAChB;;AAEA,qBAAqB;AACrB;;;;;;EAME,cAAc;AAChB;;AAEA,qBAAqB;AACrB;;;;;;;;EAQE,cAAc;AAChB;;AAEA,kBAAkB;AAClB;;EAEE,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB","file":"solarized-light.css","sourcesContent":["/*\n\nOrginal Style from ethanschoonover.com/solarized (c) Jeremy Hull <sourdrums@gmail.com>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #fdf6e3;\n  color: #657b83;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #93a1a1;\n}\n\n/* Solarized Green */\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-addition {\n  color: #859900;\n}\n\n/* Solarized Cyan */\n.hljs-number,\n.hljs-string,\n.hljs-meta .hljs-meta-string,\n.hljs-literal,\n.hljs-doctag,\n.hljs-regexp {\n  color: #2aa198;\n}\n\n/* Solarized Blue */\n.hljs-title,\n.hljs-section,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #268bd2;\n}\n\n/* Solarized Yellow */\n.hljs-attribute,\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-class .hljs-title,\n.hljs-type {\n  color: #b58900;\n}\n\n/* Solarized Orange */\n.hljs-symbol,\n.hljs-bullet,\n.hljs-subst,\n.hljs-meta,\n.hljs-meta .hljs-keyword,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-link {\n  color: #cb4b16;\n}\n\n/* Solarized Red */\n.hljs-built_in,\n.hljs-deletion {\n  color: #dc322f;\n}\n\n.hljs-formula {\n  background: #eee8d5;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./assets/styles.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./assets/styles.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".markdown-body .octicon {\n    display: inline-block;\n    fill: currentColor;\n    vertical-align: text-bottom;\n}\n\n.markdown-body .anchor {\n    float: left;\n    line-height: 1;\n    margin-left: -20px;\n    padding-right: 4px;\n}\n\n.markdown-body .anchor:focus {\n    outline: none;\n}\n\n.markdown-body h1 .octicon-link,\n.markdown-body h2 .octicon-link,\n.markdown-body h3 .octicon-link,\n.markdown-body h4 .octicon-link,\n.markdown-body h5 .octicon-link,\n.markdown-body h6 .octicon-link {\n    color: #1b1f23;\n    vertical-align: middle;\n    visibility: hidden;\n}\n\n.markdown-body h1:hover .anchor,\n.markdown-body h2:hover .anchor,\n.markdown-body h3:hover .anchor,\n.markdown-body h4:hover .anchor,\n.markdown-body h5:hover .anchor,\n.markdown-body h6:hover .anchor {\n    text-decoration: none;\n}\n\n.markdown-body h1:hover .anchor .octicon-link,\n.markdown-body h2:hover .anchor .octicon-link,\n.markdown-body h3:hover .anchor .octicon-link,\n.markdown-body h4:hover .anchor .octicon-link,\n.markdown-body h5:hover .anchor .octicon-link,\n.markdown-body h6:hover .anchor .octicon-link {\n    visibility: visible;\n}\n\n.markdown-body h1:hover .anchor .octicon-link:before,\n.markdown-body h2:hover .anchor .octicon-link:before,\n.markdown-body h3:hover .anchor .octicon-link:before,\n.markdown-body h4:hover .anchor .octicon-link:before,\n.markdown-body h5:hover .anchor .octicon-link:before,\n.markdown-body h6:hover .anchor .octicon-link:before {\n    width: 16px;\n    height: 16px;\n    content: ' ';\n    display: inline-block;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E\");\n}.markdown-body {\n     -ms-text-size-adjust: 100%;\n     -webkit-text-size-adjust: 100%;\n     line-height: 1.5;\n     color: #24292e;\n     font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n     font-size: 16px;\n     line-height: 1.5;\n     word-wrap: break-word;\n }\n\n.markdown-body details {\n    display: block;\n}\n\n.markdown-body summary {\n    display: list-item;\n}\n\n.markdown-body a {\n    background-color: transparent;\n    background-color: initial;\n}\n\n.markdown-body a:active,\n.markdown-body a:hover {\n    outline-width: 0;\n}\n\n.markdown-body strong {\n    font-weight: inherit;\n    font-weight: bolder;\n}\n\n.markdown-body h1 {\n    font-size: 2em;\n    margin: .67em 0;\n}\n\n.markdown-body img {\n    border-style: none;\n}\n\n.markdown-body code,\n.markdown-body kbd,\n.markdown-body pre {\n    font-family: monospace,monospace;\n    font-size: 1em;\n}\n\n.markdown-body hr {\n    box-sizing: content-box;\n    box-sizing: initial;\n    height: 0;\n    overflow: visible;\n}\n\n.markdown-body input {\n    font: inherit;\n    margin: 0;\n}\n\n.markdown-body input {\n    overflow: visible;\n}\n\n.markdown-body [type=checkbox] {\n    box-sizing: border-box;\n    padding: 0;\n}\n\n.markdown-body * {\n    box-sizing: border-box;\n}\n\n.markdown-body input {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\n\n.markdown-body a {\n    color: #0366d6;\n    text-decoration: none;\n}\n\n.markdown-body a:hover {\n    text-decoration: underline;\n}\n\n.markdown-body strong {\n    font-weight: 600;\n}\n\n.markdown-body hr {\n    height: 0;\n    margin: 15px 0;\n    overflow: hidden;\n    background: transparent;\n    border: 0;\n    border-bottom: 1px solid #dfe2e5;\n}\n\n.markdown-body hr:after,\n.markdown-body hr:before {\n    display: table;\n    content: \"\";\n}\n\n.markdown-body hr:after {\n    clear: both;\n}\n\n.markdown-body table {\n    border-spacing: 0;\n    border-collapse: collapse;\n}\n\n.markdown-body td,\n.markdown-body th {\n    padding: 0;\n}\n\n.markdown-body details summary {\n    cursor: pointer;\n}\n\n.markdown-body kbd {\n    display: inline-block;\n    padding: 3px 5px;\n    font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    line-height: 10px;\n    color: #444d56;\n    vertical-align: middle;\n    background-color: #fafbfc;\n    border: 1px solid #d1d5da;\n    border-radius: 3px;\n    box-shadow: inset 0 -1px 0 #d1d5da;\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.markdown-body h1 {\n    font-size: 32px;\n}\n\n.markdown-body h1,\n.markdown-body h2 {\n    font-weight: 600;\n}\n\n.markdown-body h2 {\n    font-size: 24px;\n}\n\n.markdown-body h3 {\n    font-size: 20px;\n}\n\n.markdown-body h3,\n.markdown-body h4 {\n    font-weight: 600;\n}\n\n.markdown-body h4 {\n    font-size: 16px;\n}\n\n.markdown-body h5 {\n    font-size: 14px;\n}\n\n.markdown-body h5,\n.markdown-body h6 {\n    font-weight: 600;\n}\n\n.markdown-body h6 {\n    font-size: 12px;\n}\n\n.markdown-body p {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n.markdown-body blockquote {\n    margin: 0;\n}\n\n.markdown-body ol,\n.markdown-body ul {\n    padding-left: 0;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.markdown-body ol ol,\n.markdown-body ul ol {\n    list-style-type: lower-roman;\n}\n\n.markdown-body ol ol ol,\n.markdown-body ol ul ol,\n.markdown-body ul ol ol,\n.markdown-body ul ul ol {\n    list-style-type: lower-alpha;\n}\n\n.markdown-body dd {\n    margin-left: 0;\n}\n\n.markdown-body code,\n.markdown-body pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    font-size: 12px;\n}\n\n.markdown-body pre {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.markdown-body input::-webkit-inner-spin-button,\n.markdown-body input::-webkit-outer-spin-button {\n    margin: 0;\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.markdown-body :checked+.radio-label {\n    position: relative;\n    z-index: 1;\n    border-color: #0366d6;\n}\n\n.markdown-body .border {\n    border: 1px solid #e1e4e8!important;\n}\n\n.markdown-body .border-0 {\n    border: 0!important;\n}\n\n.markdown-body .border-bottom {\n    border-bottom: 1px solid #e1e4e8!important;\n}\n\n.markdown-body .rounded-1 {\n    border-radius: 3px!important;\n}\n\n.markdown-body .bg-white {\n    background-color: #fff!important;\n}\n\n.markdown-body .bg-gray-light {\n    background-color: #fafbfc!important;\n}\n\n.markdown-body .text-gray-light {\n    color: #6a737d!important;\n}\n\n.markdown-body .mb-0 {\n    margin-bottom: 0!important;\n}\n\n.markdown-body .my-2 {\n    margin-top: 8px!important;\n    margin-bottom: 8px!important;\n}\n\n.markdown-body .pl-0 {\n    padding-left: 0!important;\n}\n\n.markdown-body .py-0 {\n    padding-top: 0!important;\n    padding-bottom: 0!important;\n}\n\n.markdown-body .pl-1 {\n    padding-left: 4px!important;\n}\n\n.markdown-body .pl-2 {\n    padding-left: 8px!important;\n}\n\n.markdown-body .py-2 {\n    padding-top: 8px!important;\n    padding-bottom: 8px!important;\n}\n\n.markdown-body .pl-3,\n.markdown-body .px-3 {\n    padding-left: 16px!important;\n}\n\n.markdown-body .px-3 {\n    padding-right: 16px!important;\n}\n\n.markdown-body .pl-4 {\n    padding-left: 24px!important;\n}\n\n.markdown-body .pl-5 {\n    padding-left: 32px!important;\n}\n\n.markdown-body .pl-6 {\n    padding-left: 40px!important;\n}\n\n.markdown-body .f6 {\n    font-size: 12px!important;\n}\n\n.markdown-body .lh-condensed {\n    line-height: 1.25!important;\n}\n\n.markdown-body .text-bold {\n    font-weight: 600!important;\n}\n\n.markdown-body .pl-c {\n    color: #6a737d;\n}\n\n.markdown-body .pl-c1,\n.markdown-body .pl-s .pl-v {\n    color: #005cc5;\n}\n\n.markdown-body .pl-e,\n.markdown-body .pl-en {\n    color: #6f42c1;\n}\n\n.markdown-body .pl-s .pl-s1,\n.markdown-body .pl-smi {\n    color: #24292e;\n}\n\n.markdown-body .pl-ent {\n    color: #22863a;\n}\n\n.markdown-body .pl-k {\n    color: #d73a49;\n}\n\n.markdown-body .pl-pds,\n.markdown-body .pl-s,\n.markdown-body .pl-s .pl-pse .pl-s1,\n.markdown-body .pl-sr,\n.markdown-body .pl-sr .pl-cce,\n.markdown-body .pl-sr .pl-sra,\n.markdown-body .pl-sr .pl-sre {\n    color: #032f62;\n}\n\n.markdown-body .pl-smw,\n.markdown-body .pl-v {\n    color: #e36209;\n}\n\n.markdown-body .pl-bu {\n    color: #b31d28;\n}\n\n.markdown-body .pl-ii {\n    color: #fafbfc;\n    background-color: #b31d28;\n}\n\n.markdown-body .pl-c2 {\n    color: #fafbfc;\n    background-color: #d73a49;\n}\n\n.markdown-body .pl-c2:before {\n    content: \"^M\";\n}\n\n.markdown-body .pl-sr .pl-cce {\n    font-weight: 700;\n    color: #22863a;\n}\n\n.markdown-body .pl-ml {\n    color: #735c0f;\n}\n\n.markdown-body .pl-mh,\n.markdown-body .pl-mh .pl-en,\n.markdown-body .pl-ms {\n    font-weight: 700;\n    color: #005cc5;\n}\n\n.markdown-body .pl-mi {\n    font-style: italic;\n    color: #24292e;\n}\n\n.markdown-body .pl-mb {\n    font-weight: 700;\n    color: #24292e;\n}\n\n.markdown-body .pl-md {\n    color: #b31d28;\n    background-color: #ffeef0;\n}\n\n.markdown-body .pl-mi1 {\n    color: #22863a;\n    background-color: #f0fff4;\n}\n\n.markdown-body .pl-mc {\n    color: #e36209;\n    background-color: #ffebda;\n}\n\n.markdown-body .pl-mi2 {\n    color: #f6f8fa;\n    background-color: #005cc5;\n}\n\n.markdown-body .pl-mdr {\n    font-weight: 700;\n    color: #6f42c1;\n}\n\n.markdown-body .pl-ba {\n    color: #586069;\n}\n\n.markdown-body .pl-sg {\n    color: #959da5;\n}\n\n.markdown-body .pl-corl {\n    text-decoration: underline;\n    color: #032f62;\n}\n\n.markdown-body .mb-0 {\n    margin-bottom: 0!important;\n}\n\n.markdown-body .my-2 {\n    margin-bottom: 8px!important;\n}\n\n.markdown-body .my-2 {\n    margin-top: 8px!important;\n}\n\n.markdown-body .pl-0 {\n    padding-left: 0!important;\n}\n\n.markdown-body .py-0 {\n    padding-top: 0!important;\n    padding-bottom: 0!important;\n}\n\n.markdown-body .pl-1 {\n    padding-left: 4px!important;\n}\n\n.markdown-body .pl-2 {\n    padding-left: 8px!important;\n}\n\n.markdown-body .py-2 {\n    padding-top: 8px!important;\n    padding-bottom: 8px!important;\n}\n\n.markdown-body .pl-3 {\n    padding-left: 16px!important;\n}\n\n.markdown-body .pl-4 {\n    padding-left: 24px!important;\n}\n\n.markdown-body .pl-5 {\n    padding-left: 32px!important;\n}\n\n.markdown-body .pl-6 {\n    padding-left: 40px!important;\n}\n\n.markdown-body .pl-7 {\n    padding-left: 48px!important;\n}\n\n.markdown-body .pl-8 {\n    padding-left: 64px!important;\n}\n\n.markdown-body .pl-9 {\n    padding-left: 80px!important;\n}\n\n.markdown-body .pl-10 {\n    padding-left: 96px!important;\n}\n\n.markdown-body .pl-11 {\n    padding-left: 112px!important;\n}\n\n.markdown-body .pl-12 {\n    padding-left: 128px!important;\n}\n\n.markdown-body hr {\n    border-bottom-color: #eee;\n}\n\n.markdown-body kbd {\n    display: inline-block;\n    padding: 3px 5px;\n    font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    line-height: 10px;\n    color: #444d56;\n    vertical-align: middle;\n    background-color: #fafbfc;\n    border: 1px solid #d1d5da;\n    border-radius: 3px;\n    box-shadow: inset 0 -1px 0 #d1d5da;\n}\n\n.markdown-body:after,\n.markdown-body:before {\n    display: table;\n    content: \"\";\n}\n\n.markdown-body:after {\n    clear: both;\n}\n\n.markdown-body>:first-child {\n    margin-top: 0!important;\n}\n\n.markdown-body>:last-child {\n    margin-bottom: 0!important;\n}\n\n.markdown-body a:not([href]) {\n    color: inherit;\n    text-decoration: none;\n}\n\n.markdown-body blockquote,\n.markdown-body details,\n.markdown-body dl,\n.markdown-body ol,\n.markdown-body p,\n.markdown-body pre,\n.markdown-body table,\n.markdown-body ul {\n    margin-top: 0;\n    margin-bottom: 16px;\n}\n\n.markdown-body hr {\n    height: .25em;\n    padding: 0;\n    margin: 24px 0;\n    background-color: #e1e4e8;\n    border: 0;\n}\n\n.markdown-body blockquote {\n    padding: 0 1em;\n    color: #6a737d;\n    border-left: .25em solid #dfe2e5;\n}\n\n.markdown-body blockquote>:first-child {\n    margin-top: 0;\n}\n\n.markdown-body blockquote>:last-child {\n    margin-bottom: 0;\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    font-weight: 600;\n    line-height: 1.25;\n}\n\n.markdown-body h1 {\n    font-size: 2em;\n}\n\n.markdown-body h1,\n.markdown-body h2 {\n    padding-bottom: .3em;\n    border-bottom: 1px solid #eaecef;\n}\n\n.markdown-body h2 {\n    font-size: 1.5em;\n}\n\n.markdown-body h3 {\n    font-size: 1.25em;\n}\n\n.markdown-body h4 {\n    font-size: 1em;\n}\n\n.markdown-body h5 {\n    font-size: .875em;\n}\n\n.markdown-body h6 {\n    font-size: .85em;\n    color: #6a737d;\n}\n\n.markdown-body ol,\n.markdown-body ul {\n    padding-left: 2em;\n}\n\n.markdown-body ol ol,\n.markdown-body ol ul,\n.markdown-body ul ol,\n.markdown-body ul ul {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.markdown-body li {\n    word-wrap: break-all;\n}\n\n.markdown-body li>p {\n    margin-top: 16px;\n}\n\n.markdown-body li+li {\n    margin-top: .25em;\n}\n\n.markdown-body dl {\n    padding: 0;\n}\n\n.markdown-body dl dt {\n    padding: 0;\n    margin-top: 16px;\n    font-size: 1em;\n    font-style: italic;\n    font-weight: 600;\n}\n\n.markdown-body dl dd {\n    padding: 0 16px;\n    margin-bottom: 16px;\n}\n\n.markdown-body table {\n    display: block;\n    width: 100%;\n    overflow: auto;\n}\n\n.markdown-body table th {\n    font-weight: 600;\n}\n\n.markdown-body table td,\n.markdown-body table th {\n    padding: 6px 13px;\n    border: 1px solid #dfe2e5;\n}\n\n.markdown-body table tr {\n    background-color: #fff;\n    border-top: 1px solid #c6cbd1;\n}\n\n.markdown-body table tr:nth-child(2n) {\n    background-color: #f6f8fa;\n}\n\n.markdown-body img {\n    max-width: 100%;\n    box-sizing: content-box;\n    box-sizing: initial;\n    background-color: #fff;\n}\n\n.markdown-body img[align=right] {\n    padding-left: 20px;\n}\n\n.markdown-body img[align=left] {\n    padding-right: 20px;\n}\n\n.markdown-body code {\n    padding: .2em .4em;\n    margin: 0;\n    font-size: 85%;\n    background-color: rgba(27,31,35,.05);\n    border-radius: 3px;\n}\n\n.markdown-body pre {\n    word-wrap: normal;\n}\n\n.markdown-body pre>code {\n    padding: 0;\n    margin: 0;\n    font-size: 100%;\n    word-break: normal;\n    white-space: pre;\n    background: transparent;\n    border: 0;\n}\n\n.markdown-body .highlight {\n    margin-bottom: 16px;\n}\n\n.markdown-body .highlight pre {\n    margin-bottom: 0;\n    word-break: normal;\n}\n\n.markdown-body .highlight pre,\n.markdown-body pre {\n    padding: 16px;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    background-color: #f6f8fa;\n    border-radius: 3px;\n}\n\n.markdown-body pre code {\n    display: inline;\n    max-width: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    line-height: inherit;\n    word-wrap: normal;\n    background-color: transparent;\n    background-color: initial;\n    border: 0;\n}\n\n.markdown-body .commit-tease-sha {\n    display: inline-block;\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    font-size: 90%;\n    color: #444d56;\n}\n\n.markdown-body .full-commit .btn-outline:not(:disabled):hover {\n    color: #005cc5;\n    border-color: #005cc5;\n}\n\n.markdown-body .blob-wrapper {\n    overflow-x: auto;\n    overflow-y: hidden;\n}\n\n.markdown-body .blob-wrapper-embedded {\n    max-height: 240px;\n    overflow-y: auto;\n}\n\n.markdown-body .blob-num {\n    width: 1%;\n    min-width: 50px;\n    padding-right: 10px;\n    padding-left: 10px;\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    font-size: 12px;\n    line-height: 20px;\n    color: rgba(27,31,35,.3);\n    text-align: right;\n    white-space: nowrap;\n    vertical-align: top;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.markdown-body .blob-num:hover {\n    color: rgba(27,31,35,.6);\n}\n\n.markdown-body .blob-num:before {\n    content: attr(data-line-number);\n}\n\n.markdown-body .blob-code {\n    position: relative;\n    padding-right: 10px;\n    padding-left: 10px;\n    line-height: 20px;\n    vertical-align: top;\n}\n\n.markdown-body .blob-code-inner {\n    overflow: visible;\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    font-size: 12px;\n    color: #24292e;\n    word-wrap: normal;\n    white-space: pre;\n}\n\n.markdown-body .pl-token.active,\n.markdown-body .pl-token:hover {\n    cursor: pointer;\n    background: #ffea7f;\n}\n\n.markdown-body .tab-size[data-tab-size=\"1\"] {\n    -moz-tab-size: 1;\n    -o-tab-size: 1;\n       tab-size: 1;\n}\n\n.markdown-body .tab-size[data-tab-size=\"2\"] {\n    -moz-tab-size: 2;\n    -o-tab-size: 2;\n       tab-size: 2;\n}\n\n.markdown-body .tab-size[data-tab-size=\"3\"] {\n    -moz-tab-size: 3;\n    -o-tab-size: 3;\n       tab-size: 3;\n}\n\n.markdown-body .tab-size[data-tab-size=\"4\"] {\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n       tab-size: 4;\n}\n\n.markdown-body .tab-size[data-tab-size=\"5\"] {\n    -moz-tab-size: 5;\n    -o-tab-size: 5;\n       tab-size: 5;\n}\n\n.markdown-body .tab-size[data-tab-size=\"6\"] {\n    -moz-tab-size: 6;\n    -o-tab-size: 6;\n       tab-size: 6;\n}\n\n.markdown-body .tab-size[data-tab-size=\"7\"] {\n    -moz-tab-size: 7;\n    -o-tab-size: 7;\n       tab-size: 7;\n}\n\n.markdown-body .tab-size[data-tab-size=\"8\"] {\n    -moz-tab-size: 8;\n    -o-tab-size: 8;\n       tab-size: 8;\n}\n\n.markdown-body .tab-size[data-tab-size=\"9\"] {\n    -moz-tab-size: 9;\n    -o-tab-size: 9;\n       tab-size: 9;\n}\n\n.markdown-body .tab-size[data-tab-size=\"10\"] {\n    -moz-tab-size: 10;\n    -o-tab-size: 10;\n       tab-size: 10;\n}\n\n.markdown-body .tab-size[data-tab-size=\"11\"] {\n    -moz-tab-size: 11;\n    -o-tab-size: 11;\n       tab-size: 11;\n}\n\n.markdown-body .tab-size[data-tab-size=\"12\"] {\n    -moz-tab-size: 12;\n    -o-tab-size: 12;\n       tab-size: 12;\n}\n\n.markdown-body .task-list-item {\n    list-style-type: none;\n}\n\n.markdown-body .task-list-item+.task-list-item {\n    margin-top: 3px;\n}\n\n.markdown-body .task-list-item input {\n    margin: 0 .2em .25em -1.6em;\n    vertical-align: middle;\n}\n", "",{"version":3,"sources":["/Users/zhouyang/CodeZone/wordog/assets/styles.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;;;;;;IAMI,cAAc;IACd,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;;;;;;IAMI,qBAAqB;AACzB;;AAEA;;;;;;IAMI,mBAAmB;AACvB;;AAEA;;;;;;IAMI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,qBAAqB;IACrB,yiBAAyiB;AAC7iB,CAAC;KACI,0BAA0B;KAC1B,8BAA8B;KAC9B,gBAAgB;KAChB,cAAc;KACd,kHAAkH;KAClH,eAAe;KACf,gBAAgB;KAChB,qBAAqB;CACzB;;AAED;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,6BAAyB;IAAzB,yBAAyB;AAC7B;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;IAGI,gCAAgC;IAChC,cAAc;AAClB;;AAEA;IACI,uBAAmB;IAAnB,mBAAmB;IACnB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,cAAc;IACd,gBAAgB;IAChB,uBAAuB;IACvB,SAAS;IACT,gCAAgC;AACpC;;AAEA;;IAEI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,kEAAkE;IAClE,iBAAiB;IACjB,cAAc;IACd,sBAAsB;IACtB,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA;;;;;;IAMI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;;IAEI,eAAe;IACf,aAAa;IACb,gBAAgB;AACpB;;AAEA;;IAEI,4BAA4B;AAChC;;AAEA;;;;IAII,4BAA4B;AAChC;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,oEAAoE;IACpE,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;;IAEI,SAAS;IACT,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;IACzB,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;IAC1B,6BAA6B;AACjC;;AAEA;;IAEI,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;;;;;;;IAOI,cAAc;AAClB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;;;IAGI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,0BAA0B;IAC1B,cAAc;AAClB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;IAC1B,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,kEAAkE;IAClE,iBAAiB;IACjB,cAAc;IACd,sBAAsB;IACtB,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA;;IAEI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;;;;;;;;IAQI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,cAAc;IACd,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,cAAc;IACd,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;;;;;IAMI,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,oBAAoB;IACpB,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;;;;IAII,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,uBAAmB;IAAnB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,cAAc;IACd,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,cAAc;IACd,cAAc;IACd,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,UAAU;IACV,SAAS;IACT,iBAAiB;IACjB,oBAAoB;IACpB,iBAAiB;IACjB,6BAAyB;IAAzB,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,oEAAoE;IACpE,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,mBAAmB;IACnB,kBAAkB;IAClB,oEAAoE;IACpE,eAAe;IACf,iBAAiB;IACjB,wBAAwB;IACxB,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,oEAAoE;IACpE,eAAe;IACf,cAAc;IACd,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;;IAEI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,cAAW;OAAX,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,cAAW;OAAX,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,cAAW;OAAX,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,cAAW;OAAX,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,cAAW;OAAX,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,cAAW;OAAX,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,cAAW;OAAX,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,cAAW;OAAX,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,cAAW;OAAX,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,eAAY;OAAZ,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,eAAY;OAAZ,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,eAAY;OAAZ,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,sBAAsB;AAC1B","file":"styles.css","sourcesContent":[".markdown-body .octicon {\n    display: inline-block;\n    fill: currentColor;\n    vertical-align: text-bottom;\n}\n\n.markdown-body .anchor {\n    float: left;\n    line-height: 1;\n    margin-left: -20px;\n    padding-right: 4px;\n}\n\n.markdown-body .anchor:focus {\n    outline: none;\n}\n\n.markdown-body h1 .octicon-link,\n.markdown-body h2 .octicon-link,\n.markdown-body h3 .octicon-link,\n.markdown-body h4 .octicon-link,\n.markdown-body h5 .octicon-link,\n.markdown-body h6 .octicon-link {\n    color: #1b1f23;\n    vertical-align: middle;\n    visibility: hidden;\n}\n\n.markdown-body h1:hover .anchor,\n.markdown-body h2:hover .anchor,\n.markdown-body h3:hover .anchor,\n.markdown-body h4:hover .anchor,\n.markdown-body h5:hover .anchor,\n.markdown-body h6:hover .anchor {\n    text-decoration: none;\n}\n\n.markdown-body h1:hover .anchor .octicon-link,\n.markdown-body h2:hover .anchor .octicon-link,\n.markdown-body h3:hover .anchor .octicon-link,\n.markdown-body h4:hover .anchor .octicon-link,\n.markdown-body h5:hover .anchor .octicon-link,\n.markdown-body h6:hover .anchor .octicon-link {\n    visibility: visible;\n}\n\n.markdown-body h1:hover .anchor .octicon-link:before,\n.markdown-body h2:hover .anchor .octicon-link:before,\n.markdown-body h3:hover .anchor .octicon-link:before,\n.markdown-body h4:hover .anchor .octicon-link:before,\n.markdown-body h5:hover .anchor .octicon-link:before,\n.markdown-body h6:hover .anchor .octicon-link:before {\n    width: 16px;\n    height: 16px;\n    content: ' ';\n    display: inline-block;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E\");\n}.markdown-body {\n     -ms-text-size-adjust: 100%;\n     -webkit-text-size-adjust: 100%;\n     line-height: 1.5;\n     color: #24292e;\n     font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n     font-size: 16px;\n     line-height: 1.5;\n     word-wrap: break-word;\n }\n\n.markdown-body details {\n    display: block;\n}\n\n.markdown-body summary {\n    display: list-item;\n}\n\n.markdown-body a {\n    background-color: initial;\n}\n\n.markdown-body a:active,\n.markdown-body a:hover {\n    outline-width: 0;\n}\n\n.markdown-body strong {\n    font-weight: inherit;\n    font-weight: bolder;\n}\n\n.markdown-body h1 {\n    font-size: 2em;\n    margin: .67em 0;\n}\n\n.markdown-body img {\n    border-style: none;\n}\n\n.markdown-body code,\n.markdown-body kbd,\n.markdown-body pre {\n    font-family: monospace,monospace;\n    font-size: 1em;\n}\n\n.markdown-body hr {\n    box-sizing: initial;\n    height: 0;\n    overflow: visible;\n}\n\n.markdown-body input {\n    font: inherit;\n    margin: 0;\n}\n\n.markdown-body input {\n    overflow: visible;\n}\n\n.markdown-body [type=checkbox] {\n    box-sizing: border-box;\n    padding: 0;\n}\n\n.markdown-body * {\n    box-sizing: border-box;\n}\n\n.markdown-body input {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\n\n.markdown-body a {\n    color: #0366d6;\n    text-decoration: none;\n}\n\n.markdown-body a:hover {\n    text-decoration: underline;\n}\n\n.markdown-body strong {\n    font-weight: 600;\n}\n\n.markdown-body hr {\n    height: 0;\n    margin: 15px 0;\n    overflow: hidden;\n    background: transparent;\n    border: 0;\n    border-bottom: 1px solid #dfe2e5;\n}\n\n.markdown-body hr:after,\n.markdown-body hr:before {\n    display: table;\n    content: \"\";\n}\n\n.markdown-body hr:after {\n    clear: both;\n}\n\n.markdown-body table {\n    border-spacing: 0;\n    border-collapse: collapse;\n}\n\n.markdown-body td,\n.markdown-body th {\n    padding: 0;\n}\n\n.markdown-body details summary {\n    cursor: pointer;\n}\n\n.markdown-body kbd {\n    display: inline-block;\n    padding: 3px 5px;\n    font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    line-height: 10px;\n    color: #444d56;\n    vertical-align: middle;\n    background-color: #fafbfc;\n    border: 1px solid #d1d5da;\n    border-radius: 3px;\n    box-shadow: inset 0 -1px 0 #d1d5da;\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.markdown-body h1 {\n    font-size: 32px;\n}\n\n.markdown-body h1,\n.markdown-body h2 {\n    font-weight: 600;\n}\n\n.markdown-body h2 {\n    font-size: 24px;\n}\n\n.markdown-body h3 {\n    font-size: 20px;\n}\n\n.markdown-body h3,\n.markdown-body h4 {\n    font-weight: 600;\n}\n\n.markdown-body h4 {\n    font-size: 16px;\n}\n\n.markdown-body h5 {\n    font-size: 14px;\n}\n\n.markdown-body h5,\n.markdown-body h6 {\n    font-weight: 600;\n}\n\n.markdown-body h6 {\n    font-size: 12px;\n}\n\n.markdown-body p {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n.markdown-body blockquote {\n    margin: 0;\n}\n\n.markdown-body ol,\n.markdown-body ul {\n    padding-left: 0;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.markdown-body ol ol,\n.markdown-body ul ol {\n    list-style-type: lower-roman;\n}\n\n.markdown-body ol ol ol,\n.markdown-body ol ul ol,\n.markdown-body ul ol ol,\n.markdown-body ul ul ol {\n    list-style-type: lower-alpha;\n}\n\n.markdown-body dd {\n    margin-left: 0;\n}\n\n.markdown-body code,\n.markdown-body pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    font-size: 12px;\n}\n\n.markdown-body pre {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.markdown-body input::-webkit-inner-spin-button,\n.markdown-body input::-webkit-outer-spin-button {\n    margin: 0;\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.markdown-body :checked+.radio-label {\n    position: relative;\n    z-index: 1;\n    border-color: #0366d6;\n}\n\n.markdown-body .border {\n    border: 1px solid #e1e4e8!important;\n}\n\n.markdown-body .border-0 {\n    border: 0!important;\n}\n\n.markdown-body .border-bottom {\n    border-bottom: 1px solid #e1e4e8!important;\n}\n\n.markdown-body .rounded-1 {\n    border-radius: 3px!important;\n}\n\n.markdown-body .bg-white {\n    background-color: #fff!important;\n}\n\n.markdown-body .bg-gray-light {\n    background-color: #fafbfc!important;\n}\n\n.markdown-body .text-gray-light {\n    color: #6a737d!important;\n}\n\n.markdown-body .mb-0 {\n    margin-bottom: 0!important;\n}\n\n.markdown-body .my-2 {\n    margin-top: 8px!important;\n    margin-bottom: 8px!important;\n}\n\n.markdown-body .pl-0 {\n    padding-left: 0!important;\n}\n\n.markdown-body .py-0 {\n    padding-top: 0!important;\n    padding-bottom: 0!important;\n}\n\n.markdown-body .pl-1 {\n    padding-left: 4px!important;\n}\n\n.markdown-body .pl-2 {\n    padding-left: 8px!important;\n}\n\n.markdown-body .py-2 {\n    padding-top: 8px!important;\n    padding-bottom: 8px!important;\n}\n\n.markdown-body .pl-3,\n.markdown-body .px-3 {\n    padding-left: 16px!important;\n}\n\n.markdown-body .px-3 {\n    padding-right: 16px!important;\n}\n\n.markdown-body .pl-4 {\n    padding-left: 24px!important;\n}\n\n.markdown-body .pl-5 {\n    padding-left: 32px!important;\n}\n\n.markdown-body .pl-6 {\n    padding-left: 40px!important;\n}\n\n.markdown-body .f6 {\n    font-size: 12px!important;\n}\n\n.markdown-body .lh-condensed {\n    line-height: 1.25!important;\n}\n\n.markdown-body .text-bold {\n    font-weight: 600!important;\n}\n\n.markdown-body .pl-c {\n    color: #6a737d;\n}\n\n.markdown-body .pl-c1,\n.markdown-body .pl-s .pl-v {\n    color: #005cc5;\n}\n\n.markdown-body .pl-e,\n.markdown-body .pl-en {\n    color: #6f42c1;\n}\n\n.markdown-body .pl-s .pl-s1,\n.markdown-body .pl-smi {\n    color: #24292e;\n}\n\n.markdown-body .pl-ent {\n    color: #22863a;\n}\n\n.markdown-body .pl-k {\n    color: #d73a49;\n}\n\n.markdown-body .pl-pds,\n.markdown-body .pl-s,\n.markdown-body .pl-s .pl-pse .pl-s1,\n.markdown-body .pl-sr,\n.markdown-body .pl-sr .pl-cce,\n.markdown-body .pl-sr .pl-sra,\n.markdown-body .pl-sr .pl-sre {\n    color: #032f62;\n}\n\n.markdown-body .pl-smw,\n.markdown-body .pl-v {\n    color: #e36209;\n}\n\n.markdown-body .pl-bu {\n    color: #b31d28;\n}\n\n.markdown-body .pl-ii {\n    color: #fafbfc;\n    background-color: #b31d28;\n}\n\n.markdown-body .pl-c2 {\n    color: #fafbfc;\n    background-color: #d73a49;\n}\n\n.markdown-body .pl-c2:before {\n    content: \"^M\";\n}\n\n.markdown-body .pl-sr .pl-cce {\n    font-weight: 700;\n    color: #22863a;\n}\n\n.markdown-body .pl-ml {\n    color: #735c0f;\n}\n\n.markdown-body .pl-mh,\n.markdown-body .pl-mh .pl-en,\n.markdown-body .pl-ms {\n    font-weight: 700;\n    color: #005cc5;\n}\n\n.markdown-body .pl-mi {\n    font-style: italic;\n    color: #24292e;\n}\n\n.markdown-body .pl-mb {\n    font-weight: 700;\n    color: #24292e;\n}\n\n.markdown-body .pl-md {\n    color: #b31d28;\n    background-color: #ffeef0;\n}\n\n.markdown-body .pl-mi1 {\n    color: #22863a;\n    background-color: #f0fff4;\n}\n\n.markdown-body .pl-mc {\n    color: #e36209;\n    background-color: #ffebda;\n}\n\n.markdown-body .pl-mi2 {\n    color: #f6f8fa;\n    background-color: #005cc5;\n}\n\n.markdown-body .pl-mdr {\n    font-weight: 700;\n    color: #6f42c1;\n}\n\n.markdown-body .pl-ba {\n    color: #586069;\n}\n\n.markdown-body .pl-sg {\n    color: #959da5;\n}\n\n.markdown-body .pl-corl {\n    text-decoration: underline;\n    color: #032f62;\n}\n\n.markdown-body .mb-0 {\n    margin-bottom: 0!important;\n}\n\n.markdown-body .my-2 {\n    margin-bottom: 8px!important;\n}\n\n.markdown-body .my-2 {\n    margin-top: 8px!important;\n}\n\n.markdown-body .pl-0 {\n    padding-left: 0!important;\n}\n\n.markdown-body .py-0 {\n    padding-top: 0!important;\n    padding-bottom: 0!important;\n}\n\n.markdown-body .pl-1 {\n    padding-left: 4px!important;\n}\n\n.markdown-body .pl-2 {\n    padding-left: 8px!important;\n}\n\n.markdown-body .py-2 {\n    padding-top: 8px!important;\n    padding-bottom: 8px!important;\n}\n\n.markdown-body .pl-3 {\n    padding-left: 16px!important;\n}\n\n.markdown-body .pl-4 {\n    padding-left: 24px!important;\n}\n\n.markdown-body .pl-5 {\n    padding-left: 32px!important;\n}\n\n.markdown-body .pl-6 {\n    padding-left: 40px!important;\n}\n\n.markdown-body .pl-7 {\n    padding-left: 48px!important;\n}\n\n.markdown-body .pl-8 {\n    padding-left: 64px!important;\n}\n\n.markdown-body .pl-9 {\n    padding-left: 80px!important;\n}\n\n.markdown-body .pl-10 {\n    padding-left: 96px!important;\n}\n\n.markdown-body .pl-11 {\n    padding-left: 112px!important;\n}\n\n.markdown-body .pl-12 {\n    padding-left: 128px!important;\n}\n\n.markdown-body hr {\n    border-bottom-color: #eee;\n}\n\n.markdown-body kbd {\n    display: inline-block;\n    padding: 3px 5px;\n    font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    line-height: 10px;\n    color: #444d56;\n    vertical-align: middle;\n    background-color: #fafbfc;\n    border: 1px solid #d1d5da;\n    border-radius: 3px;\n    box-shadow: inset 0 -1px 0 #d1d5da;\n}\n\n.markdown-body:after,\n.markdown-body:before {\n    display: table;\n    content: \"\";\n}\n\n.markdown-body:after {\n    clear: both;\n}\n\n.markdown-body>:first-child {\n    margin-top: 0!important;\n}\n\n.markdown-body>:last-child {\n    margin-bottom: 0!important;\n}\n\n.markdown-body a:not([href]) {\n    color: inherit;\n    text-decoration: none;\n}\n\n.markdown-body blockquote,\n.markdown-body details,\n.markdown-body dl,\n.markdown-body ol,\n.markdown-body p,\n.markdown-body pre,\n.markdown-body table,\n.markdown-body ul {\n    margin-top: 0;\n    margin-bottom: 16px;\n}\n\n.markdown-body hr {\n    height: .25em;\n    padding: 0;\n    margin: 24px 0;\n    background-color: #e1e4e8;\n    border: 0;\n}\n\n.markdown-body blockquote {\n    padding: 0 1em;\n    color: #6a737d;\n    border-left: .25em solid #dfe2e5;\n}\n\n.markdown-body blockquote>:first-child {\n    margin-top: 0;\n}\n\n.markdown-body blockquote>:last-child {\n    margin-bottom: 0;\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    font-weight: 600;\n    line-height: 1.25;\n}\n\n.markdown-body h1 {\n    font-size: 2em;\n}\n\n.markdown-body h1,\n.markdown-body h2 {\n    padding-bottom: .3em;\n    border-bottom: 1px solid #eaecef;\n}\n\n.markdown-body h2 {\n    font-size: 1.5em;\n}\n\n.markdown-body h3 {\n    font-size: 1.25em;\n}\n\n.markdown-body h4 {\n    font-size: 1em;\n}\n\n.markdown-body h5 {\n    font-size: .875em;\n}\n\n.markdown-body h6 {\n    font-size: .85em;\n    color: #6a737d;\n}\n\n.markdown-body ol,\n.markdown-body ul {\n    padding-left: 2em;\n}\n\n.markdown-body ol ol,\n.markdown-body ol ul,\n.markdown-body ul ol,\n.markdown-body ul ul {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.markdown-body li {\n    word-wrap: break-all;\n}\n\n.markdown-body li>p {\n    margin-top: 16px;\n}\n\n.markdown-body li+li {\n    margin-top: .25em;\n}\n\n.markdown-body dl {\n    padding: 0;\n}\n\n.markdown-body dl dt {\n    padding: 0;\n    margin-top: 16px;\n    font-size: 1em;\n    font-style: italic;\n    font-weight: 600;\n}\n\n.markdown-body dl dd {\n    padding: 0 16px;\n    margin-bottom: 16px;\n}\n\n.markdown-body table {\n    display: block;\n    width: 100%;\n    overflow: auto;\n}\n\n.markdown-body table th {\n    font-weight: 600;\n}\n\n.markdown-body table td,\n.markdown-body table th {\n    padding: 6px 13px;\n    border: 1px solid #dfe2e5;\n}\n\n.markdown-body table tr {\n    background-color: #fff;\n    border-top: 1px solid #c6cbd1;\n}\n\n.markdown-body table tr:nth-child(2n) {\n    background-color: #f6f8fa;\n}\n\n.markdown-body img {\n    max-width: 100%;\n    box-sizing: initial;\n    background-color: #fff;\n}\n\n.markdown-body img[align=right] {\n    padding-left: 20px;\n}\n\n.markdown-body img[align=left] {\n    padding-right: 20px;\n}\n\n.markdown-body code {\n    padding: .2em .4em;\n    margin: 0;\n    font-size: 85%;\n    background-color: rgba(27,31,35,.05);\n    border-radius: 3px;\n}\n\n.markdown-body pre {\n    word-wrap: normal;\n}\n\n.markdown-body pre>code {\n    padding: 0;\n    margin: 0;\n    font-size: 100%;\n    word-break: normal;\n    white-space: pre;\n    background: transparent;\n    border: 0;\n}\n\n.markdown-body .highlight {\n    margin-bottom: 16px;\n}\n\n.markdown-body .highlight pre {\n    margin-bottom: 0;\n    word-break: normal;\n}\n\n.markdown-body .highlight pre,\n.markdown-body pre {\n    padding: 16px;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    background-color: #f6f8fa;\n    border-radius: 3px;\n}\n\n.markdown-body pre code {\n    display: inline;\n    max-width: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    line-height: inherit;\n    word-wrap: normal;\n    background-color: initial;\n    border: 0;\n}\n\n.markdown-body .commit-tease-sha {\n    display: inline-block;\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    font-size: 90%;\n    color: #444d56;\n}\n\n.markdown-body .full-commit .btn-outline:not(:disabled):hover {\n    color: #005cc5;\n    border-color: #005cc5;\n}\n\n.markdown-body .blob-wrapper {\n    overflow-x: auto;\n    overflow-y: hidden;\n}\n\n.markdown-body .blob-wrapper-embedded {\n    max-height: 240px;\n    overflow-y: auto;\n}\n\n.markdown-body .blob-num {\n    width: 1%;\n    min-width: 50px;\n    padding-right: 10px;\n    padding-left: 10px;\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    font-size: 12px;\n    line-height: 20px;\n    color: rgba(27,31,35,.3);\n    text-align: right;\n    white-space: nowrap;\n    vertical-align: top;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.markdown-body .blob-num:hover {\n    color: rgba(27,31,35,.6);\n}\n\n.markdown-body .blob-num:before {\n    content: attr(data-line-number);\n}\n\n.markdown-body .blob-code {\n    position: relative;\n    padding-right: 10px;\n    padding-left: 10px;\n    line-height: 20px;\n    vertical-align: top;\n}\n\n.markdown-body .blob-code-inner {\n    overflow: visible;\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    font-size: 12px;\n    color: #24292e;\n    word-wrap: normal;\n    white-space: pre;\n}\n\n.markdown-body .pl-token.active,\n.markdown-body .pl-token:hover {\n    cursor: pointer;\n    background: #ffea7f;\n}\n\n.markdown-body .tab-size[data-tab-size=\"1\"] {\n    -moz-tab-size: 1;\n    tab-size: 1;\n}\n\n.markdown-body .tab-size[data-tab-size=\"2\"] {\n    -moz-tab-size: 2;\n    tab-size: 2;\n}\n\n.markdown-body .tab-size[data-tab-size=\"3\"] {\n    -moz-tab-size: 3;\n    tab-size: 3;\n}\n\n.markdown-body .tab-size[data-tab-size=\"4\"] {\n    -moz-tab-size: 4;\n    tab-size: 4;\n}\n\n.markdown-body .tab-size[data-tab-size=\"5\"] {\n    -moz-tab-size: 5;\n    tab-size: 5;\n}\n\n.markdown-body .tab-size[data-tab-size=\"6\"] {\n    -moz-tab-size: 6;\n    tab-size: 6;\n}\n\n.markdown-body .tab-size[data-tab-size=\"7\"] {\n    -moz-tab-size: 7;\n    tab-size: 7;\n}\n\n.markdown-body .tab-size[data-tab-size=\"8\"] {\n    -moz-tab-size: 8;\n    tab-size: 8;\n}\n\n.markdown-body .tab-size[data-tab-size=\"9\"] {\n    -moz-tab-size: 9;\n    tab-size: 9;\n}\n\n.markdown-body .tab-size[data-tab-size=\"10\"] {\n    -moz-tab-size: 10;\n    tab-size: 10;\n}\n\n.markdown-body .tab-size[data-tab-size=\"11\"] {\n    -moz-tab-size: 11;\n    tab-size: 11;\n}\n\n.markdown-body .tab-size[data-tab-size=\"12\"] {\n    -moz-tab-size: 12;\n    tab-size: 12;\n}\n\n.markdown-body .task-list-item {\n    list-style-type: none;\n}\n\n.markdown-body .task-list-item+.task-list-item {\n    margin-top: 3px;\n}\n\n.markdown-body .task-list-item input {\n    margin: 0 .2em .25em -1.6em;\n    vertical-align: middle;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!./":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.tsx */ "./pages/_app.tsx")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.tsx */ "./pages/_app.tsx", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.tsx */ "./pages/_app.tsx")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles.css */ "./assets/styles.css");
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_solarized_light_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/solarized-light.css */ "./assets/solarized-light.css");
/* harmony import */ var _assets_solarized_light_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_solarized_light_css__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "/Users/zhouyang/CodeZone/wordog/pages/_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var App = function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx ./node_modules/next/dist/client/router.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!./");
module.exports = __webpack_require__(/*! /Users/zhouyang/CodeZone/wordog/node_modules/next/dist/client/router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map