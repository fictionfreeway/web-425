/*
Title: app.routing.ts
Author: William Watlington
Date: 06 November 2022
Description: routing for enhanced-secure-profile-app
*/

import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignInGuard } from "./sign-in.guard";


// routes for secure-profile-app
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
  }
]
