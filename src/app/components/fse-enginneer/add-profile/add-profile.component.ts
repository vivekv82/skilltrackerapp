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
    let lastName = this.addProfileFormGroup.get('lastName');
    let firstName = this.addProfileFormGroup.get('firstName');
    let associateId = this.addProfileFormGroup.get('associateId');
    let mobile = this.addProfileFormGroup.get('mobile');
    let email = this.addProfileFormGroup.get('email');

    //this.loginService.submit();
    //this.router.navigate(['admin']);
    this.router.navigate(['fse/addProfile']);
  }

}
