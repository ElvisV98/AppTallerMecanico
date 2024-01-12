import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.scss'],
})
export class AddUpdateProductComponent  implements OnInit {

  @Input() product!: Product;

  form = new FormGroup({
    id: new FormControl(''),
    image: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    soldUnits: new FormControl(0, [Validators.required, Validators.min(0)])
  });

  utilsSvc = inject(UtilsService);


  constructor() { }

  ngOnInit() {
    if(this.product) { 
      this.form.setValue(this.product)
    };
  }

  async takePicture(){
    // const dataUrl = (await this.utilsSvc.takePicture('Imagen del producto')).dataUrl;
    // this.form.controls.image.setValue(dataUrl!);
    console.log("Tomando Fotografia")
  }

  submit() {
    if(this.form.valid){
      if(this.product){
        this.utilsSvc.dismissModal({ succes: true});
        this.utilsSvc.presentToast({
          message: "producto actualizado exitosamente",
          duration: 1500,
          color: "success",
          position: "middle",
          icon: "checkmark-circle-outline"
        })
      }
    }
  }

}
