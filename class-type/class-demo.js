"use strict";
class User {
    // properties, constructor, method
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`userName ${this.userName} age ${this.age}`);
    }
}
let user1 = new User("Faysal", 22);
user1.display();
