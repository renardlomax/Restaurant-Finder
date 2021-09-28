webpackHotUpdate_N_E("pages/checkout",{

/***/ "./components/checkoutForm.js":
/*!************************************!*\
  !*** ./components/checkoutForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _cardSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cardSection */ "./components/cardSection.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\renar\\OneDrive\\Desktop\\class\\Capstone Restaurant\\components\\checkoutForm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function CheckoutForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    address: "",
    city: "",
    state: "",
    stripe_id: ""
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      error = _useState2[0],
      setError = _useState2[1];

  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useStripe"])();
  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useElements"])();
  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_9__["default"]);

  function onChange(e) {
    // set the key = to the name property equal to the value typed
    var updateItem = data[e.target.name] = e.target.value; // update the state data object

    setData(_objectSpread(_objectSpread({}, data), {}, {
      updateItem: updateItem
    }));
  }

  function submitOrder() {
    return _submitOrder.apply(this, arguments);
  }

  function _submitOrder() {
    _submitOrder = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var cardElement, API_URL, token, userToken, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // event.preventDefault();
              // // Use elements.getElement to get a reference to the mounted Element.
              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["CardElement"]); // // Pass the Element directly to other Stripe.js methods:
              // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
              // get token back from stripe to process credit card

              API_URL = "http://localhost:1337" || false;
              _context.next = 4;
              return stripe.createToken(cardElement);

            case 4:
              token = _context.sent;
              userToken = js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get("token");
              _context.next = 8;
              return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat(API_URL, "/orders"), {
                method: "POST",
                headers: userToken && {
                  Authorization: "Bearer ".concat(userToken)
                },
                body: JSON.stringify({
                  amount: Number(Math.round(appContext.cart.total + "e2") + "e-2"),
                  dishes: appContext.cart.items,
                  address: data.address,
                  city: data.city,
                  state: data.state,
                  token: token.token.id
                })
              });

            case 8:
              response = _context.sent;

              if (!response.ok) {
                setError(response.statusText);
                console.log("SUCCESS");
              }

              alert('Order was successful'); // OTHER stripe methods you can use depending on app
              // // or createPaymentMethod - https://stripe.com/docs/js/payment_intents/create_payment_method
              // stripe.createPaymentMethod({
              //   type: "card",
              //   card: cardElement,
              // });
              // // or confirmCardPayment - https://stripe.com/docs/js/payment_intents/confirm_card_payment
              // stripe.confirmCardPayment(paymentIntentClientSecret, {
              //   payment_method: {
              //     card: cardElement,
              //   },
              // });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _submitOrder.apply(this, arguments);
  }

  return __jsx("div", {
    className: "jsx-4250847749" + " " + "paper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-4250847749",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-4250847749" + " " + "checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "Checkout"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    className: "letters1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "Your information:"), __jsx("hr", {
    className: "jsx-4250847749",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      flex: "0.90",
      marginRight: 10
    },
    className: "jsx-4250847749",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    className: "letters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "Address"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "address",
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      flex: "0.65",
      marginRight: "6%"
    },
    className: "jsx-4250847749",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    className: "letters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "City"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "city",
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      flex: "0.25",
      marginRight: 0
    },
    className: "jsx-4250847749",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    className: "letters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, "State"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "state",
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }))), __jsx(_cardSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data,
    stripeError: error,
    submitOrder: submitOrder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "4250847749",
    __self: this
  }, ".checkout{text-align:center;text-transform:uppercase;font-fa font-weight:bold;font-size:1.5rem;font-weight:bold;}.letters{font-size:1.2 rem;-webkit-text-decoration:underline;text-decoration:underline;font-weight:bold;}.letters1{font-weight:bold;}.paper{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:550px;padding:30px;background:lightblue;border-radius:6px;margin-top:60px;margin-bottom:60px;padding-bottom:30px;}.form-half{-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;}*{box-sizing:border-box;}body,html{background-color:#f6f9fc;font-size:18px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}h1{color:#32325d;font-weight:400;line-height:50px;font-size:40px;margin:20px 0;padding:0;}.Checkout{margin:0 auto;max-width:800px;box-sizing:border-box;padding:0 5px;}label{color:#6b7c93;font-weight:300;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;}button{white-space:nowrap;border:0;outline:0;display:inline-block;height:40px;line-height:40px;padding:0 14px;box-shadow:0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);color:#fff;border-radius:4px;font-size:15px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;background-color:#6772e5;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;margin-top:10px;}form{margin-bottom:40px;padding-bottom:40px;border-bottom:3px solid #e6ebf1;}button:hover{color:#fff;cursor:pointer;background-color:#7795f8;-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08);}input,.StripeElement{display:block;background-color:#f8f9fa !important;margin:10px 0 20px 0;max-width:500px;padding:10px 14px;font-size:1em;font-family:\"Source Code Pro\",monospace;box-shadow:rgba(50,50,93,0.14902) 0px 1px 3px, rgba(0,0,0,0.0196078) 0px 1px 0px;border:0;outline:0;border-radius:4px;background:white;}input::-webkit-input-placeholder{color:#aab7c4;}input::-moz-placeholder{color:#aab7c4;}input:-ms-input-placeholder{color:#aab7c4;}input::placeholder{color:#aab7c4;}input:focus,.StripeElement--focus{box-shadow:rgba(50,50,93,0.109804) 0px 4px 6px, rgba(0,0,0,0.0784314) 0px 1px 3px;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;}.StripeElement.IdealBankElement,.StripeElement.PaymentRequestButton{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmVuYXJcXE9uZURyaXZlXFxEZXNrdG9wXFxjbGFzc1xcQ2Fwc3RvbmUgUmVzdGF1cmFudFxcY29tcG9uZW50c1xcY2hlY2tvdXRGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFHUyxBQUc2QixBQVVBLEFBS0QsQUFHWSxBQWFsQixBQUdhLEFBSUcsQUFLWCxBQVFBLEFBTUEsQUFLSyxBQXNCQSxBQUtSLEFBU0csQUFlQSxBQUt3QixBQU01QixVQUNaLENBbkNpQixHQTlDQyxBQVFBLEFBTUEsQUF5Q29CLEFBZXRDLEdBbEdGLENBZjJCLEFBVUMsQ0FvRGYsQUFzQlcsR0FsRHRCLEdBSWlCLENBb0RVLENBdEVhLENBMkM1QixFQW5CTyxBQVFLLEFBTUMsUUFNRixDQWpDdkIsQUFzRGtDLENBOUN5QixHQXJDMUMsSUEyQ0EsR0FzRE0sQ0FSTSxDQXRDYixPQVlGLEdBbkJFLElBUWhCLEVBbkRpQixHQStERSxBQW9CbkIsQUFja0IsS0FyRE4sRUFwQ0ssSUEyR21CLEdBbEhuQixDQTRDakIsQ0FxRG9CLENBbENILE1BM0JqQixDQTVCRixPQUxBLENBOERtQyxFQWlDakIsV0FpQlksR0FoQmUsb0JBbEY1QixBQXNDZixLQWtDaUMsUUF2RWxCLE9BbUZ5QixNQWxGakIsT0ErQ1YsSUFrRGIsT0FqRG9CLEdBL0NBLGVBZ0RILEdBL0NDLFNBcUVsQixHQXJCa0IsSUEvQ0csWUFnRE0sT0EvQ0wsQ0ErRVgsU0FDQyxRQWhDYSxFQS9DekIsQUFnRm9CLGtCQUNELGlCQUNuQix3RUFsQzJCLHlCQUNKLGtEQUNhLGtDQUNSLDREQUNWLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXHJlbmFyXFxPbmVEcml2ZVxcRGVza3RvcFxcY2xhc3NcXENhcHN0b25lIFJlc3RhdXJhbnRcXGNvbXBvbmVudHNcXGNoZWNrb3V0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQsIENvbnRhaW5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5pbXBvcnQgeyBDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50cyB9IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xyXG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dEZvcm0oKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgYWRkcmVzczogXCJcIixcclxuICAgIGNpdHk6IFwiXCIsXHJcbiAgICBzdGF0ZTogXCJcIixcclxuICAgIHN0cmlwZV9pZDogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcclxuICBjb25zdCBhcHBDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcbiAgZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xyXG4gICAgLy8gc2V0IHRoZSBrZXkgPSB0byB0aGUgbmFtZSBwcm9wZXJ0eSBlcXVhbCB0byB0aGUgdmFsdWUgdHlwZWRcclxuICAgIGNvbnN0IHVwZGF0ZUl0ZW0gPSAoZGF0YVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgZGF0YSBvYmplY3RcclxuICAgIHNldERhdGEoeyAuLi5kYXRhLCB1cGRhdGVJdGVtIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0T3JkZXIoKSB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgLy8gLy8gVXNlIGVsZW1lbnRzLmdldEVsZW1lbnQgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBtb3VudGVkIEVsZW1lbnQuXHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpO1xyXG5cclxuICAgIC8vIC8vIFBhc3MgdGhlIEVsZW1lbnQgZGlyZWN0bHkgdG8gb3RoZXIgU3RyaXBlLmpzIG1ldGhvZHM6XHJcbiAgICAvLyAvLyBlLmcuIGNyZWF0ZVRva2VuIC0gaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3MvanMvdG9rZW5zX3NvdXJjZXMvY3JlYXRlX3Rva2VuP3R5cGU9Y2FyZEVsZW1lbnRcclxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcclxuICAgIGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xyXG4gICAgY29uc3QgdXNlclRva2VuID0gQ29va2llcy5nZXQoXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vb3JkZXJzYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB1c2VyVG9rZW4gJiYgeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlclRva2VufWAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGFtb3VudDogTnVtYmVyKE1hdGgucm91bmQoYXBwQ29udGV4dC5jYXJ0LnRvdGFsICsgXCJlMlwiKSArIFwiZS0yXCIpLFxyXG4gICAgICAgIGRpc2hlczogYXBwQ29udGV4dC5jYXJ0Lml0ZW1zLFxyXG4gICAgICAgIGFkZHJlc3M6IGRhdGEuYWRkcmVzcyxcclxuICAgICAgICBjaXR5OiBkYXRhLmNpdHksXHJcbiAgICAgICAgc3RhdGU6IGRhdGEuc3RhdGUsXHJcbiAgICAgICAgdG9rZW46IHRva2VuLnRva2VuLmlkLFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgc2V0RXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTU1wiKVxyXG4gICAgfVxyXG4gICAgYWxlcnQoJ09yZGVyIHdhcyBzdWNjZXNzZnVsJylcclxuICAgIC8vIE9USEVSIHN0cmlwZSBtZXRob2RzIHlvdSBjYW4gdXNlIGRlcGVuZGluZyBvbiBhcHBcclxuICAgIC8vIC8vIG9yIGNyZWF0ZVBheW1lbnRNZXRob2QgLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy9wYXltZW50X2ludGVudHMvY3JlYXRlX3BheW1lbnRfbWV0aG9kXHJcbiAgICAvLyBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcbiAgICAvLyAgIHR5cGU6IFwiY2FyZFwiLFxyXG4gICAgLy8gICBjYXJkOiBjYXJkRWxlbWVudCxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIC8vIG9yIGNvbmZpcm1DYXJkUGF5bWVudCAtIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL2pzL3BheW1lbnRfaW50ZW50cy9jb25maXJtX2NhcmRfcGF5bWVudFxyXG4gICAgLy8gc3RyaXBlLmNvbmZpcm1DYXJkUGF5bWVudChwYXltZW50SW50ZW50Q2xpZW50U2VjcmV0LCB7XHJcbiAgICAvLyAgIHBheW1lbnRfbWV0aG9kOiB7XHJcbiAgICAvLyAgICAgY2FyZDogY2FyZEVsZW1lbnQsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFwZXJcIj5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJjaGVja291dFwiPkNoZWNrb3V0PC9oMj4gXHJcbiAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJsZXR0ZXJzMVwiPllvdXIgaW5mb3JtYXRpb246PC9MYWJlbD5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuOTBcIiwgbWFyZ2luUmlnaHQ6IDEwIH19PlxyXG4gICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImxldHRlcnNcIj5BZGRyZXNzPC9MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwiYWRkcmVzc1wiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuNjVcIiwgbWFyZ2luUmlnaHQ6IFwiNiVcIiB9fT5cclxuICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJsZXR0ZXJzXCI+Q2l0eTwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXQgbmFtZT1cImNpdHlcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuMjVcIiwgbWFyZ2luUmlnaHQ6IDAgfX0+XHJcbiAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibGV0dGVyc1wiPlN0YXRlPC9MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwic3RhdGVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgPENhcmRTZWN0aW9uIGRhdGE9e2RhdGF9IHN0cmlwZUVycm9yPXtlcnJvcn0gc3VibWl0T3JkZXI9e3N1Ym1pdE9yZGVyfSAvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgLmNoZWNrb3V0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBmb250LWZhXHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubGV0dGVyc3tcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yIHJlbTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZXR0ZXJzMXtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIC5wYXBlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLWhhbGYge1xyXG4gICAgICAgICAgICBmbGV4OiAwLjU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjlmYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzIzMjVkO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5DaGVja291dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2YjdjOTM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgMC4xMSksXHJcbiAgICAgICAgICAgICAgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzcyZTU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZTZlYmYxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3OTVmODtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDdweCAxNHB4IHJnYmEoNTAsIDUwLCA5MywgMC4xKSxcclxuICAgICAgICAgICAgICAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4xNDkwMikgMHB4IDFweCAzcHgsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjAxOTYwNzgpIDBweCAxcHggMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2FhYjdjNDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0OmZvY3VzLFxyXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQtLWZvY3VzIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjEwOTgwNCkgMHB4IDRweCA2cHgsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjA3ODQzMTQpIDBweCAxcHggM3B4O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LklkZWFsQmFua0VsZW1lbnQsXHJcbiAgICAgICAgICAuU3RyaXBlRWxlbWVudC5QYXltZW50UmVxdWVzdEJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRGb3JtO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\renar\\\\OneDrive\\\\Desktop\\\\class\\\\Capstone Restaurant\\\\components\\\\checkoutForm.js */"));
}

