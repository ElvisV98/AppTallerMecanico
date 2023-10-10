import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.servicio';

@Component({
  selector: 'app-agregar',
  templateUrl: './cliente.agregar.page.html',
  //styleUrls: ['./cliente.agregar.page.scss'],
})
export class ClienteAgregarPage {
  // Estructura registro, agrupa varios campos
  // Debieramos utilizar una interface
  registro={
    nombres:"Harrys",
    apellidos:"El Magnifico",
    correo:"harrys@ciudal.cl",
    clave:"macarena",
  }
  
  // Observe que en el constructor injectamos el ClienteService
  // Le asignamos un nombre el cual utilizaremos más adelante
  constructor(private cliServ:ClienteService) { }

  grabar(){
    // Invocamos al método creado en el servicio
    // Le pasamos como parámetro la variable registro
    // registro, contiene todos los campos enlazados del Html
    this.cliServ.agregarServicio(this.registro)
  }

}
