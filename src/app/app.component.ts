import { Component } from '@angular/core';

import { WeatherDisplayComponent } from './modules/weather/weather_display/weather_display.component';
import { WeatherInputComponent } from './modules/weather/weather_input/weather_input.component';

@Component({
	selector: 'my-app',
	directives: [ 
		WeatherDisplayComponent,
		WeatherInputComponent
	],
	template: `
	<header></header>
	<section class="container-fluid flex-grow">
	    <div class="row">
	        <div class="col-md-9 push-md-3 pt-2">
	            <weather-display [weather]='weather'></weather-display>
	        </div>
	        <div class="col-md-3 pull-md-9 pt-3">
	            <div class="bg-faded mb-3">
	                <h5 class="card-header">Zip Code</h5>
	                <div class="card-block">
	                	<weather-input (notify)='onNotify($event)'></weather-input>
	                </div>
	            </div>
	        </div>
	    </div>
	</section>
	<footer-section></footer-section>`,
})
export class AppComponent  {

	public weather:any = {
		coord: {},
		main: {},
		wind: {},
		weather: [
			{description: ''}
		]
	};

	onNotify(message:any):void {
		console.log('weather received in AppComponent',message);
		this.weather = message;
	}

}