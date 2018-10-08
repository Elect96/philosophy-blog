import { Injectable } from '@angular/core';
import { ArticleService } from '../../shared/services/article.service';
import { Article } from '../../shared/data-model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class PaginationService {
    rawArticles: Observable<Article[]>;
    articles: Article[];
    page: number;
    amountOfPages: any;

    constructor(
        private articleService: ArticleService,
        private route: ActivatedRoute,
    ) { }

    ArticleListInit() {
      this.rawArticles = this.articleService.getArticles();
      this.route.queryParams.subscribe(params => {
        this.page = params.page;
      });
      this.articles = this.Paginate(this.rawArticles, this.page);
    }
    ArticleAuthorInit() {
      this.route.queryParams.subscribe(params => {
        this.page = params.page;
      });
    }
    ArticleMonthInit() {
      
    }

    Paginate($articles, $page) {
      // TODO: Explain what it does
      const articlesPerCurrentPage = 7;
      let result: any[] = [0];
      let tmp = 0;
      $articles.subscribe(data => {
        for(let i = 0; i < data.length / articlesPerCurrentPage; i++) {
          result[i] = data.slice(tmp, tmp + 7);
          tmp += 7;
        }
      });
      // Pages can be only positive numbers
      $page = Math.abs($page);
      if ( ! this.isNumber($page) || $page == 0) {
        $page = 1;
      } else if($page > result.length) {
        $page = result.length;
      }
      this.page = $page;
      // Translation: First page = First item in $page
      $page -= 1;
      this.amountOfPages = result;
  
      return result[$page];
    }
    isNumber(n) { 
      return !isNaN(parseFloat(n)) && !isNaN(n - 0);
    }
}