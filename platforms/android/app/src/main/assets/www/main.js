(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Pages/About/About.module": [
		"./src/app/Pages/About/About.module.ts",
		"Pages-About-About-module"
	],
	"./Pages/Blogs/Blogs.module": [
		"./src/app/Pages/Blogs/Blogs.module.ts",
		"Pages-Blogs-Blogs-module"
	],
	"./Pages/Checkout/Checkout.module": [
		"./src/app/Pages/Checkout/Checkout.module.ts",
		"Pages-Checkout-Checkout-module"
	],
	"./Pages/Products/Products.module": [
		"./src/app/Pages/Products/Products.module.ts",
		"Pages-Products-Products-module"
	],
	"./Pages/Session/Session.module": [
		"./src/app/Pages/Session/Session.module.ts"
	],
	"./Pages/UserAccount/UserAccount.module": [
		"./src/app/Pages/UserAccount/UserAccount.module.ts",
		"Pages-UserAccount-UserAccount-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/Auth_1/components/ThankYou/ThankYou.component.html":
/*!********************************************************************!*\
  !*** ./src/app/Auth_1/components/ThankYou/ThankYou.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container bg-white section-gap-lg\">\r\n  <div class=\"container\">\r\n    <div fxLayout='row wrap' fxLayoutAlign=\"center center\">\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"80\" fxFlex.lg=\"70\" fxFlex.xl=\"70\">\r\n        <div class=\"form-img thank-you-image text-center\">\r\n          <h2 class=\"text-inverse\">Thank You</h2>\r\n        </div>\r\n        <div fxLayout='row wrap' fxLayoutAlign=\"center center\">\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"80\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n            <mat-card class=\"text-center p-4 thank-you-card\">\r\n              <h4 class=\"px-3\">For every thing you had done with Embryo</h4>\r\n              <hr class=\"spacer\">\r\n              <p class=\"mb-3\">Spread The Word</p>\r\n             <div class=\"mb-4\"> <embryo-SocialShare></embryo-SocialShare></div>\r\n              <button mat-raised-button class=\"button-lg w-100\" color=\"accent\">Buy Embryo Now</button>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Auth_1/components/ThankYou/ThankYou.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/Auth_1/components/ThankYou/ThankYou.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL1RoYW5rWW91L1RoYW5rWW91LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Auth_1/components/ThankYou/ThankYou.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Auth_1/components/ThankYou/ThankYou.component.ts ***!
  \******************************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
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

var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent() {
    }
    ThankYouComponent.prototype.ngOnInit = function () {
    };
    ThankYouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-ThankYou',
            template: __webpack_require__(/*! ./ThankYou.component.html */ "./src/app/Auth_1/components/ThankYou/ThankYou.component.html"),
            styles: [__webpack_require__(/*! ./ThankYou.component.scss */ "./src/app/Auth_1/components/ThankYou/ThankYou.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThankYouComponent);
    return ThankYouComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/components/dashboard/dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Auth_1/components/dashboard/dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Top navigation -->\r\n<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\r\n\r\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" routerLink=\"/home\" style=\"margin-left:20em;\">\r\n\r\n    <span class=\"dasboard-text\">Dashboard</span>\r\n  </a>\r\n</nav>\r\n\r\n<!-- Sidebar navigation -->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n\r\n    <nav class=\"col-md-2 d-md-block bg-light sidebar\" >\r\n      <div class=\"sidebar-sticky\">\r\n        <ul class=\"nav flex-column\">\r\n          <li class=\"nav-item\" style=\"margin:2em; padding:1.5em;\">\r\n            <a class=\"nav-link active\">\r\n              <i class=\"fas fa-user\"></i>User Profile\r\n            </a>\r\n          </li>\r\n          <!-- Calling SignOut() Api from AuthService -->\r\n          <li class=\"nav-item\" style=\"margin:2em; padding:1.5em;\">\r\n            <a class=\"nav-link\" (click)=\"authService.SignOut()\">\r\n              <i class=\"fas fa-sign-out-alt\"></i>Log out\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n\r\n    <!-- Main content -->\r\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\" style=\"margin-left:20em;\">\r\n      <div class=\"inner-adjust\" style=\"    padding-left: 150px;\">\r\n\r\n        <div class=\"pt-3 pb-2 mb-3 border-bottom\">\r\n          <h1 class=\"h2\">User Profile</h1>\r\n        </div>\r\n        <!-- Show user data when logged in -->\r\n        <div class=\"row\" *ngIf=\"authService.userData as user\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"media\">\r\n              <img class=\"align-self-start mr-5 img-thumbnail rounded-circle\" src=\"{{(user.photoURL) ? user.photoURL : '/assets/dummy-user.png'}}\"\r\n                alt=\"{{user.displayName}}\">\r\n              <div class=\"media-body\">\r\n                <h1>Hello: <strong>{{(user.displayName) ? user.displayName : 'User'}}</strong></h1>\r\n                <p>User ID: <strong>{{user.uid}}</strong></p>\r\n                <p>Email: <strong>{{user.email}}</strong></p>\r\n                <p>Email Verified: <strong>{{user.emailVerified}}</strong></p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </main>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Auth_1/components/dashboard/dashboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/Auth_1/components/dashboard/dashboard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\ndiv {\n  display: block; }\n\n.body {\n  font-weight: 400;\n  font-family: 'Poppins', sans-serif;\n  color: #212529;\n  text-align: left; }\n\n/* * Sidebar */\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  /* Behind the navbar */\n  padding: 48px 0 0;\n  /* Height of navbar */\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n\n.sidebar-sticky {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky; } }\n\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333; }\n\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999; }\n\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase; }\n\n.nav-link {\n  padding: 1.5rem 1rem;\n  border-bottom: 1px solid #dde0e2;\n  cursor: pointer; }\n\n.sidebar .nav-link.active,\n.sidebar a:hover,\na:not([href]):not([tabindex]):focus,\na:not([href]):not([tabindex]):hover {\n  color: #E91E63;\n  background: #efefef; }\n\n/* * Content */\n\n[role=\"main\"] {\n  padding-top: 48px; }\n\n.dasboard-text {\n  color: white;\n  display: inline-block;\n  padding: 0 0 0 14px;\n  font-size: 34px;\n  margin-left: 15px;\n  position: relative;\n  top: -1px; }\n\n/* * Navbar */\n\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem; }\n\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0; }\n\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25); }\n\n.form-control:focus {\n  border-color: #00BCD4;\n  box-shadow: none; }\n\n.form-control {\n  font-size: 14px; }\n\n.bg-dark {\n  background-color: #3F51B5 !important; }\n\n.gap-right {\n  margin-right: 10px; }\n\ni {\n  width: 22px;\n  text-align: center;\n  margin-right: 5px; }\n\n.inner-adjust {\n  padding: 0 20px; }\n\n.action-block {\n  cursor: pointer; }\n\n.action-block .fa-edit:hover {\n  color: #009688; }\n\n.action-block .fa-trash-alt:hover {\n  color: #E91E63; }\n\n.btn-primary.focus,\n.btn-primary:focus {\n  box-shadow: none; }\n\n/* Pagination */\n\nbody pagination-template {\n  padding: 0;\n  margin: 8px 0 0;\n  float: left;\n  width: 100%;\n  text-align: right; }\n\nbody .ngx-pagination li:last-child {\n  margin: 0; }\n\nbody .ngx-pagination .current {\n  background: #055AF9; }\n\n.ngx-pagination a:hover,\n.ngx-pagination button:hover {\n  text-decoration: none; }\n\n/* Error */\n\n.error {\n  color: red;\n  margin-top: 5px; }\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red; }\n\n.btn-success.disabled,\n.btn-success:disabled {\n  cursor: not-allowed; }\n\n/* Nav */\n\nbody .navbar {\n  padding: 6px 0 !important; }\n\nbody .navbar-brand {\n  background: none; }\n\n.brand-logo {\n  max-width: 85%; }\n\n.pt-3,\n.py-3 {\n  padding-top: 2.4rem !important; }\n\n.sidebar-sticky {\n  padding-top: 1.2rem !important; }\n\n/* Form */\n\nlabel {\n  font-weight: 500; }\n\n.form-control {\n  padding: 1.375rem .75rem; }\n\n/* Misc */\n\n.no-data img {\n  max-width: 420px;\n  margin: 20px auto 0; }\n\n.nodata-msg {\n  margin: 25px 0 15px;\n  font-size: 28px;\n  color: #a9a6c5;\n  font-weight: 300;\n  letter-spacing: .2px; }\n\n[role=\"main\"] {\n  padding-top: 65px; }\n\n.preloader {\n  min-height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -15px; }\n\n.custom-text {\n  font-size: 15px;\n  color: #5f5f5f;\n  letter-spacing: .2px; }\n\n.navbar-dark .navbar-brand {\n  margin-left: 6px; }\n\n.custom-text strong {\n  color: #3a3a3a; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1.4rem !important; }\n\n.custom-fa-plus {\n  margin: 0;\n  width: auto; }\n\n.user-image {\n  width: 42px;\n  height: 42px;\n  display: inline-block;\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 7px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 0 0; }\n\nbody .table thead th {\n  background: #f3f5ff; }\n\n.pricing-header {\n  padding-bottom: 50px; }\n\n.userImage {\n  max-width: 125px; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: white; }\n\n.card {\n  border: none; }\n\n.list-group-item {\n  padding: 0 1.25rem 15px;\n  border: none; }\n\n.fa-sign-out-alt {\n  position: relative;\n  top: 1px; }\n\n.logOutBtn {\n  cursor: pointer; }\n\n.no-access {\n  text-align: center;\n  font-size: 26px;\n  padding: 70px 0; }\n\n.rounded-circle {\n  max-width: 150px; }\n\n/* Responsive */\n\n@media (max-width: 767px) {\n  .sidebar {\n    position: static;\n    padding: 40px 0 10px;\n    height: auto; }\n  [role=\"main\"] {\n    padding-top: 0; }\n  .inner-adjust {\n    padding: 0; }\n  ul.nav.flex-column {\n    flex-direction: inherit !important; }\n  .pt-3,\n  .py-3 {\n    padding-top: 1.5rem !important; }\n  .brand-logo {\n    max-width: 175px;\n    margin: 0 auto;\n    display: block; }\n  .dasboard-text {\n    display: none !important; }\n  .sidebar-sticky {\n    padding-top: 1.9rem !important;\n    height: auto; }\n  .sidebar-sticky .nav li {\n    width: 50%;\n    text-align: center;\n    border-right: 1px solid #c7ceff; }\n  .sidebar-sticky .nav li:last-child {\n    border: none; }\n  .no-data img {\n    max-width: 100%;\n    margin-top: 0; }\n  .nodata-msg,\n  .h2,\n  h2 {\n    font-size: 1.4rem; }\n  .custom-text {\n    font-size: 14px; }\n  .navbar-nav {\n    float: right;\n    width: 50%;\n    text-align: right;\n    display: inherit;\n    margin: 0; }\n  .navbar-dark .navbar-brand {\n    margin: 0;\n    width: 50%;\n    float: left;\n    display: inherit; }\n  .sidebar {\n    padding: 40px 0 0; }\n  footer br {\n    display: none; }\n  .media {\n    display: block; }\n  .rounded-circle {\n    max-width: 150px;\n    margin: 0 auto 20px !important;\n    display: block; }\n  b,\n  strong {\n    display: block; }\n  .displayTable {\n    background: white; }\n  .authBlock {\n    box-shadow: none; }\n  .px-logo {\n    display: none; } }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-weight: 400;\n  width: 100%;\n  height: 100%;\n  font-family: 'Poppins', sans-serif; }\n\n.feather {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom; }\n\n.media-body h1 {\n  font-weight: 300;\n  margin-bottom: 20px; }\n\n.media-body h1 strong {\n  font-weight: 600; }\n\n.media-body p {\n  margin-bottom: 10px;\n  font-weight: 300; }\n\n.media-body p strong {\n  margin-bottom: 10px;\n  font-weight: 600; }\n\n.px-logo {\n  display: block;\n  clear: both;\n  margin: 0 auto 20px;\n  width: 220px; }\n\n.px-logo a img {\n  width: 100%; }\n\n.displayTable {\n  display: table;\n  width: 100%;\n  height: 100%;\n  background: #3F51B5; }\n\n.displayTableCell {\n  display: table-cell;\n  vertical-align: middle;\n  width: 100%;\n  height: 100%; }\n\nh3 {\n  text-align: center;\n  font-size: 22px;\n  margin: 0 0 20px; }\n\n.authBlock {\n  margin: 0 auto;\n  max-width: 400px;\n  background: white;\n  padding: 30px 40px 10px;\n  overflow: hidden;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.04); }\n\nlabel {\n  display: block;\n  font-size: 13px;\n  padding-bottom: 5px;\n  font-weight: 600; }\n\n.halfWidth {\n  width: 48.5%; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQXV0aF8xL2NvbXBvbmVudHMvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcRGhpbmFrYXIgUmVkZHlcXERlc2t0b3BcXFNob3BwaW5nIE1ham9yIFByb2plY3Qvc3JjXFxhcHBcXEF1dGhfMVxcY29tcG9uZW50c1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBRUUsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxjQUFjO0VBQ1osZ0JBQWdCLEVBQUE7O0FBRXBCLGNBQUE7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWTtFQUNaLHNCQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLHFCQUFBO0VBQ0EsNkNBQTRDLEVBQUE7O0FBRzlDO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHd0M7RUFDeEQ7SUFDRSx3QkFBd0I7SUFDeEIsZ0JBQWdCLEVBQUEsRUFDakI7O0FBR0g7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTs7QUFHakI7Ozs7RUFJRSxjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBR3JCLGNBQUE7O0FDVEE7RURXRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTs7QUFHWCxhQUFBOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLDBDQUF5QztFQUN6QyxzQ0FBcUMsRUFBQTs7QUFHdkM7RUFDRSx5QkFBeUI7RUFDekIsK0NBQThDLEVBQUE7O0FBR2hEO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7O0VBRUUsZ0JBQWdCLEVBQUE7O0FBR2xCLGVBQUE7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCOztFQUVFLHFCQUFxQixFQUFBOztBQUd2QixVQUFBOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7O0VBRUUsbUJBQW1CLEVBQUE7O0FBR3JCLFFBQUE7O0FBQ0E7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOztFQUVFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDhCQUE4QixFQUFBOztBQUdoQyxTQUFBOztBQUNBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCLFNBQUE7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBOztBQ3ZDdEI7RUQyQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjs7RUFFRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUE2QixFQUFBOztBQUcvQjtFQUNFLFlBQ0YsRUFBQTs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUNGLEVBQUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUSxFQUFBOztBQUdWO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQixlQUFBOztBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFlBQVksRUFBQTtFQzNEZDtJRCtERSxjQUFjLEVBQUE7RUFHaEI7SUFDRSxVQUFVLEVBQUE7RUFHWjtJQUNFLGtDQUFrQyxFQUFBO0VBR3BDOztJQUVFLDhCQUE4QixFQUFBO0VBR2hDO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxjQUFjLEVBQUE7RUFHaEI7SUFDRSx3QkFBd0IsRUFBQTtFQUcxQjtJQUNFLDhCQUE4QjtJQUM5QixZQUFZLEVBQUE7RUFHZDtJQUNFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsK0JBQStCLEVBQUE7RUFHakM7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLGVBQWU7SUFDZixhQUFhLEVBQUE7RUFHZjs7O0lBR0UsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxlQUFlLEVBQUE7RUFHakI7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsU0FBUyxFQUFBO0VBR1g7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UsYUFBYSxFQUFBO0VBR2Y7SUFDRSxjQUFjLEVBQUE7RUFHaEI7SUFDRSxnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLGNBQWMsRUFBQTtFQUdoQjs7SUFFRSxjQUFjLEVBQUE7RUFHaEI7SUFDRSxpQkFDRixFQUFBO0VBRUE7SUFDRSxnQkFDRixFQUFBO0VBRUE7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFFSDs7Ozs7O0VBTUUsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBR0Usc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUVoQix5Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9BdXRoXzEvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmRpdiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJvZHlcclxue1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLyogKiBTaWRlYmFyICovXHJcbi5zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xyXG4gIHBhZGRpbmc6IDQ4cHggMCAwO1xyXG4gIC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cclxuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4xKTtcclxufVxyXG5cclxuLnNpZGViYXItc3RpY2t5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xyXG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuQHN1cHBvcnRzICgocG9zaXRpb246LXdlYmtpdC1zdGlja3kpIG9yIChwb3NpdGlvbjpzdGlja3kpKSB7XHJcbiAgLnNpZGViYXItc3RpY2t5IHtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmsge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGUwZTI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlLFxyXG4uc2lkZWJhciBhOmhvdmVyLFxyXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpmb2N1cyxcclxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6aG92ZXIge1xyXG4gIGNvbG9yOiAjRTkxRTYzO1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi8qICogQ29udGVudCAqL1xyXG5bcm9sZT1cIm1haW5cIl0ge1xyXG4gIHBhZGRpbmctdG9wOiA0OHB4O1xyXG59XHJcblxyXG4uZGFzYm9hcmQtdGV4dCB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAwIDAgMTRweDtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTFweDtcclxufVxyXG5cclxuLyogKiBOYXZiYXIgKi9cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgcGFkZGluZy10b3A6IC43NXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xyXG59XHJcblxyXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWRhcmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICMwMEJDRDQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYmctZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ2FwLXJpZ2h0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmkge1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmlubmVyLWFkanVzdCB7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJsb2NrIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hY3Rpb24tYmxvY2sgLmZhLWVkaXQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDA5Njg4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJsb2NrIC5mYS10cmFzaC1hbHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjRTkxRTYzO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkuZm9jdXMsXHJcbi5idG4tcHJpbWFyeTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLyogUGFnaW5hdGlvbiAqL1xyXG5ib2R5IHBhZ2luYXRpb24tdGVtcGxhdGUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiA4cHggMCAwO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5ib2R5IC5uZ3gtcGFnaW5hdGlvbiBsaTpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHkgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjMDU1QUY5O1xyXG59XHJcblxyXG4ubmd4LXBhZ2luYXRpb24gYTpob3ZlcixcclxuLm5neC1wYWdpbmF0aW9uIGJ1dHRvbjpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBFcnJvciAqL1xyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzLmRpc2FibGVkLFxyXG4uYnRuLXN1Y2Nlc3M6ZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi8qIE5hdiAqL1xyXG5ib2R5IC5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDZweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJvZHkgLm5hdmJhci1icmFuZCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmJyYW5kLWxvZ28ge1xyXG4gIG1heC13aWR0aDogODUlO1xyXG59XHJcblxyXG4ucHQtMyxcclxuLnB5LTMge1xyXG4gIHBhZGRpbmctdG9wOiAyLjRyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGViYXItc3RpY2t5IHtcclxuICBwYWRkaW5nLXRvcDogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEZvcm0gKi9cclxubGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmc6IDEuMzc1cmVtIC43NXJlbTtcclxufVxyXG5cclxuLyogTWlzYyAqL1xyXG4ubm8tZGF0YSBpbWcge1xyXG4gIG1heC13aWR0aDogNDIwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcclxufVxyXG5cclxuLm5vZGF0YS1tc2cge1xyXG4gIG1hcmdpbjogMjVweCAwIDE1cHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiAjYTlhNmM1O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XHJcbn1cclxuXHJcbltyb2xlPVwibWFpblwiXSB7XHJcbiAgcGFkZGluZy10b3A6IDY1cHg7XHJcbn1cclxuXHJcbi5wcmVsb2FkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuLmN1c3RvbS10ZXh0IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICM1ZjVmNWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLWJyYW5kIHtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXRleHQgc3Ryb25nIHtcclxuICBjb2xvcjogIzNhM2EzYTtcclxufVxyXG5cclxuLm1iLTMsXHJcbi5teS0zIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjRyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1mYS1wbHVzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi51c2VyLWltYWdlIHtcclxuICB3aWR0aDogNDJweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbn1cclxuXHJcbmJvZHkgLnRhYmxlIHRoZWFkIHRoIHtcclxuICBiYWNrZ3JvdW5kOiAjZjNmNWZmO1xyXG59XHJcblxyXG4ucHJpY2luZy1oZWFkZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4udXNlckltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEyNXB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lXHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDAgMS4yNXJlbSAxNXB4O1xyXG4gIGJvcmRlcjogbm9uZVxyXG59XHJcblxyXG4uZmEtc2lnbi1vdXQtYWx0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5sb2dPdXRCdG4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5vLWFjY2VzcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBwYWRkaW5nOiA3MHB4IDA7XHJcbn1cclxuXHJcbi5yb3VuZGVkLWNpcmNsZSB7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSAqL1xyXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgLnNpZGViYXIge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIHBhZGRpbmc6IDQwcHggMCAxMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgW3JvbGU9XCJtYWluXCJdIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLmlubmVyLWFkanVzdCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgdWwubmF2LmZsZXgtY29sdW1uIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucHQtMyxcclxuICAucHktMyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnJhbmQtbG9nbyB7XHJcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5kYXNib2FyZC10ZXh0IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLXN0aWNreSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS45cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci1zdGlja3kgLm5hdiBsaSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M3Y2VmZjtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLXN0aWNreSAubmF2IGxpOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5vLWRhdGEgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAubm9kYXRhLW1zZyxcclxuICAuaDIsXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1uYXYge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItZGFyayAubmF2YmFyLWJyYW5kIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDAgMDtcclxuICB9XHJcblxyXG4gIGZvb3RlciBiciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1lZGlhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnJvdW5kZWQtY2lyY2xlIHtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIGIsXHJcbiAgc3Ryb25nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmRpc3BsYXlUYWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxyXG4gIH1cclxuXHJcbiAgLmF1dGhCbG9jayB7XHJcbiAgICBib3gtc2hhZG93OiBub25lXHJcbiAgfVxyXG5cclxuICAucHgtbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbioge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZmVhdGhlciB7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxufVxyXG4ubWVkaWEtYm9keSBoMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubWVkaWEtYm9keSBoMSBzdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5tZWRpYS1ib2R5IHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLm1lZGlhLWJvZHkgcCBzdHJvbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucHgtbG9nbyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcclxuICB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5weC1sb2dvIGEgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGlzcGxheVRhYmxlIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzNGNTFCNTtcclxufVxyXG5cclxuLmRpc3BsYXlUYWJsZUNlbGwge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbjogMCAwIDIwcHg7XHJcbn1cclxuXHJcbi5hdXRoQmxvY2sge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMzBweCA0MHB4IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDAsIDAsIDAsIC4wNCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgLjA0KTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmhhbGZXaWR0aCB7XHJcbiAgd2lkdGg6IDQ4LjUlO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiIsIioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG5kaXYge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uYm9keSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi8qICogU2lkZWJhciAqL1xuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIC8qIEJlaGluZCB0aGUgbmF2YmFyICovXG4gIHBhZGRpbmc6IDQ4cHggMCAwO1xuICAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuXG4uc2lkZWJhci1zdGlja3kge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvOyB9XG5cbkBzdXBwb3J0cyAocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246IHN0aWNreSkge1xuICAuc2lkZWJhci1zdGlja3kge1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICBwb3NpdGlvbjogc3RpY2t5OyB9IH1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7IH1cblxuLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbG9yOiAjOTk5OyB9XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4ubmF2LWxpbmsge1xuICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGUwZTI7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlLFxuLnNpZGViYXIgYTpob3ZlcixcbmE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pOmZvY3VzLFxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6aG92ZXIge1xuICBjb2xvcjogI0U5MUU2MztcbiAgYmFja2dyb3VuZDogI2VmZWZlZjsgfVxuXG4vKiAqIENvbnRlbnQgKi9cbltyb2xlPVwibWFpblwiXSB7XG4gIHBhZGRpbmctdG9wOiA0OHB4OyB9XG5cbi5kYXNib2FyZC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMCAwIDE0cHg7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4OyB9XG5cbi8qICogTmF2YmFyICovXG4ubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZy10b3A6IC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC43NXJlbTsgfVxuXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItcmFkaXVzOiAwOyB9XG5cbi5mb3JtLWNvbnRyb2wtZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XG5cbi5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMwMEJDRDQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLmZvcm0tY29udHJvbCB7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4uYmctZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjUgIWltcG9ydGFudDsgfVxuXG4uZ2FwLXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG5cbmkge1xuICB3aWR0aDogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxuXG4uaW5uZXItYWRqdXN0IHtcbiAgcGFkZGluZzogMCAyMHB4OyB9XG5cbi5hY3Rpb24tYmxvY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmFjdGlvbi1ibG9jayAuZmEtZWRpdDpob3ZlciB7XG4gIGNvbG9yOiAjMDA5Njg4OyB9XG5cbi5hY3Rpb24tYmxvY2sgLmZhLXRyYXNoLWFsdDpob3ZlciB7XG4gIGNvbG9yOiAjRTkxRTYzOyB9XG5cbi5idG4tcHJpbWFyeS5mb2N1cyxcbi5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLyogUGFnaW5hdGlvbiAqL1xuYm9keSBwYWdpbmF0aW9uLXRlbXBsYXRlIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiA4cHggMCAwO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbmJvZHkgLm5neC1wYWdpbmF0aW9uIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDA7IH1cblxuYm9keSAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kOiAjMDU1QUY5OyB9XG5cbi5uZ3gtcGFnaW5hdGlvbiBhOmhvdmVyLFxuLm5neC1wYWdpbmF0aW9uIGJ1dHRvbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4vKiBFcnJvciAqL1xuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogNXB4OyB9XG5cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfVxuXG4uYnRuLXN1Y2Nlc3MuZGlzYWJsZWQsXG4uYnRuLXN1Y2Nlc3M6ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG5cbi8qIE5hdiAqL1xuYm9keSAubmF2YmFyIHtcbiAgcGFkZGluZzogNnB4IDAgIWltcG9ydGFudDsgfVxuXG5ib2R5IC5uYXZiYXItYnJhbmQge1xuICBiYWNrZ3JvdW5kOiBub25lOyB9XG5cbi5icmFuZC1sb2dvIHtcbiAgbWF4LXdpZHRoOiA4NSU7IH1cblxuLnB0LTMsXG4ucHktMyB7XG4gIHBhZGRpbmctdG9wOiAyLjRyZW0gIWltcG9ydGFudDsgfVxuXG4uc2lkZWJhci1zdGlja3kge1xuICBwYWRkaW5nLXRvcDogMS4ycmVtICFpbXBvcnRhbnQ7IH1cblxuLyogRm9ybSAqL1xubGFiZWwge1xuICBmb250LXdlaWdodDogNTAwOyB9XG5cbi5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nOiAxLjM3NXJlbSAuNzVyZW07IH1cblxuLyogTWlzYyAqL1xuLm5vLWRhdGEgaW1nIHtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDsgfVxuXG4ubm9kYXRhLW1zZyB7XG4gIG1hcmdpbjogMjVweCAwIDE1cHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6ICNhOWE2YzU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAuMnB4OyB9XG5cbltyb2xlPVwibWFpblwiXSB7XG4gIHBhZGRpbmctdG9wOiA2NXB4OyB9XG5cbi5wcmVsb2FkZXIge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0xNXB4OyB9XG5cbi5jdXN0b20tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM1ZjVmNWY7XG4gIGxldHRlci1zcGFjaW5nOiAuMnB4OyB9XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLWJyYW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDsgfVxuXG4uY3VzdG9tLXRleHQgc3Ryb25nIHtcbiAgY29sb3I6ICMzYTNhM2E7IH1cblxuLm1iLTMsXG4ubXktMyB7XG4gIG1hcmdpbi1ib3R0b206IDEuNHJlbSAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20tZmEtcGx1cyB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IGF1dG87IH1cblxuLnVzZXItaW1hZ2Uge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfVxuXG5ib2R5IC50YWJsZSB0aGVhZCB0aCB7XG4gIGJhY2tncm91bmQ6ICNmM2Y1ZmY7IH1cblxuLnByaWNpbmctaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7IH1cblxuLnVzZXJJbWFnZSB7XG4gIG1heC13aWR0aDogMTI1cHg7IH1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgcGFkZGluZzogMCAxLjI1cmVtIDE1cHg7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG4uZmEtc2lnbi1vdXQtYWx0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDsgfVxuXG4ubG9nT3V0QnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5uby1hY2Nlc3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgcGFkZGluZzogNzBweCAwOyB9XG5cbi5yb3VuZGVkLWNpcmNsZSB7XG4gIG1heC13aWR0aDogMTUwcHg7IH1cblxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHBhZGRpbmc6IDQwcHggMCAxMHB4O1xuICAgIGhlaWdodDogYXV0bzsgfVxuICBbcm9sZT1cIm1haW5cIl0ge1xuICAgIHBhZGRpbmctdG9wOiAwOyB9XG4gIC5pbm5lci1hZGp1c3Qge1xuICAgIHBhZGRpbmc6IDA7IH1cbiAgdWwubmF2LmZsZXgtY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50OyB9XG4gIC5wdC0zLFxuICAucHktMyB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5icmFuZC1sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC5kYXNib2FyZC10ZXh0IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLnNpZGViYXItc3RpY2t5IHtcbiAgICBwYWRkaW5nLXRvcDogMS45cmVtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvOyB9XG4gIC5zaWRlYmFyLXN0aWNreSAubmF2IGxpIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzdjZWZmOyB9XG4gIC5zaWRlYmFyLXN0aWNreSAubmF2IGxpOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlcjogbm9uZTsgfVxuICAubm8tZGF0YSBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwOyB9XG4gIC5ub2RhdGEtbXNnLFxuICAuaDIsXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTsgfVxuICAuY3VzdG9tLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxuICAubmF2YmFyLW5hdiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7IH1cbiAgLm5hdmJhci1kYXJrIC5uYXZiYXItYnJhbmQge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGluaGVyaXQ7IH1cbiAgLnNpZGViYXIge1xuICAgIHBhZGRpbmc6IDQwcHggMCAwOyB9XG4gIGZvb3RlciBiciB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAubWVkaWEge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC5yb3VuZGVkLWNpcmNsZSB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgYixcbiAgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAuZGlzcGxheVRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxuICAuYXV0aEJsb2NrIHtcbiAgICBib3gtc2hhZG93OiBub25lOyB9XG4gIC5weC1sb2dvIHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjsgfVxuXG4uZmVhdGhlciB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTsgfVxuXG4ubWVkaWEtYm9keSBoMSB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLm1lZGlhLWJvZHkgaDEgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4ubWVkaWEtYm9keSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxuXG4ubWVkaWEtYm9keSBwIHN0cm9uZyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cblxuLnB4LWxvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gIHdpZHRoOiAyMjBweDsgfVxuXG4ucHgtbG9nbyBhIGltZyB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5kaXNwbGF5VGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzNGNTFCNTsgfVxuXG4uZGlzcGxheVRhYmxlQ2VsbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAwIDAgMjBweDsgfVxuXG4uYXV0aEJsb2NrIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAzMHB4IDQwcHggMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNCk7IH1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNjAwOyB9XG5cbi5oYWxmV2lkdGgge1xuICB3aWR0aDogNDguNSU7IH1cblxuLmxlZnQge1xuICBmbG9hdDogbGVmdDsgfVxuXG4ucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Auth_1/components/dashboard/dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Auth_1/components/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router, ngZone) {
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/Auth_1/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/Auth_1/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/components/forgot-password/forgot-password.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/Auth_1/components/forgot-password/forgot-password.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\r\n  <div class=\"displayTableCell\" style=\"padding-top: 79px;\r\n  padding-bottom: 62px;\">\r\n    <div class=\"authBlock\">\r\n      <h3>Reset Password</h3>\r\n\r\n      <p class=\"text-center\">Please enter your email address to request a password reset.</p>\r\n\r\n      <div class=\"formGroup\">\r\n        <input type=\"email\" class=\"formControl\" placeholder=\"Email Address\" #passwordResetEmail required>\r\n      </div>\r\n\r\n      <!-- Calling ForgotPassword from AuthService Api -->\r\n      <div class=\"formGroup\">\r\n        <input type=\"submit\" class=\"btn btnPrimary\" value=\"Reset Password\" (click)=\"authService.ForgotPassword(passwordResetEmail.value)\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"redirectToLogin\">\r\n      <span>Go back to ? <span class=\"redirect\" routerLink=\"['sign-in']\">Log In</span></span>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Auth_1/components/forgot-password/forgot-password.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/Auth_1/components/forgot-password/forgot-password.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".displayTable {\n  display: table;\n  width: 100%;\n  height: 100%;\n  background: #3F51B5; }\n\n.displayTableCell {\n  display: table-cell;\n  vertical-align: middle;\n  width: 100%;\n  height: 100%; }\n\n.authBlock {\n  margin: 0 auto;\n  max-width: 400px;\n  background: white;\n  padding: 30px 40px 10px;\n  overflow: hidden;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.04); }\n\n.formGroup {\n  margin-bottom: 20px;\n  float: left;\n  width: 100%; }\n\n.formControl {\n  width: 100%;\n  display: block;\n  padding: 15px 15px 14px;\n  border: 2px solid #e7e7e7;\n  outline: none;\n  font-size: 15px;\n  color: #444444;\n  background: #fcfcfc; }\n\n.formControl:focus {\n  border: 2px solid #d3d3d6; }\n\n.displayTable .btn {\n  width: 100%;\n  border: none;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 15px 0;\n  background: #15CD72;\n  color: #ffffff;\n  cursor: pointer;\n  outline: none; }\n\ndisplayTable .btn:hover {\n  opacity: .88; }\n\n.displayTable .btnSecondary {\n  background: #EEEEEE;\n  color: #404040; }\n\n.redirectToLogin {\n  padding: 15px 0 0;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 400;\n  display: block;\n  color: rgba(255, 255, 255, 0.6); }\n\n.redirectToLogin .redirect {\n  cursor: pointer;\n  color: #ffffff;\n  text-decoration: underline; }\n\n.btn-primary.focus,\n.btn-primary:focus {\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQXV0aF8xL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL0M6XFxVc2Vyc1xcRGhpbmFrYXIgUmVkZHlcXERlc2t0b3BcXFNob3BwaW5nIE1ham9yIFByb2plY3Qvc3JjXFxhcHBcXEF1dGhfMVxcY29tcG9uZW50c1xcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBRWhCLHlDQUF3QyxFQUFBOztBQUUxQztFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHlCQUNGLEVBQUE7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCwrQkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLDBCQUEwQixFQUFBOztBQUU1Qjs7RUFFRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheVRhYmxlIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzNGNTFCNTtcclxufVxyXG5cclxuLmRpc3BsYXlUYWJsZUNlbGwge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmF1dGhCbG9jayB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzMHB4IDQwcHggMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgLjA0KTtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDAgcmdiYSgwLCAwLCAwLCAuMDQpO1xyXG59XHJcbi5mb3JtR3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtQ29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4IDE0cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U3ZTdlNztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzQ0NDQ0NDtcclxuICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xyXG59XHJcblxyXG4uZm9ybUNvbnRyb2w6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkM2QzZDZcclxufVxyXG4uZGlzcGxheVRhYmxlIC5idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgYmFja2dyb3VuZDogIzE1Q0Q3MjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5kaXNwbGF5VGFibGUgLmJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eTogLjg4O1xyXG59XHJcblxyXG4uZGlzcGxheVRhYmxlIC5idG5TZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQ6ICNFRUVFRUU7XHJcbiAgY29sb3I6ICM0MDQwNDA7XHJcbn1cclxuLnJlZGlyZWN0VG9Mb2dpbiB7XHJcbiAgcGFkZGluZzogMTVweCAwIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcclxufVxyXG4ucmVkaXJlY3RUb0xvZ2luIC5yZWRpcmVjdCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5idG4tcHJpbWFyeS5mb2N1cyxcclxuLmJ0bi1wcmltYXJ5OmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Auth_1/components/forgot-password/forgot-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Auth_1/components/forgot-password/forgot-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService) {
        this.authService = authService;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/Auth_1/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/Auth_1/components/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/components/sign-in/sign-in.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-in/sign-in.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\r\n  <div class=\"displayTableCell\" style=\"\r\n  border-top-width: 45px;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n\">\r\n\r\n    <div class=\"authBlock\">\r\n      <h3>Sign In</h3>\r\n      <div class=\"formGroup\">\r\n        <input type=\"text\" class=\"formControl\" placeholder=\"Username\" #userName required>\r\n      </div>\r\n\r\n      <div class=\"formGroup\">\r\n        <input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPassword required>\r\n      </div>\r\n\r\n      <!-- Calling SignIn Api from AuthService -->\r\n      <div class=\"formGroup\">\r\n        <input type=\"button\" class=\"btn btnPrimary\" value=\"Log in\" (click)=\"authService.SignIn(userName.value, userPassword.value)\">\r\n      </div>\r\n\r\n      <div class=\"formGroup\">\r\n        <span class=\"or\"><span class=\"orInner\">Or</span></span>\r\n      </div>\r\n\r\n      <!-- Calling GoogleAuth Api from AuthService -->\r\n      <div class=\"formGroup\">\r\n        <button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">\r\n          <i class=\"fab fa-google-plus-g\"></i>\r\n          Log in with Google\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"forgotPassword\">\r\n        <span routerLink=\"/forgot-password\">Forgot Password?</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"redirectToLogin\">\r\n     \r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Auth_1/components/sign-in/sign-in.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-in/sign-in.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".displayTable {\n  display: table;\n  width: 100%;\n  height: 100%;\n  background: #3F51B5; }\n\n.displayTableCell {\n  display: table-cell;\n  vertical-align: middle;\n  width: 100%;\n  height: 100%; }\n\n.authBlock {\n  margin: 0 auto;\n  max-width: 400px;\n  background: white;\n  padding: 30px 40px 10px;\n  overflow: hidden;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.04); }\n\n.formGroup {\n  margin-bottom: 20px;\n  float: left;\n  width: 100%; }\n\n.formControl {\n  width: 100%;\n  display: block;\n  padding: 15px 15px 14px;\n  border: 2px solid #e7e7e7;\n  outline: none;\n  font-size: 15px;\n  color: #444444;\n  background: #fcfcfc; }\n\n.formControl:focus {\n  border: 2px solid #d3d3d6; }\n\n.displayTable .btn {\n  width: 100%;\n  border: none;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 15px 0;\n  background: #15CD72;\n  color: #ffffff;\n  cursor: pointer;\n  outline: none; }\n\ndisplayTable .btn:hover {\n  opacity: .88; }\n\n.displayTable .btnSecondary {\n  background: #EEEEEE;\n  color: #404040; }\n\n.displayTable .googleBtn {\n  background: #eb5e4c; }\n\n.forgotPassword {\n  text-align: center;\n  margin: -12px 0 15px 0;\n  float: left;\n  width: 100%; }\n\n.forgotPassword span {\n  color: #3C89EF;\n  font-size: 14px;\n  font-weight: 400;\n  cursor: pointer;\n  display: inline-block;\n  padding-top: 20px; }\n\n.redirectToLogin {\n  padding: 15px 0 0;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 400;\n  display: block;\n  color: rgba(255, 255, 255, 0.6); }\n\n.redirectToLogin .redirect {\n  cursor: pointer;\n  color: #ffffff;\n  text-decoration: underline; }\n\n.or {\n  text-align: center;\n  display: block;\n  color: #a0a0a0;\n  background: white;\n  position: relative;\n  margin: 5px 0 0px; }\n\n.orInner {\n  background: white;\n  display: inline-block;\n  z-index: 4;\n  position: relative;\n  padding: 0 12px; }\n\n.or:before {\n  position: absolute;\n  content: '';\n  left: 0;\n  top: 11px;\n  width: 100%;\n  height: 1px;\n  background: #e2e2e2; }\n\n.btn-primary.focus,\n.btn-primary:focus {\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQXV0aF8xL2NvbXBvbmVudHMvc2lnbi1pbi9DOlxcVXNlcnNcXERoaW5ha2FyIFJlZGR5XFxEZXNrdG9wXFxTaG9wcGluZyBNYWpvciBQcm9qZWN0L3NyY1xcYXBwXFxBdXRoXzFcXGNvbXBvbmVudHNcXHNpZ24taW5cXHNpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBRWhCLHlDQUF3QyxFQUFBOztBQUUxQztFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUViO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHlCQUNGLEVBQUE7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUViO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLCtCQUE4QixFQUFBOztBQUVoQztFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUVyQjs7RUFFRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5VGFibGUge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjM0Y1MUI1O1xyXG59XHJcbi5kaXNwbGF5VGFibGVDZWxsIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5hdXRoQmxvY2sge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMzBweCA0MHB4IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDAsIDAsIDAsIC4wNCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgLjA0KTtcclxufVxyXG4uZm9ybUdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mb3JtQ29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4IDE0cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U3ZTdlNztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzQ0NDQ0NDtcclxuICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xyXG59XHJcblxyXG4uZm9ybUNvbnRyb2w6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkM2QzZDZcclxufVxyXG4uZGlzcGxheVRhYmxlIC5idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgYmFja2dyb3VuZDogIzE1Q0Q3MjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5kaXNwbGF5VGFibGUgLmJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eTogLjg4O1xyXG59XHJcblxyXG4uZGlzcGxheVRhYmxlIC5idG5TZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQ6ICNFRUVFRUU7XHJcbiAgY29sb3I6ICM0MDQwNDA7XHJcbn1cclxuXHJcbi5kaXNwbGF5VGFibGUgLmdvb2dsZUJ0biB7XHJcbiAgYmFja2dyb3VuZDogI2ViNWU0YztcclxufVxyXG5cclxuLmZvcmdvdFBhc3N3b3JkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAtMTJweCAwIDE1cHggMDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9yZ290UGFzc3dvcmQgc3BhbiB7XHJcbiAgY29sb3I6ICMzQzg5RUY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4ucmVkaXJlY3RUb0xvZ2luIHtcclxuICBwYWRkaW5nOiAxNXB4IDAgMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xyXG59XHJcbi5yZWRpcmVjdFRvTG9naW4gLnJlZGlyZWN0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLm9yIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNhMGEwYTA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogNXB4IDAgMHB4O1xyXG59XHJcblxyXG4ub3JJbm5lciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDAgMTJweDtcclxufVxyXG5cclxuLm9yOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAxMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XHJcbn1cclxuLmJ0bi1wcmltYXJ5LmZvY3VzLFxyXG4uYnRuLXByaW1hcnk6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Auth_1/components/sign-in/sign-in.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-in/sign-in.component.ts ***!
  \****************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService) {
        this.authService = authService;
    }
    SignInComponent.prototype.ngOnInit = function () { };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/Auth_1/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/Auth_1/components/sign-in/sign-in.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/components/sign-up/sign-up.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-up/sign-up.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\r\n  <div class=\"displayTableCell\" style=\"padding-top: 52px;\r\n  padding-bottom: 40px;\">\r\n\r\n\r\n    <div class=\"authBlock\">\r\n      <h3>Sign Up</h3>\r\n\r\n      <div class=\"formGroup\">\r\n        <input type=\"email\" class=\"formControl\" placeholder=\"Email Address\" #userEmail required>\r\n      </div>\r\n\r\n      <div class=\"formGroup\">\r\n        <input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPwd required>\r\n      </div>\r\n\r\n      <div class=\"formGroup\">\r\n        <input type=\"button\" class=\"btn btnPrimary\" value=\"Sign Up\" (click)=\"authService.SignUp(userEmail.value, userPwd.value)\">\r\n      </div>\r\n\r\n      <div class=\"formGroup\">\r\n        <span class=\"or\"><span class=\"orInner\">Or</span></span>\r\n      </div>\r\n\r\n      <!-- Continue with Google -->\r\n      <div class=\"formGroup\">\r\n        <button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">\r\n          <i class=\"fab fa-google-plus-g\"></i>\r\n          Continue with Google\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"redirectToLogin\">\r\n      \r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Auth_1/components/sign-up/sign-up.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-up/sign-up.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".displayTable {\n  display: table;\n  width: 100%;\n  height: 100%;\n  background: #3F51B5; }\n\n.displayTableCell {\n  display: table-cell;\n  vertical-align: middle;\n  width: 100%;\n  height: 100%; }\n\n.authBlock {\n  margin: 0 auto;\n  max-width: 400px;\n  background: white;\n  padding: 30px 40px 10px;\n  overflow: hidden;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.04); }\n\n.formGroup {\n  margin-bottom: 20px;\n  float: left;\n  width: 100%; }\n\n.formControl {\n  width: 100%;\n  display: block;\n  padding: 15px 15px 14px;\n  border: 2px solid #e7e7e7;\n  outline: none;\n  font-size: 15px;\n  color: #444444;\n  background: #fcfcfc; }\n\n.formControl:focus {\n  border: 2px solid #d3d3d6; }\n\n.displayTable .btn {\n  width: 100%;\n  border: none;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 15px 0;\n  background: #15CD72;\n  color: #ffffff;\n  cursor: pointer;\n  outline: none; }\n\ndisplayTable .btn:hover {\n  opacity: .88; }\n\n.displayTable .btnSecondary {\n  background: #EEEEEE;\n  color: #404040; }\n\n.displayTable .googleBtn {\n  background: #eb5e4c; }\n\n.forgotPassword {\n  text-align: center;\n  margin: -12px 0 15px 0;\n  float: left;\n  width: 100%; }\n\n.forgotPassword span {\n  color: #3C89EF;\n  font-size: 14px;\n  font-weight: 400;\n  cursor: pointer;\n  display: inline-block;\n  padding-top: 20px; }\n\n.redirectToLogin {\n  padding: 15px 0 0;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 400;\n  display: block;\n  color: rgba(255, 255, 255, 0.6); }\n\n.redirectToLogin .redirect {\n  cursor: pointer;\n  color: #ffffff;\n  text-decoration: underline; }\n\n.or {\n  text-align: center;\n  display: block;\n  color: #a0a0a0;\n  background: white;\n  position: relative;\n  margin: 5px 0 0px; }\n\n.orInner {\n  background: white;\n  display: inline-block;\n  z-index: 4;\n  position: relative;\n  padding: 0 12px; }\n\n.or:before {\n  position: absolute;\n  content: '';\n  left: 0;\n  top: 11px;\n  width: 100%;\n  height: 1px;\n  background: #e2e2e2; }\n\n.btn-primary.focus,\n.btn-primary:focus {\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQXV0aF8xL2NvbXBvbmVudHMvc2lnbi11cC9DOlxcVXNlcnNcXERoaW5ha2FyIFJlZGR5XFxEZXNrdG9wXFxTaG9wcGluZyBNYWpvciBQcm9qZWN0L3NyY1xcYXBwXFxBdXRoXzFcXGNvbXBvbmVudHNcXHNpZ24tdXBcXHNpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBRWhCLHlDQUF3QyxFQUFBOztBQUUxQztFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUViO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHlCQUNGLEVBQUE7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUViO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLCtCQUE4QixFQUFBOztBQUVoQztFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUVyQjs7RUFFRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5VGFibGUge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjM0Y1MUI1O1xyXG59XHJcbi5kaXNwbGF5VGFibGVDZWxsIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5hdXRoQmxvY2sge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMzBweCA0MHB4IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDAsIDAsIDAsIC4wNCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgLjA0KTtcclxufVxyXG4uZm9ybUdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mb3JtQ29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4IDE0cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U3ZTdlNztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzQ0NDQ0NDtcclxuICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xyXG59XHJcblxyXG4uZm9ybUNvbnRyb2w6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkM2QzZDZcclxufVxyXG4uZGlzcGxheVRhYmxlIC5idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgYmFja2dyb3VuZDogIzE1Q0Q3MjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5kaXNwbGF5VGFibGUgLmJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eTogLjg4O1xyXG59XHJcblxyXG4uZGlzcGxheVRhYmxlIC5idG5TZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQ6ICNFRUVFRUU7XHJcbiAgY29sb3I6ICM0MDQwNDA7XHJcbn1cclxuXHJcbi5kaXNwbGF5VGFibGUgLmdvb2dsZUJ0biB7XHJcbiAgYmFja2dyb3VuZDogI2ViNWU0YztcclxufVxyXG5cclxuLmZvcmdvdFBhc3N3b3JkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAtMTJweCAwIDE1cHggMDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9yZ290UGFzc3dvcmQgc3BhbiB7XHJcbiAgY29sb3I6ICMzQzg5RUY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4ucmVkaXJlY3RUb0xvZ2luIHtcclxuICBwYWRkaW5nOiAxNXB4IDAgMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xyXG59XHJcbi5yZWRpcmVjdFRvTG9naW4gLnJlZGlyZWN0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLm9yIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNhMGEwYTA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogNXB4IDAgMHB4O1xyXG59XHJcblxyXG4ub3JJbm5lciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDAgMTJweDtcclxufVxyXG5cclxuLm9yOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAxMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XHJcbn1cclxuLmJ0bi1wcmltYXJ5LmZvY3VzLFxyXG4uYnRuLXByaW1hcnk6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Auth_1/components/sign-up/sign-up.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-up/sign-up.component.ts ***!
  \****************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService) {
        this.authService = authService;
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/Auth_1/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/Auth_1/components/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/components/verify-email/verify-email.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/Auth_1/components/verify-email/verify-email.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".displayTable {\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #3F51B5;\r\n}\r\n.displayTableCell {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.authBlock {\r\n  margin: 0 auto;\r\n  max-width: 400px;\r\n  background: white;\r\n  padding: 30px 40px 10px;\r\n  overflow: hidden;\r\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, .04);\r\n}\r\n.formGroup {\r\n  margin-bottom: 20px;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.displayTable .btn {\r\n  width: 100%;\r\n  border: none;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  padding: 15px 0;\r\n  background: #15CD72;\r\n  color: #ffffff;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\ndisplayTable .btn:hover {\r\n  opacity: .88;\r\n}\r\n.displayTable .btnSecondary {\r\n  background: #EEEEEE;\r\n  color: #404040;\r\n}\r\n.redirectToLogin {\r\n  padding: 15px 0 0;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  display: block;\r\n  color: rgba(255, 255, 255, .6);\r\n}\r\n.btn-primary.focus,\r\n.btn-primary:focus {\r\n  box-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQXV0aF8xL2NvbXBvbmVudHMvdmVyaWZ5LWVtYWlsL3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFFaEIsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsOEJBQThCO0FBQ2hDO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvQXV0aF8xL2NvbXBvbmVudHMvdmVyaWZ5LWVtYWlsL3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXlUYWJsZSB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMzRjUxQjU7XHJcbn1cclxuLmRpc3BsYXlUYWJsZUNlbGwge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmF1dGhCbG9jayB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzMHB4IDQwcHggMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgLjA0KTtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDAgcmdiYSgwLCAwLCAwLCAuMDQpO1xyXG59XHJcbi5mb3JtR3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmRpc3BsYXlUYWJsZSAuYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIGJhY2tncm91bmQ6ICMxNUNENzI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuZGlzcGxheVRhYmxlIC5idG46aG92ZXIge1xyXG4gIG9wYWNpdHk6IC44ODtcclxufVxyXG5cclxuLmRpc3BsYXlUYWJsZSAuYnRuU2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xyXG4gIGNvbG9yOiAjNDA0MDQwO1xyXG59XHJcbi5yZWRpcmVjdFRvTG9naW4ge1xyXG4gIHBhZGRpbmc6IDE1cHggMCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcbn1cclxuLmJ0bi1wcmltYXJ5LmZvY3VzLFxyXG4uYnRuLXByaW1hcnk6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Auth_1/components/verify-email/verify-email.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/Auth_1/components/verify-email/verify-email.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\r\n  <div class=\"displayTableCell\">\r\n\r\n    <div class=\"px-logo\">\r\n      <a href=\"https://www.positronx.io\" target=\"_blank\">\r\n        <img src=\"https://www.positronx.io/wp-content/themes/positronx/img/logo-positronx-white.svg\" alt=\"positronX.io - Learn Full Stack Development\">\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"authBlock\">\r\n      <h3>Thank You for Registering</h3>\r\n\r\n      <div class=\"formGroup\" *ngIf=\"authService.userData as user\">\r\n        <p class=\"text-center\">We have sent a confirmation email to <strong>{{user.email}}</strong>.</p>\r\n        <p class=\"text-center\">Please check your email and click on the link to verfiy your email address.</p>\r\n      </div>\r\n\r\n      <!-- Calling SendVerificationMail() method using authService Api -->\r\n      <div class=\"formGroup\">\r\n        <button type=\"button\" class=\"btn btnPrimary\" (click)=\"authService.SendVerificationMail()\">\r\n          <i class=\"fas fa-redo-alt\"></i>\r\n          Resend Verification Email\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"redirectToLogin\">\r\n      <span>Go back to?<span class=\"redirect\" routerLink=\"/session/signin\"> Sign in</span></span>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Auth_1/components/verify-email/verify-email.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Auth_1/components/verify-email/verify-email.component.ts ***!
  \**************************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(authService) {
        this.authService = authService;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
    };
    VerifyEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/Auth_1/components/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.css */ "./src/app/Auth_1/components/verify-email/verify-email.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/shared/guard/auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/Auth_1/shared/guard/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['signin']);
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Auth_1/shared/guard/secure-inner-pages.guard.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Auth_1/shared/guard/secure-inner-pages.guard.ts ***!
  \*****************************************************************/
/*! exports provided: SecureInnerPagesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureInnerPagesGuard", function() { return SecureInnerPagesGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SecureInnerPagesGuard = /** @class */ (function () {
    function SecureInnerPagesGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SecureInnerPagesGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn) {
            window.alert("You are not allowed to access this URL!");
            this.router.navigate(['dashboard']);
        }
        return true;
    };
    SecureInnerPagesGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SecureInnerPagesGuard);
    return SecureInnerPagesGuard;
}());



/***/ }),

/***/ "./src/app/Auth_1/shared/services/auth.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Auth_1/shared/services/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                localStorage.setItem('user', JSON.stringify(_this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    AuthService.prototype.SignIn = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['dashboard']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Sign up with email/password
    AuthService.prototype.SignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            _this.SendVerificationMail();
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Send email verfificaiton when new user sign up
    AuthService.prototype.SendVerificationMail = function () {
        var _this = this;
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(function () {
            _this.router.navigate(['verify-email-address']);
        });
    };
    // Reset Forggot password
    AuthService.prototype.ForgotPassword = function (passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(function () {
            window.alert('Password reset email sent, check your inbox.');
        }).catch(function (error) {
            window.alert(error);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // Returns true when user is looged in and email is verified
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return (user !== null && user.emailVerified !== false) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    // Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider());
    };
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['dashboard']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error);
        });
    };
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    };
    // Sign out 
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem('user');
            _this.router.navigate(['sign-in']);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] // NgZone service to remove outside scope warning
        ])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Core/menu/menu-items/menu-items.ts":
/*!****************************************************!*\
  !*** ./src/app/Core/menu/menu-items/menu-items.ts ***!
  \****************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderOneItems = [
    {
        state: 'home',
        name: 'HOME',
        type: 'sub',
        icon: 'home',
        children: [
            {
                state: 'home',
                name: 'HOME ONE',
                type: 'link',
                icon: 'home'
            },
            {
                state: 'home-two',
                name: 'HOME TWO',
                type: 'link',
                icon: 'home'
            }, {
                state: 'home-three',
                name: 'HOME THREE',
                type: 'link',
                icon: 'home'
            }
        ]
    },
    {
        state: '',
        name: 'SHOP',
        type: 'sub',
        icon: 'pages',
        children: [
            {
                state: 'products/men/4',
                name: 'PRODUCT DETAILS',
                type: 'link',
                icon: 'arrow_right_alt'
            },
            {
                state: 'cart',
                name: 'CART',
                type: 'link',
                icon: 'arrow_right_alt'
            },
            {
                state: 'checkout',
                name: 'CHECKOUT',
                type: 'link',
                icon: 'arrow_right_alt'
            },
            {
                state: 'checkout/payment',
                name: 'PAYMENT',
                type: 'link',
                icon: 'arrow_right_alt'
            }
        ]
    },
    {
        state: 'products/accessories',
        name: 'ACCESSORIES',
        type: 'link',
        icon: 'party_mode'
    },
    {
        state: 'products',
        name: 'CATEGORIES',
        type: 'sub',
        mega: true,
        icon: 'party_mode',
        children: [
            {
                state: 'men',
                name: 'MEN',
                type: 'sub',
                icon: 'arrow_right_alt',
                children: [
                    {
                        state: 'products/men',
                        queryState: 'Jeans',
                        name: 'JEAN',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    },
                    {
                        state: 'products/men',
                        queryState: 'Jackets',
                        name: 'JACKETS',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    },
                    {
                        state: 'products/men',
                        queryState: 'Shirt',
                        name: 'SHIRT',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    },
                    {
                        state: 'products/men',
                        queryState: 'T-Shirt',
                        name: 'T-SHIRT',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    }
                ]
            },
            {
                state: 'woman',
                name: 'WOMEN',
                type: 'sub',
                icon: 'arrow_right_alt',
                children: [
                    {
                        state: 'products/woman',
                        queryState: 'Dresses',
                        name: 'DRESS',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    },
                    {
                        state: 'products/woman',
                        queryState: 'Shirt',
                        name: 'SHIRT',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    },
                    {
                        state: 'products/woman',
                        queryState: 'T-Shirt',
                        name: 'T-SHIRT',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    }
                ]
            },
            {
                state: 'gadgets',
                name: 'GADGETS',
                type: 'sub',
                icon: 'arrow_right_alt',
                children: [
                    {
                        state: 'products/gadgets',
                        queryState: 'Headphone',
                        name: 'HEADPHONE',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    },
                    {
                        state: 'products/gadgets',
                        queryState: 'Smartphone',
                        name: 'SMARTPHONE',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    },
                    {
                        state: 'products/gadgets',
                        queryState: 'Watch',
                        name: 'WATCH',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    },
                    {
                        state: 'products/gadgets',
                        queryState: 'Speaker',
                        name: 'SPEAKER',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    }
                ]
            },
            {
                state: 'accessories',
                name: 'ACCESSORIES',
                type: 'sub',
                icon: 'arrow_right_alt',
                children: [
                    {
                        state: 'products/accessories',
                        queryState: 'Laptap',
                        name: 'LAPTOP ACCESSORIES',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    },
                    {
                        state: 'products/accessories',
                        queryState: 'Belts',
                        name: 'BELTS',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    },
                    {
                        state: 'products/accessories',
                        queryState: 'Jewellery',
                        name: 'JEWELLERY',
                        type: 'queryParams',
                        icon: 'arrow_right_alt',
                    }
                ]
            }
        ]
    },
    {
        state: 'pages',
        name: 'PAGES',
        type: 'sub',
        icon: 'pages',
        children: [
            { state: 'about',
                name: 'ABOUT',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            { state: 'term-condition',
                name: 'TERM AND CONDITION',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'privacy-policy',
                name: 'PRIVACY POLICY',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'blogs/detail',
                name: 'BLOG DETAIL',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'faq',
                name: 'FAQ',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'not-found',
                name: '404 PAGE',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'account/profile',
                name: 'User Profile',
                type: 'link',
                icon: 'arrow_right_alt',
            }
        ]
    },
    {
        state: 'session',
        name: 'SESSION',
        type: 'sub',
        icon: 'supervised_user_circle',
        children: [
            {
                state: 'session/signin',
                name: 'SIGN IN',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'session/signup',
                name: 'REGISTER',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'session/forgot-password',
                name: 'FORGET PASSWORD',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'session/thank-you',
                name: 'THANK YOU',
                type: 'link',
                icon: 'arrow_right_alt',
            }
        ]
    },
    {
        state: 'contact',
        name: 'CONTACT US',
        type: 'link',
        icon: 'perm_contact_calendar'
    }
];
var FooterOneItems = [
    {
        state: '',
        name: 'ABOUT',
        type: 'sub',
        icon: '',
        children: [
            {
                state: 'about',
                name: 'ABOUT',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'term-condition',
                name: 'TERM AND CONDITION',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'privacy-policy',
                name: 'PRIVACY POLICY',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'faq',
                name: 'FAQ',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'contact',
                name: 'CONTACT US',
                type: 'link',
                icon: 'perm_contact_calendar',
            }
        ]
    },
    {
        state: '',
        name: 'SESSION',
        type: 'sub',
        icon: '',
        children: [
            {
                state: 'session/signin',
                name: 'SIGN IN',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'session/signup',
                name: 'REGISTER',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'session/forgot-password',
                name: 'FORGET PASSWORD',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'session/thank-you',
                name: 'THANK YOU',
                type: 'link',
                icon: 'arrow_right_alt',
            }
        ]
    },
    {
        state: '',
        name: 'CATEGORIES',
        type: 'sub',
        icon: '',
        children: [
            {
                state: 'products/women',
                name: 'WOMEN',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'products/men',
                name: 'MEN',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'products/accesories',
                name: 'ACCESSORIES',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'products/gadgets',
                name: 'GADGETS',
                type: 'link',
                icon: 'arrow_right_alt',
            }
        ]
    },
    {
        state: '',
        name: 'SOCIAL',
        type: 'sub',
        icon: '',
        children: [
            {
                state: 'https://www.facebook.com/',
                name: 'Facebook',
                type: 'social_link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'https://twitter.com/',
                name: 'Twitter',
                type: 'social_link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'https://www.youtube.com/',
                name: 'Youtube',
                type: 'social_link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'https://plus.google.com',
                name: 'Google Plus',
                type: 'social_link',
                icon: 'arrow_right_alt',
            }
        ]
    }
];
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    /*
     * Get all header menu
     */
    MenuItems.prototype.getMainMenu = function () {
        return HeaderOneItems;
    };
    /*
     * Get all footer menu
     */
    MenuItems.prototype.getFooterOneMenu = function () {
        return FooterOneItems;
    };
    MenuItems = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MenuItems);
    return MenuItems;
}());



/***/ }),

/***/ "./src/app/Global/AboutInfo/AboutInfo.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Global/AboutInfo/AboutInfo.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"data\">\r\n   <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"col-gap\">\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"50\" fxFlex.xl=\"50\" class=\"p-5\">\r\n      <h2 class=\"font-bold mb-4\">\r\n        {{data?.heading}}\r\n      </h2>\r\n      <h4 class=\"font-italic font-bold mb-4\">{{data?.sub_heading}} </h4>\r\n      <p class=\"mb-4\">{{data?.content}}</p>\r\n      <button mat-raised-button color=\"accent\" class=\"button-lg\">Read More</button>\r\n    </div>\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n      <img [src]=\"data.image\" width=\"700\" height=\"700\" alt=\"About Us Image\">\r\n    </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Global/AboutInfo/AboutInfo.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Global/AboutInfo/AboutInfo.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9BYm91dEluZm8vQWJvdXRJbmZvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Global/AboutInfo/AboutInfo.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Global/AboutInfo/AboutInfo.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutInfoComponent", function() { return AboutInfoComponent; });
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

var AboutInfoComponent = /** @class */ (function () {
    function AboutInfoComponent() {
    }
    AboutInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AboutInfoComponent.prototype, "data", void 0);
    AboutInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-AboutInfo',
            template: __webpack_require__(/*! ./AboutInfo.component.html */ "./src/app/Global/AboutInfo/AboutInfo.component.html"),
            styles: [__webpack_require__(/*! ./AboutInfo.component.scss */ "./src/app/Global/AboutInfo/AboutInfo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutInfoComponent);
    return AboutInfoComponent;
}());



/***/ }),

/***/ "./src/app/Global/AddToCardButton/AddToCardButton.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Global/AddToCardButton/AddToCardButton.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ng-container *ngIf=\"product\">\r\n   <button mat-fab (click)=\"addToCartProduct(product)\"><i  class=\"material-icons\"> shopping_cart </i></button>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/Global/AddToCardButton/AddToCardButton.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Global/AddToCardButton/AddToCardButton.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9BZGRUb0NhcmRCdXR0b24vQWRkVG9DYXJkQnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Global/AddToCardButton/AddToCardButton.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Global/AddToCardButton/AddToCardButton.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddToCardButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCardButtonComponent", function() { return AddToCardButtonComponent; });
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

var AddToCardButtonComponent = /** @class */ (function () {
    function AddToCardButtonComponent() {
        this.addToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddToCardButtonComponent.prototype.ngOnInit = function () {
    };
    AddToCardButtonComponent.prototype.addToCartProduct = function (product) {
        this.addToCart.emit(product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddToCardButtonComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddToCardButtonComponent.prototype, "addToCart", void 0);
    AddToCardButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-AddToCardButton',
            template: __webpack_require__(/*! ./AddToCardButton.component.html */ "./src/app/Global/AddToCardButton/AddToCardButton.component.html"),
            styles: [__webpack_require__(/*! ./AddToCardButton.component.scss */ "./src/app/Global/AddToCardButton/AddToCardButton.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddToCardButtonComponent);
    return AddToCardButtonComponent;
}());



/***/ }),

/***/ "./src/app/Global/AppLogo/AppLogo.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Global/AppLogo/AppLogo.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\"> <img src=\"assets/images/logo1.png\" width=\"224\" height=\"34\" alt=\"\"> </a>"

/***/ }),

/***/ "./src/app/Global/AppLogo/AppLogo.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/Global/AppLogo/AppLogo.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9BcHBMb2dvL0FwcExvZ28uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Global/AppLogo/AppLogo.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Global/AppLogo/AppLogo.component.ts ***!
  \*****************************************************/
/*! exports provided: AppLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLogoComponent", function() { return AppLogoComponent; });
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

var AppLogoComponent = /** @class */ (function () {
    function AppLogoComponent() {
    }
    AppLogoComponent.prototype.ngOnInit = function () {
    };
    AppLogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-AppLogo',
            template: __webpack_require__(/*! ./AppLogo.component.html */ "./src/app/Global/AppLogo/AppLogo.component.html"),
            styles: [__webpack_require__(/*! ./AppLogo.component.scss */ "./src/app/Global/AppLogo/AppLogo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppLogoComponent);
    return AppLogoComponent;
}());



/***/ }),

/***/ "./src/app/Global/BrandsLogo/BrandsLogo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Global/BrandsLogo/BrandsLogo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ngx-slick-carousel class=\"carousel\" [config]=\"slideConfig\">\r\n  <div ngxSlickItem *ngFor=\"let brand of brandsLogoArray\">\r\n    <a [routerLink]=\"['/products']\">\r\n      <img width=\"150\" height=\"30\" [src]=\"brand.image\"  alt=\"logo client\">\r\n    </a>\r\n  </div>\r\n</ngx-slick-carousel>\r\n"

/***/ }),

/***/ "./src/app/Global/BrandsLogo/BrandsLogo.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Global/BrandsLogo/BrandsLogo.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9CcmFuZHNMb2dvL0JyYW5kc0xvZ28uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Global/BrandsLogo/BrandsLogo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Global/BrandsLogo/BrandsLogo.component.ts ***!
  \***********************************************************/
/*! exports provided: BrandslogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandslogoComponent", function() { return BrandslogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandslogoComponent = /** @class */ (function () {
    function BrandslogoComponent(embryoService) {
        this.embryoService = embryoService;
        this.brandsLogoArray = [
            {
                id: 1,
                image: 'assets/images/client-logo-1.png'
            },
            {
                id: 2,
                image: 'assets/images/client-logo-2.png'
            },
            {
                id: 3,
                image: 'assets/images/client-logo-3.png'
            },
            {
                id: 4,
                image: 'assets/images/client-logo-4.png'
            },
            {
                id: 5,
                image: 'assets/images/client-logo-2.png'
            },
            {
                id: 6,
                image: 'assets/images/client-logo-1.png'
            },
            {
                id: 7,
                image: 'assets/images/client-logo-3.png'
            },
        ];
    }
    BrandslogoComponent.prototype.ngOnInit = function () {
    };
    BrandslogoComponent.prototype.ngOnChanges = function () {
        this.slideConfig = {
            infinite: true,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 2000,
            rtl: this.isRTL,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                }
            ]
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BrandslogoComponent.prototype, "isRTL", void 0);
    BrandslogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-BrandsLogo',
            template: __webpack_require__(/*! ./BrandsLogo.component.html */ "./src/app/Global/BrandsLogo/BrandsLogo.component.html"),
            styles: [__webpack_require__(/*! ./BrandsLogo.component.scss */ "./src/app/Global/BrandsLogo/BrandsLogo.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"]])
    ], BrandslogoComponent);
    return BrandslogoComponent;
}());



/***/ }),

/***/ "./src/app/Global/CallToAction/CTA-Group/CTA-Group.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Global/CallToAction/CTA-Group/CTA-Group.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-gap pb-0 pt-5 image-group\">\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"33\" fxFlex.xl=\"33\" *ngFor=\"let card of callToActionArray\">\r\n        <a [routerLink]=\"[card.route]\"> <img [src]=\"card.img_path\" alt=\"\"></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Global/CallToAction/CTA-Group/CTA-Group.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/Global/CallToAction/CTA-Group/CTA-Group.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9DYWxsVG9BY3Rpb24vQ1RBLUdyb3VwL0NUQS1Hcm91cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/CallToAction/CTA-Group/CTA-Group.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Global/CallToAction/CTA-Group/CTA-Group.component.ts ***!
  \**********************************************************************/
/*! exports provided: CTAGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTAGroupComponent", function() { return CTAGroupComponent; });
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

var CTAGroupComponent = /** @class */ (function () {
    function CTAGroupComponent() {
        this.callToActionArray = [
            {
                img_path: 'assets/images/mobile.jpg',
                route: '/products/gadgets/11'
            },
            {
                img_path: 'assets/images/sports.jpg',
                route: '/products/men/3'
            },
            {
                img_path: 'assets/images/headphone.jpg',
                route: '/products/gadgets/10'
            },
            {
                img_path: 'assets/images/t-shirts.jpg',
                route: '/products/men/5'
            },
            {
                img_path: 'assets/images/watch.jpg',
                route: '/products/gadgets/12'
            },
            {
                img_path: 'assets/images/shoes.jpg',
                route: '/products/men/3'
            }
        ];
    }
    CTAGroupComponent.prototype.ngOnInit = function () {
    };
    CTAGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-CtaGroup',
            template: __webpack_require__(/*! ./CTA-Group.component.html */ "./src/app/Global/CallToAction/CTA-Group/CTA-Group.component.html"),
            styles: [__webpack_require__(/*! ./CTA-Group.component.scss */ "./src/app/Global/CallToAction/CTA-Group/CTA-Group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CTAGroupComponent);
    return CTAGroupComponent;
}());



/***/ }),

/***/ "./src/app/Global/CallToAction/CTA-SingleBanner/CTA-SingleBanner.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/Global/CallToAction/CTA-SingleBanner/CTA-SingleBanner.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-gap pt-0\">\r\n  <div class=\"container\">\r\n    <div class=\"cta text-center\" style=\"background-image: url('assets/images/cta-bg-pat.png');padding: 90px 0; background-size:25px;\">\r\n      <div class=\"overlay-section-overlay cta-image  relative\">\r\n        <img src=\"assets/images/bg-sunglass.jpg\" alt=\"\">\r\n        <div class=\"cta-content\">\r\n\r\n          <p><i class=\"material-icons text-inverse\">\r\n              brightness_5\r\n            </i>\r\n         </p>\r\n          <h4 class=\"font-bold mb-4 text-inverse\">new arrival</h4>\r\n          <h2 class=\"mb-4 text-inverse\">Sunglasses for Everyone</h2>\r\n          <button mat-raised-button [routerLink]=\"['/products']\">SHOP NOW</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Global/CallToAction/CTA-SingleBanner/CTA-SingleBanner.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/Global/CallToAction/CTA-SingleBanner/CTA-SingleBanner.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9DYWxsVG9BY3Rpb24vQ1RBLVNpbmdsZUJhbm5lci9DVEEtU2luZ2xlQmFubmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Global/CallToAction/CTA-SingleBanner/CTA-SingleBanner.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Global/CallToAction/CTA-SingleBanner/CTA-SingleBanner.component.ts ***!
  \************************************************************************************/
/*! exports provided: CTASingleBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTASingleBannerComponent", function() { return CTASingleBannerComponent; });
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

var CTASingleBannerComponent = /** @class */ (function () {
    function CTASingleBannerComponent() {
    }
    CTASingleBannerComponent.prototype.ngOnInit = function () {
    };
    CTASingleBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-CTASingleBanner',
            template: __webpack_require__(/*! ./CTA-SingleBanner.component.html */ "./src/app/Global/CallToAction/CTA-SingleBanner/CTA-SingleBanner.component.html"),
            styles: [__webpack_require__(/*! ./CTA-SingleBanner.component.scss */ "./src/app/Global/CallToAction/CTA-SingleBanner/CTA-SingleBanner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CTASingleBannerComponent);
    return CTASingleBannerComponent;
}());



/***/ }),

/***/ "./src/app/Global/CallToAction/CTA-Two/CTA-Two.component.html":
/*!********************************************************************!*\
  !*** ./src/app/Global/CallToAction/CTA-Two/CTA-Two.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-gap overlay-section pb-0\">\r\n    <div class=\"container\">\r\n      <div fxLayout=\"row wrap\" class=\"col-gap feature-section-v2\">\r\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n          <mat-card>\r\n            <div class=\"feature-section-v2-list\" fxLayoutAlign=\"space-between\">\r\n              <button mat-fab color=\"primary\"><i class=\"material-icons\">\r\n                  shopping_cart\r\n                </i></button>\r\n              <div class=\"ml-4 feature-section-v2-content\">\r\n                <h4 class=\"mb-2 font-bold\">Free Shipping</h4>\r\n                <p class=\"mb-0\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n          <mat-card>\r\n            <div class=\"feature-section-v2-list\" fxLayoutAlign=\"space-between\">\r\n              <button mat-fab color=\"primary\"><i class=\"material-icons\">\r\n                  thumb_up\r\n                </i></button>\r\n              <div class=\"ml-4 feature-section-v2-content\">\r\n                <h4 class=\"mb-2 font-bold\">24X7 Support</h4>\r\n                <p class=\"mb-0\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n          <mat-card>\r\n            <div class=\"feature-section-v2-list\" fxLayoutAlign=\"space-between\">\r\n              <button mat-fab color=\"primary\"><i class=\"material-icons\">\r\n                  whatshot\r\n                </i></button>\r\n              <div class=\"ml-4 feature-section-v2-content\">\r\n                <h4 class=\"mb-2 font-bold\">Best Price</h4>\r\n                <p class=\"mb-0\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/Global/CallToAction/CTA-Two/CTA-Two.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/Global/CallToAction/CTA-Two/CTA-Two.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9DYWxsVG9BY3Rpb24vQ1RBLVR3by9DVEEtVHdvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Global/CallToAction/CTA-Two/CTA-Two.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Global/CallToAction/CTA-Two/CTA-Two.component.ts ***!
  \******************************************************************/
/*! exports provided: CTATwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTATwoComponent", function() { return CTATwoComponent; });
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

var CTATwoComponent = /** @class */ (function () {
    function CTATwoComponent() {
    }
    CTATwoComponent.prototype.ngOnInit = function () {
    };
    CTATwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-CtaTwo',
            template: __webpack_require__(/*! ./CTA-Two.component.html */ "./src/app/Global/CallToAction/CTA-Two/CTA-Two.component.html"),
            styles: [__webpack_require__(/*! ./CTA-Two.component.scss */ "./src/app/Global/CallToAction/CTA-Two/CTA-Two.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CTATwoComponent);
    return CTATwoComponent;
}());



/***/ }),

/***/ "./src/app/Global/CollectionGallery/CollectionGallery.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Global/CollectionGallery/CollectionGallery.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-gap pt-4 overlay-section\">\r\n    <div class=\"container\">\r\n      <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n          <div class=\"main-bg overlay-section-item overlay-section-overlay relative\" style=\"background-image: url('assets/images/collection.jpg');background-size:cover;\">\r\n            <div class=\"end-left\">\r\n              <div class=\"overlay-section-content\">\r\n                <h4 class=\"mb-0 font-bold\">Latest Collections</h4>\r\n                <h4 class=\" text-xxl font-normal mb-3\">Save Upto 60%</h4>\r\n                <button mat-raised-button [routerLink]=\"['/products']\">SHOP NOW</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"66\" fxFlex.lg=\"66\" fxFlex.xl=\"66\" class=\"m-0\">\r\n          <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n              <div class=\"main-bg-inner overlay-section-item overlay-section-overlay relative\" style=\"background-image: url('assets/images/col-men.jpg')\">\r\n                <div class=\"end-left\">\r\n                  <div class=\"overlay-section-content\">\r\n                    <h4 class=\"mb-0 font-bold\">Mens Collections</h4>\r\n                    <h4 class=\" text-xxl font-normal mb-3\">Save Upto 40%</h4>\r\n                    <button mat-raised-button [routerLink]=\"['/products']\">SHOP NOW</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n              <div class=\"main-bg-inner overlay-section-item overlay-section-overlay relative\" style=\"background-image: url('assets/images/col-women.jpg')\">\r\n                <div class=\"end-right\">\r\n                  <div class=\"overlay-section-content\">\r\n                    <h4 class=\"mb-0 font-bold\">Women's Collections</h4>\r\n                    <h4 class=\" text-xxl font-normal mb-3\">Save Upto 30%</h4>\r\n                    <button mat-raised-button [routerLink]=\"['/products']\">SHOP NOW</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n              <div class=\"main-bg-inner overlay-section-item overlay-section-overlay relative\" style=\"background-image: url('assets/images/col-watches.jpg')\">\r\n                <div class=\"end-left\">\r\n                  <div class=\"overlay-section-content\">\r\n                    <h4 class=\"mb-0 font-bold\">Watches Collections</h4>\r\n                    <h4 class=\" text-xxl font-normal mb-3\">Save Upto 50%</h4>\r\n                    <button mat-raised-button [routerLink]=\"['/products']\">SHOP NOW</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n              <div class=\"main-bg-inner overlay-section-item overlay-section-overlay relative\" style=\"background-image: url('assets/images/col-accessories.jpg')\">\r\n                <div class=\"end-right\">\r\n                  <div class=\"overlay-section-content\">\r\n                    <h4 class=\"mb-0 font-bold\">Accessories Collections</h4>\r\n                    <h4 class=\" text-xxl font-normal mb-3\">Save Upto 60%</h4>\r\n                    <button mat-raised-button [routerLink]=\"['/products']\">SHOP NOW</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/Global/CollectionGallery/CollectionGallery.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Global/CollectionGallery/CollectionGallery.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9Db2xsZWN0aW9uR2FsbGVyeS9Db2xsZWN0aW9uR2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/CollectionGallery/CollectionGallery.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Global/CollectionGallery/CollectionGallery.component.ts ***!
  \*************************************************************************/
