import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import WeatherModel from '../../models/weather.model';

@Injectable()
export class WeatherService {

  constructor (
    private http: Http
  ) {}

  url: string;

  zip: string;

  getWeather(zip): weather<any> {
    
    // api.openweathermap.org/data/2.5/weather?zip=19805,us&APPID=877966c0323a428c100e264431e095f0
    
    this.url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&APPID=877966c0323a428c100e264431e095f0';
    this.zip = zip;
    
    return this.http.get(this.url)
     .map(this.extractData);

  }

  private extractData(res: Response){
    let body = res.json();
    console.log('body in extractData()',body);
    body.zip = this.zip;
    return body || {};
  }

  private handleError(error: Response | any){
    console.log('Handing error:',error);
  }

  /** 
   {"coord":{"lon":-122.09,"lat":37.39},
"sys":{"type":3,"id":168940,"message":0.0297,"country":"US","sunrise":1427723751,"sunset":1427768967},
"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],
"base":"stations",
"main":{"temp":285.68,"humidity":74,"pressure":1016.8,"temp_min":284.82,"temp_max":286.48},
"wind":{"speed":0.96,"deg":285.001},
"clouds":{"all":0},
"dt":1427700245,
"id":0,
"name":"Mountain View",
"cod":200}
   */

}