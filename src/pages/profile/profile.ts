import { Component } from '@angular/core';
import { NavController, Platform, ModalController, AlertController } from 'ionic-angular';
import { AdresEkle } from '../adresekle/adresekle';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  mapiYukle: boolean;
  adreslerim: string = "2";
  constructor(public navCtrl: NavController, public plt: Platform, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    if (plt.is('android')) {
      this.mapiYukle = true;
    }
  }//constructor End

  adresChanged(event: any) {
    if (event == "0") {
      //Yeni Adres
      this.presentModal();
    }
  }
  adresEdit(event: any) {
    console.log(event);
    this.presentModal(event);
  }

  presentModal(adresid?: any) {
    if (adresid != null) {
      let modal = this.modalCtrl.create(AdresEkle, { adresid: adresid });
      modal.present();
    }
    else {
      let modal = this.modalCtrl.create(AdresEkle);
      modal.present();
    }
  }

  siparisAyrinti(siparisid: any) {
    //TODO: siparisid yi çek
    let alert = this.alertCtrl.create({
      title: 'Kebap',
      subTitle: '04.03.2017 - 15 TL',
      buttons: ['OK']
    });
    alert.present();
  }

}//Class ProfilePage End