/*! exports provided: CollectionGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionGalleryComponent", function() { return CollectionGalleryComponent; });
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

var CollectionGalleryComponent = /** @class */ (function () {
    function CollectionGalleryComponent() {
    }
    CollectionGalleryComponent.prototype.ngOnInit = function () {
    };
    CollectionGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-CollectionGallery',
            template: __webpack_require__(/*! ./CollectionGallery.component.html */ "./src/app/Global/CollectionGallery/CollectionGallery.component.html"),
            styles: [__webpack_require__(/*! ./CollectionGallery.component.scss */ "./src/app/Global/CollectionGallery/CollectionGallery.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CollectionGalleryComponent);
    return CollectionGalleryComponent;
}());



/***/ }),

/***/ "./src/app/Global/CommonSignIn/CommonSignIn.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Global/CommonSignIn/CommonSignIn.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"mb-4\">\r\n    <mat-form-field class=\"w-100\">\r\n      <input matInput type=\"email\" placeholder=\"Email\" required>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"mb-4\">\r\n    <mat-form-field class=\"w-100\">\r\n      <input matInput type=\"password\" placeholder=\"Password\" required>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"mb-3\">\r\n    <mat-checkbox>Remember Me</mat-checkbox>\r\n    <span fxFlex></span> <a [routerLink]=\"['/session/forgot-password']\">Forgot Password?</a>\r\n  </div>\r\n  <button color=\"accent\" class=\"button-lg mb-3\" mat-raised-button [routerLink]=\"['/checkout/payment']\">Sign In</button>\r\n  <p>Don't have an account? <a [routerLink]=\"['/session/signup']\">Click here to create one</a></p>\r\n</form>"

/***/ }),

/***/ "./src/app/Global/CommonSignIn/CommonSignIn.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Global/CommonSignIn/CommonSignIn.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9Db21tb25TaWduSW4vQ29tbW9uU2lnbkluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Global/CommonSignIn/CommonSignIn.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Global/CommonSignIn/CommonSignIn.component.ts ***!
  \***************************************************************/
/*! exports provided: CommonSignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSignInComponent", function() { return CommonSignInComponent; });
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

var CommonSignInComponent = /** @class */ (function () {
    function CommonSignInComponent() {
    }
    CommonSignInComponent.prototype.ngOnInit = function () {
    };
    CommonSignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-SignIn',
            template: __webpack_require__(/*! ./CommonSignIn.component.html */ "./src/app/Global/CommonSignIn/CommonSignIn.component.html"),
            styles: [__webpack_require__(/*! ./CommonSignIn.component.scss */ "./src/app/Global/CommonSignIn/CommonSignIn.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommonSignInComponent);
    return CommonSignInComponent;
}());



/***/ }),

/***/ "./src/app/Global/ConfirmationPopup/ConfirmationPopup.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Global/ConfirmationPopup/ConfirmationPopup.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-popup\">\r\n   <div class=\"app-popup-content text-center\">\r\n      <div class=\"mb-4\">\r\n         <h4>Are you sure you want to delete this product?</h4>\r\n      </div>\r\n      <button mat-raised-button color=\"accent\" class=\"mr-3\" (click)=\"dialogRef.close('yes')\">Yes</button>\r\n      <button mat-raised-button color=\"accent\" class=\"mr-3\" (click)=\"dialogRef.close()\">No</button>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Global/ConfirmationPopup/ConfirmationPopup.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Global/ConfirmationPopup/ConfirmationPopup.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9Db25maXJtYXRpb25Qb3B1cC9Db25maXJtYXRpb25Qb3B1cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/ConfirmationPopup/ConfirmationPopup.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Global/ConfirmationPopup/ConfirmationPopup.component.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmationPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPopupComponent", function() { return ConfirmationPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationPopupComponent = /** @class */ (function () {
    function ConfirmationPopupComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmationPopupComponent.prototype.ngOnInit = function () {
    };
    ConfirmationPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'app-ConfirmationPopup',
            template: __webpack_require__(/*! ./ConfirmationPopup.component.html */ "./src/app/Global/ConfirmationPopup/ConfirmationPopup.component.html"),
            styles: [__webpack_require__(/*! ./ConfirmationPopup.component.scss */ "./src/app/Global/ConfirmationPopup/ConfirmationPopup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ConfirmationPopupComponent);
    return ConfirmationPopupComponent;
}());



/***/ }),

/***/ "./src/app/Global/ContactForm/ContactForm.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Global/ContactForm/ContactForm.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup] = \"contactForm\" (ngSubmit) = \"submitForm()\">\r\n   <mat-form-field class=\"w-100\">\r\n      <input matInput placeholder=\"First Name\" formControlName=\"first_name\">\r\n   </mat-form-field>\r\n   <mat-error *ngIf=\"contactForm.controls['first_name'].hasError('required') && contactForm.controls['first_name'].touched\">This field should not be empty.</mat-error>\r\n   <mat-form-field class=\"w-100\">\r\n      <input matInput placeholder=\"Last Name\" formControlName=\"last_name\">\r\n   </mat-form-field>\r\n   <mat-error *ngIf=\"contactForm.controls['last_name'].hasError('required') && contactForm.controls['last_name'].touched\">This field should not be empty.</mat-error>\r\n   <mat-form-field class=\"w-100\">\r\n      <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n   </mat-form-field>\r\n   <mat-error *ngIf=\"contactForm.controls['email'].hasError('required') && contactForm.controls['email'].touched\">This field should not be empty.</mat-error>\r\n   <mat-error *ngIf=\"contactForm.controls['email'].hasError('pattern') && contactForm.controls['email'].touched && !contactForm.controls['email'].hasError('required')\">Please enter a valid email.</mat-error>\r\n   <mat-form-field class=\"w-100\">\r\n      <input matInput placeholder=\"Subject\" formControlName=\"subject\">\r\n   </mat-form-field>\r\n   <mat-error *ngIf=\"contactForm.controls['subject'].hasError('required') && contactForm.controls['subject'].touched\"> This field should not be empty.</mat-error>\r\n   <mat-form-field class=\"w-100\">\r\n      <textarea matInput placeholder=\"Leave a Message\" formControlName=\"message\"></textarea>\r\n   </mat-form-field>\r\n   <mat-error *ngIf=\"contactForm.controls['message'].hasError('required') && contactForm.controls['message'].touched\"> This field should not be empty.</mat-error>\r\n   <button mat-raised-button color=\"accent\" class=\"button-lg\" type=\"submit\">Send Messsage</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/Global/ContactForm/ContactForm.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Global/ContactForm/ContactForm.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9Db250YWN0Rm9ybS9Db250YWN0Rm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/ContactForm/ContactForm.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Global/ContactForm/ContactForm.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(formGroup) {
        this.formGroup = formGroup;
        this.emailPattern = /\S+@\S+\.\S+/;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.contactForm = this.formGroup.group({
            first_name: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }],
            last_name: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }],
            email: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)] }],
            subject: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }],
            message: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }]
        });
    };
    ContactFormComponent.prototype.submitForm = function () {
        if (this.contactForm.valid) {
            console.log(this.contactForm.value);
        }
        else {
            // tslint:disable-next-line:forin
            for (var i in this.contactForm.controls) {
                this.contactForm.controls[i].markAsTouched();
            }
        }
    };
    ContactFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-ContactForm',
            template: __webpack_require__(/*! ./ContactForm.component.html */ "./src/app/Global/ContactForm/ContactForm.component.html"),
            styles: [__webpack_require__(/*! ./ContactForm.component.scss */ "./src/app/Global/ContactForm/ContactForm.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/Global/CurrencyDropDown/CurrencyDropDown.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Global/CurrencyDropDown/CurrencyDropDown.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-form-field *ngIf=\"currencyArray && currencyArray.length > 0\">\r\n  <mat-select [(ngModel)]=\"selectedValue\" (selectionChange)=\"selectionChange($event)\">\r\n      <mat-option *ngFor=\"let data of currencyArray\" [value]=\"data.code\">\r\n         <img class=\"mr-2\" [src]=\"data.image\" alt=\"\">{{data.code}}\r\n      </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./src/app/Global/CurrencyDropDown/CurrencyDropDown.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Global/CurrencyDropDown/CurrencyDropDown.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9DdXJyZW5jeURyb3BEb3duL0N1cnJlbmN5RHJvcERvd24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Global/CurrencyDropDown/CurrencyDropDown.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Global/CurrencyDropDown/CurrencyDropDown.component.ts ***!
  \***********************************************************************/
/*! exports provided: CurrencyDropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyDropDownComponent", function() { return CurrencyDropDownComponent; });
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

var CurrencyDropDownComponent = /** @class */ (function () {
    function CurrencyDropDownComponent() {
        this.selectedCurrency = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedValue = 'USD';
        this.currencyArray = [
            {
                code: 'INR',
                name: 'Indian Rupee',
                image: 'assets/images/india.png'
            },
            {
                code: 'USD',
                name: 'United States Doller',
                image: 'assets/images/united-states.png'
            },
            {
                code: 'AUD',
                name: 'Australian Doller',
                image: 'assets/images/australia.png'
            },
            {
                code: 'GBP',
                name: 'United Kingdom',
                image: 'assets/images/united-kingdom.png'
            },
            {
                code: 'ILR',
                name: 'Israeli Shekel',
                image: 'assets/images/israel.png'
            },
            {
                code: 'EUR',
                name: 'France',
                image: 'assets/images/france.png'
            }
        ];
    }
    CurrencyDropDownComponent.prototype.ngOnInit = function () {
    };
    CurrencyDropDownComponent.prototype.selectionChange = function (data) {
        if (data && data.value) {
            this.selectedCurrency.emit(data.value);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CurrencyDropDownComponent.prototype, "selectedCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CurrencyDropDownComponent.prototype, "selectedValue", void 0);
    CurrencyDropDownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-CurrencyDropDown',
            template: __webpack_require__(/*! ./CurrencyDropDown.component.html */ "./src/app/Global/CurrencyDropDown/CurrencyDropDown.component.html"),
            styles: [__webpack_require__(/*! ./CurrencyDropDown.component.scss */ "./src/app/Global/CurrencyDropDown/CurrencyDropDown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CurrencyDropDownComponent);
    return CurrencyDropDownComponent;
}());



/***/ }),

/***/ "./src/app/Global/DealOfTheDay/DealOfTheDay.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Global/DealOfTheDay/DealOfTheDay.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout='row wrap' class=\"col-gap\" *ngIf=\"singleProduct\">\r\n   <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n     <div class=\"detail-thumb text-center\">\r\n       <mat-grid-list cols=\"1\" rowHeight=\"1:1\">\r\n         <mat-grid-tile>\r\n           <a class=\"p-link\" [routerLink]=\"['/products', singleProduct?.type, singleProduct?.id]\">\r\n             <img width=\"626\" height=\"800\" [src]=\"singleProduct?.image\" alt=\"Deal Of The Day\">\r\n           </a>\r\n         </mat-grid-tile>\r\n       </mat-grid-list>\r\n     </div>\r\n   </div>\r\n   <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n     <div class=\"detail-content mb-5\">\r\n       <h2 class=\"font-normal\">Deal of the day</h2>\r\n       <h5 class=\"font-normal\">{{singleProduct?.name}}</h5>\r\n       <p>\r\n         <del class=\"mr-2\">{{singleProduct?.price | currency:currency}}</del>\r\n         <span class=\"accent-color\">Now Only {{singleProduct?.discount_price | currency:currency}}</span>\r\n       </p>\r\n       <p>{{singleProduct?.description}}</p>\r\n       \r\n       <embryo-TimerCountDown [dateTime]=\"counterDateTime\"></embryo-TimerCountDown>\r\n       <div>\r\n         <button mat-raised-button color=\"accent\" [routerLink]=\"['/products', singleProduct?.type, singleProduct?.id]\">Shop Now</button>\r\n       </div>\r\n     </div>\r\n     <mat-grid-list cols=\"3\" rowHeight=\"1:1\" gutterSize=\"20px\" class=\"mat-gallery-grid\">\r\n       <ng-container *ngFor=\"let path of singleProduct?.image_gallery; let i=index\">\r\n         <ng-container *ngIf=\"i < 3\">\r\n            <mat-grid-tile id=\"{{i}}_img\" class=\"selected_img\" [ngClass]=\"{ 'border-active': i === 0 }\">\r\n              <a class=\"p-link\" href=\"javascript:void(0)\" (click)=\"getOfferImagePath(path, i)\">\r\n                <img width=\"626\" height=\"800\" alt=\"deal of the day grid\" src=\"{{path}}\" alt=\"\">\r\n              </a>\r\n            </mat-grid-tile>\r\n         </ng-container>\r\n       </ng-container>\r\n     </mat-grid-list>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Global/DealOfTheDay/DealOfTheDay.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Global/DealOfTheDay/DealOfTheDay.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-gallery-grid .mat-grid-tile {\n  border-radius: 7px; }\n\n.mat-gallery-grid .mat-grid-tile.border-active {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvR2xvYmFsL0RlYWxPZlRoZURheS9DOlxcVXNlcnNcXERoaW5ha2FyIFJlZGR5XFxEZXNrdG9wXFxTaG9wcGluZyBNYWpvciBQcm9qZWN0L3NyY1xcYXBwXFxHbG9iYWxcXERlYWxPZlRoZURheVxcRGVhbE9mVGhlRGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsK0dBQWlHLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9HbG9iYWwvRGVhbE9mVGhlRGF5L0RlYWxPZlRoZURheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZ2FsbGVyeS1ncmlke1xyXG4gICAgLm1hdC1ncmlkLXRpbGV7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1ncmlkLXRpbGUuYm9yZGVyLWFjdGl2ZXtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/Global/DealOfTheDay/DealOfTheDay.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Global/DealOfTheDay/DealOfTheDay.component.ts ***!
  \***************************************************************/
/*! exports provided: DealOfTheDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealOfTheDayComponent", function() { return DealOfTheDayComponent; });
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

var DealOfTheDayComponent = /** @class */ (function () {
    function DealOfTheDayComponent() {
        this.counterDateTime = new Date(new Date().setHours(20, 0, 0, 0));
    }
    DealOfTheDayComponent.prototype.ngOnInit = function () {
    };
    /**
     * getOfferImagePath is used to change the image path on click event.
     */
    DealOfTheDayComponent.prototype.getOfferImagePath = function (imgPath, index) {
        $('.selected_img').removeClass('border-active');
        this.singleProduct.image = imgPath;
        $('#' + index + '_img').addClass('border-active');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DealOfTheDayComponent.prototype, "singleProduct", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DealOfTheDayComponent.prototype, "currency", void 0);
    DealOfTheDayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-DealOfTheDay',
            template: __webpack_require__(/*! ./DealOfTheDay.component.html */ "./src/app/Global/DealOfTheDay/DealOfTheDay.component.html"),
            styles: [__webpack_require__(/*! ./DealOfTheDay.component.scss */ "./src/app/Global/DealOfTheDay/DealOfTheDay.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DealOfTheDayComponent);
    return DealOfTheDayComponent;
}());



/***/ }),

/***/ "./src/app/Global/DownloadAppSection/DownloadAppSection.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Global/DownloadAppSection/DownloadAppSection.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"download-app py-2\">\r\n   <div class=\"container text-center\">\r\n      <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n         <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\" class=\"py-4 download-app-list\">\r\n         <a href=\"javascript:void();\">   <h4 class=\"mb-0 font-bold\"><img class=\"mr-3\" src=\"assets/images/apple.png\" alt=\"16 x 16\" width=\"22\" height=\"22\"> Download iOS App </h4></a>\r\n         </div>\r\n\r\n         <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\" class=\"py-4 download-app-list\">\r\n           <a href=\"javascript:void();\"> <h4 class=\"mb-0 font-bold\"><img class=\"mr-3\" src=\"assets/images/android-logo.png\" alt=\"16 x 16\" width=\"22\" height=\"22\"> Download Android App </h4></a>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Global/DownloadAppSection/DownloadAppSection.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/Global/DownloadAppSection/DownloadAppSection.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9Eb3dubG9hZEFwcFNlY3Rpb24vRG93bmxvYWRBcHBTZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Global/DownloadAppSection/DownloadAppSection.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Global/DownloadAppSection/DownloadAppSection.component.ts ***!
  \***************************************************************************/
/*! exports provided: DownloadAppSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadAppSectionComponent", function() { return DownloadAppSectionComponent; });
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

var DownloadAppSectionComponent = /** @class */ (function () {
    function DownloadAppSectionComponent() {
    }
    DownloadAppSectionComponent.prototype.ngOnInit = function () {
    };
    DownloadAppSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-DownloadAppSection',
            template: __webpack_require__(/*! ./DownloadAppSection.component.html */ "./src/app/Global/DownloadAppSection/DownloadAppSection.component.html"),
            styles: [__webpack_require__(/*! ./DownloadAppSection.component.scss */ "./src/app/Global/DownloadAppSection/DownloadAppSection.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadAppSectionComponent);
    return DownloadAppSectionComponent;
}());



/***/ }),

/***/ "./src/app/Global/Features/Features.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Global/Features/Features.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\r\n  <div fxLayout='row wrap' fxLayoutGap=\"0px\" class=\"feature-list\">\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33.33\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\r\n      <div class=\"feature-inner p-4\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" >\r\n          <div>\r\n            <img src=\"assets/images/free-delivery.png\" alt=\" \" width=\"50\" height=\"50\">\r\n          </div>\r\n          <div class=\"px-4\">\r\n            <h6 class=\"text-md\">FREE SHIPPING</h6>\r\n            <h5 class=\"text-lg\">Every Day, Every Order</h5>\r\n            <span class=\"text-muted text-md\">*All rder over $100</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33.33\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\r\n      <div class=\"feature-inner p-4\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" >\r\n          <div>\r\n            <img src=\"assets/images/customer-support.png\" alt=\" \" width=\"50\" height=\"50\">\r\n          </div>\r\n          <div class=\"px-4\">\r\n            <h6 class=\"text-md\">FRIENDLY SUPPORT</h6>\r\n            <h5 class=\"text-lg\">24/7 Dedicated Support</h5>\r\n            <span class=\"text-muted text-md\">*Only In USA</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33.33\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\r\n      <div class=\"feature-inner p-4\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n          <div>\r\n            <img src=\"assets/images/money-back.png\" alt=\" \" width=\"50\" height=\"50\">\r\n          </div>\r\n          <div class=\"px-4\">\r\n            <h6 class=\"text-md\">SECURE</h6>\r\n            <h5 class=\"text-lg\">Money Back Guranteed</h5>\r\n            <span class=\"text-muted text-md\">*Conditions Apply</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/Global/Features/Features.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Global/Features/Features.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 960px) {\n  .feature-list > div {\n    border-right: 2px solid #eee; }\n    .feature-list > div:last-child {\n      border-right: 0; } }\n\n@media (max-width: 960px) {\n  .feature-list {\n    border-bottom: 1px solid #eee; }\n    .feature-list .feature-inner > div {\n      display: block !important;\n      margin: 0 auto;\n      text-align: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvR2xvYmFsL0ZlYXR1cmVzL0M6XFxVc2Vyc1xcRGhpbmFrYXIgUmVkZHlcXERlc2t0b3BcXFNob3BwaW5nIE1ham9yIFByb2plY3Qvc3JjXFxhcHBcXEdsb2JhbFxcRmVhdHVyZXNcXEZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFFSSw0QkFBNEIsRUFBQTtJQUZoQztNQUtNLGVBQWUsRUFBQSxFQUNoQjs7QUFJUDtFQUNHO0lBQ0csNkJBQTZCLEVBQUE7SUFEaEM7TUFJTSx5QkFBd0I7TUFDeEIsY0FBYztNQUNkLGtCQUFpQixFQUFBLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvR2xvYmFsL0ZlYXR1cmVzL0ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1pbi13aWR0aDo5NjBweCkge1xyXG4gIC5mZWF0dXJlLWxpc3Qge1xyXG4gICAgPmRpdiB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNlZWU7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjk2MHB4KXtcclxuICAgLmZlYXR1cmUtbGlzdHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgLmZlYXR1cmUtaW5uZXJ7XHJcbiAgICAgID5kaXZ7XHJcbiAgICAgICAgIGRpc3BsYXk6YmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgfVxyXG4gICBcclxuICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Global/Features/Features.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Global/Features/Features.component.ts ***!
  \*******************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
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

var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-Features',
            template: __webpack_require__(/*! ./Features.component.html */ "./src/app/Global/Features/Features.component.html"),
            styles: [__webpack_require__(/*! ./Features.component.scss */ "./src/app/Global/Features/Features.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/Global/Global.module.ts":
/*!*****************************************!*\
  !*** ./src/app/Global/Global.module.ts ***!
  \*****************************************/
/*! exports provided: GlobalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalModule", function() { return GlobalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bar-rating */ "./node_modules/ngx-bar-rating/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _BrandsLogo_BrandsLogo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BrandsLogo/BrandsLogo.component */ "./src/app/Global/BrandsLogo/BrandsLogo.component.ts");
/* harmony import */ var _Sales_Sales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Sales/Sales.component */ "./src/app/Global/Sales/Sales.component.ts");
/* harmony import */ var _Features_Features_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Features/Features.component */ "./src/app/Global/Features/Features.component.ts");
/* harmony import */ var _Subscribe_SubscribeOne_SubscribeOne_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Subscribe/SubscribeOne/SubscribeOne.component */ "./src/app/Global/Subscribe/SubscribeOne/SubscribeOne.component.ts");
/* harmony import */ var _DealOfTheDay_DealOfTheDay_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DealOfTheDay/DealOfTheDay.component */ "./src/app/Global/DealOfTheDay/DealOfTheDay.component.ts");
/* harmony import */ var _SocialShare_SocialShare_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SocialShare/SocialShare.component */ "./src/app/Global/SocialShare/SocialShare.component.ts");
/* harmony import */ var _Rating_Rating_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Rating/Rating.component */ "./src/app/Global/Rating/Rating.component.ts");
/* harmony import */ var _AddToCardButton_AddToCardButton_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AddToCardButton/AddToCardButton.component */ "./src/app/Global/AddToCardButton/AddToCardButton.component.ts");
/* harmony import */ var _ReviewPopup_ReviewPopup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ReviewPopup/ReviewPopup.component */ "./src/app/Global/ReviewPopup/ReviewPopup.component.ts");
/* harmony import */ var _HeaderCart_HeaderCart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./HeaderCart/HeaderCart.component */ "./src/app/Global/HeaderCart/HeaderCart.component.ts");
/* harmony import */ var _WishList_WishList_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./WishList/WishList.component */ "./src/app/Global/WishList/WishList.component.ts");
/* harmony import */ var _ConfirmationPopup_ConfirmationPopup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ConfirmationPopup/ConfirmationPopup.component */ "./src/app/Global/ConfirmationPopup/ConfirmationPopup.component.ts");
/* harmony import */ var _PageTitle_PageTitle_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PageTitle/PageTitle.component */ "./src/app/Global/PageTitle/PageTitle.component.ts");
/* harmony import */ var _Slider_HomePageOneSlider_HomePageOneSlider_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Slider/HomePageOneSlider/HomePageOneSlider.component */ "./src/app/Global/Slider/HomePageOneSlider/HomePageOneSlider.component.ts");
/* harmony import */ var _TimerCountDown_TimerCountDown_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./TimerCountDown/TimerCountDown.component */ "./src/app/Global/TimerCountDown/TimerCountDown.component.ts");
/* harmony import */ var _Map_Map_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Map/Map.component */ "./src/app/Global/Map/Map.component.ts");
/* harmony import */ var _CurrencyDropDown_CurrencyDropDown_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./CurrencyDropDown/CurrencyDropDown.component */ "./src/app/Global/CurrencyDropDown/CurrencyDropDown.component.ts");
/* harmony import */ var _LanguageDropDown_LanguageDropDown_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./LanguageDropDown/LanguageDropDown.component */ "./src/app/Global/LanguageDropDown/LanguageDropDown.component.ts");
/* harmony import */ var _Testimonial_Testimonial_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Testimonial/Testimonial.component */ "./src/app/Global/Testimonial/Testimonial.component.ts");
/* harmony import */ var _Team_Team_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Team/Team.component */ "./src/app/Global/Team/Team.component.ts");
/* harmony import */ var _ContactForm_ContactForm_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ContactForm/ContactForm.component */ "./src/app/Global/ContactForm/ContactForm.component.ts");
/* harmony import */ var _MissionVision_MissionVision_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./MissionVision/MissionVision.component */ "./src/app/Global/MissionVision/MissionVision.component.ts");
/* harmony import */ var _AboutInfo_AboutInfo_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./AboutInfo/AboutInfo.component */ "./src/app/Global/AboutInfo/AboutInfo.component.ts");
/* harmony import */ var _ImgZoom_ImgZoom_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ImgZoom/ImgZoom.component */ "./src/app/Global/ImgZoom/ImgZoom.component.ts");
/* harmony import */ var _CommonSignIn_CommonSignIn_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./CommonSignIn/CommonSignIn.component */ "./src/app/Global/CommonSignIn/CommonSignIn.component.ts");
/* harmony import */ var _ProductCard_ProductCard_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ProductCard/ProductCard.component */ "./src/app/Global/ProductCard/ProductCard.component.ts");
/* harmony import */ var _HeaderUserProfileDropdown_HeaderUserProfileDropdown_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./HeaderUserProfileDropdown/HeaderUserProfileDropdown.component */ "./src/app/Global/HeaderUserProfileDropdown/HeaderUserProfileDropdown.component.ts");
/* harmony import */ var _AppLogo_AppLogo_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./AppLogo/AppLogo.component */ "./src/app/Global/AppLogo/AppLogo.component.ts");
/* harmony import */ var _LighteningDeals_LighteningDeals_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./LighteningDeals/LighteningDeals.component */ "./src/app/Global/LighteningDeals/LighteningDeals.component.ts");
/* harmony import */ var _TopProducts_TopProducts_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./TopProducts/TopProducts.component */ "./src/app/Global/TopProducts/TopProducts.component.ts");
/* harmony import */ var _Subscribe_SubscribeTwo_SubscribeTwo_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Subscribe/SubscribeTwo/SubscribeTwo.component */ "./src/app/Global/Subscribe/SubscribeTwo/SubscribeTwo.component.ts");
/* harmony import */ var _Slider_HomePageTwoSlider_HomePageTwoSlider_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Slider/HomePageTwoSlider/HomePageTwoSlider.component */ "./src/app/Global/Slider/HomePageTwoSlider/HomePageTwoSlider.component.ts");
/* harmony import */ var _CallToAction_CTA_Group_CTA_Group_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./CallToAction/CTA-Group/CTA-Group.component */ "./src/app/Global/CallToAction/CTA-Group/CTA-Group.component.ts");
/* harmony import */ var _CallToAction_CTA_Two_CTA_Two_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./CallToAction/CTA-Two/CTA-Two.component */ "./src/app/Global/CallToAction/CTA-Two/CTA-Two.component.ts");
/* harmony import */ var _CollectionGallery_CollectionGallery_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./CollectionGallery/CollectionGallery.component */ "./src/app/Global/CollectionGallery/CollectionGallery.component.ts");
/* harmony import */ var _ProductCategoryCard_ProductCategoryCard_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ProductCategoryCard/ProductCategoryCard.component */ "./src/app/Global/ProductCategoryCard/ProductCategoryCard.component.ts");
/* harmony import */ var _CallToAction_CTA_SingleBanner_CTA_SingleBanner_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./CallToAction/CTA-SingleBanner/CTA-SingleBanner.component */ "./src/app/Global/CallToAction/CTA-SingleBanner/CTA-SingleBanner.component.ts");
/* harmony import */ var _DownloadAppSection_DownloadAppSection_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./DownloadAppSection/DownloadAppSection.component */ "./src/app/Global/DownloadAppSection/DownloadAppSection.component.ts");
/* harmony import */ var _Slider_HomePageThreeSlider_HomePageThreeSlider_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Slider/HomePageThreeSlider/HomePageThreeSlider.component */ "./src/app/Global/Slider/HomePageThreeSlider/HomePageThreeSlider.component.ts");
/* harmony import */ var _NewProductsCard_NewProductsCard_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./NewProductsCard/NewProductsCard.component */ "./src/app/Global/NewProductsCard/NewProductsCard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































var GlobalModule = /** @class */ (function () {
    function GlobalModule() {
    }
    GlobalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                ngx_bar_rating__WEBPACK_IMPORTED_MODULE_5__["BarRatingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyC9PnuRk42kbCPMOvsfHpn40r5SoyN38zI',
                    libraries: ['places']
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"]
            ],
            declarations: [
                _BrandsLogo_BrandsLogo_component__WEBPACK_IMPORTED_MODULE_9__["BrandslogoComponent"],
                _Sales_Sales_component__WEBPACK_IMPORTED_MODULE_10__["SalesComponent"],
                _Features_Features_component__WEBPACK_IMPORTED_MODULE_11__["FeaturesComponent"],
                _Subscribe_SubscribeOne_SubscribeOne_component__WEBPACK_IMPORTED_MODULE_12__["SubscribeOneComponent"],
                _DealOfTheDay_DealOfTheDay_component__WEBPACK_IMPORTED_MODULE_13__["DealOfTheDayComponent"],
                _SocialShare_SocialShare_component__WEBPACK_IMPORTED_MODULE_14__["SocialShareComponent"],
                _Rating_Rating_component__WEBPACK_IMPORTED_MODULE_15__["RatingComponent"],
                _AddToCardButton_AddToCardButton_component__WEBPACK_IMPORTED_MODULE_16__["AddToCardButtonComponent"],
                _ReviewPopup_ReviewPopup_component__WEBPACK_IMPORTED_MODULE_17__["ReviewPopupComponent"],
                _HeaderCart_HeaderCart_component__WEBPACK_IMPORTED_MODULE_18__["HeaderCartComponent"],
                _WishList_WishList_component__WEBPACK_IMPORTED_MODULE_19__["WishListComponent"],
                _ConfirmationPopup_ConfirmationPopup_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationPopupComponent"],
                _PageTitle_PageTitle_component__WEBPACK_IMPORTED_MODULE_21__["PageTitleComponent"],
                _Slider_HomePageOneSlider_HomePageOneSlider_component__WEBPACK_IMPORTED_MODULE_22__["HomePageOneSliderComponent"],
                _TimerCountDown_TimerCountDown_component__WEBPACK_IMPORTED_MODULE_23__["TimerCountDownComponent"],
                _Map_Map_component__WEBPACK_IMPORTED_MODULE_24__["MapComponent"],
                _CurrencyDropDown_CurrencyDropDown_component__WEBPACK_IMPORTED_MODULE_25__["CurrencyDropDownComponent"],
                _LanguageDropDown_LanguageDropDown_component__WEBPACK_IMPORTED_MODULE_26__["LanguageDropDownComponent"],
                _Testimonial_Testimonial_component__WEBPACK_IMPORTED_MODULE_27__["TestimonialComponent"],
                _Team_Team_component__WEBPACK_IMPORTED_MODULE_28__["TeamComponent"],
                _ContactForm_ContactForm_component__WEBPACK_IMPORTED_MODULE_29__["ContactFormComponent"],
                _MissionVision_MissionVision_component__WEBPACK_IMPORTED_MODULE_30__["MissionVisionComponent"],
                _AboutInfo_AboutInfo_component__WEBPACK_IMPORTED_MODULE_31__["AboutInfoComponent"],
                _ImgZoom_ImgZoom_component__WEBPACK_IMPORTED_MODULE_32__["ImgZoomComponent"],
                _CommonSignIn_CommonSignIn_component__WEBPACK_IMPORTED_MODULE_33__["CommonSignInComponent"],
                _ProductCard_ProductCard_component__WEBPACK_IMPORTED_MODULE_34__["ProductCardComponent"],
                _HeaderUserProfileDropdown_HeaderUserProfileDropdown_component__WEBPACK_IMPORTED_MODULE_35__["HeaderUserProfileDropdownComponent"],
                _AppLogo_AppLogo_component__WEBPACK_IMPORTED_MODULE_36__["AppLogoComponent"],
                _LighteningDeals_LighteningDeals_component__WEBPACK_IMPORTED_MODULE_37__["LighteningDealsComponent"],
                _TopProducts_TopProducts_component__WEBPACK_IMPORTED_MODULE_38__["TopProductsComponent"],
                _Subscribe_SubscribeTwo_SubscribeTwo_component__WEBPACK_IMPORTED_MODULE_39__["SubscribeTwoComponent"],
                _Slider_HomePageTwoSlider_HomePageTwoSlider_component__WEBPACK_IMPORTED_MODULE_40__["HomePageTwoSliderComponent"],
                _CallToAction_CTA_Group_CTA_Group_component__WEBPACK_IMPORTED_MODULE_41__["CTAGroupComponent"],
                _CallToAction_CTA_Two_CTA_Two_component__WEBPACK_IMPORTED_MODULE_42__["CTATwoComponent"],
                _CollectionGallery_CollectionGallery_component__WEBPACK_IMPORTED_MODULE_43__["CollectionGalleryComponent"],
                _ProductCategoryCard_ProductCategoryCard_component__WEBPACK_IMPORTED_MODULE_44__["ProductCategoryCardComponent"],
                _CallToAction_CTA_SingleBanner_CTA_SingleBanner_component__WEBPACK_IMPORTED_MODULE_45__["CTASingleBannerComponent"],
                _DownloadAppSection_DownloadAppSection_component__WEBPACK_IMPORTED_MODULE_46__["DownloadAppSectionComponent"],
                _Slider_HomePageThreeSlider_HomePageThreeSlider_component__WEBPACK_IMPORTED_MODULE_47__["HomePageThreeSliderComponent"],
                _NewProductsCard_NewProductsCard_component__WEBPACK_IMPORTED_MODULE_48__["NewProductsCardComponent"]
            ],
            exports: [
                _BrandsLogo_BrandsLogo_component__WEBPACK_IMPORTED_MODULE_9__["BrandslogoComponent"],
                _Sales_Sales_component__WEBPACK_IMPORTED_MODULE_10__["SalesComponent"],
                _Features_Features_component__WEBPACK_IMPORTED_MODULE_11__["FeaturesComponent"],
                _Subscribe_SubscribeOne_SubscribeOne_component__WEBPACK_IMPORTED_MODULE_12__["SubscribeOneComponent"],
                _DealOfTheDay_DealOfTheDay_component__WEBPACK_IMPORTED_MODULE_13__["DealOfTheDayComponent"],
                _SocialShare_SocialShare_component__WEBPACK_IMPORTED_MODULE_14__["SocialShareComponent"],
                _Rating_Rating_component__WEBPACK_IMPORTED_MODULE_15__["RatingComponent"],
                _AddToCardButton_AddToCardButton_component__WEBPACK_IMPORTED_MODULE_16__["AddToCardButtonComponent"],
                _HeaderCart_HeaderCart_component__WEBPACK_IMPORTED_MODULE_18__["HeaderCartComponent"],
                _WishList_WishList_component__WEBPACK_IMPORTED_MODULE_19__["WishListComponent"],
                _PageTitle_PageTitle_component__WEBPACK_IMPORTED_MODULE_21__["PageTitleComponent"],
                _Slider_HomePageOneSlider_HomePageOneSlider_component__WEBPACK_IMPORTED_MODULE_22__["HomePageOneSliderComponent"],
                _TimerCountDown_TimerCountDown_component__WEBPACK_IMPORTED_MODULE_23__["TimerCountDownComponent"],
                _Map_Map_component__WEBPACK_IMPORTED_MODULE_24__["MapComponent"],
                _CurrencyDropDown_CurrencyDropDown_component__WEBPACK_IMPORTED_MODULE_25__["CurrencyDropDownComponent"],
                _LanguageDropDown_LanguageDropDown_component__WEBPACK_IMPORTED_MODULE_26__["LanguageDropDownComponent"],
                _Testimonial_Testimonial_component__WEBPACK_IMPORTED_MODULE_27__["TestimonialComponent"],
                _Team_Team_component__WEBPACK_IMPORTED_MODULE_28__["TeamComponent"],
                _ContactForm_ContactForm_component__WEBPACK_IMPORTED_MODULE_29__["ContactFormComponent"],
                _MissionVision_MissionVision_component__WEBPACK_IMPORTED_MODULE_30__["MissionVisionComponent"],
                _AboutInfo_AboutInfo_component__WEBPACK_IMPORTED_MODULE_31__["AboutInfoComponent"],
                _ImgZoom_ImgZoom_component__WEBPACK_IMPORTED_MODULE_32__["ImgZoomComponent"],
                _CommonSignIn_CommonSignIn_component__WEBPACK_IMPORTED_MODULE_33__["CommonSignInComponent"],
                _ProductCard_ProductCard_component__WEBPACK_IMPORTED_MODULE_34__["ProductCardComponent"],
                _HeaderUserProfileDropdown_HeaderUserProfileDropdown_component__WEBPACK_IMPORTED_MODULE_35__["HeaderUserProfileDropdownComponent"],
                _AppLogo_AppLogo_component__WEBPACK_IMPORTED_MODULE_36__["AppLogoComponent"],
                _LighteningDeals_LighteningDeals_component__WEBPACK_IMPORTED_MODULE_37__["LighteningDealsComponent"],
                _TopProducts_TopProducts_component__WEBPACK_IMPORTED_MODULE_38__["TopProductsComponent"],
                _Subscribe_SubscribeTwo_SubscribeTwo_component__WEBPACK_IMPORTED_MODULE_39__["SubscribeTwoComponent"],
                _Slider_HomePageTwoSlider_HomePageTwoSlider_component__WEBPACK_IMPORTED_MODULE_40__["HomePageTwoSliderComponent"],
                _CallToAction_CTA_Group_CTA_Group_component__WEBPACK_IMPORTED_MODULE_41__["CTAGroupComponent"],
                _CallToAction_CTA_Two_CTA_Two_component__WEBPACK_IMPORTED_MODULE_42__["CTATwoComponent"],
                _CollectionGallery_CollectionGallery_component__WEBPACK_IMPORTED_MODULE_43__["CollectionGalleryComponent"],
                _ProductCategoryCard_ProductCategoryCard_component__WEBPACK_IMPORTED_MODULE_44__["ProductCategoryCardComponent"],
                _CallToAction_CTA_SingleBanner_CTA_SingleBanner_component__WEBPACK_IMPORTED_MODULE_45__["CTASingleBannerComponent"],
                _DownloadAppSection_DownloadAppSection_component__WEBPACK_IMPORTED_MODULE_46__["DownloadAppSectionComponent"],
                _Slider_HomePageThreeSlider_HomePageThreeSlider_component__WEBPACK_IMPORTED_MODULE_47__["HomePageThreeSliderComponent"],
                _NewProductsCard_NewProductsCard_component__WEBPACK_IMPORTED_MODULE_48__["NewProductsCardComponent"]
            ],
            entryComponents: [
                _ReviewPopup_ReviewPopup_component__WEBPACK_IMPORTED_MODULE_17__["ReviewPopupComponent"],
                _ConfirmationPopup_ConfirmationPopup_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationPopupComponent"]
            ]
        })
    ], GlobalModule);
    return GlobalModule;
}());



