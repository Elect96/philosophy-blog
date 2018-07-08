import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ArticleContentExcerptPipe } from './article-content-excerpt.pipe';

@NgModule({
    imports: [ BrowserModule, CommonModule, HttpClientModule, RouterModule ],
    declarations: [ 
        HeaderComponent, MainComponent, FooterComponent, 
        ArticleContentExcerptPipe  
    ],
    exports: [ 
        HeaderComponent, MainComponent, FooterComponent, 
        ArticleContentExcerptPipe,
        BrowserModule, CommonModule, HttpClientModule 
    ]
  })
export class SharedModule { }