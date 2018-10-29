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
var material_1 = require("@angular/material");
var core_2 = require("@ngx-translate/core");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var topnav_component_1 = require("./components/topnav/topnav.component");
var layout_routing_module_1 = require("./layout-routing.module");
var layout_component_1 = require("./layout.component");
var nav_component_1 = require("./nav/nav.component");
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                layout_routing_module_1.LayoutRoutingModule,
                material_1.MatToolbarModule,
                material_1.MatButtonModule,
                material_1.MatSidenavModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatMenuModule,
                material_1.MatListModule,
                core_2.TranslateModule
            ],
            declarations: [layout_component_1.LayoutComponent, nav_component_1.NavComponent, topnav_component_1.TopnavComponent, sidebar_component_1.SidebarComponent]
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map