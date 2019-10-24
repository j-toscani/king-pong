(this["webpackJsonpking-pong"] = this["webpackJsonpking-pong"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _GlobalStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalStyle.js */ "./src/GlobalStyle.js");
/* harmony import */ var _themes_default_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themes/default.js */ "./src/themes/default.js");
/* harmony import */ var _themes_dark_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themes/dark.js */ "./src/themes/dark.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_About_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/About.js */ "./src/pages/About.js");
/* harmony import */ var _pages_GameSelect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/GameSelect.js */ "./src/pages/GameSelect.js");
/* harmony import */ var _pages_GameScreen_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/GameScreen.js */ "./src/pages/GameScreen.js");
/* harmony import */ var _pages_NicknameInput_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/NicknameInput.js */ "./src/pages/NicknameInput.js");
/* harmony import */ var _pages_Profile_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/Profile.js */ "./src/pages/Profile.js");
/* harmony import */ var _pages_Chatroom_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/Chatroom.js */ "./src/pages/Chatroom.js");
/* harmony import */ var _pages_Welcome_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/Welcome.js */ "./src/pages/Welcome.js");


var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/App.js";

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template: 80px 1fr / 1fr;\n  width: 100vw;\n  max-width: 450px;\n  height: 100vh;\n  background: ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}














const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), props => props.theme.main);

function App() {
  const _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
        _React$useState2 = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        darkmode = _React$useState2[0],
        setDarkmode = _React$useState2[1];

  const _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
        _React$useState4 = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
        mute = _React$useState4[0],
        setMute = _React$useState4[1];

  const _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
        _React$useState6 = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
        open = _React$useState6[0],
        setMenuoverlay = _React$useState6[1];

  function handleToggleMode(mode) {
    if (mode === "darkmode") setDarkmode(!darkmode);
    if (mode === "mute") setMute(!mute);
    if (mode === "open") setMenuoverlay(!open);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: darkmode ? _themes_dark_js__WEBPACK_IMPORTED_MODULE_6__["default"] : _themes_default_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_GlobalStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: "/about",
    exact: true,
    component: props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_About_js__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: "/chatroom",
    exact: true,
    component: props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_Chatroom_js__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: "/game",
    exact: true,
    component: props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_GameScreen_js__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: "/select",
    exact: true,
    component: props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_GameSelect_js__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({
      handleToggleMode: handleToggleMode,
      darkmode: darkmode,
      mute: mute,
      open: open
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: "/entername",
    exact: true,
    component: props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_NicknameInput_js__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: "/profile",
    exact: true,
    component: props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_Profile_js__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: "/",
    exact: true,
    component: props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_Welcome_js__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/GlobalStyle.js":
/*!****************************!*\
  !*** ./src/GlobalStyle.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n}\n\nmain{\n background: ", ";\ndisplay: flex;\nborder: none;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton, input {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), props => props.theme.main));

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: AltButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltButton", function() { return AltButton; });
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/components/Button.js";

function _templateObject6() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: ", ";\n  color: ", ";\n  fill: ", ";\n  border: ", ";\n"]);

  _templateObject6 = function () {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          min-width: 100px;\n          height: 35px;\n          font-size: 20px;\n          padding-left: 4%;\n          padding-right: 4%;\n        "]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          height: 50px;\n          padding: 0;\n          margin: 0;\n          width: 235px;\n          font-size: 24px;\n        "]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          background: ", ";\n          color: ", ";\n          border: solid 2px ", ";\n        "]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          background: \"transparent\";\n          color: ", ";\n          border: solid 2px ", ";\n        "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border-radius: 10px;\n  ", "\n  ", "\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject(), props => props.disabled ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), props.theme.contrast, props.theme.contrast) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), props.theme.accent, props.theme.darkFont, props.theme.accent), props => props.big ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4()) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject5()));
const AltButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Button)(_templateObject6(), props => props.theme.contrast, props => props.theme.brightFont, props => props.theme.brightFont, props => props.theme.contrast);

function Button({
  disabled,
  big,
  onClick,
  className,
  children
}) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton, {
    disabled: disabled,
    big: big,
    className: className,
    onClick: onClick,
    round: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/NavTop.js":
/*!**********************************!*\
  !*** ./src/components/NavTop.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Top__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Top */ "./src/components/Top.js");
/* harmony import */ var _ressources_icons_Cross__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ressources/icons/Cross */ "./src/ressources/icons/Cross.js");
/* harmony import */ var _ressources_icons_Options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ressources/icons/Options */ "./src/ressources/icons/Options.js");
/* harmony import */ var _ressources_icons_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ressources/icons/Logo */ "./src/ressources/icons/Logo.js");

