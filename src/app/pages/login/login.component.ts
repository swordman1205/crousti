import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router:Router){
    this.loginForm = fb.group({
      'username' : [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  loginUser(value: any){
    this.loginService.doLogin(value).subscribe(response => {
      this.router.navigateByUrl('/');
    });
  }
}
