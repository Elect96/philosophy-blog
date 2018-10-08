import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ImageFileService } from '../../shared/services/image-file.service';
import { ArticleService } from '../../shared/services/article.service';
import { Article } from '../../shared/data-model';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { PaginationService } from '../../shared/services/pagination.service';

@Component({
  selector: 'app-article-author',
  templateUrl: 'article-author.component.html',
  styleUrls: ['article-author.component.scss']
})
export class ArticleAuthorComponent implements OnInit {
  rawArticles: Observable<Article[]>;
  articles: Article[];
  page: any;

  constructor(
    private imageFileService: ImageFileService,
    private articleService: ArticleService,
    private paginationService: PaginationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Create more Articles for testing
    this.paginationService.ArticleAuthorInit();
    this.rawArticles = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.articleService.getArticlesAuthor(params.get("author"))),
    );
    this.page = this.paginationService.page;
    this.articles = this.paginationService.Paginate(this.rawArticles, this.page);
  }

  log($test) {
    console.log($test);
  }

}
