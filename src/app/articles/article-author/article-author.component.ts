import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationService } from '../../shared/services/pagination.service';
import { ImageFileService } from '../../shared/services/image-file.service';
import { Article } from '../../shared/data-model';

@Component({
  selector: 'app-article-author',
  templateUrl: 'article-author.component.html',
  styleUrls: ['article-author.component.scss']
})
export class ArticleAuthorComponent implements OnInit {
  articles: Article[];
  currentComponent: string;

  constructor(
    private imageFileService: ImageFileService,
    private paginationService: PaginationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentComponent = "author";
    this.paginationService.ArticleAuthorInit(this.route.snapshot.url[2].path);
    this.articles = this.paginationService.articles;
  }

}
