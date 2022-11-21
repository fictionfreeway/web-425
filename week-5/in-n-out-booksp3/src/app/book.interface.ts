/*
Title: book.interface.ts
Author: William Watlington
Date: 20 November 2022
Description: book interface for books app
*/


export interface IBook {
   isbn: string;
   title: string;
   description: string;
   numOfPages: number;
   authors: Array<string>;
 }
