import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit, OnDestroy {

  public addProfileFormGroup: FormGroup;

  constructor(public fb: FormBuilder, public router: Router) { 
    this.addProfileFormGroup = this.fb.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      associateId: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.addProfileFormGroup = this.fb.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      associateId: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }
  ngOnDestroy(): void {
  };

  onSubmit() {
    let userid = this.addProfileFormGroup.get('loginId');
    let password = this.addProfileFormGroup.get('password');

    //this.loginService.submit();
    //this.router.navigate(['admin']);
    this.router.navigate(['fse/addProfile']);
  }

}
