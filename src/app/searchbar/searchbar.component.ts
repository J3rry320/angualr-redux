import { Component, OnInit } from "@angular/core";
import Axios from "axios";
import { NgRedux, select } from "@angular-redux/store";
import { API_KEY, ROOT_URL } from "config";
import { fromEvent } from "rxjs";
import { debounceTime, map } from "rxjs/operators";

import { SEARCH_WEATHER, searchWeather } from "../actions";
import { IAppState } from "../reducers/initial-state";
import { store } from "../reducers";
@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"]
})
export class SearchbarComponent implements OnInit {
  @select() weather: IAppState;
  public weatherData: unknown;
  constructor(private redux: NgRedux<IAppState>) {}
  ngOnInit() {
    const input = document.getElementById("cityName");

    const event = fromEvent(input, "input").pipe(
      // @ts-ignore
      map(i => i.currentTarget.value)
    );

    const debouncedInput = event.pipe(debounceTime(568));

    debouncedInput.subscribe((val: string) => {
      this.searchWeather(val);
    });
  }
  searchWeather(cityName: string) {
    this.redux.dispatch(<any>searchWeather(cityName));
    this.weatherData = this.redux.getState();
  }
}
