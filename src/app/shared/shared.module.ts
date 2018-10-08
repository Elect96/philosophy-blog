import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AsideComponent } from '../components/aside/aside.component';
import { SigninComponent } from '../components/signin/signin.component';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { ArticleContentExcerptPipe } from './pipes/article-content-excerpt.pipe';
import { ArticleContentPipe } from './pipes/article-content.pipe';
import { MonthDisplayPipe } from './pipes/month-display.pipe';

@NgModule({
    imports: [ BrowserModule, CommonModule, HttpClientModule, RouterModule ],
    declarations: [ 
        HeaderComponent, FooterComponent, AsideComponent, SigninComponent, PaginationComponent,
        ArticleContentExcerptPipe, ArticleContentPipe, MonthDisplayPipe
    ],
    exports: [ 
        HeaderComponent, FooterComponent, AsideComponent, SigninComponent, PaginationComponent, 
        ArticleContentExcerptPipe, ArticleContentPipe, MonthDisplayPipe,
        BrowserModule, CommonModule, HttpClientModule 
    ]
  })
export class SharedModule { }