/*
Title: app-routing.module.ts
Author: William Watlington
Date: 05 November 2022
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
import { Composer } from './composer.class';

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
