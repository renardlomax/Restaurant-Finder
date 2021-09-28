webpackHotUpdate_N_E("pages/restaurants",{

/***/ "./pages/restaurants.js":
/*!******************************!*\
  !*** ./pages/restaurants.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cart */ "./components/cart.js");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _components_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/client */ "./components/client.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\Users\\renar\\OneDrive\\Desktop\\class\\Capstone Restaurant\\pages\\restaurants.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query($id: ID!) {\n    restaurant(id: $id) {\n      id\n      name\n      dishes {\n        name\n        calories\n        id\n        description\n        price\n        image {\n          url\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* /pages/restaurants.js */









var GET_RESTAURANT_DISHES = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

function Restaurants() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      query = _useState[0],
      setQuery = _useState[1];

  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_RESTAURANT_DISHES, {
    variables: {
      id: router.query.id
    },
    client: _components_client__WEBPACK_IMPORTED_MODULE_7__["default"]
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return "Error Loading Dishes";
  if (loading) return __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 23
    }
  }, "Loading ...");

  if (data.restaurant) {
    var restaurant = data.restaurant;
    console.log(restaurant);
    var searchQuery = restaurant.dishes.filter(function (res) {
      return res.name.toLowerCase().includes(query);
    });
    var dishList = searchQuery.map(function (res) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: "6",
        sm: "4",
        style: {
          padding: 0
        },
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: {
          margin: "0 10px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardImg"], {
        top: true,
        style: {
          height: 250
        },
        src: "http://localhost:1337" + res.image.url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        className: "text-card",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, "Name: ", res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }
      }, " Description: ", res.description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }, " Price: $", res.price), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }, "Calories: ", res.calories)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        outline: true,
        color: "danger",
        onClick: function onClick() {
          return appContext.addItem(res);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }, "+ Add To Cart"))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-478759663" + " " + "search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "jsx-478759663",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }, " Local Dishes"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroupAddon"], {
      addonType: "append",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }
    }, " Search "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
      placeholder: "Enter Dishes",
      onChange: function onChange(e) {
        return setQuery(e.target.value.toLocaleLowerCase());
      },
      value: query,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    })), __jsx("br", {
      className: "jsx-478759663",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 22
      }
    })), searchQuery.length > 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }
    }, dishList) : __jsx("h1", {
      className: "jsx-478759663",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 12
      }
    }, "No Dishes Found"), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 8
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "478759663",
      __self: this
    }, ".text-card{font-weight:bold;}a{-webkit-text-decoration:underline;text-decoration:underline;font-weight:bold;}.container-fluid{margin-bottom:30px;}.btn-outline-primary{color:#007bff !important;}h2{text-align:center;color:black;-webkit-text-decoration:underline;text-decoration:underline;height:90px;font-size:40px;background-color:lightblue;font-family:'Courier New',Courier,monospace;padding-top:20px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmVuYXJcXE9uZURyaXZlXFxEZXNrdG9wXFxjbGFzc1xcQ2Fwc3RvbmUgUmVzdGF1cmFudFxccGFnZXNcXHJlc3RhdXJhbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9IZSxBQUdrQyxBQUlXLEFBSVAsQUFHTSxBQUlQLGlCQWR0QixDQWVnQixDQVBkLE1BR0EsS0FLNEIsOEJBWlQsaUJBQ25CLGFBWWMsWUFDRyxlQUNZLDJCQUNtQiw0Q0FDN0IsaUJBQ0EsaUJBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccmVuYXJcXE9uZURyaXZlXFxEZXNrdG9wXFxjbGFzc1xcQ2Fwc3RvbmUgUmVzdGF1cmFudFxccGFnZXNcXHJlc3RhdXJhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL3BhZ2VzL3Jlc3RhdXJhbnRzLmpzICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRcIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NvbXBvbmVudHMvY2xpZW50J1xyXG5pbXBvcnQgeyBJbnB1dEdyb3VwLCBJbnB1dEdyb3VwQWRkb24sSW5wdXR9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIENhcmRCb2R5LFxyXG4gIENhcmRJbWcsXHJcbiAgQ2FyZFRleHQsXHJcbiAgQ2FyZFRpdGxlLFxyXG4gIENvbnRhaW5lcixcclxuICBDb2wsXHJcbiAgUm93LFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBHRVRfUkVTVEFVUkFOVF9ESVNIRVMgPSBncWxgXHJcbiAgcXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHJlc3RhdXJhbnQoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGRpc2hlcyB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGNhbG9yaWVzXHJcbiAgICAgICAgaWRcclxuICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIHByaWNlXHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgdXJsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUmVzdGF1cmFudHMoKSB7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBhcHBDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVF9ESVNIRVMsIHtcclxuICAgIHZhcmlhYmxlczogeyBpZDogcm91dGVyLnF1ZXJ5LmlkIH0sXHJcbiAgICBjbGllbnQ6IGNsaWVudCxcclxuICB9KTtcclxuXHJcbiAgaWYgKGVycm9yKSByZXR1cm4gXCJFcnJvciBMb2FkaW5nIERpc2hlc1wiO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGgxPkxvYWRpbmcgLi4uPC9oMT47XHJcbiAgaWYgKGRhdGEucmVzdGF1cmFudCkge1xyXG4gICAgY29uc3QgeyByZXN0YXVyYW50IH0gPSBkYXRhO1xyXG4gICAgY29uc29sZS5sb2cocmVzdGF1cmFudClcclxuICAgIGxldCBzZWFyY2hRdWVyeSA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigocmVzKSA9PntcclxuICAgICAgICByZXR1cm4gcmVzLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSlcclxuICAgIH0pXHJcbiAgXHJcbiAgICBjb25zdCBkaXNoTGlzdCA9IHNlYXJjaFF1ZXJ5Lm1hcCgocmVzKSA9PiAoXHJcbiAgICAgIFxyXG4gICAgICA8Q29sIHhzPVwiNlwiIHNtPVwiNFwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0ga2V5PXtyZXMuaWR9PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIiB9fT5cclxuICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgIHRvcD17dHJ1ZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyNTAgfX1cclxuICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDoxMzM3YCsgcmVzLmltYWdlLnVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwidGV4dC1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxDYXJkVGl0bGUgPk5hbWU6IHtyZXMubmFtZX08L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgPENhcmRUZXh0PiBEZXNjcmlwdGlvbjoge3Jlcy5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICA8Q2FyZFRleHQ+IFByaWNlOiAke3Jlcy5wcmljZX08L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICA8Q2FyZFRleHQ+Q2Fsb3JpZXM6IHtyZXMuY2Fsb3JpZXN9PC9DYXJkVGV4dD5cclxuXHJcbiAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb3V0bGluZVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBDb250ZXh0LmFkZEl0ZW0ocmVzKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICsgQWRkIFRvIENhcnRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxyXG4gICAgICAgIDxoMj4gTG9jYWwgRGlzaGVzPC9oMj5cclxuICAgICAgICA8SW5wdXRHcm91cCA+XHJcbiAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJhcHBlbmRcIj4gU2VhcmNoIDwvSW5wdXRHcm91cEFkZG9uPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIERpc2hlc1wiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L0lucHV0R3JvdXA+PGJyPjwvYnI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgeyAoc2VhcmNoUXVlcnkubGVuZ3RoID4gMCkgPyAoXHJcbiAgICAgICAgPFJvdyB4cz0nMyc+XHJcbiAgICAgICAgICB7ZGlzaExpc3R9XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICApIDogPGgxPk5vIERpc2hlcyBGb3VuZDwvaDE+fVxyXG5cclxuICAgICAgIDxDYXJ0IC8+XHJcblxyXG4gICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAudGV4dC1jYXJkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICBcclxuICAgIClcclxuICB9IC8vIGlmIGJyYWNrZXRcclxufSAvLyBmdW5jdGlvbiBicmFja2V0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50cztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\renar\\\\OneDrive\\\\Desktop\\\\class\\\\Capstone Restaurant\\\\pages\\\\restaurants.js */"));
  } // if bracket

} // function bracket


