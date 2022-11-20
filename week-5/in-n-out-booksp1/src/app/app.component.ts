/*
Title: app.component.ts
Author: William Watlington
Date: 20 November 2022
Description: app component for books app
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = "Exercise 5.2 - Navigation and Layout";
  }
}
