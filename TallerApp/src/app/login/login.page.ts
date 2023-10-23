import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef, static: false }) card!: ElementRef<HTMLIonCardElement>;
  
  private animation!: Animation;
  
  contrasena: string = '';
  correo: string = '';
  mostrarMensaje: boolean = false;
  mostrarMensajeCorreo: boolean = false;
  correoValido: boolean = false;  // Variable para controlar la validez del correo
  contrasenaValida: boolean = false;  // Variable para controlar la validez de la contraseña

  constructor(private router: Router, private animationCtrl: AnimationController) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(4000)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }

  play() {
    this.animation.play();
  }

  stop() {
    this.animation.stop();
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
      this.correoValido = true; // El correo es válido
    } else {
      // El correo electrónico no es válido, mostrar el mensaje de validación
      this.mostrarMensajeCorreo = true;
      this.correoValido = false; // El correo no es válido
    }
  }




  
}







