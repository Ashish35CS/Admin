"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var black_page_routing_module_1 = require("./black-page-routing.module");
var black_page_component_1 = require("./black-page.component");
var BlackPageModule = /** @class */ (function () {
    function BlackPageModule() {
    }
    BlackPageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, black_page_routing_module_1.BlackPageRoutingModule],
            declarations: [black_page_component_1.BlackPageComponent]
        })
    ], BlackPageModule);
    return BlackPageModule;
}());
exports.BlackPageModule = BlackPageModule;
//# sourceMappingURL=black-page.module.js.map