import { NgModule,ErrorHandler }			from '@angular/core';
import { BrowserModule }	from '@angular/platform-browser';
import { NgbModule }		from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }		from './app.component';
import { HeaderComponent }	from './components/header/header.component';
import { FooterComponent }	from './components/footer/footer.component';

import { WeatherModule }	from './modules/weather/weather.module';

class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('ERROR: ' + error);
  }
}

@NgModule({
  imports:      [ 
  	BrowserModule, 
  	NgbModule.forRoot(),
  	WeatherModule
  ],
  declarations: [ 
  	AppComponent, 
  	HeaderComponent, 
  	FooterComponent
  ],
  providers: [ 
    {provide: ErrorHandler, useClass: MyErrorHandler}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }