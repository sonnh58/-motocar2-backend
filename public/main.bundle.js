webpackJsonp([1,4],{

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 123;


/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(142);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(254),
        styles: [__webpack_require__(201)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_admin_guard__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_smart_table__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__register_register_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_user_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_custom_render_component__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__devices_devices_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__notifications_notifications_component__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'devices', component: __WEBPACK_IMPORTED_MODULE_19__devices_devices_component__["a" /* DevicesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_20__notifications_notifications_component__["a" /* NotificationsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_17__user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_admin_guard__["a" /* AdminGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pipes_custom_render_component__["a" /* CustomRenderPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pipes_custom_render_component__["b" /* CustomRenderDateComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pipes_custom_render_component__["c" /* CustomRenderObjectComponent */],
            __WEBPACK_IMPORTED_MODULE_19__devices_devices_component__["a" /* DevicesComponent */],
            __WEBPACK_IMPORTED_MODULE_20__notifications_notifications_component__["a" /* NotificationsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_14_ng2_smart_table__["a" /* Ng2SmartTableModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_18__pipes_custom_render_component__["a" /* CustomRenderPasswordComponent */], __WEBPACK_IMPORTED_MODULE_18__pipes_custom_render_component__["b" /* CustomRenderDateComponent */], __WEBPACK_IMPORTED_MODULE_18__pipes_custom_render_component__["c" /* CustomRenderObjectComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_12__guards_admin_guard__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/**
 * Created by sonsi_000 on 4/11/2017.
 */
var Config = (function () {
    function Config() {
    }
    return Config;
}());

Config.apiUrl = "api/"; // http://localhost:8000/api/ or api/
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(authService, flashMessagesService) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.settings = {
            columns: {
                username: {
                    title: 'Username',
                    filter: false,
                    editable: false
                },
                record_id: {
                    title: 'Record ID',
                    filter: false,
                    editable: false
                },
                title: {
                    title: 'Title',
                    filter: false,
                    editable: false
                },
                make: {
                    title: 'Brand',
                    filter: false,
                    editable: false
                },
                year: {
                    title: 'Year',
                    filter: false,
                    editable: false
                },
                url: {
                    title: 'Url',
                    filter: false,
                    editable: false
                },
                notified: {
                    title: 'Push Notification',
                    editable: false
                }
            },
            actions: {
                add: false,
                delete: false,
                position: 'right'
            },
            attr: {
                id: '_id'
            },
            edit: {
                editButtonContent: 'PUSH',
                saveButtonContent: 'CONFIRM',
                confirmSave: true,
            },
            paper: {
                display: true,
                perPage: 20
            }
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["b" /* LocalDataSource */]();
        this.authService.getData().subscribe(function (data) {
            _this.source.load(data);
            _this.source.setPaging(0, 20, true);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.refresh = function () {
        var _this = this;
        this.authService.requestCars()
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show("Getting data.....!", {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.authService.getData().subscribe(function (data) {
                    _this.source.load(data);
                    _this.source.setPaging(0, 20, true);
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }
            else {
                _this.flashMessagesService.show("Failed to get data!", {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        }, function (error) {
            _this.flashMessagesService.show(error.msg, {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        });
    };
    DashboardComponent.prototype.onSaveConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to push notification to user?')) {
            var _id_1 = event.newData['_id'];
            this.authService.pushNotification(_id_1)
                .subscribe(function (data) {
                _this.authService.updateData(_id_1)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessagesService.show('Notification has been delivered!', {
                            cssClass: 'alert-success',
                            timeout: 3000
                        });
                        _this.authService.getData().subscribe(function (data) {
                            _this.source.load(data);
                            _this.source.setPaging(0, 20, true);
                        });
                    }
                    else {
                        _this.flashMessagesService.show("Failed to update Db!", {
                            cssClass: 'alert-danger',
                            timeout: 5000
                        });
                    }
                }, function (error) {
                    _this.flashMessagesService.show("An error has occurred! (db)!", {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                });
            }, function (error) {
                _this.flashMessagesService.show("An error has occurred! Please check API Key, App ID, Template ID.", {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(255),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DevicesComponent = (function () {
    function DevicesComponent(authService, flashMessagesService) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.settings = {
            columns: {
                device_model: {
                    title: 'Model',
                    filter: false,
                    editable: false
                },
                session_count: {
                    title: 'Session',
                    filter: false,
                    editable: false
                },
                device_os: {
                    title: 'OS',
                    filter: false,
                    editable: false
                },
                language: {
                    title: 'Language',
                    filter: false,
                    editable: false
                }
            },
            actions: {
                add: false,
                delete: false,
                edit: false,
                position: 'right'
            },
            attr: {
                id: '_id'
            },
            paper: {
                display: true,
                perPage: 20
            }
        };
    }
    DevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["b" /* LocalDataSource */]();
        this.authService.getDevices().subscribe(function (data) {
            _this.count = data.total_count;
            _this.source.load(data.players);
            _this.source.setPaging(0, 20, true);
        }, function (err) {
            _this.flashMessagesService.show("Please check your OneSignal App ID and API Key", {
                cssClass: 'alert-danger',
                timeout: 20000
            });
            return false;
        });
    };
    return DevicesComponent;
}());
DevicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-devices',
        template: __webpack_require__(256),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], DevicesComponent);

var _a, _b;
//# sourceMappingURL=devices.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by sonsi_000 on 4/19/2017.
 */



var AdminGuard = (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this.authService.isAdmin() && this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminGuard);

var _a, _b;
//# sourceMappingURL=admin.guard.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by sonsi_000 on 4/11/2017.
 */



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessagesService.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(257),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(258),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_custom_render_component__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationsComponent = (function () {
    function NotificationsComponent(authService, flashMessagesService) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.settings = {
            columns: {
                contents: {
                    title: 'Content',
                    filter: false,
                    editable: false,
                    type: 'custom',
                    renderComponent: __WEBPACK_IMPORTED_MODULE_3__pipes_custom_render_component__["c" /* CustomRenderObjectComponent */]
                },
                failed: {
                    title: 'Failed',
                    filter: false,
                    editable: false
                },
                successful: {
                    title: 'Successful',
                    filter: false,
                    editable: false
                },
                send_after: {
                    title: 'Sent At',
                    filter: false,
                    editable: false,
                    type: 'custom',
                    renderComponent: __WEBPACK_IMPORTED_MODULE_3__pipes_custom_render_component__["b" /* CustomRenderDateComponent */]
                }
            },
            actions: {
                add: false,
                delete: false,
                edit: false,
                position: 'right'
            },
            attr: {
                id: '_id'
            },
            paper: {
                display: true,
                perPage: 20
            }
        };
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["b" /* LocalDataSource */]();
        this.authService.getNotifications().subscribe(function (data) {
            _this.count = data.total_count;
            _this.source.load(data.notifications);
            _this.source.setPaging(0, 20, true);
        }, function (err) {
            _this.flashMessagesService.show("Please check your OneSignal App ID and API Key", {
                cssClass: 'alert-danger',
                timeout: 20000
            });
            return false;
        });
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(259),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], NotificationsComponent);

var _a, _b;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, flashMessagesService) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    ProfileComponent.prototype.getProfile = function () {
        this.user = this.authService.getProfile();
    };
    ProfileComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        var user = {
            username: this.user['username'],
            name: this.user['name'],
            apiKey: this.user['apiKey'],
            appId: this.user['appId'],
            templateId: this.user['templateId'],
            sourceData: this.user['sourceData']
        };
        this.authService.updateProfile(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeProfileData(data.user);
                _this.getProfile();
                _this.flashMessagesService.show('Your information has been updated!', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
            }
            else {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(260),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(flashMessagesService, validateService, authService, router) {
        this.flashMessagesService = flashMessagesService;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            password: this.password
        };
        //required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //register user
        this.authService.registerUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('You are now registered and can log in!', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['login']);
            }
            else {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(261),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_custom_render_component__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = (function () {
    function UserComponent(authService, validateService, flashMessagesService) {
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.settings = {
            columns: {
                username: {
                    title: 'Username',
                    filter: false,
                    editable: false
                },
                name: {
                    title: 'Name',
                    filter: false,
                    editable: true
                },
                password: {
                    title: 'Password',
                    filter: false,
                    editable: true,
                    type: 'custom',
                    renderComponent: __WEBPACK_IMPORTED_MODULE_4__pipes_custom_render_component__["a" /* CustomRenderPasswordComponent */]
                },
                createdAt: {
                    title: 'Created At',
                    filter: false,
                    editable: false
                },
            },
            actions: {
                position: 'right',
                edit: false
            },
            attr: {
                id: '_id'
            },
            add: { confirmCreate: true, },
            edit: {
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                confirmSave: true,
            },
            paper: {
                display: true,
                perPage: 20
            }
        };
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["b" /* LocalDataSource */]();
        this.authService.getUsers().subscribe(function (data) {
            console.log(data);
            _this.source.load(data.data);
            _this.source.setPaging(0, 20, true);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    UserComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete this user?')) {
            var _id_1 = event.newData['_id'];
            this.authService.pushNotification(_id_1)
                .subscribe(function (data) {
                _this.authService.updateData(_id_1)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessagesService.show('Notification has been delivered!', {
                            cssClass: 'alert-success',
                            timeout: 3000
                        });
                        _this.authService.getData().subscribe(function (data) {
                            _this.source.load(data);
                            _this.source.setPaging(0, 20, true);
                        });
                    }
                    else {
                        _this.flashMessagesService.show("Failed to update Db!", {
                            cssClass: 'alert-danger',
                            timeout: 5000
                        });
                    }
                }, function (error) {
                    _this.flashMessagesService.show("An error has occurred! (db)!", {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                });
            }, function (error) {
                _this.flashMessagesService.show("An error has occurred! Please check API Key, App ID, Template ID.", {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            });
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    UserComponent.prototype.onCreateConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to create user?')) {
            console.log(event.newData);
            var user = {
                name: event.newData.name,
                username: event.newData.username,
                password: event.newData.password
            };
            //required fields
            if (!this.validateService.validateRegister(user)) {
                this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            //register user
            this.authService.registerUser(user)
                .subscribe(function (data) {
                if (data.success) {
                    _this.flashMessagesService.show('User is created!', {
                        cssClass: 'alert-success',
                        timeout: 3000
                    });
                }
                else {
                    _this.flashMessagesService.show(data.msg, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                }
            });
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(262),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "\n\n<button class=\"btn btn-success pull-right\" (click)=\"refresh()\" style=\"margin-bottom:16px\">Refresh</button>\n\n<ng2-smart-table [settings]=\"settings\" [source]=\"source\"\n                 (editConfirm)=\"onSaveConfirm($event)\"\n></ng2-smart-table>\n"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" *ngIf=\"count\">Số thiết bị đăng ký: {{count}}</h2>\n<ng2-smart-table [settings]=\"settings\" [source]=\"source\"\n></ng2-smart-table>\n"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" name=\"username\"\n           class=\"form-control\" [(ngModel)]=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" name=\"password\"\n           class=\"form-control\" [(ngModel)]=\"password\">\n  </div>\n  <div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n    <input type=\"button\" class=\"btn btn-primary\" routerLink=\"/register\" value=\"Register\">\n  </div>\n\n</form>\n"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"javascript:void(null)\">Motocars2 Noti Manager</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li *ngIf=\"authService.loggedIn()\" routerLink=\"/dashboard\" routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{exact:true}\">\n          <a href=\"javascript:void(null)\">Dashboard</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li *ngIf=\"authService.loggedIn()\" routerLink=\"/devices\" routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{exact:true}\">\n          <a href=\"javascript:void(null)\">Devices</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li *ngIf=\"authService.loggedIn()\" routerLink=\"/notifications\" routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{exact:true}\">\n          <a href=\"javascript:void(null)\">Notifications</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li *ngIf=\"authService.loggedIn() && authService.isAdmin()\" routerLink=\"/users\" routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{exact:true}\">\n          <a href=\"javascript:void(null)\">Users</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" routerLink=\"/profile\" routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{exact:true}\">\n          <a href=\"javascript:void(null)\">Welcome, {{authService.getProfile().username}}</a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{exact:true}\">\n          <a href=\"javascript:void(null)\">Login</a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{exact:true}\">\n          <a href=\"javascript:void(null)\">Register</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\">\n          <a (click)=\"onLogoutClick()\" href=\"javascript:void(null)\">Logout</a>\n        </li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" *ngIf=\"count\">Số thông báo đẩy đã gửi: {{count}}</h2>\n<ng2-smart-table [settings]=\"settings\" [source]=\"source\"\n></ng2-smart-table>\n"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"well bs-component\">\n      <form (submit)=\"onUpdateSubmit()\" class=\"form-horizontal\">\n        <fieldset>\n          <legend>USER INFORMATION</legend>\n          <div class=\"form-group\">\n            <label for=\"username\" class=\"col-lg-3 control-label\">Username</label>\n            <div class=\"col-lg-9\">\n              <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [ngModel]=\"user.username\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\" class=\"col-lg-3 control-label\">Name</label>\n            <div class=\"col-lg-9\">\n              <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"user.name\" required>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"sourceData\" class=\"col-lg-3 control-label\">Data Source</label>\n            <div class=\"col-lg-9\">\n              <input type=\"text\" class=\"form-control\" id=\"sourceData\" name=\"sourceData\" [(ngModel)]=\"user.sourceData\" required>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"apiKey\" class=\"col-lg-3 control-label\">OneSignal REST API Key</label>\n            <div class=\"col-lg-9\">\n              <input type=\"text\" class=\"form-control\" id=\"apiKey\" name=\"apiKey\" [(ngModel)]=\"user.apiKey\" required>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"appId\" class=\"col-lg-3 control-label\">OneSignal App ID</label>\n            <div class=\"col-lg-9\">\n              <input type=\"text\" class=\"form-control\" id=\"appId\" name=\"appId\" [(ngModel)]=\"user.appId\" required>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"templateId\" class=\"col-lg-3 control-label\">OneSignal Template ID</label>\n            <div class=\"col-lg-9\">\n              <input type=\"text\" class=\"form-control\" id=\"templateId\" name=\"templateId\" [(ngModel)]=\"user.templateId\" required>\n            </div>\n          </div>\n          <input type=\"submit\" class=\"btn btn-success pull-right\" value=\"Update\">\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" name=\"name\"\n           class=\"form-control\" [(ngModel)]=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" name=\"username\"\n           class=\"form-control\" [(ngModel)]=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" name=\"password\"\n           class=\"form-control\" [(ngModel)]=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Register\">\n</form>\n"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<ng2-smart-table [settings]=\"settings\" [source]=\"source\"\n                 (createConfirm)=\"onCreateConfirm($event)\"\n                 (deleteConfirm)=\"onDeleteConfirm($event)\"\n></ng2-smart-table>\n"

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(124);


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomRenderPasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CustomRenderDateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CustomRenderObjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by sonsi_000 on 4/19/2017.
 */

var CustomRenderPasswordComponent = (function () {
    function CustomRenderPasswordComponent() {
    }
    CustomRenderPasswordComponent.prototype.ngOnInit = function () {
        this.renderValue = "************";
    };
    return CustomRenderPasswordComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CustomRenderPasswordComponent.prototype, "value", void 0);
CustomRenderPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    {{renderValue}}\n  ",
    })
], CustomRenderPasswordComponent);

var CustomRenderDateComponent = (function () {
    function CustomRenderDateComponent() {
    }
    CustomRenderDateComponent.prototype.ngOnInit = function () {
        var date = new Date(this.value * 1000);
        this.renderValue = date.toLocaleString();
    };
    return CustomRenderDateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CustomRenderDateComponent.prototype, "value", void 0);
CustomRenderDateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    {{renderValue}}\n  ",
    })
], CustomRenderDateComponent);

var CustomRenderObjectComponent = (function () {
    function CustomRenderObjectComponent() {
    }
    CustomRenderObjectComponent.prototype.ngOnInit = function () {
        this.renderValue = JSON.stringify(this.value);
    };
    return CustomRenderObjectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CustomRenderObjectComponent.prototype, "value", void 0);
CustomRenderObjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    {{renderValue}}\n  ",
    })
], CustomRenderObjectComponent);

//# sourceMappingURL=custom-render.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.authenticateUser = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + 'users/auth', user, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + 'users/register', user, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.storeProfileData = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.getProfile = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        this.user = user;
        return user;
    };
    AuthService.prototype.updateProfile = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        header.append('Content-Type', 'application/json');
        header.append('Authorization', this.authToken);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + 'users/updateProfile', user, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUsers = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        header.append('Content-Type', 'application/json');
        header.append('Authorization', this.authToken);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + 'users/getUsers', {}, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteUser = function (id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        header.append('Content-Type', 'application/json');
        header.append('Authorization', this.authToken);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + 'users/deleteUser', { _id: id }, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getData = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        header.append('Content-Type', 'application/json');
        header.append('Authorization', this.authToken);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + 'getCars', {}, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.requestCars = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        header.append('Content-Type', 'application/json');
        header.append('Authorization', this.authToken);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + 'requestCars', {}, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateData = function (id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        header.append('Content-Type', 'application/json');
        header.append('Authorization', this.authToken);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].apiUrl + 'updateOneCar', { _id: id }, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getDevices = function () {
        this.getProfile();
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        header.append('Content-Type', 'application/json');
        header.append('Authorization', 'Basic ' + this.user.apiKey);
        return this.http.get('https://onesignal.com/api/v1/players?app_id=' + this.user.appId, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getNotifications = function () {
        this.getProfile();
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        header.append('Content-Type', 'application/json');
        header.append('Authorization', 'Basic ' + this.user.apiKey);
        return this.http.get('https://onesignal.com/api/v1/notifications?app_id=' + this.user.appId, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.pushNotification = function (id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.getProfile();
        header.append('Content-Type', 'application/json');
        header.append('Authorization', 'Basic ' + this.user.apiKey);
        var message = {
            app_id: this.user.appId,
            template_id: this.user.templateId,
            data: { _id: id },
            included_segments: ["All"]
        };
        console.log(message);
        return this.http.post('https://onesignal.com/api/v1/notifications', message, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.isAdmin = function () {
        return this.getProfile().isAdmin;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ })

},[308]);
//# sourceMappingURL=main.bundle.js.map