module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common-util/button/index.jsx":
/*!**************************************!*\
  !*** ./common-util/button/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/colors */ "./util/colors.js");


/* harmony default export */ __webpack_exports__["default"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("button", {
  target: "ea9su450"
})("background:#fff;border-radius:4px;border:1px solid ", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].OUTLINE, ";color:", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT, ";padding:8px 20px;font-size:14px;cursor:pointer;text-transform:capitalize;transition:0.2s all ease-in-out;&.primary{border:2px solid ", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].ACCENT_DARK, ";background:", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].ACCENT_DARK, ";color:#fff;min-width:150px;&:hover{background:#fff;color:", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].ACCENT_DARK, ";}}&.success{&:hover{border:1px solid ", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].SUCCESS, ";color:", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].SUCCESS, ";}}&.info{&:hover{border:1px solid ", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].INFO, ";color:", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].INFO, ";}}&.loading{&:hover{border:1px solid ", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].LOADING, ";color:", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].LOADING, ";}}&.warn{&:hover{border:1px solid ", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].WARN, ";color:", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].WARN, ";}}&.error{&:hover{border:1px solid ", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR, ";color:", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR, ";}}&:focus{outline:none;}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9idXR0b24vaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUc0QiIsImZpbGUiOiIvVXNlcnMvYW5tb2xtYWhhdHB1cmthci9Qcm9qZWN0cy9Db2dvcG9ydC9jb2dvLXRvYXN0L2RvY3MvY29tbW9uLXV0aWwvYnV0dG9uL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vdXRpbC9jb2xvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuYnV0dG9uYFxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLk9VVExJTkV9O1xuXHRjb2xvcjogJHtjb2xvcnMuVEVYVH07XG5cdHBhZGRpbmc6IDhweCAyMHB4O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2UtaW4tb3V0O1xuXG5cdCYucHJpbWFyeSB7XG5cdFx0Ym9yZGVyOiAycHggc29saWQgJHtjb2xvcnMuQUNDRU5UX0RBUkt9O1xuXHRcdGJhY2tncm91bmQ6ICR7Y29sb3JzLkFDQ0VOVF9EQVJLfTtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRtaW4td2lkdGg6IDE1MHB4O1xuXG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0Y29sb3I6ICR7Y29sb3JzLkFDQ0VOVF9EQVJLfTtcblx0XHR9XG5cdH1cblxuXHQmLnN1Y2Nlc3Mge1xuXHRcdCY6aG92ZXIge1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMuU1VDQ0VTU307XG5cdFx0XHRjb2xvcjogJHtjb2xvcnMuU1VDQ0VTU307XG5cdFx0fVxuXHR9XG5cblx0Ji5pbmZvIHtcblx0XHQmOmhvdmVyIHtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLklORk99O1xuXHRcdFx0Y29sb3I6ICR7Y29sb3JzLklORk99O1xuXHRcdH1cblx0fVxuXG5cdCYubG9hZGluZyB7XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5MT0FESU5HfTtcblx0XHRcdGNvbG9yOiAke2NvbG9ycy5MT0FESU5HfTtcblx0XHR9XG5cdH1cblxuXHQmLndhcm4ge1xuXHRcdCY6aG92ZXIge1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMuV0FSTn07XG5cdFx0XHRjb2xvcjogJHtjb2xvcnMuV0FSTn07XG5cdFx0fVxuXHR9XG5cblx0Ji5lcnJvciB7XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5FUlJPUn07XG5cdFx0XHRjb2xvcjogJHtjb2xvcnMuRVJST1J9O1xuXHRcdH1cblx0fVxuXG5cdCY6Zm9jdXMge1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdH1cbmA7XG4iXX0= */")));

/***/ }),

/***/ "./common-util/code-block/index.jsx":
/*!******************************************!*\
  !*** ./common-util/code-block/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./common-util/code-block/styles.jsx");
var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/common-util/code-block/index.jsx";




var CodeBlock = function CodeBlock(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, children);
};

CodeBlock.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"]
};
CodeBlock.defaultProps = {
  children: ''
};
/* harmony default export */ __webpack_exports__["default"] = (CodeBlock);

/***/ }),

/***/ "./common-util/code-block/styles.jsx":
/*!*******************************************!*\
  !*** ./common-util/code-block/styles.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("code", {
  target: "e1kie87e0"
})( false ? undefined : {
  name: "yjcakg",
  styles: "border-radius:4px;border:1px solid #d9d9d9;background-color:#d6fff8;padding:15px 30px;font-size:14px;line-height:35px;max-width:100%;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9jb2RlLWJsb2NrL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRTBCIiwiZmlsZSI6Ii9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9jb2RlLWJsb2NrL3N0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5jb2RlYFxuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkNmZmZjg7XG5cdHBhZGRpbmc6IDE1cHggMzBweDtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRsaW5lLWhlaWdodDogMzVweDtcblx0bWF4LXdpZHRoOiAxMDAlO1xuYDtcbiJdfQ== */"
}));

/***/ }),

