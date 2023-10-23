import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.page.html',
  styleUrls: ['./localizacion.page.scss'],
})
export class LocalizacionPage implements OnInit {

lat:any;
lng:any;

  constructor() { }

  ngOnInit() {
  }

  getPosition()
{
  var options: PositionOptions ={
    enableHighAccuracy:true
}

Geolocation.getCurrentPosition(options).then((res)=>{
  this.lat= res.coords.latitude;
  this.lng=res.coords.longitude;
},(err)=>{
  alert(JSON.stringify(err));
})

  }

}


