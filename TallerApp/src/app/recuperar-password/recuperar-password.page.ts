import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {
  correo: string = '';
  mostrarMensajeCorreo: boolean = false;
  correoValido: boolean = false;  // Variable para controlar la validez del correo
  



  mostrarLabel = false;

  constructor() { }

  ngOnInit() {
  }

  validarCorreo() {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (this.correo === '') {
      // El campo de correo está vacío, oculta el mensaje de validación
      this.mostrarMensajeCorreo = false;

    }else if (regexCorreo.test(this.correo)) {
      // El correo electrónico es válido, ocultar el mensaje de validación
      this.mostrarMensajeCorreo = false;
      this.correoValido = true; // El correo es válido
    } else {
      // El correo electrónico no es válido, mostrar el mensaje de validación
      this.mostrarMensajeCorreo = true;
      this.correoValido = false; // El correo no es válido
    }
  }
}




