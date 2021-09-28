webpackHotUpdate_N_E("pages/checkout",{

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_checkoutForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/checkoutForm */ "./components/checkoutForm.js");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/cart */ "./components/cart.js");
var _jsxFileName = "C:\\Users\\renar\\OneDrive\\Desktop\\class\\Capstone Restaurant\\pages\\checkout.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* pages/checkout.js */








function Checkout() {
  _s();

  // get app context
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
      isAuthenticated = _useContext.isAuthenticated; // isAuthenticated is passed to the cart component to display order button
  // const isAuthenticated  = true;
  // load stripe to inject into elements components


  var stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__["loadStripe"])("pk_test_51JWLntFxjMMihmNvP9Gk0qJNgQ16dz6zyrXevn5lujfFX24jaU9nfQrKN2FmeYnKy1v9P2vedSpDWsQRRf04zJ4u00MJu3bib9");
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    style: {
      paddingRight: 0
    },
    sm: {
      size: 3,
      order: 1,
      offset: 2
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isAuthenticated: isAuthenticated,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    style: {
      paddingLeft: 5
    },
    sm: {
      size: 6,
      order: 2
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__["Elements"], {
    stripe: stripePromise,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_components_checkoutForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2756834755",
    __self: this
  }, "h1{padding-left:10px;fon;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmVuYXJcXE9uZURyaXZlXFxEZXNrdG9wXFxjbGFzc1xcQ2Fwc3RvbmUgUmVzdGF1cmFudFxccGFnZXNcXGNoZWNrb3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DeUIsQUFHMkIsa0JBRXJCLElBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxyZW5hclxcT25lRHJpdmVcXERlc2t0b3BcXGNsYXNzXFxDYXBzdG9uZSBSZXN0YXVyYW50XFxwYWdlc1xcY2hlY2tvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwYWdlcy9jaGVja291dC5qcyAqL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIENvbnRhaW5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcclxuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcclxuaW1wb3J0IENoZWNrb3V0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGVja291dEZvcm1cIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJ0XCI7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dCgpIHtcclxuICAvLyBnZXQgYXBwIGNvbnRleHRcclxuICBjb25zdCB7aXNBdXRoZW50aWNhdGVkfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbiAgLy8gaXNBdXRoZW50aWNhdGVkIGlzIHBhc3NlZCB0byB0aGUgY2FydCBjb21wb25lbnQgdG8gZGlzcGxheSBvcmRlciBidXR0b25cclxuICAvLyBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgID0gdHJ1ZTtcclxuICBcclxuICAvLyBsb2FkIHN0cmlwZSB0byBpbmplY3QgaW50byBlbGVtZW50cyBjb21wb25lbnRzXHJcbiAgY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUoXHJcbiAgICBcInBrX3Rlc3RfNTFKV0xudEZ4ak1NaWhtTnZQOUdrMHFKTmdRMTZkejZ6eXJYZXZuNWx1amZGWDI0amFVOW5mUXJLTjJGbWVZbkt5MXY5UDJ2ZWRTcERXc1FSUmYwNHpKNHUwME1KdTNiaWI5XCJcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICBcclxuICAgIDxDb250YWluZXI+IFxyXG4gICAgPFJvdz5cclxuICAgICAgXHJcbiAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAwIH19IHNtPXt7IHNpemU6IDMsIG9yZGVyOiAxLCBvZmZzZXQ6IDIgfX0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPENhcnQgaXNBdXRoZW50aWNhdGVkPXtpc0F1dGhlbnRpY2F0ZWR9IC8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiA1IH19IHNtPXt7IHNpemU6IDYsIG9yZGVyOiAyIH19PlxyXG4gICAgICAgIDxFbGVtZW50cyBzdHJpcGU9e3N0cmlwZVByb21pc2V9PlxyXG4gICAgICAgICAgPENoZWNrb3V0Rm9ybSAvPlxyXG4gICAgICAgIDwvRWxlbWVudHM+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvblxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgLy8gfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\renar\\\\OneDrive\\\\Desktop\\\\class\\\\Capstone Restaurant\\\\pages\\\\checkout.js */")))); // }
}

_s(Checkout, "GtrAsE+c3H8n3wulM7SYqbWjm6I=");

