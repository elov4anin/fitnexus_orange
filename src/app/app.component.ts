import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {PagesEnum2RoutingMapping} from './shared/enums/pages.enum';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Notifications',
      url: PagesEnum2RoutingMapping.NOTIFICATIONS,
    },
    {
      title: 'Feedback/Support',
      url: PagesEnum2RoutingMapping.FEEDBACK,
    },
   /* {
      title: 'Messages',
      url: 'messages',
    },*/
    {
      title: 'Account',
      url:  PagesEnum2RoutingMapping.ACCOUNT,
    },
   /* {
      title: 'Get-started',
      url: PagesEnum2RoutingMapping.GET_STARTED,
    },*/
   /* {
      title: 'Login',
      url: 'login',
    }*/
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
