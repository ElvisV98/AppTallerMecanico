import { Component, OnInit } from '@angular/core';

// Importamos Librerías
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClProducto } from '../model/ClProducto';
//import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  // Creamos la Variable para el Html
  productos: ClProducto[] = [];
  // Injectamos Librerias
  constructor(public restApi: ProductServiceService
    , public loadingController: LoadingController
    , public router: Router) { }

  // LLamamos al método que rescata los productos  
  ngOnInit() {
    this.getProducts();
  }

  

  // Método  que rescta los productos
  
  async getProducts() {
    console.log("Entrando :getProducts");
    // Crea un Wait (Esperar)
    const loading = await this.loadingController.create({
      message: 'Harrys Loading...'
    });
    // Muestra el Wait
    await loading.present();
    
    await this.restApi.getProducts()
  .subscribe({
    next: (res) => {
      console.log("Entrando :");
      // Filtra los productos antes de asignarlos a this.productos
      this.productos = res.filter(producto => producto.codigo === '09-G13');
      console.log("thisProductos:", this.productos);
      loading.dismiss();
    },
    complete: () => { },
    error: (err) => {
      console.log("Err:" + err);
      loading.dismiss();
    }
  });

  }
}
