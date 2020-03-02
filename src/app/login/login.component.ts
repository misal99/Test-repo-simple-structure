import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent implements OnInit {
public username: string;
public password: string;


  constructor(private service: AuthenticationService, private router: Router) {}

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      this.router.navigate(['products']);
    }
  }

  login() {
    this.service.login(this.username, this.password);
  }
}
