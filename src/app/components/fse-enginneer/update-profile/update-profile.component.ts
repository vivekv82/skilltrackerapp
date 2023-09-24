import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../../shared/services/profile/profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit, OnDestroy {

  public updateProfileFormGroup: FormGroup;

  constructor(public profileService: ProfileService, public fb: FormBuilder, public router: Router) { 
    this.updateProfileFormGroup = this.fb.group({
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

  ngOnInit(): void {
    this.updateProfileFormGroup = this.fb.group({
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
    let lastName = this.updateProfileFormGroup.get('lastName');
    let firstName = this.updateProfileFormGroup.get('firstName');
    let associateId = this.updateProfileFormGroup.get('associateId');
    let mobile = this.updateProfileFormGroup.get('mobile');
    let email = this.updateProfileFormGroup.get('email');

    let htmlcssjs = this.updateProfileFormGroup.get('htmlcssjs');
    let angular = this.updateProfileFormGroup.get('angular');
    let react = this.updateProfileFormGroup.get('react');
    let spring = this.updateProfileFormGroup.get('spring');
    let restful = this.updateProfileFormGroup.get('restful');
    let hibernate = this.updateProfileFormGroup.get('hibernate');
    let git = this.updateProfileFormGroup.get('git');
    let docker = this.updateProfileFormGroup.get('docker');
    let jenkins = this.updateProfileFormGroup.get('jenkins');
    let aws = this.updateProfileFormGroup.get('aws');
    let spoken = this.updateProfileFormGroup.get('spoken');
    let communication = this.updateProfileFormGroup.get('communication');
    let aptitude = this.updateProfileFormGroup.get('aptitude');

    let updateSkillReq = {
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


    this.profileService.updateNewProfile(updateSkillReq);
    //this.router.navigate(['admin']);
    this.router.navigate(['fse/addProfile']);
  }

}
