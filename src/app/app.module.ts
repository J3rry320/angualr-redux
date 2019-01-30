import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WindComponent } from './wind/wind.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { WeatherParentComponent } from './weather-parent/weather-parent.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IAppState, rootReducer, INIT_STATE } from './store';
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
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
