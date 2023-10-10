// Definimos la Estructura de nuestro registro
// Todos los campos son obligatorios 
// al menos que se declare como opcional con signo de pregunta
export interface IRegistro{
    id?:String
    nombres:String
    apellidos:String
    //Signo pregunta, permite que el campo sea opcional
    correo?:String  
    clave?:String
}
