import { Component, OnInit } from '@angular/core';

// Imporamos librerías
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ClUsuario } from '../model/ClUsuario';
import { UsuarioServiceService } from '../usuario.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.page.html',
  styleUrls: ['./usuario-edit.page.scss'],
})
export class UsuarioEditPage implements OnInit {
  // FormGroup para validaciones
  usuarioForm!: FormGroup;
  // Esquema a utilizar en el Html
  usuario: ClUsuario = { id: '', first_name: '', last_name: '', email: '', clave: 0 };
  id: any = '';
  //usuario_first_name: string = '';
  //usuario_last_name: string = '';
  //usuario_email:string = '';
  //usuario_clave:number=null

  // Injectamos librerías
  constructor(public restApi: UsuarioServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("ngOnInit ID:" + this.route.snapshot.params['id']);
    // Relizamos lectura
    this.getUsuario(this.route.snapshot.params['id']);
    // Especificamos Validaciones por medio de FormGroup
    this.usuarioForm = this.formBuilder.group({
      'usuario_first_name': [null, Validators.required],
      'usuario_last_name': [null, Validators.required],
      'usuario_email': [null, Validators.required],
      'usuario_clave': [null, Validators.required]
    });
  }
  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit ID:" + this.id)
    this.usuario.id = this.id;
    /*this.usuario.first_name = form.usuario_first_name;
    this.usuario.last_name = form.usuario_last_name;
    this.usuario.email = form.usuario_email;
    this.usuario.clave = form.usuario_clave;
    */
    // si envio form, envio los nombres del campo del formulario
    //await this.restApi.updateProduct(this.id, form)
    await this.restApi.updateUsuario(this.id, this.usuario)
      .subscribe({
        next: (res) => {
          let id = res['id'];
          //this.router.navigate([ 'detail', { outlets: { details: id }} ]);
          this.router.navigate(['/usuario-detail/' + this.id]);
        }
        , complete: () => { }
        , error: (err) => { console.log(err); }
      })

  }

  // Método que permite leer el producto
  async getUsuario(id: string) {
    // Crea Wait
      const loading = await this.loadingController.create({
        message: 'Loading...'
      });
      // Muestra Wait
      await loading.present();
      // Obtiene el Observable
      await this.restApi.getUsuario(id + "")
        .subscribe({
          next: (data) => {
            console.log("getUsuarioID data****");
            console.log(data);
            // Si funciona Rescata el los datos
            this.id = data.id;
            // Actualiza los datos
            this.usuarioForm.setValue({
              usuario_first_name: data.first_name,
              usuario_last_name: data.last_name,
              usuario_email: data.email,
              usuario_clave: data.clave
            });
            loading.dismiss();
          }
          , complete: () => { }
          , error: (err) => {
            console.log("getUsuarioID Errr****+");
            console.log(err);
            loading.dismiss();
          }
        })
    }
  

 // Método que actualiza el producto por medio de submit
  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            //Si funciona el actualizar navega a listar
            this.router.navigate(['/usuario-list/']);
          }
        }
      ]
    });
    await alert.present();
  }

}
