import { Injectable, inject } from '@angular/core';
import { UtilsService } from './utils.service';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  id : number = 0;
  utilsSvc = inject(UtilsService);

  constructor() { }

  getTempUser() {

  }

  createTempUser(user: User){
    user.id = this.id;
    try {
      this.utilsSvc.saveInLocalStorage('user'+this.id, user);
      return true;
    } catch (error) {
      console.log('Error al intentar crear usuario temporal', error);
      return false;
    }
    this.id = this.id + 1;
  }

  updateTempUser(user: User) {
    
  }

  deleteTempUser() {
    this.utilsSvc.removeElementInLocalStorage('user');
  }

  login(email: string, password: string) {

    try {
      const tempUser = this.utilsSvc.getFromLocalStorage('user');
      
      if (tempUser.email === email && tempUser.password === password) {
        console.log('Usuario autenticado con exito');
        return true;
      
      } else {
        console.log('Error al autenticar usuario');
        return false;
      }

    }catch(error) {
      console.log('Error al auntenticar usuario', error);
      return false;
    }
    
  }

  signOut() {

  }
}