_c = Checkout;
/* harmony default export */ __webpack_exports__["default"] = (Checkout);

var _c;

$RefreshReg$(_c, "Checkout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQuanMiXSwibmFtZXMiOlsiQ2hlY2tvdXQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwicGFkZGluZ1JpZ2h0Iiwic2l6ZSIsIm9yZGVyIiwib2Zmc2V0IiwicGFkZGluZ0xlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFDbEI7QUFEa0Isb0JBRVFDLHdEQUFVLENBQUNDLDJEQUFELENBRmxCO0FBQUEsTUFFWEMsZUFGVyxlQUVYQSxlQUZXLEVBR2xCO0FBQ0E7QUFFQTs7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHQyxvRUFBVSxDQUM5Qiw2R0FEOEIsQ0FBaEM7QUFJQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDhDQUFEO0FBQUssU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FBWjtBQUFpQyxNQUFFLEVBQUU7QUFBRUMsVUFBSSxFQUFFLENBQVI7QUFBV0MsV0FBSyxFQUFFLENBQWxCO0FBQXFCQyxZQUFNLEVBQUU7QUFBN0IsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsd0RBQUQ7QUFBTSxtQkFBZSxFQUFFTixlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FGRixFQU1FLE1BQUMsOENBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBRU8saUJBQVcsRUFBRTtBQUFmLEtBQVo7QUFBZ0MsTUFBRSxFQUFFO0FBQUVILFVBQUksRUFBRSxDQUFSO0FBQVdDLFdBQUssRUFBRTtBQUFsQixLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFVLFVBQU0sRUFBRUosYUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FORjtBQUFBO0FBQUE7QUFBQSw4akZBREEsQ0FGQSxDQURGLENBWGtCLENBc0NsQjtBQUNEOztHQXZDUUosUTs7S0FBQUEsUTtBQXdDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuMmE1MzcxNzE2ODZhYjU0MDM4MDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHBhZ2VzL2NoZWNrb3V0LmpzICovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xyXG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xyXG5pbXBvcnQgQ2hlY2tvdXRGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2NoZWNrb3V0Rm9ybVwiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0XCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRcIjtcclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xyXG4gIC8vIGdldCBhcHAgY29udGV4dFxyXG4gIGNvbnN0IHtpc0F1dGhlbnRpY2F0ZWR9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICAvLyBpc0F1dGhlbnRpY2F0ZWQgaXMgcGFzc2VkIHRvIHRoZSBjYXJ0IGNvbXBvbmVudCB0byBkaXNwbGF5IG9yZGVyIGJ1dHRvblxyXG4gIC8vIGNvbnN0IGlzQXV0aGVudGljYXRlZCAgPSB0cnVlO1xyXG4gIFxyXG4gIC8vIGxvYWQgc3RyaXBlIHRvIGluamVjdCBpbnRvIGVsZW1lbnRzIGNvbXBvbmVudHNcclxuICBjb25zdCBzdHJpcGVQcm9taXNlID0gbG9hZFN0cmlwZShcclxuICAgIFwicGtfdGVzdF81MUpXTG50RnhqTU1paG1OdlA5R2swcUpOZ1ExNmR6Nnp5clhldm41bHVqZkZYMjRqYVU5bmZRcktOMkZtZVluS3kxdjlQMnZlZFNwRFdzUVJSZjA0eko0dTAwTUp1M2JpYjlcIlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgIFxyXG4gICAgPENvbnRhaW5lcj4gXHJcbiAgICA8Um93PlxyXG4gICAgICBcclxuICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IDAgfX0gc209e3sgc2l6ZTogMywgb3JkZXI6IDEsIG9mZnNldDogMiB9fT5cclxuICAgICAgICBcclxuICAgICAgICA8Q2FydCBpc0F1dGhlbnRpY2F0ZWQ9e2lzQXV0aGVudGljYXRlZH0gLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDUgfX0gc209e3sgc2l6ZTogNiwgb3JkZXI6IDIgfX0+XHJcbiAgICAgICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlUHJvbWlzZX0+XHJcbiAgICAgICAgICA8Q2hlY2tvdXRGb3JtIC8+XHJcbiAgICAgICAgPC9FbGVtZW50cz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgZm9uXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L1Jvdz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICAvLyB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=