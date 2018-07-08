import { Component, OnInit } from '@angular/core';
import { ImageFileService } from '../../shared/services/image-file.service';
import { ArticleService } from '../../shared/services/article.service';
import { Article } from '../../shared/data-model';

@Component({
  selector: 'app-main',
  templateUrl: `./main.component.html`,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  articles: Article[];
  
  constructor(private imageFileService: ImageFileService,
              private articleService: ArticleService) {  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.articles = this.articleService.getNewArticles();
  }

  log($this) {
    console.log($this);
  }

}
