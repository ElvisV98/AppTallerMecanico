import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatSliderModule } from '@angular/material/slider';
import { NotFoundPageRoutingModule } from './not-found-routing.module';

import { NotFoundPage } from './not-found.page';


<<<<<<< HEAD
=======

>>>>>>> b4443cd21a4c0c5b55f0f73beed3f980767fe628
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    NotFoundPageRoutingModule,
    MatSliderModule
=======
    MatSliderModule,
    NotFoundPageRoutingModule
>>>>>>> b4443cd21a4c0c5b55f0f73beed3f980767fe628
  ],
  declarations: [NotFoundPage]
})
export class NotFoundPageModule {}
