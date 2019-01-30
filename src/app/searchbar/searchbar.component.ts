import { Component, OnInit } from "@angular/core";
import Axios from "axios";
import { API_KEY, ROOT_URL } from "config";
import { fromEvent } from "rxjs";
import { debounceTime, map } from "rxjs/operators";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"]
})
export class SearchbarComponent implements OnInit {
  constructor() {}

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
  async searchWeather(cityName: string) {
    try {
      const data = await Axios.get(ROOT_URL, {
        params: {
          q: cityName,
          APPID: API_KEY
        }
      });
      console.log(data.data);
    } catch {
      alert("Not Found");
    }
  }
}
