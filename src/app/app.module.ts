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
// Social Login
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from "angular-6-social-login";


// Social Login Configs 
export function getAuthServiceConfigs() {
let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("902736016592345")
      }
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    FirstTimeComponent,
    AboutComponent,
    ContactComponent,
    WhyComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    SharedModule,
    ArticlesModule,
    AppRoutingModule,
    // Google Maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrGZgZv6m1m_hyeuCdoljwUqx6qwKNMTg'
    }),
    SocialLoginModule,
  ],
  providers: [
    // For Social Login
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
