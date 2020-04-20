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
    className: "jsx-3233006392",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-3233006392",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Posts"), __jsx("article", {
    className: "jsx-3233006392",
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
      className: "jsx-3233006392",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __jsx("h2", {
      className: "jsx-3233006392",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 19
      }
    }, year), __jsx("ul", {
      className: "jsx-3233006392",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, posts.map(function (post) {
      return __jsx("li", {
        key: post.slug,
        className: "jsx-3233006392",
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
        className: "jsx-3233006392",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 27
        }
      }, __jsx("span", {
        className: "jsx-3233006392",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 29
        }
      }, post.title), __jsx("span", {
        className: "jsx-3233006392",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 29
        }
      }, "".concat(post.date.getMonth() + 1, "\u6708").concat(post.date.getDate(), "\u65E5")))));
    })));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3233006392",
    __self: _this
  }, "main.jsx-3233006392{width:100%;max-width:760px;margin-top:10rem;}ul.jsx-3233006392{list-style-type:none;}li.jsx-3233006392{padding:.5rem 0;border-bottom:1px dotted black;}li.jsx-3233006392>a.jsx-3233006392{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:inherit;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aG91eWFuZy9Db2RlWm9uZS93b3Jkb2cvcGFnZXMvcG9zdHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEb0IsQUFHd0IsQUFNVSxBQUlMLEFBS0gsV0FkRyxLQVVlLEtBSmpDLE1BTG1CLGlCQUNuQixHQVNBLDJCQUlnQyxtSEFDaEIsY0FDTyxrREFDdkIiLCJmaWxlIjoiL1VzZXJzL3pob3V5YW5nL0NvZGVab25lL3dvcmRvZy9wYWdlcy9wb3N0cy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7TmV4dFBhZ2UsIEdldFN0YXRpY1Byb3BzfSBmcm9tICduZXh0J1xuXG5pbXBvcnQge0Jhc2ljTGF5b3V0fSBmcm9tIFwiLi4vLi4vbGF5b3V0c1wiO1xuaW1wb3J0IHtnZXRQb3N0c30gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHtQb3N0fSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwb3N0czogRXhjbHVkZTxQb3N0LCAnY29udGVudCc+W11cbn1cblxuXG5jb25zdCBQb3N0c1BhZ2U6IE5leHRQYWdlPFByb3BzPiA9ICh7cG9zdHN9KSA9PiB7XG4gIGNvbnN0IGdyb3VwQnlQb3N0cyA9IHBvc3RzLm1hcChcbiAgICAgIHBvc3QgPT4gKHsuLi5wb3N0LCBkYXRlOiBuZXcgRGF0ZShwb3N0LmRhdGUpfSlcbiAgKS5yZWR1Y2UoXG4gICAgICAoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBjdXJyLmRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgICAgW3llYXJdOiBbLi4uKGFjY1t5ZWFyXSB8fCBbXSksIGN1cnJdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7fSBhcyB7W3llYXI6IHN0cmluZ106IHR5cGVvZiBwb3N0c31cbiAgKTtcbiAgY29uc29sZS5sb2coZ3JvdXBCeVBvc3RzKTtcblxuICByZXR1cm4gKFxuICAgICAgPEJhc2ljTGF5b3V0PlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8aDE+UG9zdHM8L2gxPlxuICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGdyb3VwQnlQb3N0cykuc29ydCgocHJldiwgY3VycikgPT4gcHJldlswXSA8IGN1cnJbMF0gPyAxIDogLTEpLm1hcCgoW3llYXIsIHBvc3RzXSkgPT4gKFxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGtleT17eWVhcn0+XG4gICAgICAgICAgICAgICAgICA8aDI+e3llYXJ9PC9oMj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0LnNsdWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke3Bvc3Quc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntgJHsocG9zdC5kYXRlIGFzIERhdGUpLmdldE1vbnRoKCkgKyAxfeaciCR7KHBvc3QuZGF0ZSBhcyBEYXRlKS5nZXREYXRlKCl95pelYH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L21haW4+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDc2MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTByZW07XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBsaSA+IGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9CYXNpY0xheW91dD5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0c1BhZ2VcblxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwb3N0cyA9IGdldFBvc3RzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzOiBwb3N0cy5tYXAoKHtjb250ZW50LCAuLi5yZXN0fSkgPT4gcmVzdCkuc29ydChcbiAgICAgICAgICAocHJldiwgY3VycikgPT4gcHJldi5kYXRlID4gY3Vyci5kYXRlID8gMSA6IC0xXG4gICAgICApXG4gICAgfVxuICB9XG59O1xuXG4iXX0= */\n/*@ sourceURL=/Users/zhouyang/CodeZone/wordog/pages/posts/index.tsx */"));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (PostsPage);

/***/ })

})
//# sourceMappingURL=posts.js.aa5ead71923c7753e5d6.hot-update.js.map