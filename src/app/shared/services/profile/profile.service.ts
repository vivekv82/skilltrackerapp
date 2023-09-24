import { Injectable } from '@angular/core';
import { AuthHttpService } from '../auth-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(public authHttpService: AuthHttpService) { }

  public addNewProfile(addSkillReq: any) {
    this.authHttpService.post("http://localhost:8080/api/v1/engineer/addProfile", addSkillReq).subscribe((res) => {
      console.log("api/v1/engineer/fetchProfile/100 = " + JSON.stringify(res));
    });
  }
  
  public updateNewProfile(updateSkillReq: any) {
    this.authHttpService.post("http://localhost:8080/api/v1/engineer/updateProfile", updateSkillReq).subscribe((res) => {
      console.log("api/v1/engineer/fetchProfile/100 = " + JSON.stringify(res));
    });
  }

}
