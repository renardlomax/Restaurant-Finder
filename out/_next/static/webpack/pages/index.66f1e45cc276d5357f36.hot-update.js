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
    className: "jsx-1849317760" + " " + "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-1849317760",
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
    className: "jsx-1849317760",
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
    id: "1849317760",
    __self: this
  }, "h2{text-align:center;color:black;height:90px;font-size:40px;font-family:'Playfair Display',serif;padding-top:20px;font-weight:bold;}a{-webkit-text-decoration:underline;text-decoration:underline;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmVuYXJcXE9uZURyaXZlXFxEZXNrdG9wXFxjbGFzc1xcQ2Fwc3RvbmUgUmVzdGF1cmFudFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDZ0MsQUFJcUMsQUFXSSxrQkFWVixZQUVBLFlBQ0csZUFDdUIsR0FPekIsaUJBRWxCLGlCQVJzQixpQkFDQSxpQkFFdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxyZW5hclxcT25lRHJpdmVcXERlc2t0b3BcXGNsYXNzXFxDYXBzdG9uZSBSZXN0YXVyYW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlc3RhdXJhbnRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdGF1cmFudExpc3QnO1xyXG5pbXBvcnQgeyBJbnB1dEdyb3VwLCBJbnB1dEdyb3VwQWRkb24sSW5wdXR9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0ICBTdHlsZWRGaXJlYmFzZUF1dGggIGZyb20gXCJyZWFjdC1maXJlYmFzZXVpL1N0eWxlZEZpcmViYXNlQXV0aFwiXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vZmlyZWJhc2UvY2xpZW50QXBwXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vICAgY29uc3QgdWlDb25maWcgPSB7XHJcblxyXG4gIC8vICAgICBzaWduSW5TdWNjZXNzVXJsOiBcIi4vcmVnaXN0ZXJcIixcclxuICAvLyAgICAgc2lnbkluT3B0aW9uczogW2ZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEXSxcclxuICAvLyB9O1xyXG4gIGNvbnN0IFt1c2VyLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VBdXRoU3RhdGUoZmlyZWJhc2UuYXV0aCgpKTtcclxuICBjb25zb2xlLmxvZyhcIkxvYWRpbmc6XCIsIGxvYWRpbmcsIFwifFwiLCBcIkN1cnJlbnQgVXNlcjpcIiAsIHVzZXIpXHJcbiAgXHJcbiBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgPGgyPiBMb2NhbCBSZXN0YXVyYW50czwvaDI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cImFwcGVuZFwiPiBTZWFyY2ggPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZXN0YXVyYW50XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIHsvKiA8U3R5bGVkRmlyZWJhc2VBdXRoIHVpQ29uZmlnPXt1aUNvbmZpZ30gZmlyZWJhc2VBdXRoPXtmaXJlYmFzZS5hdXRoKCl9IC8+ICovfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFJlc3RhdXJhbnRMaXN0IHNlYXJjaD17cXVlcnl9IC8+XHJcbiAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgXHJcbiAgICApO1xyXG4gICBcclxuICB9XHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuICAiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\renar\\\\OneDrive\\\\Desktop\\\\class\\\\Capstone Restaurant\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsInVzZUF1dGhTdGF0ZSIsImZpcmViYXNlIiwiYXV0aCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb2NhbGVMb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNMQyxLQURLO0FBQUEsTUFDRUMsUUFERixpQkFFZDtBQUVBO0FBQ0E7QUFDQTs7O0FBTmMsc0JBT2lCQyw4RUFBWSxDQUFDQywyREFBUSxDQUFDQyxJQUFULEVBQUQsQ0FQN0I7QUFBQTtBQUFBLE1BT1BDLElBUE87QUFBQSxNQU9EQyxPQVBDO0FBQUEsTUFPUUMsS0FQUjs7QUFRZEMsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkgsT0FBeEIsRUFBaUMsR0FBakMsRUFBc0MsZUFBdEMsRUFBd0RELElBQXhEO0FBR0UsU0FFTTtBQUFBLHdDQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUVNLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsMERBQUQ7QUFBaUIsYUFBUyxFQUFDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFFQSxNQUFDLGdEQUFEO0FBQ0UsZUFBVyxFQUFDLGtCQURkO0FBRUksWUFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEsYUFDVlQsUUFBUSxDQUFDUyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxpQkFBZixFQUFELENBREU7QUFBQSxLQUZkO0FBS0ksU0FBSyxFQUFFYixLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxDQUZOLEVBV21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhuQixFQWNFLE1BQUMsa0VBQUQ7QUFBZ0IsVUFBTSxFQUFFQSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEY7QUFBQTtBQUFBO0FBQUEsaW9IQUZOO0FBdUNEOztHQWxETUYsSTtVQU93Qkksc0U7OztLQVB4QkosSTtBQW1EUUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjZmMWU0NWNjMjc2ZDUzNTdmMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVzdGF1cmFudExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdCc7XHJcbmltcG9ydCB7IElucHV0R3JvdXAsIElucHV0R3JvdXBBZGRvbixJbnB1dH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgIFN0eWxlZEZpcmViYXNlQXV0aCAgZnJvbSBcInJlYWN0LWZpcmViYXNldWkvU3R5bGVkRmlyZWJhc2VBdXRoXCJcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZS9jbGllbnRBcHBcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8gICBjb25zdCB1aUNvbmZpZyA9IHtcclxuXHJcbiAgLy8gICAgIHNpZ25JblN1Y2Nlc3NVcmw6IFwiLi9yZWdpc3RlclwiLFxyXG4gIC8vICAgICBzaWduSW5PcHRpb25zOiBbZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSURdLFxyXG4gIC8vIH07XHJcbiAgY29uc3QgW3VzZXIsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUF1dGhTdGF0ZShmaXJlYmFzZS5hdXRoKCkpO1xyXG4gIGNvbnNvbGUubG9nKFwiTG9hZGluZzpcIiwgbG9hZGluZywgXCJ8XCIsIFwiQ3VycmVudCBVc2VyOlwiICwgdXNlcilcclxuICBcclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICA8aDI+IExvY2FsIFJlc3RhdXJhbnRzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwiYXBwZW5kXCI+IFNlYXJjaCA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlc3RhdXJhbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZXRRdWVyeShlLnRhcmdldC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgey8qIDxTdHlsZWRGaXJlYmFzZUF1dGggdWlDb25maWc9e3VpQ29uZmlnfSBmaXJlYmFzZUF1dGg9e2ZpcmViYXNlLmF1dGgoKX0gLz4gKi99XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8UmVzdGF1cmFudExpc3Qgc2VhcmNoPXtxdWVyeX0gLz5cclxuICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICBcclxuICAgICk7XHJcbiAgIFxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBIb21lO1xyXG4gICJdLCJzb3VyY2VSb290IjoiIn0=