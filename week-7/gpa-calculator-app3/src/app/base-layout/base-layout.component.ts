/*
Title: base-layout.component.ts
Author: William Watlington
Date: 18 December 2022
Description: base layout for gpa app
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})


export class BaseLayoutComponent implements OnInit {

  assignment: String;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = "Exercise 7.2 - Reactive Forms";
  }

  ngOnInit(): void {}

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(["/session/sign-in"]);
  }
}
