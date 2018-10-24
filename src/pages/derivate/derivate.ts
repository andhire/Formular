import { LogPage } from './../log/log';
import { DTrigonIPage } from './../d-trigon-i/d-trigon-i';
import { DAlgebraicasPage } from './../d-algebraicas/d-algebraicas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DTrigonDPage } from '../d-trigon-d/d-trigon-d';


/**
 * Generated class for the DerivatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-derivate',
  templateUrl: 'derivate.html',
})
export class DerivatePage {

  rootPage1 =DAlgebraicasPage;
  rootPage2 =DTrigonDPage;
  rootPage3 =DTrigonIPage;
  rootPage4 =LogPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DerivatePage');
  }

}