var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/components/NavTop.js";

function _templateObject2() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: ", ";\n  color: ", ";\n  fill: ", ";\n  border: ", ";\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  font-size: 24px;\n  text-align: left;\n  font-weight: 400;\n  font-style: none;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}







const StyledH2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject(), props => props.theme.brightFont);
const ToggleSettings = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject2(), props => props.theme.contrast, props => props.theme.brightFont, props => props.theme.brightFont, props => props.theme.contrast);

function NavTop({
  state,
  handleToggleMode
}) {
  if (state === "open") {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Top__WEBPACK_IMPORTED_MODULE_3__["StyledHeader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToggleSettings, {
      onClick: () => handleToggleMode("open"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ressources_icons_Cross__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledH2, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Settings"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ressources_icons_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }));
  } else if (state === "closed") {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Top__WEBPACK_IMPORTED_MODULE_3__["StyledHeader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToggleSettings, {
      onClick: () => handleToggleMode("open"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ressources_icons_Options__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledH2, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Play!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ressources_icons_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (NavTop);

/***/ }),

/***/ "./src/components/Overlay.js":
/*!***********************************!*\
  !*** ./src/components/Overlay.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Settings */ "./src/components/Settings.js");
/* harmony import */ var _RetreatButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RetreatButton */ "./src/components/RetreatButton.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/components/Overlay.js";

function _templateObject2() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 135px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  transform: ", ";\n  transition: all 0.5s;\n  left: 0;\n  width: 75vw;\n  max-width: 360px;\n  height: 100%;\n  min-height: 550px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-top: 35px;\n  padding-bottom: 35px;\n  position: absolute;\n\n  background: ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





 // const Background = styled.div`
//   position: absolute;
//   width: 100vw;
//   max-width: 360px;
//   min-height: 550px;
//   filter: blur(4px);
//   opacity: 0.8;
//   z-index: -1;
//   width: 100%;
//   background: ${props => props.theme.main};
//   padding-top: 50px;
//   padding-bottom: 35px;
// `;

const OverlayContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject(), props => props.open ? "translateX(0)" : "translateX(-100%)", props => props.theme.main);
const BottomContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());

function Overlay({
  open,
  mute,
  darkmode,
  handleToggleMode
}) {
  let history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  function handleClick(destination) {
    history.push("/".concat(destination));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OverlayContainer, {
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Settings__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleToggleMode: handleToggleMode,
    open: open,
    mute: mute,
    darkmode: darkmode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BottomContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RetreatButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleClick: handleClick,
    name: "Profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RetreatButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleClick: handleClick,
    name: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./src/components/RetreatButton.js":
/*!*****************************************!*\
  !*** ./src/components/RetreatButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ressources_icons_Pointer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ressources/icons/Pointer */ "./src/ressources/icons/Pointer.js");

var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/components/RetreatButton.js";

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: ", ";\n  color: ", ";\n  font-size: 24px;\n  padding-left: 35px;\n  padding-right: 10px;\n  width: 260px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: none;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const RetreatStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject(), props => props.theme.contrast, props => props.theme.brightFont);

function RetreatButton({
  handleClick,
  name
}) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RetreatStyled, {
    onClick: () => handleClick(name),
    name: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, name, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ressources_icons_Pointer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rotate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RetreatButton);

/***/ }),

/***/ "./src/components/Settings.js":
/*!************************************!*\
  !*** ./src/components/Settings.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SwitchButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwitchButton */ "./src/components/SwitchButton.js");

var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/components/Settings.js";

