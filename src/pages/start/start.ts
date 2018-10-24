
import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  @ViewChild(Slides) slides:Slides;
  showButton:boolean= false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
  }

  

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex==2){
      this.showButton=true;
    }
  }

  goToMenu(){
    this.navCtrl.push(HomePage);
    this.storage.set("slides","true");
  }

}