/***/ "./common-util/code-panel/code-icon.jsx":
/*!**********************************************!*\
  !*** ./common-util/code-panel/code-icon.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/common-util/code-panel/code-icon.jsx";


var SvgComponent = function SvgComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: 20,
    height: 20,
    style: {
      marginLeft: 10,
      cursor: 'pointer'
    },
    viewBox: "0 0 522.468 522.469"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "#1cd8d2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M325.762 70.513l-17.706-4.854c-2.279-.76-4.524-.521-6.707.715-2.19 1.237-3.669 3.094-4.429 5.568L190.426 440.53c-.76 2.475-.522 4.809.715 6.995 1.237 2.19 3.09 3.665 5.568 4.425l17.701 4.856c2.284.766 4.521.526 6.71-.712 2.19-1.243 3.666-3.094 4.425-5.564L332.042 81.936c.759-2.474.523-4.808-.716-6.999-1.238-2.19-3.089-3.665-5.564-4.424zM166.167 142.465c0-2.474-.953-4.665-2.856-6.567l-14.277-14.276c-1.903-1.903-4.093-2.857-6.567-2.857s-4.665.955-6.567 2.857L2.856 254.666C.95 256.569 0 258.759 0 261.233s.953 4.664 2.856 6.566l133.043 133.044c1.902 1.906 4.089 2.854 6.567 2.854s4.665-.951 6.567-2.854l14.277-14.268c1.903-1.902 2.856-4.093 2.856-6.57 0-2.471-.953-4.661-2.856-6.563L51.107 261.233l112.204-112.201c1.906-1.902 2.856-4.093 2.856-6.567zM519.614 254.663L386.567 121.619c-1.902-1.902-4.093-2.857-6.563-2.857-2.478 0-4.661.955-6.57 2.857l-14.271 14.275c-1.902 1.903-2.851 4.09-2.851 6.567s.948 4.665 2.851 6.567l112.206 112.204-112.206 112.21c-1.902 1.902-2.851 4.093-2.851 6.563 0 2.478.948 4.668 2.851 6.57l14.271 14.268c1.909 1.906 4.093 2.854 6.57 2.854 2.471 0 4.661-.951 6.563-2.854L519.614 267.8c1.903-1.902 2.854-4.096 2.854-6.57 0-2.475-.951-4.665-2.854-6.567z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
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
  code: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CodePanel);

/***/ }),

/***/ "./common-util/code-panel/styles.jsx":
/*!*******************************************!*\
  !*** ./common-util/code-panel/styles.jsx ***!
  \*******************************************/
/*! exports provided: default, Row, Icon, CodeParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeParent", function() { return CodeParent; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e10mxzml0"
})( false ? undefined : {
  name: "ek9xax",
  styles: "width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:30px 30px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9jb2RlLXBhbmVsL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXlCIiwiZmlsZSI6Ii9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9jb2RlLXBhbmVsL3N0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5kaXZgXG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogMzBweCAzMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvbiA9IHN0eWxlZC5pbWdgXG5cdHdpZHRoOiAyMHB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdHJpZ2h0OiAwcHg7XG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2UtaW4tb3V0O1xuXG5cdCY6aG92ZXIge1xuXHRcdGZpbHRlcjogaW52ZXJ0KDIwJSk7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb2RlUGFyZW50ID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luOiAyMHB4IDBweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuIl19 */"
}));
var Row = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e10mxzml1",
  label: "Row"
})( false ? undefined : {
  name: "70qvj9",
  styles: "display:flex;align-items:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9jb2RlLXBhbmVsL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzZCIiwiZmlsZSI6Ii9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9jb2RlLXBhbmVsL3N0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5kaXZgXG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogMzBweCAzMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvbiA9IHN0eWxlZC5pbWdgXG5cdHdpZHRoOiAyMHB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdHJpZ2h0OiAwcHg7XG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2UtaW4tb3V0O1xuXG5cdCY6aG92ZXIge1xuXHRcdGZpbHRlcjogaW52ZXJ0KDIwJSk7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb2RlUGFyZW50ID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luOiAyMHB4IDBweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuIl19 */"
});
var Icon = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("img", {
  target: "e10mxzml2",
  label: "Icon"
})( false ? undefined : {
  name: "1iebra6",
  styles: "width:20px;height:20px;right:0px;margin-left:10px;cursor:pointer;transition:0.2s all ease-in-out;&:hover{filter:invert(20%);}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9jb2RlLXBhbmVsL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0I4QiIsImZpbGUiOiIvVXNlcnMvYW5tb2xtYWhhdHB1cmthci9Qcm9qZWN0cy9Db2dvcG9ydC9jb2dvLXRvYXN0L2RvY3MvY29tbW9uLXV0aWwvY29kZS1wYW5lbC9zdHlsZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuZGl2YFxuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDMwcHggMzBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IEljb24gPSBzdHlsZWQuaW1nYFxuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHRyaWdodDogMHB4O1xuXHRtYXJnaW4tbGVmdDogMTBweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0cmFuc2l0aW9uOiAwLjJzIGFsbCBlYXNlLWluLW91dDtcblxuXHQmOmhvdmVyIHtcblx0XHRmaWx0ZXI6IGludmVydCgyMCUpO1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29kZVBhcmVudCA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbjogMjBweCAwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcbiJdfQ== */"
});
var CodeParent = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e10mxzml3",
  label: "CodeParent"
})( false ? undefined : {
  name: "j1jx02",
  styles: "margin:20px 0px;display:flex;justify-content:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9jb2RlLXBhbmVsL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJvQyIsImZpbGUiOiIvVXNlcnMvYW5tb2xtYWhhdHB1cmthci9Qcm9qZWN0cy9Db2dvcG9ydC9jb2dvLXRvYXN0L2RvY3MvY29tbW9uLXV0aWwvY29kZS1wYW5lbC9zdHlsZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuZGl2YFxuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDMwcHggMzBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IEljb24gPSBzdHlsZWQuaW1nYFxuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHRyaWdodDogMHB4O1xuXHRtYXJnaW4tbGVmdDogMTBweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0cmFuc2l0aW9uOiAwLjJzIGFsbCBlYXNlLWluLW91dDtcblxuXHQmOmhvdmVyIHtcblx0XHRmaWx0ZXI6IGludmVydCgyMCUpO1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29kZVBhcmVudCA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbjogMjBweCAwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcbiJdfQ== */"
});

/***/ }),

/***/ "./common-util/headers/index.jsx":
/*!***************************************!*\
  !*** ./common-util/headers/index.jsx ***!
  \***************************************/
