import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../../../shared/services/login/login.service';
import { Router } from '@angular/router';

enum FormControlName {
  USER_ID = 'loginId',
  PASSWORD = 'password',
}
type LoginFormValue = { [key in FormControlName]: string };
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginFormGroup: FormGroup;
  constructor(public loginService: LoginService, public fb: FormBuilder, public router: Router) {
    this.loginFormGroup = this.fb.group({
      loginId: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngOnDestroy(): void {
  };

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      loginId: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const loginData = this.loginFormGroup.value as LoginFormValue;
    const loginUser = this.loginFormGroup
      .value as LoginFormValue;
      let searchUserReq = {
        lastName: '',
        firstName: '',
        associateId: loginData.loginId,
        technicalSkillName: '',
        softSkillName: '',
      };
    
    if(loginUser.loginId.startsWith('CTS')) {
      this.loginService.submit(searchUserReq).subscribe((res)=> {
        const response = JSON.parse(JSON.stringify(res));
        console.log("api/v1/engineer/fetchLoginProfile = " + response);
        if (response.result == 0) {
          this.router.navigate(['fse/updateProfile']);
          sessionStorage.setItem('userSkillProfile', JSON.stringify(response.resposnse[0]));
        } else {
          sessionStorage.setItem('addUserSkillProfile', JSON.stringify({
            lastName: '',
            firstName: '',
            associateId: loginUser.loginId,
            mobile: '',
            email: '',
            date: new Date(),
            technicalSkillsList: [
              {
                skillName: 'HTML-CSS-JAVASCRIPT',
                skillExpertiseLevel: 10,
              },
              {
                skillName: 'ANGULAR',
                skillExpertiseLevel: 10,
              },
              {
                skillName: 'REACT',
                skillExpertiseLevel: 10,
              },
              {
                skillName: 'SPRING',
                skillExpertiseLevel: 10,
              },
              {
                skillName: 'RESTFUL',
                skillExpertiseLevel: 10,
              },
              {
                skillName: 'HIBERNATE',
                skillExpertiseLevel: 10,
              },
              {
                skillName: 'GIT',
                skillExpertiseLevel: 10,
              },
              {
                skillName: 'DOCKER',
                skillExpertiseLevel: 10,
              },
              {
                skillName: 'JENKINS',
                skillExpertiseLevel: 10,
              },
              {
                skillName: 'AWS',
                skillExpertiseLevel: 10,
              },
            ],
            softSkillsList: [
              {
                skillName: 'SPOKEN',
                skillExpertiseLevel: 10,
              },
              {
                skillName: 'COMMUNICATION',
                skillExpertiseLevel: 10,
              },
              {
                skillName: 'APTITUDE',
                skillExpertiseLevel: 10,
              },
            ],
          }));
          this.router.navigate(['fse/addProfile']);
        }
      });
    } else {
      this.router.navigate(['admin']);
    }
   
  }
}
