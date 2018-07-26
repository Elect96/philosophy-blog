import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ImageFileService } from '../../shared/services/image-file.service';
import { ArticleService } from '../../shared/services/article.service';
import { Article } from '../../shared/data-model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-article-query',
  templateUrl: 'article-query.component.html',
  styleUrls: ['article-query.component.scss']
})
export class ArticleQueryComponent implements OnInit {
  article$: Observable<Article[]>;

  constructor(
    private imageFileService: ImageFileService,
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.article$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.articleService.getArticlesAuthor(params.get("author"))),
    );
  }

}
