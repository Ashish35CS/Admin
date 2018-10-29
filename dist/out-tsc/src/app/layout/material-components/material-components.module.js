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
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var bottom_sheet_overview_component_1 = require("./bottom-sheet-overview/bottom-sheet-overview.component");
var bottom_sheets_component_1 = require("./bottom-sheet/bottom-sheets.component");
var button_component_1 = require("./button/button.component");
var dialog_overview_component_1 = require("./dialog-overview/dialog-overview.component");
var dialog_component_1 = require("./dialog/dialog.component");
var material_components_routing_module_1 = require("./material-components-routing.module");
var material_components_component_1 = require("./material-components.component");
var paginator_component_1 = require("./paginator/paginator.component");
var progress_bar_component_1 = require("./progress-bar/progress-bar.component");
var snack_bar_component_1 = require("./snack-bar/snack-bar.component");
var tool_tip_component_1 = require("./tool-tip/tool-tip.component");
var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_components_routing_module_1.MaterialComponentsRoutingModule,
                material_1.MatDialogModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                forms_1.FormsModule,
                material_1.MatButtonModule,
                material_1.MatListModule,
                material_1.MatBottomSheetModule,
                material_1.MatSnackBarModule,
                material_1.MatCardModule,
                forms_1.ReactiveFormsModule,
                material_1.MatOptionModule,
                material_1.MatSelectModule,
                material_1.MatTooltipModule,
                material_1.MatRadioModule,
                material_1.MatSliderModule,
                material_1.MatProgressBarModule,
                material_1.MatPaginatorModule,
                material_1.MatIconModule,
                flex_layout_1.FlexLayoutModule
            ],
            declarations: [
                material_components_component_1.MaterialComponentsComponent,
                dialog_component_1.DialogComponent,
                dialog_overview_component_1.DialogOverviewComponent,
                bottom_sheets_component_1.BottomSheetComponent,
                bottom_sheet_overview_component_1.BottomSheetOverviewComponent,
                snack_bar_component_1.SnackBarComponent,
                snack_bar_component_1.PizzaPartyComponent,
                tool_tip_component_1.ToolTipComponent,
                paginator_component_1.PaginatorComponent,
                progress_bar_component_1.ProgressBarComponent,
                button_component_1.ButtonComponent
            ],
            entryComponents: [
                dialog_overview_component_1.DialogOverviewComponent,
                bottom_sheet_overview_component_1.BottomSheetOverviewComponent,
                snack_bar_component_1.PizzaPartyComponent
            ]
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());
exports.MaterialComponentsModule = MaterialComponentsModule;
//# sourceMappingURL=material-components.module.js.map