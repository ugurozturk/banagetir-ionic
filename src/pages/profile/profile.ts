import { Component } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { AdresEkle } from '../adresekle/adresekle';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  mapiYukle: boolean;
  adreslerim: string = "2";
  constructor(public navCtrl: NavController, public plt: Platform, public modalCtrl: ModalController) {
    if (plt.is('android')) {
      this.mapiYukle = true;
    }
  }//constructor End

  adresChanged(event: any) {
    if (event == "0") {
      this.presentModal();
      console.log("Yeni Adres");
    }
    else {
      console.log("Diğer Değer " + event);
    }
  }

  presentModal() {
    let modal = this.modalCtrl.create(AdresEkle);
    modal.present();
  }
}//Class ProfilePage End


