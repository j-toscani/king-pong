webpackHotUpdate("main",{

/***/ "./src/pages/Welcome.js":
/*!******************************!*\
  !*** ./src/pages/Welcome.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Welcome; });
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Top__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Top */ "./src/components/Top.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/pages/Welcome.js";

function _templateObject2() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: ", ";\n  width: 270px;\n  height: 420px;\n  padding: 30px;\n  padding-bottom: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  border-radius: 10px;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].main(_templateObject(), props => props.theme.contrast);
const WelcomeWondow = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject2(), props => props.theme.accent);
function Welcome() {
  let history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  function handleClick() {
    history.push("/entername");
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Top__WEBPACK_IMPORTED_MODULE_3__["TopLogo"], {
    headline: "KingPong",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledMain, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WelcomeWondow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["AltButton"], {
    big: true,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Tap to start!"))));
}

/***/ })

})
//# sourceMappingURL=main.4e55af26f298892e0441.hot-update.js.map