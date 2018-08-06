import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
// Articles
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleAuthorComponent } from './article-author/article-author.component';
import { ArticleMonthComponent } from './article-month/article-month.component';
// Routing
import { ArticlesRoutingModule } from './articles-routing.module';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailsComponent,
    ArticleAuthorComponent,
    ArticleMonthComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ArticlesRoutingModule
  ],
  providers: []
})
export class ArticlesModule { }
