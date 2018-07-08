import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { ArticleListComponent } from './article-list.component';
import { ArticleDetailsComponent } from './article-details.component';

const articlesRoutes: Routes = [
  { path: 'article', component: ArticleListComponent },
  { path: 'article/:id', component: ArticleDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(articlesRoutes) ],
  exports: [ RouterModule ]
})
export class ArticlesRoutingModule { }
