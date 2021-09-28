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
        color: "danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, res.name))), __jsx("div", {
        className: "jsx-1678333998",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "1678333998",
        __self: _this
      }, ".text-card{font-size:1.1 rem;font-weight:bold;}Button{color:black;}Button:hover{color:white;background-color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmVuYXJcXE9uZURyaXZlXFxEZXNrdG9wXFxjbGFzc1xcQ2Fwc3RvbmUgUmVzdGF1cmFudFxcY29tcG9uZW50c1xccmVzdGF1cmFudExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUUyQixBQUdpQyxBQUlOLEFBR0EsWUFGZCxBQUd5QixNQVBOLGlCQUNuQixBQU9BIiwiZmlsZSI6IkM6XFxVc2Vyc1xccmVuYXJcXE9uZURyaXZlXFxEZXNrdG9wXFxjbGFzc1xcQ2Fwc3RvbmUgUmVzdGF1cmFudFxcY29tcG9uZW50c1xccmVzdGF1cmFudExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsdXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4vY2xpZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBDYXJkQm9keSxcclxuICBDYXJkSW1nLFxyXG4gIENhcmRUZXh0LFxyXG4gIENhcmRUaXRsZSxcclxuICBDb250YWluZXIsXHJcbiAgUm93LFxyXG4gIENvbH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKXtcclxuICBjb25zdCB7Y2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICBcclxuICBjb25zdCBHRVRfUkVTVEFVUkFOVFMgPSBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIHJlc3RhdXJhbnRzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBcclxuICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGA7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTLCB7Y2xpZW50OiBjbGllbnR9KVxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1I8L3A+O1xyXG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XHJcbiAgY29uc29sZS5sb2coYFF1ZXJ5IERhdGE6ICR7ZGF0YS5yZXN0YXVyYW50c31gKVxyXG4gIGNvbnNvbGUubG9nKGRhdGEucmVzdGF1cmFudHMpXHJcblxyXG5cclxubGV0IHNlYXJjaFF1ZXJ5ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHJlcykgPT57XHJcbiAgICByZXR1cm4gcmVzLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpXHJcbiAgfSlcclxuXHJcbmlmKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDApe1xyXG4gIGNvbnN0IHJlc3RMaXN0ID0gc2VhcmNoUXVlcnkubWFwKChyZXMpID0+IChcclxuICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtyZXMuaWR9PlxyXG4gICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAwLjVyZW0gMjBweCAwLjVyZW1cIiB9fT5cclxuICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgdG9wPXt0cnVlfVxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyMDAgfX1cclxuICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDoxMzM3YCsgcmVzLmltYWdlLnVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInRleHQtY2FyZFwiPlxyXG4gICAgICAgICAgPENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cclxuICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgIDxMaW5rIGFzPXtgL3Jlc3RhdXJhbnRzLyR7cmVzLmlkfWB9XHJcbiAgICAgICAgICAgIGhyZWY9e2AvcmVzdGF1cmFudHM/aWQ9JHtyZXMuaWR9YH1cclxuICAgICAgICAgICA+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImRhbmdlclwiPntyZXMubmFtZX08L0J1dHRvbj5cclxuICAgICAgXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgLnRleHQtY2FyZHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMSByZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQnV0dG9ue1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBCdXR0b246aG92ZXJ7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9Db2w+XHJcbiAgICBcclxuICApKVxyXG5cclxuICByZXR1cm4oXHJcblxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgIDxSb3cgeHM9JzMnPlxyXG4gICAgICB7cmVzdExpc3R9XHJcbiAgICA8L1Jvdz5cclxuIFxyXG4gICAgPC9Db250YWluZXI+XHJcblxyXG4gIClcclxuICBcclxufSBlbHNlIHtcclxuXHJcblxyXG4gIFxyXG4gIHJldHVybiA8aDE+IE5vIFJlc3RhdXJhbnRzIEZvdW5kPC9oMT5cclxuICBcclxufVxyXG5cclxufVxyXG4gICBleHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50TGlzdCJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\renar\\\\OneDrive\\\\Desktop\\\\class\\\\Capstone Restaurant\\\\components\\\\restaurantList.js */"))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 5
      }
    }, restList));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJjbGllbnQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwic2VhcmNoUXVlcnkiLCJmaWx0ZXIiLCJyZXMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsImxlbmd0aCIsInJlc3RMaXN0IiwibWFwIiwiaWQiLCJtYXJnaW4iLCJoZWlnaHQiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFXQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUE4QjtBQUFBOztBQUFBOztBQUFBLG9CQUNaQyx3REFBVSxDQUFDQyxnREFBRCxDQURFO0FBQUEsTUFDckJDLElBRHFCLGVBQ3JCQSxJQURxQjs7QUFHNUIsTUFBTUMsZUFBZSxHQUFHQywwREFBSCxtQkFBckI7O0FBSDRCLGtCQWdCS0MsK0RBQVEsQ0FBQ0YsZUFBRCxFQUFrQjtBQUFDRyxVQUFNLEVBQUVBLCtDQUFNQTtBQUFmLEdBQWxCLENBaEJiO0FBQUEsTUFnQnBCQyxPQWhCb0IsYUFnQnBCQSxPQWhCb0I7QUFBQSxNQWdCWEMsS0FoQlcsYUFnQlhBLEtBaEJXO0FBQUEsTUFnQkpDLElBaEJJLGFBZ0JKQSxJQWhCSTs7QUFpQjVCLE1BQUlGLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDWCxNQUFJLENBQUNDLElBQUwsRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDWEMsU0FBTyxDQUFDQyxHQUFSLHVCQUEyQkYsSUFBSSxDQUFDRyxXQUFoQztBQUNBRixTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxXQUFqQjtBQUdGLE1BQUlDLFdBQVcsR0FBR0osSUFBSSxDQUFDRyxXQUFMLENBQWlCRSxNQUFqQixDQUF3QixVQUFDQyxHQUFELEVBQVE7QUFDOUMsV0FBT0EsR0FBRyxDQUFDQyxJQUFKLENBQVNDLFdBQVQsR0FBdUJDLFFBQXZCLENBQWdDbkIsS0FBSyxDQUFDb0IsTUFBdEMsQ0FBUDtBQUNELEdBRmUsQ0FBbEI7O0FBSUEsTUFBR04sV0FBVyxDQUFDTyxNQUFaLEdBQXFCLENBQXhCLEVBQTBCO0FBQ3hCLFFBQU1DLFFBQVEsR0FBR1IsV0FBVyxDQUFDUyxHQUFaLENBQWdCLFVBQUNQLEdBQUQ7QUFBQSxhQUMvQixNQUFDLDhDQUFEO0FBQUssVUFBRSxFQUFDLEdBQVI7QUFBWSxVQUFFLEVBQUMsR0FBZjtBQUFtQixXQUFHLEVBQUVBLEdBQUcsQ0FBQ1EsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsK0NBQUQ7QUFBTSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRTtBQUFWLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsa0RBQUQ7QUFDRSxXQUFHLEVBQUUsSUFEUDtBQUVFLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVYsU0FGVDtBQUdFLFdBQUcsRUFDSCwwQkFBeUJWLEdBQUcsQ0FBQ1csS0FBSixDQUFVQyxHQUpyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFRRSxNQUFDLG1EQUFEO0FBQVUsaUJBQVMsRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVdaLEdBQUcsQ0FBQ2EsV0FBZixDQURGLENBUkYsRUFXRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUUseUJBQWtCYixHQUFHLENBQUNRLEVBQXRCLENBQVI7QUFDRSxZQUFJLDRCQUFxQlIsR0FBRyxDQUFDUSxFQUF6QixDQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHRixNQUFDLGlEQUFEO0FBQVEsYUFBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF3QlIsR0FBRyxDQUFDQyxJQUE1QixDQUhFLENBREYsQ0FYRixFQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbWtJQW5CRixDQURGLENBRCtCO0FBQUEsS0FBaEIsQ0FBakI7QUEwQ0EsV0FFRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQSxNQUFDLDhDQUFEO0FBQUssUUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSyxRQURILENBREEsQ0FGRjtBQVdELEdBdERELE1Bc0RPO0FBSUwsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUFQO0FBRUQ7QUFFQTs7R0ExRlF2QixjO1VBZ0IwQk8sdUQ7OztLQWhCMUJQLGM7QUEyRlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRkMjFhODZlMTIwZmI5Y2Y5MWQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsdXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4vY2xpZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBDYXJkQm9keSxcclxuICBDYXJkSW1nLFxyXG4gIENhcmRUZXh0LFxyXG4gIENhcmRUaXRsZSxcclxuICBDb250YWluZXIsXHJcbiAgUm93LFxyXG4gIENvbH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKXtcclxuICBjb25zdCB7Y2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICBcclxuICBjb25zdCBHRVRfUkVTVEFVUkFOVFMgPSBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIHJlc3RhdXJhbnRzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBcclxuICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGA7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTLCB7Y2xpZW50OiBjbGllbnR9KVxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1I8L3A+O1xyXG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XHJcbiAgY29uc29sZS5sb2coYFF1ZXJ5IERhdGE6ICR7ZGF0YS5yZXN0YXVyYW50c31gKVxyXG4gIGNvbnNvbGUubG9nKGRhdGEucmVzdGF1cmFudHMpXHJcblxyXG5cclxubGV0IHNlYXJjaFF1ZXJ5ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHJlcykgPT57XHJcbiAgICByZXR1cm4gcmVzLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpXHJcbiAgfSlcclxuXHJcbmlmKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDApe1xyXG4gIGNvbnN0IHJlc3RMaXN0ID0gc2VhcmNoUXVlcnkubWFwKChyZXMpID0+IChcclxuICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtyZXMuaWR9PlxyXG4gICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAwLjVyZW0gMjBweCAwLjVyZW1cIiB9fT5cclxuICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgdG9wPXt0cnVlfVxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyMDAgfX1cclxuICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDoxMzM3YCsgcmVzLmltYWdlLnVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInRleHQtY2FyZFwiPlxyXG4gICAgICAgICAgPENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cclxuICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgIDxMaW5rIGFzPXtgL3Jlc3RhdXJhbnRzLyR7cmVzLmlkfWB9XHJcbiAgICAgICAgICAgIGhyZWY9e2AvcmVzdGF1cmFudHM/aWQ9JHtyZXMuaWR9YH1cclxuICAgICAgICAgICA+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImRhbmdlclwiPntyZXMubmFtZX08L0J1dHRvbj5cclxuICAgICAgXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgLnRleHQtY2FyZHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMSByZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQnV0dG9ue1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBCdXR0b246aG92ZXJ7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9Db2w+XHJcbiAgICBcclxuICApKVxyXG5cclxuICByZXR1cm4oXHJcblxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgIDxSb3cgeHM9JzMnPlxyXG4gICAgICB7cmVzdExpc3R9XHJcbiAgICA8L1Jvdz5cclxuIFxyXG4gICAgPC9Db250YWluZXI+XHJcblxyXG4gIClcclxuICBcclxufSBlbHNlIHtcclxuXHJcblxyXG4gIFxyXG4gIHJldHVybiA8aDE+IE5vIFJlc3RhdXJhbnRzIEZvdW5kPC9oMT5cclxuICBcclxufVxyXG5cclxufVxyXG4gICBleHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50TGlzdCJdLCJzb3VyY2VSb290IjoiIn0=