import { StartPage } from './../pages/start/start';
import { Storage } from '@ionic/storage';


import { HomePage } from './../pages/home/home';
import { Component} from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  public rootPage;
  roo:Storage;
  constructor(platform: Platform, splashScreen: SplashScreen,storage:Storage) {

    storage.get("slides").then((val)=>{
      if(val=="true"){
        this.rootPage = HomePage;
      }else{
        this.rootPage = StartPage;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need
      
      splashScreen.hide();
    });
  }
}

