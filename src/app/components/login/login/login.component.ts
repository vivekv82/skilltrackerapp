import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../../../shared/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginFormGroup: FormGroup;
  constructor(public loginService: LoginService, public fb: FormBuilder, public router: Router) {
    this.loginFormGroup = this.fb.group({
      loginId: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngOnDestroy(): void {
  };

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      loginId: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    let userid = this.loginFormGroup.get('loginId');
    let password = this.loginFormGroup.get('password');

    //this.loginService.submit();
    //this.router.navigate(['admin']);
    this.router.navigate(['fse/addProfile']);
  }
}
