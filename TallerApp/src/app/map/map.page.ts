import { Component, OnInit } from '@angular/core';

declare var google : any;


/// crear una carpeta y luego importar para buena practica 
interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map = null;

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement | null = document.getElementById('map');
    
    if (mapEle) {
      // create LatLng object
      const myLatLng = { lat: -33.36326971971572, lng: -70.67819593169837 };
      // create map
      this.map = new google.maps.Map(mapEle, {
        center: myLatLng,
        zoom: 16
      });
      
      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        
        mapEle.classList.add('show-map');
        const marker ={
          position: {
            lat:-33.36326971971572,
            lng:-70.67819593169837
          },
          title: 'DUOC UC'
        };

        this.addMarker(marker);
      });

    } else {
      console.error("Elemento 'map' no encontrado en el DOM.");
    }
  }

  /// crear una carpeta y luego importar para buena practica
addMarker(marker: Marker) {
  return new google.maps.Marker({
    position: marker.position,
    map: this.map,
    title: marker.title
    });
  }  
}