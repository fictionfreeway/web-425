/**
 * Title: composer-list.component.ts
 * Author: William Watlington
 * Date: 30 October 2022
 * Description: Composer list component
 */
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  // create new composers array to be listed
  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {
  }

}
