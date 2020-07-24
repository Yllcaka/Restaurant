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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Contact\", function() { return Contact; });\n{/* <div id=\"contact\">\n<h2>Contact Us</h2>\n<form>\n    <div>\n        <label for=\"name\">Name: </label>\n        <input type=\"text\" name=\"name\" id=\"name\">\n    </div>\n\n    <div>\n        <label for=\"lastName\">Last Name: </label>\n        <input type=\"text\" name=\"lastName\" id=\"lastName\">\n    </div>\n\n    <div>\n        <label for=\"email\">E-mail: </label>\n        <input type=\"email\" name=\"email\" id=\"email\">\n    </div>\n\n    <div>\n        <label for=\"phoneNumber\">Phone Number: </label>\n        <input type=\"tel\" name=\"phoneNumber\" id=\"phoneNumber\">\n    </div>\n\n    <button>Contact Us</button>\n\n</form>\n</div> */}\n\nconst Contact = (() => {\n    let contactDivDOM = document.createElement('div');\n    let formDOM = document.createElement('form');\n    let h2DOM = document.createElement('h2');\n    let formElements = ['name', 'lastName', 'email', 'phoneNumber'];\n    let formTypes = ['text', 'text', 'email', 'tel'];\n    let labelContent = ['Name: ', 'Last Name: ', 'E-mail: ', 'Phone Number: '];\n    formElements.forEach((item, index) => {\n        let div = document.createElement('div');\n        let label = document.createElement('label');\n        let input = document.createElement('input');\n        label.setAttribute('for', item);\n        input.setAttribute('name', item);\n        input.setAttribute('id', item);\n        input.setAttribute('type', formTypes[index]);\n        label.textContent = labelContent[index];\n        div.appendChild(label);\n        div.appendChild(input);\n        formDOM.appendChild(div);\n\n        // formElements[index] = \n    });\n    h2DOM.textContent = \"Contact Us\";\n    contactDivDOM.id = 'contact-page';\n    contactDivDOM.appendChild(h2DOM);\n    contactDivDOM.appendChild(formDOM);\n    return { contactDivDOM }\n})();\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n{/* <footer id=\"footer\">\n\n            <div class=\"footer-container\">\n                <div>\n                    <h2>Contact Us</h2>\n                    <ul>\n                        <li>Lorem ipsum dolor sit</li>\n                        <li>Lorem ipsum dolor sit</li>\n                        <li>Lorem ipsum dolor sit</li>\n                        <li>Lorem ipsum dolor sit</li>\n                    </ul>\n\n                </div>\n                <div>\n                    <h2>About Us</h2>\n                    <ul>\n                        <li>Lorem ipsum dolor sit</li>\n                        <li>Lorem ipsum dolor sit</li>\n                        <li>Lorem ipsum dolor sit</li>\n                        <li>Lorem ipsum dolor sit</li>\n                    </ul>\n                </div>\n                <div>\n                    <h2>Contact Us</h2>\n                    <ul>\n                        <li>Lorem ipsum dolor sit</li>\n                        <li>Lorem ipsum dolor sit</li>\n                        <li>Lorem ipsum dolor sit</li>\n                        <li>Lorem ipsum dolor sit</li>\n                    </ul>\n                </div>\n                <div>\n                    <h2>More From Us</h2>\n                    <ul>\n                        <li>Lorem ipsum dolor sit</li>\n                        <li>Lorem ipsum dolor sit</li>\n                        <li>Lorem ipsum dolor sit</li>\n                        <li>Lorem ipsum dolor sit</li>\n                    </ul>\n                </div>\n            </div>\n        </footer> */}\n\nconst Footer = (() => {\n    let footerDOM = document.createElement('footer');\n    let footerContainerDOM = document.createElement('div');\n    let footerContent = ['Contact Us', 'About Us', 'Contact Us', 'More From Us'];\n    footerContent.forEach(item => {\n        let div = document.createElement('div');\n        let h2 = document.createElement('h2');\n        h2.textContent = item;\n        let ul = document.createElement('ul');\n        for (let i = 0; i < 4; i++) {\n            let li = document.createElement('li');\n            li.textContent = 'Lorem ipsum dolor sit';\n            ul.appendChild(li);\n        }\n        div.appendChild(h2);\n        div.appendChild(ul);\n        footerContainerDOM.appendChild(div);\n    });\n    footerContainerDOM.setAttribute('class', 'footer-container');\n    footerDOM.appendChild(footerContainerDOM);\n    footerDOM.setAttribute('id', 'footer');\n    return { footerDOM }\n\n})();\n\n\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n{/* <header>\n            <a href=\"\" class=\"logo\">\n                <img src=\"images/logo.png\" alt=\"Restaurant\">\n            </a>\n            <nav>\n                <ul>\n                    <li>\n                        <a class=\"nav-item active\" href=\"\" id=\"home\">HOME</a>\n                    </li>\n                    <li>\n                        <a class=\"nav-item\" href=\"\" id=\"menu\">MENU</a>\n                    </li>\n                    <li>\n                        <a class=\"nav-item\" href=\"\" id=\"about\">ABOUT</a>\n                    </li>\n                    <li>\n                        <a class=\"nav-item\" href=\"\" id=\"contact\">CONTACT</a>\n                    </li>\n                </ul>\n            </nav>\n        </header> */}\n\n\nconst Header = (() => {\n    let headerDOM = document.createElement('header');\n    let logoDOM = document.createElement('a');\n    let logoImgDOM = document.createElement('img');\n    let navDOM = document.createElement('nav');\n    let ulNavDOM = document.createElement('ul');\n    let navItems = ['home', 'menu', 'contact'];\n    navItems.forEach((navItem, index) => {\n        let liDOM = document.createElement('li');\n        let linkDOM = document.createElement('a');\n        linkDOM.setAttribute('href', \"\");\n        linkDOM.classList.add('nav-item');\n        linkDOM.text = navItem.toUpperCase();\n        linkDOM.setAttribute('id', navItem);\n        liDOM.appendChild(linkDOM);\n        ulNavDOM.appendChild(liDOM);\n        navItems[index] = linkDOM;\n    });\n    logoImgDOM.setAttribute('src', 'images/logo.png');\n    logoDOM.appendChild(logoImgDOM);\n    logoDOM.classList.add('logo');\n    navDOM.appendChild(ulNavDOM);\n\n    headerDOM.appendChild(logoDOM);\n    headerDOM.appendChild(navDOM);\n\n    return { headerDOM, navItems }\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\n{/* <div id=\"home-page\">\n<div class=\"home-page-content\">\n    <div>\n        <h1>\n            Pizza Restaurant\n        </h1>\n        <p>A Restaurant only about Pizza's.</p>\n        <p>Our primary goal is to make the best Pizza’s you ever eaten</p>\n    </div>\n    <img src=\"images/pizza.png\" alt=\"\">\n</div>\n\n\n</div> */}\nconst Home = (() => {\n    let homePageDOM = document.createElement('div');\n    let homePageContentDOM = document.createElement('div');\n    let textDivDOM = document.createElement('div');\n    let h1DOM = document.createElement('h1');\n    let pizzaImgDOM = document.createElement('img');\n    let paragraphContent = [\n        \"A Restaurant only about Pizza's.\",\n        \"Our primary goal is to make the best Pizza’s you ever eaten\"\n    ];\n\n    h1DOM.textContent = 'Pizza Restaurant';\n    textDivDOM.appendChild(h1DOM);\n    paragraphContent.forEach(p => {\n        let paragraph = document.createElement('p');\n        paragraph.textContent = p;\n        textDivDOM.appendChild(paragraph);\n\n    });\n    homePageContentDOM.appendChild(textDivDOM);\n    homePageContentDOM.classList.add('home-page-content');\n\n\n    homePageDOM.appendChild(homePageContentDOM);\n    pizzaImgDOM.setAttribute('src', 'images/pizza.png');\n    homePageContentDOM.appendChild(pizzaImgDOM);\n    homePageDOM.id = 'home-page';\n    return { homePageDOM }\n\n})();\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n// const header = Header();\nvar body = document.querySelector('body');\nvar mainContent = document.createElement('content');\n\nvar itemLists = [_home__WEBPACK_IMPORTED_MODULE_1__[\"Home\"].homePageDOM, _menu__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].menuPageDOM, _contact__WEBPACK_IMPORTED_MODULE_3__[\"Contact\"].contactDivDOM];\n\n_header__WEBPACK_IMPORTED_MODULE_0__[\"Header\"].navItems.forEach((item, index) => {\n    item.addEventListener('click', (e) => {\n        event.preventDefault();\n        mainContent.innerHTML = \"\";\n        mainContent.appendChild(itemLists[index]);\n    });\n});\n\nmainContent.appendChild(_home__WEBPACK_IMPORTED_MODULE_1__[\"Home\"].homePageDOM);\n\nbody.appendChild(_header__WEBPACK_IMPORTED_MODULE_0__[\"Header\"].headerDOM);\nbody.appendChild(mainContent);\nbody.appendChild(_footer__WEBPACK_IMPORTED_MODULE_2__[\"Footer\"].footerDOM);\n// mainContent.appendChild(Contact.contactDivDOM);\n// mainContent.appendChild(Footer.footerDOM);\n// console.log(Header.navItems);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n\nconst Menu = (() => {\n    let menuPageDOM = document.createElement('div'); //id=\"menu-page\"\n    let menuDOM = document.createElement('div'); //<div class=\"menu\">\n    let menuItems = {\n        \"Sicilian Pizza\": [\"Prosciutto\", \"Caciocavallo\", \"Anchovies\", \"Garlic\"],\n        \"Pepperoni Pizza\": [\"Salami\", \"San Marzano tomatoes\", \"Mozzarella cheese\", \"Olives\"],\n        \"Pizza Margherita\": [\"San Marzano Tomatoes\", \"Mozzarella Cheese\", \"Fresh basil\", \"Garlic\"]\n    }\n    for (let menuItem in menuItems) {\n        let menuItemDiv = document.createElement('div'); // class=\"menu-item\"\n        let menuItemPic = document.createElement('div'); // class=\"menu-item-pic\"\n        let itemImg = document.createElement('img');\n        let menuItemContent = document.createElement('div'); //class=\"menu-item-content\"\n        let itemName = document.createElement('h3');\n        let menuItemIngredients = document.createElement('ul');\n\n        itemName.textContent = menuItem;\n        menuItems[menuItem].forEach(ingredient => {\n            let liIngredient = document.createElement('li');\n            liIngredient.textContent = ingredient;\n            menuItemIngredients.appendChild(liIngredient);\n        });\n\n        itemImg.setAttribute('src', 'images/pizza.png');\n        menuItemDiv.classList.add('menu-item');\n        menuItemPic.classList.add('menu-item-pic');\n        menuItemContent.classList.add('menu-item-content');\n\n        menuItemPic.appendChild(itemImg);\n        menuItemDiv.appendChild(menuItemPic);\n        menuItemContent.appendChild(itemName);\n        menuItemContent.appendChild(menuItemIngredients);\n        menuItemDiv.appendChild(menuItemContent);\n        menuDOM.appendChild(menuItemDiv);\n    }\n    menuDOM.classList.add('menu');\n    menuPageDOM.id = 'menu-page';\n    menuPageDOM.appendChild(menuDOM);\n\n    return { menuPageDOM }\n\n})();\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });