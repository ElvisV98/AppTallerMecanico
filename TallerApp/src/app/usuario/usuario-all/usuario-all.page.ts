import { Component, OnInit } from '@angular/core';
import { ClUsuario } from '../model/ClUsuario';
@Component({
  selector: 'app-usuario-all',
  templateUrl: './usuario-all.page.html',
  styleUrls: ['./usuario-all.page.scss'],
})
export class UsuarioAllPage implements OnInit {
  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  usuario: ClUsuario = { id: 'macarena@soco.cl', first_name: '', last_name: '', email: '', clave:0 };;

  constructor() { }
  ngOnInit() {  }
  public id: string = '';



  leer() {}
  eliminar() { }
  grabar() { }
  actualizar() { }
  grabarActualizarAutomatico() { }
}
