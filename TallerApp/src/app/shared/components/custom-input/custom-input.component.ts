import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent  implements OnInit {

  @Input() type! : string;
  @Input() label! : string;
  @Input() placeholder! : string;
  @Input() icon! : string;


  isPassword!: boolean;
  hide: boolean = true;


  constructor() { }

  ngOnInit() {
    if(this.type == 'password') this.isPassword = true;
  }

  showOrHidePasswords() {
    this.hide = !this.hide;
    if(this.hide) this.type = 'password';
    else this.type = 'text';
  }

}