/*! exports provided: H1, H2, H3, H4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return H4; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

var H1 = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("h1", {
  target: "ez2h8g90",
  label: "H1"
})( false ? undefined : {
  name: "vtkeg3",
  styles: "color:#303030;font-size:36px;font-weight:700;margin:2px;text-align:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9oZWFkZXJzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFMkIiLCJmaWxlIjoiL1VzZXJzL2FubW9sbWFoYXRwdXJrYXIvUHJvamVjdHMvQ29nb3BvcnQvY29nby10b2FzdC9kb2NzL2NvbW1vbi11dGlsL2hlYWRlcnMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgSDEgPSBzdHlsZWQuaDFgXG5cdGNvbG9yOiAjMzAzMDMwO1xuXHRmb250LXNpemU6IDM2cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdG1hcmdpbjogMnB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgSDIgPSBzdHlsZWQuaDJgXG5cdG1hcmdpbjogMnB4O1xuXHRmb250LXNpemU6IDE4cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICM0MDQwNDA7XG5gO1xuXG5leHBvcnQgY29uc3QgSDMgPSBzdHlsZWQuaDNgXG5cdG1hcmdpbjogMnB4O1xuXHRwYWRkaW5nOiAwcHg7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICM0MDQwNDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBINCA9IHN0eWxlZC5oNGBcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRtYXJnaW46IDJweDtcblx0Y29sb3I6ICM0MDQwNDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG4iXX0= */"
});
var H2 = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("h2", {
  target: "ez2h8g91",
  label: "H2"
})( false ? undefined : {
  name: "df8rir",
  styles: "margin:2px;font-size:18px;text-align:center;color:#404040;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9oZWFkZXJzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVMkIiLCJmaWxlIjoiL1VzZXJzL2FubW9sbWFoYXRwdXJrYXIvUHJvamVjdHMvQ29nb3BvcnQvY29nby10b2FzdC9kb2NzL2NvbW1vbi11dGlsL2hlYWRlcnMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgSDEgPSBzdHlsZWQuaDFgXG5cdGNvbG9yOiAjMzAzMDMwO1xuXHRmb250LXNpemU6IDM2cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdG1hcmdpbjogMnB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgSDIgPSBzdHlsZWQuaDJgXG5cdG1hcmdpbjogMnB4O1xuXHRmb250LXNpemU6IDE4cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICM0MDQwNDA7XG5gO1xuXG5leHBvcnQgY29uc3QgSDMgPSBzdHlsZWQuaDNgXG5cdG1hcmdpbjogMnB4O1xuXHRwYWRkaW5nOiAwcHg7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICM0MDQwNDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBINCA9IHN0eWxlZC5oNGBcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRtYXJnaW46IDJweDtcblx0Y29sb3I6ICM0MDQwNDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG4iXX0= */"
});
var H3 = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("h3", {
  target: "ez2h8g92",
  label: "H3"
})( false ? undefined : {
  name: "jjee4u",
  styles: "margin:2px;padding:0px;font-size:16px;color:#404040;text-align:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9oZWFkZXJzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQjJCIiwiZmlsZSI6Ii9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9oZWFkZXJzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IEgxID0gc3R5bGVkLmgxYFxuXHRjb2xvcjogIzMwMzAzMDtcblx0Zm9udC1zaXplOiAzNnB4O1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRtYXJnaW46IDJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IEgyID0gc3R5bGVkLmgyYFxuXHRtYXJnaW46IDJweDtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiAjNDA0MDQwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEgzID0gc3R5bGVkLmgzYFxuXHRtYXJnaW46IDJweDtcblx0cGFkZGluZzogMHB4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiAjNDA0MDQwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgSDQgPSBzdHlsZWQuaDRgXG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bWFyZ2luOiAycHg7XG5cdGNvbG9yOiAjNDA0MDQwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuIl19 */"
});
var H4 = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("h4", {
  target: "ez2h8g93",
  label: "H4"
})( false ? undefined : {
  name: "6j5p9w",
  styles: "font-size:14px;margin:2px;color:#404040;text-align:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9oZWFkZXJzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QjJCIiwiZmlsZSI6Ii9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9oZWFkZXJzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IEgxID0gc3R5bGVkLmgxYFxuXHRjb2xvcjogIzMwMzAzMDtcblx0Zm9udC1zaXplOiAzNnB4O1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRtYXJnaW46IDJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IEgyID0gc3R5bGVkLmgyYFxuXHRtYXJnaW46IDJweDtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiAjNDA0MDQwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEgzID0gc3R5bGVkLmgzYFxuXHRtYXJnaW46IDJweDtcblx0cGFkZGluZzogMHB4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiAjNDA0MDQwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgSDQgPSBzdHlsZWQuaDRgXG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bWFyZ2luOiAycHg7XG5cdGNvbG9yOiAjNDA0MDQwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuIl19 */"
});

/***/ }),

/***/ "./common-util/paragraph/index.jsx":
/*!*****************************************!*\
  !*** ./common-util/paragraph/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("p", {
  target: "e19cmlkp0"
})( false ? undefined : {
  name: "nbbsu9",
  styles: "color:#404040;margin:2px 0px;padding:0px;font-size:14px;text-align:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC9wYXJhZ3JhcGgvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUV1QiIsImZpbGUiOiIvVXNlcnMvYW5tb2xtYWhhdHB1cmthci9Qcm9qZWN0cy9Db2dvcG9ydC9jb2dvLXRvYXN0L2RvY3MvY29tbW9uLXV0aWwvcGFyYWdyYXBoL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLnBgXG5cdGNvbG9yOiAjNDA0MDQwO1xuXHRtYXJnaW46IDJweCAwcHg7XG5cdHBhZGRpbmc6IDBweDtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuIl19 */"
}));

/***/ }),

/***/ "./common-util/tag/index.jsx":
/*!***********************************!*\
  !*** ./common-util/tag/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "em4n3620"
})( false ? undefined : {
  name: "1ngqmwi",
  styles: "color:#fff;text-align:center;border-radius:5px;border:1px solid #fff;padding:6px 14px;margin:5px;font-size:12px;&.md{font-size:14px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21tb24tdXRpbC90YWcvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUV5QiIsImZpbGUiOiIvVXNlcnMvYW5tb2xtYWhhdHB1cmthci9Qcm9qZWN0cy9Db2dvcG9ydC9jb2dvLXRvYXN0L2RvY3MvY29tbW9uLXV0aWwvdGFnL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuXHRwYWRkaW5nOiA2cHggMTRweDtcblx0bWFyZ2luOiA1cHg7XG5cdGZvbnQtc2l6ZTogMTJweDtcblxuXHQmLm1kIHtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdH1cbmA7XG4iXX0= */"
}));

