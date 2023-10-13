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
    { title: 'Producto/Detail/', url: 'product-detail/', icon: 'mail' },
    { title: 'Producto/Crud', url: 'product-all', icon: 'mail' },

    { title: 'usuario/Listar', url: 'usuario-list', icon: 'mail' },
    { title: 'usuario/Add', url: 'usuario-add', icon: 'mail' },
    { title: 'usuario/Editar', url: 'usuario-edit', icon: 'mail' },   
    { title: 'usuario/Detail/', url: 'usuario-detail/', icon: 'mail' },
    { title: 'usuario/Crud', url: 'usuario-all', icon: 'mail' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}