import { Injectable } from '@angular/core';
import { AuthHttpService } from '../auth-http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public authHttpService: AuthHttpService) { }

  public submit(searchUserReq: any) {
    console.log("LoginService called");
    return this.authHttpService.post('http://ec2-54-159-234-138.compute-1.amazonaws.com:8080/api/v1/engineer/fetchLoginProfile', searchUserReq)
  }

  public doLogin(loginData: any) {
    return this.authHttpService.post('http://localhost:8080/api/v1/login', loginData);
  }
}
