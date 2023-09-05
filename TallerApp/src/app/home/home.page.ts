import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(public alertController: AlertController) {}

  // Función para presentar la alerta
  async presentAlert(sectionName: string) {
    const alert = await this.alertController.create({
      header: 'Seccion no disponible',
      message: `La sección "${sectionName}" estará disponible en el futuro`,
      buttons: ['OK']
    });

    await alert.present();
  }
}