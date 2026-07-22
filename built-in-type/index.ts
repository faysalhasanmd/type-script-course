let UserId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActive: boolean;

UserId = 123;
firstName = "faysal";
lastName = "hasan";
fullName = firstName.concat(lastName);
isActive = false;

console.log(firstName);
console.log(isActive);
console.log(`my name is ${fullName}, my profile activated ${isActive}`);

function display(): void {
  console.log("what's app");
}
display();
