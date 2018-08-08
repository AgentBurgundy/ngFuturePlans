(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row align-content-center justify-content-center\">\r\n        <app-nav></app-nav>\r\n    </div>\r\n    <div class=\"row align-content-center justify-content-center pt-5\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FuturePlans';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_groups_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/groups/nav/nav.component */ "./src/app/components/groups/nav/nav.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/how-it-works/how-it-works.component */ "./src/app/pages/how-it-works/how-it-works.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/pagenotfound/pagenotfound.component */ "./src/app/pages/pagenotfound/pagenotfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core




// Components








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_groups_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _pages_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_8__["HowItWorksComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__["PagenotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_3__["appRoutes"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pagenotfound/pagenotfound.component */ "./src/app/pages/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/how-it-works/how-it-works.component */ "./src/app/pages/how-it-works/how-it-works.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
// Components






var appRoutes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'how-it-works', component: _pages_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_3__["HowItWorksComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_1__["PagenotfoundComponent"] }
];


/***/ }),

/***/ "./src/app/components/groups/nav/nav.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/groups/nav/nav.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    padding-top: 0%;\r\n}\r\n\r\n.subtext {\r\n    font-size: 50%;\r\n}\r\n\r\nimg {\r\n    /* height: 100px;\r\n    width: 100px; */\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    }"

/***/ }),

