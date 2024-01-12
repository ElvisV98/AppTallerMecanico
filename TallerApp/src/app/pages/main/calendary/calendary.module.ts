import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendaryPageRoutingModule } from './calendary-routing.module';

import { CalendaryPage } from './calendary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendaryPageRoutingModule
  ],
  declarations: [CalendaryPage]
})
export class CalendaryPageModule {}
