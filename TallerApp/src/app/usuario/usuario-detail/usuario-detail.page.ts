import { Component, OnInit } from '@angular/core';
// Import a utilizar 
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { ClUsuario } from '../model/ClUsuario';
import { UsuarioServiceService } from '../usuario.service';



@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.page.html',
  styleUrls: ['./usuario-detail.page.scss'],
})
export class UsuarioDetailPage implements OnInit {
  // Creamos registro a utilizar en el Html
  usuario: ClUsuario = {
    id:"macarena@soco.cl"
    , first_name: "Macarena Constanza"
    , last_name: "Macarena Constanza"
    , email: "macarena@soco.cl"
    , clave: 123456 
  };

  // Injectamos Librerías a utilizar
  constructor(
    public restApi: UsuarioServiceService
    , public loadingController: LoadingController
    , public alertController: AlertController
    , public route: ActivatedRoute
    , public router: Router
  ) { }

  // En el OnInit, ejecutamos la lectura
  ngOnInit() {
    this.getUsuario();
  }

// Método que permite leer el producto
  async getUsuario() {
    console.log("getUsuario **************** ParamMap ID:" + this.route.snapshot.paramMap.get('id'));
    // Creamos un Wait
    const loading = await this.loadingController.create({ message: 'Loading...' });
    // Mostramos el Wait
    await loading.present();
    await this.restApi.getUsuario(this.route.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (res) => {
          console.log("Data *****************");
          console.log(res);
          // Si funciona la respuesta la pasamos al producto
          this.usuario = res;
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          //Si no funcion desplegamos en consola el error
          console.log("Error DetailUsuario Página", err);
          loading.dismiss(); //Elimina la espera
        }
      })
  }

  // El Html invoca el método delete
  async delete(id: string) {
    // Confirma Primero
    this.presentAlertConfirm(id, 'Confirme la Eliminación, De lo cantrario Cancele');
  }
  // Creamos una rutina para confirmar la eliminación
  async presentAlertConfirm(id: string, msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!', // Título
      message: msg,   // Mensaje
      buttons: [   // Botones
        {
          text: 'Eliminar : ' + id + " OK",
          handler: () => { // Si presiona ejecuta esto
            //this.router.navigate(['']);
            this.deleteConfirmado(id)
          }
        }
      ]
    });
    // Presenta en pantalla
    await alert.present();
  }

  // Es invocado desde el Alert
  async deleteConfirmado(id: string) {
    alert("Eliminando " + id)
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.restApi.deleteUsuario(id)
      .subscribe({
        next: (res) => {
          console.log("Error DetailUsuario Página", res);
          loading.dismiss();
          this.router.navigate(['/usuario-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error DetailUsuario Página", err);
          loading.dismiss(); //Elimina la espera
        }

      })
  }
}

