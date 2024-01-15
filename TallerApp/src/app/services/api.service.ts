import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UtilsService } from './utils.service';
import { User } from '../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  utilsSvc = inject(UtilsService);

  constructor() { }


  createUser(user: User){
    // const url = `${this.apiUrl}/${this.endpoint}/register`;
    // const headers = new HttpHeaders().set('x-tenant-id', '<user-id>');
    // const body = {
    //   name: user.name,
    //   email: user.email,
    //   password: user.password
    // };
    return true;
  }

  async signOut() {
    this.utilsSvc.routerLink('/auth');
    // this.utilsSvc.removeElementInLocalStorage('user');
  }


}
