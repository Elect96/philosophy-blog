import { Component, OnInit } from '@angular/core';
import { ImageFileService } from '../shared/services/image-file.service';
import { ArticleService } from '../shared/services/article.service';
import { Router, ActivatedRoute } from '@angular/router'; // for article/:id
import { Article } from '../shared/data-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article-details',
  templateUrl: 'article-details.component.html',
  styleUrls: ['article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article: Article;  

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private imageFileService: ImageFileService,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    let id = this.route.snapshot.paramMap.get('id');
    this.article = this.articleService.getArticle(id);
    this.article.content = this.showArticle(this.article.content);
  }

  showArticle($content) {
    /*
     * Input: strings array | type: any
     * Output: string | type: any
     * Function parses the images into base content array
     */
    const numberOfParagraphs = 3;
    const images = [
      "<img src='" + this.imageFileService.imageFile("artykul1") + "' alt='robot' class='w-100 mb-3'>",
      "<img src='" + this.imageFileService.imageFile("artykul2") + "' alt='politician' class='w-100 mb-3'>"
    ];
    // Adds images into $content using numberOfParagraphs as a interval
    let tmp = numberOfParagraphs;
    for (let i = 0; i < images.length; i++) {
      $content.splice(tmp, 0, images[i]);
      tmp += numberOfParagraphs + 1;
    }

    const htmlTag = "<p>";
    // Adds "<p>" at the begining and "</p>" at the end of the $content[0]
    let result: any = htmlTag.concat($content[0], "</p>");
    for (let i = 1; i < $content.length; i++) {
      // Adds "<p>" at the begining and "</p>" at the end to every $content[i] that doesn't contain "<img"
      if ($content[i].includes("<img")) {
        result += $content[i];
      } else {
        result += htmlTag.concat($content[i], "</p>");
      }
    }
    return result;
  }

  console($this) {
    console.log($this);
  }

}