/***/ }),

/***/ "./components/Home/Banner/index.jsx":
/*!******************************************!*\
  !*** ./components/Home/Banner/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_util_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common-util/tag */ "./common-util/tag/index.jsx");
/* harmony import */ var _common_util_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common-util/headers */ "./common-util/headers/index.jsx");
/* harmony import */ var _common_util_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common-util/paragraph */ "./common-util/paragraph/index.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Home/Banner/styles.jsx");
var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/components/Home/Banner/index.jsx";






var Hero = function Hero() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Section"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_tag__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "MIT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_tag__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Open Source")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_headers__WEBPACK_IMPORTED_MODULE_2__["H1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "CogoToast"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_headers__WEBPACK_IMPORTED_MODULE_2__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Beautiful, Zero-Configuration, Toast Messages")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Section"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "- Plug & Play. No configuration required"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "~ 3.5K Gzipped (All Inclusive of Icons, Styles, & Code)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "- Completely Customizable"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "- Built with React")));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Home/Banner/styles.jsx":
/*!*******************************************!*\
  !*** ./components/Home/Banner/styles.jsx ***!
  \*******************************************/
/*! exports provided: default, Row, Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/colors */ "./util/colors.js");


/* harmony default export */ __webpack_exports__["default"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1uoqbqw0"
})("width:100%;background:", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].ACCENT_LIGHT, ";background:linear-gradient(to top,", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].ACCENT_LIGHT, ",", _util_colors__WEBPACK_IMPORTED_MODULE_1__["default"].ACCENT_DARK, ");display:flex;flex-direction:column;justify-content:center;align-items:center;padding:30px 30px;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvQmFubmVyL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3lCIiwiZmlsZSI6Ii9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvQmFubmVyL3N0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uLy4uL3V0aWwvY29sb3JzJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQ6ICR7Y29sb3JzLkFDQ0VOVF9MSUdIVH07XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICR7Y29sb3JzLkFDQ0VOVF9MSUdIVH0sICR7Y29sb3JzLkFDQ0VOVF9EQVJLfSk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nOiAzMHB4IDMwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW46IDE1cHggMHB4O1xuYDtcbiJdfQ== */")));
var Row = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1uoqbqw1",
  label: "Row"
})( false ? undefined : {
  name: "1fcsmgl",
  styles: "display:flex;margin-bottom:20px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvQmFubmVyL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYzZCIiwiZmlsZSI6Ii9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvQmFubmVyL3N0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uLy4uL3V0aWwvY29sb3JzJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQ6ICR7Y29sb3JzLkFDQ0VOVF9MSUdIVH07XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICR7Y29sb3JzLkFDQ0VOVF9MSUdIVH0sICR7Y29sb3JzLkFDQ0VOVF9EQVJLfSk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nOiAzMHB4IDMwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW46IDE1cHggMHB4O1xuYDtcbiJdfQ== */"
});
var Section = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("section", {
  target: "e1uoqbqw2",
  label: "Section"
})( false ? undefined : {
  name: "tbmbmd",
  styles: "display:flex;flex-direction:column;justify-content:center;align-items:center;margin:15px 0px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvQmFubmVyL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJxQyIsImZpbGUiOiIvVXNlcnMvYW5tb2xtYWhhdHB1cmthci9Qcm9qZWN0cy9Db2dvcG9ydC9jb2dvLXRvYXN0L2RvY3MvY29tcG9uZW50cy9Ib21lL0Jhbm5lci9zdHlsZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi8uLi91dGlsL2NvbG9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5kaXZgXG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiAke2NvbG9ycy5BQ0NFTlRfTElHSFR9O1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAke2NvbG9ycy5BQ0NFTlRfTElHSFR9LCAke2NvbG9ycy5BQ0NFTlRfREFSS30pO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogMzBweCAzMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luOiAxNXB4IDBweDtcbmA7XG4iXX0= */"
});

/***/ }),

/***/ "./components/Home/Gzipped/index.jsx":
/*!*******************************************!*\
  !*** ./components/Home/Gzipped/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_util_paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common-util/paragraph */ "./common-util/paragraph/index.jsx");
/* harmony import */ var _common_util_code_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common-util/code-panel */ "./common-util/code-panel/index.jsx");
/* harmony import */ var _common_util_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common-util/button */ "./common-util/button/index.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Home/Gzipped/styles.jsx");
var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/components/Home/Gzipped/index.jsx";






var Types = function Types() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    heading: "Only ~ 3.5K Gzipped",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "The package contains one single minified build file, and its all inclusive!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "The SVG Icons and the Styles are packed along built into the Code.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/Cogoport/cogo-toast",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Check out on Github!"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Types);

/***/ }),

/***/ "./components/Home/Gzipped/styles.jsx":
/*!********************************************!*\
  !*** ./components/Home/Gzipped/styles.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("section", {
  target: "e1sepgas0"
})( false ? undefined : {
  name: "11wy2n5",
  styles: "display:flex;flex-direction:column;justify-content:center;align-items:center;flex-wrap:wrap;margin:20px 0px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvR3ppcHBlZC9zdHlsZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUU2QiIsImZpbGUiOiIvVXNlcnMvYW5tb2xtYWhhdHB1cmthci9Qcm9qZWN0cy9Db2dvcG9ydC9jb2dvLXRvYXN0L2RvY3MvY29tcG9uZW50cy9Ib21lL0d6aXBwZWQvc3R5bGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLnNlY3Rpb25gXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdG1hcmdpbjogMjBweCAwcHg7XG5gO1xuIl19 */"
}));

/***/ }),

/***/ "./components/Home/MadeWithLove/heart-icon.jsx":
/*!*****************************************************!*\
  !*** ./components/Home/MadeWithLove/heart-icon.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/components/Home/MadeWithLove/heart-icon.jsx";


var SvgComponent = function SvgComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: 15,
    height: 15,
    style: {
      margin: '0px 5px'
    },
    viewBox: "0 0 50 50"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M24.85 10.126c2.018-4.783 6.628-8.125 11.99-8.125 7.223 0 12.425 6.179 13.079 13.543 0 0 .353 1.828-.424 5.119-1.058 4.482-3.545 8.464-6.898 11.503L24.85 48 7.402 32.165c-3.353-3.038-5.84-7.021-6.898-11.503-.777-3.291-.424-5.119-.424-5.119C.734 8.179 5.936 2 13.159 2c5.363 0 9.673 3.343 11.691 8.126z",
    fill: "#d75a4a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

/***/ }),

