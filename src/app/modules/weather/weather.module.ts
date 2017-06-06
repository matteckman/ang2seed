import { NgModule }                 from '@angular/core';
import { CommonModule }	            from '@angular/common';
import { HttpModule }	              from '@angular/http';
import { FormsModule }              from '@angular/forms';

import { WeatherInputComponent }    from './weather_input/weather_input.component';
import { WeatherDisplayComponent }  from './weather_display/weather_display.component';

import { WeatherService }           from './services/weather.service';

@NgModule({
  imports:      [ 
  	CommonModule, 
  	HttpModule,
    FormsModule
  ],
  exports: [
    WeatherInputComponent,
    WeatherDisplayComponent
  ],
  declarations: [ 
  	WeatherInputComponent,
  	WeatherDisplayComponent
  ],
  providers: [
  	WeatherService
  ]
})
export class WeatherModule { }