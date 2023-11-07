import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  
  selectedOption: string;

  constructor(private navCtrl: NavController) {
    this.selectedOption = ''; // Inicializa en el constructor
  }
  

  ngOnInit() {
  }

 /* METODO PARA CONTADOR */ 

  cantidad: number = 1;

  aumentar() {
    this.cantidad++;
  }

  disminuir() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }


  redirectToProductList() {
    if (this.selectedOption) {
      this.navCtrl.navigateForward(['/product-list', this.selectedOption]);
    }
  }
}

