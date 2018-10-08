import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageFileService } from '../../shared/services/image-file.service';
import { ArticleService } from '../../shared/services/article.service';
import { Article, authors } from '../../shared/data-model';
import { articles } from '../../shared/articles';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  newArticles: Article[];
  articles$: Subscription;
  articlesInMonth: number[];
  authors = authors;

  constructor(
    private imageFileService: ImageFileService,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.newArticles = this.articleService.getNewArticles();
    this.articles$ = this.articleService.getArticles()
      .pipe(
        map(articles => articles.map(article => article.date)),
      )
      .subscribe(date => this.articlesInMonth = this.getArticlesAllMonths(date));
  }

  ngOnDestroy() { this.articles$.unsubscribe(); }

  getArticlesAllMonths($dates) {
    let articlesInMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let months, tmp = [];
    // Returns month (0-11) from Epoch timestamps (in ms)
    for(let i = 0; i < $dates.length; i++) {
      tmp[i] = new Date($dates[i]).getMonth();
    }
    // Returns distinct values that represent specific months
    // 0 - January, 11 - December
    months = tmp.filter((v, i, self) => self.indexOf(v) === i);
    for(let j = 0; j <= 11; j++) {
      // Counts amount of articles in a month
      for(let i = 0; i < tmp.length; i++) {
        if(months[j] == tmp[i]) {
          articlesInMonth[months[j]] += 1;
        }
      }
    }

    return articlesInMonth;
  }
}
