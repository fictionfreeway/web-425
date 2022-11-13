/*
Title: composer.service.ts
Author: William Watlington
Date: 13 November 2022
Description: composer service for composer app
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  // composer class to be used to list composers
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: "Frederic Chopin",
        genre: "classical"
      },
      {
        composerId: 101,
        fullName: "Johannes Brahms",
        genre: "classical"
      },
      {
        composerId: 102,
        fullName: "George Frideric Handel",
        genre: "classical"
      },
      {
        composerId: 103,
        fullName: "Wolfgang Amadeus Mozart",
        genre: "classical"
      },
      {
        composerId: 104,
        fullName: "Johann Sebastian Bach",
        genre: "classical"
      }
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for(let composer of this.composers) {
      if(composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
