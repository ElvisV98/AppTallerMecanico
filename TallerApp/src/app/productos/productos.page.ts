import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor() { }

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
}