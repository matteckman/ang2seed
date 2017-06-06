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
var core_1 = require("@angular/core");
var weather_service_1 = require("../services/weather.service");
var WeatherInputComponent = (function () {
    function WeatherInputComponent(weatherService) {
        this.weatherService = weatherService;
        this.zip = '';
        // @Input() weather:any;
        this.notify = new core_1.EventEmitter();
    }
    WeatherInputComponent.prototype.getWeather = function () {
        var _this = this;
        event.preventDefault();
        this.weather = this.weatherService.getWeather(this.zip)
            .subscribe(function (weather) {
            _this.notify.emit(weather);
        }, function (error) { return _this.errorMessage = error; });
    };
    return WeatherInputComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WeatherInputComponent.prototype, "notify", void 0);
WeatherInputComponent = __decorate([
    core_1.Component({
        providers: [weather_service_1.WeatherService],
        selector: 'weather-input',
        templateUrl: "./weather_input.component.html",
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], WeatherInputComponent);
exports.WeatherInputComponent = WeatherInputComponent;
//# sourceMappingURL=weather_input.component.js.map