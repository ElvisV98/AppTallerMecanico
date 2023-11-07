import { Injectable } from '@angular/core';
import { ClUsuario} from './model/ClUsuario';

// Importamos  las librerías necesarias
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// creamos Constantes que utilizaremos en el envio
const apiUrl = "http://localhost:3000/usuarios";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  // Injectamos HttpClient, para poder consular una página
  constructor(private http: HttpClient) { }

  // Controla y enviará un mensaje a consola para todos los errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("handleError Harrys", error); // log to console instead
      return of(result as T);
    };
  }

  // Método Agregar usuario, y devuelve un observable del tipo Producto
  // Debe ser un Observable si deses suscribir este método en otro lado
  addUsuario(usuario: ClUsuario): Observable<ClUsuario> {
    console.log("Res-api Enviando AddUsuario : ", usuario);
    // Ojo No lo ejecuta lo declara
    // El Pipe lo intercepta
    return this.http.post<ClUsuario>(apiUrl, usuario, httpOptions)
      .pipe(  // Tubería
        // tap intersecta la respuesta si no hay error
        tap((usuario: ClUsuario) => console.log('added usuario w/:', usuario)),
        // En caso de que ocurra Error
        catchError(this.handleError<ClUsuario>('addUsuario'))
      );
  }

  // Obtenemos todos los Usuarios
  getUsuarios(): Observable<ClUsuario[]> {
    console.log("getUsuarios ()");
    return this.http.get<ClUsuario[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched usuarios')),
        catchError(this.handleError('getUsuarios', []))
      );
  }


  //  Obtener un Producto
  getUsuario(id: string): Observable<ClUsuario> {
    //const url = '${apiUrl}/${id}';
    //return this.http.get<Producto>(url).pipe(
    console.log("getUsuario ID:" + id);
    return this.http.get<ClUsuario>(apiUrl + "/" + id)
      .pipe(
        tap(_ => console.log('fetched usuario id=${id}')),
        catchError(this.handleError<ClUsuario>('getUsuario id=${id}'))
      );
  }

  deleteUsuario(id: string): Observable<ClUsuario> {
    //const url = '${apiUrl}/${id}';
    //return this.http.delete<Usuario>(url, httpOptions).pipe(
    return this.http.delete<ClUsuario>(apiUrl + "/" + id, httpOptions)
      .pipe(
        tap(_ => console.log('deleted usuario id=${id}')),
        catchError(this.handleError<ClUsuario>('deleteUsuario'))
      );
  }

  updateUsuario(id: string, usuario: ClUsuario): Observable<ClUsuario> {
    return this.http.put<ClUsuario>(apiUrl + "/" + id, usuario, httpOptions)
      .pipe(
        tap(_ => console.log('updated usuario id=${id}')),
        catchError(this.handleError<any>('updateUsuario'))
      );
  }


}
