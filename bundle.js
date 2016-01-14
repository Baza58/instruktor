/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	(function () {
		var viewer = document.querySelector('.customers-viewer');
		var container = document.querySelector('.customers-box-container');
		var boxes = document.querySelectorAll('.customers-box');
		var containerWidth = viewer.clientWidth;
		var windowWidth = window.innerWidth;
		var nextBtn = document.querySelector('.customers-img-right');
		var prevBtn = document.querySelector('.customers-img-left');
		var transformed = 0;
		var transform = 0;
		var max = 0;

		nextBtn.addEventListener('click', function (e) {
			nextBtn.style.display = 'block';
			prevBtn.style.display = 'block';

			transformed += transform;
			container.style.transform = 'translateX(-' + transformed + 'px)';
			if (transformed > max) {
				nextBtn.style.display = 'none';
			}
		});
		prevBtn.addEventListener('click', function (e) {
			prevBtn.style.display = 'block';
			nextBtn.style.display = 'block';
			transformed -= transform;
			container.style.transform = 'translateX(-' + transformed + 'px)';
			if (transform > transformed) {
				prevBtn.style.display = 'none';
			}
		});

		if (windowWidth > 1000) {
			for (var i = 0; i < boxes.length; i++) {
				var width = i * (containerWidth / 3);
				boxes[i].style.left = width + 'px';
				boxes[i].style.width = '28%';
				transform = boxes[0].clientWidth;
			}
			max = (boxes.length - 5) * boxes[0].clientWidth;
		} else if (windowWidth > 600 && windowWidth < 1000) {
			for (var i = 0; i < boxes.length; i++) {
				var width = i * (windowWidth / 2);
				boxes[i].style.left = width + 'px';
				boxes[i].style.width = '40%';
				transform = viewer.clientWidth / 2;
			}
			max = (boxes.length - 2) * boxes[0].clientWidth;
		} else {
			for (var i = 0; i < boxes.length; i++) {
				var width = i * windowWidth;
				boxes[i].style.left = width + 'px';
				boxes[i].style.width = '100%';
				transform = windowWidth;
			}
			max = (boxes.length - 1) * boxes[0].clientWidth;
		}
	})();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js?strictMath&noIeCompat!./style.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js?strictMath&noIeCompat!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".center {\n  text-align: center;\n}\nhtml,\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0px;\n  padding: 0px;\n}\na {\n  text-decoration: none;\n}\nbody {\n  font-family: 'Open Sans', Arial;\n  overflow-x: hidden;\n}\n.container {\n  width: 100%;\n}\n.content {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.why-section-content,\n.how-content,\n.functionality-content,\n.customers-content,\n.mail-content {\n  padding: 100px 0px;\n}\n@media screen and (max-width: 700px) {\n  .why-section-content,\n  .how-content,\n  .functionality-content,\n  .customers-content,\n  .mail-content {\n    padding: 50px 0px;\n  }\n}\n.customers-content {\n  padding-bottom: 0px;\n}\n@media screen and (max-width: 700px) {\n  .customers-content {\n    padding-top: 0px;\n  }\n}\n.customers-container {\n  overflow: hidden;\n}\n.how-content {\n  position: relative;\n}\n.header-container {\n  height: 120px;\n}\n@media screen and (max-width: 770px) {\n  .header-container {\n    height: auto;\n    padding: 30px 0px;\n  }\n}\n.header-logo,\n.header-contact {\n  line-height: 120px;\n}\n@media screen and (max-width: 770px) {\n  .header-logo,\n  .header-contact {\n    line-height: 30px;\n    text-align: center;\n  }\n}\n@media screen and (max-width: 770px) {\n  .header-logo {\n    margin-bottom: 40px;\n  }\n}\n.header-contact {\n  color: #ff6500;\n  font-size: 19px;\n  font-weight: 600;\n  text-align: right;\n}\n@media screen and (max-width: 770px) {\n  .header-contact {\n    text-align: center;\n  }\n}\n.header-contact img {\n  margin-right: 10px;\n}\n.header-link {\n  margin-left: 30px;\n  padding: 13px 25px;\n  border-radius: 30px;\n  border: 1px solid #e1e1e1;\n  color: #3d4446;\n}\n.header-link:hover {\n  color: initial;\n  text-decoration: none;\n  background-color: #e1e1e1;\n}\n.nav-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 20px 15px;\n}\n@media screen and (max-width: 770px) {\n  .nav-content {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n}\n.nav-link {\n  font-size: 15px;\n  text-transform: uppercase;\n  color: black;\n  margin-right: 10px;\n}\n.nav-link:hover {\n  text-decoration: underline;\n  color: initial;\n}\n.nav-link:last-of-type {\n  margin-right: 0px;\n}\n@media screen and (max-width: 770px) {\n  .nav-link {\n    width: 25%;\n    line-height: 3;\n    margin: 0px;\n  }\n}\n@media screen and (max-width: 660px) {\n  .nav-link {\n    width: 33%;\n  }\n}\n@media screen and (max-width: 550px) {\n  .nav-link {\n    width: 50%;\n  }\n}\n.nav-container {\n  background-color: #f5f5f5;\n}\n.landing-container {\n  background-image: url(" + __webpack_require__(5) + ");\n  background-position: 50% 50%;\n  background-size: cover;\n  color: white;\n  position: relative;\n}\n.landing-content {\n  padding: 140px 0px;\n}\n@media screen and (max-width: 995px) {\n  .landing-text-container {\n    margin-bottom: 70px;\n  }\n}\n.landing-login {\n  width: 90px;\n  padding: 20px 10px;\n  background-color: #ff6600;\n  position: absolute;\n  top: 170px;\n  right: 0px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);\n}\n@media screen and (max-width: 1360px) {\n  .landing-login {\n    top: 20px;\n  }\n}\n.login-img {\n  margin: 0px 0px 10px 18px;\n}\n.login-heading {\n  text-align: center;\n  font-weight: 700;\n  font-size: 12px;\n  text-transform: uppercase;\n  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);\n}\n.landing-heading {\n  font-size: 40px;\n  font-weight: 700;\n  line-height: 1.3;\n  margin-bottom: 30px;\n}\n@media screen and (max-width: 500px) {\n  .landing-heading {\n    font-size: 30px;\n  }\n}\n.landing-text {\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.6;\n  margin-bottom: 50px;\n}\n.landing-button {\n  color: white;\n  text-transform: uppercase;\n  border-radius: 35px;\n  cursor: pointer;\n  font-weight: 600;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);\n  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);\n}\n.landing-button:hover {\n  color: white;\n  text-decoration: none;\n}\n@media screen and (max-width: 450px) {\n  .landing-button {\n    display: block;\n    width: 60%;\n    margin-bottom: 10px;\n    text-align: center;\n  }\n}\n@media screen and (max-width: 370px) {\n  .landing-button {\n    width: 70%;\n  }\n}\n.landing-button-img {\n  margin: -4px 0px 0px 5px;\n}\n.landing-button1 {\n  background-color: #5bc4f1;\n  padding: 15px 30px;\n  margin-right: 20px;\n}\n.landing-button1:hover {\n  background-color: #44bcef;\n}\n.landing-button2 {\n  background-color: #ff6600;\n  padding: 15px 35px;\n}\n.landing-button2:hover {\n  background-color: #e65c00;\n}\n.why-section-container {\n  background-color: #f0f0f0;\n}\n.heading {\n  font-size: 40px;\n  font-weight: 600;\n  text-align: center;\n  color: #3d4446;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  position: relative;\n  line-height: 1.6;\n}\n.heading:after {\n  content: '';\n  width: 40px;\n  height: 2px;\n  position: absolute;\n  bottom: 0px;\n  left: calc(50% - 20px);\n  background-color: #e1e1e1;\n}\n@media screen and (max-width: 995px) {\n  .heading:after {\n    display: none;\n  }\n}\n@media screen and (max-width: 500px) {\n  .heading {\n    font-size: 30px;\n  }\n}\n@media screen and (max-width: 995px) {\n  .heading {\n    text-align: left;\n    padding-bottom: 0px;\n  }\n}\n.functionality-heading {\n  margin-bottom: 70px;\n}\n.customers-heading {\n  margin-bottom: 100px;\n}\n@media screen and (max-width: 700px) {\n  .customers-heading {\n    padding: 50px 0px;\n    margin-bottom: 50px;\n  }\n}\n@media screen and (max-width: 995px) {\n  .customers-heading {\n    margin-left: 10px;\n  }\n}\n.text {\n  font-size: 18px;\n  text-align: center;\n  margin-bottom: 60px;\n  color: #3d4446;\n  line-height: 1.6;\n}\n@media screen and (max-width: 995px) {\n  .text {\n    text-align: left;\n    margin-bottom: 40px;\n  }\n}\n@media screen and (max-width: 995px) {\n  .mail-text {\n    padding: 0px;\n  }\n}\n.number {\n  background-color: white;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #5bc4f1;\n  font-weight: 700;\n  font-size: 16px;\n  border: 1px solid #e1e1e1;\n}\n.number-container {\n  margin-right: 15px;\n}\n@media screen and (max-width: 767px) {\n  .number-container {\n    margin: 0px;\n    padding: 0px;\n  }\n}\n.box {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 20px;\n}\n.box-text {\n  font-size: 15px;\n  color: #3d4446;\n}\n.how-box-heading {\n  font-size: 22px;\n  color: #3d4446;\n  font-weight: 700;\n  margin-bottom: 40px;\n}\n.list {\n  padding: 0px 20px;\n  margin: 0px;\n  color: #5bc4f1;\n}\n.list > li {\n  margin-bottom: 18px;\n  font-size: 15px;\n  line-height: 1.6;\n}\n.list > li:last-child {\n  margin-bottom: 70px;\n}\n.list > li > span {\n  color: #3d4446;\n}\n.btn-center {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.functionality-container {\n  background-color: #f5f5f5;\n}\n.functionality-box {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 80px;\n}\n@media screen and (max-width: 790px) {\n  .functionality-box {\n    margin-bottom: 50px;\n  }\n}\n@media screen and (max-width: 700px) {\n  .functionality-box {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n.box-img-container {\n  min-width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-color: white;\n  border: 1px solid #e1e1e1;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-right: 30px;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n@media screen and (max-width: 995px) {\n  .box-img-container {\n    min-width: 70px;\n    height: 70px;\n  }\n  .box-img-container img {\n    max-width: 70%;\n  }\n}\n@media screen and (max-width: 700px) {\n  .box-img-container {\n    -webkit-align-self: flex-start;\n        -ms-flex-item-align: start;\n            align-self: flex-start;\n    margin-bottom: 10px;\n  }\n}\n.box-heading {\n  font-size: 22px;\n  font-weight: 700;\n  color: #3d4446;\n  margin-bottom: 30px;\n}\n@media screen and (max-width: 995px) {\n  .box-heading {\n    margin-bottom: 15px;\n  }\n}\n.buttons {\n  margin-bottom: 15px;\n}\n.buttons > a {\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n  padding: 13px 0px;\n}\n@media screen and (max-width: 670px) {\n  .buttons {\n    margin-left: 20%;\n    width: 60%;\n  }\n}\n.customers-viewer {\n  overflow: hidden;\n  height: 300px;\n  width: 100%;\n  max-width: 1000px;\n}\n.customers-box4 {\n  padding-left: 10px;\n}\n@media screen and (max-width: 1000px) {\n  .customers-box4 {\n    padding-left: 0px;\n  }\n}\n@media screen and (min-width: 1000px) {\n  .customers-box1 {\n    margin-left: 0px;\n  }\n}\n@media screen and (min-width: 600px) {\n  .customers-box1 {\n    margin-left: 20px;\n  }\n}\n.customers-box-container {\n  margin-bottom: 70px;\n  position: relative;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n@media screen and (max-width: 797px) {\n  .customers-box-container {\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n}\n.customers-box {\n  width: 28%;\n  position: absolute;\n  top: 0px;\n}\n@media screen and (max-width: 700px) {\n  .customers-box {\n    width: 50%;\n  }\n}\n.customers-box:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.customers-box-img {\n  height: 50px;\n  margin-left: calc(50% - 81px);\n  margin-bottom: 60px;\n}\n.customers-box-heading {\n  font-size: 22px;\n  text-align: center;\n  font-weight: 600;\n  margin-bottom: 40px;\n}\n.customers-box-text {\n  text-align: center;\n  font-size: 15px;\n}\n.mail {\n  padding-bottom: 100px;\n}\n@media screen and (max-width: 700px) {\n  .mail {\n    padding: 0px 0px;\n  }\n}\n.customers {\n  border-bottom: 1px solid #e1e1e1;\n  position: relative;\n  padding-bottom: 100px;\n}\n@media screen and (max-width: 700px) {\n  .customers {\n    padding: 0px;\n    border: none;\n  }\n}\n.customers-img {\n  position: absolute;\n  top: calc(45% - 28px);\n  opacity: 0.7;\n  cursor: pointer;\n  z-index: 10;\n}\n.customers-img:hover {\n  opacity: 1;\n}\n.customers-img-right {\n  right: -30px;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n@media screen and (max-width: 995px) {\n  .customers-img-right {\n    right: 10px;\n  }\n}\n.customers-img-left {\n  left: -56px;\n  display: none;\n}\n@media screen and (max-width: 995px) {\n  .customers-img-left {\n    left: 10px;\n  }\n}\n.mail-box-heading {\n  font-size: 22px;\n  color: #3d4446;\n  font-weight: 600;\n  margin-bottom: 35px;\n}\n.mail-box > .list > li:last-child {\n  margin-bottom: 40px;\n}\n.mail-input {\n  height: 50px;\n  width: 325px;\n  border-radius: 30px;\n  border: 1px solid #e1e1e1;\n  padding: 0px 20px;\n}\n.mail-input:focus {\n  outline: none;\n  border-color: #3d4446;\n}\n@media screen and (max-width: 900px) {\n  .mail-input {\n    width: 245px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .mail-input {\n    width: 80%;\n  }\n}\n.mail-submit {\n  height: 50px;\n  width: 130px;\n  margin-left: -100px;\n  border-radius: 30px;\n  color: white;\n  background-color: #ff6600;\n  border: none;\n  padding: 0px;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);\n}\n.mail-submit:hover {\n  background-color: #e65c00;\n}\n@media screen and (max-width: 500px) {\n  .mail-submit {\n    width: 110px;\n  }\n}\n.footer-container {\n  height: 150px;\n  background-color: #eeeeee;\n}\n@media screen and (max-width: 780px) {\n  .footer-container {\n    height: auto;\n  }\n}\n.footer-content > div {\n  line-height: 150px;\n}\n@media screen and (max-width: 780px) {\n  .footer-content > div {\n    line-height: 1;\n    height: initial;\n    margin-bottom: 20px;\n  }\n}\n@media screen and (max-width: 780px) {\n  .footer-content {\n    padding: 30px 0px;\n  }\n}\n.copy {\n  font-size: 11px;\n  line-height: 1 !important;\n  height: 100%;\n}\n.line {\n  line-height: 1 !important;\n  margin-top: 69px;\n  text-align: right;\n}\n@media screen and (max-width: 780px) {\n  .line {\n    margin-top: 0px;\n    text-align: center;\n  }\n}\n.footer-img-link {\n  margin-right: 10px;\n}\n.footer-img-link:last-of-type {\n  margin-right: 0px;\n}\n@media screen and (max-width: 780px) {\n  .footer-nav {\n    text-align: center;\n  }\n}\n.footer-img {\n  opacity: 0.6;\n}\n.footer-img:hover {\n  opacity: 1;\n}\n.footer-img-container {\n  height: 150px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.footer-link {\n  color: #3d4446;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 600;\n}\n.footer-link:hover {\n  color: #3d4446;\n}\n.footer-link:first-child {\n  margin-right: 10px;\n}\n.hand-img-container {\n  position: absolute;\n  right: 50px;\n  bottom: 0px;\n}\n.hand-img-container img {\n  width: 320px;\n}\n@media screen and (max-width: 995px) {\n  .hand-img-container {\n    display: none;\n  }\n}\n.landing-button-container > a {\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n  padding: 13px 0px;\n}\n@media screen and (max-width: 450px) {\n  .landing-button-container {\n    width: 46%;\n    margin-left: 27%;\n  }\n}\n@media screen and (max-width: 995px) {\n  .mail-box-container {\n    padding-bottom: 100px;\n  }\n}\n@media screen and (max-width: 700px) {\n  .mail-box-container {\n    padding-top: 0px;\n    padding-bottom: 30px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .learning {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 700px) {\n  .mail-box {\n    width: 100%;\n    padding: 0px;\n  }\n  .mail-img {\n    display: none;\n  }\n  .mail-img-container {\n    width: 100%;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d581bce84e644e2a752302d969cc5ea3.jpg";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);