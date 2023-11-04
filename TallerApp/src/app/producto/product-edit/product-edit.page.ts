import { Component, OnInit } from '@angular/core';

// Imporamos librerías
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ClProducto } from '../model/ClProducto';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {
 
  productForm!: FormGroup;
  producto: ClProducto = {
  idProducto: 0
  ,codigo:'09-G13'
  , nombreprod: ''
  , precio: 1
  , cantidad: 1
  ,fechaNacimiento: ''
  ,rut: '0'
  ,dv: '0'
  ,enfermedad: '0'
  ,fonocontacto: 0
  ,categoria: '0'
  ,editorial: '0'
  ,raza: '0'
  ,edad: 0
  ,altura: 0
  ,hrini: '0'
  ,hrfin: '0'
  ,direccion: '0'
  ,fCreacion: ''

  };
 
  id: any = '';
 
  constructor(public restApi: ProductServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("ngOnInit ID:" + this.route.snapshot.params['id']);
    
    this.getProduct(this.route.snapshot.params['id']);
 
    this.productForm = this.formBuilder.group({
      'nombreprod': [null, Validators.required],
      'precio': [null, Validators.required],
      'Cantidad': [null, Validators.required]
    });
  }
  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit ID:" + this.id)
    this.producto.idProducto = this.id;

    await this.restApi.updateProduct(this.id, this.producto)
      .subscribe({
        next: (res) => {
          let id = res['idProducto'];
          //this.router.navigate([ 'detail', { outlets: { details: id }} ]);
          this.router.navigate(['/product-detail/' + this.id]);
        }
        , complete: () => { }
        , error: (err) => { console.log(err); }
      })

  }

  // Método que permite leer el producto
  async getProduct(id: number) {
    // Crea Wait
      const loading = await this.loadingController.create({
        message: 'Loading...'
      });
      // Muestra Wait
      await loading.present();
      // Obtiene el Observable
      await this.restApi.getProduct(id)
        .subscribe({
          next: (data) => {
            console.log("getProductID data****");
            console.log(data);
            // Si funciona Rescata el los datos
            this.id = data.idProducto;
            // Actualiza los datos
            this.productForm.setValue({
              nombreprod: data.nombreprod,
              precio: data.precio,
              Cantidad: data.cantidad
            });
            loading.dismiss();
          }
          , complete: () => { }
          , error: (err) => {
            console.log("getProductID Errr****+");
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
            this.router.navigate(['/product-list/']);
          }
        }
      ]
    });
    await alert.present();
  }

}