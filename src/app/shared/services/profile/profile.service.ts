import { Injectable } from '@angular/core';
import { AuthHttpService } from '../auth-http.service'; 
  
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(public authHttpService: AuthHttpService) { }

  public searchProfile(searchCriteria: any) {
    return this.authHttpService.post("http://ec2-54-159-234-138.compute-1.amazonaws.com:8080/api/v1/engineer/fetchProfile", searchCriteria);
  }

  public addNewProfile(addSkillReq: any) {
    return this.authHttpService.post("https://jh6yj2mj19.execute-api.us-east-1.amazonaws.com/qa/api/v1/engineer/addProfile", addSkillReq);
  }
  
  public updateNewProfile(updateSkillReq: any) {
    return this.authHttpService.post("http://ec2-54-159-234-138.compute-1.amazonaws.com:8080/api/v1/engineer/updateProfile", updateSkillReq)
  }

}
  