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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getWeather = function (zip) {
        // api.openweathermap.org/data/2.5/weather?zip=19805,us&APPID=877966c0323a428c100e264431e095f0
        this.url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&APPID=877966c0323a428c100e264431e095f0';
        this.zip = zip;
        return this.http.get(this.url)
            .map(this.extractData);
    };
    WeatherService.prototype.extractData = function (res) {
        var body = res.json();
        console.log('body in extractData()', body);
        body.zip = this.zip;
        return body || {};
    };
    WeatherService.prototype.handleError = function (error) {
        console.log('Handing error:', error);
    };
    return WeatherService;
}());
WeatherService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WeatherService);
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map