_s(Restaurants, "hV2bqkdi7DRfmSzPUCWybGwUvNY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = Restaurants;
/* harmony default export */ __webpack_exports__["default"] = (Restaurants);

var _c;

$RefreshReg$(_c, "Restaurants");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdGF1cmFudHMuanMiXSwibmFtZXMiOlsiR0VUX1JFU1RBVVJBTlRfRElTSEVTIiwiZ3FsIiwiUmVzdGF1cmFudHMiLCJ1c2VTdGF0ZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJhcHBDb250ZXh0IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImlkIiwiY2xpZW50IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInJlc3RhdXJhbnQiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoUXVlcnkiLCJkaXNoZXMiLCJmaWx0ZXIiLCJyZXMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImRpc2hMaXN0IiwibWFwIiwicGFkZGluZyIsIm1hcmdpbiIsImhlaWdodCIsImltYWdlIiwidXJsIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImNhbG9yaWVzIiwiYWRkSXRlbSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWUEsSUFBTUEscUJBQXFCLEdBQUdDLDBEQUFILG1CQUEzQjs7QUFtQkEsU0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ2RDLEtBRGM7QUFBQSxNQUNQQyxRQURPOztBQUVyQixNQUFNQyxVQUFVLEdBQUdDLHdEQUFVLENBQUNDLDJEQUFELENBQTdCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFIcUIsa0JBSVlDLCtEQUFRLENBQUNYLHFCQUFELEVBQXdCO0FBQy9EWSxhQUFTLEVBQUU7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O0FBQUE7QUFBQSxPQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEQSxFQUVBLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBLE1BQUMsMERBQUQ7QUFBaUIsZUFBUyxFQUFDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsRUFFQSxNQUFDLGdEQUFEO0FBQ0ksaUJBQVcsRUFBQyxjQURoQjtBQUVJLGNBQVEsRUFBRSxrQkFBQ2UsQ0FBRDtBQUFBLGVBQ1ZsQyxRQUFRLENBQUNrQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxpQkFBZixFQUFELENBREU7QUFBQSxPQUZkO0FBS0ksV0FBSyxFQUFFdEMsS0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkEsQ0FGQSxFQVdhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVhiLENBREYsRUFlR2lCLFdBQVcsQ0FBQ3NCLE1BQVosR0FBcUIsQ0FBdEIsR0FDQSxNQUFDLDhDQUFEO0FBQUssUUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHZixRQURILENBREEsR0FJRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBbkJMLEVBcUJDLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXJCRDtBQUFBO0FBQUE7QUFBQSx3eE5BREY7QUEyREQsR0E3R29CLENBNkduQjs7QUFDSCxDLENBQUM7OztHQTlHTzFCLFc7VUFHUVEscUQsRUFDa0JDLHVEOzs7S0FKMUJULFc7QUFnSE1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc3RhdXJhbnRzLmY5MDhmM2RmYTUzNWI1NTIxOWMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAvcGFnZXMvcmVzdGF1cmFudHMuanMgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydFwiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0XCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY29tcG9uZW50cy9jbGllbnQnXHJcbmltcG9ydCB7IElucHV0R3JvdXAsIElucHV0R3JvdXBBZGRvbixJbnB1dH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEJvZHksXHJcbiAgQ2FyZEltZyxcclxuICBDYXJkVGV4dCxcclxuICBDYXJkVGl0bGUsXHJcbiAgQ29udGFpbmVyLFxyXG4gIENvbCxcclxuICBSb3csXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IEdFVF9SRVNUQVVSQU5UX0RJU0hFUyA9IGdxbGBcclxuICBxdWVyeSgkaWQ6IElEISkge1xyXG4gICAgcmVzdGF1cmFudChpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgZGlzaGVzIHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgY2Fsb3JpZXNcclxuICAgICAgICBpZFxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBSZXN0YXVyYW50cygpIHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UX0RJU0hFUywge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkOiByb3V0ZXIucXVlcnkuaWQgfSxcclxuICAgIGNsaWVudDogY2xpZW50LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiBcIkVycm9yIExvYWRpbmcgRGlzaGVzXCI7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDE+TG9hZGluZyAuLi48L2gxPjtcclxuICBpZiAoZGF0YS5yZXN0YXVyYW50KSB7XHJcbiAgICBjb25zdCB7IHJlc3RhdXJhbnQgfSA9IGRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN0YXVyYW50KVxyXG4gICAgbGV0IHNlYXJjaFF1ZXJ5ID0gcmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChyZXMpID0+e1xyXG4gICAgICAgIHJldHVybiByZXMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KVxyXG4gICAgfSlcclxuICBcclxuICAgIGNvbnN0IGRpc2hMaXN0ID0gc2VhcmNoUXVlcnkubWFwKChyZXMpID0+IChcclxuICAgICAgXHJcbiAgICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fSBrZXk9e3Jlcy5pZH0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMTBweFwiIH19PlxyXG4gICAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgICAgdG9wPXt0cnVlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDI1MCB9fVxyXG4gICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjEzMzdgKyByZXMuaW1hZ2UudXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJ0ZXh0LWNhcmRcIj5cclxuICAgICAgICAgICAgPENhcmRUaXRsZSA+TmFtZToge3Jlcy5uYW1lfTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICA8Q2FyZFRleHQ+IERlc2NyaXB0aW9uOiB7cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgIDxDYXJkVGV4dD4gUHJpY2U6ICR7cmVzLnByaWNlfTwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgIDxDYXJkVGV4dD5DYWxvcmllczoge3Jlcy5jYWxvcmllc308L0NhcmRUZXh0PlxyXG5cclxuICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvdXRsaW5lXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcENvbnRleHQuYWRkSXRlbShyZXMpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgKyBBZGQgVG8gQ2FydFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9Db2w+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgPGgyPiBMb2NhbCBEaXNoZXM8L2gyPlxyXG4gICAgICAgIDxJbnB1dEdyb3VwID5cclxuICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cImFwcGVuZFwiPiBTZWFyY2ggPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRGlzaGVzXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICBzZXRRdWVyeShlLnRhcmdldC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvSW5wdXRHcm91cD48YnI+PC9icj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7IChzZWFyY2hRdWVyeS5sZW5ndGggPiAwKSA/IChcclxuICAgICAgICA8Um93IHhzPSczJz5cclxuICAgICAgICAgIHtkaXNoTGlzdH1cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICkgOiA8aDE+Tm8gRGlzaGVzIEZvdW5kPC9oMT59XHJcblxyXG4gICAgICAgPENhcnQgLz5cclxuXHJcbiAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNhcmQge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIFxyXG4gICAgKVxyXG4gIH0gLy8gaWYgYnJhY2tldFxyXG59IC8vIGZ1bmN0aW9uIGJyYWNrZXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9