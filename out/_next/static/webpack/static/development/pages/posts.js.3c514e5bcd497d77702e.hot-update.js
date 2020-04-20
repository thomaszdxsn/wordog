webpackHotUpdate("static/development/pages/posts.js",{

/***/ "./pages/posts/index.tsx":
/*!*******************************!*\
  !*** ./pages/posts/index.tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts */ "./layouts/index.tsx");




var _this = undefined,
    _jsxFileName = "/Users/zhouyang/CodeZone/wordog/pages/posts/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var PostsPage = function PostsPage(_ref) {
  var posts = _ref.posts;
  var groupByPosts = posts.map(function (post) {
    return _objectSpread({}, post, {
      date: new Date(post.date)
    });
  }).reduce(function (acc, curr) {
    var year = curr.date.getFullYear().toString();
    return _objectSpread({}, acc, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, year, [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(acc[year] || []), [curr])));
  }, {});
  console.log(groupByPosts);
  return __jsx(_layouts__WEBPACK_IMPORTED_MODULE_6__["BasicLayout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("main", {
    className: "jsx-2124836901",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-2124836901",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Posts"), __jsx("article", {
    className: "jsx-2124836901",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, Object.entries(groupByPosts).sort(function (prev, curr) {
    return prev[0] < curr[0] ? 1 : -1;
  }).map(function (_ref2) {
    var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
        year = _ref3[0],
        posts = _ref3[1];

    return __jsx("section", {
      key: year,
      className: "jsx-2124836901",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __jsx("h2", {
      className: "jsx-2124836901",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 19
      }
    }, year), __jsx("ul", {
      className: "jsx-2124836901",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, posts.map(function (post) {
      return __jsx("li", {
        key: post.slug,
        className: "jsx-2124836901",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 23
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/posts/".concat(post.slug),
        passHref: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }
      }, __jsx("a", {
        className: "jsx-2124836901",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 27
        }
      }, __jsx("span", {
        className: "jsx-2124836901",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 29
        }
      }, post.title), __jsx("span", {
        className: "jsx-2124836901",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 29
        }
      }, "".concat(post.date.getMonth() + 1, "\u6708").concat(post.date.getDate(), "\u65E5")))));
    })));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2124836901",
    __self: _this
  }, "main.jsx-2124836901{width:100%;max-width:760px;}ul.jsx-2124836901{list-style-type:none;}li.jsx-2124836901{padding:.5rem 0;border-bottom:1px dotted black;}li.jsx-2124836901>a.jsx-2124836901{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:inherit;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aG91eWFuZy9Db2RlWm9uZS93b3Jkb2cvcGFnZXMvcG9zdHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEb0IsQUFHd0IsQUFLVSxBQUlMLEFBS0gsV0FiRyxLQVNlLEtBSmpDLE1BSkEsb0JBU0EsMkJBSWdDLG1IQUNoQixjQUNPLGtEQUN2QiIsImZpbGUiOiIvVXNlcnMvemhvdXlhbmcvQ29kZVpvbmUvd29yZG9nL3BhZ2VzL3Bvc3RzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtOZXh0UGFnZSwgR2V0U3RhdGljUHJvcHN9IGZyb20gJ25leHQnXG5cbmltcG9ydCB7QmFzaWNMYXlvdXR9IGZyb20gXCIuLi8uLi9sYXlvdXRzXCI7XG5pbXBvcnQge2dldFBvc3RzfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQge1Bvc3R9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBvc3RzOiBFeGNsdWRlPFBvc3QsICdjb250ZW50Jz5bXVxufVxuXG5cbmNvbnN0IFBvc3RzUGFnZTogTmV4dFBhZ2U8UHJvcHM+ID0gKHtwb3N0c30pID0+IHtcbiAgY29uc3QgZ3JvdXBCeVBvc3RzID0gcG9zdHMubWFwKFxuICAgICAgcG9zdCA9PiAoey4uLnBvc3QsIGRhdGU6IG5ldyBEYXRlKHBvc3QuZGF0ZSl9KVxuICApLnJlZHVjZShcbiAgICAgIChhY2MsIGN1cnIpID0+IHtcbiAgICAgICAgY29uc3QgeWVhciA9IGN1cnIuZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5hY2MsXG4gICAgICAgICAgICBbeWVhcl06IFsuLi4oYWNjW3llYXJdIHx8IFtdKSwgY3Vycl1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHt9IGFzIHtbeWVhcjogc3RyaW5nXTogdHlwZW9mIHBvc3RzfVxuICApO1xuICBjb25zb2xlLmxvZyhncm91cEJ5UG9zdHMpO1xuXG4gIHJldHVybiAoXG4gICAgICA8QmFzaWNMYXlvdXQ+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxoMT5Qb3N0czwvaDE+XG4gICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoZ3JvdXBCeVBvc3RzKS5zb3J0KChwcmV2LCBjdXJyKSA9PiBwcmV2WzBdIDwgY3VyclswXSA/IDEgOiAtMSkubWFwKChbeWVhciwgcG9zdHNdKSA9PiAoXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24ga2V5PXt5ZWFyfT5cbiAgICAgICAgICAgICAgICAgIDxoMj57eWVhcn08L2gyPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3Quc2x1Z30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7cG9zdC5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Akeyhwb3N0LmRhdGUgYXMgRGF0ZSkuZ2V0TW9udGgoKSArIDF95pyIJHsocG9zdC5kYXRlIGFzIERhdGUpLmdldERhdGUoKX3ml6VgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvbWFpbj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzYwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBsaSA+IGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9CYXNpY0xheW91dD5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0c1BhZ2VcblxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwb3N0cyA9IGdldFBvc3RzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzOiBwb3N0cy5tYXAoKHtjb250ZW50LCAuLi5yZXN0fSkgPT4gcmVzdCkuc29ydChcbiAgICAgICAgICAocHJldiwgY3VycikgPT4gcHJldi5kYXRlID4gY3Vyci5kYXRlID8gMSA6IC0xXG4gICAgICApXG4gICAgfVxuICB9XG59O1xuXG4iXX0= */\n/*@ sourceURL=/Users/zhouyang/CodeZone/wordog/pages/posts/index.tsx */"));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (PostsPage);

/***/ })

})
//# sourceMappingURL=posts.js.3c514e5bcd497d77702e.hot-update.js.map