import { Component, OnInit } from '@angular/core';
import { ClUsuario } from '../model/ClUsuario';
import { UsuarioServiceService } from '../usuario.service';
import { Router } from '@angular/router';


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
  usuario: ClUsuario = { id: '', first_name: '', last_name: '', email: '', clave:0 };

;

mostrarMensajeId: boolean = false;
formSubmitted = false;
mostrarMensajeNombre: boolean = false;
mostrarMensajeApellido: boolean = false;
mostrarMensajeEmail: boolean = false;
mostrarMensajeClave: boolean = false;


autocompleteID() {
  // Autocompletar el campo ID con el valor del campo de correo electrónico
  this.usuario.id = this.usuario.email;
}

  id: string = '';

  constructor(private usuarioService: UsuarioServiceService, private router: Router) { }

  ngOnInit() { }

  // Función para leer un usuario existente
  leer() {
    this.mostrarMensajeId = false; // Reinicia el estado del mensaje de validación
  
    if (this.usuario.id) {
      this.usuarioService.getUsuario(this.usuario.id).subscribe(
        (data) => {
          if (data) {
            this.usuario = data;
            this.buttonCrearDisabled = true;
            this.buttonActualizarDisabled = false;
            this.buttonEliminarDisabled = false;
          } else {
            this.mostrarMensajeId = true; // Muestra el mensaje de validación
            this.msgError = "Id no encontrada.";
          }
        },
        (error) => {
          this.msgError = "Error al obtener el usuario: " + error;
        }
      );
    } else {
      this.msgError = "ID de usuario no válida";
    }
  }

  eliminar() {
    if (this.usuario.id) {
      // Llamar al servicio para eliminar el usuario por ID
      this.usuarioService.deleteUsuario(this.usuario.id).subscribe(
        () => {
          // Limpiar los campos y deshabilitar botones
          this.usuario = { id: '', first_name: '', last_name: '', email: '', clave: 0 };
          this.buttonCrearDisabled = false;
          this.buttonActualizarDisabled = true;
          this.buttonEliminarDisabled = true;
        },
        (error) => {
          this.msgError = "Error al eliminar el usuario: " + error;
        }
      );
    }
  }

  actualizar() {
    if (this.usuario.id) {
      // Llama a la función de actualización de usuario (this.usuarioService.updateUsuario(...))
      this.usuarioService.updateUsuario(this.usuario.id, this.usuario).subscribe(
        (data) => {
          // Realiza la actualización en el servidor y luego redirige a la página de usuario-edit
          this.router.navigate(['/usuario-edit', this.usuario.id]);
        },
        (error) => {
          this.msgError = "Error al actualizar el usuario: " + error;
        }
      );        
    }
  }


  crear() {
    // Reiniciar las variables de validación antes de la creación
    this.mostrarMensajeNombre = false;
    this.mostrarMensajeApellido = false;
    this.mostrarMensajeEmail = false;
    this.mostrarMensajeClave = false;
  
    if (this.mostrarMensajeId) {
      if (!this.usuario.first_name) {
        this.mostrarMensajeNombre = true;
        return; // Detener la función si falta el nombre
      }
  
      // Validar los campos uno por uno
      if (!this.usuario.last_name) {
        this.mostrarMensajeApellido = true;
        return; // Detener la función si falta el apellido
      }
  
      if (!this.usuario.email) {
        this.mostrarMensajeEmail = true;
        return; // Detener la función si falta el correo
      }
  
      if (!this.usuario.clave) {
        this.mostrarMensajeClave = true;
        return; // Detener la función si falta la clave
      }
  
      // Si todos los campos están completos, habilita la creación
      this.usuarioService.addUsuario(this.usuario).subscribe(
        (data) => {
          if (data) {
            this.usuario = data;
            this.buttonCrearDisabled = true;
            this.buttonActualizarDisabled = false;
            this.buttonEliminarDisabled = false;
            this.msgError = "Usuario creado exitosamente";
          } else {
            this.msgError = "Error al crear el usuario";
          }
        },
        (error) => {
          this.msgError = "Error al crear el usuario: " + error;
        }
      );
    } else {
      // Muestra un mensaje de error si se intenta crear cuando la ID existe
      this.msgError = "No puedes crear un usuario con una ID existente. Use una ID diferente.";
    }
  }
  



  grabar() { }

  grabarActualizarAutomatico() { }
}
