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
        console.log(`userName ${this.userName}, age ${this.age} `);
    }
}
// let user1 = new User("faysal", 25);
// let user2 = new User("hasan", 20);
// user1.display();
// user2.display();
class student extends User {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`userName ${this.userName}, age ${this.age}, id ${this.studentId} `);
    }
}
let student1 = new student("faysal", 25, 101);
student1.display();
