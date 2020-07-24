/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n{/* <header>\n            <a href=\"\" class=\"logo\">\n                <img src=\"images/logo.png\" alt=\"Restaurant\">\n            </a>\n            <nav>\n                <ul>\n                    <li>\n                        <a class=\"nav-item active\" href=\"\" id=\"home\">HOME</a>\n                    </li>\n                    <li>\n                        <a class=\"nav-item\" href=\"\" id=\"menu\">MENU</a>\n                    </li>\n                    <li>\n                        <a class=\"nav-item\" href=\"\" id=\"about\">ABOUT</a>\n                    </li>\n                    <li>\n                        <a class=\"nav-item\" href=\"\" id=\"contact\">CONTACT</a>\n                    </li>\n                </ul>\n            </nav>\n        </header> */}\n\n\nconst Header = (() => {\n    let headerDOM = document.createElement('header');\n    let logoDOM = document.createElement('a');\n    let logoImgDOM = document.createElement('img');\n    let navDOM = document.createElement('nav');\n    let ulNavDOM = document.createElement('ul');\n    let navItems = ['home', 'menu', 'about', 'contact'];\n    navItems.forEach(navItem => {\n        let liDOM = document.createElement('li');\n        let linkDOM = document.createElement('a');\n        linkDOM.classList.add('nav-item');\n        linkDOM.text = navItem.toUpperCase();\n        linkDOM.setAttribute('id', navItem);\n        liDOM.appendChild(linkDOM);\n        ulNavDOM.appendChild(liDOM);\n    });\n    logoImgDOM.setAttribute('src', 'images/logo.png');\n    logoDOM.appendChild(logoImgDOM);\n    logoDOM.classList.add('logo');\n    navDOM.appendChild(ulNavDOM);\n\n    headerDOM.appendChild(logoDOM);\n    headerDOM.appendChild(navDOM);\n\n    return { headerDOM }\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n\n// const header = Header();\nvar mainContent = document.querySelector('#content');\nmainContent.appendChild(_header__WEBPACK_IMPORTED_MODULE_0__[\"Header\"].headerDOM);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });