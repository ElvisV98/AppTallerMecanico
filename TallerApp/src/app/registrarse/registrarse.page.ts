import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-registrarse',
  templateUrl:'./registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  contrasena: string = '';
  correo: string = '';
  nombre: string = ''; // Agregado para el nombre
  apellido: string = ''; // Agregado para el apellido
  mostrarMensaje: boolean = false;
  mostrarMensajeCorreo: boolean = false;
  mostrarMensajeNombre: boolean = false; // Agregado para el nombre
  mostrarMensajeApellido: boolean = false; // Agregado para el apellido
  correoValido: boolean = false;
  contrasenaValida: boolean = false;
  nombreValido: boolean = false; // Agregado para el nombre
  apellidoValido: boolean = false; // Agregado para el apellido
  

  constructor(private authService: AuthService, private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }



  async register() {
    const registered = await this.authService.register(this.nombre, this.contrasena);
    if (registered) {
      console.log('Usuario registrado correctamente', this.nombre);
      // Aquí puedes redirigir al usuario a la página principal después del registro
      this.navCtrl.navigateRoot(['/tabs/home']);
    } else {
      console.log('Error al registrar el usuario');
    }
  }





  validarContrasena() {
    if (this.contrasena === '') {
      // El campo de contraseña está vacío, no mostrar el mensaje de validación
      this.mostrarMensaje = false;
      this.contrasenaValida = false; // La contraseña no es válida
    } else {
      const regex = /^(?=.*[0-9].*[0-9].*[0-9].*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])([a-zA-Z0-9]+)$/;

      if (regex.test(this.contrasena)) {
        // La contraseña cumple con los requisitos, ocultar el mensaje de validación
        this.mostrarMensaje = false;
        this.contrasenaValida = true; // La contraseña es válida
      } else {
        // La contraseña no cumple con los requisitos, mostrar el mensaje de validación
        this.mostrarMensaje = true;
        this.contrasenaValida = false; // La contraseña no es válida
      }
    }
  }

  validarCorreo() {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (this.correo === '') {
      // El campo de correo está vacío, oculta el mensaje de validación
      this.mostrarMensajeCorreo = false;

    }else if (regexCorreo.test(this.correo)) {
      // El correo electrónico es válido, ocultar el mensaje de validación
      this.mostrarMensajeCorreo = false;
      
      this.correoValido = true;
      setTimeout(() => {
        this.mostrarMensajeCorreo = false;
      }, 3000); // El correo es válido
    } else {
      // El correo electrónico no es válido, mostrar el mensaje de validación
      this.mostrarMensajeCorreo = true;
      this.correoValido = false; // El correo no es válido
      
    }

  }

  
  validarNombre() {
    const regexNombre = /^[a-zA-Z]+$/;

    if (regexNombre.test(this.nombre)) {
      this.mostrarMensajeNombre = false;
    } else {
      this.mostrarMensajeNombre = true;
      setTimeout(() => {
        this.mostrarMensajeNombre = false; // Oculta el mensaje después de 5 segundos
      }, 3000);
    }
  }

  validarApellido() {
    const regexApellido = /^[a-zA-Z]+$/; // Validación de letras
  
    if (regexApellido.test(this.apellido)) {
      this.mostrarMensajeApellido = false;
      setTimeout(() => {
        this.apellidoValido = true;
      }, 2000);
    } else {
      this.mostrarMensajeApellido = true;
      setTimeout(() => {
        this.mostrarMensajeApellido = false;
      }, 3000);
    }
  }

  // Otras funciones de validación y lógica del formulario
}
