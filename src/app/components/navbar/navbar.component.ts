import { Component } from '@angular/core';
import { LoginService } from '../../services';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user:any = {};

  constructor(private loginService:LoginService) {
    this.user = loginService.getUser();
  }

  logout() {
    this.loginService.doLogout();
  }
}
