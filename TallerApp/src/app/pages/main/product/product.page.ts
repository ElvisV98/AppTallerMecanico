import { Component, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateProductComponent } from 'src/app/shared/components/add-update-product/add-update-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  utilsSvc = inject(UtilsService);

  products: Product[] = [
    {id:"1", name: "Notebook", image: "https://www.winpy.cl/files/36127-8794-Notebook-Lenovo-ThinkBook-14-1.jpg", price: 800000, soldUnits: 2},
    {id:"2", name: "Audifono", image: "https://www.winpy.cl/files/32433-1292-Logitech-Zone-Vibe-100-1.jpg", price: 100000, soldUnits: 20},
    {id:"3", name: "Proyector", image: "https://www.winpy.cl/files/31235-8515-Philco-2115N-1.jpg", price: 80000, soldUnits: 10},
    {id:"4", name: "Monitor", image: "https://www.winpy.cl/files/w26332_monitor_dell_p2722h_de_27_01.jpg", price: 600000, soldUnits: 5},
    {id:"5", name: "Disco Duro", image: "https://www.winpy.cl/files/26273-3671-SXS2000.jpg", price: 50000, soldUnits: 0},
  ];
  

  constructor() { }

  ngOnInit() {
    this.products = [...this.products]
  }

  deleteProduct(id:string){
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      // Si necesitas actualizar la vista inmediatamente
      this.products = [...this.products];
    }
  }

  addUpdateProduct(product?: Product){
    this.utilsSvc.presentModal({
      component: AddUpdateProductComponent,
      cssClass: 'add-update-modal',
      componentProps: { product }
    });
  }
}
