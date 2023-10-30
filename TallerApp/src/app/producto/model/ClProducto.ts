//atributos antiguos que se usarion con endpoints locales - codigo profesor APIPROYECT

// export class ClProducto {
//   id: number;
//   nombre: string;
//   descripcion: string;
//   precio: number;
//   cantidad: number;
//   fecha: Date;
//     constructor(values: Object= {}){
//         Object.assign(this, values);


// Nuevos atributos a utilizar en API servidor

// "idProducto": 3,
// "codigo": "0",
// "nombreprod": "cocina 4 platos",
// "precio": 40000,
//  "cantidad": 96,
//"fechaNacimiento": "2023-10-22",
// "rut": null,
// "dv": "0",
// "enfermedad": "0",
// "fonocontacto": 0,
// "categoria": "0",
//  "editorial": "0",
//  "raza": "0",
//  "edad": 0,
//  "altura": 0,
//   "hrini": "0",
//  "hrfin": "0",
//  "direccion": "0",
//  "fCreacion": "2023-10-22T10:13:36.165425Z"
//     }
// }


export class ClProducto {
  // si no Inicializo los valores, da Error
  // Por eso es el constructor por obligación
  idProducto: number;
  codigo:string;
  nombreprod: string;
  precio: number;
  cantidad: number;

  
  
  // si no Inicializo los valores, da Error
    constructor(obj: any){
        this.idProducto = obj && obj.idProducto || null
        this.codigo = obj && obj.codigo || null
        this.nombreprod = obj && obj.nombreprod || null        
        this.precio = obj && obj.precio || null
        this.cantidad = obj && obj.cantidad || null

       
    }
}