import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../../../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public loginService: LoginService, public fb: FormBuilder) {}
  private loginFormGroup: FormGroup;

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      loginId: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    let userid = this.loginFormGroup.get('loginId');
    let password = this.loginFormGroup.get('password');
    this.loginService.submit();
  }
}
