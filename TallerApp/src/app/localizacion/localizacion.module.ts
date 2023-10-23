import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalizacionPageRoutingModule } from './localizacion-routing.module';

import { LocalizacionPage } from './localizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalizacionPageRoutingModule
  ],
  declarations: [LocalizacionPage]
})
export class LocalizacionPageModule {}
