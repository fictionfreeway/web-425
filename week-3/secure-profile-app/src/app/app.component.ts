/*
Title: app.component.ts
Author: William Watlington
Date: 23 October 2022
Description: App component
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = "Exercise 3.3 - Passing Data to Routes, Part 2"
}
