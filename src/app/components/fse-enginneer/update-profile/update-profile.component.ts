import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit, OnDestroy {

  public updateProfileFormGroup: FormGroup;

  constructor(public fb: FormBuilder, public router: Router) { 
    this.updateProfileFormGroup = this.fb.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      associateId: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.updateProfileFormGroup = this.fb.group({
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
    let lastName = this.updateProfileFormGroup.get('lastName');
    let firstName = this.updateProfileFormGroup.get('firstName');
    let associateId = this.updateProfileFormGroup.get('associateId');
    let mobile = this.updateProfileFormGroup.get('mobile');
    let email = this.updateProfileFormGroup.get('email');

    //this.loginService.submit();
    //this.router.navigate(['admin']);
    this.router.navigate(['fse/addProfile']);
  }

}
