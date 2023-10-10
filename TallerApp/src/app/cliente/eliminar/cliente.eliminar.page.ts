import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.servicio';

@Component({
  selector: 'app-eliminar',
  templateUrl: './cliente.eliminar.page.html',
  //styleUrls: ['./eliminar.page.scss'],
})
export class ClienteEliminarPage {

  id="6"

  // Observe que en el constructor injectamos el ClienteService
  // Le asignamos un nombre el cual utilizaremos más adelante
  constructor(private cliServ:ClienteService) { }

  grabar(){
    // Invocamos al método creado en el servicio
    // Le pasamos como parámetro el ID 
    this.cliServ.eliminarServicio(this.id)
  }

}
