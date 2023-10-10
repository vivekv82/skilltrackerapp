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

const mappingskillvalues = {
  "HTMLCSSJS": "HTML-CSS-JS",
  "ANGULAR": "ANGULAR",
  "REACT": "REACT",
  "SPRING": "SPRING",
  "RESTFUL": "RESTFUL",
  "HIBERNATE": "HIBERNATE",
  "GIT": "GIT",
  "DOCKER": "DOCKER",
  "JENKINS": "JENKINS",
  "AWS": "AWS",
  "SPOKEN": "SPOKEN",
  "COMMUNICATION": "COMMUNICATION",
  "APPTITUDE": "APPTITUDE"
};
type updateProfileValue = { [key in FormControlName]: string };
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
    const updateProfileObj: string = sessionStorage.getItem('updateProfileObj') as string;
    const updateProfile = JSON.parse(updateProfileObj);
    console.log(updateProfile);
    this.updateProfileFormGroup.setValue({'lastName': updateProfile.lastName});
    this.updateProfileFormGroup.setValue({'firstName': updateProfile.firstName});
    this.updateProfileFormGroup.setValue({'associateId': updateProfile.associateId});
    this.updateProfileFormGroup.setValue({'mobile': updateProfile.mobile});
    this.updateProfileFormGroup.setValue({'email': updateProfile.email});
    //this.updateProfileFormGroup.setValue({mappingskillvalues["HTMLCSSJS"]: updateProfile.technicalSkillsList.get[0]});


  }
  ngOnDestroy(): void {
  };

  onSubmit() {
    const updateProfile = this.updateProfileFormGroup.value as updateProfileValue;
    let lastName = updateProfile.lastName;
    let firstName = updateProfile.firstName;
    let associateId = updateProfile.associateId;
    let mobile = updateProfile.mobile;
    let email = updateProfile.email;

    let htmlcssjs = updateProfile.htmlcssjs;
    let angular = updateProfile.angular;
    let react = updateProfile.react;
    let spring = updateProfile.spring;
    let restful = updateProfile.restful;
    let hibernate = updateProfile.hibernate;
    let git = updateProfile.git;
    let docker = updateProfile.docker;
    let jenkins = updateProfile.jenkins;
    let aws = updateProfile.aws;
    let spoken = updateProfile.spoken;
    let communication = updateProfile.communication;
    let aptitude = updateProfile.aptitude;

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
