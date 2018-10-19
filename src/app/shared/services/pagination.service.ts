import { Injectable } from '@angular/core';
import { ArticleService } from '../../shared/services/article.service';
import { Article } from '../../shared/data-model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class PaginationService {
    rawArticles: Observable<Article[]>;
    articles: Article[];
    page: number;
    paginatedArticles: Article[];

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

    ArticleAuthorInit($author) {
      this.rawArticles = this.articleService.getArticlesAuthor($author);
      this.route.queryParams.subscribe(params => {
        this.page = params.page;
      });
      this.articles = this.Paginate(this.rawArticles, this.page);
    }
    
    ArticleMonthInit($month) {
      this.rawArticles = this.articleService.getArticlesMonth($month);
      this.route.queryParams.subscribe(params => {
        this.page = params.page;
      });
      this.articles = this.Paginate(this.rawArticles, this.page);
    }

    /* 
     * Paginates the $articles by articlesPerCurrentPage
     * Returns just a page of paginatedArticles
    */
    Paginate($articles, $page) {
      const articlesPerCurrentPage = 7;
      let result: any[] = [0];
      let tmp = 0;
      $articles.subscribe(data => {
        for(let i = 0; i < data.length / articlesPerCurrentPage; i++) {
          result[i] = data.slice(tmp, tmp + articlesPerCurrentPage);
          tmp += articlesPerCurrentPage;
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
      // Translation: First page = First set of items in $articles array
      $page -= 1;
      // Paginated articles are now stored appropriately
      this.paginatedArticles = result;
  
      return result[$page];
    }

    /* 
     * Updates the view based on the page 
    */
    pageSwap($articles, $page) {
      // Pages can be only positive numbers
      $page = Math.abs($page);
      if ( ! this.isNumber($page) || $page == 0) {
        $page = 1;
      } else if($page > $articles.length) {
        $page = $articles.length;
      }
      this.page = $page;
      // Translation: First page = First set of items in $articles array
      $page -= 1;

      return $articles[$page];
    }

    /* 
     * Checks if n is a number 
    */
    isNumber(n) { 
      return !isNaN(parseFloat(n)) && !isNaN(n - 0);
    }
}