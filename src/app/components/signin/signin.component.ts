import { Component, OnInit, Input } from '@angular/core';
import { AuthService, FacebookLoginProvider } from 'angular-6-social-login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @Input() articleId: number;
  fbUrl: string;
  
  constructor(private socialAuthService: AuthService) { }
  
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;

    if(socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    
    // For eventual fb sign in service
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
      }
    );
  }

  ngOnInit() { 
    this.fbUrl = "https://developers.facebook.com/docs/plugins/comments#http://localhost:4200/article/" + this.articleId;
  }

}
