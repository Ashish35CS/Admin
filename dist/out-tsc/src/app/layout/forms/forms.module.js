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
var auto_complete_component_1 = require("./auto-complete/auto-complete.component");
var checkbox_component_1 = require("./checkbox/checkbox.component");
var date_picker_component_1 = require("./date-picker/date-picker.component");
var form_field_component_1 = require("./form-field/form-field.component");
var forms_routing_module_1 = require("./forms-routing.module");
var forms_component_1 = require("./forms.component");
var slider_component_1 = require("./slider/slider.component");
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_routing_module_1.FormsRoutingModule,
                material_1.MatAutocompleteModule,
                flex_layout_1.FlexLayoutModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                material_1.MatSlideToggleModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatRadioModule,
                material_1.MatDatepickerModule,
                material_1.MatNativeDateModule,
                material_1.MatFormFieldModule,
                material_1.MatSelectModule,
                material_1.MatSliderModule
            ],
            declarations: [
                forms_component_1.FormsComponent,
                checkbox_component_1.CheckboxComponent,
                date_picker_component_1.DatePickerComponent,
                form_field_component_1.FormFieldComponent,
                slider_component_1.SliderComponent,
                auto_complete_component_1.AutoCompleteComponent
            ]
        })
    ], FormsModule);
    return FormsModule;
}());
exports.FormsModule = FormsModule;
//# sourceMappingURL=forms.module.js.map