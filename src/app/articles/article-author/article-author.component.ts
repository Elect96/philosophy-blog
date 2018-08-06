import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ImageFileService } from '../../shared/services/image-file.service';
import { ArticleService } from '../../shared/services/article.service';
import { Article } from '../../shared/data-model';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-article-author',
  templateUrl: 'article-author.component.html',
  styleUrls: ['article-author.component.scss']
})
export class ArticleAuthorComponent implements OnInit {
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
