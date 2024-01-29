import { UtilsService } from './../services/utils.service';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router  } from '@angular/router';
import { Observable, async } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  utilsSvc = inject(UtilsService);
  authSvc = inject(AuthService);

  constructor() {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
    // Aquí debes verificar si el usuario está autenticado
    // Puedes usar servicios de autenticación, almacenamiento local, tokens, etc.
 
    const isAuthenticated = true;//await this.storage.get('isLoggedIn') // Cambia esto a tu lógica de autenticación
  
    if (isAuthenticated) {
      
      return true; // Permitir acceso a la ruta
 
    } else {
 
      this.utilsSvc.routerLink('/auth');
      return false;
 
    }
 
  }
  
}

