import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UrunPage } from '../../pages/urun/urun';

@Component({
  selector: 'page-favoriler',
  templateUrl: 'favoriler.html'
})
export class FavorilerPage {

  constructor(public navCtrl: NavController) {

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    console.log("item tabbed");
    this.navCtrl.push(UrunPage, {
      item: item
    });
  }

}
