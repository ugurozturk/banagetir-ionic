import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/homepage/homepage';
import { ProfilePage } from '../pages/profile/profile';
import { UrunlerPage } from '../pages/urunler/urunler';
import { Harita } from '../pages/harita/harita';
import { FavorilerPage } from '../pages/favoriler/favoriler';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HomePage', component: HomePage },
      { title: 'Profil', component: ProfilePage },
      { title: 'Harita', component: Harita },
      { title: 'Sipariş Ver', component: UrunlerPage },
      { title: 'Favoriler', component: FavorilerPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    console.log(page);
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
