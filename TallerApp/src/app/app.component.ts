import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Login', url: '/login/conectar', icon: 'mail' },
    { title: 'Registro', url: '/registro', icon: 'mail' },

    { title: 'Producto/Listar', url: 'product-list', icon: 'mail' },
    { title: 'Producto/Add', url: 'product-add', icon: 'mail' },
    { title: 'Producto/Editar', url: 'product-edit', icon: 'mail' },
    { title: 'Producto/Detail/1', url: 'product-detail/1', icon: 'mail' },
    { title: 'Producto/Detail/10', url: 'product-detail/10', icon: 'mail' },
    { title: 'Producto/Detail/', url: 'product-detail/', icon: 'mail' },
    { title: 'Producto/Crud', url: 'product-all', icon: 'mail' },

    { title: 'Cliente/Listar', url: '/cliente/listar', icon: 'mail' },
    { title: 'Cliente/agregar', url: '/cliente/agregar', icon: 'mail' },
    { title: 'Cliente/Actualizar', url: '/cliente/actualizar', icon: 'mail' },
    { title: 'Cliente/Eliminar', url: '/cliente/eliminar', icon: 'mail' },
    { title: 'Cliente/Leer', url: '/cliente/leer', icon: 'mail' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}