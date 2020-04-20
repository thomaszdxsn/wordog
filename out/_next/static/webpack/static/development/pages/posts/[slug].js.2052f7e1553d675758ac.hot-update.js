webpackHotUpdate("static/development/pages/posts/[slug].js",{

/***/ "./components/Markdown.tsx":
/*!*********************************!*\
  !*** ./components/Markdown.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/zhouyang/CodeZone/wordog/components/Markdown.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Markdown = function Markdown(_ref) {
  var content = _ref.content;
  return __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a, {
    innerHTML: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: marked__WEBPACK_IMPORTED_MODULE_1___default()(content)
    },
    className: 'markdown-body',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Markdown));

/***/ })

})
//# sourceMappingURL=[slug].js.2052f7e1553d675758ac.hot-update.js.map