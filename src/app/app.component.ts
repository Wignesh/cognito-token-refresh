import { Component, OnInit } from '@angular/core';
import { Auth } from '@aws-amplify/auth';
import { awsconfig } from '../aws-exports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    Auth.currentAuthenticatedUser().then((data) => {
      console.log(data);
      this.isLoggedin = !this.isLoggedin;
    });
    console.log(
      `https://${awsconfig.Auth.oauth.domain}/oauth2/authorize?` +
        `client_id=${awsconfig.Auth.userPoolWebClientId}&` +
        `response_type=${awsconfig.Auth.oauth.responseType}&` +
        `scope=${awsconfig.Auth.oauth.scope.join('+')}&` +
        `redirect_uri=${awsconfig.Auth.oauth.redirectSignIn}`
    );
  }
  isLoggedin = false;
  login(): void {
    Auth.federatedSignIn({
      customProvider: 'AzureAd',
    });
    // window.location.href =
    //   `https://${awsconfig.Auth.oauth.domain}/oauth2/authorize?` +
    //   `client_id=${awsconfig.Auth.userPoolWebClientId}&` +
    //   `response_type=${awsconfig.Auth.oauth.responseType}&` +
    //   `scope=${awsconfig.Auth.oauth.scope.join('+')}&` +
    //   `redirect_uri=${awsconfig.Auth.oauth.redirectSignIn}`;
  }
  log() {
    Auth.currentAuthenticatedUser().then((data) => console.log(data));
  }
}
