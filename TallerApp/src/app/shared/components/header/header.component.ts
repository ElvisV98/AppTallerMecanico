import { Component, Input, OnInit, inject } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';



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
  @Input() isModal!: boolean;

  utilsSvc = inject(UtilsService)
  
  constructor() { }

  ngOnInit() {}

  dismissModal() {
    this.utilsSvc.dismissModal();
  }
}
