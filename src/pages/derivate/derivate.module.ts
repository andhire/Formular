import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DerivatePage } from './derivate';

@NgModule({
  declarations: [
    DerivatePage,
  ],
  imports: [
    IonicPageModule.forChild(DerivatePage),
  ],
})
export class DerivatePageModule {}
