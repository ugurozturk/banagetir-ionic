import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/homepage/homepage';
import { ProfilePage } from '../pages/profile/profile';
import { UrunlerPage } from '../pages/urunler/urunler';
import { UrunPage } from '../pages/urun/urun';
import { Harita } from '../pages/harita/harita';
import { FavorilerPage } from '../pages/favoriler/favoriler';
import { AdresEkle } from '../pages/adresekle/adresekle';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    UrunlerPage,
    UrunPage,
    AdresEkle,
    Harita,
    FavorilerPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    UrunlerPage,
    UrunPage,
    AdresEkle,
    Harita,
    FavorilerPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
