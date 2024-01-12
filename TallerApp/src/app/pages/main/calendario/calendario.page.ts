// calendario.page.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  reservedDates: string[] = []; // Lista de fechas reservadas

  constructor() { }

  ngOnInit() {
  }

  highlightedDates = (isoString: string | number | Date) => {
    const date = new Date(isoString);
    const isoDate = date.toISOString().slice(0, 10); // Obtiene la fecha en formato ISO

    if (this.reservedDates.includes(isoDate)) {
      return {
        textColor: 'white',
        backgroundColor: 'red', // Color para fechas no disponibles
      };
    }

    // Cambia el color a verde para fechas disponibles
    return {
      textColor: 'black',
      backgroundColor: 'green',
    };
  };

  // Función para reservar una fecha haciendo clic en ella
  onDateClick(event: any) {
    const selectedDate = event.detail.value.slice(0, 10);
    if (!this.reservedDates.includes(selectedDate)) {
      this.reservedDates.push(selectedDate);
    } else {
      // Si la fecha ya estaba reservada, la eliminamos
      const index = this.reservedDates.indexOf(selectedDate);
      if (index !== -1) {
        this.reservedDates.splice(index, 1);
      }
    }
  }
}

