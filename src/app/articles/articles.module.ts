import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
// Articles
import { ArticleListComponent } from './article-list.component';
import { ArticleDetailsComponent } from './article-details.component';
// Routing
import { ArticlesRoutingModule } from './articles-routing.module';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ArticlesRoutingModule
  ],
  providers: []
})
export class ArticlesModule { }
