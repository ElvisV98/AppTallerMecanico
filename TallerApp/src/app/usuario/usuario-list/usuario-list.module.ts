import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioListPageRoutingModule } from './usuario-list-routing.module';

import { UsuarioListPage } from './usuario-list.page';

// Agregamos Librería CDK
//import { ScrollingModule } from '@angular/cdk/scrolling';
//import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     //ScrollingModule,  // <=====
    //DragDropModule,   // <=====
    UsuarioListPageRoutingModule
  ],
  declarations: [UsuarioListPage]
})
export class UsuarioListPageModule {}
