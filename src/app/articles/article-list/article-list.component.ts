import { Component, OnInit } from '@angular/core';
import { ImageFileService } from '../../shared/services/image-file.service';
import { ArticleService } from '../../shared/services/article.service';
import { PaginationService } from '../../shared/services/pagination.service';
import { Article } from '../../shared/data-model';

@Component({
  selector: 'app-article-list',
  templateUrl: 'article-list.component.html',
  styleUrls: ['article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: Article[];

  constructor(
    private imageFileService: ImageFileService,
    private paginationService: PaginationService
  ) { }

  ngOnInit() {
    this.paginationService.ArticleListInit();
    this.articles = this.paginationService.articles;
  }

}
