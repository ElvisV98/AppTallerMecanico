import { Injectable } from '@angular/core';
import { ClProducto } from './model/ClProducto';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


const apiUrl = "https://sumativa2.onrender.com/api/productos";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http: HttpClient) { }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("tienes un error hermanito", error);
      return of(result as T);
    };
  }


  addProduct(producto: ClProducto): Observable<ClProducto> {
    return this.http.post<ClProducto>(apiUrl +"/", producto, httpOptions)
       .pipe(
        tap((producto: ClProducto) => console.log('added product w/:', producto)),
        catchError(this.handleError<ClProducto>('addProduct'))
      );
  }
 


  getProducts(): Observable<ClProducto[]> {
    return this.http.get<ClProducto[]>(apiUrl)
      .pipe(
        tap(products => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }


  getProduct(idProducto: number): Observable<ClProducto> {
    return this.http.get<ClProducto>(apiUrl + "/" + idProducto)
      .pipe(
        tap(_ => console.log(`fetched product id=${idProducto}`)),
        catchError(this.handleError<ClProducto>(`getProduct id=${idProducto}`))
      );
  }


  deleteProduct(idProducto: number): Observable<ClProducto> {
    return this.http.delete<ClProducto>(apiUrl + "/" + idProducto, httpOptions)
      .pipe(
        tap(_ => console.log(`deleted product id=${idProducto}`)),
        catchError(this.handleError<ClProducto>('deleteProduct'))
      );	
  }


  updateProduct(idProducto: number, producto: ClProducto): Observable<ClProducto> {
    return this.http.put<ClProducto>(apiUrl + "/" + idProducto, producto, httpOptions)
      .pipe(
        tap(_ => console.log(`updated product id=${idProducto}`)),
        catchError(this.handleError<any>('updateProduct'))
      );
  }


  getProductByName(nombreprod: string): Observable<ClProducto> {
    const url = `${apiUrl}?nombre=${nombreprod}`;
    return this.http.get<ClProducto[]>(url).pipe(
      map((productos) => productos[0]), // Obtén el primer producto (asumiendo que el nombre es único)
      tap(_ => console.log('fetched product by name')),
      catchError(this.handleError<ClProducto>('getProductByName'))
    );
  }

}