function _templateObject2() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding-left: 40px;\n  padding-right: 40px;\n  border: none;\n  width: 100%;\n  height: 200px;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 24px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: none;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const Option = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), props => props.theme.contrast, props => props.theme.brightFont);
function Settings({
  handleToggleMode,
  mute,
  darkmode
}) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Darkmode", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SwitchButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "Darkmode",
    mode: darkmode,
    handleChange: () => handleToggleMode("darkmode"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Sound", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SwitchButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "Sound",
    mode: mute,
    handleChange: () => handleToggleMode("mute"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })));
}

/***/ }),

/***/ "./src/components/SwitchButton.js":
/*!****************************************!*\
  !*** ./src/components/SwitchButton.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwitchButton; });
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/components/SwitchButton.js";

function _templateObject5() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          left: 4px;\n          position: absolute;\n          transition: all 0.5s;\n        "]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          position: absolute;\n          transform: translateX(26px);\n          transition: all 0.5s;\n        "]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border-radius: 50%;\n  background: ", ";\n  width: 25px;\n  height: 25px;\n  top: -4px;\n  left: 4px;\n  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);\n  ", ";\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: none;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  margin: 5px;\n  border: 1px solid grey;\n  border-radius: 10px;\n  width: 60px;\n  height: 20px;\n  position: relative;\n  background: ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



const Background = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), props => props.theme.brightFont);
const Switch = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input(_templateObject2());
const Point = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label(_templateObject3(), props => props.theme.accent, props => props.active ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4()) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject5()));
function SwitchButton({
  id,
  mode,
  handleChange
}) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Background, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Point, {
    htmlFor: id,
    active: mode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Switch, {
    id: id,
    active: mode,
    onChange: handleChange,
    type: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/components/Top.js":
/*!*******************************!*\
  !*** ./src/components/Top.js ***!
  \*******************************/
/*! exports provided: StyledHeader, TopPointer, TopLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeader", function() { return StyledHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopPointer", function() { return TopPointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopLogo", function() { return TopLogo; });
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ressources_icons_Pointer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ressources/icons/Pointer */ "./src/ressources/icons/Pointer.js");
/* harmony import */ var _ressources_icons_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ressources/icons/Logo */ "./src/ressources/icons/Logo.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/components/Top.js";

function _templateObject3() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 0;\n  margin: 0;\n  text-align: right;\n  background: ", ";\n  border: none;\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  margin: 0;\n  padding-right: 10;\n  font-size: 20px;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: ", ";\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 40px;\n  padding-right: 30px;\n  width: 100%;\n  height: 80px;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header(_templateObject(), props => props.theme.contrast, props => props.theme.brightFont);
const StyledH2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject2(), props => props.theme.brightFont);
const InputFieldStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject3(), props => props.theme.contrast);
function TopPointer({
  headline,
  rotate,
  onClick
}) {
  let history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  function handleClick(destination) {
    history.push("/".concat(destination));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledHeader, {
    headline: headline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledH2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, headline), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputFieldStyled, {
    onClick: () => handleClick("select"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ressources_icons_Pointer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rotate: rotate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })));
}
function TopLogo({
  headline
}) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledHeader, {
    headline: headline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledH2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, headline), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ressources_icons_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Top */ "./src/components/Top.js");
var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/pages/About.js";



function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Top__WEBPACK_IMPORTED_MODULE_2__["TopPointer"], {
    headline: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "This is th about Page"));
}

/***/ }),

/***/ "./src/pages/Chatroom.js":
/*!*******************************!*\
  !*** ./src/pages/Chatroom.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chatroom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Top */ "./src/components/Top.js");
var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/pages/Chatroom.js";



function Chatroom() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Top__WEBPACK_IMPORTED_MODULE_2__["TopLogo"], {
    headline: "Chatroom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "This is the chatroom Page"));
}

/***/ }),

/***/ "./src/pages/GameScreen.js":
/*!*********************************!*\
  !*** ./src/pages/GameScreen.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Top */ "./src/components/Top.js");
var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/pages/GameScreen.js";



function GameScreen() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Top__WEBPACK_IMPORTED_MODULE_2__["TopLogo"], {
    headline: "GameScreen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "This is the GameScreen Page"));
}

/***/ }),

