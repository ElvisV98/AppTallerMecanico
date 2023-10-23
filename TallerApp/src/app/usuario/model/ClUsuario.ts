// export class ClUsuario {
//   id: string;
//   first_name: string;
//   last_name: string;
//   email: EmailValidator;
//   clave: number;
//     constructor(values: Object= {}){
//         Object.assign(this, values);
//     }


// }
export class ClUsuario {
  // si no Inicializo los valores, da Error
  // Por eso es el constructor por obligación
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  clave: number;

  // si no Inicializo los valores, da Error
    constructor(obj: any){
        this.id = obj && obj.id || null
        this.first_name = obj && obj.first_name || null
        this.last_name = obj && obj.last_name || null
        this.email = obj && obj.email || null
        this.clave = obj && obj.clave || null
        
    }
}
