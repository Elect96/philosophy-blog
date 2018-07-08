import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Views
import { HomeComponent } from './views/home/home.component';
import { FirstTimeComponent } from './views/first-time/first-time.component';
import { WhyComponent } from './views/why/why.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
// Modules
import { ArticleListComponent } from './articles/article-list.component';
import { ArticleDetailsComponent } from './articles/article-details.component';
// Page not found
import { PageNotFoundComponent } from './views/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'first-time', component: FirstTimeComponent },
  { path: 'why', component: WhyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'article', component: ArticleListComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
