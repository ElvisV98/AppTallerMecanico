import { Component } from '@angular/core';
import { ClienteService } from '../cliente.servicio';
import { IRegistro } from '../interface/IRegistro';
@Component({
    selector: 'app-leer',
    templateUrl: './cliente.leer.page.html',
    //styleUrls: ['./cliente.leer.page.scss'],
})
export class ClienteLeerPage {
    msgError = ""
    buttonEliminarDisabled = false
    buttonLeerDisabled = false
    buttonActualizarDisabled = false
    buttonCrearDisabled = false
    public id: string = '';
    registro:IRegistro = {
        nombres: ''
        , apellidos: ''
        , correo: ''
        , clave: ''
    }


  // Observe que en el constructor injectamos el ClienteService
  // Le asignamos un nombre el cual utilizaremos más adelante
    constructor(private cliServ:ClienteService) { }

    leer() { 
        // El servicio retorna la dirección del objeto
        // Se actualiza de inmediato el HTML, ya que utilizas NGModel
        this.registro=this.cliServ.leerServicio(this.id)
        this.registro.apellidos= "jajajajajajaj"
    }
    eliminar() { }
    grabar() { }
    actualizar() { }
    grabarActualizarAutomatico() { }
    // myBackButton() {this.location.back();}

}
