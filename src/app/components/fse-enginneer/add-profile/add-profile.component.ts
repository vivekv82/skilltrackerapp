import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../../shared/services/profile/profile.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit, OnDestroy {

  public addProfileFormGroup: FormGroup;

  constructor(public profileService: ProfileService, public fb: FormBuilder, public router: Router) { 
    this.addProfileFormGroup = this.fb.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      associateId: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],

      htmlcssjs: ['', [Validators.required]],
      angular: ['', [Validators.required]],
      react: ['', [Validators.required]],
      spring: ['', [Validators.required]],
      restful: ['', [Validators.required]],
      hibernate: ['', [Validators.required]],
      git: ['', [Validators.required]],
      docker: ['', [Validators.required]],
      jenkins: ['', [Validators.required]],
      aws: ['', [Validators.required]],
      spoken: ['', [Validators.required]],
      communication: ['', [Validators.required]],
      aptitude: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.addProfileFormGroup = this.fb.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      associateId: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],

      htmlcssjs: ['', [Validators.required,]],
      angular: ['', [Validators.required]],
      react: ['', [Validators.required]],
      spring: ['', [Validators.required]],
      restful: ['', [Validators.required]],
      hibernate: ['', [Validators.required]],
      git: ['', [Validators.required]],
      docker: ['', [Validators.required]],
      jenkins: ['', [Validators.required]],
      aws: ['', [Validators.required]],
      spoken: ['', [Validators.required]],
      communication: ['', [Validators.required]],
      aptitude: ['', [Validators.required]],
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

    let htmlcssjs = this.addProfileFormGroup.get('htmlcssjs');
    let angular = this.addProfileFormGroup.get('angular');
    let react = this.addProfileFormGroup.get('react');
    let spring = this.addProfileFormGroup.get('spring');
    let restful = this.addProfileFormGroup.get('restful');
    let hibernate = this.addProfileFormGroup.get('hibernate');
    let git = this.addProfileFormGroup.get('git');
    let docker = this.addProfileFormGroup.get('docker');
    let jenkins = this.addProfileFormGroup.get('jenkins');
    let aws = this.addProfileFormGroup.get('aws');
    let spoken = this.addProfileFormGroup.get('spoken');
    let communication = this.addProfileFormGroup.get('communication');
    let aptitude = this.addProfileFormGroup.get('aptitude');

    let addSkillReq = {
      "lastName": lastName,
      "firstName": firstName,
      "associateId": associateId,
      "mobile": mobile,
      "email": email,
      "technicalSkillsList": [
        {
          "skillName": "HTML-CSS-JAVASCRIPT",
          "skillExpertiseLevel": htmlcssjs
        },
        {
          "skillName": "ANGULAR",
          "skillExpertiseLevel": angular
        },
        {
          "skillName": "REACT",
          "skillExpertiseLevel": react
        },
        {
          "skillName": "SPRING",
          "skillExpertiseLevel": spring
        },         
        {
          "skillName": "RESTFUL",
          "skillExpertiseLevel": restful
        },
        {
          "skillName": "HIBERNATE",
          "skillExpertiseLevel": hibernate
        },  
        {
          "skillName": "GIT",
          "skillExpertiseLevel": git
        },
        {
          "skillName": "DOCKER",
          "skillExpertiseLevel": docker
        },  
        {
          "skillName": "JENKINS",
          "skillExpertiseLevel": jenkins
        },
        {
          "skillName": "AWS",
          "skillExpertiseLevel": aws
        },
      ],
      "softSkillsList": [
        {
          "skillName": "SPOKEN",
          "skillExpertiseLevel": spoken
        },
        {
          "skillName": "COMMUNICATION",
          "skillExpertiseLevel": communication
        },
        {
          "skillName": "APTITUDE",
          "skillExpertiseLevel": aptitude
        },
      ]
  };
  

    this.profileService.addNewProfile(addSkillReq);
    //this.router.navigate(['admin']);
    this.router.navigate(['fse/addProfile']);
  }

}
