import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef, static: false }) card!: ElementRef<HTMLIonCardElement>;
  
  password: string = '';
  passwordVisible: boolean = false;

  

  email: string = '';
  mostrarMensaje: boolean = false;
  mostrarMensajeCorreo: boolean = false;
  correoValido: boolean = false;
  contrasenaValida: boolean = false;

  ngOnInit(): void {
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  validarContrasena() {
    if (this.password === '') {
      this.mostrarMensaje = false;
      this.contrasenaValida = false;
    } else {
      const regex = /^(?=.*[0-9].*[0-9].*[0-9].*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])([a-zA-Z0-9]+)$/;

      if (regex.test(this.password)) {
        this.mostrarMensaje = false;
        this.contrasenaValida = true;
      } else {
        this.mostrarMensaje = true;
        this.contrasenaValida = false; // La contraseña no es válida
      }
    }
  }

  validarCorreo() {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (this.email === '') {
      // El campo de correo está vacío, oculta el mensaje de validación
      this.mostrarMensajeCorreo = false;

    }else if (regexCorreo.test(this.email)) {
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







