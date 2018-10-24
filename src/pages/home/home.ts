import { IntegralsPage } from './../integrals/integrals';
import { IdentidadesPage } from './../identidades/identidades';
import { DerivatePage } from './../derivate/derivate';
import { FactPage } from './../fact/fact';

import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  isOpen:boolean = false;
  constructor(public navCtrl: NavController) {
    
  }

  openPage(type){
    switch(type){
      case 0:
        this.navCtrl.push(FactPage);
        break;
      case 1:
        this.navCtrl.push(DerivatePage);
        break;
      case 2:
        this.navCtrl.push(IdentidadesPage);
        break;
      case 3:
        this.navCtrl.push(IntegralsPage);
    }
    
  };
  


}

