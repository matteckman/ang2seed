"use strict";
var WeatherModel = (function () {
    function WeatherModel(geocoords, city, temp, windspeed, description, icon) {
        this.geocoords = geocoords;
        this.city = city;
        this.temp = temp;
        this.windspeed = windspeed;
        this.description = description;
        this.icon = icon;
    }
    return WeatherModel;
}());
exports.WeatherModel = WeatherModel;
//# sourceMappingURL=weather.model.js.map