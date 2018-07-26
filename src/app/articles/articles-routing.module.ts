import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleQueryComponent } from './article-query/article-query.component';

const articlesRoutes: Routes = [
  { path: 'article', component: ArticleListComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'article/q/:author', component: ArticleQueryComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(articlesRoutes) ],
  exports: [ RouterModule ]
})
export class ArticlesRoutingModule { }
