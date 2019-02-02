import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { AppComponent } from "./app.component";
import { ForecastComponent } from "./forecast/forecast.component";
import { store } from "./reducers";
import { IAppState } from "./reducers/initial-state";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { WeatherParentComponent } from "./weather-parent/weather-parent.component";
import { WeatherComponent } from "./weather/weather.component";
import { WindComponent } from "./wind/wind.component";

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
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store as any);
  }
  ngDoBootstrap() {}
}
