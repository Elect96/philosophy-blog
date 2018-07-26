import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
// Modules
import { SharedModule } from './shared/shared.module';
import { ArticlesModule } from './articles/articles.module';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Views
import { FirstTimeComponent } from './views/first-time/first-time.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { WhyComponent } from './views/why/why.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/not-found.component';
// Google Maps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    FirstTimeComponent,
    AboutComponent,
    ContactComponent,
    WhyComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    ArticlesModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrGZgZv6m1m_hyeuCdoljwUqx6qwKNMTg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
