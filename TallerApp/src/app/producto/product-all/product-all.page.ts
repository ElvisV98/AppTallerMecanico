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
  producto: ClProducto = {idProducto: 0,codigo:'', nombreprod: '', precio: 0,cantidad:0,fechaNacimiento:'',rut: '',dv: '',enfermedad: '',fonocontacto: 0,categoria: '' ,editorial: '',raza: '',edad: 0,altura: 0,hrini: '',hrfin: '',direccion: '',fCreacion:''};

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
    console.log("Función leer() llamada.");
    this.mostrarMensajeNombre = false;
  
    if (this.producto.nombreprod) {
      // Llama a la función del servicio que busca por nombre y devuelve todos los campos
      this.productservice.getProductByName(this.producto.nombreprod).subscribe(
        (data) => {
          console.log(data);
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
      console.log("Nombre de producto no válido:", this.producto.nombreprod);
      this.msgError = "Nombre de producto no válido";
    }
  }

  
  
  eliminar() {
    if (this.producto.idProducto) {
      // Llamar al servicio para eliminar el usuario por ID
      this.productservice.deleteProduct(this.producto.idProducto).subscribe(
        () => {
          // Limpiar los campos y deshabilitar botones
          this.producto = { idProducto: 0,codigo:'', nombreprod: '', precio: 0,cantidad:0,fechaNacimiento:'',rut: '',dv: '',enfermedad: '',fonocontacto: 0,categoria: '' ,editorial: '',raza: '',edad: 0,altura: 0,hrini: '',hrfin: '',direccion: '',fCreacion:''};
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
    if (this.producto.idProducto) {
      // Llama a la función de actualización de usuario (this.usuarioService.updateUsuario(...))
      this.productservice.updateProduct(this.producto.idProducto, this.producto).subscribe(
        (data) => {
          // Realiza la actualización en el servidor y luego redirige a la página de usuario-edit
          this.router.navigate(['/product-edit', this.producto.idProducto]);
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
      if (!this.producto.nombreprod) {
        this.mostrarMensajeNombre = true;
        return; // Detener la función si falta el nombre
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
    this.producto = {idProducto: 0,codigo:'09-G13', nombreprod: '', precio: 0,cantidad:0,fechaNacimiento:'',rut: '',dv: '',enfermedad: '',fonocontacto: 0,categoria: '' ,editorial: '',raza: '',edad: 0,altura: 0,hrini: '',hrfin: '',direccion: '',fCreacion:''};
    this.buttonCrearDisabled = false;
    this.buttonActualizarDisabled = true;
    this.buttonEliminarDisabled = true;
    this.msgError = ''; // Limpia el mensaje de error si hubiera alguno
  }
  
  

}
