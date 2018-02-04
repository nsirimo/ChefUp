"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var recipe_service_1 = require("../Services/recipe.service");
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(_router, repService) {
        var _this = this;
        this._router = _router;
        this.repService = repService;
        this.RecipeList = [];
        this.userInput = '';
        this.repService.getRecipeList()
            .subscribe(function (data) { return (_this.RecipeList = data.json()); });
    }
    HomePageComponent.prototype.onEnter = function (userInput) {
        var _this = this;
        this.userInput = userInput;
        console.log(userInput);
        this.repService.getRecipeList()
            .subscribe(function (data) { return (_this.RecipeList = data.json()); });
    };
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'app-homepage.component.html',
            styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css',
                'app-homepage.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, recipe_service_1.RecipeServices])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=app-homepage.component.js.map