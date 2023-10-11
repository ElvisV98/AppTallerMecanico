import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClUsuario } from '../model/ClUsuario';

import { UsuarioServiceService } from '../usuario.service';


@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.page.html',
  styleUrls: ['./usuario-add.page.scss'],
})
export class UsuarioAddPage implements OnInit {
  //Creamos una variable del tipo FormGroup
  // ! ==> Con esto le decimos a TS, que sabemos que la variable no esta inicializada
  //          y que estamos seguro que cuando se ejecute no será null
  usuarioForm!: FormGroup;
  // Generalmente se usa una interface, sin embargo para jugar utilizaremos  una clase
  usuario: ClUsuario = {
    id: "macarena@soco.cl"
    , first_name: 'Macarena Constanza'
    , last_name: 'Piña'
    , email: "macarena@soco.cl"
    , clave:  123456
  };

  // Injectamos FormBuilder, el cual nos permitirá realizar validaciones                         
  constructor(private formBuilder: FormBuilder,
    // Injectamos las librerías necesarias
    private loadingController: LoadingController,
    private restApi: UsuarioServiceService,
    private router: Router,
  ) { }

  // Antes que inicie en pantalla
  // especificamos las validaciones, 
  //    por medio de formBuilder injectado en el constructor
  ngOnInit() {
    // Especificamos que todos los campos son obligatorios
    this.usuarioForm = this.formBuilder.group({
      "usuario_first_name": [null, Validators.required],
      'usuario_last_name': [null, Validators.required],
      'usuario_email': [null, Validators.required],
      'usuario_clave': [null, Validators.required]
    });
  }
  // se ejecutará cuando presione el Submit
  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit del Product ADD")

    // Creamos un Loading Controller, Ojo no lo muestra
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    // Muestra el Loading Controller
    await loading.present();

    // Ejecuta el método del servicio y los suscribe
    await this.restApi.addUsuario(this.usuario)
      .subscribe({
        next: (res) => {
          console.log("Next AddUsuario Page",res)
          loading.dismiss(); //Elimina la espera
          if (res== null){ // No viene respuesta del registro
            console.log("Next No Agrego, Ress Null ");
            return
          }
          // Si viene respuesta
          console.log("Next Agrego SIIIIII Router saltaré ;",this.router);
          this.router.navigate(['/usuario-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error AddProduct Página",err);
          loading.dismiss(); //Elimina la espera
        }
      });
    console.log("Observe que todo lo del suscribe sale después de este mensaje")
  }

}
