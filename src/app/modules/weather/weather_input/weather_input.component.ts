import {Component,Input,Output,EventEmitter } from '@angular/core';

import { WeatherService } from '../services/weather.service';

@Component({
	providers: [ WeatherService ],
	selector: 'weather-input',
	templateUrl: "./weather_input.component.html",
})
export class WeatherInputComponent { 

	public zip:string = '';

	// @Input() weather:any;

	@Output() notify: EventEmitter<any> = new EventEmitter<any>();

	constructor( private weatherService: WeatherService ){  }

	getWeather(){
		event.preventDefault();
		
		this.weather = this.weatherService.getWeather(this.zip)
		.subscribe(
			weather => {
				this.notify.emit(weather);
			},
			error =>  this.errorMessage = <any>error
	    );
	}

}