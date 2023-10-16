import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skilltrackerapp';
  constructor(public router: Router) {
  }

  logout() {
    sessionStorage.removeItem('userSkillProfile');
    sessionStorage.removeItem('addUserSkillProfile');
    sessionStorage.removeItem('isLogin');
    this.router.navigate(['/login']);
  }

  isLogin() {
    return sessionStorage.getItem("isLogin") === "true";
  }
}
