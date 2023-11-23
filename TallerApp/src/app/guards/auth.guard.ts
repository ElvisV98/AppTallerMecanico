import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router  } from '@angular/router';
import { Observable, async } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authservice: AuthService, private storage: Storage) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
    // Aquí debes verificar si el usuario está autenticado
    // Puedes usar servicios de autenticación, almacenamiento local, tokens, etc.
 
    const isAuthenticated = true;//await this.storage.get('isLoggedIn') // Cambia esto a tu lógica de autenticación
  
    if (isAuthenticated) {
 
      return true; // Permitir acceso a la ruta
 
    } else {
 
      // Redirigir al usuario a la página de inicio de sesión
 
      this.router.navigate(['/login']);
 
      return false;
 
    }
 
  }
  
}

