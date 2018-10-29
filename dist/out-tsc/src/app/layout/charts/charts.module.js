"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ng2_charts_1 = require("ng2-charts");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var flex_layout_1 = require("@angular/flex-layout");
var card_1 = require("@angular/material/card");
var grid_list_1 = require("@angular/material/grid-list");
var charts_routing_module_1 = require("./charts-routing.module");
var charts_component_1 = require("./charts.component");
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                charts_routing_module_1.ChartsRoutingModule,
                ng2_charts_1.ChartsModule,
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                flex_layout_1.FlexLayoutModule
            ],
            declarations: [charts_component_1.ChartsComponent]
        })
    ], ChartsModule);
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;
//# sourceMappingURL=charts.module.js.map