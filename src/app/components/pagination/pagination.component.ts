import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaginationService } from '../../shared/services/pagination.service';
import { Article } from '../../shared/data-model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  paginatedArticles: Article[];
  pages: number[] = [];
  @Input() articles: Article[];
  @Input() currentComponent: string;
  @Output() articlesChange = new EventEmitter();

  constructor(
    private pagination: PaginationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paginatedArticles = this.pagesToDisplay(this.pagination.paginatedArticles);
  }

  pagesToDisplay($articles) {
    const numberOfPagesToDisplay = 6;
    // Counts total amount of pages available to display
    let tmp = [];
    for(let i = 0; i < $articles.length; i++) {
      tmp[i] = i;
    }

    if($articles.length > numberOfPagesToDisplay) {
      let intercept = Math.round(numberOfPagesToDisplay / 2);
      // Pages to display starting from last to middle
      for(let k = numberOfPagesToDisplay - 1; k >= numberOfPagesToDisplay - intercept; k--) {
        this.pages[k] = tmp.pop(); 
      }
      // Pages to display starting from start to middle
      for(let j = 0; j < intercept; j++) {
        this.pages[j] = tmp.shift();
      }
    } else {
        this.pages = tmp;
    }

    return $articles;
  }

  goToPage($page: number) {
    // Detects the current view & navigates to correct path
    if(this.currentComponent == "list") {
      this.router.navigate(['/article'], { queryParams: { page: $page } });
    } else {
      this.router.navigate(['/article', this.currentComponent, this.route.snapshot.url[2].path], { queryParams: { page: $page } });
    }
    // Updates the list of articles based on a page that user wants to go to
    this.articlesChange.emit(this.pagination.pageSwap(this.paginatedArticles, $page));
    window.scroll(0, 0);
  }

  goToPreviousPage() {
    // Simple protection against folks that want to go below 1 
    if(this.pagination.page <= 1) {
      this.pagination.page = 1;
    } else {
      this.pagination.page--;
    }
    // Detects the current view & navigates to correct path
    if(this.currentComponent == "list") {
      this.router.navigate(['/article'], { queryParams: { page: this.pagination.page } });
    } else {
      this.router.navigate(['/article', this.currentComponent, this.route.snapshot.url[2].path], { queryParams: { page: this.pagination.page } });
    }
    // Updates the list of articles based on a page that user wants to go to
    this.articlesChange.emit(this.pagination.pageSwap(this.paginatedArticles, this.pagination.page));
    window.scroll(0, 0);
  }

  goToNextPage() {
    // Simple protection against sky is the limit people
    if(this.pagination.page >= this.pagination.paginatedArticles.length) {
      this.pagination.page = this.pagination.paginatedArticles.length;
    } else {
      this.pagination.page++;
    }
    // Detects the current view & navigates to correct path
    if(this.currentComponent == "list") {
      this.router.navigate(['/article'], { queryParams: { page: this.pagination.page } });
    } else {
      this.router.navigate(['/article', this.currentComponent, this.route.snapshot.url[2].path], { queryParams: { page: this.pagination.page } });
    }
    // Updates the list of articles based on a page that user wants to go to
    this.articlesChange.emit(this.pagination.pageSwap(this.paginatedArticles, this.pagination.page));
    window.scroll(0, 0);
  }
}
