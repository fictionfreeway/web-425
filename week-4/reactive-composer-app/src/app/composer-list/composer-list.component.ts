/**
 * Title: composer-list.component.ts
 * Author: William Watlington
 * Date: 13 November 2022
 * Description: Composer list component
 */
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');

  // create new composers array to be listed, replaced composer class with composer service
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(value => this.filterComposers(value));
  }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    alert(name);
  }

}
