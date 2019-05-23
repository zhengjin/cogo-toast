webpackHotUpdate("static/development/pages/index.js",{

/***/ "./common-util/code-panel/index.jsx":
/*!******************************************!*\
  !*** ./common-util/code-panel/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./common-util/code-panel/styles.jsx");
/* harmony import */ var _headers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../headers */ "./common-util/headers/index.jsx");
/* harmony import */ var _code_block__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../code-block */ "./common-util/code-block/index.jsx");
/* harmony import */ var _code_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./code-icon */ "./common-util/code-panel/code-icon.jsx");







var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/common-util/code-panel/index.jsx";







var CodePanel =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CodePanel, _Component);

  function CodePanel() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CodePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CodePanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleOpen", function () {
      return _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CodePanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          heading = _this$props.heading,
          code = _this$props.code,
          children = _this$props.children;
      var isOpen = this.state.isOpen;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headers__WEBPACK_IMPORTED_MODULE_10__["H3"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, heading), code && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_code_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: this.toggleOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), isOpen && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_9__["CodeParent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, code), children);
    }
  }]);

  return CodePanel;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

CodePanel.Block = _code_block__WEBPACK_IMPORTED_MODULE_11__["default"];
CodePanel.propTypes = {
  heading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired,
  code: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node
};
CodePanel.defaultProps = {
  code: ''
};
/* harmony default export */ __webpack_exports__["default"] = (CodePanel);

/***/ })

})
//# sourceMappingURL=index.js.8d9cef73dbdd0c666a42.hot-update.js.map