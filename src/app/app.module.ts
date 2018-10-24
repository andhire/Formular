import { StartPage } from './../pages/start/start';
import { IntegralsPage } from './../pages/integrals/integrals';
import { IdentidadesPage } from './../pages/identidades/identidades';
import { DTrigonDPage } from './../pages/d-trigon-d/d-trigon-d';
import { DTrigonIPage } from './../pages/d-trigon-i/d-trigon-i';
import { DerivatePage } from './../pages/derivate/derivate';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FactPage } from './../pages/fact/fact';
import { DAlgebraicasPage } from '../pages/d-algebraicas/d-algebraicas';
import { LogPage } from '../pages/log/log';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FactPage,
    DerivatePage,
    DAlgebraicasPage,
    DTrigonIPage,
    DTrigonDPage,
    LogPage,
    IdentidadesPage,
    IntegralsPage,
    StartPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FactPage,
    DerivatePage,
    DAlgebraicasPage,
    DTrigonIPage,
    DTrigonDPage,
    LogPage,
    IdentidadesPage,
    IntegralsPage,
    StartPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
