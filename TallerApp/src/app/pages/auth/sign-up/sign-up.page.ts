import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';
import { ApiService } from 'src/app/services/api.service';
import { TempService } from 'src/app/services/temp.service';
import { User } from 'src/app/models/user.models';
import { CustomValidators } from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  @Input() user!: User;

  form = new FormGroup ({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(''),
  });

  utilsSvc = inject(UtilsService);
  apiSvc = inject(ApiService);
  tempSvc = inject(TempService);

  constructor() { }

  ngOnInit() {
    this.confirmPasswordValidator();
  }

  confirmPasswordValidator() {
    this.form.controls.confirmPassword.setValidators([
      Validators.required,
      CustomValidators.matchValues(this.form.controls.password),
    ])
    this.form.controls.confirmPassword.updateValueAndValidity();
  }

  submit() {
    if(this.form.valid){
      const user = this.form.value;


      if(this.tempSvc.createTempUser(user as User)) {
        this.utilsSvc.presentToast({
          message: "Usuario temporal creado exitosamente",
          duration: 1500,
          color: "success",
          position: "bottom",
          icon: "checkmark-circle-outline"
        });
        this.utilsSvc.routerLink('/main/home');

      } else {
        this.utilsSvc.presentToast({
          message: "Error al crear usuario temporal",
          duration: 1500,
          color: "error",
          position: "bottom",
          icon: "checkmark-circle-outline"
        });
      }
        
      
    }   
  }
}


