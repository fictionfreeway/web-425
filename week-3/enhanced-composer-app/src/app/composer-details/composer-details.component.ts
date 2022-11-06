/*
Title: composer-details.component.ts
Author: William Watlington
Date: 05 November 2022
Description: composer-details component for enhanced composer app
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute) {
    //gets path value (composer ID)
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'));

    if(this.composerId) {
      // sets composer to selected composer from id number above
      this.composer = new Composer().getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
