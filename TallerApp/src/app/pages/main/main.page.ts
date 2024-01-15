import { Component, OnInit, Input, inject } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  @Input() title: string = "Menu de usuario";
  @Input() userName: string = "Nombre usuario";
  @Input() image! : boolean;


  constructor() { }

  ngOnInit() {
  }

  apiSvc = inject(ApiService);
  menuCtrl = inject(MenuController);
  utilsSvc = inject(UtilsService);

  openMenu() {
    this.menuCtrl.open('end');
  }

  signOut() {
    this.utilsSvc.presentAlert({
      header: 'Cerrar Sesión',
      message: '¿Quieres cerrar sesión?',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Si, cerrar',
          handler: () => {
            this.apiSvc.signOut();
          }
        }
      ]
    });
  }
}
