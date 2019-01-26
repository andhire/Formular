import { StatusBar } from '@ionic-native/status-bar';
import { ProductosNotablesPage } from './../productos-notables/productos-notables';
import { GeometriaPage } from './../geometria/geometria';

import { IntegralsPage } from './../integrals/integrals';
import { IdentidadesPage } from './../identidades/identidades';
import { DerivatePage } from './../derivate/derivate';
import { FactPage } from './../fact/fact';

import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { TriangulosPage } from '../triangulos/triangulos';
import { GelementalPage } from '../gelemental/gelemental';
import { RectaPage } from '../recta/recta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController,statusBar:StatusBar) {
  
      // set status bar to white
      statusBar.backgroundColorByHexString('#000000');
    
  }
  
  openPage(type){
    switch(type){
      case 0:
      
       this.navCtrl.push(IntegralsPage);
        break;
      case 1:
        this.navCtrl.push(DerivatePage);
        break;
      case 2:
        this.navCtrl.push(IdentidadesPage);
        break;
      case 3:
        this.navCtrl.push(TriangulosPage);
        break;
      case 4:
        this.navCtrl.push(FactPage);
        break;
      case 5:
        this.navCtrl.push(GelementalPage);
        break;
      case 6:
        this.navCtrl.push(GeometriaPage);
        break;
      case 7:
        this.navCtrl.push(RectaPage);
        break;
      case 8:
        this.navCtrl.push(ProductosNotablesPage);
        break;
    }
    
  };
  


}