/***/ "./components/Home/MadeWithLove/index.jsx":
/*!************************************************!*\
  !*** ./components/Home/MadeWithLove/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Home/MadeWithLove/styles.jsx");
/* harmony import */ var _heart_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heart-icon */ "./components/Home/MadeWithLove/heart-icon.jsx");
var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/components/Home/MadeWithLove/index.jsx";




var MadeWithLove = function MadeWithLove() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
    href: "https://www.cogoport.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Made with ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_heart_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), "at", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["Logo"], {
    src: "https://www.cogoport.com/static/images/main_logo.svg",
    alt: "Cogoport - Simplifying International Logistics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MadeWithLove);

/***/ }),

/***/ "./components/Home/MadeWithLove/styles.jsx":
/*!*************************************************!*\
  !*** ./components/Home/MadeWithLove/styles.jsx ***!
  \*************************************************/
/*! exports provided: default, Anchor, Icon, Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return Anchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("p", {
  target: "e1not29a0"
})( false ? undefined : {
  name: "1p1gx1o",
  styles: "margin:0px auto;padding:20px;border-top:1px dashed #ddd;display:flex;justify-content:center;align-items:center;color:#000;text-decoration:none;font-size:14px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvTWFkZVdpdGhMb3ZlL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXVCIiwiZmlsZSI6Ii9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvTWFkZVdpdGhMb3ZlL3N0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5wYFxuXHRtYXJnaW46IDBweCBhdXRvO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRib3JkZXItdG9wOiAxcHggZGFzaGVkICNkZGQ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRjb2xvcjogIzAwMDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250LXNpemU6IDE0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQW5jaG9yID0gc3R5bGVkLmFgXG5cdGNvbG9yOiAjMDAwO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvbiA9IHN0eWxlZC5pbWdgXG5cdG1hcmdpbjogMHB4IDhweDtcblx0d2lkdGg6IDE1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5pbWdgXG5cdG1hcmdpbjogMHB4IDhweDtcblx0bWFyZ2luLXRvcDogMnB4O1xuXHR3aWR0aDogOTBweDtcbmA7XG4iXX0= */"
}));
var Anchor = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("a", {
  target: "e1not29a1",
  label: "Anchor"
})( false ? undefined : {
  name: "1ydg16i",
  styles: "color:#000;text-decoration:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvTWFkZVdpdGhMb3ZlL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYzhCIiwiZmlsZSI6Ii9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvTWFkZVdpdGhMb3ZlL3N0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5wYFxuXHRtYXJnaW46IDBweCBhdXRvO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRib3JkZXItdG9wOiAxcHggZGFzaGVkICNkZGQ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRjb2xvcjogIzAwMDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250LXNpemU6IDE0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQW5jaG9yID0gc3R5bGVkLmFgXG5cdGNvbG9yOiAjMDAwO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvbiA9IHN0eWxlZC5pbWdgXG5cdG1hcmdpbjogMHB4IDhweDtcblx0d2lkdGg6IDE1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5pbWdgXG5cdG1hcmdpbjogMHB4IDhweDtcblx0bWFyZ2luLXRvcDogMnB4O1xuXHR3aWR0aDogOTBweDtcbmA7XG4iXX0= */"
});
var Icon = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("img", {
  target: "e1not29a2",
  label: "Icon"
})( false ? undefined : {
  name: "1djoof9",
  styles: "margin:0px 8px;width:15px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvTWFkZVdpdGhMb3ZlL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUI4QiIsImZpbGUiOiIvVXNlcnMvYW5tb2xtYWhhdHB1cmthci9Qcm9qZWN0cy9Db2dvcG9ydC9jb2dvLXRvYXN0L2RvY3MvY29tcG9uZW50cy9Ib21lL01hZGVXaXRoTG92ZS9zdHlsZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQucGBcblx0bWFyZ2luOiAwcHggYXV0bztcblx0cGFkZGluZzogMjBweDtcblx0Ym9yZGVyLXRvcDogMXB4IGRhc2hlZCAjZGRkO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Y29sb3I6ICMwMDA7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Zm9udC1zaXplOiAxNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEFuY2hvciA9IHN0eWxlZC5hYFxuXHRjb2xvcjogIzAwMDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYDtcblxuZXhwb3J0IGNvbnN0IEljb24gPSBzdHlsZWQuaW1nYFxuXHRtYXJnaW46IDBweCA4cHg7XG5cdHdpZHRoOiAxNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuaW1nYFxuXHRtYXJnaW46IDBweCA4cHg7XG5cdG1hcmdpbi10b3A6IDJweDtcblx0d2lkdGg6IDkwcHg7XG5gO1xuIl19 */"
});
var Logo = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("img", {
  target: "e1not29a3",
  label: "Logo"
})( false ? undefined : {
  name: "1nzt6bz",
  styles: "margin:0px 8px;margin-top:2px;width:90px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvTWFkZVdpdGhMb3ZlL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0I4QiIsImZpbGUiOiIvVXNlcnMvYW5tb2xtYWhhdHB1cmthci9Qcm9qZWN0cy9Db2dvcG9ydC9jb2dvLXRvYXN0L2RvY3MvY29tcG9uZW50cy9Ib21lL01hZGVXaXRoTG92ZS9zdHlsZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQucGBcblx0bWFyZ2luOiAwcHggYXV0bztcblx0cGFkZGluZzogMjBweDtcblx0Ym9yZGVyLXRvcDogMXB4IGRhc2hlZCAjZGRkO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Y29sb3I6ICMwMDA7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Zm9udC1zaXplOiAxNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEFuY2hvciA9IHN0eWxlZC5hYFxuXHRjb2xvcjogIzAwMDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYDtcblxuZXhwb3J0IGNvbnN0IEljb24gPSBzdHlsZWQuaW1nYFxuXHRtYXJnaW46IDBweCA4cHg7XG5cdHdpZHRoOiAxNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuaW1nYFxuXHRtYXJnaW46IDBweCA4cHg7XG5cdG1hcmdpbi10b3A6IDJweDtcblx0d2lkdGg6IDkwcHg7XG5gO1xuIl19 */"
});