/***/ "./src/pages/GameSelect.js":
/*!*********************************!*\
  !*** ./src/pages/GameSelect.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameSelect; });
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_NavTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavTop */ "./src/components/NavTop.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.js");
/* harmony import */ var _components_Overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Overlay */ "./src/components/Overlay.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/pages/GameSelect.js";

function _templateObject2() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: ", ";\n  margin-bottom: ", ";\n  height: 150px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: space-around;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}







const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].main(_templateObject());
const Background = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), props => props.alt ? props.theme.main : props.theme.contrast, props => props.alt ? "100px" : false);
function GameSelect({
  open,
  handleToggleMode,
  mute,
  darkmode
}) {
  let history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();

  function handleClick() {
    history.push("/ChatRoom");
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NavTop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    state: open ? "open" : "closed",
    handleToggleMode: handleToggleMode,
    headline: "GameSelect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Background, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    active: true,
    big: true,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Open Game!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Background, {
    alt: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["AltButton"], {
    active: true,
    big: true,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Join Game!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Overlay__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    mute: mute,
    darkmode: darkmode,
    handleToggleMode: handleToggleMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })));
}

/***/ }),

/***/ "./src/pages/NicknameInput.js":
/*!************************************!*\
  !*** ./src/pages/NicknameInput.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NicknameInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Top */ "./src/components/Top.js");
var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/pages/NicknameInput.js";



function NicknameInput() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Top__WEBPACK_IMPORTED_MODULE_2__["TopLogo"], {
    headline: "NicknameInput",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NicknameInput, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
}

/***/ }),

/***/ "./src/pages/Profile.js":
/*!******************************!*\
  !*** ./src/pages/Profile.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Top */ "./src/components/Top.js");
var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/pages/Profile.js";



function Profile() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Top__WEBPACK_IMPORTED_MODULE_2__["TopPointer"], {
    headline: "Profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "This is th Profile Page"));
}

/***/ }),

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

/***/ }),

/***/ "./src/ressources/icons/Cross.js":
/*!***************************************!*\
  !*** ./src/ressources/icons/Cross.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/ressources/icons/Cross.js";

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex-grow: 1;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




function UnstyledCross({
  className
}) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 25",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "Icon_metro-cross",
    "data-name": "Icon metro-cross",
    d: "M22.388,18h0l-6.067-6.067,6.067-6.067h0a.626.626,0,0,0,0-.884L19.522,2.111a.627.627,0,0,0-.884,0h0L12.571,8.178,6.5,2.111h0a.627.627,0,0,0-.884,0L2.753,4.977a.626.626,0,0,0,0,.884h0l6.067,6.067L2.753,18h0a.626.626,0,0,0,0,.884L5.62,21.745a.626.626,0,0,0,.884,0h0l6.067-6.067,6.067,6.067h0a.626.626,0,0,0,.884,0l2.866-2.866a.626.626,0,0,0,0-.884Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

const Cross = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(UnstyledCross)(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Cross);

/***/ }),

/***/ "./src/ressources/icons/Logo.js":
/*!**************************************!*\
  !*** ./src/ressources/icons/Logo.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/ressources/icons/Logo.js";

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  fill: ", ";\n  height: 40px;\n  width: 40px;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




function Paddle({
  className
}) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36.005 36.004",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M34.889,20.848A15.122,15.122,0,0,0,10.2,4.437L6.265,8.381,21.136,23.252A10.059,10.059,0,0,1,34.889,20.848Zm-15.321,5.6-15.5-15.49A8.294,8.294,0,0,0,5.287,21.094l2.426,2.433L.471,29.813A1.385,1.385,0,0,0,.4,31.837L4.155,35.6a1.377,1.377,0,0,0,2.018-.07l6.279-7.263,2.51,2.51a8.182,8.182,0,0,0,4.943,2.341,10.025,10.025,0,0,1-.773-3.874,9.694,9.694,0,0,1,.436-2.791ZM29.25,22.5A6.75,6.75,0,1,0,36,29.25,6.752,6.752,0,0,0,29.25,22.5Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

const LogoStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Paddle)(_templateObject(), props => props.theme.accent);
/* harmony default export */ __webpack_exports__["default"] = (LogoStyled);

