/*
Title: grade-summary.component.ts
Author: William Watlington
Date: 17 December 2022
Description: grade summary component for gpa app
*/


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})


export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;


  constructor() {}

  ngOnInit(): void {}
}
