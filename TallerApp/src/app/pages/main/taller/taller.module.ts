import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TallerPageRoutingModule } from './taller-routing.module';

import { TallerPage } from './taller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TallerPageRoutingModule
  ],
  declarations: [TallerPage]
})
export class TallerPageModule {}
