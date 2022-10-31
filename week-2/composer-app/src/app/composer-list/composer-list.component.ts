/**
 * Title: composer-list.component.ts
 * Author: William Watlington
 * Date: 30 October 2022
 * Description: Composer list component
 */
import { Component, OnInit } from '@angular/core';

// composer class to be used to list composers
export default class Composer {
  fullName: string;
  genre: string;
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // create new composers array to be listed
  composers: Array<Composer>;
  constructor() {
    this.composers = [
      new Composer("Frederic Chopin", "classical"),
      new Composer("Johannes Brahms", "classical"),
      new Composer("George Frideric Handel", "classical"),
      new Composer("Wolfgang Amadeus Mozart", "classical"),
      new Composer("Johann Sebastian Bach", "classical")
    ]
  }

  ngOnInit(): void {
  }

}
