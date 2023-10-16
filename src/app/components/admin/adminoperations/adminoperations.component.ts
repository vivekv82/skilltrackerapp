import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/shared/services/profile/profile.service';

enum FormControlName {
  LAST_NAME = 'lastName',
  FIRST_NAME = 'firstName',
  ASSOCIATE_ID = 'associateId',
  TECHNNICAL_SKILLNAME = 'technicalSkillName',
  SOFT_SKILLNAME = 'softSkillName',
}
type searchProfileValue = { [key in FormControlName]: string };

@Component({
  selector: 'app-adminoperations',
  templateUrl: './adminoperations.component.html',
  styleUrls: ['./adminoperations.component.scss'],
})
export class AdminoperationsComponent implements OnInit, OnDestroy {
  public searchProfileFormGroup: FormGroup;
  public searchResults: any;
  public resultsFound: boolean = false;
  public searchCrteria: string = '';
  public technicalSkillNameList = [
    'HTMLCSSJS',
    'ANGULAR',
    'REACT',
    'SPRING',
    'RESTFUL',
    'HIBERNATE',
    'GIT',
    'DOCKER',
    'JENKINS',
    'AWS',
  ];

  public skillsoftSkillsList = ['SPOKEN', 'COMMUNICATION', 'APTITUDE'];

  constructor(
    public profileService: ProfileService,
    public fb: FormBuilder,
    public router: Router
  ) {
    this.searchProfileFormGroup = this.fb.group({
      lastName: [
        '',
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      associateId: [
        '',
        [
          Validators.pattern(/cts\d+/i),
        ],
      ],
      technicalSkillName: ['HTMLCSSJS', [Validators.required]],
      softSkillName: ['SPOKEN', [Validators.required]],
    });
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {}

  onSubmit() {
    this.resultsFound = false;
    this.searchCrteria = '';
    const searchProfile = this.searchProfileFormGroup
      .value as searchProfileValue;
    let lastName = searchProfile.lastName;
    let firstName = searchProfile.firstName;
    let associateId = searchProfile.associateId.toUpperCase();
    let technicalSkillName = searchProfile.technicalSkillName;
    let softSkillName = searchProfile.softSkillName;

    let searchSkillReq = {
      lastName: lastName,
      firstName: firstName,
      associateId: associateId,
      technicalSkillName: technicalSkillName,
      softSkillName: softSkillName,
    };
    this.searchCrteria =
      'First Name: ' +
      firstName +
      ', Last Name: ' +
      lastName +
      ', Associate Id: ' +
      associateId +
      ', Technical Skill Name: ' +
      technicalSkillName +
      ' Soft Skill Name: ' +
      softSkillName;
    this.profileService.searchProfile(searchSkillReq).subscribe((res) => {
      const response = JSON.parse(JSON.stringify(res));
      console.log('Result found for ', searchSkillReq + response);
      if (response.result == 0) {
        this.searchCrteria =
          'Matching profiles found for your search criteria: ' +
          this.searchCrteria;
        this.resultsFound = true;
        this.searchResults = response.resposnse;
      } else {
        this.searchCrteria =
          'No matching profiles found for your search criteria: ' +
          this.searchCrteria;
      }
    });
  }
}