/***/ }),

/***/ "./components/Home/PlugPlay/index.jsx":
/*!********************************************!*\
  !*** ./components/Home/PlugPlay/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_util_code_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common-util/code-panel */ "./common-util/code-panel/index.jsx");
/* harmony import */ var _common_util_code_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common-util/code-block */ "./common-util/code-block/index.jsx");
/* harmony import */ var _common_util_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common-util/headers */ "./common-util/headers/index.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Home/PlugPlay/styles.jsx");
var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/components/Home/PlugPlay/index.jsx";






var Types = function Types() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: "Get Started, Plug & Play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Group"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_headers__WEBPACK_IMPORTED_MODULE_3__["H4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Install via NPM or Yarn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_block__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "npm install --save cogo-toast"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "yarn add cogo-toast"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Group"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_headers__WEBPACK_IMPORTED_MODULE_3__["H4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Usage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_block__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "import cogoToast from 'cogo-toast';"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "cogoToast.success(\"Success!\");")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Types);

/***/ }),

/***/ "./components/Home/PlugPlay/styles.jsx":
/*!*********************************************!*\
  !*** ./components/Home/PlugPlay/styles.jsx ***!
  \*********************************************/
/*! exports provided: default, Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("section", {
  target: "e10k27oi0"
})( false ? undefined : {
  name: "7kvqg0",
  styles: "display:flex;justify-content:center;flex-wrap:wrap;margin:20px 0px;& > *{margin:10px 15px;min-width:350px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvUGx1Z1BsYXkvc3R5bGVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFNkIiLCJmaWxlIjoiL1VzZXJzL2FubW9sbWFoYXRwdXJrYXIvUHJvamVjdHMvQ29nb3BvcnQvY29nby10b2FzdC9kb2NzL2NvbXBvbmVudHMvSG9tZS9QbHVnUGxheS9zdHlsZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuc2VjdGlvbmBcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0bWFyZ2luOiAyMHB4IDBweDtcblxuXHQmID4gKiB7XG5cdFx0bWFyZ2luOiAxMHB4IDE1cHg7XG5cdFx0bWluLXdpZHRoOiAzNTBweDtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IEdyb3VwID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGZsZXgtd3JhcDogd3JhcDtcblxuXHQmID4gKiB7XG5cdFx0bWFyZ2luOiA1cHggMHB4O1xuXHR9XG5gO1xuIl19 */"
}));
var Group = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e10k27oi1",
  label: "Group"
})( false ? undefined : {
  name: "19oa2fg",
  styles: "display:flex;flex-direction:column;justify-content:center;flex-wrap:wrap;& > *{margin:5px 0px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvUGx1Z1BsYXkvc3R5bGVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjK0IiLCJmaWxlIjoiL1VzZXJzL2FubW9sbWFoYXRwdXJrYXIvUHJvamVjdHMvQ29nb3BvcnQvY29nby10b2FzdC9kb2NzL2NvbXBvbmVudHMvSG9tZS9QbHVnUGxheS9zdHlsZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuc2VjdGlvbmBcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0bWFyZ2luOiAyMHB4IDBweDtcblxuXHQmID4gKiB7XG5cdFx0bWFyZ2luOiAxMHB4IDE1cHg7XG5cdFx0bWluLXdpZHRoOiAzNTBweDtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IEdyb3VwID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGZsZXgtd3JhcDogd3JhcDtcblxuXHQmID4gKiB7XG5cdFx0bWFyZ2luOiA1cHggMHB4O1xuXHR9XG5gO1xuIl19 */"
});

/***/ }),

/***/ "./components/Home/Positions/index.jsx":
/*!*********************************************!*\
  !*** ./components/Home/Positions/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cogo-toast */ "cogo-toast");
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cogo_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_util_code_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common-util/code-panel */ "./common-util/code-panel/index.jsx");
/* harmony import */ var _common_util_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common-util/button */ "./common-util/button/index.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Home/Positions/styles.jsx");
var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/components/Home/Positions/index.jsx";





var positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];

var showMessage = function showMessage(position) {
  return cogo_toast__WEBPACK_IMPORTED_MODULE_1___default.a.info('This is an info message.', {
    position: position
  });
};

var showMessageWithHeading = function showMessageWithHeading(position) {
  cogo_toast__WEBPACK_IMPORTED_MODULE_1___default.a.info('This is an info message.', {
    position: position,
    heading: 'Information'
  });
};

var codeBlock = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_panel__WEBPACK_IMPORTED_MODULE_2__["default"].Block, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, 'cogoToast.info("This is an info message", { position: \'top-center\', heading: \'Information\' });');

var Positions = function Positions() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    heading: "Positions & Heading",
    code: codeBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, positions.map(function (position) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Group"], {
      key: position,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "info",
      onClick: function onClick() {
        return showMessage(position);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, position), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "primary",
      onClick: function onClick() {
        return showMessageWithHeading(position);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "With Heading"));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Positions);

/***/ }),

/***/ "./components/Home/Positions/styles.jsx":
/*!**********************************************!*\
  !*** ./components/Home/Positions/styles.jsx ***!
  \**********************************************/
