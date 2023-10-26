import { Component, OnInit } from '@angular/core';
import { ClProducto } from '../model/ClProducto';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.page.html',
  styleUrls: ['./product-all.page.scss'],
})
export class ProductAllPage implements OnInit {
  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  producto: ClProducto = { id: 0, nombre: '', descripcion: '', precio: 0, fecha: new Date(),cantidad:0 };;

formSubmitted = false;  
mostrarMensajeId: boolean = false;
mostrarMensajeNombre: boolean = false;
mostrarMensajeDescripcion: boolean = false;
mostrarMensajePrecio: boolean = false;
mostrarMensajeCantidad: boolean = false;

  constructor(private productservice: ProductServiceService, private router: Router) { }

  ngOnInit() {  }


  public id: string = '';


  leer() {
    this.mostrarMensajeNombre = false; // Reinicia el estado del mensaje de validación
  
    if (this.producto.nombre) {
      // Llama a la función del servicio que busca por nombre y devuelve todos los campos
      this.productservice.getProductByName(this.producto.nombre).subscribe(
        (data) => {
          if (data) {
            this.producto = data;
            this.buttonCrearDisabled = true;
            this.buttonActualizarDisabled = false;
            this.buttonEliminarDisabled = false;
            this.msgError = "Producto encontrado.";
          } else {
            this.msgError = "Producto no encontrado.";
          }
        },
        (error) => {
          this.msgError = "Error al obtener el producto: " + error;
        }
      );
    } else {
      this.msgError = "Nombre de producto no válido";
    }
  }

  
  
  eliminar() {
    if (this.producto.id) {
      // Llamar al servicio para eliminar el usuario por ID
      this.productservice.deleteProduct(this.producto.id).subscribe(
        () => {
          // Limpiar los campos y deshabilitar botones
          this.producto = {  id: 1, nombre: '', descripcion: '', precio: 0, fecha: new Date(),cantidad:0 };
          this.buttonCrearDisabled = false;
          this.buttonActualizarDisabled = true;
          this.buttonEliminarDisabled = true;
        },
        (error) => {
          this.msgError = "Error al eliminar el usuario: " + error;
        }
      );
    }
  }

  actualizar() {
    if (this.producto.id) {
      // Llama a la función de actualización de usuario (this.usuarioService.updateUsuario(...))
      this.productservice.updateProduct(this.producto.id, this.producto).subscribe(
        (data) => {
          // Realiza la actualización en el servidor y luego redirige a la página de usuario-edit
          this.router.navigate(['/product-edit', this.producto.id]);
        },
        (error) => {
          this.msgError = "Error al actualizar el usuario: " + error;
        }
      );        
    }
  }


  crear() {
    // Reiniciar las variables de validación antes de la creación
    this.mostrarMensajeNombre  = false;
    this.mostrarMensajeDescripcion  = false;
    this.mostrarMensajePrecio = false;
    this.mostrarMensajeCantidad = false;
  
    if (this.mostrarMensajeId) {
      if (!this.producto.nombre) {
        this.mostrarMensajeNombre = true;
        return; // Detener la función si falta el nombre
      }
  
      // Validar los campos uno por uno
      if (!this.producto.descripcion) {
        this.mostrarMensajeDescripcion = true;
        return; // Detener la función si falta el apellido
      }
  
      if (!this.producto.precio) {
        this.mostrarMensajePrecio = true;
        return; // Detener la función si falta el correo
      }
  
      if (!this.producto.cantidad) {
        this.mostrarMensajeCantidad = true;
        return; // Detener la función si falta la clave
      }
  
      // Si todos los campos están completos, habilita la creación
      this.productservice.addProduct(this.producto).subscribe(
        (data) => {
          if (data) {
            this.producto = data;
            this.buttonCrearDisabled = true;
            this.buttonActualizarDisabled = false;
            this.buttonEliminarDisabled = false;
            this.msgError = "Usuario creado exitosamente";
          } else {
            this.msgError = "Error al crear el usuario";
          }
        },
        (error) => {
          this.msgError = "Error al crear el usuario: " + error;
        }
      );
    } else {
      // Muestra un mensaje de error si se intenta crear cuando la ID existe
      this.msgError = "No puedes crear un usuario con una ID existente. Use una ID diferente.";
    }
  }

  limpiarDatos() {
    // Restablece los campos del producto a sus valores iniciales o valores vacíos
    this.producto = { id: 0, nombre: '', descripcion: '', precio: 0, fecha: new Date(), cantidad: 0 };
    this.buttonCrearDisabled = false;
    this.buttonActualizarDisabled = true;
    this.buttonEliminarDisabled = true;
    this.msgError = ''; // Limpia el mensaje de error si hubiera alguno
  }
  
  

}
