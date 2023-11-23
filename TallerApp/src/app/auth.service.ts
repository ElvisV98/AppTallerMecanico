import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) { 
    this.ngOnInit();
  }
  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }
  async login(nombre: string, contrasena: string): Promise<boolean> {
    // Aquí, verificarías las credenciales en una base de datos o en algún otro lugar.
    // Por simplicidad, compararemos las credenciales con valores fijos.
    const usuario = await this.storage.get('user');
    console.log('Datos del usuario recuperados:', usuario);
    if (usuario) {
      // Hacer algo con los datos del usuario, como mostrarlos en la interfaz de usuario.
      console.log(usuario.nombre,'-', usuario.contrasena);
    } else {
      // El usuario no está almacenado en la memoria local.
      console.log('No se encontraron datos de usuario.');
    }

    if (nombre === usuario.nombre && contrasena === usuario.contrasena) {
      await this.storage.set('isLoggedIn', true);
      return true;
    } else {
      return false;
    }
  }

  async register(nombre: string, contrasena: string): Promise<boolean> {
    // Aquí, normalmente agregarías el nuevo usuario a la base de datos o algún servicio de autenticación.
    // Por simplicidad, simplemente guardamos las credenciales en el almacenamiento local.
    //await this.storage.set(username, password);
    await this.storage.set('user', { nombre, contrasena });
    console.log('Usuario registrado:', { nombre, contrasena });
    return true;
  }

  async isLoggedIn(): Promise<boolean> {
    return !!(await this.storage.get('isLoggedIn'));
  }

  async logout(): Promise<void> {
    await this.storage.remove('isLoggedIn');
  }
}