/*! exports provided: default, Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("section", {
  target: "edzd43i0"
})( false ? undefined : {
  name: "10a6yu5",
  styles: "display:flex;justify-content:center;flex-wrap:wrap;margin-top:20px;& > *{margin:10px 15px;width:150px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvUG9zaXRpb25zL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRTZCIiwiZmlsZSI6Ii9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvUG9zaXRpb25zL3N0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5zZWN0aW9uYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXG5cdCYgPiAqIHtcblx0XHRtYXJnaW46IDEwcHggMTVweDtcblx0XHR3aWR0aDogMTUwcHg7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBHcm91cCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdCYgPiAqIHtcblx0XHRtYXJnaW46IDEwcHggMHB4O1xuXHR9XG5gO1xuIl19 */"
}));
var Group = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "edzd43i1",
  label: "Group"
})( false ? undefined : {
  name: "5xsyfv",
  styles: "display:flex;flex-direction:column;justify-content:center;& > *{margin:10px 0px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvUG9zaXRpb25zL3N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYytCIiwiZmlsZSI6Ii9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvUG9zaXRpb25zL3N0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5zZWN0aW9uYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXG5cdCYgPiAqIHtcblx0XHRtYXJnaW46IDEwcHggMTVweDtcblx0XHR3aWR0aDogMTUwcHg7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBHcm91cCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdCYgPiAqIHtcblx0XHRtYXJnaW46IDEwcHggMHB4O1xuXHR9XG5gO1xuIl19 */"
});

/***/ }),

/***/ "./components/Home/Promise/index.jsx":
/*!*******************************************!*\
  !*** ./components/Home/Promise/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cogo-toast */ "cogo-toast");
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cogo_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_util_paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common-util/paragraph */ "./common-util/paragraph/index.jsx");
/* harmony import */ var _common_util_code_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common-util/code-panel */ "./common-util/code-panel/index.jsx");
/* harmony import */ var _common_util_code_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common-util/code-block */ "./common-util/code-block/index.jsx");
/* harmony import */ var _common_util_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common-util/button */ "./common-util/button/index.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/Home/Promise/styles.jsx");
var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/components/Home/Promise/index.jsx";








var showToast = function showToast() {
  cogo_toast__WEBPACK_IMPORTED_MODULE_1___default.a.loading('Loading your data...').then(function () {
    cogo_toast__WEBPACK_IMPORTED_MODULE_1___default.a.success('Data Successfully Loaded');
  });
};

var Types = function Types() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    heading: "Returns a Promise, With Useful Callbacks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Group"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_paragraph__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Returns a promise which resolves when the toast is about to hide."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_paragraph__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "This can be useful to do some action when the toast has completed showing.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Group"], {
    className: "code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_block__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, 'cogoToast.loading("Loading your data...").then(()=>{'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginLeft: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "cogoToast.success(\"Data Successfully Loaded\");"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, '});')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "primary",
    onClick: showToast,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Show Me")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Group"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_paragraph__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "When hideAfter = 0, It returns a callback function that hides the toast, instead of a promise."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Types);

/***/ }),

/***/ "./components/Home/Promise/styles.jsx":
/*!********************************************!*\
  !*** ./components/Home/Promise/styles.jsx ***!
  \********************************************/
/*! exports provided: default, Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("section", {
  target: "eonr40x0"
})( false ? undefined : {
  name: "b6ug5a",
  styles: "display:flex;justify-content:center;flex-direction:column;flex-wrap:wrap;margin:20px 0px;max-width:90%;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvUHJvbWlzZS9zdHlsZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUU2QiIsImZpbGUiOiIvVXNlcnMvYW5tb2xtYWhhdHB1cmthci9Qcm9qZWN0cy9Db2dvcG9ydC9jb2dvLXRvYXN0L2RvY3MvY29tcG9uZW50cy9Ib21lL1Byb21pc2Uvc3R5bGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLnNlY3Rpb25gXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdG1hcmdpbjogMjBweCAwcHg7XG5cdG1heC13aWR0aDogOTAlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEdyb3VwID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0bWFyZ2luOiAxMHB4O1xuXG5cdCYgPiAqIHtcblx0XHRtYXJnaW46IDVweCAwcHg7XG5cdH1cbmA7XG4iXX0= */"
}));
var Group = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "eonr40x1",
  label: "Group"
})( false ? undefined : {
  name: "qtyekw",
  styles: "display:flex;flex-direction:column;justify-content:center;align-items:center;flex-wrap:wrap;margin:10px;& > *{margin:5px 0px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvUHJvbWlzZS9zdHlsZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVcrQiIsImZpbGUiOiIvVXNlcnMvYW5tb2xtYWhhdHB1cmthci9Qcm9qZWN0cy9Db2dvcG9ydC9jb2dvLXRvYXN0L2RvY3MvY29tcG9uZW50cy9Ib21lL1Byb21pc2Uvc3R5bGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLnNlY3Rpb25gXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdG1hcmdpbjogMjBweCAwcHg7XG5cdG1heC13aWR0aDogOTAlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEdyb3VwID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0bWFyZ2luOiAxMHB4O1xuXG5cdCYgPiAqIHtcblx0XHRtYXJnaW46IDVweCAwcHg7XG5cdH1cbmA7XG4iXX0= */"
});

/***/ }),

/***/ "./components/Home/Types/index.jsx":
/*!*****************************************!*\
  !*** ./components/Home/Types/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cogo-toast */ "cogo-toast");
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cogo_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_util_code_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common-util/code-panel */ "./common-util/code-panel/index.jsx");
/* harmony import */ var _common_util_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common-util/button */ "./common-util/button/index.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Home/Types/styles.jsx");
var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/components/Home/Types/index.jsx";





var types = ['success', 'info', 'loading', 'warn', 'error'];

var showMessage = function showMessage(type) {
  return cogo_toast__WEBPACK_IMPORTED_MODULE_1___default.a[type]("This is a ".concat(type, " message."));
};

var showAll = function showAll() {
  return types.forEach(function (type) {
    return showMessage(type);
  });
};

var codeBlock = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_panel__WEBPACK_IMPORTED_MODULE_2__["default"].Block, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, types.map(function (type) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "code_".concat(type),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "cogoToast.", type, "('This is a ", type, " message');");
}));

var Types = function Types() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_code_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    heading: "5 Built in Types",
    code: codeBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, types.map(function (type) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: type,
      className: type,
      onClick: function onClick() {
        return showMessage(type);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, type);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_util_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "primary",
    onClick: showAll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Show All"));
};

/* harmony default export */ __webpack_exports__["default"] = (Types);

/***/ }),

