class User {
  // properties, constructor, method

  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`userName ${this.userName} age ${this.age}`);
  }
}

let user1 = new User("Faysal", 22);
user1.display();
