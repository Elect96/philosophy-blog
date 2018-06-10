import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ArticlesModule } from './articles/articles.module';

// Views
import { FirstTimeComponent } from './views/first-time/first-time.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { WhyComponent } from './views/why/why.component';
import { HomeComponent } from './views/home/home.component';
import { EntryComponent } from './views/entry/entry.component';
import { PageNotFoundComponent } from './views/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTimeComponent,
    AboutComponent,
    ContactComponent,
    WhyComponent,
    HomeComponent,
    EntryComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    ArticlesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