/***/ }),

/***/ "./src/app/Global/HeaderCart/HeaderCart.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Global/HeaderCart/HeaderCart.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ng-container *ngIf=\"(mobWidth >= mobScreenSize) else elseButtonBlock\">\r\n  <button mat-mini-fab [matMenuTriggerFor]=\"viewdropmenu\" [matBadgeHidden]=\"hiddenBadge\" matBadge=\"{{count}}\" matBadgePosition=\"after\" matBadgeColor=\"accent\">\r\n      <i class=\"material-icons notranslate\">\r\n        shopping_cart\r\n      </i>\r\n  </button>\r\n\r\n  <mat-menu #viewdropmenu=\"matMenu\">\r\n    <ng-container *ngIf=\"(cartProducts && cartProducts.length > 0); else elseBlock\">\r\n      <div class=\"drop-wrap\">\r\n      <div fxFlex=\"row wrap\" class=\"cart-menu-list p-2\" fxLayoutAlign=\"start center\" *ngFor=\"let product of cartProducts;\">\r\n        <div fxFlex.xs=\"25\" fxFlex.sm=\"25\" fxFlex.md=\"25\" fxFlex.lg=\"25\" fxFlex.xl=\"25\"> <a href=\"javascript:void(0);\"><img [src]=\"product?.image\" width=\"60\" alt=\"cart-image\"></a> </div>\r\n        <div fxFlex.xs=\"75\" fxFlex.sm=\"75\" fxFlex.md=\"75\" fxFlex.lg=\"75\" fxFlex.xl=\"75\" class=\"px-2\">\r\n          <h6 class=\"mb-0\"><a href=\"javascript:void(0);\">{{product?.name}}</a></h6>\r\n          <span>{{calculatePrice(product) | currency:currency }}</span>\r\n        </div>\r\n        <div fxFlex.xs=\"35\" fxFlex.sm=\"35\" fxFlex.md=\"35\" fxFlex.lg=\"35\" fxFlex.xl=\"35\" class=\"cart-menu-action\">\r\n          <button mat-mini-fab mat-raised-button color=\"primary\" (click)=\"confirmationPopup(product)\"> <i class=\"material-icons\">\r\n              remove_shopping_cart\r\n            </i> </button>\r\n            <button mat-mini-fab mat-raised-button color=\"primary\" [routerLink]=\"['/cart']\"><i class=\"material-icons\">\r\n              edit\r\n            </i></button>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"footer-menu px-3 pb-2 pt-2\">\r\n        <button mat-raised-button color=\"accent\" class=\"w-100\" [routerLink]=\"['/checkout']\">Checkout</button>\r\n      </div>\r\n    </ng-container>\r\n    <ng-template #elseBlock>\r\n      <div class=\"cart-menu-list p-2\" fxLayoutAlign=\"center center\">\r\n        No Product Found.\r\n      </div>\r\n    </ng-template>\r\n  </mat-menu>\r\n</ng-container>\r\n\r\n<ng-template #elseButtonBlock>\r\n  <button mat-mini-fab [matBadgeHidden]=\"hiddenBadge\" matBadge=\"{{count}}\" matBadgePosition=\"after\" matBadgeColor=\"accent\" [routerLink]=\"['/cart']\">\r\n      <i class=\"material-icons notranslate\">\r\n        shopping_cart\r\n      </i>\r\n  </button>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/Global/HeaderCart/HeaderCart.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Global/HeaderCart/HeaderCart.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9IZWFkZXJDYXJ0L0hlYWRlckNhcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Global/HeaderCart/HeaderCart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Global/HeaderCart/HeaderCart.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCartComponent", function() { return HeaderCartComponent; });
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

var HeaderCartComponent = /** @class */ (function () {
    function HeaderCartComponent() {
        this.mobScreenSize = 767;
        this.removeProductData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hiddenBadge = true;
        this.mobWidth = window.screen.width;
    }
    HeaderCartComponent.prototype.ngOnInit = function () {
    };
    HeaderCartComponent.prototype.ngOnChanges = function () {
        if (this.count && this.count !== 0) {
            this.hiddenBadge = false;
        }
        else {
            this.hiddenBadge = true;
        }
    };
    HeaderCartComponent.prototype.confirmationPopup = function (product) {
        this.removeProductData.emit(product);
    };
    HeaderCartComponent.prototype.calculatePrice = function (product) {
        var total = null;
        total = product.price * product.quantity;
        return total;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderCartComponent.prototype, "cartProducts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderCartComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderCartComponent.prototype, "currency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HeaderCartComponent.prototype, "removeProductData", void 0);
    HeaderCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-HeaderCart',
            template: __webpack_require__(/*! ./HeaderCart.component.html */ "./src/app/Global/HeaderCart/HeaderCart.component.html"),
            styles: [__webpack_require__(/*! ./HeaderCart.component.scss */ "./src/app/Global/HeaderCart/HeaderCart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderCartComponent);
    return HeaderCartComponent;
}());



/***/ }),

/***/ "./src/app/Global/HeaderUserProfileDropdown/HeaderUserProfileDropdown.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/Global/HeaderUserProfileDropdown/HeaderUserProfileDropdown.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-mini-fab class=\"log-in-user\" [matMenuTriggerFor]=\"loginuser\">\r\n  <img src=\"assets/images/log-in-user.jpg\" width=\"250\" height=\"250\" alt=\"log-in-user\">\r\n</button>\r\n<mat-menu #loginuser=\"matMenu\">\r\n  <button mat-menu-item fxLayoutAlign=\"start center\" [routerLink]=\"['/account/profile']\"><i class=\"material-icons mr-1\">account_circle</i> <span>Profile</span>\r\n  </button>\r\n  <button mat-menu-item [routerLink]=\"['/account/profile']\"><i class=\"material-icons mr-1\">settings</i><span>Account</span></button>\r\n  <button mat-menu-item [routerLink]=\"['/account/profile']\"> <i class=\"material-icons mr-1\">local_post_office</i> <span>Messages</span></button>\r\n  <button mat-menu-item [routerLink]=\"['/session/signin']\"><i class=\"material-icons mr-1\">power_settings_new</i><span>Logout</span></button>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "./src/app/Global/HeaderUserProfileDropdown/HeaderUserProfileDropdown.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/Global/HeaderUserProfileDropdown/HeaderUserProfileDropdown.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9IZWFkZXJVc2VyUHJvZmlsZURyb3Bkb3duL0hlYWRlclVzZXJQcm9maWxlRHJvcGRvd24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Global/HeaderUserProfileDropdown/HeaderUserProfileDropdown.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/Global/HeaderUserProfileDropdown/HeaderUserProfileDropdown.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: HeaderUserProfileDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderUserProfileDropdownComponent", function() { return HeaderUserProfileDropdownComponent; });
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

var HeaderUserProfileDropdownComponent = /** @class */ (function () {
    function HeaderUserProfileDropdownComponent() {
    }
    HeaderUserProfileDropdownComponent.prototype.ngOnInit = function () {
    };
    HeaderUserProfileDropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-HeaderUserProfileDropdown',
            template: __webpack_require__(/*! ./HeaderUserProfileDropdown.component.html */ "./src/app/Global/HeaderUserProfileDropdown/HeaderUserProfileDropdown.component.html"),
            styles: [__webpack_require__(/*! ./HeaderUserProfileDropdown.component.scss */ "./src/app/Global/HeaderUserProfileDropdown/HeaderUserProfileDropdown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderUserProfileDropdownComponent);
    return HeaderUserProfileDropdownComponent;
}());



/***/ }),

/***/ "./src/app/Global/ImgZoom/ImgZoom.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Global/ImgZoom/ImgZoom.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"img-zoom-container\" #container *ngIf=\"imgSrc\">\r\n    <img id=\"myimage\" [src]=\"imgSrc\" #img>\r\n    <div  [ngClass]=\"{'hide': hide}\" \r\n        id=\"myresult\" \r\n        class=\"img-zoom-result\" \r\n        #result>\r\n    </div>\r\n</div>  \r\n"

/***/ }),

/***/ "./src/app/Global/ImgZoom/ImgZoom.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/Global/ImgZoom/ImgZoom.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n.img-zoom-container {\n  position: absolute; }\n\n.img-zoom-lens {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  /*set the size of the lens:*/\n  width: 40px;\n  height: 40px; }\n\n.img-zoom-result {\n  border: 1px solid #d4d4d4;\n  /*set the size of the result div:*/\n  width: 300px;\n  height: 300px; }\n\n.hide {\n  visibility: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvR2xvYmFsL0ltZ1pvb20vQzpcXFVzZXJzXFxEaGluYWthciBSZWRkeVxcRGVza3RvcFxcU2hvcHBpbmcgTWFqb3IgUHJvamVjdC9zcmNcXGFwcFxcR2xvYmFsXFxJbWdab29tXFxJbWdab29tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUcsc0JBQXNCLEVBQUE7O0FBRXpCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw0QkFBQTtFQUNBLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBeUI7RUFDekIsa0NBQUE7RUFDQSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9HbG9iYWwvSW1nWm9vbS9JbWdab29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblxyXG4uaW1nLXpvb20tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5pbWctem9vbS1sZW5zIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcclxuICAvKnNldCB0aGUgc2l6ZSBvZiB0aGUgbGVuczoqL1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmltZy16b29tLXJlc3VsdCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcclxuICAvKnNldCB0aGUgc2l6ZSBvZiB0aGUgcmVzdWx0IGRpdjoqL1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/Global/ImgZoom/ImgZoom.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Global/ImgZoom/ImgZoom.component.ts ***!
  \*****************************************************/
/*! exports provided: ImgZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgZoomComponent", function() { return ImgZoomComponent; });
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

var ImgZoomComponent = /** @class */ (function () {
    function ImgZoomComponent(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.hide = true;
        this._triggerAnimationIn = false;
        this.notFirstTime = false;
        this.imgStyle = '';
        this.resultStyle = 'width:300px; height:300px';
        this.lensStyle = 'width:30px; height:30px';
        this.containerStyle = 'position: absolute';
    }
    Object.defineProperty(ImgZoomComponent.prototype, "_imgSrc", {
        set: function (val) {
            this.imgSrc = val;
            if (this.notFirstTime === true) {
                this.renderer.setStyle(this.result, 'backgroundImage', 'url(\'' + val + '\')');
            }
            this.notFirstTime = true;
            // this.renderer.setStyle(this.result, 'backgroundImage', val);
        },
        enumerable: true,
        configurable: true
    });
    ImgZoomComponent.prototype.ngOnInit = function () {
    };
    // tslint:disable-next-line:use-life-cycle-interface
    ImgZoomComponent.prototype.ngAfterViewInit = function () {
        this.img = this.imgElmRef.nativeElement;
        this.result = this.resultElmRef.nativeElement;
        this.container = this.containerElmRef.nativeElement;
        this.renderer.setAttribute(this.img, 'style', this.imgStyle);
        this.renderer.setAttribute(this.result, 'style', this.resultStyle);
        this.renderer.setAttribute(this.container, 'style', this.containerStyle);
        this.imageZoom();
        this.renderer.setStyle(this.lens, 'visibility', 'hidden');
    };
    ImgZoomComponent.prototype.imageZoom = function () {
        /*create lens:*/
        this.lens = this.renderer.createElement('DIV');
        this.renderer.addClass(this.lens, 'img-zoom-lens');
        this.renderer.setAttribute(this.lens, 'style', this.lensStyle);
        /*insert lens:*/
        this.renderer.insertBefore(this.img.parentElement, this.lens, this.img);
        /*calculate the ratio between result DIV and lens:*/
        this.cx = this.result.offsetWidth / this.lens.offsetWidth;
        this.cy = this.result.offsetHeight / this.lens.offsetHeight;
        /*set background properties for the result DIV:*/
        this.renderer.setStyle(this.result, 'backgroundImage', 'url(\'' + this.imgSrc + '\')');
        this.renderer.setStyle(this.result, 'backgroundSize', (this.img.width * this.cx) + 'px ' + (this.img.height * this.cy) + 'px');
        // this.renderer.setStyle(this.img.parentElement, 'position', 'relative')
        /*execute a function when someone moves the cursor over the image, or the lens:*/
        this.renderer.listen(this.lens, 'mousemove', this.moveLens.bind(this));
        this.renderer.listen(this.img, 'mousemove', this.moveLens.bind(this));
        /*and also for touch screens:*/
        this.renderer.listen(this.img, 'touchmove', this.moveLens.bind(this));
        this.renderer.listen(this.lens, 'touchmove', this.moveLens.bind(this));
    };
    ImgZoomComponent.prototype.moveLens = function (e) {
        var pos, x, y;
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = this.getCursorPos(e);
        /*calculate the position of the lens:*/
        x = pos.x - (this.lens.offsetWidth / 2);
        y = pos.y - (this.lens.offsetHeight / 2);
        /*prevent the lens from being positioned outside the image:*/
        if (x > this.img.width - this.lens.offsetWidth) {
            x = this.img.width - this.lens.offsetWidth;
            this.hide = true;
            this.renderer.setStyle(this.lens, 'visibility', 'hidden');
        }
        else {
            this.hide = false;
            this.renderer.setStyle(this.lens, 'visibility', 'visible');
        }
        if (x < 0) {
            x = 0;
            this.hide = true;
            this.renderer.setStyle(this.lens, 'visibility', 'hidden');
        }
        if (y > this.img.height - this.lens.offsetHeight) {
            y = this.img.height - this.lens.offsetHeight;
            this.hide = true;
            this.renderer.setStyle(this.lens, 'visibility', 'hidden');
        }
        if (y < 0) {
            y = 0;
            this.hide = true;
            this.renderer.setStyle(this.lens, 'visibility', 'hidden');
        }
        /*set the position of the lens:*/
        this.renderer.setStyle(this.lens, 'left', x + 'px');
        this.renderer.setStyle(this.lens, 'top', y + 'px');
        /*display what the lens 'sees':*/
        this.renderer.setStyle(this.result, 'backgroundPosition', '-' + (x * this.cx) + 'px -' + (y * this.cy) + 'px');
    };
    ImgZoomComponent.prototype.getCursorPos = function (e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = this.img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('img'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImgZoomComponent.prototype, "imgElmRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('result'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImgZoomComponent.prototype, "resultElmRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImgZoomComponent.prototype, "containerElmRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgZoomComponent.prototype, "imgStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgZoomComponent.prototype, "resultStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgZoomComponent.prototype, "lensStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgZoomComponent.prototype, "containerStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('imgSrc'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ImgZoomComponent.prototype, "_imgSrc", null);
    ImgZoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-ImgZoom',
            template: __webpack_require__(/*! ./ImgZoom.component.html */ "./src/app/Global/ImgZoom/ImgZoom.component.html"),
            styles: [__webpack_require__(/*! ./ImgZoom.component.scss */ "./src/app/Global/ImgZoom/ImgZoom.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ImgZoomComponent);
    return ImgZoomComponent;
}());



/***/ }),

/***/ "./src/app/Global/LanguageDropDown/LanguageDropDown.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Global/LanguageDropDown/LanguageDropDown.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-form-field>\r\n  <mat-select [(ngModel)]=\"currentLang\" (ngModelChange)=\"translate.use(currentLang)\">\r\n   <mat-option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\"> \r\n      <ng-container *ngFor=\"let customName of langArray\">\r\n         <ng-container *ngIf=\"customName.value == lang\">\r\n            {{customName.name}}\r\n         </ng-container>\r\n      </ng-container>\r\n   </mat-option>\r\n  </mat-select>\r\n</mat-form-field>"

/***/ }),

/***/ "./src/app/Global/LanguageDropDown/LanguageDropDown.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Global/LanguageDropDown/LanguageDropDown.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9MYW5ndWFnZURyb3BEb3duL0xhbmd1YWdlRHJvcERvd24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Global/LanguageDropDown/LanguageDropDown.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Global/LanguageDropDown/LanguageDropDown.component.ts ***!
  \***********************************************************************/
/*! exports provided: LanguageDropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageDropDownComponent", function() { return LanguageDropDownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageDropDownComponent = /** @class */ (function () {
    function LanguageDropDownComponent(translate) {
        this.translate = translate;
        this.currentLang = 'en';
        this.langArray = [
            {
                name: 'English',
                value: 'en'
            }, {
                name: 'French',
                value: 'fr'
            }
        ];
    }
    LanguageDropDownComponent.prototype.ngOnInit = function () {
    };
    LanguageDropDownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-LanguageDropDown',
            template: __webpack_require__(/*! ./LanguageDropDown.component.html */ "./src/app/Global/LanguageDropDown/LanguageDropDown.component.html"),
            styles: [__webpack_require__(/*! ./LanguageDropDown.component.scss */ "./src/app/Global/LanguageDropDown/LanguageDropDown.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], LanguageDropDownComponent);
    return LanguageDropDownComponent;
}());



/***/ }),

/***/ "./src/app/Global/LighteningDeals/LighteningDeals.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Global/LighteningDeals/LighteningDeals.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"section-gap pb-0\" *ngIf=\"lighteningDeals\">\r\n  <div class=\"container\">\r\n    <mat-toolbar color=\"primary\" style=\"height:220px\" class=\"section-title-toolbar\">\r\n      <mat-toolbar-row>\r\n        <div fxLayoutAlign=\"space-between\" class=\"w-100 toolbar-title\">\r\n          <div class=\"block-title\">\r\n            <h2 class=\"text-inverse mb-0 text-xxl\">Lightening Deals</h2>\r\n          </div>\r\n          <a [routerLink]=\"['/products']\" class=\"text-sm text-uppercase\">View All</a>\r\n        </div>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <div class=\"shop-card-gap px-4\">\r\n      <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\" fxFlex.lg=\"25\" fxFlex.xl=\"25\" *ngFor=\"let product of lighteningDeals\">\r\n          <mat-card class=\"box-shadow-md p-4\">\r\n            <a href=\"javascript:void(0)\">\r\n              <img [src]=\"product.image\" alt=\"Product\">\r\n            </a>\r\n            <mat-card-content class=\"pt-3\">\r\n              <h5><a [routerLink]=\"['/products']\"> {{product.name}}</a></h5>\r\n              <p class=\"text-muted\"> <a [routerLink]=\"['/products']\"> {{product.category}} </a></p>\r\n              <p class=\"accent-color\">UPTO 20% OFF</p>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Global/LighteningDeals/LighteningDeals.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Global/LighteningDeals/LighteningDeals.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9MaWdodGVuaW5nRGVhbHMvTGlnaHRlbmluZ0RlYWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Global/LighteningDeals/LighteningDeals.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Global/LighteningDeals/LighteningDeals.component.ts ***!
  \*********************************************************************/
/*! exports provided: LighteningDealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LighteningDealsComponent", function() { return LighteningDealsComponent; });
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

var LighteningDealsComponent = /** @class */ (function () {
    function LighteningDealsComponent() {
    }
    LighteningDealsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LighteningDealsComponent.prototype, "lighteningDeals", void 0);
    LighteningDealsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-LighteningDeals',
            template: __webpack_require__(/*! ./LighteningDeals.component.html */ "./src/app/Global/LighteningDeals/LighteningDeals.component.html"),
            styles: [__webpack_require__(/*! ./LighteningDeals.component.scss */ "./src/app/Global/LighteningDeals/LighteningDeals.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LighteningDealsComponent);
    return LighteningDealsComponent;
}());



/***/ }),

