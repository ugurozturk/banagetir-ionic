import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/homepage/homepage';
import { ProfilePage } from '../pages/profile/profile';
import { UrunlerPage } from '../pages/urunler/urunler';
import { UrunPage } from '../pages/urun/urun';
import { Harita } from '../pages/page1/harita';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';


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
    Page1
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
    Page1
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
