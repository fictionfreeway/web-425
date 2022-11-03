/**
 * Title: composer.class.component.ts
 * Author: William Watlington
 * Date: 30 October 2022
 * Description: Composer class for composer app
 */
 import { IComposer } from './composer.interface';

// composer class to be used to list composers
export class Composer {
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
