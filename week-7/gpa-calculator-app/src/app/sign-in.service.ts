/*
Title: sign-in.service.ts
Author: William Watlington
Date: 17 December 2022
Description: sign in service for gpa app
*/


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class SignInService {
  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
