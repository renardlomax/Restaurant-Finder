webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ "./node_modules/react-firebaseui/StyledFirebaseAuth.js");
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/clientApp */ "./firebase/clientApp.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/auth */ "./components/auth.js");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/context */ "./components/context.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\renar\\OneDrive\\Desktop\\class\\Capstone Restaurant\\pages\\register.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* /pages/register.js */







var uiConfig = {
  signInSuccessUrl: "./register",
  signInOptions: [_firebase_clientApp__WEBPACK_IMPORTED_MODULE_5__["default"].auth.GoogleAuthProvider.PROVIDER_ID]
};

var Register = function Register() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    email: "",
    username: "",
    password: ""
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      error = _useState3[0],
      setError = _useState3[1];

  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_8__["default"]);
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: "12",
    md: {
      size: 5,
      offset: 3
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-764690669" + " " + "paper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-764690669" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "http://localhost:1337/uploads/foodApp.jpg",
    className: "jsx-764690669",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }))), __jsx("section", {
    className: "jsx-764690669" + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "jsx-764690669",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, "Register "), " ", __jsx("br", {
    className: "jsx-764690669",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 34
    }
  }), Object.entries(error).length !== 0 && error.constructor === Object && error.message.map(function (error) {
    return __jsx("div", {
      key: error.messages[0].id,
      style: {
        marginBottom: 10
      },
      className: "jsx-764690669",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }, __jsx("small", {
      style: {
        color: "red"
      },
      className: "jsx-764690669",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 23
      }
    }, error.messages[0].message));
    console.log(error);
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx("fieldset", {
    disabled: loading,
    className: "jsx-764690669",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    className: "inputletters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, "Username:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    placeholder: "Enter Username",
    disabled: loading,
    onChange: function onChange(e) {
      return setData(_objectSpread(_objectSpread({}, data), {}, {
        username: e.target.value
      }));
    },
    value: data.username,
    type: "text",
    name: "username",
    style: {
      height: 50,
      fontSize: "1.2em"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    className: "inputletters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, "Email:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    onChange: function onChange(e) {
      return setData(_objectSpread(_objectSpread({}, data), {}, {
        email: e.target.value
      }));
    },
    placeholder: "Enter Email",
    value: data.email,
    id: "email",
    type: "email",
    name: "email",
    style: {
      height: 50,
      fontSize: "1.2em"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    style: {
      marginBottom: 30
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    className: "inputletters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, "Password:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    onChange: function onChange(e) {
      return setData(_objectSpread(_objectSpread({}, data), {}, {
        password: e.target.value
      }));
    },
    placeholder: "Enter Password",
    value: data.password,
    id: "password",
    type: "password",
    name: "password",
    style: {
      height: 50,
      fontSize: "1.2em"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"] // className="button"
  // style={{ float: "right", width: 120 }}
  , {
    color: "white",
    disabled: loading,
    onClick: function onClick() {
      setLoading(true);
      Object(_components_auth__WEBPACK_IMPORTED_MODULE_7__["registerUser"])(data.username, data.email, data.password).then(function (res) {
        // set authed user in global context object
        appContext.setUser(res.data.user);
        setLoading(false);
        alert("Successfully registered!");
        console.log("registered user: ".concat(JSON.stringify(res.data)));
      })["catch"](function (error) {
        console.log("error in register: ".concat(error));
        alert("user email already exist "); //setError(error.response.data);

        setLoading(false);
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, loading ? "Loading.." : "Submit", " ", __jsx("br", {
    className: "jsx-764690669",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 58
    }
  })), __jsx(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "google",
    uiConfig: uiConfig,
    firebaseAuth: _firebase_clientApp__WEBPACK_IMPORTED_MODULE_5__["default"].auth(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  })))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "764690669",
    __self: _this
  }, ".inputletters{font-size:1.2em;font-weight:bold;font-family:'Playfair Display',serif;}Button{color:black;border;}Button:hover{background-color:blue;color:white;}h2{text-align:center;text-transform:uppercase;font-size:1.5em;font-weight:bold;-webkit-text-decoration:underline;text-decoration:underline;font-family:'Playfair Display',serif;}.paper{border:9px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);border-radius:6px;margin-top:90px;background-color:lightblue;}.notification{color:#ab003c;}.header{width:100%;height:160px;background-color:#f5f5f5;margin-bottom:30px;border-radius-top:6px;}.wrapper{padding:10px 30px 20px 30px !important;}img{margin:5px 3px 20px 0px;width:100%;height:150px;}a{-webkit-text-decoration:underline;text-decoration:underline;font-weight:bold;active:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmVuYXJcXE9uZURyaXZlXFxEZXNrdG9wXFxjbGFzc1xcQ2Fwc3RvbmUgUmVzdGF1cmFudFxccGFnZXNcXHJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlLUyxBQUUyQixBQUtKLEFBSVUsQUFLSixBQVNXLEFBU2IsQUFHSCxBQU80QixBQUlmLEFBTUUsV0FoQmIsQ0E3QmxCLEVBMEJHLEVBaENpQixFQWNRLENBUjNCLEdBR2MsRUEyQmUsQUFVZCxHQXJCMkIsTUF4QkYsQ0FTeEMsQ0FxQ2lCLElBTGYsSUEzQmdCLEtBa0NoQixDQVpxQixVQXJCSixDQW9DRSxRQWRLLEVBcEMxQixNQWU0QixDQW9DWixZQUNkLENBZkEsOENBckJzQyxHQVFsQixrQkFDRixnQkFQcEIsQUFRK0IsMkJBQzdCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccmVuYXJcXE9uZURyaXZlXFxEZXNrdG9wXFxjbGFzc1xcQ2Fwc3RvbmUgUmVzdGF1cmFudFxccGFnZXNcXHJlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL3BhZ2VzL3JlZ2lzdGVyLmpzICovXHJcblxyXG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gXCJncmFwaHFsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgIFN0eWxlZEZpcmViYXNlQXV0aCAgZnJvbSBcInJlYWN0LWZpcmViYXNldWkvU3R5bGVkRmlyZWJhc2VBdXRoXCJcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZS9jbGllbnRBcHBcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgQnV0dG9uLFxyXG4gIEZvcm0sXHJcbiAgRm9ybUdyb3VwLFxyXG4gIExhYmVsLFxyXG4gIElucHV0LFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyVXNlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGhcIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xyXG5cclxuXHJcbmNvbnN0IHVpQ29uZmlnID0ge1xyXG5cclxuICBzaWduSW5TdWNjZXNzVXJsOiBcIi4vcmVnaXN0ZXJcIixcclxuICBzaWduSW5PcHRpb25zOiBbZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSURdLFxyXG59O1xyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoeyBlbWFpbDogXCJcIiwgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBhcHBDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcblxyXG5cclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgc209XCIxMlwiIG1kPXt7IHNpemU6IDUsIG9mZnNldDogMyB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L3VwbG9hZHMvZm9vZEFwcC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImh0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9jL2M1L01JVF9sb2dvLnBuZy8yMjBweC1NSVRfbG9nby5wbmdcIiAvPiAqL31cclxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8aDI+UmVnaXN0ZXIgPC9oMj4gPGJyIC8+XHJcbiAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGVycm9yKS5sZW5ndGggIT09IDAgJiZcclxuICAgICAgICAgICAgICAgIGVycm9yLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiZcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZS5tYXAoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtlcnJvci5tZXNzYWdlc1swXS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2VzWzBdLm1lc3NhZ2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwiaW5wdXRsZXR0ZXJzXCI+VXNlcm5hbWU6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoeyAuLi5kYXRhLCB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTAsIGZvbnRTaXplOiBcIjEuMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwiaW5wdXRsZXR0ZXJzXCI+RW1haWw6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSh7IC4uLmRhdGEsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogXCIxLjJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwiaW5wdXRsZXR0ZXJzXCI+UGFzc3dvcmQ6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSh7IC4uLmRhdGEsIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogXCIxLjJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+Rm9yZ290IFBhc3N3b3JkPzwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJVc2VyKGRhdGEudXNlcm5hbWUsIGRhdGEuZW1haWwsIGRhdGEucGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGF1dGhlZCB1c2VyIGluIGdsb2JhbCBjb250ZXh0IG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29udGV4dC5zZXRVc2VyKHJlcy5kYXRhLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZWdpc3RlcmVkIHVzZXI6ICR7SlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgaW4gcmVnaXN0ZXI6ICR7ZXJyb3J9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwidXNlciBlbWFpbCBhbHJlYWR5IGV4aXN0IFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyBcIkxvYWRpbmcuLlwiIDogXCJTdWJtaXRcIn0gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRGaXJlYmFzZUF1dGggY2xhc3NOYW1lPVwiZ29vZ2xlXCIgdWlDb25maWc9e3VpQ29uZmlnfSBmaXJlYmFzZUF1dGg9e2ZpcmViYXNlLmF1dGgoKX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtgLmlucHV0bGV0dGVycyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgIEJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBib3JkZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgQnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxuICAgICAgICAgIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAucGFwZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDlweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ub3RpZmljYXRpb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogI2FiMDAzYztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1cy10b3A6IDZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4IDIwcHggMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAzcHggMjBweCAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogYmx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDtcclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcblxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\renar\\\\OneDrive\\\\Desktop\\\\class\\\\Capstone Restaurant\\\\pages\\\\register.js */"));
};

_s(Register, "N/S6fG2y4EMOlYbipT5Jk+3m03A=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsidWlDb25maWciLCJzaWduSW5TdWNjZXNzVXJsIiwic2lnbkluT3B0aW9ucyIsImZpcmViYXNlIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwiUmVnaXN0ZXIiLCJ1c2VTdGF0ZSIsImVtYWlsIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiYXBwQ29udGV4dCIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0Iiwic2l6ZSIsIm9mZnNldCIsIk9iamVjdCIsImVudHJpZXMiLCJsZW5ndGgiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJtYXAiLCJtZXNzYWdlcyIsImlkIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJjb25zb2xlIiwibG9nIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJyZWdpc3RlclVzZXIiLCJ0aGVuIiwicmVzIiwic2V0VXNlciIsInVzZXIiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFHQSxJQUFNQSxRQUFRLEdBQUc7QUFFZkMsa0JBQWdCLEVBQUUsWUFGSDtBQUdmQyxlQUFhLEVBQUUsQ0FBQ0MsMkRBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxrQkFBZCxDQUFpQ0MsV0FBbEM7QUFIQSxDQUFqQjs7QUFNQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUM7QUFBRUMsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsWUFBUSxFQUFFLEVBQXZCO0FBQTJCQyxZQUFRLEVBQUU7QUFB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QixDQUdoQjs7QUFFQTlCLGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsT0FqQkg7QUFrQkQsS0ExQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTRCR0QsT0FBTyxHQUFHLFdBQUgsR0FBaUIsUUE1QjNCLE9BNEJxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QnJDLENBTkYsRUFzQ0UsTUFBQywwRUFBRDtBQUFvQixhQUFTLEVBQUMsUUFBOUI7QUFBdUMsWUFBUSxFQUFFZCxRQUFqRDtBQUEyRCxnQkFBWSxFQUFFRywyREFBUSxDQUFDQyxJQUFULEVBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0Q0YsQ0EzQ0YsQ0FERixDQXBCRixDQVRGLENBREYsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLHVzWUFERjtBQTJMRCxDQXBNRDs7R0FBTUcsUTs7S0FBQUEsUTtBQXFNU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuOGFlNmI3MjlhMmUwOGM1NDQyYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9wYWdlcy9yZWdpc3Rlci5qcyAqL1xyXG5cclxuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tIFwiZ3JhcGhxbFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICBTdHlsZWRGaXJlYmFzZUF1dGggIGZyb20gXCJyZWFjdC1maXJlYmFzZXVpL1N0eWxlZEZpcmViYXNlQXV0aFwiXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vZmlyZWJhc2UvY2xpZW50QXBwXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIEJ1dHRvbixcclxuICBGb3JtLFxyXG4gIEZvcm1Hcm91cCxcclxuICBMYWJlbCxcclxuICBJbnB1dCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclVzZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoXCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRcIjtcclxuXHJcblxyXG5jb25zdCB1aUNvbmZpZyA9IHtcclxuXHJcbiAgc2lnbkluU3VjY2Vzc1VybDogXCIuL3JlZ2lzdGVyXCIsXHJcbiAgc2lnbkluT3B0aW9uczogW2ZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEXSxcclxufTtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHsgZW1haWw6IFwiXCIsIHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG5cclxuXHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHNtPVwiMTJcIiBtZD17eyBzaXplOiA1LCBvZmZzZXQ6IDMgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy91cGxvYWRzL2Zvb2RBcHAuanBnXCIgLz5cclxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCJodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYy9jNS9NSVRfbG9nby5wbmcvMjIwcHgtTUlUX2xvZ28ucG5nXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgyPlJlZ2lzdGVyIDwvaDI+IDxiciAvPlxyXG4gICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhlcnJvcikubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgICAgICAgICAgICBlcnJvci5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UubWFwKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZXJyb3IubWVzc2FnZXNbMF0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvci5tZXNzYWdlc1swXS5tZXNzYWdlIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImlucHV0bGV0dGVyc1wiPlVzZXJuYW1lOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHsgLi4uZGF0YSwgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogXCIxLjJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImlucHV0bGV0dGVyc1wiPkVtYWlsOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1MCwgZm9udFNpemU6IFwiMS4yZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImlucHV0bGV0dGVyc1wiPlBhc3N3b3JkOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1MCwgZm9udFNpemU6IFwiMS4yZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkZvcmdvdCBQYXNzd29yZD88L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIsIHdpZHRoOiAxMjAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyVXNlcihkYXRhLnVzZXJuYW1lLCBkYXRhLmVtYWlsLCBkYXRhLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBhdXRoZWQgdXNlciBpbiBnbG9iYWwgY29udGV4dCBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbnRleHQuc2V0VXNlcihyZXMuZGF0YS51c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVnaXN0ZXJlZCB1c2VyOiAke0pTT04uc3RyaW5naWZ5KHJlcy5kYXRhKX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIGluIHJlZ2lzdGVyOiAke2Vycm9yfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcInVzZXIgZW1haWwgYWxyZWFkeSBleGlzdCBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gXCJMb2FkaW5nLi5cIiA6IFwiU3VibWl0XCJ9IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRmlyZWJhc2VBdXRoIGNsYXNzTmFtZT1cImdvb2dsZVwiIHVpQ29uZmlnPXt1aUNvbmZpZ30gZmlyZWJhc2VBdXRoPXtmaXJlYmFzZS5hdXRoKCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7YC5pbnB1dGxldHRlcnMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBCdXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgYm9yZGVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIEJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XHJcbiAgICAgICAgICA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgLnBhcGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiA5cHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubm90aWZpY2F0aW9uIHtcclxuICAgICAgICAgICAgY29sb3I6ICNhYjAwM2M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMtdG9wOiA2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggM3B4IDIwcHggMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBhY3RpdmU6IGJsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA7XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==