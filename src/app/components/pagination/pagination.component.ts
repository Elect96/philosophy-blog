import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationService } from '../../shared/services/pagination.service';
import { Article } from '../../shared/data-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  amountOfPages: any;
  page: number;
  @Input() articles: Article[];
  @Output() articlesChange = new EventEmitter();

  constructor(
    private pagination: PaginationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pagination.ArticleListInit();
    this.amountOfPages = this.pagination.amountOfPages;
    this.page = this.pagination.page;
  }

  goToPage($page: number) {
    this.router.navigate(['/article'], { queryParams: { page: $page } });
    this.articlesChange.emit(this.pagination.Paginate(this.pagination.rawArticles, $page));
    window.scroll(0, 0);
  }
  goToPreviousPage($page: number) {
    if($page <= 1) {
      $page = 1;
    } else {
      $page--;
    }
    this.router.navigate(['/article'], { queryParams: { page: $page } });
    this.articlesChange.emit(this.pagination.Paginate(this.pagination.rawArticles, $page));
    window.scroll(0, 0);
  }
  goToNextPage($page: number) {
    if($page >= this.pagination.amountOfPages.length) {
      $page = this.pagination.amountOfPages.length;
    } else {
      $page++;
    }
    this.router.navigate(['/article'], { queryParams: { page: $page } });
    this.articlesChange.emit(this.pagination.Paginate(this.pagination.rawArticles, $page));
    window.scroll(0, 0);
  }
}
