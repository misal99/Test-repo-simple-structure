import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(private router: Router) { }

  login(userName: string, password: string) {
    if (userName === 'admin' && password === 'admin') {
      localStorage.setItem('currentUser', JSON.stringify({ userName, password, role: 'admin' }));
      // return {role: 'admin'};
      this.router.navigate(['products']);
    } else if (userName === 'user' && password === 'user') {
      localStorage.setItem('currentUser', JSON.stringify({ userName, password, role: 'user' }));
      this.router.navigate(['products']);
    } else {
      return false;
    }
  }
}
