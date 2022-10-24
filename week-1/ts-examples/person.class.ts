/* 
Title: person.class.ts
Author: William Watlington
Date: 23 October 2022
Description: person class for typescript example
*/

import { IPerson } from "./person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let me = new Person("William", "Watlington");
console.log(`My name is ${me.firstName} ${me.lastName}`);