/***/ "./src/app/Global/Map/Map.component.html":
/*!***********************************************!*\
  !*** ./src/app/Global/Map/Map.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showMap && address\">\r\n   <agm-map [latitude]=\"mapOptions.lat\" [longitude]=\"mapOptions.lng\">\r\n      <agm-marker [latitude]=\"mapOptions.lat\" [longitude]=\"mapOptions.lng\" [iconUrl]=\"icon\">\r\n         <agm-info-window>\r\n            <div>\r\n               <span>{{address}}</span>\r\n            </div>\r\n         </agm-info-window>\r\n     </agm-marker>\r\n   </agm-map>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Global/Map/Map.component.scss":
/*!***********************************************!*\
  !*** ./src/app/Global/Map/Map.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9NYXAvTWFwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Global/Map/Map.component.ts":
/*!*********************************************!*\
  !*** ./src/app/Global/Map/Map.component.ts ***!
  \*********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
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

var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.mapOptions = {
            lat: 33.5362475,
            lng: -111.9267386,
            zoom: 10,
            fillColor: '#DC143C',
            draggable: true,
            editable: true,
            visible: true,
        };
        this.showMap = false;
        this.icon = {
            url: './assets/images/flag.svg',
            scaledSize: {
                width: 40,
                height: 60
            }
        };
    }
    MapComponent.prototype.ngOnInit = function () {
        if (this.address) {
            this.getLatitudeLongitude(this.address);
        }
    };
    MapComponent.prototype.getLatitudeLongitude = function (address) {
        // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
        address = address || 'Ferrol, Galicia, Spain';
        var NewMapOptions = this.mapOptions;
        // Initialize the Geocoder
        var geocoder = new google.maps.Geocoder();
        if (geocoder) {
            geocoder.geocode({
                'address': address
            }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    NewMapOptions.lat = results[0].geometry.location.lat();
                    NewMapOptions.lng = results[0].geometry.location.lng();
                }
            });
            this.mapOptions.lat = NewMapOptions.lat;
            this.mapOptions.lng = NewMapOptions.lng;
            this.showMap = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "address", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-Map',
            template: __webpack_require__(/*! ./Map.component.html */ "./src/app/Global/Map/Map.component.html"),
            styles: [__webpack_require__(/*! ./Map.component.scss */ "./src/app/Global/Map/Map.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/Global/MissionVision/MissionVision.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Global/MissionVision/MissionVision.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"data\">\r\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"col-gap alt-sec\" *ngFor=\"let singleData of data\">\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n      <img [src]=\"singleData.image\" height=\"700\" width=\"900\" alt=\"About us\" alt=\"\">\r\n    </div>\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\" class=\"p-5\">\r\n      <h2 class=\"font-bold\">\r\n        {{singleData?.heading}}\r\n      </h2>\r\n      <h5 class=\"font-italic\">{{singleData?.sub_heading}}</h5>\r\n      <p>{{singleData?.content}}</p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Global/MissionVision/MissionVision.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Global/MissionVision/MissionVision.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9NaXNzaW9uVmlzaW9uL01pc3Npb25WaXNpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Global/MissionVision/MissionVision.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Global/MissionVision/MissionVision.component.ts ***!
  \*****************************************************************/
/*! exports provided: MissionVisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionVisionComponent", function() { return MissionVisionComponent; });
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

var MissionVisionComponent = /** @class */ (function () {
    function MissionVisionComponent() {
    }
    MissionVisionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MissionVisionComponent.prototype, "data", void 0);
    MissionVisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-MissionVision',
            template: __webpack_require__(/*! ./MissionVision.component.html */ "./src/app/Global/MissionVision/MissionVision.component.html"),
            styles: [__webpack_require__(/*! ./MissionVision.component.scss */ "./src/app/Global/MissionVision/MissionVision.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MissionVisionComponent);
    return MissionVisionComponent;
}());



/***/ }),

/***/ "./src/app/Global/NewProductsCard/NewProductsCard.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Global/NewProductsCard/NewProductsCard.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card class=\"grid-card-v2\" *ngIf=\"product\">\r\n   <div class=\"mat-upper\">\r\n   <a class=\"p-link\" [routerLink]=\"['/products', product?.type, product?.id]\">\r\n     <span class=\"custom-badge\" *ngIf=\"product.popular\">Popular</span>\r\n     <img width=\"626\" height=\"800\" mat-card-image [src]=\"product?.image\" alt=\"Photo\">\r\n     <h6 class=\"price-tag-v2\">{{product?.price | currency: currency}}</h6>\r\n   </a>\r\n</div>\r\n  <mat-card-content class=\"product-content relative\">\r\n     <h5><a [routerLink]=\"['/products', product?.type, product?.id]\" class=\"title-link\">{{product?.name}}</a> </h5>\r\n      <div class=\"rating-star\">\r\n         <embryo-Rating [rate]=\"product.rating\"></embryo-Rating>\r\n      </div>\r\n     <div class=\"m-icon\">\r\n        <embryo-AddToCardButton [product]=\"product\" (addToCart)=\"addToCartProduct($event)\"></embryo-AddToCardButton>\r\n     </div>\r\n\r\n     \r\n  </mat-card-content>\r\n  <mat-card-footer>\r\n      <div fxLayoutAlign=\"space-between\">\r\n\r\n         <div><a (click)=\"productAddToWishlist(product)\"><i  class=\"material-icons\"> favorite </i></a></div>\r\n         <div><a [routerLink]=\"['/products', product?.type, product?.id]\"><i class=\"material-icons\">remove_red_eye</i></a></div>\r\n      </div>\r\n   </mat-card-footer>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/Global/NewProductsCard/NewProductsCard.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Global/NewProductsCard/NewProductsCard.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9OZXdQcm9kdWN0c0NhcmQvTmV3UHJvZHVjdHNDYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Global/NewProductsCard/NewProductsCard.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Global/NewProductsCard/NewProductsCard.component.ts ***!
  \*********************************************************************/
/*! exports provided: NewProductsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductsCardComponent", function() { return NewProductsCardComponent; });
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

var NewProductsCardComponent = /** @class */ (function () {
    function NewProductsCardComponent() {
        this.addToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addToWishlist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NewProductsCardComponent.prototype.ngOnInit = function () {
    };
    NewProductsCardComponent.prototype.addToCartProduct = function (value) {
        this.addToCart.emit(value);
    };
    NewProductsCardComponent.prototype.productAddToWishlist = function (value) {
        this.addToWishlist.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NewProductsCardComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NewProductsCardComponent.prototype, "currency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NewProductsCardComponent.prototype, "addToCart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NewProductsCardComponent.prototype, "addToWishlist", void 0);
    NewProductsCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-NewProductsCard',
            template: __webpack_require__(/*! ./NewProductsCard.component.html */ "./src/app/Global/NewProductsCard/NewProductsCard.component.html"),
            styles: [__webpack_require__(/*! ./NewProductsCard.component.scss */ "./src/app/Global/NewProductsCard/NewProductsCard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewProductsCardComponent);
    return NewProductsCardComponent;
}());



/***/ }),

/***/ "./src/app/Global/PageTitle/PageTitle.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Global/PageTitle/PageTitle.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-title-bar\">\r\n  <div class=\"container\">\r\n    <h1 class=\"mb-3\"> {{heading}}</h1>\r\n    <p class=\"lead text-xxl\"> {{subHeading}} </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Global/PageTitle/PageTitle.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Global/PageTitle/PageTitle.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9QYWdlVGl0bGUvUGFnZVRpdGxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Global/PageTitle/PageTitle.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Global/PageTitle/PageTitle.component.ts ***!
  \*********************************************************/
/*! exports provided: PageTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function() { return PageTitleComponent; });
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

var PageTitleComponent = /** @class */ (function () {
    function PageTitleComponent() {
    }
    PageTitleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageTitleComponent.prototype, "heading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageTitleComponent.prototype, "subHeading", void 0);
    PageTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-PageTitle',
            template: __webpack_require__(/*! ./PageTitle.component.html */ "./src/app/Global/PageTitle/PageTitle.component.html"),
            styles: [__webpack_require__(/*! ./PageTitle.component.scss */ "./src/app/Global/PageTitle/PageTitle.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageTitleComponent);
    return PageTitleComponent;
}());



/***/ }),

/***/ "./src/app/Global/ProductCard/ProductCard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Global/ProductCard/ProductCard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" *ngIf=\"product\">\r\n   <a class=\"p-link\" [routerLink]=\"['/products', product?.type, product?.id]\">\r\n     <img width=\"626\" height=\"800\" mat-card-image [src]=\"product?.image\" alt=\"Photo\">\r\n   </a>\r\n   <div class=\"wishlist-icon {{index}}-wishlist\">\r\n      <a (click)=\"productAddToWishlist(product, index+'-wishlist')\"><i  class=\"material-icons\"> favorite </i></a>\r\n   </div>\r\n  <mat-card-content class=\"product-content relative\">\r\n     <h5><a [routerLink]=\"['/products', product?.type, product?.id]\" class=\"title-link\">{{product?.name}}</a> </h5>\r\n     <div>\r\n        <div fxFlex fxLayoutAlign=\"space-between\">\r\n           <h6 class=\"accent-color\">{{product?.price | currency: currency}}</h6>\r\n           <div class=\"rating-star\">\r\n              <embryo-Rating [rate]=\"product.rating\"></embryo-Rating>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div class=\"m-icon\" *ngIf=\"checkCartAlready(product)\">\r\n      <embryo-AddToCardButton [product]=\"product\" (addToCart)=\"addToCartProduct($event)\"></embryo-AddToCardButton>\r\n     </div>\r\n     <div class=\"m-icon\" *ngIf=\"!checkCartAlready(product)\">\r\n         <button mat-fab [routerLink]=\"['/products', product?.type, product?.id]\"><i  class=\"material-icons\"> remove_red_eye </i></button>\r\n     </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Global/ProductCard/ProductCard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Global/ProductCard/ProductCard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9Qcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/ProductCard/ProductCard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Global/ProductCard/ProductCard.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
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

var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent() {
        this.addToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addToWishlist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    ProductCardComponent.prototype.addToCartProduct = function (value) {
        this.addToCart.emit(value);
    };
    ProductCardComponent.prototype.productAddToWishlist = function (value, parentClass) {
        if (!($('.' + parentClass).hasClass('wishlist-active'))) {
            $('.' + parentClass).addClass('wishlist-active');
        }
        this.addToWishlist.emit(value);
    };
    ProductCardComponent.prototype.checkCartAlready = function (singleProduct) {
        var products = JSON.parse(localStorage.getItem('cart_item')) || [];
        if (!products.some(function (item) { return item.id === singleProduct.id; })) {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductCardComponent.prototype, "currency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductCardComponent.prototype, "addToCart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductCardComponent.prototype, "addToWishlist", void 0);
    ProductCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-ProductCard',
            template: __webpack_require__(/*! ./ProductCard.component.html */ "./src/app/Global/ProductCard/ProductCard.component.html"),
            styles: [__webpack_require__(/*! ./ProductCard.component.scss */ "./src/app/Global/ProductCard/ProductCard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/Global/ProductCategoryCard/ProductCategoryCard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/Global/ProductCategoryCard/ProductCategoryCard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"category-v2-list\" *ngIf=\"productCategory && totalProducts\">\r\n  <div class=\"overlay-section-overlay category-v2-list-wrap relative\">\r\n    <img [src]=\"productCategory.image\" alt=\"category\">\r\n    <div class=\"category-v2-content\">\r\n      <h4> <a [routerLink]=\"['/products']\" class=\"text-inverse text-capitalize\">{{productCategory.category_type}}</a></h4>\r\n      <p class=\"mb-0 text-inverse\">{{totalProducts}} Products</p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Global/ProductCategoryCard/ProductCategoryCard.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/Global/ProductCategoryCard/ProductCategoryCard.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9Qcm9kdWN0Q2F0ZWdvcnlDYXJkL1Byb2R1Y3RDYXRlZ29yeUNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Global/ProductCategoryCard/ProductCategoryCard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Global/ProductCategoryCard/ProductCategoryCard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductCategoryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryCardComponent", function() { return ProductCategoryCardComponent; });
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

var ProductCategoryCardComponent = /** @class */ (function () {
    function ProductCategoryCardComponent() {
    }
    ProductCategoryCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductCategoryCardComponent.prototype, "productCategory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductCategoryCardComponent.prototype, "totalProducts", void 0);
    ProductCategoryCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-ProductCategoryCard',
            template: __webpack_require__(/*! ./ProductCategoryCard.component.html */ "./src/app/Global/ProductCategoryCard/ProductCategoryCard.component.html"),
            styles: [__webpack_require__(/*! ./ProductCategoryCard.component.scss */ "./src/app/Global/ProductCategoryCard/ProductCategoryCard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductCategoryCardComponent);
    return ProductCategoryCardComponent;
}());



/***/ }),

/***/ "./src/app/Global/Rating/Rating.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Global/Rating/Rating.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"rate\">\r\n   <bar-rating [(rate)]=\"rate\" max=\"5\" readOnly=true></bar-rating>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/Global/Rating/Rating.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Global/Rating/Rating.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9SYXRpbmcvUmF0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Global/Rating/Rating.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Global/Rating/Rating.component.ts ***!
  \***************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
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

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "rate", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-Rating',
            template: __webpack_require__(/*! ./Rating.component.html */ "./src/app/Global/Rating/Rating.component.html"),
            styles: [__webpack_require__(/*! ./Rating.component.scss */ "./src/app/Global/Rating/Rating.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/Global/ReviewPopup/ReviewPopup.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Global/ReviewPopup/ReviewPopup.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div fxLayoutAlign=\"space-between\" *ngIf=\"singleProductDetails\">\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"80\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n      <h4 class=\"primary-color\">{{singleProductDetails?.name}} </h4>\r\n      <p> {{singleProductDetails?.description}}</p>\r\n      <h3><embryo-Rating [rate]=\"singleProductDetails?.rating\"></embryo-Rating></h3>\r\n\r\n      <h5 *ngIf=\"reviews && reviews.length>0\">{{reviews.length}} Reviews</h5>\r\n    </div>\r\n    <div>\r\n      <button mat-raised-button color=\"accent\" class=\"button-lg\" (click)=\"dialogRef.close()\">Add Later</button>\r\n    </div>\r\n  </div>\r\n  <hr class=\"spacer\">\r\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"none\" class=\"col-gap\">\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\" *ngIf=\"reviews && reviews.length>0\">\r\n          <div class=\"user-list-wrap\">\r\n              <div class=\"user-list\" *ngFor=\"let userRate of reviews\">\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"none\" class=\"col-gap\">\r\n                  <div fxFlex.xs=\"100\" fxFlex.sm=\"20\" fxFlex.md=\"20\" fxFlex.lg=\"20\" fxFlex.xl=\"20\">\r\n                    <img class=\"round-radius\" [src]=\"userRate.img\" width=\"90\" alt=\"Review user\">\r\n                  </div>\r\n                  <div fxFlex.xs=\"100\" fxFlex.sm=\"80\" fxFlex.md=\"80\" fxFlex.lg=\"80\" fxFlex.xl=\"80\">\r\n                    <h6>{{userRate.name}}</h6>\r\n                    <div class=\"star\"></div><span>{{userRate.date}}</span>\r\n                    <p>{{userRate?.comment}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n      </div>\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n          <h4>Rate and Review</h4>\r\n          <form class=\"example-form\">\r\n              <mat-form-field class=\"w-100\">\r\n                <input matInput placeholder=\"Your Name\">\r\n              </mat-form-field>\r\n             \r\n              <mat-form-field class=\"w-100\">\r\n                <textarea matInput placeholder=\"Write Review\"></textarea>\r\n              </mat-form-field>\r\n              <button mat-raised-button color=\"accent\" class=\"button-lg\" (click)=\"dialogRef.close()\">Post Review</button>\r\n            </form>\r\n        </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/Global/ReviewPopup/ReviewPopup.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Global/ReviewPopup/ReviewPopup.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9SZXZpZXdQb3B1cC9SZXZpZXdQb3B1cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/ReviewPopup/ReviewPopup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Global/ReviewPopup/ReviewPopup.component.ts ***!
  \*************************************************************/
/*! exports provided: ReviewPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPopupComponent", function() { return ReviewPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewPopupComponent = /** @class */ (function () {
    function ReviewPopupComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ReviewPopupComponent.prototype.ngOnInit = function () {
    };
    ReviewPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'app-ReviewPopup',
            template: __webpack_require__(/*! ./ReviewPopup.component.html */ "./src/app/Global/ReviewPopup/ReviewPopup.component.html"),
            styles: [__webpack_require__(/*! ./ReviewPopup.component.scss */ "./src/app/Global/ReviewPopup/ReviewPopup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ReviewPopupComponent);
    return ReviewPopupComponent;
}());



/***/ }),

/***/ "./src/app/Global/Sales/Sales.component.html":
/*!***************************************************!*\
  !*** ./src/app/Global/Sales/Sales.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout='row wrap'>\r\n<div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\r\n  <a [routerLink]=\"['/products/women']\">\r\n    <div class=\"overlay-wrap\">\r\n      <a class=\"p-link\" href=\"javascript:void(0)\">\r\n        <img class=\"w-100\" src=\"assets/images/sale-1.jpg\" width=\"640\" height=\"430\" alt=\"Sale Call In Action\">\r\n      </a>\r\n      <div class=\"overlay-content primary-rgba\">\r\n        <div>\r\n          <h2>Sale</h2>\r\n          <h5>Women's Collection</h5>\r\n          <h3>50% Off</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a>\r\n</div>\r\n<div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\r\n  <a [routerLink]=\"['/products']\">\r\n    <div class=\"overlay-wrap\">\r\n        <a class=\"p-link\" href=\"javascript:void(0);\">\r\n      <img class=\"w-100\" src=\"assets/images/sale-2.jpg\" width=\"640\" height=\"430\" alt=\"Sale Call In Action\">\r\n      </a>\r\n      <div class=\"overlay-content black-rgba\">\r\n        <div>\r\n          <h6>New Arrival</h6>\r\n          <h2>Flat 50</h2>\r\n          <h5>Discount</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a>\r\n</div>\r\n<div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\r\n  <a [routerLink]=\"['/products/men']\">\r\n    <div class=\"overlay-wrap\">\r\n      <a class=\"p-link\" href=\"javascript:void(0)\">\r\n        <img class=\"w-100\" src=\"assets/images/sale-3.jpg\" width=\"640\" height=\"430\" alt=\"Sale Call In Action\">\r\n      </a>\r\n      <div class=\"overlay-content pink-rgba\">\r\n        <div>\r\n          <h2>Sale</h2>\r\n          <h5>Men's Collection</h5>\r\n          <h3>50% Off</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/Global/Sales/Sales.component.scss":
/*!***************************************************!*\
  !*** ./src/app/Global/Sales/Sales.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9TYWxlcy9TYWxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/Sales/Sales.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Global/Sales/Sales.component.ts ***!
  \*************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
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

var SalesComponent = /** @class */ (function () {
    function SalesComponent() {
    }
    SalesComponent.prototype.ngOnInit = function () {
    };
    SalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-Sales',
            template: __webpack_require__(/*! ./Sales.component.html */ "./src/app/Global/Sales/Sales.component.html"),
            styles: [__webpack_require__(/*! ./Sales.component.scss */ "./src/app/Global/Sales/Sales.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/app/Global/Slider/HomePageOneSlider/HomePageOneSlider.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/Global/Slider/HomePageOneSlider/HomePageOneSlider.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-slick-carousel class=\"carousel\" [config]=\"slideConfig\">\r\n   <div ngxSlickItem>\r\n      <div class=\"bannerStyle slider-img-1\">\r\n         <div class=\"ngx-slider-content\">\r\n            <div class=\"ngx-slider-inner\">\r\n               <h2>Big Sale</h2>\r\n               <h1>Women's Summer Collection</h1>\r\n               <button color=\"accent\" mat-raised-button [routerLink]=\"['/products/women']\">Shop Now</button>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div ngxSlickItem>\r\n      <div class=\"bannerStyle slider-img-2\">\r\n         <div class=\"ngx-slider-content\">\r\n            <div class=\"ngx-slider-inner\">\r\n               <h2>50% Off</h2>\r\n               <h1>Men's Winter Collection</h1>\r\n               <button color=\"accent\" mat-raised-button [routerLink]=\"['/products/men']\">Shop Now</button>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div ngxSlickItem>\r\n      <div class=\"bannerStyle slider-img-3\">\r\n         <div class=\"ngx-slider-content\">\r\n            <div class=\"ngx-slider-inner\">\r\n               <h2>Today's Special</h2>\r\n               <h1>Sale On Jackets</h1>\r\n               <button color=\"accent\" mat-raised-button [routerLink]=\"['/products/men']\">Shop Now</button>\r\n            </div>\r\n         </div>\r\n     </div>\r\n   </div>\r\n</ngx-slick-carousel>\r\n"

/***/ }),

/***/ "./src/app/Global/Slider/HomePageOneSlider/HomePageOneSlider.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/Global/Slider/HomePageOneSlider/HomePageOneSlider.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9TbGlkZXIvSG9tZVBhZ2VPbmVTbGlkZXIvSG9tZVBhZ2VPbmVTbGlkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Global/Slider/HomePageOneSlider/HomePageOneSlider.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Global/Slider/HomePageOneSlider/HomePageOneSlider.component.ts ***!
  \********************************************************************************/
/*! exports provided: HomePageOneSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageOneSliderComponent", function() { return HomePageOneSliderComponent; });
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

var HomePageOneSliderComponent = /** @class */ (function () {
    function HomePageOneSliderComponent() {
        this.isRTL = false;
    }
    HomePageOneSliderComponent.prototype.ngOnInit = function () {
    };
    HomePageOneSliderComponent.prototype.ngOnChanges = function () {
        this.slideConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            rtl: this.isRTL,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HomePageOneSliderComponent.prototype, "isRTL", void 0);
    HomePageOneSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-HomePageOneSlider',
            template: __webpack_require__(/*! ./HomePageOneSlider.component.html */ "./src/app/Global/Slider/HomePageOneSlider/HomePageOneSlider.component.html"),
            styles: [__webpack_require__(/*! ./HomePageOneSlider.component.scss */ "./src/app/Global/Slider/HomePageOneSlider/HomePageOneSlider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageOneSliderComponent);
    return HomePageOneSliderComponent;
}());



/***/ }),

/***/ "./src/app/Global/Slider/HomePageThreeSlider/HomePageThreeSlider.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/Global/Slider/HomePageThreeSlider/HomePageThreeSlider.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-5\">\r\n   <div class=\"container\"><ngx-slick-carousel class=\"carousel home-3-slider\" [config]=\"slideConfig\">\r\n   <div ngxSlickItem *ngFor=\"let slide of slides\">\r\n      <div class=\"text-center\">\r\n         <div class=\"relative\">\r\n            <img [src]=\"slide.img\" alt=\"\">\r\n            <div class=\"slider-content-v3\">\r\n               <div class=\"slider-content-v3-inner m-auto\">\r\n               <p class=\"text-inverse\">{{slide.content}}</p>\r\n               <h4 class=\"font-bold mb-4 text-inverse\">{{slide.heading_one}}</h4>\r\n               <!-- <h2 class=\"mb-4 text-inverse\">{{slide.heading_two}}</h2> -->\r\n               <button mat-raised-button [routerLink]=\"['/products']\">SHOP NOW</button>\r\n            </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</ngx-slick-carousel>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Global/Slider/HomePageThreeSlider/HomePageThreeSlider.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/Global/Slider/HomePageThreeSlider/HomePageThreeSlider.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9TbGlkZXIvSG9tZVBhZ2VUaHJlZVNsaWRlci9Ib21lUGFnZVRocmVlU2xpZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Global/Slider/HomePageThreeSlider/HomePageThreeSlider.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Global/Slider/HomePageThreeSlider/HomePageThreeSlider.component.ts ***!
  \************************************************************************************/
/*! exports provided: HomePageThreeSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageThreeSliderComponent", function() { return HomePageThreeSliderComponent; });
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

var HomePageThreeSliderComponent = /** @class */ (function () {
    function HomePageThreeSliderComponent() {
        this.isRTL = false;
        this.slides = [
            {
                img: 'assets/images/h-slider-1.jpg',
                content: '2018 Latest Collection',
                heading_one: 'New Fashion Collection',
            },
            {
                img: 'assets/images/h-slider-2.jpg',
                content: '2018 Latest Collection',
                heading_one: 'Summer Time Collection',
            },
            {
                img: 'assets/images/h-slider-3.jpg',
                content: '2018 Latest Collection',
                heading_one: 'Men\'s Suiting and Clothing',
            }
        ];
    }
    HomePageThreeSliderComponent.prototype.ngOnInit = function () {
    };
    HomePageThreeSliderComponent.prototype.ngOnChanges = function () {
        this.slideConfig = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            rtl: this.isRTL,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                }
            ]
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HomePageThreeSliderComponent.prototype, "isRTL", void 0);
    HomePageThreeSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-HomePageThreeSlider',
            template: __webpack_require__(/*! ./HomePageThreeSlider.component.html */ "./src/app/Global/Slider/HomePageThreeSlider/HomePageThreeSlider.component.html"),
            styles: [__webpack_require__(/*! ./HomePageThreeSlider.component.scss */ "./src/app/Global/Slider/HomePageThreeSlider/HomePageThreeSlider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageThreeSliderComponent);
    return HomePageThreeSliderComponent;
}());



/***/ }),

/***/ "./src/app/Global/Slider/HomePageTwoSlider/HomePageTwoSlider.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/Global/Slider/HomePageTwoSlider/HomePageTwoSlider.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-gap pt-3 pb-0\">\r\n<ngx-slick-carousel class=\"carousel home-2-slider\" [config]=\"slideConfig\">\r\n  <div ngxSlickItem *ngFor=\"let slide of slides\">\r\n    <div class=\"relative\">\r\n      <img [src]=\"slide.img\" alt=\"\" width=\"100%\">\r\n      <div class=\"home-2-slider-content\">\r\n        <div [innerHTML]=\"slide?.content\"></div>\r\n        <button color=\"accent\" mat-raised-button [routerLink]=\"['/products']\">Shop Now</button>\r\n      </div>\r\n   </div>\r\n  </div>\r\n</ngx-slick-carousel>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Global/Slider/HomePageTwoSlider/HomePageTwoSlider.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/Global/Slider/HomePageTwoSlider/HomePageTwoSlider.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9TbGlkZXIvSG9tZVBhZ2VUd29TbGlkZXIvSG9tZVBhZ2VUd29TbGlkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Global/Slider/HomePageTwoSlider/HomePageTwoSlider.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Global/Slider/HomePageTwoSlider/HomePageTwoSlider.component.ts ***!
  \********************************************************************************/
/*! exports provided: HomePageTwoSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageTwoSliderComponent", function() { return HomePageTwoSliderComponent; });
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

var HomePageTwoSliderComponent = /** @class */ (function () {
    function HomePageTwoSliderComponent() {
        this.slides = [
            {
                img: 'assets/images/home2-slider-1.jpg',
                // tslint:disable-next-line:max-line-length
                content: '<h4>New Arrival</h4><h1 class=\'text-main\'>Biggest Sale</h1><h1 class=\'text-bold mb-4\'>50% <sup class=\'bold-sup\'>Flat Off</sup></h1>'
            },
            {
                img: 'assets/images/home2-slider-2.jpg',
                // tslint:disable-next-line:max-line-length
                content: '<h4>Women\'s Special</h4><h1 class=\'text-main\'>Winter Sale </h1><h1 class=\'text-bold mb-4\'>40% <sup class=\'bold-sup\'>Off</sup></h1>'
            },
            {
                img: 'assets/images/home2-slider-3.jpg',
                // tslint:disable-next-line:max-line-length
                content: '<h4>Special Deal</h4><h1 class=\'text-main\'>Mens Collection</h1><h1 class=\'text-bold mb-4\'>30% <sup class=\'bold-sup\'>Off</sup></h1>'
            },
            {
                img: 'assets/images/home2-slider-4.jpg',
                // tslint:disable-next-line:max-line-length
                content: '<h4>Sunglasses</h4><h1 class=\'text-main\'>Weekly Offer</h1><h1 class=\'text-bold mb-4\'>30% <sup class=\'bold-sup\'>Off</sup></h1>'
            },
            {
                img: 'assets/images/home2-slider-5.jpg',
                // tslint:disable-next-line:max-line-length
                content: '<h4>New Arrival</h4><h1 class=\'text-main\'>Sports Shoes</h1><h1 class=\'text-bold mb-4\'>50% <sup class=\'bold-sup\'>Flat Off</sup></h1>'
            },
            {
                img: 'assets/images/home2-slider-6.jpg',
                // tslint:disable-next-line:max-line-length
                content: '<h4>Accessories</h4><h1 class=\'text-main\'>Smart Offer</h1><h1 class=\'text-bold mb-4\'>40% <sup class=\'bold-sup\'>Flat Off</sup></h1>'
            }
        ];
    }
    HomePageTwoSliderComponent.prototype.ngOnInit = function () {
    };
    HomePageTwoSliderComponent.prototype.ngOnChanges = function () {
        this.slideConfig = {
            infinite: true,
            centerMode: true,
            centerPadding: '400px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            rtl: this.isRTL,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '300px',
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '150px',
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 899,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '75px',
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: '0',
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: '0',
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                }
            ]
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HomePageTwoSliderComponent.prototype, "isRTL", void 0);
    HomePageTwoSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-HomePageTwoSlider',
            template: __webpack_require__(/*! ./HomePageTwoSlider.component.html */ "./src/app/Global/Slider/HomePageTwoSlider/HomePageTwoSlider.component.html"),
            styles: [__webpack_require__(/*! ./HomePageTwoSlider.component.scss */ "./src/app/Global/Slider/HomePageTwoSlider/HomePageTwoSlider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageTwoSliderComponent);
    return HomePageTwoSliderComponent;
}());



/***/ }),

/***/ "./src/app/Global/SocialShare/SocialShare.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Global/SocialShare/SocialShare.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<button mat-mini-fab color=\"primary\" class=\"mr-1\">\r\n  <i class=\"fab fa-facebook-f\"></i>\r\n</button>\r\n<button mat-mini-fab color=\"primary\" class=\"mr-1\">\r\n  <i class=\"fab fa-twitter\"></i>\r\n</button>\r\n<button mat-mini-fab color=\"primary\" class=\"mr-1\">\r\n  <i class=\"fab fa-google-plus-g\"></i>\r\n</button>\r\n<button mat-mini-fab color=\"primary\" class=\"mr-1\">\r\n  <i class=\"fab fa-instagram\"></i>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/Global/SocialShare/SocialShare.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Global/SocialShare/SocialShare.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9Tb2NpYWxTaGFyZS9Tb2NpYWxTaGFyZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/SocialShare/SocialShare.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Global/SocialShare/SocialShare.component.ts ***!
  \*************************************************************/
/*! exports provided: SocialShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialShareComponent", function() { return SocialShareComponent; });
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

var SocialShareComponent = /** @class */ (function () {
    function SocialShareComponent() {
    }
    SocialShareComponent.prototype.ngOnInit = function () {
    };
    SocialShareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-SocialShare',
            template: __webpack_require__(/*! ./SocialShare.component.html */ "./src/app/Global/SocialShare/SocialShare.component.html"),
            styles: [__webpack_require__(/*! ./SocialShare.component.scss */ "./src/app/Global/SocialShare/SocialShare.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialShareComponent);
    return SocialShareComponent;
}());



/***/ }),

/***/ "./src/app/Global/Subscribe/SubscribeOne/SubscribeOne.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Global/Subscribe/SubscribeOne/SubscribeOne.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\">\r\n  <div fxLayout.xs=\"100\" fxLayout.sm=\"100\" fxLayout.md=\"50\" fxLayout.lg=\"50\" fxLayout.xl=\"50\">\r\n    <div>\r\n      <h3>Subscribe our Newsletter</h3>\r\n      <p>Stay up to date with our latest new and products</p>\r\n    </div>\r\n  </div>\r\n  <div fxLayout.xs=\"100\" fxLayout.sm=\"100\" fxLayout.md=\"50\" fxLayout.lg=\"50\" fxLayout.xl=\"50\">\r\n    <form class=\"example-form\">\r\n      <div fxLayoutAlign=\"start center\">\r\n        <mat-form-field class=\"w-100\">\r\n          <input matInput placeholder=\"Your Email Address\">\r\n        </mat-form-field>\r\n        <button mat-icon-button>\r\n          <i class=\"material-icons\">send</i>\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Global/Subscribe/SubscribeOne/SubscribeOne.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Global/Subscribe/SubscribeOne/SubscribeOne.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9TdWJzY3JpYmUvU3Vic2NyaWJlT25lL1N1YnNjcmliZU9uZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/Subscribe/SubscribeOne/SubscribeOne.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Global/Subscribe/SubscribeOne/SubscribeOne.component.ts ***!
  \*************************************************************************/
/*! exports provided: SubscribeOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeOneComponent", function() { return SubscribeOneComponent; });
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

var SubscribeOneComponent = /** @class */ (function () {
    function SubscribeOneComponent() {
    }
    SubscribeOneComponent.prototype.ngOnInit = function () {
    };
    SubscribeOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-SubscribeOne',
            template: __webpack_require__(/*! ./SubscribeOne.component.html */ "./src/app/Global/Subscribe/SubscribeOne/SubscribeOne.component.html"),
            styles: [__webpack_require__(/*! ./SubscribeOne.component.scss */ "./src/app/Global/Subscribe/SubscribeOne/SubscribeOne.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscribeOneComponent);
    return SubscribeOneComponent;
}());



/***/ }),

/***/ "./src/app/Global/Subscribe/SubscribeTwo/SubscribeTwo.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Global/Subscribe/SubscribeTwo/SubscribeTwo.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-gap primary-bg subscribe-section-v2 relative\">\r\n  <div class=\"center-icon \">\r\n    <i class=\"material-icons\">\r\n      check_box\r\n    </i>\r\n  </div>\r\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n    <div fxLayout.xs=\"100\" fxLayout.sm=\"100\" fxLayout.md=\"50\" fxLayout.lg=\"50\" fxLayout.xl=\"50\">\r\n      <div>\r\n        <div>\r\n          <h3 class=\"text-inverse\">Subscribe our Newsletter</h3>\r\n          <p class=\"text-inverse\">Stay up to date with our latest new and products</p>\r\n        </div>\r\n        <div>\r\n          <form class=\"example-form\">\r\n            <div fxLayoutAlign=\"start center\">\r\n              <mat-form-field class=\"w-100\">\r\n                <input class=\"text-inverse\" matInput placeholder=\"Your Email Address\">\r\n              </mat-form-field>\r\n              <button mat-icon-button class=\"text-inverse\">\r\n                <i class=\"material-icons\">send</i>\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Global/Subscribe/SubscribeTwo/SubscribeTwo.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Global/Subscribe/SubscribeTwo/SubscribeTwo.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9TdWJzY3JpYmUvU3Vic2NyaWJlVHdvL1N1YnNjcmliZVR3by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/Subscribe/SubscribeTwo/SubscribeTwo.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Global/Subscribe/SubscribeTwo/SubscribeTwo.component.ts ***!
  \*************************************************************************/
/*! exports provided: SubscribeTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeTwoComponent", function() { return SubscribeTwoComponent; });
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

var SubscribeTwoComponent = /** @class */ (function () {
    function SubscribeTwoComponent() {
    }
    SubscribeTwoComponent.prototype.ngOnInit = function () {
    };
    SubscribeTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-SubscribeTwo',
            template: __webpack_require__(/*! ./SubscribeTwo.component.html */ "./src/app/Global/Subscribe/SubscribeTwo/SubscribeTwo.component.html"),
            styles: [__webpack_require__(/*! ./SubscribeTwo.component.scss */ "./src/app/Global/Subscribe/SubscribeTwo/SubscribeTwo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscribeTwoComponent);
    return SubscribeTwoComponent;
}());



/***/ }),

/***/ "./src/app/Global/Team/Team.component.html":
/*!*************************************************!*\
  !*** ./src/app/Global/Team/Team.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"data\">\r\n   <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\" *ngFor=\"let team of data\">\r\n      <div class=\"team-card mb-4\">\r\n        <img class=\"round-corner\" [src]=\"team.image\" width=\"200\" height=\"200\" alt=\"team-image\">\r\n      </div>\r\n      <h4 class=\"mb-0\">\r\n        {{team.name}}\r\n      </h4>\r\n      <p class=\"mb-4\">{{team.designation}}</p>\r\n      <p class=\"mb-4\">\r\n        {{team.description}}\r\n      </p>\r\n   </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/Global/Team/Team.component.scss":
/*!*************************************************!*\
  !*** ./src/app/Global/Team/Team.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9UZWFtL1RlYW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Global/Team/Team.component.ts":
/*!***********************************************!*\
  !*** ./src/app/Global/Team/Team.component.ts ***!
  \***********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
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

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "data", void 0);
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-Team',
            template: __webpack_require__(/*! ./Team.component.html */ "./src/app/Global/Team/Team.component.html"),
            styles: [__webpack_require__(/*! ./Team.component.scss */ "./src/app/Global/Team/Team.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/Global/Testimonial/Testimonial.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Global/Testimonial/Testimonial.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"data\">\r\n  <div class=\"block-title text-center\">\r\n    <h2 class=\"text-inverse\">{{data?.name}}</h2>\r\n  </div>\r\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"col-gap\">\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\r\n      <div class=\"testi-card-v2 mb-4\">\r\n        <img class=\"round-corner\" [src]=\"data.image\" width=\"200\" height=\"200\" alt=\"team-image\">\r\n      </div>\r\n      <h4 class=\"text-inverse mb-0\">{{data?.name}}</h4>\r\n      <p class=\"text-inverse\">{{data?.designation}}</p>\r\n      <p class=\"text-inverse testi-content\">{{data?.description}} </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Global/Testimonial/Testimonial.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Global/Testimonial/Testimonial.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9UZXN0aW1vbmlhbC9UZXN0aW1vbmlhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/Testimonial/Testimonial.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Global/Testimonial/Testimonial.component.ts ***!
  \*************************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
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

var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent() {
    }
    TestimonialComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TestimonialComponent.prototype, "data", void 0);
    TestimonialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-Testimonial',
            template: __webpack_require__(/*! ./Testimonial.component.html */ "./src/app/Global/Testimonial/Testimonial.component.html"),
            styles: [__webpack_require__(/*! ./Testimonial.component.scss */ "./src/app/Global/Testimonial/Testimonial.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialComponent);
    return TestimonialComponent;
}());



/***/ }),

/***/ "./src/app/Global/TimerCountDown/TimerCountDown.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Global/TimerCountDown/TimerCountDown.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"counter-wrapper\">\r\n  <div class=\"counter-item\">\r\n    <span class=\"counter-digit\">{{hours}}</span>\r\n    <span class=\"counter-text\">Hours</span>\r\n  </div>\r\n  <div class=\"counter-item\">\r\n    <span class=\"counter-digit\">{{minutes}}</span>\r\n    <span class=\"counter-text\">Minutes</span>\r\n  </div>\r\n  <div class=\"counter-item\">\r\n    <span class=\"counter-digit\">{{seconds}}</span>\r\n    <span class=\"counter-text\">Seconds</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Global/TimerCountDown/TimerCountDown.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Global/TimerCountDown/TimerCountDown.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9UaW1lckNvdW50RG93bi9UaW1lckNvdW50RG93bi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/TimerCountDown/TimerCountDown.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Global/TimerCountDown/TimerCountDown.component.ts ***!
  \*******************************************************************/
/*! exports provided: TimerCountDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerCountDownComponent", function() { return TimerCountDownComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimerCountDownComponent = /** @class */ (function () {
    function TimerCountDownComponent() {
    }
    TimerCountDownComponent.prototype.dhms = function (t) {
        if (t && t > 0) {
            var days = void 0, hours = void 0, minutes = void 0, seconds = void 0;
            days = Math.floor(t / 86400);
            t -= days * 86400;
            hours = Math.floor(t / 3600) % 24;
            t -= hours * 3600;
            minutes = Math.floor(t / 60) % 60;
            t -= minutes * 60;
            seconds = t % 60;
            if (hours < 10) {
                this.hours = '0' + hours;
            }
            else {
                this.hours = hours;
            }
            if (minutes < 10) {
                this.minutes = '0' + minutes;
            }
            else {
                this.minutes = minutes;
            }
            if (seconds < 10) {
                this.seconds = '0' + seconds;
            }
            else {
                this.seconds = seconds;
            }
        }
        else {
            this.hours = '00';
            this.minutes = '00';
            this.seconds = '00';
            this.subscription.unsubscribe();
        }
    };
    TimerCountDownComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dateTime) {
            this.future = this.dateTime;
            this.$counter = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
                _this.diff = Math.floor((_this.future.getTime() - new Date().getTime()) / 1000);
                return x;
            }));
            this.subscription = this.$counter.subscribe(function (x) { return _this.dhms(_this.diff); });
        }
    };
    TimerCountDownComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], TimerCountDownComponent.prototype, "dateTime", void 0);
    TimerCountDownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            // tslint:disable-next-line:component-selector
            // tslint:disable-next-line:indent
            // tslint:disable-next-line:component-selector
            selector: 'embryo-TimerCountDown',
            template: __webpack_require__(/*! ./TimerCountDown.component.html */ "./src/app/Global/TimerCountDown/TimerCountDown.component.html"),
            styles: [__webpack_require__(/*! ./TimerCountDown.component.scss */ "./src/app/Global/TimerCountDown/TimerCountDown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimerCountDownComponent);
    return TimerCountDownComponent;
}());



/***/ }),

/***/ "./src/app/Global/TopProducts/TopProducts.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Global/TopProducts/TopProducts.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-gap\" *ngIf=\"randomSortProducts && randomSortProducts.length > 0\">\r\n  <div class=\"container\">\r\n    <div fxLayoutAlign=\"space-between\" class=\"w-100 \">\r\n      <div class=\"block-title\">\r\n        <h3>Top Products</h3>\r\n      </div>\r\n      <a [routerLink]=\"['/products']\">View All</a>\r\n    </div>\r\n    <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n      <ng-container *ngFor=\"let product of randomSortProducts; let i=index\">\r\n      <div *ngIf=\"i < gridLength\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\" fxFlex.lg=\"25\" fxFlex.xl=\"25\" >\r\n        <mat-card class=\"box-shadow-md p-4\">\r\n          <a href=\"javascript:void(0)\">\r\n            <img [src]=\"product.image\" alt=\"Photo\">\r\n          </a>\r\n          <mat-card-content class=\"pt-3\">\r\n            <p class=\"text-muted mb-0\"> <a href=\"javascript:void(0)\">{{product?.category}}</a></p>\r\n            <h5><a href=\"javascript:void(0)\"> {{product?.name}}</a></h5>\r\n            <div fxLayoutAlign=\"space-between\">\r\n              <p class=\"accent-color\">{{product?.price | currency:currency}}</p>\r\n            </div>\r\n            <button *ngIf=\"product.status == 0\" mat-raised-button class=\"button-grey\" (click)=\"addToCartProduct(product)\">Add TO Cart</button>\r\n            <button *ngIf=\"product.status == 1\" mat-raised-button class=\"button-grey\" [routerLink]=\"['/cart']\">View Cart</button>\r\n          </mat-card-content>\r\n          <div class=\"offer-badge\">\r\n            <mat-chip color=\"accent\" selected>20% off</mat-chip>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n      </ng-container>\r\n    </div>\r\n    <a *ngIf=\"(gridLength < 12)\" class=\"btn btn-block transparent-btn\" (click)=\"extendGridStructure(true)\">Show All</a>\r\n    <a *ngIf=\"(gridLength != 4)\" class=\"btn btn-block transparent-btn\" (click)=\"extendGridStructure(false)\">Less</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Global/TopProducts/TopProducts.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Global/TopProducts/TopProducts.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9Ub3BQcm9kdWN0cy9Ub3BQcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/TopProducts/TopProducts.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Global/TopProducts/TopProducts.component.ts ***!
  \*************************************************************/
/*! exports provided: TopProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopProductsComponent", function() { return TopProductsComponent; });
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

var TopProductsComponent = /** @class */ (function () {
    function TopProductsComponent() {
        this.addToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gridLength = 4;
    }
    TopProductsComponent.prototype.ngOnInit = function () {
        if (this.products) {
            this.randomSortProducts = this.products.sort(function () { return Math.random() - 0.5; });
        }
    };
    TopProductsComponent.prototype.addToCartProduct = function (value) {
        value.status = 1;
        this.addToCart.emit(value);
    };
    TopProductsComponent.prototype.extendGridStructure = function (status) {
        if (status) {
            if (this.gridLength !== 12) {
                this.gridLength += 4;
            }
        }
        else {
            if (this.gridLength !== 4) {
                this.gridLength -= 4;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopProductsComponent.prototype, "products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopProductsComponent.prototype, "currency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TopProductsComponent.prototype, "addToCart", void 0);
    TopProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-TopProducts',
            template: __webpack_require__(/*! ./TopProducts.component.html */ "./src/app/Global/TopProducts/TopProducts.component.html"),
            styles: [__webpack_require__(/*! ./TopProducts.component.scss */ "./src/app/Global/TopProducts/TopProducts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TopProductsComponent);
    return TopProductsComponent;
}());



/***/ }),

/***/ "./src/app/Global/WishList/WishList.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Global/WishList/WishList.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<button mat-mini-fab [matMenuTriggerFor]=\"viewwishlist\" [matBadgeHidden]=\"hiddenBadge\" matBadge=\"{{count}}\" matBadgePosition=\"after\" matBadgeColor=\"accent\">\r\n  <i class=\"material-icons notranslate\">\r\n    favorite\r\n  </i>\r\n</button>\r\n\r\n<mat-menu #viewwishlist=\"matMenu\">\r\n  <ng-container *ngIf=\"(wishListProducts && wishListProducts.length > 0); else elseBlock\">\r\n      <div class=\"drop-wrap\">\r\n    <div class=\"cart-menu-list p-2\" fxLayoutAlign=\"start center\" *ngFor=\"let product of wishListProducts;\">\r\n      <div> <a href=\"javascript:void(0);\"><img [src]=\"product?.image\" width=\"60\" alt=\"cart-image\"></a> </div>\r\n      <div class=\"px-3\">\r\n        <h6 class=\"mb-0\"><a href=\"javascript:void(0);\">{{product?.name}}</a></h6>\r\n        <span>{{calculatePrice(product) | currency:currency}}</span>\r\n      </div>\r\n      <div class=\"cart-menu-action\">\r\n        <button mat-mini-fab mat-raised-button color=\"primary\" (click)=\"confirmationPopup(product)\"> <i class=\"material-icons\">\r\n            remove\r\n          </i> </button>\r\n        <button mat-mini-fab mat-raised-button color=\"primary\" (click)=\"addToCartProduct(product)\"><i class=\"material-icons\">\r\n         add_shopping_cart\r\n          </i></button>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"footer-menu px-3 py-2 pb-2\">\r\n      <button mat-raised-button color=\"accent\" class=\"w-100\" (click)=\"addAllToCart()\">Add All To Cart</button>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #elseBlock>\r\n    <div class=\"cart-menu-list p-2\" fxLayoutAlign=\"center center\">\r\n      No Product Found.\r\n    </div>\r\n  </ng-template>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "./src/app/Global/WishList/WishList.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Global/WishList/WishList.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0dsb2JhbC9XaXNoTGlzdC9XaXNoTGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Global/WishList/WishList.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Global/WishList/WishList.component.ts ***!
  \*******************************************************/
/*! exports provided: WishListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListComponent", function() { return WishListComponent; });
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

var WishListComponent = /** @class */ (function () {
    function WishListComponent() {
        this.removeWishListData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addAllWishlistToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hiddenBadge = true;
    }
    WishListComponent.prototype.ngOnInit = function () {
    };
    WishListComponent.prototype.ngOnChanges = function () {
        if (this.count && this.count !== 0) {
            this.hiddenBadge = false;
        }
        else {
            this.hiddenBadge = true;
        }
    };
    WishListComponent.prototype.confirmationPopup = function (product) {
        this.removeWishListData.emit(product);
    };
    WishListComponent.prototype.addAllToCart = function () {
        this.addAllWishlistToCart.emit(this.wishListProducts);
    };
    WishListComponent.prototype.calculatePrice = function (product) {
        var total = null;
        total = product.price * product.quantity;
        return total;
    };
    WishListComponent.prototype.addToCartProduct = function (product) {
        this.addToCart.emit(product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WishListComponent.prototype, "wishListProducts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], WishListComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WishListComponent.prototype, "currency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WishListComponent.prototype, "removeWishListData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WishListComponent.prototype, "addAllWishlistToCart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WishListComponent.prototype, "addToCart", void 0);
    WishListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-WishList',
            template: __webpack_require__(/*! ./WishList.component.html */ "./src/app/Global/WishList/WishList.component.html"),
            styles: [__webpack_require__(/*! ./WishList.component.scss */ "./src/app/Global/WishList/WishList.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WishListComponent);
    return WishListComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/Footer/FooterOne/FooterOne.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Layouts/Footer/FooterOne/FooterOne.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"footer-v1 section-gap\">\r\n    <div class=\"container\">\r\n      <div class=\"footer-top-v1\">\r\n        <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"40\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\r\n            <h6>About Company</h6>\r\n            <p>\r\n              E-commerce is the activity of buying or selling of products on online services or over the Internet. Electronic commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems.\r\n            </p>\r\n          </div>\r\n\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"25\" fxFlex.md=\"15\" fxFlex.lg=\"15\" fxFlex.xl=\"15\" *ngFor=\"let menu of menuItems.getFooterOneMenu()\">\r\n            <div>\r\n              <p>{{menu.name | translate}}</p>\r\n              <mat-list class=\"list-sm\" *ngFor=\"let subMenu of menu.children\">\r\n                <mat-list-item *ngIf=\"subMenu.type == 'link'\"><a [routerLink]=\"['/'+subMenu.state]\" routerLinkActive=\"active-link\"> {{subMenu.name | translate}}</a></mat-list-item>\r\n                <mat-list-item *ngIf=\"subMenu.type == 'social_link'\"><a href=\"{{subMenu.state}}\" target=\"_blank\"> {{subMenu.name | translate}}</a></mat-list-item>\r\n              </mat-list>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"footer-bottom-v1\">\r\n        <div fxLayout='row wrap' class=\"col-gap\">\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n            <img src=\"assets/images/cards.png\" width=\"218\" height=\"18\" alt=\"Credit Cards\">\r\n          </div>\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\" class=\"text-right\">\r\n            &copy; All Rights Reversed | Made With Love by <b> \" John Akshay\" </b> for better Web\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/Layouts/Footer/FooterOne/FooterOne.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Layouts/Footer/FooterOne/FooterOne.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xheW91dHMvRm9vdGVyL0Zvb3Rlck9uZS9Gb290ZXJPbmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Layouts/Footer/FooterOne/FooterOne.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Layouts/Footer/FooterOne/FooterOne.component.ts ***!
  \*****************************************************************/
/*! exports provided: FooterOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterOneComponent", function() { return FooterOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _Core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Core/menu/menu-items/menu-items */ "./src/app/Core/menu/menu-items/menu-items.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterOneComponent = /** @class */ (function () {
    function FooterOneComponent(menuItems, translate) {
        this.menuItems = menuItems;
        this.translate = translate;
    }
    FooterOneComponent.prototype.ngOnInit = function () {
    };
    FooterOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'FooterOne',
            template: __webpack_require__(/*! ./FooterOne.component.html */ "./src/app/Layouts/Footer/FooterOne/FooterOne.component.html"),
            styles: [__webpack_require__(/*! ./FooterOne.component.scss */ "./src/app/Layouts/Footer/FooterOne/FooterOne.component.scss")]
        }),
        __metadata("design:paramtypes", [_Core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], FooterOneComponent);
    return FooterOneComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/Footer/FooterTwo/FooterTwo.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Layouts/Footer/FooterTwo/FooterTwo.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  footer-two works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/Layouts/Footer/FooterTwo/FooterTwo.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Layouts/Footer/FooterTwo/FooterTwo.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xheW91dHMvRm9vdGVyL0Zvb3RlclR3by9Gb290ZXJUd28uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Layouts/Footer/FooterTwo/FooterTwo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Layouts/Footer/FooterTwo/FooterTwo.component.ts ***!
  \*****************************************************************/
/*! exports provided: FooterTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterTwoComponent", function() { return FooterTwoComponent; });
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

var FooterTwoComponent = /** @class */ (function () {
    function FooterTwoComponent() {
    }
    FooterTwoComponent.prototype.ngOnInit = function () {
    };
    FooterTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'FooterTwo',
            template: __webpack_require__(/*! ./FooterTwo.component.html */ "./src/app/Layouts/Footer/FooterTwo/FooterTwo.component.html"),
            styles: [__webpack_require__(/*! ./FooterTwo.component.scss */ "./src/app/Layouts/Footer/FooterTwo/FooterTwo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterTwoComponent);
    return FooterTwoComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/Header/FixedHeader/FixedHeader.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Layouts/Header/FixedHeader/FixedHeader.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"embryo-fixed-header\">\r\n  <mat-toolbar-row>\r\n    <div class=\"container\">\r\n      <div fxLayoutAlign=\"space-between\">\r\n        <div class=\"logo-site\">\r\n          <embryo-AppLogo></embryo-AppLogo>\r\n        </div>\r\n        <embryo-Menu></embryo-Menu>\r\n        <button class=\"responsive-toggle\" mat-icon-button (click)=\"toggleSidebar()\">\r\n          <i class=\"material-icons\">Menu</i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/Layouts/Header/FixedHeader/FixedHeader.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Layouts/Header/FixedHeader/FixedHeader.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xheW91dHMvSGVhZGVyL0ZpeGVkSGVhZGVyL0ZpeGVkSGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Layouts/Header/FixedHeader/FixedHeader.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Layouts/Header/FixedHeader/FixedHeader.component.ts ***!
  \*********************************************************************/
/*! exports provided: FixedHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedHeaderComponent", function() { return FixedHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FixedHeaderComponent = /** @class */ (function () {
    function FixedHeaderComponent(embryoService) {
        this.embryoService = embryoService;
    }
    FixedHeaderComponent.prototype.ngOnInit = function () {
    };
    FixedHeaderComponent.prototype.toggleSidebar = function () {
        this.embryoService.sidenavOpen = !this.embryoService.sidenavOpen;
    };
    FixedHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-FixedHeader',
            template: __webpack_require__(/*! ./FixedHeader.component.html */ "./src/app/Layouts/Header/FixedHeader/FixedHeader.component.html"),
            styles: [__webpack_require__(/*! ./FixedHeader.component.scss */ "./src/app/Layouts/Header/FixedHeader/FixedHeader.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"]])
    ], FixedHeaderComponent);
    return FixedHeaderComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/Header/HeaderOne/HeaderOne.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Layouts/Header/HeaderOne/HeaderOne.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"header-v1\">\r\n  <mat-toolbar-row class=\"header-v1-top\">\r\n    <div class=\"container\">\r\n      <div fxLayout=\"row wrap\" fxLayout=\"center center\">\r\n        <div fxHide.xs=\"true\" fxHide.sm=\"true\" fxHide.md=\"true\" fxFlex.md=\"33%\" fxFlex.lg=\"33%\" fxFlex.xl=\"33%\">\r\n          <div class=\"list-flex\">\r\n            <embryo-LanguageDropDown class=\"mr-3\"></embryo-LanguageDropDown>\r\n            <embryo-CurrencyDropDown [selectedValue]=\"embryoService?.currency\" (selectedCurrency)=\"selectedCurrency($event)\"></embryo-CurrencyDropDown>\r\n          </div>\r\n        </div>\r\n        <div class=\"logo-site\" fxFlex.xs=\"40\" fxFlex.sm=\"40\" fxFlex.md=\"50\" fxFlex.lg=\"33%\" fxFlex.xl=\"33%\">\r\n         <embryo-AppLogo></embryo-AppLogo>\r\n        </div>\r\n        <div fxFlex.xs=\"60\" fxFlex.sm=\"60\" fxFlex.md=\"50\" fxFlex.lg=\"33%\" fxFlex.xl=\"33%\">\r\n          <span fxFlex></span>\r\n          <div class=\"list-flex user-tool\">\r\n            <embryo-HeaderCart [currency]=\"embryoService?.currency\" [cartProducts]=\"embryoService?.localStorageCartProducts\" [count]=\"embryoService?.navbarCartCount\" (removeProductData)=\"openConfirmationPopup($event)\"></embryo-HeaderCart>\r\n\r\n            <embryo-WishList [currency]=\"embryoService?.currency\" [wishListProducts]=\"embryoService?.localStorageWishlist\" [count]=\"embryoService?.navbarWishlistProdCount\" (removeWishListData)=\"openWishlistConfirmationPopup($event)\" (addAllWishlistToCart)=\"addAllWishlistToCart($event)\" (addToCart)=\"addToCart($event)\"></embryo-WishList>\r\n            \r\n            <embryo-HeaderUserProfileDropdown></embryo-HeaderUserProfileDropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar-row>\r\n  <mat-toolbar-row class=\"header-v1-bottom main-menu-wrap\">\r\n    <div class=\"container\">\r\n      <div class=\"header-v1-bottom-inner\">\r\n        <embryo-Menu></embryo-Menu>\r\n        <div class=\"search-box\">\r\n          <button type=\"button\" mat-fab (click)=\"toggleSearch()\">\r\n            <i class=\"material-icons notranslate\">\r\n              search\r\n            </i>\r\n          </button>\r\n        </div>\r\n        <div class=\"search-form\">\r\n          <form>\r\n            <input type=\"text\" placeholder=\"Search and hit enter\">\r\n            <button type=\"button\" mat-fab class=\"close-btn\" (click)=\"toggleSearch()\">\r\n              <i class=\"material-icons\">\r\n                close\r\n              </i>\r\n            </button>\r\n          </form>\r\n        </div>\r\n        <button class=\"responsive-toggle\" mat-icon-button (click)=\"toggleSidebar()\">\r\n          <i class=\"material-icons\">menu</i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar-row>\r\n  <mat-toolbar-row class=\"responsive-bar relative\">\r\n      <div class=\"container\">\r\n        <div fxLayoutAlign=\"space-between\">\r\n       \r\n          <button class=\"responsive-toggle\" mat-icon-button (click)=\"toggleSidebar()\">\r\n            <i class=\"material-icons\">menu</i>\r\n          </button>\r\n          <div>\r\n              <div class=\"search-box-bar\">\r\n                <button type=\"button\" mat-mini-fab (click)=\"toggleSearch()\">\r\n                  <i class=\"material-icons notranslate\">\r\n                    search\r\n                  </i>\r\n                </button>\r\n              </div>\r\n              <div class=\"search-form\">\r\n                <form>\r\n                  <input type=\"text\" placeholder=\"Search and hit enter\">\r\n                  <button type=\"button\" mat-fab class=\"close-btn\" (click)=\"toggleSearch()\">\r\n                    <i class=\"material-icons\">\r\n                      close\r\n                    </i>\r\n                  </button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n<embryo-FixedHeader></embryo-FixedHeader>\r\n"

/***/ }),

/***/ "./src/app/Layouts/Header/HeaderOne/HeaderOne.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Layouts/Header/HeaderOne/HeaderOne.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".responsive-toggle {\n  display: none; }\n\n@media (max-width: 959px) {\n  .responsive-toggle {\n    display: block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGF5b3V0cy9IZWFkZXIvSGVhZGVyT25lL0M6XFxVc2Vyc1xcRGhpbmFrYXIgUmVkZHlcXERlc2t0b3BcXFNob3BwaW5nIE1ham9yIFByb2plY3Qvc3JjXFxhcHBcXExheW91dHNcXEhlYWRlclxcSGVhZGVyT25lXFxIZWFkZXJPbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUE7O0FBS2Y7RUFDRTtJQUNFLGNBQWMsRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvTGF5b3V0cy9IZWFkZXIvSGVhZGVyT25lL0hlYWRlck9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNwb25zaXZlLXRvZ2dsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjk1OXB4KSB7XHJcbiAgLnJlc3BvbnNpdmUtdG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/Layouts/Header/HeaderOne/HeaderOne.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Layouts/Header/HeaderOne/HeaderOne.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderOneComponent", function() { return HeaderOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderOneComponent = /** @class */ (function () {
    function HeaderOneComponent(embryoService) {
        this.embryoService = embryoService;
        this.toggleActive = false;
    }
    HeaderOneComponent.prototype.ngOnInit = function () {
    };
    HeaderOneComponent.prototype.toggleSearch = function () {
        $('app-main').toggleClass('form-open');
    };
    HeaderOneComponent.prototype.toggleSidebar = function () {
        this.embryoService.sidenavOpen = !this.embryoService.sidenavOpen;
    };
    HeaderOneComponent.prototype.openConfirmationPopup = function (value) {
        var _this = this;
        var message = 'Are you sure you want to delete this product?';
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value, 'cart'); });
    };
    HeaderOneComponent.prototype.getPopupResponse = function (response, value, type) {
        if (response) {
            if (type === 'cart') {
                this.embryoService.removeLocalCartProduct(value);
            }
            else {
                this.embryoService.removeLocalWishlistProduct(value);
            }
        }
    };
    HeaderOneComponent.prototype.addAllWishlistToCart = function (values) {
        this.embryoService.addAllWishListToCart(values);
    };
    HeaderOneComponent.prototype.openWishlistConfirmationPopup = function (value) {
        var _this = this;
        var message = 'Are you sure you want to add all products?';
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value, 'wishlist'); });
    };
    HeaderOneComponent.prototype.selectedCurrency = function (value) {
        this.embryoService.currency = value;
    };
    HeaderOneComponent.prototype.selectedLanguage = function (value) {
        this.embryoService.language = value;
    };
    HeaderOneComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value, 'wishlist');
    };
    HeaderOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'HeaderOne',
            template: __webpack_require__(/*! ./HeaderOne.component.html */ "./src/app/Layouts/Header/HeaderOne/HeaderOne.component.html"),
            styles: [__webpack_require__(/*! ./HeaderOne.component.scss */ "./src/app/Layouts/Header/HeaderOne/HeaderOne.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"]])
    ], HeaderOneComponent);
    return HeaderOneComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/Header/HeaderThree/HeaderThree.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Layouts/Header/HeaderThree/HeaderThree.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"header-v3\">\r\n  <mat-toolbar-row class=\"header-v3-top\">\r\n    <div class=\"container\">\r\n      <div fxLayout=\"row wrap\" class=\"w-100\">\r\n        <div header-v3-top-site fxFlex.md=\"33%\" fxFlex.lg=\"33%\" fxFlex.xl=\"33%\">\r\n          <div class=\"header-v3-top-tools\">\r\n            <span>Welcome to our store</span>\r\n            <embryo-LanguageDropDown></embryo-LanguageDropDown>\r\n            <embryo-CurrencyDropDown [selectedValue]=\"embryoService?.currency\" (selectedCurrency)=\"selectedCurrency($event)\"></embryo-CurrencyDropDown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex.xs=\"60\" fxFlex.sm=\"60\" fxFlex.md=\"50\" fxFlex.lg=\"33%\" fxFlex.xl=\"33%\">\r\n        <span fxFlex></span>\r\n        <div class=\"list-flex user-tool header-v3-top-tools\">\r\n          <embryo-HeaderCart [currency]=\"embryoService?.currency\" [cartProducts]=\"embryoService?.localStorageCartProducts\"\r\n            [count]=\"embryoService?.navbarCartCount\" (removeProductData)=\"openConfirmationPopup($event)\"></embryo-HeaderCart>\r\n\r\n          <embryo-WishList [currency]=\"embryoService?.currency\" [wishListProducts]=\"embryoService?.localStorageWishlist\"\r\n            [count]=\"embryoService?.navbarWishlistProdCount\" (removeWishListData)=\"openWishlistConfirmationPopup($event)\"\r\n            (addAllWishlistToCart)=\"addAllWishlistToCart($event)\" (addToCart)=\"addToCart($event)\"></embryo-WishList>\r\n\r\n          <embryo-HeaderUserProfileDropdown></embryo-HeaderUserProfileDropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar-row>\r\n  <mat-toolbar-row class=\"header-v3-middle\">\r\n    <div class=\"container\">\r\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" class=\"w-100\">\r\n        <div class=\"logo-site\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"33%\" fxFlex.xl=\"33%\">\r\n          <img src=\"assets/images/logo-dark.png\" alt=\"\" width=\"224\">\r\n        </div>\r\n        <div fxShow.xs=\"false\" fxShow.sm=\"false\"   fxFlex.md=\"50\" fxShow.sm=\"false\" fxFlex.lg=\"40%\" fxFlex.xl=\"33%\">\r\n          <form>\r\n            <input type=\"text\" placeholder=\"Search\">\r\n            <button type=\"button\" mat-fab>\r\n              <i class=\"material-icons\">search</i>\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar-row>\r\n  <mat-toolbar-row class=\"header-v3-bottom\">\r\n    <div class=\"container\">\r\n      <div class=\"header-v1-bottom-inner\">\r\n        <embryo-Menu></embryo-Menu>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar-row>\r\n  <mat-toolbar-row class=\"responsive-bar relative\">\r\n    <div class=\"container\">\r\n      <div fxLayoutAlign=\"space-between\">\r\n     \r\n        <button class=\"responsive-toggle\" mat-icon-button (click)=\"toggleSidebar()\">\r\n          <i class=\"material-icons\">menu</i>\r\n        </button>\r\n        <div>\r\n            <div class=\"search-box-bar\">\r\n              <button type=\"button\" mat-mini-fab (click)=\"toggleSearch()\">\r\n                <i class=\"material-icons notranslate\">\r\n                  search\r\n                </i>\r\n              </button>\r\n            </div>\r\n            <div class=\"search-form\">\r\n              <form>\r\n                <input type=\"text\" placeholder=\"Search and hit enter\">\r\n                <button type=\"button\" mat-fab class=\"close-btn\" (click)=\"toggleSearch()\">\r\n                  <i class=\"material-icons\">\r\n                    close\r\n                  </i>\r\n                </button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<embryo-FixedHeader></embryo-FixedHeader>"

