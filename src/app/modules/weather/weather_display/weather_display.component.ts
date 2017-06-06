import { Component,Input } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
	selector: 'weather-display',
	templateUrl: './weather_display.component.html'
})
export class WeatherDisplayComponent { 

	@Input() weather:any = {};

	private errorMessage: any;

	constructor( ){ }

}