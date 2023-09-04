import { Injectable } from '@angular/core';
import { AuthHttpService } from '../auth-http.service';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public authHttpService: AuthHttpService) { }

  public submit() {
    console.log("LoginService called");
    this.authHttpService.get('http://localhost:8080/api/v1/engineer/fetchProfile/100').subscribe((res)=> {
      console.log("api/v1/engineer/fetchProfile/100 = " + JSON.stringify(res));
    });

    let updateReq = {
      "lastName": "Vidyashankar",
      "firstName": "Vivek",
      "associateId": "CTS189327",
      "mobile": "7338457565",
      "email": "a@B.com",
      "skillsList": [
          {
              "skillName": "HTML-CSS-JAVASCRIPT",
              "skillExpertiseLevel": 1
          },
          {
              "skillName": "ANGULAR",
              "skillExpertiseLevel": 2
          },
          {
              "skillName": "RESTFUL",
              "skillExpertiseLevel": 3
          },
          {
              "skillName": "HIBERNATE",
              "skillExpertiseLevel": 4
          },
          {
              "skillName": "DOCKER",
              "skillExpertiseLevel": 5
          }
      ]
  };
    this.authHttpService.post("http://localhost:8080/api/v1/engineer/updateProfile", updateReq).subscribe((res) => {
      console.log("api/v1/engineer/fetchProfile/100 = " + JSON.stringify(res));
    });

    this.authHttpService.post("http://localhost:8080/api/v1/engineer/addProfile", updateReq).subscribe((res) => {
      console.log("api/v1/engineer/fetchProfile/100 = " + JSON.stringify(res));
    })
  }
}
