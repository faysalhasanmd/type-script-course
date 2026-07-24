abstract class Animal {
  constructor(public name: string) {}

  // Abstract method - শুধু ডিক্লেয়ারেশন, কোনো body নেই
  abstract makeSound(): void;

  // Normal method - এটা সব child class শেয়ার করবে
  move(): void {
    console.log(`${this.name} is moving.`);
  }
}

class Dog extends Animal {
  // এখানে abstract method implement করতে হবে
  makeSound(): void {
    console.log(`${this.name} says: Bhow Bhow!`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} says: Meow!`);
  }
}

const dog = new Dog("Tommy");
dog.makeSound(); // Tommy says: Bhow Bhow!
dog.move(); // Tommy is moving.

const cat = new Cat("Kitty");
cat.makeSound(); // Kitty says: Meow!
