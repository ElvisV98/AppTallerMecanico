import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  @Input() user!: User;


  form = new FormGroup ({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  utilsSvc = inject(UtilsService);
  apiSvc = inject(ApiService);

  constructor() { }

  ngOnInit() {
  }

  submit() {
    if(this.form.valid){
      if(this.apiSvc.createUser(this.form.value as User)) {
        this.utilsSvc.saveInLocalStorage('user', this.form.value);
        this.utilsSvc.routerLink('/main/home');
        
        this.utilsSvc.presentToast({
          message: "Usuario creado exitosamente",
          duration: 1500,
          color: "success",
          position: "middle",
          icon: "checkmark-circle-outline"
        })
      }
        
      
    }
  }

}
