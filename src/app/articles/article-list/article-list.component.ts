import { Component, OnInit } from '@angular/core';
import { ImageFileService } from '../../shared/services/image-file.service';
import { ArticleService } from '../../shared/services/article.service';
import { Article } from '../../shared/data-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: 'article-list.component.html',
  styleUrls: ['article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: Observable<Article[]>;

  constructor(
    private imageFileService: ImageFileService,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.articles = this.articleService.getArticles();
  }

}
