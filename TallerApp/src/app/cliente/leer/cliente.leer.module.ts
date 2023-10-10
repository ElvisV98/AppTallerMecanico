import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerPageRoutingModule } from './cliente.leer.routing';

import { ClienteLeerPage } from './cliente.leer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerPageRoutingModule
  ],
  declarations: [ClienteLeerPage]
})
export class ClienteLeerPageModule {}
