/*
Title: composer-details.component.ts
Author: William Watlington
Date: 13 November 2022
Description: composer-details component for composer app
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  // replace composer class with composer service
  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    //gets path value (composer ID)
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'));

    if(this.composerId) {
      // sets composer to selected composer from id number above
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