/***/ "./components/Home/Types/styles.jsx":
/*!******************************************!*\
  !*** ./components/Home/Types/styles.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("section", {
  target: "e1cb8bmi0"
})( false ? undefined : {
  name: "va6wjp",
  styles: "display:flex;justify-content:center;flex-wrap:wrap;margin:20px 0px;& > *{margin:10px 15px;width:120px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9jb21wb25lbnRzL0hvbWUvVHlwZXMvc3R5bGVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFNkIiLCJmaWxlIjoiL1VzZXJzL2FubW9sbWFoYXRwdXJrYXIvUHJvamVjdHMvQ29nb3BvcnQvY29nby10b2FzdC9kb2NzL2NvbXBvbmVudHMvSG9tZS9UeXBlcy9zdHlsZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuc2VjdGlvbmBcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0bWFyZ2luOiAyMHB4IDBweDtcblxuXHQmID4gKiB7XG5cdFx0bWFyZ2luOiAxMHB4IDE1cHg7XG5cdFx0d2lkdGg6IDEyMHB4O1xuXHR9XG5gO1xuIl19 */"
}));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Home_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Banner */ "./components/Home/Banner/index.jsx");
/* harmony import */ var _components_Home_Types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home/Types */ "./components/Home/Types/index.jsx");
/* harmony import */ var _components_Home_PlugPlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home/PlugPlay */ "./components/Home/PlugPlay/index.jsx");
/* harmony import */ var _components_Home_Positions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home/Positions */ "./components/Home/Positions/index.jsx");
/* harmony import */ var _components_Home_Promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home/Promise */ "./components/Home/Promise/index.jsx");
/* harmony import */ var _components_Home_Gzipped__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Home/Gzipped */ "./components/Home/Gzipped/index.jsx");
/* harmony import */ var _components_Home_MadeWithLove__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Home/MadeWithLove */ "./components/Home/MadeWithLove/index.jsx");

var _jsxFileName = "/Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/pages/index.jsx";









var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home_Types__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home_PlugPlay__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home_Positions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home_Promise__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home_Gzipped__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home_MadeWithLove__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StarContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "github-button",
    href: "https://github.com/Cogoport/cogo-toast",
    "data-size": "large",
    "data-show-count": "true",
    "aria-label": "Star Cogoport/cogo-toast on GitHub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Star on Github")));
};

var StarContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1qs9suy0",
  label: "StarContainer"
})( false ? undefined : {
  name: "a4dxoy",
  styles: "position:fixed;bottom:20px;right:20px;a{color:#404040;text-decoration:none;border:1px solid #404040;border-radius:4px;font-size:13px;padding:8px 12px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm1vbG1haGF0cHVya2FyL1Byb2plY3RzL0NvZ29wb3J0L2NvZ28tdG9hc3QvZG9jcy9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNnQyIsImZpbGUiOiIvVXNlcnMvYW5tb2xtYWhhdHB1cmthci9Qcm9qZWN0cy9Db2dvcG9ydC9jb2dvLXRvYXN0L2RvY3MvcGFnZXMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvQmFubmVyJztcbmltcG9ydCBUeXBlcyBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvVHlwZXMnO1xuaW1wb3J0IFBsdWdQbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9QbHVnUGxheSc7XG5pbXBvcnQgUG9zaXRpb25zIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9Qb3NpdGlvbnMnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL1Byb21pc2UnO1xuaW1wb3J0IEd6aXBwZWQgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0d6aXBwZWQnO1xuaW1wb3J0IE1hZGVXaXRoTG92ZSBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvTWFkZVdpdGhMb3ZlJztcblxuY29uc3QgSG9tZSA9ICgpID0+IChcblx0PD5cblx0XHQ8QmFubmVyIC8+XG5cdFx0PFR5cGVzIC8+XG5cdFx0PFBsdWdQbGF5IC8+XG5cdFx0PFBvc2l0aW9ucyAvPlxuXHRcdDxQcm9taXNlIC8+XG5cdFx0PEd6aXBwZWQgLz5cblx0XHQ8TWFkZVdpdGhMb3ZlIC8+XG5cblx0XHQ8U3RhckNvbnRhaW5lcj5cblx0XHRcdDxhXG5cdFx0XHRcdGNsYXNzTmFtZT1cImdpdGh1Yi1idXR0b25cIlxuXHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NvZ29wb3J0L2NvZ28tdG9hc3RcIlxuXHRcdFx0XHRkYXRhLXNpemU9XCJsYXJnZVwiXG5cdFx0XHRcdGRhdGEtc2hvdy1jb3VudD1cInRydWVcIlxuXHRcdFx0XHRhcmlhLWxhYmVsPVwiU3RhciBDb2dvcG9ydC9jb2dvLXRvYXN0IG9uIEdpdEh1YlwiXG5cdFx0XHQ+XG5cdFx0XHRcdFN0YXIgb24gR2l0aHViXG5cdFx0XHQ8L2E+XG5cdFx0PC9TdGFyQ29udGFpbmVyPlxuXHQ8Lz5cbik7XG5cbmNvbnN0IFN0YXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGJvdHRvbTogMjBweDtcblx0cmlnaHQ6IDIwcHg7XG5cblx0YSB7XG5cdFx0Y29sb3I6ICM0MDQwNDA7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICM0MDQwNDA7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRwYWRkaW5nOiA4cHggMTJweDtcblx0fVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */"
});

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./util/colors.js":
/*!************************!*\
  !*** ./util/colors.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  ACCENT_DARK: '#1cd8d2',
  ACCENT_LIGHT: '#93edc7',
  OUTLINE: '#d9d9d9',
  TEXT: '#404040',
  SUCCESS: '#6EC05F',
  INFO: '#1271EC',
  WARN: '#FED953',
  ERROR: '#D60A2E',
  LOADING: '#0088ff'
});

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anmolmahatpurkar/Projects/Cogoport/cogo-toast/docs/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@emotion/styled-base":
/*!***************************************!*\
  !*** external "@emotion/styled-base" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),

/***/ "cogo-toast":
/*!*****************************!*\
  !*** external "cogo-toast" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cogo-toast");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map