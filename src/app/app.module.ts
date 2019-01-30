import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WindComponent } from './wind/wind.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { WeatherParentComponent } from './weather-parent/weather-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ForecastComponent,
    WindComponent,
    SearchbarComponent,
    WeatherParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
