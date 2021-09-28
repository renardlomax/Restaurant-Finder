webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_restaurantList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/restaurantList */ "./components/restaurantList.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ "./node_modules/react-firebaseui/StyledFirebaseAuth.js");
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase/clientApp */ "./firebase/clientApp.js");


var _jsxFileName = "C:\\Users\\renar\\OneDrive\\Desktop\\class\\Capstone Restaurant\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







im;

function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      query = _useState[0],
      setQuery = _useState[1]; //   const uiConfig = {
  //     signInSuccessUrl: "./register",
  //     signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  // };


  var _useAuthState = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__["useAuthState"])(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_7__["default"].auth()),
      _useAuthState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useAuthState, 3),
      user = _useAuthState2[0],
      loading = _useAuthState2[1],
      error = _useAuthState2[2];

  console.log("Loading:", loading, "|", "Current User:", user);
  return __jsx("div", {
    className: "jsx-919009060" + " " + "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-919009060",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, " Local Restaurants"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    addonType: "append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, " Search "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Enter Restaurant",
    onChange: function onChange(e) {
      return setQuery(e.target.value.toLocaleLowerCase());
    },
    value: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  })), __jsx("br", {
    className: "jsx-919009060",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 30
    }
  }), __jsx(_components_restaurantList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    search: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "919009060",
    __self: this
  }, "h2{text-align:center;color:black;height:90px;font-size:40px;background-color:lightblue;font-family:'Playfair Display',serif;padding-top:20px;font-weight:bold;}a{-webkit-text-decoration:underline;text-decoration:underline;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmVuYXJcXE9uZURyaXZlXFxEZXNrdG9wXFxjbGFzc1xcQ2Fwc3RvbmUgUmVzdGF1cmFudFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDZ0MsQUFJcUMsQUFZSSxrQkFYVixZQUVBLFlBQ0csZUFDWSxHQVFkLGlCQUVsQixPQVQyQyxxQ0FDckIsaUJBQ0EsaUJBRXRCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccmVuYXJcXE9uZURyaXZlXFxEZXNrdG9wXFxjbGFzc1xcQ2Fwc3RvbmUgUmVzdGF1cmFudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZXN0YXVyYW50TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3RhdXJhbnRMaXN0JztcclxuaW1wb3J0IHsgSW5wdXRHcm91cCwgSW5wdXRHcm91cEFkZG9uLElucHV0fSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCAgU3R5bGVkRmlyZWJhc2VBdXRoICBmcm9tIFwicmVhY3QtZmlyZWJhc2V1aS9TdHlsZWRGaXJlYmFzZUF1dGhcIlxyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uL2ZpcmViYXNlL2NsaWVudEFwcFwiO1xyXG5pbVxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vICAgY29uc3QgdWlDb25maWcgPSB7XHJcblxyXG4gIC8vICAgICBzaWduSW5TdWNjZXNzVXJsOiBcIi4vcmVnaXN0ZXJcIixcclxuICAvLyAgICAgc2lnbkluT3B0aW9uczogW2ZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEXSxcclxuICAvLyB9O1xyXG4gIGNvbnN0IFt1c2VyLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VBdXRoU3RhdGUoZmlyZWJhc2UuYXV0aCgpKTtcclxuICBjb25zb2xlLmxvZyhcIkxvYWRpbmc6XCIsIGxvYWRpbmcsIFwifFwiLCBcIkN1cnJlbnQgVXNlcjpcIiAsIHVzZXIpXHJcbiAgXHJcbiBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgPGgyPiBMb2NhbCBSZXN0YXVyYW50czwvaDI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cImFwcGVuZFwiPiBTZWFyY2ggPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZXN0YXVyYW50XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIHsvKiA8U3R5bGVkRmlyZWJhc2VBdXRoIHVpQ29uZmlnPXt1aUNvbmZpZ30gZmlyZWJhc2VBdXRoPXtmaXJlYmFzZS5hdXRoKCl9IC8+ICovfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFJlc3RhdXJhbnRMaXN0IHNlYXJjaD17cXVlcnl9IC8+XHJcbiAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICBcclxuICAgICk7XHJcbiAgIFxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBIb21lO1xyXG4gICJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\renar\\\\OneDrive\\\\Desktop\\\\class\\\\Capstone Restaurant\\\\pages\\\\index.js */"));
}

_s(Home, "EhW6j91l/Jrnqm1+WbIQAW7jEg0=", false, function () {
  return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__["useAuthState"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW0iLCJIb21lIiwidXNlU3RhdGUiLCJxdWVyeSIsInNldFF1ZXJ5IiwidXNlQXV0aFN0YXRlIiwiZmlyZWJhc2UiLCJhdXRoIiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b0xvY2FsZUxvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFOztBQUdGLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxFQUFELENBRHRCO0FBQUEsTUFDTEMsS0FESztBQUFBLE1BQ0VDLFFBREYsaUJBRWQ7QUFFQTtBQUNBO0FBQ0E7OztBQU5jLHNCQU9pQkMsOEVBQVksQ0FBQ0MsMkRBQVEsQ0FBQ0MsSUFBVCxFQUFELENBUDdCO0FBQUE7QUFBQSxNQU9QQyxJQVBPO0FBQUEsTUFPREMsT0FQQztBQUFBLE1BT1FDLEtBUFI7O0FBUWRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JILE9BQXhCLEVBQWlDLEdBQWpDLEVBQXNDLGVBQXRDLEVBQXdERCxJQUF4RDtBQUdFLFNBRU07QUFBQSx1Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosRUFFTSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDBEQUFEO0FBQWlCLGFBQVMsRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEVBRUEsTUFBQyxnREFBRDtBQUNFLGVBQVcsRUFBQyxrQkFEZDtBQUVJLFlBQVEsRUFBRSxrQkFBQ0ssQ0FBRDtBQUFBLGFBQ1ZULFFBQVEsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsaUJBQWYsRUFBRCxDQURFO0FBQUEsS0FGZDtBQUtJLFNBQUssRUFBRWIsS0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsQ0FGTixFQVdtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYbkIsRUFjRSxNQUFDLGtFQUFEO0FBQWdCLFVBQU0sRUFBRUEsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGO0FBQUE7QUFBQTtBQUFBLHd1SEFGTjtBQXdDRDs7R0FuRE1GLEk7VUFPd0JJLHNFOzs7S0FQeEJKLEk7QUFvRFFBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE1YWE0NmIyZjhlNDM2NWJjOTExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlc3RhdXJhbnRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdGF1cmFudExpc3QnO1xyXG5pbXBvcnQgeyBJbnB1dEdyb3VwLCBJbnB1dEdyb3VwQWRkb24sSW5wdXR9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0ICBTdHlsZWRGaXJlYmFzZUF1dGggIGZyb20gXCJyZWFjdC1maXJlYmFzZXVpL1N0eWxlZEZpcmViYXNlQXV0aFwiXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vZmlyZWJhc2UvY2xpZW50QXBwXCI7XHJcbmltXHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8gICBjb25zdCB1aUNvbmZpZyA9IHtcclxuXHJcbiAgLy8gICAgIHNpZ25JblN1Y2Nlc3NVcmw6IFwiLi9yZWdpc3RlclwiLFxyXG4gIC8vICAgICBzaWduSW5PcHRpb25zOiBbZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSURdLFxyXG4gIC8vIH07XHJcbiAgY29uc3QgW3VzZXIsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUF1dGhTdGF0ZShmaXJlYmFzZS5hdXRoKCkpO1xyXG4gIGNvbnNvbGUubG9nKFwiTG9hZGluZzpcIiwgbG9hZGluZywgXCJ8XCIsIFwiQ3VycmVudCBVc2VyOlwiICwgdXNlcilcclxuICBcclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICA8aDI+IExvY2FsIFJlc3RhdXJhbnRzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwiYXBwZW5kXCI+IFNlYXJjaCA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlc3RhdXJhbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZXRRdWVyeShlLnRhcmdldC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgey8qIDxTdHlsZWRGaXJlYmFzZUF1dGggdWlDb25maWc9e3VpQ29uZmlnfSBmaXJlYmFzZUF1dGg9e2ZpcmViYXNlLmF1dGgoKX0gLz4gKi99XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8UmVzdGF1cmFudExpc3Qgc2VhcmNoPXtxdWVyeX0gLz5cclxuICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgKTtcclxuICAgXHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==