/***/ }),

/***/ "./src/app/Layouts/Header/HeaderThree/HeaderThree.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Layouts/Header/HeaderThree/HeaderThree.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xheW91dHMvSGVhZGVyL0hlYWRlclRocmVlL0hlYWRlclRocmVlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Layouts/Header/HeaderThree/HeaderThree.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Layouts/Header/HeaderThree/HeaderThree.component.ts ***!
  \*********************************************************************/
/*! exports provided: HeaderThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderThreeComponent", function() { return HeaderThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderThreeComponent = /** @class */ (function () {
    function HeaderThreeComponent(embryoService) {
        this.embryoService = embryoService;
    }
    HeaderThreeComponent.prototype.ngOnInit = function () {
    };
    HeaderThreeComponent.prototype.toggleSidebar = function () {
        this.embryoService.sidenavOpen = !this.embryoService.sidenavOpen;
    };
    HeaderThreeComponent.prototype.toggleSearch = function () {
        $('app-main').toggleClass('form-open');
    };
    HeaderThreeComponent.prototype.openConfirmationPopup = function (value) {
        var _this = this;
        var message = 'Are you sure you want to delete this product?';
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value, 'cart'); });
    };
    HeaderThreeComponent.prototype.getPopupResponse = function (response, value, type) {
        if (response) {
            if (type === 'cart') {
                this.embryoService.removeLocalCartProduct(value);
            }
            else {
                this.embryoService.removeLocalWishlistProduct(value);
            }
        }
    };
    HeaderThreeComponent.prototype.addAllWishlistToCart = function (values) {
        this.embryoService.addAllWishListToCart(values);
    };
    HeaderThreeComponent.prototype.openWishlistConfirmationPopup = function (value) {
        var _this = this;
        var message = 'Are you sure you want to add all products?';
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value, 'wishlist'); });
    };
    HeaderThreeComponent.prototype.selectedCurrency = function (value) {
        this.embryoService.currency = value;
    };
    HeaderThreeComponent.prototype.selectedLanguage = function (value) {
        this.embryoService.language = value;
    };
    HeaderThreeComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value, 'wishlist');
    };
    HeaderThreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'HeaderThree',
            template: __webpack_require__(/*! ./HeaderThree.component.html */ "./src/app/Layouts/Header/HeaderThree/HeaderThree.component.html"),
            styles: [__webpack_require__(/*! ./HeaderThree.component.scss */ "./src/app/Layouts/Header/HeaderThree/HeaderThree.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"]])
    ], HeaderThreeComponent);
    return HeaderThreeComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/Header/HeaderTwo/HeaderTwo.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Layouts/Header/HeaderTwo/HeaderTwo.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"header-v2\">\r\n   <mat-toolbar-row class=\"header-v2-top\">\r\n     <div class=\"container\">\r\n       <div fxLayout=\"row wrap\">\r\n         <div class=\"logo-site\" fxFlex.xs=\"50\" fxFlex.sm=\"50\" fxFlex.md=\"35\" fxFlex.lg=\"25%\" fxFlex.xl=\"25%\">\r\n          <embryo-AppLogo></embryo-AppLogo>\r\n         </div>\r\n         <div fxFlex.sm=\"60\" fxHide.xs=\"true\" fxHide.sm=\"true\" fxFlex.md=\"40\" fxFlex.sm.hdie fxFlex.lg=\"60%\" fxFlex.xl=\"60%\" class=\"align-center\">\r\n            \r\n            <div class=\"search-v2\">\r\n               <form action=\"\">\r\n                  <input type=\"text\" placeholder=\"Enter a keyword to search\">\r\n               </form>\r\n            </div>\r\n         </div>\r\n         <div fxFlex.xs=\"50\" fxFlex.sm=\"50\" fxFlex.md=\"25\" fxFlex.lg=\"15%\" fxFlex.xl=\"15%\">\r\n       <span fxFlex></span>\r\n           <div class=\"list-flex user-tool\">\r\n             <embryo-HeaderCart [currency]=\"embryoService?.currency\" [cartProducts]=\"embryoService?.localStorageCartProducts\" [count]=\"embryoService?.navbarCartCount\" (removeProductData)=\"openConfirmationPopup($event)\"></embryo-HeaderCart>\r\n \r\n             <embryo-WishList [currency]=\"embryoService?.currency\" [wishListProducts]=\"embryoService?.localStorageWishlist\" [count]=\"embryoService?.navbarWishlistProdCount\" (removeWishListData)=\"openWishlistConfirmationPopup($event)\" (addAllWishlistToCart)=\"addAllWishlistToCart($event)\" (addToCart)=\"addToCart($event)\"></embryo-WishList>\r\n             <embryo-HeaderUserProfileDropdown></embryo-HeaderUserProfileDropdown>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </mat-toolbar-row>\r\n   <mat-toolbar-row class=\"header-v2-bottom main-menu-wrap\">\r\n     <div class=\"container\">\r\n       <div class=\"header-v2-bottom-inner\">\r\n         <embryo-Menu></embryo-Menu>\r\n    \r\n       </div>\r\n     </div>\r\n   </mat-toolbar-row>\r\n   <mat-toolbar-row class=\"responsive-bar relative\">\r\n         <div class=\"container\">\r\n           <div fxLayoutAlign=\"space-between\">\r\n          \r\n             <button class=\"responsive-toggle\" mat-icon-button (click)=\"toggleSidebar()\">\r\n               <i class=\"material-icons\">menu</i>\r\n             </button>\r\n             <div>\r\n                 <div class=\"search-box-bar\">\r\n                   <button type=\"button\" mat-mini-fab (click)=\"toggleSearch()\">\r\n                     <i class=\"material-icons notranslate\">\r\n                       search\r\n                     </i>\r\n                   </button>\r\n                 </div>\r\n                 <div class=\"search-form\">\r\n                   <form>\r\n                     <input type=\"text\" placeholder=\"Search and hit enter\">\r\n                     <button type=\"button\" mat-fab class=\"close-btn\" (click)=\"toggleSearch()\">\r\n                       <i class=\"material-icons\">\r\n                         close\r\n                       </i>\r\n                     </button>\r\n                   </form>\r\n                 </div>\r\n               </div>\r\n           </div>\r\n         </div>\r\n       </mat-toolbar-row>\r\n </mat-toolbar>\r\n <embryo-FixedHeader></embryo-FixedHeader>\r\n "

/***/ }),

/***/ "./src/app/Layouts/Header/HeaderTwo/HeaderTwo.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Layouts/Header/HeaderTwo/HeaderTwo.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xheW91dHMvSGVhZGVyL0hlYWRlclR3by9IZWFkZXJUd28uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Layouts/Header/HeaderTwo/HeaderTwo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Layouts/Header/HeaderTwo/HeaderTwo.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTwoComponent", function() { return HeaderTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderTwoComponent = /** @class */ (function () {
    function HeaderTwoComponent(embryoService) {
        this.embryoService = embryoService;
    }
    HeaderTwoComponent.prototype.ngOnInit = function () {
    };
    HeaderTwoComponent.prototype.toggleSearch = function () {
        $('app-main').toggleClass('form-open');
    };
    HeaderTwoComponent.prototype.toggleSidebar = function () {
        this.embryoService.sidenavOpen = !this.embryoService.sidenavOpen;
    };
    HeaderTwoComponent.prototype.openConfirmationPopup = function (value) {
        var _this = this;
        var message = 'Are you sure you want to delete this product?';
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value, 'cart'); });
    };
    HeaderTwoComponent.prototype.getPopupResponse = function (response, value, type) {
        if (response) {
            if (type === 'cart') {
                this.embryoService.removeLocalCartProduct(value);
            }
            else {
                this.embryoService.removeLocalWishlistProduct(value);
            }
        }
    };
    HeaderTwoComponent.prototype.addAllWishlistToCart = function (values) {
        this.embryoService.addAllWishListToCart(values);
    };
    HeaderTwoComponent.prototype.openWishlistConfirmationPopup = function (value) {
        var _this = this;
        var message = 'Are you sure you want to add all products?';
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value, 'wishlist'); });
    };
    HeaderTwoComponent.prototype.selectedCurrency = function (value) {
        this.embryoService.currency = value;
    };
    HeaderTwoComponent.prototype.selectedLanguage = function (value) {
        this.embryoService.language = value;
    };
    HeaderTwoComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value, 'wishlist');
    };
    HeaderTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'HeaderTwo',
            template: __webpack_require__(/*! ./HeaderTwo.component.html */ "./src/app/Layouts/Header/HeaderTwo/HeaderTwo.component.html"),
            styles: [__webpack_require__(/*! ./HeaderTwo.component.scss */ "./src/app/Layouts/Header/HeaderTwo/HeaderTwo.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"]])
    ], HeaderTwoComponent);
    return HeaderTwoComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/Menu/Menu/Menu.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Layouts/Menu/Menu/Menu.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--  Top menu -->\r\n<nav class=\"app-nav\">\r\n\t<ul class=\"app-nav-list\">\r\n\t\t<li class=\"app-nav-item\" *ngFor=\"let item of menuItems.getMainMenu()\" [ngClass]=\"{'mega': item.mega}\">\r\n\t\t\t<ng-container  *ngIf=\"item.type == 'sub'\">\r\n\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active-link\">\r\n\t\t\t\t  {{item.name | translate}}\r\n\t\t\t\t</a>\r\n\t\t\t</ng-container>\r\n\t\t\t<a class=\"nav-link\" *ngIf=\"item.type == 'link'\" [routerLink]=\"['/'+item.state]\" routerLinkActive=\"active-link\">\r\n\t\t\t\t  {{item.name | translate}}\r\n\t\t\t</a>\r\n\t\t\t\t<ul class=\"sub-menu\" *ngIf=\"item.children && item.children.length >0 \">\r\n\t\t\t\t\t<li *ngFor=\"let child of item.children\">\r\n\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/'+child.state]\" routerLinkActive=\"active-link\">\r\n\t\t\t\t\t\t\t  {{child.name | translate}}\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t   <ul class=\"sub-menu\" *ngIf=\"child.children && child.children.length >0\">\r\n\t\t\t\t\t\t\t<li *ngFor=\"let subChild of child.children\">\r\n\t\t\t\t\t\t\t\t<a *ngIf=\"subChild.type == 'queryParams'\" class=\"nav-link\" (click)=\"redirectTo(subChild)\">\r\n\t\t\t\t\t\t\t\t\t  {{subChild.name | translate}}\r\n\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t<a *ngIf=\"subChild.type == 'link'\" class=\"nav-link\" [routerLink]=\"['/'+item.state, child.state]\">\r\n\t\t\t\t\t\t\t\t\t  {{subChild.name | translate}}\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t</li>\r\n\t</ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/Layouts/Menu/Menu/Menu.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/Layouts/Menu/Menu/Menu.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xheW91dHMvTWVudS9NZW51L01lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Layouts/Menu/Menu/Menu.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Layouts/Menu/Menu/Menu.component.ts ***!
  \*****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _Core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Core/menu/menu-items/menu-items */ "./src/app/Core/menu/menu-items/menu-items.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuItems, router, translate) {
        this.menuItems = menuItems;
        this.router = router;
        this.translate = translate;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.onItemSelected = function (item) {
        if (item.children && item.children.length) {
            this.expanded = !this.expanded;
        }
    };
    MenuComponent.prototype.redirectTo = function (subchildState) {
        this.router.navigate([subchildState.state], { queryParams: { category: subchildState.queryState } });
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-Menu',
            template: __webpack_require__(/*! ./Menu.component.html */ "./src/app/Layouts/Menu/Menu/Menu.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('indicatorRotate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(0deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(180deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4,0.0,0.2,1)')),
                ])
            ],
            styles: [__webpack_require__(/*! ./Menu.component.scss */ "./src/app/Layouts/Menu/Menu/Menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_Core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_4__["MenuItems"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/Menu/SidebarMenu/SidebarMenu.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Layouts/Menu/SidebarMenu/SidebarMenu.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<a mat-list-item (click)=\"onItemSelected(item)\"\r\n              [ngClass]=\"{'active': item.state ? router.isActive(item.state, true): false, 'expanded': expanded}\">\r\n  <mat-icon>{{item.icon}}</mat-icon>\r\n  {{item.name | translate}}\r\n  <span fxFlex *ngIf=\"item.children && item.children.length\">\r\n    <span fxFlex></span>\r\n    <mat-icon [@indicatorRotate]=\"expanded ? 'expanded': 'collapsed'\">\r\n      expand_more\r\n    </mat-icon>\r\n  </span>\r\n</a>\r\n<div *ngIf=\"expanded\" class=\"responsive-menu-side\">\r\n  <embryo-SidebarMenu *ngFor=\"let child of item.children\" [item]=\"child\" [depth]=\"depth+1\">\r\n  </embryo-SidebarMenu>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/Layouts/Menu/SidebarMenu/SidebarMenu.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Layouts/Menu/SidebarMenu/SidebarMenu.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xheW91dHMvTWVudS9TaWRlYmFyTWVudS9TaWRlYmFyTWVudS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Layouts/Menu/SidebarMenu/SidebarMenu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Layouts/Menu/SidebarMenu/SidebarMenu.component.ts ***!
  \*******************************************************************/
/*! exports provided: SideBarMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarMenuComponent", function() { return SideBarMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SideBarMenuComponent = /** @class */ (function () {
    function SideBarMenuComponent(router, embryoService, translate) {
        this.router = router;
        this.embryoService = embryoService;
        this.translate = translate;
        this.ariaExpanded = this.expanded;
        if (this.depth === undefined) {
            this.depth = 0;
        }
    }
    SideBarMenuComponent.prototype.ngOnInit = function () {
    };
    SideBarMenuComponent.prototype.onItemSelected = function (item) {
        if (!item.children || !item.children.length) {
            if (item.type === 'link') {
                this.router.navigate([item.state]);
            }
            else {
                this.router.navigate([item.state], { queryParams: { category: item.queryState } });
            }
            this.embryoService.sidenavOpen = false;
        }
        if (item.children && item.children.length) {
            this.expanded = !this.expanded;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SideBarMenuComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SideBarMenuComponent.prototype, "depth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.aria-expanded'),
        __metadata("design:type", Object)
    ], SideBarMenuComponent.prototype, "ariaExpanded", void 0);
    SideBarMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-SidebarMenu',
            template: __webpack_require__(/*! ./SidebarMenu.component.html */ "./src/app/Layouts/Menu/SidebarMenu/SidebarMenu.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('indicatorRotate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(0deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(180deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4,0.0,0.2,1)')),
                ])
            ],
            styles: [__webpack_require__(/*! ./SidebarMenu.component.scss */ "./src/app/Layouts/Menu/SidebarMenu/SidebarMenu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_4__["EmbryoService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], SideBarMenuComponent);
    return SideBarMenuComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/PaymentDetailSideBar/PaymentDetailSideBar.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/Layouts/PaymentDetailSideBar/PaymentDetailSideBar.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"sidebar-panel\" fxLayout=\"column\">\r\n    <nav class=\"app-side-nav\">\r\n      <div class=\"\">\r\n        <div class=\"side-cart-head mb-3\">\r\n          <div class=\"mb-3\"> <i class=\"material-icons\">\r\n              shopping_cart\r\n            </i></div>\r\n          <h5 *ngIf=\"(embryoService.localStorageCartProducts && \r\n          embryoService.localStorageCartProducts.length>0); else elseCartBlock;\">You have {{embryoService.localStorageCartProducts.length}} items in your cart</h5>\r\n          <ng-template #elseCartBlock>\r\n              <div class=\"section-gap-lg text-center\">\r\n                  <div class=\"mb-4\">\r\n                  <img src=\"assets/images/empty-cart.png\" height=\"128\" width=\"128\" alt=\"cart-empty\">\r\n                </div>\r\n                  <h4> Your Shopping Bag is empty.</h4>\r\n                  <a href=\"javascript:void(0);\" class=\"primary-color\">Go for Shopping</a>\r\n                </div>\r\n          </ng-template>\r\n        </div>\r\n\r\n        <div class=\"side-cart-wrapper\" *ngIf=\"embryoService.localStorageCartProducts && embryoService.localStorageCartProducts.length>0\">\r\n          <div class=\"side-cart-list px-3\" *ngFor=\"let product of embryoService.localStorageCartProducts\">\r\n            <div fxLayoutAlign=\"center center\">\r\n                <div fxFlex.xs=\"25\" fxFlex.sm=\"25\" fxFlex.md=\"25\" fxFlex.lg=\"25\" fxFlex.xl=\"25\">\r\n                <img [src]=\"product?.image\" width=\"80\" alt=\"cart img\">\r\n              </div>\r\n              <div fxFlex.xs=\"55\" fxFlex.sm=\"55\" fxFlex.md=\"55\" fxFlex.lg=\"55\" fxFlex.xl=\"55\" class=\"px-3\">\r\n                <h6 class=\"mb-1\">{{product?.name}}</h6>\r\n                <p class=\"mb-0\">\r\n                  <span>{{product?.quantity}}</span>\r\n                 </p>\r\n                <p class=\"font-bold\">{{calculateProductSinglePrice(product, product?.quantity) | currency:embryoService?.currency}}</p>\r\n              </div>\r\n              <div fxFlex.xs=\"20\" fxFlex.sm=\"20\" fxFlex.md=\"20\" fxFlex.lg=\"20\" fxFlex.xl=\"20\" class=\"side-cart-actions text-center px-2\">\r\n                <a href=\"javascript:void(0)\" (click)=\"removeProduct(product)\"><i class=\"material-icons\">\r\n                    remove_shopping_cart\r\n                  </i></a>\r\n                <a [routerLink]=\"['/cart']\" (click)=\"embryoService.paymentSidenavOpen=false\"><i class=\"material-icons\">\r\n                    edit\r\n                  </i></a>\r\n              </div>\r\n            </div>\r\n            <hr class=\"spacer\">\r\n          </div>\r\n          <div class=\"px-3 text-right\">\r\n            <div>\r\n              <p>Subtotal</p><span fxFlex></span> {{calculateTotalPrice() | currency:embryoService?.currency}}\r\n            </div>\r\n            <div>\r\n              <p>Shipping</p><span fxFlex></span> {{embryoService.shipping | currency:embryoService?.currency}}\r\n            </div>\r\n            <div>\r\n              <p>Tax(GST)</p><span fxFlex></span> {{embryoService.tax | currency:embryoService?.currency}}\r\n            </div>\r\n            <hr class=\"spacer\">\r\n            <div class=\"mb-4\">\r\n              <h4>Total</h4><span fxFlex></span>\r\n              <h4> {{getTotalPrice() | currency:embryoService?.currency}}</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"spacer\">\r\n      </div>\r\n    </nav>\r\n  </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Layouts/PaymentDetailSideBar/PaymentDetailSideBar.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/Layouts/PaymentDetailSideBar/PaymentDetailSideBar.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-area {\n  z-index: 99; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGF5b3V0cy9QYXltZW50RGV0YWlsU2lkZUJhci9DOlxcVXNlcnNcXERoaW5ha2FyIFJlZGR5XFxEZXNrdG9wXFxTaG9wcGluZyBNYWpvciBQcm9qZWN0L3NyY1xcYXBwXFxMYXlvdXRzXFxQYXltZW50RGV0YWlsU2lkZUJhclxcUGF5bWVudERldGFpbFNpZGVCYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9MYXlvdXRzL1BheW1lbnREZXRhaWxTaWRlQmFyL1BheW1lbnREZXRhaWxTaWRlQmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXItYXJlYSB7XHJcbiAgICB6LWluZGV4OiA5OTt9XHJcbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/Layouts/PaymentDetailSideBar/PaymentDetailSideBar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Layouts/PaymentDetailSideBar/PaymentDetailSideBar.component.ts ***!
  \********************************************************************************/
/*! exports provided: PaymentDetailSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailSideBarComponent", function() { return PaymentDetailSideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentDetailSideBarComponent = /** @class */ (function () {
    function PaymentDetailSideBarComponent(embryoService, loadingBar) {
        this.embryoService = embryoService;
        this.loadingBar = loadingBar;
    }
    PaymentDetailSideBarComponent.prototype.ngOnInit = function () {
    };
    PaymentDetailSideBarComponent.prototype.calculateTotalPrice = function () {
        var subtotal = 0;
        if (this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.localStorageCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                subtotal += (product.price * product.quantity);
            }
        }
        return subtotal;
    };
    PaymentDetailSideBarComponent.prototype.removeProduct = function (value) {
        var _this = this;
        var message = 'Are you sure you want to delete this product?';
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value); });
    };
    PaymentDetailSideBarComponent.prototype.getPopupResponse = function (response, value) {
        if (response) {
            this.embryoService.removeLocalCartProduct(value);
            this.embryoService.paymentSidenavOpen = false;
        }
    };
    PaymentDetailSideBarComponent.prototype.calculateProductSinglePrice = function (product, value) {
        var price = 0;
        product.quantity = value;
        price = product.price * value;
        return price;
    };
    PaymentDetailSideBarComponent.prototype.getTotalPrice = function () {
        var total = 0;
        if (this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.localStorageCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                total += (product.price * product.quantity);
            }
            total += (this.embryoService.shipping + this.embryoService.tax);
        }
        return total;
    };
    PaymentDetailSideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-PaymentDetailSideBar',
            template: __webpack_require__(/*! ./PaymentDetailSideBar.component.html */ "./src/app/Layouts/PaymentDetailSideBar/PaymentDetailSideBar.component.html"),
            styles: [__webpack_require__(/*! ./PaymentDetailSideBar.component.scss */ "./src/app/Layouts/PaymentDetailSideBar/PaymentDetailSideBar.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__["EmbryoService"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__["LoadingBarService"]])
    ], PaymentDetailSideBarComponent);
    return PaymentDetailSideBarComponent;
}());



/***/ }),

