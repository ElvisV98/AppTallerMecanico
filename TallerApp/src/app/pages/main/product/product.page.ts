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
    {id:"1", brand: "HP", name: "Notebooksssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", description: "Descripcion 1sadasdasdaskdjasndka jsdnaksjdnaksjdanksjdnaksjdanksdjnaksjdanksdjanskjdanskdjanskjdanksdjNotebooksssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", cant: 2, price: 800000, image: "https://www.winpy.cl/files/36127-8794-Notebook-Lenovo-ThinkBook-14-1.jpg", state: "Publicado", section:"auto"},
    {id:"2", brand: "HP", name: "Audifono", description: "Descripcion 2", cant: 10000000, price: 100000, image: "https://www.winpy.cl/files/32433-1292-Logitech-Zone-Vibe-100-1.jpg", state: "Publicado", section:"auto"},
    {id:"3", brand: "HP", name: "Proyector", description: "Descripcion 3", cant: 10, price: 80000, image: "https://www.winpy.cl/files/31235-8515-Philco-2115N-1.jpg", state: "Publicado", section:"auto"},
    {id:"4", brand: "HP", name: "Monitor", description: "Descripcion 4", cant: 5, price: 600000, image: "https://www.winpy.cl/files/w26332_monitor_dell_p2722h_de_27_01.jpg", state: "Publicado", section:"auto"},
    {id:"5", brand: "HP", name: "Disco Duro", description: "Descripcion 5", cant: 0, price: 50000, image: "https://www.winpy.cl/files/26273-3671-SXS2000.jpg", state: "Publicado", section:"auto"},
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

  aumProduct(p: Product) {
    const index = this.products.findIndex(product => product.id === p.id);
    if (index !== -1) { 
      this.products[index].cant += 1;
      this.products = [...this.products];
    }
  }

  dissProduct(p: Product) {
    const index = this.products.findIndex(product => product.id === p.id);
    if (index !== -1) { 
      this.products[index].cant -= 1;
      this.products = [...this.products];
    }
  }
}
