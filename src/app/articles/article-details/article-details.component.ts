import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; // for article/:id
import { DatePipe } from '@angular/common';
import { ImageFileService } from '../../shared/services/image-file.service';
import { ArticleService } from '../../shared/services/article.service';
import { Article } from '../../shared/data-model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-article-details',
  templateUrl: 'article-details.component.html',
  styleUrls: ['article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article$: Observable<Article>; 

  constructor(
    private route: ActivatedRoute,
    private imageFileService: ImageFileService,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.article$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.articleService.getArticle(params.get('id'))),
    );
  }

}
