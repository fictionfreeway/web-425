"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let me = new Person("William", "Watlington");
console.log(`My name is ${me.firstName} ${me.lastName}`);
