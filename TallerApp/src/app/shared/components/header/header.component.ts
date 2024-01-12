import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  
  @Input() color : string = "warning";
  @Input() title : string = "TASK ENGINE";
  @Input() subtitle! : string;
  @Input() backButton!: string;
  
  constructor() { }

  ngOnInit() {}

}
