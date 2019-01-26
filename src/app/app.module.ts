import { RectaPage } from './../pages/recta/recta';
import { ProductosNotablesPage } from './../pages/productos-notables/productos-notables';
import { GelementalPage } from './../pages/gelemental/gelemental';
import { StartPage } from './../pages/start/start';
import { IntegralsPage } from './../pages/integrals/integrals';
import { IdentidadesPage } from './../pages/identidades/identidades';
import { DTrigonDPage } from './../pages/d-trigon-d/d-trigon-d';
import { DTrigonIPage } from './../pages/d-trigon-i/d-trigon-i';
import { DerivatePage } from './../pages/derivate/derivate';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FactPage } from './../pages/fact/fact';
import { LogPage } from '../pages/log/log';
import { GeometriaPage } from '../pages/geometria/geometria';
import { TriangulosPage } from '../pages/triangulos/triangulos';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { DAlgebraicasPage } from '../pages/d-algebraicas/d-algebraicas';



@NgModule({
  declarations: [
    MyApp,
    HomePage,


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
    DTrigonIPage,
    DTrigonDPage,
    LogPage,
    IdentidadesPage,
    IntegralsPage,
    StartPage,
    GelementalPage,
    GeometriaPage,
    ProductosNotablesPage,
    RectaPage,
    TriangulosPage,
    DAlgebraicasPage
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
