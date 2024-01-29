import { Component, OnInit, Input, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';
import { TempService } from 'src/app/services/temp.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})

export class AuthPage implements OnInit {
  
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  utilsSvc = inject(UtilsService);
  tempSvc = inject(TempService);

  isUserAuth : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  async submit() {
    if(this.form.valid) {
      let email = this.form.value.email;
      let password = this.form.value.password;
      
      if(this.tempSvc.login(email, password)) {
        this.utilsSvc.presentToast({
          message: "Usuario autenticado con exito",
          duration: 1500,
          color: "success",
          position: "bottom",
          icon: "checkmark-circle-outline"
        });
        this.isUserAuth = true;
        this.utilsSvc.routerLink('/main/home');

      }else {
        this.utilsSvc.presentToast({
          message: "Error al autenticar usuario",
          duration: 1500,
          color: "danger",
          position: "bottom",
          icon: "checkmark-circle-outline"
        });
        this.isUserAuth = false;
      };
    }
  }

}
