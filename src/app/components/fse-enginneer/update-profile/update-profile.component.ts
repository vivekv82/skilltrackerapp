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
  public skillLevel = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  constructor(
    public profileService: ProfileService,
    public fb: FormBuilder,
    public router: Router
  ) {
    this.fetchAddedProfile();
    this.updateProfileFormGroup = this.fb.group({
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      associateId: [
        this.userSkillProfile.associateId,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          Validators.pattern(/cts\d+/i),
        ],
      ],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(45),
          Validators.pattern(
            '^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          ),
        ],
      ],

      htmlcssjs: [0, [Validators.required, Validators.pattern(/\d{1,2}/)]],
      angular: [0, [Validators.required, Validators.pattern(/\d{1,2}/)]],
      react: [0, [Validators.required, Validators.pattern(/\d{1,2}/)]],
      spring: [0, [Validators.required, Validators.pattern(/\d{1,2}/)]],
      restful: [0, [Validators.required, Validators.pattern(/\d{1,2}/)]],
      hibernate: [0, [Validators.required, Validators.pattern(/\d{1,2}/)]],
      git: [0, [Validators.required, Validators.pattern(/\d{1,2}/)]],
      docker: [0, [Validators.required, Validators.pattern(/\d{1,2}/)]],
      jenkins: [0, [Validators.required, Validators.pattern(/\d{1,2}/)]],
      aws: [0, [Validators.required, Validators.pattern(/\d{1,2}/)]],
      spoken: [0, [Validators.required, Validators.pattern(/\d{1,2}/)]],
      communication: [0, [Validators.required, Validators.pattern(/\d{1,2}/)]],
      aptitude: [0, [Validators.required, Validators.pattern(/\d{1,2}/)]],
    });
  }

  ngOnInit(): void {
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
    this.userSkillProfile.technicalSkillsList.forEach((item: any) => {
      let skillnamefromObj: string = item.skillName;
      let skillnametemp: string = mappingskillvalues[skillnamefromObj];
      techskills[skillnametemp] = item.skillExpertiseLevel;
    });
    this.userSkillProfile.softSkillsList.forEach((item: any) => {
      let skillnamefromObj: string = item.skillName;
      let skillnametemp: string = mappingskillvalues[skillnamefromObj];
      softskills[skillnametemp] = item.skillExpertiseLevel;
    });
    this.updateProfileFormGroup.setValue({
      lastName: this.userSkillProfile.lastName,
      firstName: this.userSkillProfile.firstName,
      associateId: this.userSkillProfile.associateId,
      mobile: this.userSkillProfile.mobile,
      email: this.userSkillProfile.email,
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
    let associateId = updateProfile.associateId.toUpperCase();
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
    this.userSkillProfile = JSON.parse(sessionStorage.getItem(
      'userSkillProfile'
    ) as string);
  }
}
