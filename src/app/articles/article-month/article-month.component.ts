import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationService } from '../../shared/services/pagination.service';
import { ImageFileService } from '../../shared/services/image-file.service';
import { Article } from '../../shared/data-model';

@Component({
  selector: 'app-article-month',
  templateUrl: 'article-month.component.html',
  styleUrls: ['article-month.component.scss']
})
export class ArticleMonthComponent implements OnInit {
  articles: Article[];
  currentComponent: string;

  constructor(
    private imageFileService: ImageFileService,
    private paginationService: PaginationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentComponent = "month";
    this.paginationService.ArticleMonthInit(this.route.snapshot.url[2].path);
    this.articles = this.paginationService.articles;
  }
}