/***/ }),

/***/ "./src/ressources/icons/Options.js":
/*!*****************************************!*\
  !*** ./src/ressources/icons/Options.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/ressources/icons/Options.js";

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex-grow: 1;\n  margin: 2px;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




function UnstyledOptions({
  className
}) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 31.5 31.5",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Icon_ionic-md-options",
    "data-name": "Icon ionic-md-options",
    transform: "translate(-2.25 -2.25)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Group_41",
    "data-name": "Group 41",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "Path_31",
    "data-name": "Path 31",
    d: "M2.25,27H21.375v2.25H2.25Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "Path_32",
    "data-name": "Path 32",
    d: "M28.125,27H33.75v2.25H28.125Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "Path_33",
    "data-name": "Path 33",
    d: "M27,31.465a2.268,2.268,0,0,1-2.25,2.285h0a2.268,2.268,0,0,1-2.25-2.285v-6.68A2.268,2.268,0,0,1,24.75,22.5h0A2.268,2.268,0,0,1,27,24.785Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Group_42",
    "data-name": "Group 42",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "Path_34",
    "data-name": "Path 34",
    d: "M2.25,16.875H7.875v2.25H2.25Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "Path_35",
    "data-name": "Path 35",
    d: "M14.625,16.875H33.75v2.25H14.625Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "Path_36",
    "data-name": "Path 36",
    d: "M13.5,21.34a2.268,2.268,0,0,1-2.25,2.285h0A2.268,2.268,0,0,1,9,21.34V14.66a2.268,2.268,0,0,1,2.25-2.285h0A2.268,2.268,0,0,1,13.5,14.66Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Group_43",
    "data-name": "Group 43",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "Path_37",
    "data-name": "Path 37",
    d: "M2.25,6.75H21.375V9H2.25Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "Path_38",
    "data-name": "Path 38",
    d: "M28.125,6.75H33.75V9H28.125Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "Path_39",
    "data-name": "Path 39",
    d: "M27,11.215A2.268,2.268,0,0,1,24.75,13.5h0a2.268,2.268,0,0,1-2.25-2.285V4.535A2.268,2.268,0,0,1,24.75,2.25h0A2.268,2.268,0,0,1,27,4.535Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))));
}

const Options = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(UnstyledOptions)(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Options);

/***/ }),

/***/ "./src/ressources/icons/Pointer.js":
/*!*****************************************!*\
  !*** ./src/ressources/icons/Pointer.js ***!
  \*****************************************/
/*! exports provided: Arrow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pointer; });
/* harmony import */ var _Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/julian.toscani/Documents/neuefische/games/king-pong/src/ressources/icons/Pointer.js";

function _templateObject() {
  const data = Object(_Users_julian_toscani_Documents_neuefische_games_king_pong_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  fill: ", ";\n  height: 40px;\n  width: 40px;\n  transform: ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



function Arrow({
  className
}) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14.2 28.401",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13.5,9,27.7,23.2,13.5,37.4Z",
    transform: "translate(-13.5 -9)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}
const ArrowStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Arrow)(_templateObject(), props => props.white ? props.theme.brightFont : props.theme.accent, props => props.rotate ? "rotate(180deg)" : "none");
function Pointer({
  white,
  rotate
}) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ArrowStyled, {
    white: white,
    rotate: rotate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  });
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/themes/dark.js":
/*!****************************!*\
  !*** ./src/themes/dark.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const darkTheme = {
  main: "#595959",
  contrast: "#262626",
  accent: "#B4B3B3",
  brightFont: "#D3D3D3",
  darkFont: "rgba(0,0,0,0.85)"
};
/* harmony default export */ __webpack_exports__["default"] = (darkTheme);

/***/ }),

/***/ "./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const defaultTheme = {
  main: "#95ABBF",
  contrast: "#415A8C",
  accent: "#F2B604",
  brightFont: "#FFFFFF",
  darkFont: "rgba(0,0,0,0.85)"
};
/* harmony default export */ __webpack_exports__["default"] = (defaultTheme);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/julian.toscani/Documents/neuefische/games/king-pong/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/julian.toscani/Documents/neuefische/games/king-pong/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map