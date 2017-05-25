import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';

@Injectable()
export class LoginService {

  constructor(private router:Router) {}

  doLogin(user): Observable<any> {
    this.saveUser(user);
    return new Observable<any>((subscriber:Subscriber<any>) => subscriber.next(user));
  }

  saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  doLogout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

  isLoggedIn() {
    return localStorage.getItem('user') != null;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
