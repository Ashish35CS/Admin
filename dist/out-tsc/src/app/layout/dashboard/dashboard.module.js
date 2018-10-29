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
var grid_list_1 = require("@angular/material/grid-list");
var input_1 = require("@angular/material/input");
var stat_module_1 = require("../../shared/modules/stat/stat.module");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var dashboard_component_1 = require("./dashboard.component");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                dashboard_routing_module_1.DashboardRoutingModule,
                grid_list_1.MatGridListModule,
                stat_module_1.StatModule,
                material_1.MatCardModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatCardModule,
                material_1.MatTableModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                input_1.MatInputModule
            ],
            declarations: [dashboard_component_1.DashboardComponent]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map