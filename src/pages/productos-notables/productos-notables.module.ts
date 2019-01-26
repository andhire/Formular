import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductosNotablesPage } from './productos-notables';

@NgModule({
  declarations: [
    ProductosNotablesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductosNotablesPage),
  ],
})
export class ProductosNotablesPageModule {}
