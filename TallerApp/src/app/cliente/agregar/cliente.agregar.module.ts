import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ClienteAgregarPageRoutingModule } from './cliente.agregar.routing';
import { ClienteAgregarPage } from './cliente.agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteAgregarPageRoutingModule,

  ],
  declarations: [ClienteAgregarPage]
})
export class ClienteAgregarPageModule {}
