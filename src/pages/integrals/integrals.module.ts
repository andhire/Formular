import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntegralsPage } from './integrals';

@NgModule({
  declarations: [
    IntegralsPage,
  ],
  imports: [
    IonicPageModule.forChild(IntegralsPage),
  ],
})
export class IntegralsPageModule {}
