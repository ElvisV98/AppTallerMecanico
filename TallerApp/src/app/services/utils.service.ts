import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController} from '@ionic/angular';
import { ToastController, ToastOptions } from '@ionic/angular';
import { ModalController, ModalOptions } from '@ionic/angular';
import { MenuController, MenuCustomEvent } from '@ionic/angular';
import { AlertController, AlertOptions } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  router = inject(Router);
  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  modalCtrl = inject(ModalController);
  menuCtrl = inject(MenuController);
  alertCtrl = inject(AlertController);
  

  loading(){
    return this.loadingCtrl.create({ spinner: 'crescent' });
  }

  async presentToast(opts?: ToastOptions){
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  // Alert
  async presentAlert(opts: AlertOptions) {
    const alert = await this.alertCtrl.create(opts);
    await alert.present();
  }

  // Permite crear modales
  async presentModal(opts: ModalOptions){
    const modal = await this.modalCtrl.create(opts);
    modal.present();
    const { data } = await modal.onWillDismiss();
    if(data) return data;
  }

  //Quita el modal
  dismissModal(data?: any){
    return this.modalCtrl.dismiss(data);
  }

  saveInLocalStorage(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocalStorage(key: string){
    return localStorage.getItem(key);
  }

  removeElementInLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  //Redericciona a otras paginas
  routerLink(url: string){
    return this.router.navigateByUrl(url);
  }

  // async presentMenu(opts: MenuCustomEvent) {
  //   const menu = await this.menuCtrl.open();
  // }

}
