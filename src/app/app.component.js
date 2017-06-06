"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var weather_display_component_1 = require("./modules/weather/weather_display/weather_display.component");
var weather_input_component_1 = require("./modules/weather/weather_input/weather_input.component");
var AppComponent = (function () {
    function AppComponent() {
        this.weather = {
            coord: {},
            main: {},
            wind: {},
            weather: [
                { description: '' }
            ]
        };
    }
    AppComponent.prototype.onNotify = function (message) {
        console.log('weather received in AppComponent', message);
        this.weather = message;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        directives: [
            weather_display_component_1.WeatherDisplayComponent,
            weather_input_component_1.WeatherInputComponent
        ],
        template: "\n\t<header></header>\n\t<section class=\"container-fluid flex-grow\">\n\t    <div class=\"row\">\n\t        <div class=\"col-md-9 push-md-3 pt-2\">\n\t            <weather-display [weather]='weather'></weather-display>\n\t        </div>\n\t        <div class=\"col-md-3 pull-md-9 pt-3\">\n\t            <div class=\"bg-faded mb-3\">\n\t                <h5 class=\"card-header\">Zip Code</h5>\n\t                <div class=\"card-block\">\n\t                \t<weather-input (notify)='onNotify($event)'></weather-input>\n\t                </div>\n\t            </div>\n\t        </div>\n\t    </div>\n\t</section>\n\t<footer-section></footer-section>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map