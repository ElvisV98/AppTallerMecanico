import { AbstractControl } from "@angular/forms";

export class CustomValidators {

    static matchValues(toCompare: AbstractControl) {
        return (control: AbstractControl) => {
            if (control.value !== toCompare.value) return { noMatch: true };
            return null;
        };
    }

    static validateRut(control: AbstractControl) {
        const rut = control.value;

        // Lógica de validación del RUT (puedes implementar tu propia lógica aquí).
        // En este ejemplo, asumimos que el RUT debe tener un formato específico (XX.XXX.XXX-Y).
        const rutRegex = /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/;
        if (!rutRegex.test(rut)) {
            return { invalidRut: true };
        }

        // Lógica para verificar el dígito verificador (puedes implementar tu propia lógica aquí).
        if (!isValidRut(rut)) {
            return { invalidRut: true };
        }

        return null; // El RUT es válido.
    }
}

// Función auxiliar para verificar el dígito verificador del RUT.
function isValidRut(rut: string) {
    // Implementa aquí tu lógica para verificar el dígito verificador del RUT.
    // Puedes encontrar algoritmos de validación de RUT en línea.
    return true; // Por ahora, simplemente devolvemos true.
}
