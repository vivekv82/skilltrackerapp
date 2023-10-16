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
  APPTITUEDE = 'aptitude',
}
type addProfileValue = { [key in FormControlName]: string };

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss'],
})
export class AddProfileComponent implements OnInit, OnDestroy {
  public addProfileFormGroup: FormGroup;
  public successMessage: string = '';
  public userSkillProfile: any;
  public skillLevel = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  constructor(
    public profileService: ProfileService,
    public fb: FormBuilder,
    public router: Router
  ) {
    let addUserSkillProfile = JSON.parse(
      sessionStorage.getItem('addUserSkillProfile') as string
    );
    this.addProfileFormGroup = this.fb.group({
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      associateId: [
        addUserSkillProfile.associateId,
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

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  onSubmit() {
    const addProfile = this.addProfileFormGroup.value as addProfileValue;
    let lastName = addProfile.lastName;
    let firstName = addProfile.firstName;
    let associateId = addProfile.associateId.toUpperCase();
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
      lastName: lastName.trim(),
      firstName: firstName.trim(),
      associateId: associateId.trim(),
      mobile: mobile.trim(),
      email: email.trim(),
      date: new Date(),
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

    this.profileService.addNewProfile(addSkillReq).subscribe((res) => {
      const response = JSON.parse(JSON.stringify(res));
      console.log('Result found for ', addSkillReq + response);
      if (response.result == 0) {
        this.successMessage = 'Profile added successfully';
        sessionStorage.setItem('userSkillProfile', JSON.stringify(addSkillReq));
        this.userSkillProfile = addSkillReq;
      } else {
      }
    });
  }

  filterNonNumbers(event: any, field: string) {
    const keyCode = event.keyCode || event.charCode;
    if (
      isNaN(event.key) &&
      !(keyCode === 8 || keyCode === 46 || keyCode === 37 || keyCode === 39)
    ) {
      event.stopPropagation();
      return false;
    }
    return true;
  }

  public navigateToUpdate() {
    this.router.navigate(['/fse/updateProfile']);
  }

  public fetchAddedProfile() {
    this.userSkillProfile = sessionStorage.getItem('userSkillProfile');
  }
}
