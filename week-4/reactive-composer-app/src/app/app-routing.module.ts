/*
Title: app-routing.module.ts
Author: William Watlington
Date: 13 November 2022
Description: app routing module for composer app
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  { path: "", redirectTo: "/composer-list", pathMatch: "full" },
  { path: "contact", component: ContactComponent },
  { path: "composer-list", component: ComposerListComponent },
  { path: "about", component: AboutComponent },
  { path: "composer-details/:composerId", component: ComposerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
