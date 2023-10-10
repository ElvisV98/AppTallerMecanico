import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.servicio';

@Component({
    selector: 'app-actualizar',
    templateUrl: './cliente.actualizar.page.html',
    //styleUrls: ['./cliente.actualizar.page.scss'],
})
export class ClienteActualizarPage {
    id = "5"
    registro = {
        nombres: "Harrys",
        apellidos: "El Magnifico",
        correo: "harrys@ciudal.cl",
        clave: "macarena",
    }


    // Observe que en el constructor injectamos el ClienteService
    // Le asignamos un nombre el cual utilizaremos más adelante
    constructor(private cliServ:ClienteService) { }

    grabar() { 
        // Invocamos al método creado en el servicio
        // Le pasamos como parámetro el ID y la variable registro
        // registro, contiene todos los campos enlazados del Html
        this.cliServ.actualizarServicio(this.id,this.registro)
    }


}

