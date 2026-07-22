const userName = { name: "faysal", id: 123 };
// console.log(userName);

//object
let users: object;
users = { name: "faysal", id: 321 };
// console.log(users);

// Array of object
let usersAll: object[];
usersAll = [
  { name: "faysal", id: 1 },
  { name: "faysal", id: 1 },
];
// console.log(usersAll);

let employee: object[];
employee = [];

let employee1: {
  employeeName: string;
  employeeId: number;
};
let employee2: {
  employeeName: string;
  employeeId: number;
};

employee1 = { employeeName: "faysal", employeeId: 123 };
employee2 = { employeeName: "faysal", employeeId: 4555 };
employee.push(employee1, employee2);
console.log(employee);
