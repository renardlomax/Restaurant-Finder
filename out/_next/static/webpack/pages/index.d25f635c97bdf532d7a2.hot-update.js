webpackHotUpdate_N_E("pages/index",{

/***/ "./components/restaurantList.js":
/*!**************************************!*\
  !*** ./components/restaurantList.js ***!
  \**************************************/
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
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client */ "./components/client.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\Users\\renar\\OneDrive\\Desktop\\class\\Capstone Restaurant\\components\\restaurantList.js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n      restaurants {\n        id\n        name\n        \n        description\n        image {\n          url\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function RestaurantList(props) {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
      cart = _useContext.cart;

  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_RESTAURANTS, {
    client: _client__WEBPACK_IMPORTED_MODULE_4__["default"]
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "ERROR");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "Not found");
  console.log("Query Data: ".concat(data.restaurants));
  console.log(data.restaurants);
  var searchQuery = data.restaurants.filter(function (res) {
    return res.name.toLowerCase().includes(props.search);
  });

  if (searchQuery.length > 0) {
    var restList = searchQuery.map(function (res) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xs: "6",
        sm: "4",
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        style: {
          margin: "0 0.5rem 20px 0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardImg"], {
        top: true,
        style: {
          height: 200
        },
        src: "http://localhost:1337" + res.image.url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        className: "text-card",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        as: "/restaurants/".concat(res.id),
        href: "/restaurants?id=".concat(res.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, res.name))), __jsx("div", {
        className: "jsx-1239119015",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "1239119015",
        __self: _this
      }, ".text-card{font-size:1.1 rem;font-weight:bold;}Button:hover{color:white;background-color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmVuYXJcXE9uZURyaXZlXFxEZXNrdG9wXFxjbGFzc1xcQ2Fwc3RvbmUgUmVzdGF1cmFudFxcY29tcG9uZW50c1xccmVzdGF1cmFudExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUUyQixBQUdpQyxBQUtOLFlBQ1UsTUFMTCxnQkFNbkIsQ0FMQSIsImZpbGUiOiJDOlxcVXNlcnNcXHJlbmFyXFxPbmVEcml2ZVxcRGVza3RvcFxcY2xhc3NcXENhcHN0b25lIFJlc3RhdXJhbnRcXGNvbXBvbmVudHNcXHJlc3RhdXJhbnRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLHVzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuL2NsaWVudCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEJvZHksXHJcbiAgQ2FyZEltZyxcclxuICBDYXJkVGV4dCxcclxuICBDYXJkVGl0bGUsXHJcbiAgQ29udGFpbmVyLFxyXG4gIFJvdyxcclxuICBDb2x9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5mdW5jdGlvbiBSZXN0YXVyYW50TGlzdChwcm9wcyl7XHJcbiAgY29uc3Qge2NhcnQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbiAgXHJcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICByZXN0YXVyYW50cyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgO1xyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUywge2NsaWVudDogY2xpZW50fSlcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SPC9wPjtcclxuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xyXG4gIGNvbnNvbGUubG9nKGBRdWVyeSBEYXRhOiAke2RhdGEucmVzdGF1cmFudHN9YClcclxuICBjb25zb2xlLmxvZyhkYXRhLnJlc3RhdXJhbnRzKVxyXG5cclxuXHJcbmxldCBzZWFyY2hRdWVyeSA9IGRhdGEucmVzdGF1cmFudHMuZmlsdGVyKChyZXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcy5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxyXG4gIH0pXHJcblxyXG5pZihzZWFyY2hRdWVyeS5sZW5ndGggPiAwKXtcclxuICBjb25zdCByZXN0TGlzdCA9IHNlYXJjaFF1ZXJ5Lm1hcCgocmVzKSA9PiAoXHJcbiAgICA8Q29sIHhzPVwiNlwiIHNtPVwiNFwiIGtleT17cmVzLmlkfT5cclxuICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XHJcbiAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgIHRvcD17dHJ1ZX1cclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XHJcbiAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzN2ArIHJlcy5pbWFnZS51cmxcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJ0ZXh0LWNhcmRcIj5cclxuICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XHJcbiAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICA8TGluayBhcz17YC9yZXN0YXVyYW50cy8ke3Jlcy5pZH1gfVxyXG4gICAgICAgICAgICBocmVmPXtgL3Jlc3RhdXJhbnRzP2lkPSR7cmVzLmlkfWB9XHJcbiAgICAgICAgICAgPlxyXG4gICAgICAgIDxCdXR0b24gPntyZXMubmFtZX08L0J1dHRvbj5cclxuICAgICAgXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgLnRleHQtY2FyZHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMSByZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEJ1dHRvbjpob3ZlcntcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvQ29sPlxyXG4gICAgXHJcbiAgKSlcclxuXHJcbiAgcmV0dXJuKFxyXG5cclxuICAgIDxDb250YWluZXI+XHJcbiAgICA8Um93IHhzPSczJz5cclxuICAgICAge3Jlc3RMaXN0fVxyXG4gICAgPC9Sb3c+XHJcbiBcclxuICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICApXHJcbiAgXHJcbn0gZWxzZSB7XHJcblxyXG5cclxuICBcclxuICByZXR1cm4gPGgxPiBObyBSZXN0YXVyYW50cyBGb3VuZDwvaDE+XHJcbiAgXHJcbn1cclxuXHJcbn1cclxuICAgZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3QiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\renar\\\\OneDrive\\\\Desktop\\\\class\\\\Capstone Restaurant\\\\components\\\\restaurantList.js */"))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 5
      }
    }, restList));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 10
      }
    }, " No Restaurants Found");
  }
}

