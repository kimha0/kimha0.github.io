webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\nvar _jsxFileName = \"/Users/hayoung.kim2/Documents/kimha0.github.io/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction List(_ref) {\n  var _this = this;\n\n  var slugs = _ref.slugs;\n  return __jsx(\"div\", {\n    className: \"grid gap-4 grid-cols-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, slugs.map(function (slug) {\n    return __jsx(ListItem, {\n      key: slug.title,\n      item: slug,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 26\n      }\n    });\n  }));\n}\n\n_c = List;\n\nfunction ListItem(_ref2) {\n  var item = _ref2.item;\n  return __jsx(\"section\", {\n    className: \"notosanskr bg-transparent border-b border-gray-500 pb-12 px-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"text-xs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, item.createDate), __jsx(\"p\", {\n    className: \"text-2xl leading-7 text-gray-800\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, item.title), __jsx(\"p\", {\n    className: \"text-base mb-2 text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, item.categories)), __jsx(\"figure\", {\n    className: \"overflow-hidden mb-8 lg:mb-12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: item.thumbnail,\n    className: \"object-cover w-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"text-base text-gray-600 markdown-body max-h-80 overflow-hidden relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, item.content), __jsx(\"div\", {\n    className: \"bg-gradient-to-b from-transparent to-white h-40 absolute top-80 w-full transform -translate-y-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  })));\n}\n\n_c2 = ListItem;\nvar __N_SSG = true;\nfunction Home(_ref3) {\n  var slugs = _ref3.slugs;\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, __jsx(List, {\n    slugs: slugs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }));\n}\n_c3 = Home;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c2, \"ListItem\");\n$RefreshReg$(_c3, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiTGlzdCIsInNsdWdzIiwibWFwIiwic2x1ZyIsInRpdGxlIiwiTGlzdEl0ZW0iLCJpdGVtIiwiY3JlYXRlRGF0ZSIsImNhdGVnb3JpZXMiLCJ0aHVtYm5haWwiLCJjb250ZW50IiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQVdBLFNBQVNBLElBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFqQkMsS0FBaUIsUUFBakJBLEtBQWlCO0FBQy9CLFNBQ0U7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsV0FBSSxNQUFDLFFBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsS0FBcEI7QUFBMkIsVUFBSSxFQUFFRCxJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFBQSxHQUFkLENBREgsQ0FERjtBQUtEOztLQU5RSCxJOztBQVFULFNBQVNLLFFBQVQsUUFBaUQ7QUFBQSxNQUE3QkMsSUFBNkIsU0FBN0JBLElBQTZCO0FBQy9DLFNBQ0U7QUFBUyxhQUFTLEVBQUMsK0RBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdCQSxJQUFJLENBQUNDLFVBQTdCLENBREYsRUFFRTtBQUFHLGFBQVMsRUFBQyxrQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlERCxJQUFJLENBQUNGLEtBQXRELENBRkYsRUFHRTtBQUFHLGFBQVMsRUFBQyw4QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZDRSxJQUFJLENBQUNFLFVBQWxELENBSEYsQ0FERixFQU1FO0FBQVEsYUFBUyxFQUFDLCtCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVGLElBQUksQ0FBQ0csU0FBZjtBQUEwQixhQUFTLEVBQUMscUJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLEVBU0U7QUFBSyxhQUFTLEVBQUMseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQkgsSUFBSSxDQUFDSSxPQUFyQixDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsb0dBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBVEYsQ0FERjtBQWdCRDs7TUFqQlFMLFE7O0FBa0JNLFNBQVNNLElBQVQsUUFBaUM7QUFBQSxNQUFqQlYsS0FBaUIsU0FBakJBLEtBQWlCO0FBQzlDLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxJQUFEO0FBQU0sU0FBSyxFQUFFQSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0Q7TUFOdUJVLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBnZXRQb3N0TGlzdCB9IGZyb20gJy4uL2xpYi9hcGknXG5pbXBvcnQgeyBjb252ZXJ0TGlzdENvbnRlbnQgfSBmcm9tICcuLi9saWIvZGF0YSdcbmltcG9ydCBtYXJrZG93blRvSHRtbCBmcm9tICcuLi9saWIvbWFya2Rvd25Ub0h0bWwnXG5cbmltcG9ydCB0eXBlIHsgSUxpc3REYXRhIH0gZnJvbSAnLi4vdHlwZXMvbGlzdCdcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHNsdWdzOiBJTGlzdERhdGFbXVxufVxuXG5mdW5jdGlvbiBMaXN0KHsgc2x1Z3MgfTogSVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ2FwLTQgZ3JpZC1jb2xzLTEnPlxuICAgICAge3NsdWdzLm1hcChzbHVnID0+IDxMaXN0SXRlbSBrZXk9e3NsdWcudGl0bGV9IGl0ZW09e3NsdWd9IC8+KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBMaXN0SXRlbSh7IGl0ZW0gfTogeyBpdGVtOiBJTGlzdERhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbm90b3NhbnNrciBiZy10cmFuc3BhcmVudCBib3JkZXItYiBib3JkZXItZ3JheS01MDAgcGItMTIgcHgtNCc+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMnPntpdGVtLmNyZWF0ZURhdGV9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtMnhsIGxlYWRpbmctNyB0ZXh0LWdyYXktODAwJz57aXRlbS50aXRsZX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1iYXNlIG1iLTIgdGV4dC1ncmF5LTcwMCc+e2l0ZW0uY2F0ZWdvcmllc308L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPSdvdmVyZmxvdy1oaWRkZW4gbWItOCBsZzptYi0xMic+XG4gICAgICAgIDxpbWcgc3JjPXtpdGVtLnRodW1ibmFpbH0gY2xhc3NOYW1lPSdvYmplY3QtY292ZXIgdy1mdWxsJy8+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMCBtYXJrZG93bi1ib2R5IG1heC1oLTgwIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSc+XG4gICAgICAgIDxSZWFjdE1hcmtkb3duPntpdGVtLmNvbnRlbnR9PC9SZWFjdE1hcmtkb3duPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JhZGllbnQtdG8tYiBmcm9tLXRyYW5zcGFyZW50IHRvLXdoaXRlIGgtNDAgYWJzb2x1dGUgdG9wLTgwIHctZnVsbCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LWZ1bGwnPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgc2x1Z3MgfTogSVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxMaXN0IHNsdWdzPXtzbHVnc30gLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gZ2V0UG9zdExpc3QoKVxuICAgIC5tYXAocG9zdCA9PiAoe1xuICAgICAgLi4ucG9zdCxcbiAgICAgIGNvbnRlbnQ6IGNvbnZlcnRMaXN0Q29udGVudChwb3N0LmNvbnRlbnQpXG4gICAgfSkpXG4gIFxuICAvLyBjb25zdCBjb250ZW50cyA9IGF3YWl0IFByb21pc2UuYWxsKHBvc3RzLm1hcChzbHVnID0+IG1hcmtkb3duVG9IdG1sKHNsdWcuY29udGVudCkpKVxuICAvLyBjb25zdCBzbHVncyA9IHBvc3RzLm1hcCgoc2x1ZywgaSkgPT4gKHsgLi4uc2x1ZywgY29udGVudDogY29udGVudHNbaV0gfSkpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBzbHVnczogcG9zdHMgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})