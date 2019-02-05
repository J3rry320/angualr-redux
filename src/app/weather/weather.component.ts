import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange
} from "@angular/core";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"]
})
export class WeatherComponent implements OnInit {
  @Input() weatherData;
  private weather: any;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    const weatherData: SimpleChange = changes.weatherData;
    this.weather = weatherData.currentValue;
    this.weather
      ? console.log(this.weather)
      : console.log("Not");
  }
  ngOnInit() {}
}
