import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AsideComponent } from '../components/aside/aside.component';
import { ArticleContentExcerptPipe } from './article-content-excerpt.pipe';
import { ArticleContentPipe } from './article-content.pipe';

@NgModule({
    imports: [ BrowserModule, CommonModule, HttpClientModule, RouterModule ],
    declarations: [ 
        HeaderComponent, FooterComponent, AsideComponent, 
        ArticleContentExcerptPipe, ArticleContentPipe
    ],
    exports: [ 
        HeaderComponent, FooterComponent, AsideComponent, 
        ArticleContentExcerptPipe, ArticleContentPipe,
        BrowserModule, CommonModule, HttpClientModule 
    ]
  })
export class SharedModule { }