"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var weather_input_component_1 = require("./weather_input/weather_input.component");
var weather_display_component_1 = require("./weather_display/weather_display.component");
var weather_service_1 = require("./services/weather.service");
var WeatherModule = (function () {
    function WeatherModule() {
    }
    return WeatherModule;
}());
WeatherModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule
        ],
        exports: [
            weather_input_component_1.WeatherInputComponent,
            weather_display_component_1.WeatherDisplayComponent
        ],
        declarations: [
            weather_input_component_1.WeatherInputComponent,
            weather_display_component_1.WeatherDisplayComponent
        ],
        providers: [
            weather_service_1.WeatherService
        ]
    })
], WeatherModule);
exports.WeatherModule = WeatherModule;
//# sourceMappingURL=weather.module.js.map