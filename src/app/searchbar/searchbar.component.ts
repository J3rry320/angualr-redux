import { NgRedux, select } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";
import { SEARCH_WEATHER, searchWeather } from "../actions";
import { IAppState } from "../reducers/initial-state";
import { ROOT_URL, API_KEY } from "config";
@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"]
})
export class SearchbarComponent implements OnInit {
  @select() weather: IAppState;
  public news: any;
  constructor(private redux: NgRedux<IAppState>) {}
  ngOnInit() {}
  searchWeather = async () => {
    const input = document.getElementById("cityName");

    const event = fromEvent(input, "input").pipe(
      // @ts-ignore
      map(i => i.currentTarget.value)
    );

    return await this.redux.dispatch({
      type: "fetch",
      url: ROOT_URL
    });
  };
  getNews = async () => {
    await this.searchWeather();
    this.redux.subscribe(() => {
      this.news = this.redux.getState();
    });
  };
}
