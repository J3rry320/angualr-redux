import { NgRedux, select } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { ROOT_URL, SEARCH_NEWS_BY_CITY_URL } from "config";
import { IAppState } from "../../store/reducers/initial-state";
@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"]
})
export class SearchbarComponent implements OnInit {
  @select() news: IAppState;
  public newsData: any;
  public inputValue: string = null;
  constructor(private redux: NgRedux<IAppState>) {}
  ngOnInit() {}
  onChange = (event: any) => {
    this.inputValue = event.target.value;
  };
  getNews = async () => {
    await this.redux.dispatch({
      type: "fetchNews",
      url: SEARCH_NEWS_BY_CITY_URL,
      city: this.inputValue
    });
    this.redux.subscribe(() => {
      const state = this.redux.getState();

      // @ts-ignore
      this.newsData = state.NewsByTopic;
    });
  };
}
