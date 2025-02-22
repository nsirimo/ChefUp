"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_service_1 = require("./Services/app.service");
var router_1 = require("@angular/router");
var app_homepage_component_1 = require("./home/app-homepage.component");
var recipe_service_1 = require("./Services/recipe.service");
var forms_1 = require("@angular/forms");
var PipeModule_1 = require("./PipeModule");
var ROUTES = [
    { path: '', component: app_homepage_component_1.HomePageComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                app_homepage_component_1.HomePageComponent
            ],
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                PipeModule_1.SearchPipe,
                router_1.RouterModule.forRoot(ROUTES)
            ],
            providers: [app_service_1.AppService, recipe_service_1.RecipeServices],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map