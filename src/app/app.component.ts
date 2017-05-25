import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { LoginService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router:Router, private loginService:LoginService) {
    this.watchRouteChange();
  }

  watchRouteChange() {
    this.router.events.subscribe((val) => {
        if (val instanceof NavigationStart) {
          if (val.url === '/login' && this.loginService.isLoggedIn()) {
             this.router.navigateByUrl('/');
          }
          if (val.url !== '/login' && !this.loginService.isLoggedIn()) {
             this.router.navigateByUrl('/login');
          }
        }
    });
  }
}
