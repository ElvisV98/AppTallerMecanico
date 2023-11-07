import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClProducto } from '../model/ClProducto';
import { ProductServiceService } from '../product-service.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import {CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { DomSanitizer } from '@angular/platform-browser';
import { Filesystem, Directory } from '@capacitor/filesystem';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {
  //Creamos una variable del tipo FormGroup
  // ! ==> Con esto le decimos a TS, que sabemos que la variable no esta inicializada
  //          y que estamos seguro que cuando se ejecute no será null

  imageSource:any;

  productForm!: FormGroup;
  // Generalmente se usa una interface, sin embargo para jugar utilizaremos  una clase
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
    ,editorial: ''
    ,raza: '0'
    ,edad: 0
    ,altura: 0
    ,hrini: '0'
    ,hrfin: '0'
    ,direccion: '0'
    ,fCreacion: ''

  };

customCounterFormatter(inputLength: number, maxLength: number) {
  return `${maxLength - inputLength} characters remaining`;
}

                           
  constructor(private formBuilder: FormBuilder,
    
    private loadingController: LoadingController,
    private restApi: ProductServiceService,
    private router: Router,
    private domSanitizer:DomSanitizer,
  ) { }

  
  ngOnInit() {

   
    

   
    this.productForm = this.formBuilder.group({
      "nombreprod": [null, Validators.required],
      "codigo": [null, Validators.required],
      'precio': [null, Validators.required],
      'Cantidad': [null, Validators.required],
      'editorial': [null, Validators.required]
    });
  }
  // se ejecutará cuando presione el Submit
  async onFormSubmit(form: NgForm) {

    
    
  console.log("onFormSubmit del Product ADD")
  console.log("Contenido de this.producto:", this.producto);


    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    // Muestra el Loading Controller
    await loading.present();


    console.log("Datos que se van a enviar:", this.producto);  


    // Ejecuta el método del servicio y los suscribe
    await this.restApi.addProduct(this.producto)
      .subscribe({
        next: (res) => {
          console.log("Next AddProduct Page",res)
          loading.dismiss(); //Elimina la espera
          if (res== null){ // No viene respuesta del registro
            console.log("Next No Agrego, Ress Null ");
            return
          }
          // Si viene respuesta
          console.log("Next Agrego SIIIIII Router saltaré ;",this.router);
          this.router.navigate(['/product-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error AddProduct Página",err);
          loading.dismiss(); //Elimina la espera
        }
      });
    console.log("Observe que todo lo del suscribe sale después de este mensaje")
  }

   takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source:CameraSource.Prompt,
        saveToGallery:true
        });
      
      //this.imageSource='data:image/jpeg;base64,' +image.base64String;
      
      console.log(this.imageSource)
      console.log('Ruta de la imagen capturada:', image.webPath);

      
      this.imageSource=this.domSanitizer.bypassSecurityTrustUrl(image.webPath ? image.webPath : "");
       
      }

      
      getPhoto()
      {
        return this.imageSource;
      }

}
