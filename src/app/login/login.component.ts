import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private service: HttpService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      'password': ['', [Validators.required, Validators.minLength(6), Validators.pattern(/(?:[A-Z].*)|(?:.*[A-Z])/)]]
    })
  }

  login() {
    this.service.login(this.loginForm.value).subscribe((data) => {
      if (data['status'] == 200) {
        alert('Logged in successfully');
        this.router.navigateByUrl('/login/patientinfo');
      } else {
        alert('Login failed');
      }
    })
  }

}
