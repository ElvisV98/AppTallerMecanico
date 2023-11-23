import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../auth.service';
import { NavController, ToastController } from '@ionic/angular';

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
  nombre: string = ''; // Agregado para el nombre
  mostrarMensajeNombre: boolean = false; // Agregado para el nombre
  
  constructor(private router: Router, private animationCtrl: AnimationController,private authService: AuthService,private navCtrl: NavController, private storage: Storage,private toastController: ToastController ) { }

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





  async login() {
    const loggedIn = await this.authService.login(this.nombre, this.contrasena);
    if (loggedIn) {
      // Aquí puedes redirigir al usuario a la página principal después del inicio de sesión
      this.router.navigate(['/tabs/home']);
    } else {
      this.presentToast('Usuario no creado. Regístrate primero.');
      console.log('Credenciales incorrectas');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, // Duración del toast en milisegundos
      position: 'top', // Posición del toast (puedes cambiar a 'bottom' o 'middle')
      color: 'danger', // Color del toast (puedes personalizarlo)
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancelar',
        },
      ],
    });
    toast.present();
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

  validarNombre() {
    const regexNombre = /^[a-zA-Z]+$/;

    if (regexNombre.test(this.nombre)) {
      this.mostrarMensajeNombre = false;
    } else {
      this.mostrarMensajeNombre = true;
      setTimeout(() => {
        this.mostrarMensajeNombre = false; // Oculta el mensaje después de 5 segundos
      }, 2000);
    }
  } 
}







