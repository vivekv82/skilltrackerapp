import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../../shared/services/profile/profile.service';

enum FormControlName {
  LAST_NAME = "lastName",
  FIRST_NAME = "firstName",
  ASSOCIATE_ID = "associateId",
  MOBILE = "mobile",
  EMAIL = "email",
  HTMLCSSJS = "htmlcssjs",
  ANGULAR = "angular",
  REACT = "react",
  SPRING = "spring",
  RESTFUL = "restful",
  HIBERNATE = "hibernate",
  GIT = "git",
  DOCKER = "docker",
  JENKINS = "jenkins",
  AWS = "aws",
  SPOKEN = "spoken",
  COMMUNICATION = "communication",
  APPTITUEDE = "aptitude"
};
type addProfileValue = { [key in FormControlName]: string };

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
  }
  ngOnDestroy(): void {
  };

  onSubmit() {
    const addProfile = this.addProfileFormGroup.value as addProfileValue;
    let lastName = addProfile.lastName;
    let firstName = addProfile.firstName;
    let associateId = addProfile.associateId;
    let mobile = addProfile.mobile;
    let email = addProfile.email;

    let htmlcssjs = addProfile.htmlcssjs;
    let angular = addProfile.angular;
    let react = addProfile.react;
    let spring = addProfile.spring;
    let restful = addProfile.restful;
    let hibernate = addProfile.hibernate;
    let git = addProfile.git;
    let docker = addProfile.docker;
    let jenkins = addProfile.jenkins;
    let aws = addProfile.aws;
    let spoken = addProfile.spoken;
    let communication = addProfile.communication;
    let aptitude = addProfile.aptitude;

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
    //this.router.navigate(['fse/addProfile']);
  }

}
