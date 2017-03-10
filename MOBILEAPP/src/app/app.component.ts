import { Component , ViewChild} from '@angular/core';
import {Platform, NavController, DeepLinkMetadata} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { deepLinkConfig } from './app.module';
import { OpioidUsers } from '../pages/opioid-users/opioidusers';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: NavController;

  rootPage:any = Dashboard;
  menu: Array<DeepLinkMetadata>;

  constructor(platform: Platform, /*private menuService : Menu*/) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.menu = deepLinkConfig.links;
    });
  }

  open(url){
    this.nav.push(url);
  }

}