/***/ "./src/app/components/groups/nav/nav.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/groups/nav/nav.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n      <img src=\"https://static.wixstatic.com/media/28ea70_241d2d66115042b19c88e20e147b83b0~mv2.png/v1/fill/w_125,h_115,al_c,usm_0.66_1.00_0.01/28ea70_241d2d66115042b19c88e20e147b83b0~mv2.png\"/>\r\n      <h1>FuturePlans \r\n        <span class=\"subtext\"><br/>Estate Planning. Reimagined.</span>\r\n      </h1>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <ul class=\"nav nav-pills\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">About us</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/how-it-works\" routerLinkActive=\"active\">How it works</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/signup\" routerLinkActive=\"active\">Sign Up</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/groups/nav/nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/groups/nav/nav.component.ts ***!
  \********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/groups/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/groups/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  about works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  contact works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\r\n\tcolor: black;\r\n}\r\n\r\n.card-description {\r\n\tcolor: black;\r\n}"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row mx-auto mt-5 py-5 my-auto wow slideInLeft\">\r\n    <div class=\"col-sm-12 col-md-12\">\r\n        <div class=\"card card-background h-100\" style=\"background-color: white;\">\r\n          <div class=\"card-body\">\r\n            <h1 class=\"font_2 card-title text-center pt-5\">Life is full of surprises</h1>\r\n            <h3 class=\"font_2 card-description text-center\">\r\n                We believe being fully prepared for the unexpected can save you <br/>time, money and stress.\r\n            </h3>\r\n            <h4 class=\"font_7 card-description text-center\">\r\n                FuturePlans is here to give you the tools to secure you and your family’s financial, medical and emotional well-being so you can focus on enjoying life.\r\n            </h4>\r\n            <h4 class=\"font_7 text-center\">(We could put a nice cartoony image here to give this a little bit of pizazz)</h4>\r\n          </div>\r\n        </div>\r\n    </div>    \r\n  </div>\r\n\r\n  <div class=\"row mx-auto wow slideInRight\">\r\n\r\n    <div class=\"card card-background h-100\" style=\"background-color: white;\">\r\n      <div class=\"card-body text-center\">\r\n        <div class=\"container\">\r\n\r\n          <div class=\"col-md-12 mt-5 wow fadeIn\" data-wow-delay=\"0.6s\">\r\n            <h1 class=\"font_2 card-title text-center\">We guide you through the process</h1>\r\n          </div>\r\n\r\n          <div class=\"col-sm-3 col-md-3 mt-5 wow fadeIn\" data-wow-delay=\"1.2s\">\r\n            <h2 class=\"card-title text-center pt-5\">Legal</h2>\r\n            <img class=\"text-center\" width=\"75\" height=\"75\" src=\"https://static.wixstatic.com/media/28ea70_99c8b1901e4d46f98295f5502ce68208~mv2.png/v1/fill/w_120,h_120,al_c,usm_0.66_1.00_0.01/28ea70_99c8b1901e4d46f98295f5502ce68208~mv2.png\"/>\r\n            <h3 class=\"font_7 card-description text-center\">\r\n                We'll ensure you have the proper legal documents in place, and help create the ones you don't.\r\n            </h3>\r\n          </div>\r\n          \r\n          <div class=\"col-sm-3 col-md-3 mt-5 wow fadeIn\" data-wow-delay=\"1.5s\">\r\n            <h2 class=\"card-title text-center pt-5\">Financial</h2>\r\n            <img class=\"text-center\" width=\"75\" height=\"75\" src=\"https://static.wixstatic.com/media/28ea70_a2d3eee1e9424e648ac4ee7143ed255f~mv2.png/v1/fill/w_121,h_121,al_c,usm_0.66_1.00_0.01/28ea70_a2d3eee1e9424e648ac4ee7143ed255f~mv2.png\"/>\r\n            <h3 class=\"font_7 card-description text-center\">\r\n                We'll help you organize assets, line up your beneficiaries and recommend the right insurance for you.\r\n            </h3>\r\n          </div>\r\n      \r\n          <div class=\"col-sm-3 col-md-3 mt-5 wow fadeIn\" data-wow-delay=\"1.8s\">\r\n            <h2 class=\"card-title text-center pt-5\">Medical</h2>\r\n            <img class=\"text-center\" width=\"75\" height=\"75\" src=\"https://static.wixstatic.com/media/28ea70_12acfb039d4d4e2b94f772e25aed43e6~mv2.png/v1/fill/w_121,h_121,al_c,usm_0.66_1.00_0.01/28ea70_12acfb039d4d4e2b94f772e25aed43e6~mv2.png\"/>\r\n            <h3 class=\"font_7 card-description text-center\">\r\n                We'll help you identify, capture and share your medical preferences in a living will\r\n            </h3>\r\n          </div>\r\n      \r\n          <div class=\"col-sm-3 col-md-3 mt-5 wow fadeIn\" data-wow-delay=\"2.1s\">\r\n            <h2 class=\"card-title text-center pt-5\">Legacy</h2>\r\n            <img class=\"text-center\" width=\"75\" height=\"75\" src=\"https://static.wixstatic.com/media/28ea70_e84b099d4cc34b5ba010d4a23a336952~mv2.png/v1/fill/w_120,h_120,al_c,usm_0.66_1.00_0.01/28ea70_e84b099d4cc34b5ba010d4a23a336952~mv2.png\"/>\r\n            <h3 class=\"font_7 card-description text-center\">\r\n                Want to share your family history, digital assets, or funeral preferences? We got you.\r\n            </h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n    \r\n\r\n  <div class=\"row mx-auto mt-5 py-5 my-auto wow slideInLeft\">\r\n    <div class=\"col-sm-12 col-md-12\">\r\n      <div class=\"card card-background h-100\" style=\"background-color: white;\">\r\n        <div class=\"card-body\">\r\n          <h1 class=\"card-title text-center pt-5 wow fadeIn\" data-wow-delay=\"0.6s\">How does it work?</h1>\r\n          \r\n          <div class=\"container\">\r\n            \r\n            <div class=\"row my-4 wow fadeIn\">\r\n              <div class=\"col-md-6 col-sm-6 text-center\">\r\n                <img class=\"\" src=\"https://static.wixstatic.com/media/28ea70_d892125c2f5342268c141e2e532ca77b~mv2.png/v1/fill/w_179,h_175,al_c,usm_0.66_1.00_0.01/28ea70_d892125c2f5342268c141e2e532ca77b~mv2.png\"/>\r\n              </div>\r\n              <div class=\"col-md-6 col-sm-6 text-center\">\r\n                <div class=\"container\">\r\n                  <div class=\"row justify-content-center\">\r\n                    <h1 class=\"font_2\">Plan</h1>\r\n                  </div>\r\n                  <div class=\"row justify-content-center\">\r\n                    <h3 class=\"font_7\">Our guided process and questions build a personalized plan and help you figure out what steps you need to take.</h3>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row my-4 flex-column-reverse flex-md-row wow fadeIn\">              \r\n              <div class=\"col-md-6 col-sm-6 text-center\">\r\n                <div class=\"container\">\r\n                  <div class=\"row justify-content-center\">\r\n                    <h1>Create</h1>\r\n                  </div>\r\n                  <div class=\"row justify-content-center\">\r\n                    <h3 class=\"font_7\">We'll help you create a plan based on your profile and preferences, and generate the documents you need for a complete legal, medical and financial foundation.</h3>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-6 col-sm-6 text-center\">\r\n                <img class=\"\" src=\"https://static.wixstatic.com/media/28ea70_fa74c640ad3a4a8daee4a9faf328fd7b~mv2.png/v1/fill/w_179,h_177,al_c,usm_0.66_1.00_0.01/28ea70_fa74c640ad3a4a8daee4a9faf328fd7b~mv2.png\"/>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row my-4 wow fadeIn\">\r\n              <div class=\"col-md-6 col-sm-6 text-center\">\r\n                <img class=\"\" src=\"https://static.wixstatic.com/media/28ea70_6b8581d7889646ada419a4ce4d161a08~mv2.png/v1/fill/w_186,h_185,al_c,usm_0.66_1.00_0.01/28ea70_6b8581d7889646ada419a4ce4d161a08~mv2.png\"/>\r\n              </div>\r\n              <div class=\"col-md-6 col-sm-6 text-center\">\r\n                <div class=\"container\">\r\n                  <div class=\"row justify-content-center\">\r\n                    <h1>Store</h1>\r\n                  </div>\r\n                  <div class=\"row justify-content-center\">\r\n                    <h3 class=\"font_7\">You can capture and store critical data and documents in one place to ensure your preferences are up to date and securely documented in one place.</h3>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row my-4 flex-column-reverse flex-md-row wow fadeIn\">\r\n              <div class=\"col-md-6 col-sm-6 text-center\">\r\n                <div class=\"container\">\r\n                  <div class=\"row justify-content-center\">\r\n                    <h1>Share</h1>\r\n                  </div>\r\n                  <div class=\"row justify-content-center\">\r\n                    <h3 class=\"font_7\">Identify who in your life \"needs to know\" and you can securely share digitally, or print off data to share offline as needed.</h3>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-6 col-sm-6 text-center\">\r\n                <img class=\"\" src=\"https://static.wixstatic.com/media/28ea70_a35b5c1acc764297976c06ba4b2bb76c~mv2.png/v1/fill/w_186,h_185,al_c,usm_0.66_1.00_0.01/28ea70_a35b5c1acc764297976c06ba4b2bb76c~mv2.png\"/>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>    \r\n  </div>\r\n\r\n  <div class=\"row mx-auto mt-5 py-5 my-auto wow slideInRight\">\r\n    <div class=\"col-sm-12 col-md-12\">\r\n      <div class=\"card card-background h-100\" style=\"background-color: white;\">\r\n        <div class=\"card-body\">\r\n        \r\n          <h1 class=\"card-title text-center pt-5 wow fadeIn\">Who is FuturePlans for?</h1>\r\n        \r\n          <div class=\"container text-center mt-5\">\r\n            \r\n            <div class=\"row align-content-center justify-content-center wow fadeIn\">\r\n              <div class=\"col-md-4 col-sm-4\">\r\n                <div class=\"container\">\r\n                  <div class=\"row\">\r\n                    <h2>\r\n                      Life and estate planning isn't just for those with an \"Estate\"\r\n                    </h2>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-4\">\r\n                <img src=\"https://static.wixstatic.com/media/28ea70_e0b42618ba8e4baa82497accf2466440~mv2.png/v1/fill/w_86,h_85,al_c,usm_0.66_1.00_0.01/28ea70_e0b42618ba8e4baa82497accf2466440~mv2.png\"/>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-4\">\r\n                  <h3>\r\n                    Ever thought an 'estate plan' was only needed if you owned a country house,  acres of land, tennis courts and a ski chalet in Switzerland?  Me too...\r\n                  </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row align-content-center justify-content-center wow fadeIn\">\r\n              <div class=\"col-md-4 col-sm-4\">\r\n                <h2>\r\n                    Whatever stage of life you're in, life and estate planning is a 'must-do'\r\n                </h2>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-4\">\r\n                <img src=\"https://static.wixstatic.com/media/28ea70_e911f9f0655d408caaf4ed1a559e1003~mv2.png/v1/fill/w_89,h_85,al_c,usm_0.66_1.00_0.01/28ea70_e911f9f0655d408caaf4ed1a559e1003~mv2.png\"/>\r\n              </div>  \r\n              <div class=\"col-md-4 col-sm-4\">\r\n                <div class=\"container\">\r\n                  <div class=\"row\">\r\n                    <h3>\r\n                        Turns out I was wrong...if you have kids, intend to travel, are planning retirement or have experienced a major health event (maybe all of the above), life and estate planning can put in place building blocks to protect you and your family in case the unexpected happens.\r\n                    </h3>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    \r\n                  </div>\r\n                </div>\r\n              </div>                          \r\n            </div>\r\n\r\n            <div class=\"row align-content-center justify-content-center wow fadeIn\">\r\n              <div class=\"col-md-4 col-sm-4\">\r\n                <div class=\"container\">\r\n                  <div class=\"row\">\r\n                    <h2>\r\n                      Life and estate planning isn't just for those with an \"Estate\"\r\n                    </h2>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-4\">\r\n                <img src=\"https://static.wixstatic.com/media/28ea70_0cf7b9a3b7bd470296b5c6f16d783bc4~mv2.png/v1/fill/w_86,h_85,al_c,usm_0.66_1.00_0.01/28ea70_0cf7b9a3b7bd470296b5c6f16d783bc4~mv2.png\"/>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-4\">\r\n                  <h3>\r\n                    Ever thought an 'estate plan' was only needed if you owned a country house,  acres of land, tennis courts and a ski chalet in Switzerland?  Me too...\r\n                  </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row mx-auto justify-content-center align-content-center wow fadeIn\">\r\n              <div class=\"col-md-12\">\r\n                <h3 class=\"font_2 text-center\">Data security is critically important</h3>\r\n                <h4 class=\"font_7 text-center\">We protect your data with end to end encryption and bank level security</h4>\r\n              </div>              \r\n            </div>\r\n\r\n            <div class=\"row mx-auto justify-content-center align-content-center\">\r\n              <img class=\"mx-auto\" src=\"https://static.wixstatic.com/media/28ea70_8fa52d1c93d94dc4bd32977c266a1510~mv2.png/v1/fill/w_71,h_72,al_c,usm_0.66_1.00_0.01/28ea70_8fa52d1c93d94dc4bd32977c266a1510~mv2.png\"/>\r\n              <img class=\"mx-auto\" src=\"https://static.wixstatic.com/media/28ea70_5885d16c7e904bf2b911492466cf880d~mv2.jpg/v1/crop/x_47,y_0,w_256,h_256/fill/w_76,h_75,al_c,q_80,usm_0.66_1.00_0.01/28ea70_5885d16c7e904bf2b911492466cf880d~mv2.jpg\"/>\r\n              <img class=\"mx-auto\" src=\"https://static.wixstatic.com/media/28ea70_d3ef2d918561445d9d3e02e093fc7748~mv2.png/v1/crop/x_102,y_0,w_281,h_257/fill/w_80,h_73,al_c,usm_0.66_1.00_0.01/28ea70_d3ef2d918561445d9d3e02e093fc7748~mv2.png\"/>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row \">\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/how-it-works/how-it-works.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/how-it-works/how-it-works.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/how-it-works/how-it-works.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/how-it-works/how-it-works.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  how-it-works works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/how-it-works/how-it-works.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/how-it-works/how-it-works.component.ts ***!
  \**************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__(/*! ./how-it-works.component.html */ "./src/app/pages/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__(/*! ./how-it-works.component.css */ "./src/app/pages/how-it-works/how-it-works.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pagenotfound works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound.component.ts ***!
  \**************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pages/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pages/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  signup works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/pages/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Git\ngFuturePlans\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map