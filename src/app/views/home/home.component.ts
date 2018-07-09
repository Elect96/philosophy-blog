import { Component, OnInit } from '@angular/core';
import { ImageFileService } from '../../shared/services/image-file.service';
import { ArticleService } from '../../shared/services/article.service';
import { Article } from '../../shared/data-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[];
  
  constructor(private imageFileService: ImageFileService,
              private articleService: ArticleService) {  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.articles = this.articleService.getNewArticles();
  }

}
