import {
  Component,
  Input,
  OnInit,
  SimpleChange,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  @Input() News: any;
  public articles: any;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    const news: SimpleChange = changes.News;
    news.currentValue
      ? (this.articles = news.currentValue.articles)
      : (this.articles = null);
  }
  ngOnInit() {}
}
