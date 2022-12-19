/*
Title: gpa.component.ts
Author: William Watlington
Date: 17 December 2022
Description: gpa component for gpa app
*/


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: [ './gpa.component.css' ]
})


export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {}

}
