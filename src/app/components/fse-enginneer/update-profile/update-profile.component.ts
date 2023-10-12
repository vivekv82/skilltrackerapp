import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../../shared/services/profile/profile.service';

enum FormControlName {
  LAST_NAME = 'lastName',
  FIRST_NAME = 'firstName',
  ASSOCIATE_ID = 'associateId',
  MOBILE = 'mobile',
  EMAIL = 'email',
  HTMLCSSJS = 'htmlcssjs',
  ANGULAR = 'angular',
  REACT = 'react',
  SPRING = 'spring',
  RESTFUL = 'restful',
  HIBERNATE = 'hibernate',
  GIT = 'git',
  DOCKER = 'docker',
  JENKINS = 'jenkins',
  AWS = 'aws',
  SPOKEN = 'spoken',
  COMMUNICATION = 'communication',
  APTITUEDE = 'aptitude',
}

type updateProfileValue = { [key in FormControlName]: string };
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit, OnDestroy {
  public updateProfileFormGroup: FormGroup;
  public successMessage: string = '';
  public userSkillProfile: any;
  constructor(
    public profileService: ProfileService,
    public fb: FormBuilder,
    public router: Router
  ) {
    this.updateProfileFormGroup = this.fb.group({
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
    const updateProfileObj: string = sessionStorage.getItem(
      'userSkillProfile'
    ) as string;
    const updateProfile = JSON.parse(updateProfileObj);
    console.log(updateProfile);
    const techskills: { [key: string]: string } = {};
    const softskills: { [key: string]: string } = {};

    let mappingskillvalues: { [key: string]: string } = {
      'HTML-CSS-JAVASCRIPT': 'htmlcssjs',
      ANGULAR: 'angular',
      REACT: 'react',
      SPRING: 'spring',
      RESTFUL: 'restful',
      HIBERNATE: 'hibernate',
      GIT: 'git',
      DOCKER: 'docker',
      JENKINS: 'jenkins',
      AWS: 'aws',
      SPOKEN: 'spoken',
      COMMUNICATION: 'communication',
      APTITUDE: 'aptitude',
    };
    updateProfile.technicalSkillsList.forEach((item: any) => {
      let skillnamefromObj: string = item.skillName;
      let skillnametemp: string = mappingskillvalues[skillnamefromObj];
      techskills[skillnametemp] = item.skillExpertiseLevel;
    });
    updateProfile.softSkillsList.forEach((item: any) => {
      let skillnamefromObj: string = item.skillName;
      let skillnametemp: string = mappingskillvalues[skillnamefromObj];
      softskills[skillnametemp] = item.skillExpertiseLevel;
    });
    this.updateProfileFormGroup.setValue({
      lastName: updateProfile.lastName,
      firstName: updateProfile.firstName,
      associateId: updateProfile.associateId,
      mobile: updateProfile.mobile,
      email: updateProfile.email,
      ...techskills,
      ...softskills,
    });
  }
  ngOnDestroy(): void {}

  onSubmit() {
    const updateProfile = this.updateProfileFormGroup
      .value as updateProfileValue;
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
      lastName: lastName,
      firstName: firstName,
      associateId: associateId,
      mobile: mobile,
      email: email,
      technicalSkillsList: [
        {
          skillName: 'HTML-CSS-JAVASCRIPT',
          skillExpertiseLevel: htmlcssjs,
        },
        {
          skillName: 'ANGULAR',
          skillExpertiseLevel: angular,
        },
        {
          skillName: 'REACT',
          skillExpertiseLevel: react,
        },
        {
          skillName: 'SPRING',
          skillExpertiseLevel: spring,
        },
        {
          skillName: 'RESTFUL',
          skillExpertiseLevel: restful,
        },
        {
          skillName: 'HIBERNATE',
          skillExpertiseLevel: hibernate,
        },
        {
          skillName: 'GIT',
          skillExpertiseLevel: git,
        },
        {
          skillName: 'DOCKER',
          skillExpertiseLevel: docker,
        },
        {
          skillName: 'JENKINS',
          skillExpertiseLevel: jenkins,
        },
        {
          skillName: 'AWS',
          skillExpertiseLevel: aws,
        },
      ],
      softSkillsList: [
        {
          skillName: 'SPOKEN',
          skillExpertiseLevel: spoken,
        },
        {
          skillName: 'COMMUNICATION',
          skillExpertiseLevel: communication,
        },
        {
          skillName: 'APTITUDE',
          skillExpertiseLevel: aptitude,
        },
      ],
    };

    this.profileService.updateNewProfile(updateSkillReq).subscribe((res) => {
      const response = JSON.parse(JSON.stringify(res));
      console.log('Result found for ', updateSkillReq + response);
      if (response.result == 0) {
        this.successMessage = 'Profile updated successfully';
        sessionStorage.setItem(
          'userSkillProfile',
          JSON.stringify(updateSkillReq)
        );
        this.userSkillProfile = updateSkillReq;
      } else {
      }
    });
  }

  public navigateToUpdate() {
    this.successMessage ='';
  }

  public fetchAddedProfile() {
    this.userSkillProfile = sessionStorage.getItem('userSkillProfile');
  }
}
