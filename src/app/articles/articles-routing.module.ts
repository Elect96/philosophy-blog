import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleAuthorComponent } from './article-author/article-author.component';
import { ArticleMonthComponent } from './article-month/article-month.component';

const articlesRoutes: Routes = [
  { path: 'article', component: ArticleListComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'article/author/:author', component: ArticleAuthorComponent },
  { path: 'article/month/:month', component: ArticleMonthComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(articlesRoutes) ],
  exports: [ RouterModule ]
})
export class ArticlesRoutingModule { }
