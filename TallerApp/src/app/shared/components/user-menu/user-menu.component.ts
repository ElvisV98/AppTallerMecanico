import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  @ViewChild('menu') menu: any; // Referencia al elemento ion-menu

  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {}

  openMenu() {
    console.log("metodo user component llamado")
    this.menuCtrl.open('user-menu');
  }
}