/***/ "./src/app/Main/Main.component.html":
/*!******************************************!*\
  !*** ./src/app/Main/Main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div [dir]=\"isRtl\" (scroll)=\"onScrollEvent($event)\">\r\n  <mat-sidenav-container>\r\n    <mat-sidenav #sidenav [(opened)]=\"embryoService.sidenavOpen\" class=\"sidebar-area\" mode=\"over\">\r\n      <mat-nav-list>\r\n        <div class=\"close-btn-sidebar\">\r\n          <a href=\"javascript:void(0)\" (click)=\"embryoService.sidenavOpen = false\">\r\n            <i class=\"material-icons\">\r\n              close\r\n            </i>\r\n          </a>\r\n        </div>\r\n        <embryo-SidebarMenu *ngFor=\"let item of menuItems.getMainMenu()\" [item]=\"item\"></embryo-SidebarMenu>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav class=\"em-sidebar\" #paymentSidenav [(opened)]=\"embryoService.paymentSidenavOpen\" position=\"end\" mode=\"over\" >\r\n      <embryo-PaymentDetailSideBar></embryo-PaymentDetailSideBar>\r\n    </mat-sidenav>\r\n    <div class=\"rtl-layout\"><a class=\"text-xl\" href=\"javascript:void(0);\" (click)=\"changeDirection()\">RTL</a></div> \r\n    <ngx-toasta></ngx-toasta>\r\n    <HeaderOne *ngIf=\"this.currentUrl != '/home-two' && this.currentUrl != '/home-three'\"></HeaderOne>\r\n    <HeaderTwo *ngIf=\"this.currentUrl == '/home-two' && this.currentUrl != '/home-three'\"></HeaderTwo>\r\n    <HeaderThree *ngIf=\"this.currentUrl != '/home-two' && this.currentUrl == '/home-three'\"></HeaderThree>\r\n    <div class=\"main\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <FooterOne></FooterOne>\r\n  </mat-sidenav-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Main/Main.component.scss":
/*!******************************************!*\
  !*** ./src/app/Main/Main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01haW4vTWFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Main/Main.component.ts":
/*!****************************************!*\
  !*** ./src/app/Main/Main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
/* harmony import */ var _Core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Core/menu/menu-items/menu-items */ "./src/app/Core/menu/menu-items/menu-items.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MainComponent = /** @class */ (function () {
    function MainComponent(loader, embryoService, menuItems, dir, translate, router, meta, title) {
        var _this = this;
        this.loader = loader;
        this.embryoService = embryoService;
        this.menuItems = menuItems;
        this.translate = translate;
        this.router = router;
        this.timer = 0;
        this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        title.setTitle('Embryo - Angular Material Design eCommerce Template');
        meta.addTags([
            { name: 'author', content: 'The IRON Network' },
            // tslint:disable-next-line:max-line-length
            { name: 'keywords', content: ' angular, angular 2, angular 6, angular 7, angular material, clean, creative, ecommerce, frontend, online store, shop, shopping, store, typescript, ui framework ' },
            // tslint:disable-next-line:max-line-length
            { name: 'description', content: 'Embryo is an E-Commerce angular 7 based template with material design. It also comes with Angular cli. Now you have all the power to maintain your ecommerce site. Responsive design gives your user to use in any modern devices. Clean Code gives you the power to customize the code as per as your requirments. Embryo has all the basics functionality which is required in ecommerce site. Rtl design makes the multi-language support with more easy way.' }
        ]);
        if (this.embryoService.isDirectionRtl) {
            this.isRtl = 'rtl';
        }
        else {
            this.isRtl = 'ltr';
        }
        this.router.events
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.currentUrl = event.url;
            }
        });
    }
    MainComponent.prototype.ngOnInit = function () {
        this.startTimer();
    };
    MainComponent.prototype.startTimer = function () {
        var _this = this;
        this.timer = 0;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (value) { _this.timer = value + 1; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.loader.complete(); })).subscribe();
        // We're sure that subscription has been made, we can start loading bar service
        this.loader.start();
    };
    MainComponent.prototype.hideSideNav = function () {
        this.embryoService.sidenavOpen = false;
    };
    MainComponent.prototype.changeDirection = function () {
        if (this.isRtl === 'rtl') {
            this.isRtl = 'ltr';
            this.embryoService.isDirectionRtl = false;
        }
        else {
            this.isRtl = 'rtl';
            this.embryoService.isDirectionRtl = true;
        }
        this.embryoService.featuredProductsSelectedTab = 0;
        this.embryoService.newArrivalSelectedTab = 0;
    };
    /**
     * On window scroll add class header-fixed.
     */
    MainComponent.prototype.onScrollEvent = function ($event) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollTop >= 200) {
            $('app-main').addClass('header-fixed');
        }
        else {
            $('app-main').removeClass('header-fixed');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainComponent.prototype, "onScrollEvent", null);
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./Main.component.html */ "./src/app/Main/Main.component.html"),
            styles: [__webpack_require__(/*! ./Main.component.scss */ "./src/app/Main/Main.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarService"],
            _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_5__["EmbryoService"],
            _Core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_6__["MenuItems"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Cart/Cart.component.html":
/*!************************************************!*\
  !*** ./src/app/Pages/Cart/Cart.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<embryo-PageTitle heading=\"Here’s what’s in your bag.\" subHeading=\"Our latest news and learning articles.\"></embryo-PageTitle>\r\n\r\n<div class=\"inner-container bg-white cart-page section-gap\" *ngIf=\"(embryoService.localStorageCartProducts && embryoService.localStorageCartProducts.length>0); else elseBlock\">\r\n  <div class=\"container\">\r\n    <div class=\"cart-wrapper\">\r\n      <div class=\"cart-shop-list mb-5 text-center  card-shadow\">\r\n        <div fxLayout='row wrap' fxLayoutAlign=\"start center\" class=\"cart-item\" *ngFor=\"let product of embryoService.localStorageCartProducts\">\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"10\" fxFlex.lg=\"20\" fxFlex.xl=\"20\" class=\"cart-product-image\">\r\n            <div class=\"cart-item-thumb\">\r\n              <a href=\"javascript:void(0)\" class=\"p-link\">\r\n                <img width=\"626\" height=\"800\" class=\"card-shadow\" [src]=\"product.image\" alt=\"cart image\">\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"90\" fxFlex.lg=\"80\" fxFlex.xl=\"80\">\r\n            <div fxLayout='row wrap' fxLayoutAlign=\"center center\" class=\"cart-product-info\">\r\n              <div fxFlex.xs=\"100\" fxFlex.sm=\"40\" fxFlex.md=\"30\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\r\n                <h5>{{product?.name}}</h5>\r\n                <p class=\"mb-0\">Delivery in 3-4 days | Free</p>\r\n                <p> 10 Days Replacement Policy</p>\r\n              </div>\r\n              <div fxFlex.xs=\"50\" fxFlex.sm=\"20\" fxFlex.md=\"20\" fxFlex.lg=\"20\" fxFlex.xl=\"20\">\r\n                <mat-form-field class=\"w-100\">\r\n                  <input  matInput type=\"number\" #quantity [value]=\"getQuantityValue(product)\" min=\"1\" max=\"10\" placeholder=\"Quantity\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div fxFlex.xs=\"50\" fxFlex.sm=\"40\" fxFlex.md=\"30\" fxFlex.lg=\"20\" fxFlex.xl=\"20\">\r\n                <div class=\"cart-item-price\">\r\n                  <h4>{{ calculateProductSinglePrice(product, quantity.value) | currency:embryoService?.currency}}</h4>\r\n                </div>\r\n              </div>\r\n              <div class=\"close-sm\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"20\" fxFlex.lg=\"20\" fxFlex.xl=\"20\">\r\n                <div class=\"cart-item-price\">\r\n                  <a href=\"javascript:void(0)\" class=\"accent-color remove-cart\" (click)=\"removeProduct(product)\"><i class=\"material-icons\">\r\n                      close\r\n                    </i></a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"cart-total\" fxLayout='row wrap' fxLayoutAlign=\"end\">\r\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"40\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\r\n          <div>\r\n            <p>Subtotal</p><span fxFlex></span> {{calculateTotalPrice() | currency:embryoService?.currency}}\r\n          </div>\r\n          <div>\r\n            <p>Shipping</p><span fxFlex></span> {{embryoService.shipping | currency:embryoService?.currency}}\r\n          </div>\r\n          <div>\r\n            <p>Tax(GST)</p><span fxFlex></span> {{embryoService.tax | currency:embryoService?.currency}}\r\n          </div>\r\n          <hr class=\"spacer\">\r\n          <div class=\"mb-4\">\r\n            <h4>Total</h4><span fxFlex></span>\r\n            <h4> {{getTotalPrice() | currency:embryoService?.currency}}</h4>\r\n          </div>\r\n          <div> <span fxFlex></span><button mat-raised-button color=\"accent\" class=\"button-lg\" (click)=\"updateLocalCartProduct()\">Checkout</button></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #elseBlock>\r\n  <div class=\"section-gap-lg text-center\">\r\n    <div class=\"mb-4\">\r\n    <img src=\"assets/images/empty-cart.png\" height=\"128\" width=\"128\" alt=\"cart-empty\">\r\n  </div>\r\n    <h4> Your Shopping Bag is empty.</h4>\r\n    <a href=\"javascript:void(0)\" class=\"primary-color\" [routerLink]=\"['/']\">Go for Shopping</a>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/Pages/Cart/Cart.component.scss":
/*!************************************************!*\
  !*** ./src/app/Pages/Cart/Cart.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0NhcnQvQ2FydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/Cart/Cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Pages/Cart/Cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartComponent = /** @class */ (function () {
    function CartComponent(embryoService, router, loadingBar, cdRef) {
        this.embryoService = embryoService;
        this.router = router;
        this.loadingBar = loadingBar;
        this.cdRef = cdRef;
        this.quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    CartComponent.prototype.removeProduct = function (value) {
        var _this = this;
        var message = 'Are you sure you want to delete this product?';
        this.embryoService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getPopupResponse(_this.popupResponse, value); });
    };
    CartComponent.prototype.getPopupResponse = function (response, value) {
        if (response) {
            this.embryoService.removeLocalCartProduct(value);
        }
    };
    CartComponent.prototype.calculateProductSinglePrice = function (product, value) {
        var price = 0;
        product.quantity = value;
        price = product.price * value;
        return price;
    };
    CartComponent.prototype.calculateTotalPrice = function () {
        var subtotal = 0;
        if (this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.localStorageCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                subtotal += (product.price * product.quantity);
            }
            return subtotal;
        }
        return subtotal;
    };
    CartComponent.prototype.getTotalPrice = function () {
        var total = 0;
        if (this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.localStorageCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                total += (product.price * product.quantity);
            }
            total += (this.embryoService.shipping + this.embryoService.tax);
            return total;
        }
        return total;
    };
    CartComponent.prototype.updateLocalCartProduct = function () {
        this.embryoService.updateAllLocalCartProduct(this.embryoService.localStorageCartProducts);
        this.router.navigate(['/checkout']);
    };
    CartComponent.prototype.getQuantityValue = function (product) {
        if (product.quantity) {
            return product.quantity;
        }
        else {
            return 1;
        }
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-Cart',
            template: __webpack_require__(/*! ./Cart.component.html */ "./src/app/Pages/Cart/Cart.component.html"),
            styles: [__webpack_require__(/*! ./Cart.component.scss */ "./src/app/Pages/Cart/Cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_3__["EmbryoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__["LoadingBarService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Home/HomeOne/HomeOne.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Pages/Home/HomeOne/HomeOne.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-main-banner mb-5\">\r\n  <div class=\"container\">\r\n    <div fxLayout='row wrap' fxLayoutGap=\"0px\">\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"63\" fxFlex.xl=\"63\">\r\n        <div class=\"home-slider\">\r\n          <embryo-HomePageOneSlider [isRTL]=\"embryoService.isDirectionRtl\"></embryo-HomePageOneSlider>\r\n        </div>\r\n      </div>\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"37\" fxFlex.xl=\"37\">\r\n        <div class=\"aside-banner\">\r\n          <a [routerLink]=\"['/products/accessories']\" class=\"card-shadow\"> <img src=\"assets/images/aside-1.jpg\" alt=\"side\" width=\"547\" height=\"315\"></a>\r\n        </div>\r\n\r\n        <div class=\"aside-banner\">\r\n          <a [routerLink]=\"['/products/accessories']\" class=\"card-shadow\"><img src=\"assets/images/aside-2.jpg\" alt=\"side\" width=\"547\" height=\"315\"></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"feature-section\">\r\n  <div class=\"container\">\r\n    <embryo-Features></embryo-Features>\r\n  </div>\r\n</div>\r\n<div class=\"shop-card-wrapper section-gap\" *ngIf=\"productsArray\">\r\n  <div class=\"block-title text-center\">\r\n    <h2>Featured Products</h2>\r\n  </div>\r\n  <div class=\"container\">\r\n    <mat-tab-group [(selectedIndex)]=\"embryoService.featuredProductsSelectedTab\">\r\n      <mat-tab label=\"Men\"></mat-tab>\r\n      <mat-tab label=\"Women\"></mat-tab>\r\n      <mat-tab label=\"Gadgets\"></mat-tab>\r\n      <mat-tab label=\"Accessories\"></mat-tab>\r\n    </mat-tab-group>\r\n   <ng-container *ngIf=\"onFeaturedSelectedTab(embryoService.featuredProductsSelectedTab)\">\r\n      <ngx-slick-carousel *ngIf=\"embryoService.isDirectionRtl\" class=\"carousel\" [config]=\"rtlSlideConfig\">\r\n        <div ngxSlickItem *ngFor=\"let product of productsSliderData; let i=index\">\r\n          <embryo-ProductCard [product]=\"product\" (addToCart)=\"addToCart($event)\" [currency]=\"embryoService.currency\" (addToWishlist)=\"addToWishlist($event)\" [index]=\"i\"></embryo-ProductCard>\r\n        </div>\r\n      </ngx-slick-carousel>\r\n      <ngx-slick-carousel *ngIf=\"!embryoService.isDirectionRtl\" class=\"carousel\" [config]=\"slideConfig\">\r\n        <div ngxSlickItem *ngFor=\"let product of productsSliderData; let i=index\">\r\n          <embryo-ProductCard [product]=\"product\" (addToCart)=\"addToCart($event)\" [currency]=\"embryoService.currency\" (addToWishlist)=\"addToWishlist($event)\" [index]=\"i\"></embryo-ProductCard>\r\n        </div>\r\n      </ngx-slick-carousel>\r\n   </ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"detail-offer section-gap bg-white\">\r\n  <div class=\"container\" *ngIf=\"productsArray\">\r\n    <embryo-DealOfTheDay [currency]=\"embryoService?.currency\" [singleProduct]=\"productsArray?.men['2']\"></embryo-DealOfTheDay>\r\n  </div>\r\n</div>\r\n<div class=\"quick-shop\">\r\n  <embryo-Sales></embryo-Sales>\r\n</div>\r\n<div class=\"shop-card-wrapper section-gap\" *ngIf=\"productsArray\">\r\n  <div class=\"block-title text-center\">\r\n    <h2>New Arrivals</h2>\r\n  </div>\r\n  <div class=\"container\">\r\n    <mat-tab-group [(selectedIndex)]=\"embryoService.newArrivalSelectedTab\">\r\n      <mat-tab label=\"Men\"></mat-tab>\r\n      <mat-tab label=\"Women\"></mat-tab>\r\n      <mat-tab label=\"Gadgets\"></mat-tab>\r\n      <mat-tab label=\"Accessories\"></mat-tab>\r\n    </mat-tab-group>\r\n    <ng-container *ngIf=\"onNewArrivalsSelectedTab(embryoService.newArrivalSelectedTab)\">\r\n      <ngx-slick-carousel *ngIf=\"embryoService.isDirectionRtl\" class=\"carousel\" [config]=\"rtlSlideConfig\">\r\n        <div ngxSlickItem *ngFor=\"let product of newProductsSliderData; let i=index\">\r\n          <embryo-ProductCard [product]=\"product\" (addToCart)=\"addToCart($event)\" [currency]=\"embryoService.currency\" (addToWishlist)=\"addToWishlist($event)\" [index]=\"i\"></embryo-ProductCard>\r\n        </div>\r\n      </ngx-slick-carousel>\r\n      <ngx-slick-carousel *ngIf=\"!embryoService.isDirectionRtl\" class=\"carousel\" [config]=\"slideConfig\">\r\n        <div ngxSlickItem *ngFor=\"let product of newProductsSliderData; let i=index\">\r\n          <embryo-ProductCard [product]=\"product\" (addToCart)=\"addToCart($event)\" [currency]=\"embryoService.currency\" (addToWishlist)=\"addToWishlist($event)\" [index]=\"i\"></embryo-ProductCard>\r\n        </div>\r\n      </ngx-slick-carousel>\r\n   </ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"testimonial-wrapper\" *ngIf=\"productReviews && productReviews.length>0\">\r\n  <div class=\"block-title text-center\">\r\n    <h2>Customer Reviews</h2>\r\n  </div>\r\n  <div class=\"container\">\r\n    <embryo-Review [reviews]=\"productReviews\"></embryo-Review>\r\n  </div>\r\n</div>\r\n<div class=\"post-wrapper section-gap\">\r\n  <div class=\"block-title text-center\">\r\n    <h2>Latest From Blogs</h2>\r\n  </div>\r\n  <div class=\"container\" *ngIf=\"blogList\">\r\n    <embryo-Grid3 [blogList]=\"blogList\"></embryo-Grid3>\r\n  </div>\r\n</div>\r\n<div class=\"subscribe-wrapper bg-brown section-gap\">\r\n  <div class=\"container\">\r\n    <embryo-SubscribeOne></embryo-SubscribeOne>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"shop-card-wrapper section-gap \">\r\n  <div class=\"block-title text-center\">\r\n    <h2>Shop By Brands</h2>\r\n  </div>\r\n  <div class=\"container\">\r\n    <embryo-BrandsLogo [isRTL]=\"embryoService.isDirectionRtl\"></embryo-BrandsLogo>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/Home/HomeOne/HomeOne.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Pages/Home/HomeOne/HomeOne.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0hvbWUvSG9tZU9uZS9Ib21lT25lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Pages/Home/HomeOne/HomeOne.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Pages/Home/HomeOne/HomeOne.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeoneComponent", function() { return HomeoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeoneComponent = /** @class */ (function () {
    function HomeoneComponent(embryoService, cdRef) {
        this.embryoService = embryoService;
        this.cdRef = cdRef;
        this.slideConfig = {
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        this.rtlSlideConfig = {
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            rtl: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        this.getFeaturedProducts();
        this.getBlogList();
        this.getProductRevies();
        this.embryoService.featuredProductsSelectedTab = 0;
        this.embryoService.newArrivalSelectedTab = 0;
    }
    HomeoneComponent.prototype.ngOnInit = function () {
    };
    HomeoneComponent.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    HomeoneComponent.prototype.getFeaturedProducts = function () {
        var _this = this;
        this.embryoService.getProducts().valueChanges().subscribe(function (res) { _this.productsArray = res; });
    };
    HomeoneComponent.prototype.getBlogList = function () {
        var _this = this;
        this.embryoService.getBlogList().valueChanges().subscribe(function (res) { _this.blogList = res; });
    };
    HomeoneComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    HomeoneComponent.prototype.getProductRevies = function () {
        var _this = this;
        this.embryoService.getProductReviews().valueChanges().subscribe(function (res) { _this.productReviews = res; });
    };
    HomeoneComponent.prototype.addToWishlist = function (value) {
        this.embryoService.addToWishlist(value);
    };
    HomeoneComponent.prototype.onFeaturedSelectedTab = function (tabIndex) {
        this.productsSliderData = null;
        switch (tabIndex) {
            case 0:
                this.productsSliderData = this.productsArray.men;
                break;
            case 1:
                this.productsSliderData = this.productsArray.women;
                break;
            case 2:
                this.productsSliderData = this.productsArray.gadgets;
                break;
            case 3:
                this.productsSliderData = this.productsArray.accessories;
                break;
            default:
                // code...
                break;
        }
        return true;
    };
    HomeoneComponent.prototype.onNewArrivalsSelectedTab = function (tabIndex) {
        this.newProductsSliderData = null;
        switch (tabIndex) {
            case 0:
                this.newProductsSliderData = this.productsArray.men;
                break;
            case 1:
                this.newProductsSliderData = this.productsArray.women;
                break;
            case 2:
                this.newProductsSliderData = this.productsArray.gadgets;
                break;
            case 3:
                this.newProductsSliderData = this.productsArray.accessories;
                break;
            default:
                // code...
                break;
        }
        return true;
    };
    HomeoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homeone',
            template: __webpack_require__(/*! ./HomeOne.component.html */ "./src/app/Pages/Home/HomeOne/HomeOne.component.html"),
            styles: [__webpack_require__(/*! ./HomeOne.component.scss */ "./src/app/Pages/Home/HomeOne/HomeOne.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], HomeoneComponent);
    return HomeoneComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Home/HomeThree/HomeThree.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Pages/Home/HomeThree/HomeThree.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<embryo-HomePageThreeSlider [isRTL]=\"embryoService.isDirectionRtl\"></embryo-HomePageThreeSlider>\r\n<embryo-CtaTwo></embryo-CtaTwo>\r\n<embryo-CollectionGallery></embryo-CollectionGallery>\r\n\r\n<div class=\"section-gap grey-bg\">\r\n   <div class=\"container\">\r\n         <div class=\"block-title mb-5\"> <h3 class=\"font-light\">Shop By Category</h3></div>\r\n         <div fxLayout=\"row wrap\" class=\"col-gap category-v2-wrapper\" *ngIf=\"categories && (categories.clothing.length>0 && categories.shoes.length>0 && categories.accessories.length>0 && categories.gadgets.length)\">\r\n           <embryo-ProductCategoryCard class=\"mb-4\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\" fxFlex.lg=\"25\" fxFlex.xl=\"25\"\r\n             [productCategory]=\"categories.clothing[1]\" [totalProducts]=\"categories.clothing.length\"></embryo-ProductCategoryCard>\r\n           <embryo-ProductCategoryCard class=\"mb-4\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\" fxFlex.lg=\"25\" fxFlex.xl=\"25\"\r\n             [productCategory]=\"categories.shoes[0]\" [totalProducts]=\"categories.shoes.length\"></embryo-ProductCategoryCard>\r\n           <embryo-ProductCategoryCard class=\"mb-4\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\" fxFlex.lg=\"25\" fxFlex.xl=\"25\"\r\n             [productCategory]=\"categories.accessories[0]\" [totalProducts]=\"categories.accessories.length\"></embryo-ProductCategoryCard>\r\n           <embryo-ProductCategoryCard class=\"mb-4\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\" fxFlex.lg=\"25\" fxFlex.xl=\"25\"\r\n             [productCategory]=\"categories.gadgets[0]\" [totalProducts]=\"categories.gadgets.length\"></embryo-ProductCategoryCard>\r\n         </div> \r\n   </div>\r\n</div>\r\n\r\n<div class=\"shop-card-wrapper section-gap pt-0 pb-5 grid-card-wrapper tab-sldier-v2\" *ngIf=\"products\">\r\n  \r\n    <mat-toolbar style=\"height:270px;background-color:#000\" class=\"section-title-toolbar grid-toolbar\">\r\n      <mat-toolbar-row>\r\n         <div class=\"container\">\r\n        <div class=\"w-100 mb-3\">\r\n          <div class=\"block-title mb-2\">\r\n            <h2 class=\"text-inverse mb-0 text-xxl font-light\">New Products</h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"mat-tab-toolbar\">\r\n          <mat-tab-group [(selectedIndex)]=\"embryoService.newArrivalSelectedTab\">\r\n            <mat-tab label=\"All\"></mat-tab>\r\n            <mat-tab label=\"Men\"></mat-tab>\r\n            <mat-tab label=\"Women\"></mat-tab>\r\n            <mat-tab label=\"Gadgets\"></mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n      </div>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n \r\n  <div class=\"container\">\r\n    <ng-container *ngIf=\"onNewArrivalsSelectedTab(embryoService.newArrivalSelectedTab)\">\r\n      <ngx-slick-carousel *ngIf=\"embryoService.isDirectionRtl\" class=\"carousel\" [config]=\"rtlSlideConfig\">\r\n        <div ngxSlickItem *ngFor=\"let product of newProductsSliderData\">\r\n          <embryo-NewProductsCard [product]=\"product\" (addToCart)=\"addToCart($event)\" [currency]=\"embryoService.currency\"\r\n            (addToWishlist)=\"addToWishlist($event)\"></embryo-NewProductsCard>\r\n        </div>\r\n      </ngx-slick-carousel>\r\n      <ngx-slick-carousel *ngIf=\"!embryoService.isDirectionRtl\" class=\"carousel\" [config]=\"slideConfig\">\r\n        <div ngxSlickItem *ngFor=\"let product of newProductsSliderData\">\r\n          <embryo-NewProductsCard [product]=\"product\" (addToCart)=\"addToCart($event)\" [currency]=\"embryoService.currency\"\r\n            (addToWishlist)=\"addToWishlist($event)\"></embryo-NewProductsCard>\r\n        </div>\r\n      </ngx-slick-carousel>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n<embryo-CTASingleBanner></embryo-CTASingleBanner>\r\n<div class=\"section-gap pt-0 shadow-disable\">\r\n<div class=\"container\">\r\n  <div  class=\"w-100\">\r\n   \r\n    <div class=\"block-title text-center mb-4\"><h3>Top Brands</h3></div>\r\n  </div>\r\n  <embryo-BrandsLogo [isRTL]=\"embryoService.isDirectionRtl\"></embryo-BrandsLogo>\r\n</div>\r\n</div>\r\n\r\n<embryo-SubscribeTwo></embryo-SubscribeTwo>\r\n<embryo-DownloadAppSection></embryo-DownloadAppSection>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Pages/Home/HomeThree/HomeThree.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Pages/Home/HomeThree/HomeThree.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0hvbWUvSG9tZVRocmVlL0hvbWVUaHJlZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/Home/HomeThree/HomeThree.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Pages/Home/HomeThree/HomeThree.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeThreeComponent", function() { return HomeThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeThreeComponent = /** @class */ (function () {
    function HomeThreeComponent(embryoService) {
        this.embryoService = embryoService;
        this.categories = {
            clothing: [],
            shoes: [],
            accessories: [],
            gadgets: []
        };
        this.slideConfig = {
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        this.rtlSlideConfig = {
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            rtl: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    }
    HomeThreeComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    HomeThreeComponent.prototype.getProducts = function () {
        var _this = this;
        this.embryoService.getProducts().valueChanges()
            .subscribe(function (res) { return _this.getProductsResponse(res); });
    };
    HomeThreeComponent.prototype.getProductsResponse = function (res) {
        this.products = res;
        this.allProducts = ((res.men.concat(res.women)).concat(res.gadgets)).concat(res.accessories);
        for (var _i = 0, _a = this.allProducts; _i < _a.length; _i++) {
            var product = _a[_i];
            switch (product.category_type) {
                case 'clothing':
                    this.categories.clothing.push(product);
                    break;
                case 'shoes':
                    this.categories.shoes.push(product);
                    break;
                case 'accessories':
                    this.categories.accessories.push(product);
                    break;
                case 'gadgets':
                    this.categories.gadgets.push(product);
                    break;
                default:
                    // code...
                    break;
            }
        }
    };
    HomeThreeComponent.prototype.onNewArrivalsSelectedTab = function (tabIndex) {
        this.newProductsSliderData = null;
        switch (tabIndex) {
            case 0:
                this.newProductsSliderData = this.allProducts;
                break;
            case 1:
                this.newProductsSliderData = this.products.men;
                break;
            case 2:
                this.newProductsSliderData = this.products.women;
                break;
            case 3:
                this.newProductsSliderData = this.products.gadgets;
                break;
            default:
                // code...
                break;
        }
        return true;
    };
    HomeThreeComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    HomeThreeComponent.prototype.addToWishlist = function (value) {
        this.embryoService.addToWishlist(value);
    };
    HomeThreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'app-HomeThree',
            template: __webpack_require__(/*! ./HomeThree.component.html */ "./src/app/Pages/Home/HomeThree/HomeThree.component.html"),
            styles: [__webpack_require__(/*! ./HomeThree.component.scss */ "./src/app/Pages/Home/HomeThree/HomeThree.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"]])
    ], HomeThreeComponent);
    return HomeThreeComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Home/HomeTwo/HomeTwo.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Pages/Home/HomeTwo/HomeTwo.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <embryo-HomePageTwoSlider [isRTL]=\"embryoService.isDirectionRtl\"></embryo-HomePageTwoSlider>\r\n  \r\n  <embryo-CtaGroup></embryo-CtaGroup>\r\n\r\n  <embryo-LighteningDeals *ngIf=\"lighteningDealsProducts\" [lighteningDeals]=\"lighteningDealsProducts\"></embryo-LighteningDeals>\r\n\r\n  <embryo-TopProducts *ngIf=\"topProducts\" [products]=\"topProducts\" [currency]=\"embryoService?.currency\" (addToCart)=\"addToCart($event)\"></embryo-TopProducts>\r\n   <div class=\"section-gap pt-0\">\r\n   <div class=\"container\">\r\n      <div fxLayoutAlign=\"space-between\" class=\"w-100\">\r\n         <div class=\"block-title mb-4\">\r\n         <h3>Top Brands</h3>\r\n         </div>\r\n      </div>\r\n      <embryo-BrandsLogo [isRTL]=\"embryoService.isDirectionRtl\"></embryo-BrandsLogo>\r\n   </div>\r\n   </div>\r\n   <div class=\"section-gap pb-0\">   \r\n  <embryo-SubscribeTwo></embryo-SubscribeTwo>\r\n   \r\n</div>"

/***/ }),

/***/ "./src/app/Pages/Home/HomeTwo/HomeTwo.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Pages/Home/HomeTwo/HomeTwo.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0hvbWUvSG9tZVR3by9Ib21lVHdvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Pages/Home/HomeTwo/HomeTwo.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Pages/Home/HomeTwo/HomeTwo.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTwoComponent", function() { return HomeTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeTwoComponent = /** @class */ (function () {
    function HomeTwoComponent(embryoService) {
        this.embryoService = embryoService;
    }
    HomeTwoComponent.prototype.ngOnInit = function () {
        this.lighteningDeals();
        this.getProducts();
    };
    HomeTwoComponent.prototype.lighteningDeals = function () {
        var _this = this;
        this.embryoService.getProducts().valueChanges()
            .subscribe(function (res) { return _this.getLighteningDealsResponse(res); });
    };
    HomeTwoComponent.prototype.getLighteningDealsResponse = function (res) {
        var productsArray = [];
        this.lighteningDealsProducts = null;
        productsArray.push(this.last(res.men));
        productsArray.push(this.last(res.women));
        productsArray.push(this.last(res.gadgets));
        productsArray.push(this.last(res.accessories));
        this.lighteningDealsProducts = productsArray;
    };
    HomeTwoComponent.prototype.last = function (array) {
        return array[array.length - 1];
    };
    HomeTwoComponent.prototype.getProducts = function () {
        var _this = this;
        this.embryoService.getProducts().valueChanges()
            .subscribe(function (res) { return _this.getProductsResponse(res); });
    };
    HomeTwoComponent.prototype.getProductsResponse = function (res) {
        this.topProducts = null;
        var products = ((res.men.concat(res.women)).concat(res.gadgets)).concat(res.accessories);
        this.topProducts = products;
    };
    HomeTwoComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    HomeTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'app-HomeTwo',
            template: __webpack_require__(/*! ./HomeTwo.component.html */ "./src/app/Pages/Home/HomeTwo/HomeTwo.component.html"),
            styles: [__webpack_require__(/*! ./HomeTwo.component.scss */ "./src/app/Pages/Home/HomeTwo/HomeTwo.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"]])
    ], HomeTwoComponent);
    return HomeTwoComponent;
}());



/***/ }),

/***/ "./src/app/Pages/NotFound/NotFound.component.html":
/*!********************************************************!*\
  !*** ./src/app/Pages/NotFound/NotFound.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container bg-white section-gap-lg not-found-page\">\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"80\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\r\n        <mat-card class=\"text-center pb-5\">\r\n          <h1>404</h1>\r\n          <h5 class=\"mb-3\">We can’t seem to find the page you’re looking for.</h5>\r\n          <button mat-raised-button class=\"button-lg w-100\" color=\"accent\" [routerLink]=\"['/']\">Go To Home</button>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/NotFound/NotFound.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Pages/NotFound/NotFound.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-found-page h1 {\n  font-size: 7rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvTm90Rm91bmQvQzpcXFVzZXJzXFxEaGluYWthciBSZWRkeVxcRGVza3RvcFxcU2hvcHBpbmcgTWFqb3IgUHJvamVjdC9zcmNcXGFwcFxcUGFnZXNcXE5vdEZvdW5kXFxOb3RGb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL05vdEZvdW5kL05vdEZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZC1wYWdle1xyXG4gIGgxe1xyXG4gICAgICBmb250LXNpemU6IDdyZW07XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/NotFound/NotFound.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Pages/NotFound/NotFound.component.ts ***!
  \******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-NotFound',
            template: __webpack_require__(/*! ./NotFound.component.html */ "./src/app/Pages/NotFound/NotFound.component.html"),
            styles: [__webpack_require__(/*! ./NotFound.component.scss */ "./src/app/Pages/NotFound/NotFound.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Session/Register/Register.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Pages/Session/Register/Register.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container bg-white section-gap-lg\">\r\n  <div class=\"container\">\r\n    <div fxLayout='row wrap' fxLayoutAlign=\"center center\">\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"80\" fxFlex.lg=\"70\" fxFlex.xl=\"70\">\r\n        <div fxLayout='row wrap' fxLayoutAlign=\"center center\">\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n            <div class=\"form-img register-image\">\r\n            </div>\r\n          </div>\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n            <mat-card class=\"register-form form-margin\">\r\n              <h4>Enter your details</h4>\r\n              <form>\r\n                <div class=\"mb-4\">\r\n                  <mat-form-field class=\"w-100\">\r\n                    <input matInput type=\"text\" placeholder=\"First Name\" required>\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"w-100\">\r\n                    <input matInput type=\"text\" placeholder=\"Last Name\" required>\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"w-100\">\r\n                    <input matInput type=\"email\" placeholder=\"Email\" required>\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"w-100\">\r\n                    <input matInput type=\"password\" placeholder=\"Enter Password\" required>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"mb-4\">\r\n                  <mat-form-field class=\"w-100\">\r\n                    <input matInput type=\"password\" placeholder=\"Retype Password\" required>\r\n                  </mat-form-field>\r\n                </div>\r\n                <button color=\"accent\" class=\"button-lg mb-3\" mat-raised-button>Submit</button>\r\n              <div> Already have account? then <a class=\"accent-color\" [routerLink]=\"['../../../Auth_1/components/sign-in']\">Sign In</a></div>\r\n              </form>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/Session/Register/Register.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/Pages/Session/Register/Register.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1Nlc3Npb24vUmVnaXN0ZXIvUmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Pages/Session/Register/Register.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Pages/Session/Register/Register.component.ts ***!
  \**************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'embryo-Register',
            template: __webpack_require__(/*! ./Register.component.html */ "./src/app/Pages/Session/Register/Register.component.html"),
            styles: [__webpack_require__(/*! ./Register.component.scss */ "./src/app/Pages/Session/Register/Register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Session/Session.module.ts":
/*!*************************************************!*\
  !*** ./src/app/Pages/Session/Session.module.ts ***!
  \*************************************************/
/*! exports provided: SessionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-instantsearch */ "./node_modules/angular-instantsearch/fesm5/angular-instantsearch.js");
/* harmony import */ var _Session_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Session.routing */ "./src/app/Pages/Session/Session.routing.ts");
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Global/Global.module */ "./src/app/Global/Global.module.ts");
/* harmony import */ var _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Templates/Templates.module */ "./src/app/Templates/Templates.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Register_Register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Register/Register.component */ "./src/app/Pages/Session/Register/Register.component.ts");
/* harmony import */ var _Auth_1_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Auth_1/components/sign-in/sign-in.component */ "./src/app/Auth_1/components/sign-in/sign-in.component.ts");
/* harmony import */ var src_app_Auth_1_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Auth_1/components/sign-up/sign-up.component */ "./src/app/Auth_1/components/sign-up/sign-up.component.ts");
/* harmony import */ var src_app_Auth_1_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Auth_1/components/verify-email/verify-email.component */ "./src/app/Auth_1/components/verify-email/verify-email.component.ts");
/* harmony import */ var src_app_Auth_1_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Auth_1/components/forgot-password/forgot-password.component */ "./src/app/Auth_1/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var src_app_Auth_1_components_ThankYou_ThankYou_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Auth_1/components/ThankYou/ThankYou.component */ "./src/app/Auth_1/components/ThankYou/ThankYou.component.ts");
/* harmony import */ var src_app_Auth_1_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/Auth_1/components/dashboard/dashboard.component */ "./src/app/Auth_1/components/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';


var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Session_routing__WEBPACK_IMPORTED_MODULE_4__["SessionRoutes"]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_5__["GlobalModule"],
                _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"],
                angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__["NgAisModule"]
            ],
            declarations: [
                _Register_Register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _Auth_1_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"],
                src_app_Auth_1_components_ThankYou_ThankYou_component__WEBPACK_IMPORTED_MODULE_14__["ThankYouComponent"],
                src_app_Auth_1_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"],
                src_app_Auth_1_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_12__["VerifyEmailComponent"],
                src_app_Auth_1_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"],
                src_app_Auth_1_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"]
            ]
        })
    ], SessionModule);
    return SessionModule;
}());



/***/ }),

/***/ "./src/app/Pages/Session/Session.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/Pages/Session/Session.routing.ts ***!
  \**************************************************/
/*! exports provided: SessionRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionRoutes", function() { return SessionRoutes; });
/* harmony import */ var src_app_Auth_1_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Auth_1/shared/guard/auth.guard */ "./src/app/Auth_1/shared/guard/auth.guard.ts");
/* harmony import */ var src_app_Auth_1_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Auth_1/components/dashboard/dashboard.component */ "./src/app/Auth_1/components/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_Auth_1_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Auth_1/components/forgot-password/forgot-password.component */ "./src/app/Auth_1/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var src_app_Auth_1_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Auth_1/shared/guard/secure-inner-pages.guard */ "./src/app/Auth_1/shared/guard/secure-inner-pages.guard.ts");
/* harmony import */ var src_app_Auth_1_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Auth_1/components/sign-in/sign-in.component */ "./src/app/Auth_1/components/sign-in/sign-in.component.ts");
/* harmony import */ var src_app_Auth_1_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Auth_1/components/sign-up/sign-up.component */ "./src/app/Auth_1/components/sign-up/sign-up.component.ts");
/* harmony import */ var src_app_Auth_1_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Auth_1/components/verify-email/verify-email.component */ "./src/app/Auth_1/components/verify-email/verify-email.component.ts");
// Import canActivate guard services




// Required components for which route services to be activated



var SessionRoutes = [
    { path: 'signin', component: src_app_Auth_1_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"], canActivate: [src_app_Auth_1_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_3__["SecureInnerPagesGuard"]] },
    { path: 'signup', component: src_app_Auth_1_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"], canActivate: [src_app_Auth_1_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_3__["SecureInnerPagesGuard"]] },
    { path: 'dashboard', component: src_app_Auth_1_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], canActivate: [src_app_Auth_1_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
    { path: 'forgot-password', component: src_app_Auth_1_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"], canActivate: [src_app_Auth_1_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_3__["SecureInnerPagesGuard"]] },
    { path: 'verify-email-address', component: src_app_Auth_1_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_6__["VerifyEmailComponent"], canActivate: [src_app_Auth_1_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_3__["SecureInnerPagesGuard"]] }
];


/***/ }),

/***/ "./src/app/Services/Embryo.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/Embryo.service.ts ***!
  \********************************************/
/*! exports provided: EmbryoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbryoService", function() { return EmbryoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toasta */ "./node_modules/ngx-toasta/fesm5/ngx-toasta.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _Global_ReviewPopup_ReviewPopup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Global/ReviewPopup/ReviewPopup.component */ "./src/app/Global/ReviewPopup/ReviewPopup.component.ts");
/* harmony import */ var _Global_ConfirmationPopup_ConfirmationPopup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Global/ConfirmationPopup/ConfirmationPopup.component */ "./src/app/Global/ConfirmationPopup/ConfirmationPopup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EmbryoService = /** @class */ (function () {
    function EmbryoService(http, dialog, db, toastyService, toastyConfig) {
        var _this = this;
        this.http = http;
        this.dialog = dialog;
        this.db = db;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.sidenavOpen = false;
        this.paymentSidenavOpen = false;
        this.isDirectionRtl = false;
        this.featuredProductsSelectedTab = 0;
        this.newArrivalSelectedTab = 0;
        /**** Get currency code:- https://en.wikipedia.org/wiki/ISO_4217 *****/
        this.currency = 'USD';
        this.language = 'english';
        this.shipping = 12.95;
        this.tax = 27.95;
        this.navbarCartCount = 0;
        this.navbarWishlistProdCount = 0;
        this.toastyConfig.position = "top-right";
        this.toastyConfig.theme = "material";
        this.calculateLocalWishlistProdCounts();
        localStorage.removeItem("user");
        localStorage.removeItem("byProductDetails");
        this.db.object("products").valueChanges().subscribe(function (res) { _this.setCartItemDefaultValue(res['gadgets'][1]); });
    }
    EmbryoService.prototype.setCartItemDefaultValue = function (setCartItemDefaultValue) {
        var products;
        products = JSON.parse(localStorage.getItem("cart_item")) || [];
        var found = products.some(function (el, index) {
            if (el.name == setCartItemDefaultValue.name) {
                return true;
            }
        });
        if (!found) {
            products.push(setCartItemDefaultValue);
        }
        localStorage.setItem("cart_item", JSON.stringify(products));
        this.calculateLocalCartProdCounts();
    };
    EmbryoService.prototype.reviewPopup = function (singleProductDetails, reviews) {
        var review;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        if (this.isDirectionRtl) {
            dialogConfig.direction = 'rtl';
        }
        else {
            dialogConfig.direction = 'ltr';
        }
        review = this.dialog.open(_Global_ReviewPopup_ReviewPopup_component__WEBPACK_IMPORTED_MODULE_6__["ReviewPopupComponent"], dialogConfig);
        review.componentInstance.singleProductDetails = singleProductDetails;
        review.componentInstance.reviews = reviews;
        return review.afterClosed();
    };
    EmbryoService.prototype.confirmationPopup = function (message) {
        var confirmationPopup;
        confirmationPopup = this.dialog.open(_Global_ConfirmationPopup_ConfirmationPopup_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationPopupComponent"]);
        confirmationPopup.componentInstance.message = message;
        return confirmationPopup.afterClosed();
    };
    EmbryoService.prototype.getProducts = function () {
        this.products = this.db.object("products");
        return this.products;
    };
    /*
       ----------  Cart Product Function  ----------
    */
    // Adding new Product to cart in localStorage
    EmbryoService.prototype.addToCart = function (data, type) {
        var _this = this;
        if (type === void 0) { type = ""; }
        var products;
        products = JSON.parse(localStorage.getItem("cart_item")) || [];
        var productsLength = products.length;
        var toastOption = {
            title: "Adding Product To Cart",
            msg: "Product adding to the cart",
            showClose: true,
            timeout: 1000,
            theme: "material"
        };
        var found = products.some(function (el, index) {
            if (el.name == data.name) {
                if (!data.quantity) {
                    data.quantity = 1;
                }
                products[index]['quantity'] = data.quantity;
                return true;
            }
        });
        if (!found) {
            products.push(data);
        }
        if (productsLength == products.length) {
            toastOption.title = "Product Already Added";
            toastOption.msg = "You have already added this product to cart list";
        }
        if (type == 'wishlist') {
            this.removeLocalWishlistProduct(data);
        }
        this.toastyService.wait(toastOption);
        setTimeout(function () {
            localStorage.setItem("cart_item", JSON.stringify(products));
            _this.calculateLocalCartProdCounts();
        }, 500);
    };
    EmbryoService.prototype.buyNow = function (data) {
        var products;
        products = JSON.parse(localStorage.getItem("cart_item")) || [];
        var found = products.some(function (el, index) {
            if (el.name == data.name) {
                if (!data.quantity) {
                    data.quantity = 1;
                }
                products[index]['quantity'] = data.quantity;
                return true;
            }
        });
        if (!found) {
            products.push(data);
        }
        localStorage.setItem("cart_item", JSON.stringify(products));
        this.calculateLocalCartProdCounts();
    };
    EmbryoService.prototype.updateAllLocalCartProduct = function (products) {
        localStorage.removeItem('cart_item');
        localStorage.setItem("cart_item", JSON.stringify(products));
    };
    // returning LocalCarts Product Count
    EmbryoService.prototype.calculateLocalCartProdCounts = function () {
        this.localStorageCartProducts = null;
        this.localStorageCartProducts = JSON.parse(localStorage.getItem("cart_item")) || [];
        this.navbarCartCount = +((this.localStorageCartProducts).length);
    };
    // Removing cart from local
    EmbryoService.prototype.removeLocalCartProduct = function (product) {
        var _this = this;
        var products = JSON.parse(localStorage.getItem("cart_item"));
        for (var i = 0; i < products.length; i++) {
            if (products[i].productId === product.productId) {
                products.splice(i, 1);
                break;
            }
        }
        var toastOption = {
            title: "Remove Product From Cart",
            msg: "Product removing from cart",
            showClose: true,
            timeout: 1000,
            theme: "material"
        };
        this.toastyService.wait(toastOption);
        setTimeout(function () {
            // ReAdding the products after remove
            localStorage.setItem("cart_item", JSON.stringify(products));
            _this.calculateLocalCartProdCounts();
        }, 500);
    };
    /*
       ----------  Wishlist Product Function  ----------
    */
    // Adding new Product to Wishlist in localStorage
    EmbryoService.prototype.addToWishlist = function (data) {
        var _this = this;
        var toastOption = {
            title: "Adding Product To Wishlist",
            msg: "Product adding to the wishlist",
            showClose: true,
            timeout: 1000,
            theme: "material"
        };
        var products;
        products = JSON.parse(localStorage.getItem("wishlist_item")) || [];
        var productsLength = products.length;
        var found = products.some(function (el, index) {
            if (el.name == data.name) {
                if (!data.quantity) {
                    data.quantity = 1;
                }
                products[index]['quantity'] = data.quantity;
                return true;
            }
        });
        if (!found) {
            products.push(data);
        }
        if (productsLength == products.length) {
            toastOption.title = "Product Already Added";
            toastOption.msg = "You have already added this product to wishlist";
        }
        this.toastyService.wait(toastOption);
        setTimeout(function () {
            localStorage.setItem("wishlist_item", JSON.stringify(products));
            _this.calculateLocalWishlistProdCounts();
        }, 500);
    };
    // returning LocalWishlist Product Count
    EmbryoService.prototype.calculateLocalWishlistProdCounts = function () {
        this.localStorageWishlist = null;
        this.localStorageWishlist = JSON.parse(localStorage.getItem("wishlist_item")) || [];
        this.navbarWishlistProdCount = +((this.localStorageWishlist).length);
    };
    // Removing Wishlist from local
    EmbryoService.prototype.removeLocalWishlistProduct = function (product) {
        var _this = this;
        var products = JSON.parse(localStorage.getItem("wishlist_item"));
        for (var i = 0; i < products.length; i++) {
            if (products[i].productId === product.productId) {
                products.splice(i, 1);
                break;
            }
        }
        var toastOption = {
            title: "Remove Product From Wishlist",
            msg: "Product removing from wishlist",
            showClose: true,
            timeout: 1000,
            theme: "material"
        };
        this.toastyService.wait(toastOption);
        setTimeout(function () {
            // ReAdding the products after remove
            localStorage.setItem("wishlist_item", JSON.stringify(products));
            _this.calculateLocalWishlistProdCounts();
        }, 500);
    };
    EmbryoService.prototype.addAllWishListToCart = function (dataArray) {
        var _this = this;
        var a;
        a = JSON.parse(localStorage.getItem("cart_item")) || [];
        for (var _i = 0, dataArray_1 = dataArray; _i < dataArray_1.length; _i++) {
            var singleData = dataArray_1[_i];
            a.push(singleData);
        }
        var toastOption = {
            title: "Adding All Product To Cart",
            msg: "Products adding to the cart",
            showClose: true,
            timeout: 1000,
            theme: "material"
        };
        this.toastyService.wait(toastOption);
        setTimeout(function () {
            localStorage.removeItem('wishlist_item');
            localStorage.setItem("cart_item", JSON.stringify(a));
            _this.calculateLocalCartProdCounts();
            _this.calculateLocalWishlistProdCounts();
        }, 500);
    };
    /**
     * getBlogList used to get the blog list.
     */
    EmbryoService.prototype.getBlogList = function () {
        var blogs;
        blogs = this.db.list("blogs");
        return blogs;
    };
    /**
     * getContactInfo used to get the contact infomation.
     */
    EmbryoService.prototype.getContactInfo = function () {
        var contact;
        contact = this.db.object("contact");
        return contact;
    };
    /**
     * getTermCondition used to get the term and condition.
     */
    EmbryoService.prototype.getTermCondition = function () {
        var termCondition;
        termCondition = this.db.list("term_condition");
        return termCondition;
    };
    /**
     * getPrivacyPolicy used to get the privacy policy.
     */
    EmbryoService.prototype.getPrivacyPolicy = function () {
        var privacyPolicy;
        privacyPolicy = this.db.list("privacy_policy");
        return privacyPolicy;
    };
    /**
     * getFaq used to get the faq.
     */
    EmbryoService.prototype.getFaq = function () {
        var faq;
        faq = this.db.object("faq");
        return faq;
    };
    /**
     * getProductReviews used to get the product review.
     */
    EmbryoService.prototype.getProductReviews = function () {
        var review;
        review = this.db.list("product_reviews");
        return review;
    };
    /**
     * Buy Product functions
     */
    EmbryoService.prototype.addBuyUserDetails = function (formdata) {
        localStorage.setItem("user", JSON.stringify(formdata));
        var product = JSON.parse(localStorage.getItem("cart_item"));
        localStorage.setItem("byProductDetails", JSON.stringify(product));
        this.buyUserCartProducts = JSON.parse(localStorage.getItem("byProductDetails"));
        localStorage.removeItem("cart_item");
        this.calculateLocalCartProdCounts();
    };
    EmbryoService.prototype.removeBuyProducts = function () {
        localStorage.removeItem("byProductDetails");
        this.buyUserCartProducts = JSON.parse(localStorage.getItem("byProductDetails"));
    };
    /**
     * getTeam used to get the team data.
     */
    EmbryoService.prototype.getTeam = function () {
        var team;
        team = this.db.list("team");
        return team;
    };
    /**
     * getTestimonial used to get the testimonial data.
     */
    EmbryoService.prototype.getTestimonial = function () {
        var testimonial;
        testimonial = this.db.object("testimonial");
        return testimonial;
    };
    /**
     * getMissionVision used to get the Mission and Vision data.
     */
    EmbryoService.prototype.getMissionVision = function () {
        var mission_vision;
        mission_vision = this.db.list("mission_vision");
        return mission_vision;
    };
    /**
     * getAboutInfo used to get the about info data.
     */
    EmbryoService.prototype.getAboutInfo = function () {
        var about_info;
        about_info = this.db.object("about_info");
        return about_info;
    };
    EmbryoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            ngx_toasta__WEBPACK_IMPORTED_MODULE_4__["ToastaService"],
            ngx_toasta__WEBPACK_IMPORTED_MODULE_4__["ToastaConfig"]])
    ], EmbryoService);
    return EmbryoService;
}());