_s(RestaurantList, "oFktqXtPo/aM9ppzgd7KMeUMQhI=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = RestaurantList;
/* harmony default export */ __webpack_exports__["default"] = (RestaurantList);

var _c;

$RefreshReg$(_c, "RestaurantList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJjbGllbnQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwic2VhcmNoUXVlcnkiLCJmaWx0ZXIiLCJyZXMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsImxlbmd0aCIsInJlc3RMaXN0IiwibWFwIiwiaWQiLCJtYXJnaW4iLCJoZWlnaHQiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFXQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUE4QjtBQUFBOztBQUFBOztBQUFBLG9CQUNaQyx3REFBVSxDQUFDQyxnREFBRCxDQURFO0FBQUEsTUFDckJDLElBRHFCLGVBQ3JCQSxJQURxQjs7QUFHNUIsTUFBTUMsZUFBZSxHQUFHQywwREFBSCxtQkFBckI7O0FBSDRCLGtCQWdCS0MsK0RBQVEsQ0FBQ0YsZUFBRCxFQUFrQjtBQUFDRyxVQUFNLEVBQUVBLCtDQUFNQTtBQUFmLEdBQWxCLENBaEJiO0FBQUEsTUFnQnBCQyxPQWhCb0IsYUFnQnBCQSxPQWhCb0I7QUFBQSxNQWdCWEMsS0FoQlcsYUFnQlhBLEtBaEJXO0FBQUEsTUFnQkpDLElBaEJJLGFBZ0JKQSxJQWhCSTs7QUFpQjVCLE1BQUlGLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDWCxNQUFJLENBQUNDLElBQUwsRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDWEMsU0FBTyxDQUFDQyxHQUFSLHVCQUEyQkYsSUFBSSxDQUFDRyxXQUFoQztBQUNBRixTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxXQUFqQjtBQUdGLE1BQUlDLFdBQVcsR0FBR0osSUFBSSxDQUFDRyxXQUFMLENBQWlCRSxNQUFqQixDQUF3QixVQUFDQyxHQUFELEVBQVE7QUFDOUMsV0FBT0EsR0FBRyxDQUFDQyxJQUFKLENBQVNDLFdBQVQsR0FBdUJDLFFBQXZCLENBQWdDbkIsS0FBSyxDQUFDb0IsTUFBdEMsQ0FBUDtBQUNELEdBRmUsQ0FBbEI7O0FBSUEsTUFBR04sV0FBVyxDQUFDTyxNQUFaLEdBQXFCLENBQXhCLEVBQTBCO0FBQ3hCLFFBQU1DLFFBQVEsR0FBR1IsV0FBVyxDQUFDUyxHQUFaLENBQWdCLFVBQUNQLEdBQUQ7QUFBQSxhQUMvQixNQUFDLDhDQUFEO0FBQUssVUFBRSxFQUFDLEdBQVI7QUFBWSxVQUFFLEVBQUMsR0FBZjtBQUFtQixXQUFHLEVBQUVBLEdBQUcsQ0FBQ1EsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsK0NBQUQ7QUFBTSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRTtBQUFWLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsa0RBQUQ7QUFDRSxXQUFHLEVBQUUsSUFEUDtBQUVFLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVYsU0FGVDtBQUdFLFdBQUcsRUFDSCwwQkFBeUJWLEdBQUcsQ0FBQ1csS0FBSixDQUFVQyxHQUpyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFRRSxNQUFDLG1EQUFEO0FBQVUsaUJBQVMsRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVdaLEdBQUcsQ0FBQ2EsV0FBZixDQURGLENBUkYsRUFXRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUUseUJBQWtCYixHQUFHLENBQUNRLEVBQXRCLENBQVI7QUFDRSxZQUFJLDRCQUFxQlIsR0FBRyxDQUFDUSxFQUF6QixDQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHRixNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBVVIsR0FBRyxDQUFDQyxJQUFkLENBSEUsQ0FERixDQVhGLEVBbUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4N0hBbkJGLENBREYsQ0FEK0I7QUFBQSxLQUFoQixDQUFqQjtBQXdDQSxXQUVFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBLE1BQUMsOENBQUQ7QUFBSyxRQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dLLFFBREgsQ0FEQSxDQUZGO0FBV0QsR0FwREQsTUFvRE87QUFJTCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQVA7QUFFRDtBQUVBOztHQXhGUXZCLGM7VUFnQjBCTyx1RDs7O0tBaEIxQlAsYztBQXlGU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDI1ZjYzNWM5N2JkZjUzMmQ3YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCx1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi9jbGllbnQnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIlxyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIENhcmRCb2R5LFxyXG4gIENhcmRJbWcsXHJcbiAgQ2FyZFRleHQsXHJcbiAgQ2FyZFRpdGxlLFxyXG4gIENvbnRhaW5lcixcclxuICBSb3csXHJcbiAgQ29sfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuZnVuY3Rpb24gUmVzdGF1cmFudExpc3QocHJvcHMpe1xyXG4gIGNvbnN0IHtjYXJ0IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG4gIFxyXG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgcmVzdGF1cmFudHMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgdXJsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYDtcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVFMsIHtjbGllbnQ6IGNsaWVudH0pXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FUlJPUjwvcD47XHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcclxuICBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhLnJlc3RhdXJhbnRzfWApXHJcbiAgY29uc29sZS5sb2coZGF0YS5yZXN0YXVyYW50cylcclxuXHJcblxyXG5sZXQgc2VhcmNoUXVlcnkgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzKSA9PntcclxuICAgIHJldHVybiByZXMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaClcclxuICB9KVxyXG5cclxuaWYoc2VhcmNoUXVlcnkubGVuZ3RoID4gMCl7XHJcbiAgY29uc3QgcmVzdExpc3QgPSBzZWFyY2hRdWVyeS5tYXAoKHJlcykgPT4gKFxyXG4gICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlcy5pZH0+XHJcbiAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDAuNXJlbSAyMHB4IDAuNXJlbVwiIH19PlxyXG4gICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICB0b3A9e3RydWV9XHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDIwMCB9fVxyXG4gICAgICAgICAgc3JjPXtcclxuICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjEzMzdgKyByZXMuaW1hZ2UudXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwidGV4dC1jYXJkXCI+XHJcbiAgICAgICAgICA8Q2FyZFRleHQ+e3Jlcy5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxyXG4gICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgPExpbmsgYXM9e2AvcmVzdGF1cmFudHMvJHtyZXMuaWR9YH1cclxuICAgICAgICAgICAgaHJlZj17YC9yZXN0YXVyYW50cz9pZD0ke3Jlcy5pZH1gfVxyXG4gICAgICAgICAgID5cclxuICAgICAgICA8QnV0dG9uID57cmVzLm5hbWV9PC9CdXR0b24+XHJcbiAgICAgIFxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgIC50ZXh0LWNhcmR7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjEgcmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBCdXR0b246aG92ZXJ7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L0NvbD5cclxuICAgIFxyXG4gICkpXHJcblxyXG4gIHJldHVybihcclxuXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgPFJvdyB4cz0nMyc+XHJcbiAgICAgIHtyZXN0TGlzdH1cclxuICAgIDwvUm93PlxyXG4gXHJcbiAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgKVxyXG4gIFxyXG59IGVsc2Uge1xyXG5cclxuXHJcbiAgXHJcbiAgcmV0dXJuIDxoMT4gTm8gUmVzdGF1cmFudHMgRm91bmQ8L2gxPlxyXG4gIFxyXG59XHJcblxyXG59XHJcbiAgIGV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==