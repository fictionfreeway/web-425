/*
Title: book-list.component.ts
Author: William Watlington
Date: 20 November 2022
Description: book list component for books app
*/

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = [
    'isbn',
    'title',
    'numOfPages',
    'authors'
  ]
  book: IBook;

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }

}