_s(CheckoutForm, "6ULDI7vRcaqheZcs8XRwTtAKC8Q=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useStripe"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useElements"]];
});

_c = CheckoutForm;
/* harmony default export */ __webpack_exports__["default"] = (CheckoutForm);

var _c;

$RefreshReg$(_c, "CheckoutForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidXNlU3RhdGUiLCJhZGRyZXNzIiwiY2l0eSIsInN0YXRlIiwic3RyaXBlX2lkIiwiZGF0YSIsInNldERhdGEiLCJlcnJvciIsInNldEVycm9yIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIm9uQ2hhbmdlIiwiZSIsInVwZGF0ZUl0ZW0iLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRPcmRlciIsImNhcmRFbGVtZW50IiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwiQVBJX1VSTCIsInByb2Nlc3MiLCJjcmVhdGVUb2tlbiIsInRva2VuIiwidXNlclRva2VuIiwiQ29va2llcyIsImdldCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFtb3VudCIsIk51bWJlciIsIk1hdGgiLCJyb3VuZCIsImNhcnQiLCJ0b3RhbCIsImRpc2hlcyIsIml0ZW1zIiwiaWQiLCJyZXNwb25zZSIsIm9rIiwic3RhdHVzVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImRpc3BsYXkiLCJmbGV4IiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQztBQUMvQkMsV0FBTyxFQUFFLEVBRHNCO0FBRS9CQyxRQUFJLEVBQUUsRUFGeUI7QUFHL0JDLFNBQUssRUFBRSxFQUh3QjtBQUkvQkMsYUFBUyxFQUFFO0FBSm9CLEdB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTyxhQUFTLEVBQUMsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUUsTUFBQyxnREFBRDtBQUFPLFFBQUksRUFBQyxPQUFaO0FBQW9CLFlBQVEsRUFBRXpDLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUxGLENBVkEsRUFxQkEsTUFBQyxvREFBRDtBQUFhLFFBQUksRUFBRVgsSUFBbkI7QUFBeUIsZUFBVyxFQUFFRSxLQUF0QztBQUE2QyxlQUFXLEVBQUVlLFdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkEsQ0FERjtBQUFBO0FBQUE7QUFBQSwrL2NBRkY7QUErSkQ7O0dBaE9RdkIsWTtVQVFRVyxpRSxFQUNFRSxtRTs7O0tBVFZiLFk7QUFpT01BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjVkYjQyNTNjNzU0YmEzYzc1OTEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwsIElucHV0LCBDb250YWluZXIgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IHsgQ2FyZEVsZW1lbnQsIHVzZVN0cmlwZSwgdXNlRWxlbWVudHMgfSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcclxuaW1wb3J0IENhcmRTZWN0aW9uIGZyb20gXCIuL2NhcmRTZWN0aW9uXCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICBjaXR5OiBcIlwiLFxyXG4gICAgc3RhdGU6IFwiXCIsXHJcbiAgICBzdHJpcGVfaWQ6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XHJcbiAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcclxuICAgIC8vIHNldCB0aGUga2V5ID0gdG8gdGhlIG5hbWUgcHJvcGVydHkgZXF1YWwgdG8gdGhlIHZhbHVlIHR5cGVkXHJcbiAgICBjb25zdCB1cGRhdGVJdGVtID0gKGRhdGFbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyB1cGRhdGUgdGhlIHN0YXRlIGRhdGEgb2JqZWN0XHJcbiAgICBzZXREYXRhKHsgLi4uZGF0YSwgdXBkYXRlSXRlbSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdE9yZGVyKCkge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KTtcclxuXHJcbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxyXG4gICAgLy8gLy8gZS5nLiBjcmVhdGVUb2tlbiAtIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL2pzL3Rva2Vuc19zb3VyY2VzL2NyZWF0ZV90b2tlbj90eXBlPWNhcmRFbGVtZW50XHJcbiAgICAvLyBnZXQgdG9rZW4gYmFjayBmcm9tIHN0cmlwZSB0byBwcm9jZXNzIGNyZWRpdCBjYXJkXHJcbiAgICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVRva2VuKGNhcmRFbGVtZW50KTtcclxuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L29yZGVyc2AsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogdXNlclRva2VuICYmIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJUb2tlbn1gIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBhbW91bnQ6IE51bWJlcihNYXRoLnJvdW5kKGFwcENvbnRleHQuY2FydC50b3RhbCArIFwiZTJcIikgKyBcImUtMlwiKSxcclxuICAgICAgICBkaXNoZXM6IGFwcENvbnRleHQuY2FydC5pdGVtcyxcclxuICAgICAgICBhZGRyZXNzOiBkYXRhLmFkZHJlc3MsXHJcbiAgICAgICAgY2l0eTogZGF0YS5jaXR5LFxyXG4gICAgICAgIHN0YXRlOiBkYXRhLnN0YXRlLFxyXG4gICAgICAgIHRva2VuOiB0b2tlbi50b2tlbi5pZCxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1NcIilcclxuICAgIH1cclxuICAgIGFsZXJ0KCdPcmRlciB3YXMgc3VjY2Vzc2Z1bCcpXHJcbiAgICAvLyBPVEhFUiBzdHJpcGUgbWV0aG9kcyB5b3UgY2FuIHVzZSBkZXBlbmRpbmcgb24gYXBwXHJcbiAgICAvLyAvLyBvciBjcmVhdGVQYXltZW50TWV0aG9kIC0gaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3MvanMvcGF5bWVudF9pbnRlbnRzL2NyZWF0ZV9wYXltZW50X21ldGhvZFxyXG4gICAgLy8gc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xyXG4gICAgLy8gICB0eXBlOiBcImNhcmRcIixcclxuICAgIC8vICAgY2FyZDogY2FyZEVsZW1lbnQsXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAvLyBvciBjb25maXJtQ2FyZFBheW1lbnQgLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy9wYXltZW50X2ludGVudHMvY29uZmlybV9jYXJkX3BheW1lbnRcclxuICAgIC8vIHN0cmlwZS5jb25maXJtQ2FyZFBheW1lbnQocGF5bWVudEludGVudENsaWVudFNlY3JldCwge1xyXG4gICAgLy8gICBwYXltZW50X21ldGhvZDoge1xyXG4gICAgLy8gICAgIGNhcmQ6IGNhcmRFbGVtZW50LFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcGVyXCI+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiY2hlY2tvdXRcIj5DaGVja291dDwvaDI+IFxyXG4gICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibGV0dGVyczFcIj5Zb3VyIGluZm9ybWF0aW9uOjwvTGFiZWw+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjkwXCIsIG1hcmdpblJpZ2h0OiAxMCB9fT5cclxuICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJsZXR0ZXJzXCI+QWRkcmVzczwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXQgbmFtZT1cImFkZHJlc3NcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjY1XCIsIG1hcmdpblJpZ2h0OiBcIjYlXCIgfX0+XHJcbiAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibGV0dGVyc1wiPkNpdHk8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0IG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjI1XCIsIG1hcmdpblJpZ2h0OiAwIH19PlxyXG4gICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImxldHRlcnNcIj5TdGF0ZTwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXQgbmFtZT1cInN0YXRlXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgIDxDYXJkU2VjdGlvbiBkYXRhPXtkYXRhfSBzdHJpcGVFcnJvcj17ZXJyb3J9IHN1Ym1pdE9yZGVyPXtzdWJtaXRPcmRlcn0gLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7YFxyXG4gICAgICAgIC5jaGVja291dCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgZm9udC1mYVxyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxldHRlcnN7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMiByZW07XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGV0dGVyczF7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAucGFwZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1oYWxmIHtcclxuICAgICAgICAgICAgZmxleDogMC41O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY5ZmM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMyMzI1ZDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuQ2hlY2tvdXQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmI3YzkzO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIDAuMTEpLFxyXG4gICAgICAgICAgICAgIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc3MmU1O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2U2ZWJmMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzk1Zjg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDUwLCA1MCwgOTMsIDAuMSksXHJcbiAgICAgICAgICAgICAgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTb3VyY2UgQ29kZSBQcm9cIiwgbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTQ5MDIpIDBweCAxcHggM3B4LFxyXG4gICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4wMTk2MDc4KSAwcHggMXB4IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNhYWI3YzQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dDpmb2N1cyxcclxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4xMDk4MDQpIDBweCA0cHggNnB4LFxyXG4gICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4wNzg0MzE0KSAwcHggMXB4IDNweDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuU3RyaXBlRWxlbWVudC5JZGVhbEJhbmtFbGVtZW50LFxyXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQuUGF5bWVudFJlcXVlc3RCdXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==