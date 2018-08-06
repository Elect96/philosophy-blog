import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ImageFileService } from '../../shared/services/image-file.service';
import { ArticleService } from '../../shared/services/article.service';
import { Article } from '../../shared/data-model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-article-month',
  templateUrl: 'article-month.component.html',
  styleUrls: ['article-month.component.scss']
})
export class ArticleMonthComponent implements OnInit {
  article$: Observable<Article[]>; 

  constructor(
    private route: ActivatedRoute,
    private imageFileService: ImageFileService,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.article$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.articleService.getArticlesMonth(params.get("month"))),
    );
  }
}
