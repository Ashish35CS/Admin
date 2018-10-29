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
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var grid_routing_module_1 = require("./grid-routing.module");
var grid_component_1 = require("./grid.component");
var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, grid_routing_module_1.GridRoutingModule, flex_layout_1.FlexLayoutModule, material_1.MatCardModule],
            declarations: [grid_component_1.GridComponent]
        })
    ], GridModule);
    return GridModule;
}());
exports.GridModule = GridModule;
//# sourceMappingURL=grid.module.js.map