/***/ }),

/***/ "./src/app/Templates/Grid/Grid3/Grid3.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Templates/Grid/Grid3/Grid3.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout='row wrap' class=\"col-gap\" *ngIf=\"blogList && blogList.length>0\">\r\n  <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33.33\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\" *ngFor=\"let blog of blogList\">\r\n    <mat-card>\r\n      <a class=\"p-link\" [routerLink]=\"['/blogs/detail', blog.id]\">\r\n        <img width=\"460\" height=\"310\" mat-card-image [src]=\"blog?.image\" alt=\"post\">\r\n      </a>\r\n      <mat-card-content class=\"relative\">\r\n        <h5 class=\"mb-3\"><a class=\"title-link\" [routerLink]=\"['/blogs/detail', blog.id]\">{{blog?.name}}</a></h5>\r\n        <p [innerHTML]=\"blog?.short_content\"></p>\r\n        <div class=\"meta-tag\">\r\n          <button class=\"simple-btn text-muted\">\r\n            <i class=\"material-icons\">person</i> By Admin</button>\r\n          <button class=\"simple-btn text-muted\">\r\n            <i class=\"material-icons\">\r\n              calendar_today\r\n            </i> {{blog?.author?.post_date}}</button>\r\n        </div>\r\n        <div class=\"m-icon\">\r\n          <button mat-fab [routerLink]=\"['/blogs/detail', blog.id]\">\r\n            <i class=\"material-icons\"> link </i>\r\n          </button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Templates/Grid/Grid3/Grid3.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Templates/Grid/Grid3/Grid3.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1RlbXBsYXRlcy9HcmlkL0dyaWQzL0dyaWQzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Templates/Grid/Grid3/Grid3.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Templates/Grid/Grid3/Grid3.component.ts ***!
  \*********************************************************/
/*! exports provided: Grid3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid3Component", function() { return Grid3Component; });
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

var Grid3Component = /** @class */ (function () {
    function Grid3Component() {
    }
    Grid3Component.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Grid3Component.prototype, "blogList", void 0);
    Grid3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'embryo-Grid3',
            template: __webpack_require__(/*! ./Grid3.component.html */ "./src/app/Templates/Grid/Grid3/Grid3.component.html"),
            styles: [__webpack_require__(/*! ./Grid3.component.scss */ "./src/app/Templates/Grid/Grid3/Grid3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Grid3Component);
    return Grid3Component;
}());



/***/ }),

/***/ "./src/app/Templates/Grid/ProductGrid/ProductGrid.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Templates/Grid/ProductGrid/ProductGrid.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"none\" class=\"col-gap\" *ngIf=\"products && products.length > 0\">\r\n  <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"{{lg}}\" fxFlex.xl=\"{{xl}}\" *ngFor=\"let product of products; let i=index; trackBy: trackByObjectID\">\r\n     <mat-card class=\"example-card\" *ngIf=\"gridLength && (i<gridLength)\">\r\n      <a class=\"p-link\" [routerLink]=\"['/products', product?.type, product?.id]\">\r\n        <img width=\"626\" height=\"800\" mat-card-image [src]=\"product?.image\" alt=\"Photo of a Shiba Inu\">\r\n      </a>\r\n      <div class=\"wishlist-icon {{i}}-wishlist\">\r\n         <a (click)=\"productAddToWishlist(product, i+'-wishlist')\"><i  class=\"material-icons\"> favorite </i></a>\r\n      </div>\r\n        <mat-card-content class=\"product-content relative\">\r\n           <h5><a [routerLink]=\"['/products', product?.type, product?.id]\" class=\"title-link\">{{product?.name}}</a> </h5>\r\n           <div>\r\n              <div fxFlex fxLayoutAlign=\"space-between\">\r\n                 <h6 class=\"accent-color\">{{product?.price | currency: currency}}</h6>\r\n                 <div class=\"rating-star\">\r\n                    <embryo-Rating [rate]=\"product.rating\"></embryo-Rating>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"m-icon\" *ngIf=\"checkCartAlready(product)\">\r\n              <embryo-AddToCardButton [product]=\"product\" (addToCart)=\"addToCartProduct($event)\"></embryo-AddToCardButton>\r\n           </div>\r\n           <div class=\"m-icon\" *ngIf=\"!checkCartAlready(product)\">\r\n               <button mat-fab [routerLink]=\"['/products', product?.type, product?.id]\"><i class=\"material-icons\">remove_red_eye</i> </button>\r\n           </div>\r\n           \r\n        </mat-card-content>\r\n     </mat-card>\r\n     <!-- Multiple show products grid -->\r\n     <mat-card class=\"example-card\" *ngIf=\"!gridLength\">\r\n        <a class=\"p-link\" *ngIf=\"product?.id\" [routerLink]=\"['/products', product?.type, product?.id]\">\r\n          <img width=\"626\" height=\"800\" mat-card-image [src]=\"product?.image\" alt=\"Photo\">\r\n        </a>\r\n        <a class=\"p-link\" *ngIf=\"!product?.id\" [routerLink]=\"['/products/accessories/17']\">\r\n          <img width=\"626\" height=\"800\" mat-card-image [src]=\"product?.image\" [ngClass]=\"{ transparent: !loaded }\" (load)=\"onLoad()\" alt=\"Photo\">\r\n        </a>\r\n        <div class=\"wishlist-icon {{i}}-wishlist\">\r\n            <a (click)=\"productAddToWishlist(product, i+'-wishlist')\"><i  class=\"material-icons\"> favorite </i></a>\r\n         </div>\r\n        <mat-card-content class=\"product-content relative\">\r\n           <h5><a *ngIf=\"product?.id\" [routerLink]=\"['/products', product?.type, product?.id]\" class=\"title-link\">{{product?.name}}</a> </h5>\r\n           <h5><a *ngIf=\"!product?.id\" [routerLink]=\"['/products/accessories/17']\" class=\"title-link\">{{product?.name}}</a> </h5>\r\n           <div>\r\n              <div fxFlex fxLayoutAlign=\"space-between\">\r\n                 <h6 class=\"accent-color\">{{product?.price | currency: currency}}</h6>\r\n                 <div class=\"rating-star\">\r\n                    <embryo-Rating [rate]=\"product.rating\"></embryo-Rating>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"m-icon\" *ngIf=\"checkCartAlready(product)\">\r\n              <embryo-AddToCardButton [product]=\"product\" (addToCart)=\"addToCartProduct($event)\"></embryo-AddToCardButton>\r\n           </div>\r\n            <div class=\"m-icon\" *ngIf=\"!checkCartAlready(product)\">\r\n               <button mat-fab *ngIf=\"product?.id\" [routerLink]=\"['/products', product?.type, product?.id]\"><i class=\"material-icons\">remove_red_eye</i> </button>\r\n               <button mat-fab *ngIf=\"!product?.id\"[routerLink]=\"['/products/accessories/17']\"><i class=\"material-icons\">remove_red_eye</i> </button>\r\n           </div>\r\n          \r\n        </mat-card-content>\r\n     </mat-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/Templates/Grid/ProductGrid/ProductGrid.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Templates/Grid/ProductGrid/ProductGrid.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1RlbXBsYXRlcy9HcmlkL1Byb2R1Y3RHcmlkL1Byb2R1Y3RHcmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Templates/Grid/ProductGrid/ProductGrid.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Templates/Grid/ProductGrid/ProductGrid.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGridComponent", function() { return ProductGridComponent; });
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

var ProductGridComponent = /** @class */ (function () {
    function ProductGridComponent() {
        this.gridThree = false;
        this.addToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addToWishList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loaded = false;
        this.lg = 25;
        this.xl = 25;
    }
    ProductGridComponent.prototype.trackByObjectID = function (index, hit) {
        return hit.objectID;
    };
    ProductGridComponent.prototype.ngOnInit = function () {
        if (this.gridThree) {
            this.lg = 33;
            this.xl = 33;
        }
    };
    ProductGridComponent.prototype.addToCartProduct = function (value) {
        this.addToCart.emit(value);
    };
    ProductGridComponent.prototype.onLoad = function () {
        this.loaded = true;
    };
    ProductGridComponent.prototype.productAddToWishlist = function (value, parentClass) {
        if (!($('.' + parentClass).hasClass('wishlist-active'))) {
            $('.' + parentClass).addClass('wishlist-active');
        }
        this.addToWishList.emit(value);
    };
    ProductGridComponent.prototype.checkCartAlready = function (singleProduct) {
        var products = JSON.parse(localStorage.getItem("cart_item")) || [];
        if (!products.some(function (item) { return item.name == singleProduct.name; })) {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGridComponent.prototype, "products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductGridComponent.prototype, "currency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGridComponent.prototype, "gridLength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProductGridComponent.prototype, "gridThree", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductGridComponent.prototype, "addToCart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductGridComponent.prototype, "addToWishList", void 0);
    ProductGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'embryo-ProductGrid',
            template: __webpack_require__(/*! ./ProductGrid.component.html */ "./src/app/Templates/Grid/ProductGrid/ProductGrid.component.html"),
            styles: [__webpack_require__(/*! ./ProductGrid.component.scss */ "./src/app/Templates/Grid/ProductGrid/ProductGrid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductGridComponent);
    return ProductGridComponent;
}());



/***/ }),

/***/ "./src/app/Templates/Review/Review.component.html":
/*!********************************************************!*\
  !*** ./src/app/Templates/Review/Review.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout='row wrap' class=\"col-gap\" *ngIf=\"userReviews && userReviews.length>0\">\r\n  <ng-container *ngFor=\"let review of userReviews; let i=index;\">\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33.33\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\" *ngIf=\"i<3\">\r\n       <div class=\"testimonial-item\">\r\n         <mat-card class=\"testimonial-card\">\r\n           <mat-card-content>\r\n             <p class=\"user-text\">\r\n               {{review?.comment}}\r\n             </p>\r\n           </mat-card-content>\r\n         </mat-card>\r\n         <div class=\"user-content\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\">\r\n           <div class=\"user-thumb\">\r\n             <img [src]=\"review?.img\" alt=\"user image\" height=\"200\" width=\"200\">\r\n           </div>\r\n           <div class=\"user-info\">\r\n             <h6 class=\"mb-0\">{{review?.name}}</h6>\r\n             <p class=\"text-md text-muted\">{{review?.designation}}</p>\r\n           </div>\r\n         </div>\r\n       </div>\r\n      </div>\r\n  </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Templates/Review/Review.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Templates/Review/Review.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-text {\n  color: rgba(0, 0, 0, 0.54);\n  font-style: italic; }\n\n.user-content {\n  padding-top: 0.6rem;\n  padding-left: 2rem; }\n\n.testimonial-card.mat-card {\n  padding: 2rem 2rem 5rem 2rem; }\n\n.user-thumb {\n  width: 74px;\n  border-radius: 100%;\n  position: relative;\n  top: -60px; }\n\n.user-thumb img {\n    border-radius: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVGVtcGxhdGVzL1Jldmlldy9DOlxcVXNlcnNcXERoaW5ha2FyIFJlZGR5XFxEZXNrdG9wXFxTaG9wcGluZyBNYWpvciBQcm9qZWN0L3NyY1xcYXBwXFxUZW1wbGF0ZXNcXFJldmlld1xcUmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMEJBQTBCO0VBQzFCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBSlo7SUFNSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1RlbXBsYXRlcy9SZXZpZXcvUmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGVzdGltb25pYWwgU2VjdGlvblxyXG4udXNlci10ZXh0IHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuICBcclxuICAudXNlci1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjZyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXN0aW1vbmlhbC1jYXJkLm1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMnJlbSA1cmVtIDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC51c2VyLXRodW1iIHtcclxuICAgIHdpZHRoOiA3NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTYwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/Templates/Review/Review.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Templates/Review/Review.component.ts ***!
  \******************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
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

var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
        this.userReviews = [];
    }
    ReviewComponent.prototype.ngOnInit = function () {
        this.getReviews();
    };
    ReviewComponent.prototype.getReviews = function () {
        this.userReviews = [];
        if (this.reviews && this.reviews.length > 0) {
            for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
                var review = _a[_i];
                for (var _b = 0, _c = review.user_rating; _b < _c.length; _b++) {
                    var userReview = _c[_b];
                    this.userReviews.push(userReview);
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReviewComponent.prototype, "reviews", void 0);
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'embryo-Review',
            template: __webpack_require__(/*! ./Review.component.html */ "./src/app/Templates/Review/Review.component.html"),
            styles: [__webpack_require__(/*! ./Review.component.scss */ "./src/app/Templates/Review/Review.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/Templates/ShopDetails/ShopDetails.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Templates/ShopDetails/ShopDetails.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-detail-page section-gap bg-white\" *ngIf=\"detailData\">\r\n  <div class=\"container\">\r\n    <div fxLayout='row wrap' fxLayoutAlign=\"center center\" class=\"col-gap\">\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=90 fxFlex.lg=\"80\" fxFlex.xl=\"90\">\r\n        <div fxLayout='row wrap' class=\"col-gap position-relative\">\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=50 fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n            <div fxLayout='row wrap'>\r\n              <div fxFlex.xs=\"15\" fxFlex.sm=\"15\" fxFlex.md=\"15\" fxFlex.lg=\"15\" fxFlex.xl=\"15\">\r\n                <div class=\"product-detail-image-gallery pr-4\">\r\n                  <mat-grid-list cols=\"1\" rowHeight=\"1:1\" gutterSize=\"20px\">\r\n                    <mat-grid-tile *ngFor=\"let img of detailData?.image_gallery; let i=index\">\r\n                      <div class=\"product-image-gallery-item\">\r\n                        <a id=\"{{i}}_img\" class=\"p-link\" [ngClass]=\"{ 'border-active': i === 0 }\" href=\"javascript:void(0)\" (mouseenter)=\"getImagePath(img, i)\">\r\n                          <img [src]=\"img\" alt=\"\">\r\n                        </a>\r\n                      </div>\r\n                    </mat-grid-tile>\r\n                  </mat-grid-list>\r\n                </div>\r\n              </div>\r\n              <div fxFlex.xs=\"85\" fxFlex.sm=\"85\" fxFlex.md=\"85\" fxFlex.lg=\"85\" fxFlex.xl=\"85\" class=\"relative\" *ngIf=\"mainImgPath\">\r\n                <embryo-ImgZoom \r\n                [imgSrc]=\"mainImgPath\" \r\n                    imgStyle=\"width:auto; height:auto;\" \r\n                    resultStyle=\"background-repeat: no-repeat; z-index: 2; position:absolute;\r\n                                   -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n                                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); top: 0;left: 100%;\"\r\n                    lensStyle=\"width:100px; height:100px\"\r\n                    containerStyle=\"\">\r\n                </embryo-ImgZoom>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=50 fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n            <div class=\"product-detail-content\">\r\n              <a href=\"javascript:void(0)\" [routerLink]=\"['/']\">Back to Shop</a>\r\n              <h3>{{detailData?.name}}</h3>\r\n              <div fxLayoutAlign=\"start center\" class=\"mb-3\">\r\n                <div>\r\n                  <a href=\"javascript:void(0)\" class=\"text-underline\" (click)=\"reviewPopup(detailData)\">ADD A REVIEW</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"product-detail-price\">\r\n                <h4 class=\"accent-color\">{{totalPrice | currency:currency}} </h4>\r\n              </div>\r\n              <ul class=\"no-style mb-4\">\r\n                <li>\r\n                  <span class=\"font-medium\"> Availablity </span>: \r\n                    <span *ngIf=\"detailData?.availablity\">In Stocks</span>\r\n                    <span *ngIf=\"!(detailData?.availablity)\">Out Of Stocks</span>\r\n                </li>\r\n                <li>\r\n                  <span class=\"font-medium\">Product Code </span>: {{detailData?.product_code}}\r\n                </li>\r\n                <li>\r\n                  <span class=\"font-medium\">Tags</span>: \r\n                    <ng-container *ngFor=\"let tag of detailData.tags\">{{tag}}</ng-container>\r\n                </li>\r\n              </ul>\r\n              <div class=\"short-des\">\r\n                <p>{{detailData?.description}}\r\n                </p>\r\n              </div>\r\n              <div class=\"bullets-points\">\r\n                <ul class=\"bullets-list\">\r\n                  <li *ngFor=\"let feature of detailData?.features\">\r\n                    {{feature}}\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div fxLayoutGap=\"30px\" class=\"mb-3 select-group\">\r\n                <ng-container *ngIf=\"type == 'men' || type == 'women'\">\r\n                  <mat-form-field>\r\n                    <mat-select class=\"product-detail-select\" placeholder=\"Color\">\r\n                      <ng-container *ngFor=\"let color of colorsArray\">\r\n                        <mat-option class=\"product-detail-select\" value=\"{{color}}\">{{color}}</mat-option>\r\n                      </ng-container>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Size\">\r\n                      <ng-container *ngFor = \"let size of sizeArray\">\r\n                        <mat-option value=\"{{size}}\">{{size}}</mat-option>\r\n                      </ng-container>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </ng-container>\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Quantity\" (selectionChange)=\"calculatePrice(detailData, $event.value)\">\r\n                    <ng-container *ngFor=\"let quantity of quantityArray\">\r\n                      <mat-option value=\"{{quantity}}\">{{quantity}}</mat-option>\r\n                    </ng-container>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"mb-4\">\r\n                <a href=\"javascript:void(0)\" class=\"text-underline\" (click)=\"addToWishlist(detailData)\"> Add To Wishlist</a>\r\n              </div>\r\n              <div class=\"mb-5 detail-btns\">\r\n                <button mat-raised-button color=\"accent\" class=\"button-lg mr-3\" (click)=\"addToCart(detailData)\">Add To Cart</button>\r\n                <button class=\"button-lg\" mat-raised-button (click)=\"buyNow(detailData)\">Buy Now</button>\r\n              </div>\r\n              <div fxLayoutAlign=\"start center\">\r\n                <div class=\"mr-3\"> <span>Share Now</span></div>\r\n                <div class=\"detail-product-share\">\r\n                  <embryo-SocialShare></embryo-SocialShare>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Templates/ShopDetails/ShopDetails.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Templates/ShopDetails/ShopDetails.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-group .mat-form-field {\n  width: 110px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVGVtcGxhdGVzL1Nob3BEZXRhaWxzL0M6XFxVc2Vyc1xcRGhpbmFrYXIgUmVkZHlcXERlc2t0b3BcXFNob3BwaW5nIE1ham9yIFByb2plY3Qvc3JjXFxhcHBcXFRlbXBsYXRlc1xcU2hvcERldGFpbHNcXFNob3BEZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvVGVtcGxhdGVzL1Nob3BEZXRhaWxzL1Nob3BEZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdC1ncm91cCAubWF0LWZvcm0tZmllbGQge1xyXG5cdHdpZHRoOiAxMTBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Templates/ShopDetails/ShopDetails.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Templates/ShopDetails/ShopDetails.component.ts ***!
  \****************************************************************/
/*! exports provided: ShopDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopDetailsComponent", function() { return ShopDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopDetailsComponent = /** @class */ (function () {
    function ShopDetailsComponent(route, router, embryoService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.embryoService = embryoService;
        this.colorsArray = ['Red', 'Blue', 'Yellow', 'Green'];
        this.sizeArray = [36, 38, 40, 42, 44, 46, 48];
        this.quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.embryoService.getProductReviews().valueChanges().subscribe(function (res) { _this.productReviews = res; });
    }
    ShopDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainImgPath = this.detailData.image;
        this.totalPrice = this.detailData.price;
        this.route.params.subscribe(function (res) {
            _this.type = null;
            _this.type = res.type;
        });
    };
    ShopDetailsComponent.prototype.ngOnChanges = function () {
        this.mainImgPath = null;
        this.totalPrice = null;
        this.mainImgPath = this.detailData.image;
        this.totalPrice = this.detailData.price;
    };
    /**
     * getImagePath is used to change the image path on click event.
     */
    ShopDetailsComponent.prototype.getImagePath = function (imgPath, index) {
        $('.p-link').removeClass('border-active');
        this.mainImgPath = imgPath;
        $('#' + index + '_img').addClass('border-active');
    };
    ShopDetailsComponent.prototype.calculatePrice = function (detailData, value) {
        detailData.quantity = value;
        this.totalPrice = detailData.price * value;
    };
    ShopDetailsComponent.prototype.reviewPopup = function (detailData) {
        var reviews = null;
        for (var _i = 0, _a = this.productReviews; _i < _a.length; _i++) {
            var review = _a[_i];
            // if((review.id == detailData.id) && (review.type == detailData.type) && (review.category == detailData.category)){
            //    singleProduct = review;
            //    break;
            // }
            reviews = review.user_rating;
        }
        this.embryoService.reviewPopup(detailData, reviews);
    };
    ShopDetailsComponent.prototype.addToWishlist = function (value) {
        this.embryoService.addToWishlist(value);
    };
    ShopDetailsComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    ShopDetailsComponent.prototype.buyNow = function (value) {
        this.embryoService.buyNow(value);
        this.router.navigate(['/checkout']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ShopDetailsComponent.prototype, "detailData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ShopDetailsComponent.prototype, "currency", void 0);
    ShopDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'embryo-ShopDetails',
            template: __webpack_require__(/*! ./ShopDetails.component.html */ "./src/app/Templates/ShopDetails/ShopDetails.component.html"),
            styles: [__webpack_require__(/*! ./ShopDetails.component.scss */ "./src/app/Templates/ShopDetails/ShopDetails.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__["EmbryoService"]])
    ], ShopDetailsComponent);
    return ShopDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Templates/Templates.module.ts":
/*!***********************************************!*\
  !*** ./src/app/Templates/Templates.module.ts ***!
  \***********************************************/
/*! exports provided: TemplatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesModule", function() { return TemplatesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Global/Global.module */ "./src/app/Global/Global.module.ts");
/* harmony import */ var _Grid_ProductGrid_ProductGrid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Grid/ProductGrid/ProductGrid.component */ "./src/app/Templates/Grid/ProductGrid/ProductGrid.component.ts");
/* harmony import */ var _Grid_Grid3_Grid3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Grid/Grid3/Grid3.component */ "./src/app/Templates/Grid/Grid3/Grid3.component.ts");
/* harmony import */ var _Review_Review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Review/Review.component */ "./src/app/Templates/Review/Review.component.ts");
/* harmony import */ var _ShopDetails_ShopDetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShopDetails/ShopDetails.component */ "./src/app/Templates/ShopDetails/ShopDetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TemplatesModule = /** @class */ (function () {
    function TemplatesModule() {
    }
    TemplatesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_5__["GlobalModule"]
            ],
            declarations: [
                _Grid_ProductGrid_ProductGrid_component__WEBPACK_IMPORTED_MODULE_6__["ProductGridComponent"],
                _Grid_Grid3_Grid3_component__WEBPACK_IMPORTED_MODULE_7__["Grid3Component"],
                _Review_Review_component__WEBPACK_IMPORTED_MODULE_8__["ReviewComponent"],
                _ShopDetails_ShopDetails_component__WEBPACK_IMPORTED_MODULE_9__["ShopDetailsComponent"]
            ],
            exports: [
                _Grid_ProductGrid_ProductGrid_component__WEBPACK_IMPORTED_MODULE_6__["ProductGridComponent"],
                _Grid_Grid3_Grid3_component__WEBPACK_IMPORTED_MODULE_7__["Grid3Component"],
                _Review_Review_component__WEBPACK_IMPORTED_MODULE_8__["ReviewComponent"],
                _ShopDetails_ShopDetails_component__WEBPACK_IMPORTED_MODULE_9__["ShopDetailsComponent"]
            ]
        })
    ], TemplatesModule);
    return TemplatesModule;
}());



/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _Main_Main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main/Main.component */ "./src/app/Main/Main.component.ts");
/* harmony import */ var _Pages_Home_HomeOne_HomeOne_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/Home/HomeOne/HomeOne.component */ "./src/app/Pages/Home/HomeOne/HomeOne.component.ts");
/* harmony import */ var _Pages_Home_HomeTwo_HomeTwo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/Home/HomeTwo/HomeTwo.component */ "./src/app/Pages/Home/HomeTwo/HomeTwo.component.ts");
/* harmony import */ var _Pages_Home_HomeThree_HomeThree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/Home/HomeThree/HomeThree.component */ "./src/app/Pages/Home/HomeThree/HomeThree.component.ts");
/* harmony import */ var _Pages_Cart_Cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/Cart/Cart.component */ "./src/app/Pages/Cart/Cart.component.ts");
/* harmony import */ var _Pages_NotFound_NotFound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/NotFound/NotFound.component */ "./src/app/Pages/NotFound/NotFound.component.ts");






var AppRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }, {
        path: '',
        component: _Main_Main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"],
        children: [
            {
                path: 'home',
                component: _Pages_Home_HomeOne_HomeOne_component__WEBPACK_IMPORTED_MODULE_1__["HomeoneComponent"],
            },
            {
                path: 'home-two',
                component: _Pages_Home_HomeTwo_HomeTwo_component__WEBPACK_IMPORTED_MODULE_2__["HomeTwoComponent"],
            },
            {
                path: 'home-three',
                component: _Pages_Home_HomeThree_HomeThree_component__WEBPACK_IMPORTED_MODULE_3__["HomeThreeComponent"]
            },
            {
                path: 'products',
                loadChildren: './Pages/Products/Products.module#ProductsModule'
            },
            {
                path: 'cart',
                component: _Pages_Cart_Cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"]
            },
            {
                path: 'not-found',
                component: _Pages_NotFound_NotFound_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
            },
            {
                path: 'session',
                loadChildren: './Pages/Session/Session.module#SessionModule'
            },
            {
                path: 'checkout',
                loadChildren: './Pages/Checkout/Checkout.module#CheckoutModule'
            },
            {
                path: '',
                loadChildren: './Pages/About/About.module#AboutModule'
            },
            {
                path: 'blogs',
                loadChildren: './Pages/Blogs/Blogs.module#BlogsModule'
            },
            {
                path: 'account',
                loadChildren: './Pages/UserAccount/UserAccount.module#UserAccountModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar></ngx-loading-bar>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        translate.use('en');
        // const browserLang: string = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/esm5/ngx-loading-bar-router.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toasta */ "./node_modules/ngx-toasta/fesm5/ngx-toasta.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Global/Global.module */ "./src/app/Global/Global.module.ts");
/* harmony import */ var _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Templates/Templates.module */ "./src/app/Templates/Templates.module.ts");
/* harmony import */ var _Core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Core/menu/menu-items/menu-items */ "./src/app/Core/menu/menu-items/menu-items.ts");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
/* harmony import */ var _Main_Main_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Main/Main.component */ "./src/app/Main/Main.component.ts");
/* harmony import */ var _Layouts_Header_HeaderOne_HeaderOne_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Layouts/Header/HeaderOne/HeaderOne.component */ "./src/app/Layouts/Header/HeaderOne/HeaderOne.component.ts");
/* harmony import */ var _Layouts_Header_HeaderTwo_HeaderTwo_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Layouts/Header/HeaderTwo/HeaderTwo.component */ "./src/app/Layouts/Header/HeaderTwo/HeaderTwo.component.ts");
/* harmony import */ var _Layouts_Header_HeaderThree_HeaderThree_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Layouts/Header/HeaderThree/HeaderThree.component */ "./src/app/Layouts/Header/HeaderThree/HeaderThree.component.ts");
/* harmony import */ var _Layouts_Footer_FooterOne_FooterOne_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Layouts/Footer/FooterOne/FooterOne.component */ "./src/app/Layouts/Footer/FooterOne/FooterOne.component.ts");
/* harmony import */ var _Layouts_Footer_FooterTwo_FooterTwo_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Layouts/Footer/FooterTwo/FooterTwo.component */ "./src/app/Layouts/Footer/FooterTwo/FooterTwo.component.ts");
/* harmony import */ var _Layouts_Menu_Menu_Menu_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Layouts/Menu/Menu/Menu.component */ "./src/app/Layouts/Menu/Menu/Menu.component.ts");
/* harmony import */ var _Pages_Home_HomeOne_HomeOne_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Pages/Home/HomeOne/HomeOne.component */ "./src/app/Pages/Home/HomeOne/HomeOne.component.ts");
/* harmony import */ var _Pages_Home_HomeTwo_HomeTwo_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Pages/Home/HomeTwo/HomeTwo.component */ "./src/app/Pages/Home/HomeTwo/HomeTwo.component.ts");
/* harmony import */ var _Pages_Home_HomeThree_HomeThree_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Pages/Home/HomeThree/HomeThree.component */ "./src/app/Pages/Home/HomeThree/HomeThree.component.ts");
/* harmony import */ var _Pages_Cart_Cart_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Pages/Cart/Cart.component */ "./src/app/Pages/Cart/Cart.component.ts");
/* harmony import */ var _Pages_NotFound_NotFound_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Pages/NotFound/NotFound.component */ "./src/app/Pages/NotFound/NotFound.component.ts");
/* harmony import */ var _Layouts_Menu_SidebarMenu_SidebarMenu_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Layouts/Menu/SidebarMenu/SidebarMenu.component */ "./src/app/Layouts/Menu/SidebarMenu/SidebarMenu.component.ts");
/* harmony import */ var _Layouts_PaymentDetailSideBar_PaymentDetailSideBar_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Layouts/PaymentDetailSideBar/PaymentDetailSideBar.component */ "./src/app/Layouts/PaymentDetailSideBar/PaymentDetailSideBar.component.ts");
/* harmony import */ var _Layouts_Header_FixedHeader_FixedHeader_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Layouts/Header/FixedHeader/FixedHeader.component */ "./src/app/Layouts/Header/FixedHeader/FixedHeader.component.ts");
/* harmony import */ var _Pages_Session_Session_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Pages/Session/Session.module */ "./src/app/Pages/Session/Session.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Firebase services + enviorment module


// App components

// App routing modules
// import { AppRoutingModule1 } from './Auth_1/shared/routing/app-routing.module';
// Auth service
// import { AuthService } from './Auth_1/shared/services/auth.service';

// import { DashboardComponent } from './Auth_1/components/dashboard/dashboard.component';
// import { ForgotPasswordComponent } from './Auth_1/components/forgot-password/forgot-password.component';

// Reactive Form
// import { SignInComponent } from './Auth_1/components/sign-in/sign-in.component';
// import { SignUpComponent } from './Auth_1/components/sign-up/sign-up.component';
// import { VerifyEmailComponent } from './Auth_1/components/verify-email/verify-email.component';




































/********** Custom option for ngx-translate ******/
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_19__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _Main_Main_component__WEBPACK_IMPORTED_MODULE_26__["MainComponent"],
                _Pages_Home_HomeOne_HomeOne_component__WEBPACK_IMPORTED_MODULE_33__["HomeoneComponent"],
                _Layouts_Header_HeaderOne_HeaderOne_component__WEBPACK_IMPORTED_MODULE_27__["HeaderOneComponent"],
                _Layouts_Footer_FooterOne_FooterOne_component__WEBPACK_IMPORTED_MODULE_30__["FooterOneComponent"],
                _Layouts_Menu_Menu_Menu_component__WEBPACK_IMPORTED_MODULE_32__["MenuComponent"],
                _Layouts_Menu_SidebarMenu_SidebarMenu_component__WEBPACK_IMPORTED_MODULE_38__["SideBarMenuComponent"],
                _Pages_Cart_Cart_component__WEBPACK_IMPORTED_MODULE_36__["CartComponent"],
                _Pages_NotFound_NotFound_component__WEBPACK_IMPORTED_MODULE_37__["NotFoundComponent"],
                _Layouts_PaymentDetailSideBar_PaymentDetailSideBar_component__WEBPACK_IMPORTED_MODULE_39__["PaymentDetailSideBarComponent"],
                _Pages_Home_HomeTwo_HomeTwo_component__WEBPACK_IMPORTED_MODULE_34__["HomeTwoComponent"],
                _Layouts_Header_HeaderTwo_HeaderTwo_component__WEBPACK_IMPORTED_MODULE_28__["HeaderTwoComponent"],
                _Layouts_Footer_FooterTwo_FooterTwo_component__WEBPACK_IMPORTED_MODULE_31__["FooterTwoComponent"],
                _Pages_Home_HomeThree_HomeThree_component__WEBPACK_IMPORTED_MODULE_35__["HomeThreeComponent"],
                _Layouts_Header_HeaderThree_HeaderThree_component__WEBPACK_IMPORTED_MODULE_29__["HeaderThreeComponent"],
                _Layouts_Header_FixedHeader_FixedHeader_component__WEBPACK_IMPORTED_MODULE_40__["FixedHeaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"].withServerTransition({ appId: 'embryo-seo-pre' }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_21__["AppRoutes"], { onSameUrlNavigation: 'reload' }),
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_22__["GlobalModule"],
                _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_23__["TemplatesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_13__["LoadingBarRouterModule"],
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_14__["LoadingBarModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase, 'shoppingproject'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreModule"],
                // AppRoutingModule1,
                _Pages_Session_Session_module__WEBPACK_IMPORTED_MODULE_41__["SessionModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
                ngx_toasta__WEBPACK_IMPORTED_MODULE_16__["ToastaModule"].forRoot(),
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["BidiModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                }),
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_20__["SlickCarouselModule"]
            ],
            providers: [
                _Core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_24__["MenuItems"],
                _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_25__["EmbryoService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyDy1elbbeWT9TJDRkPMvpU49MSrdBOOfb0",
        authDomain: "shoppingproject-bb1e7.firebaseapp.com",
        databaseURL: "https://shoppingproject-bb1e7.firebaseio.com",
        projectId: "shoppingproject-bb1e7",
        storageBucket: "shoppingproject-bb1e7.appspot.com",
        messagingSenderId: "1075792840159"
    }
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/// <reference types="node" />





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dhinakar Reddy\Desktop\Shopping Major Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map