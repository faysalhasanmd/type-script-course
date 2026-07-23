type User = {
  employeeName: string;
  employeeId: number;
};

let employee: User[];
employee = [];

let employee1: User;
employee1 = { employeeName: "sad", employeeId: 122 };

let employee2: User;
employee2 = { employeeName: "faysal", employeeId: 4555 };
employee.push(employee1, employee2);

// console.log(employee);

// request Custom type
type requestType = "GET" | "POST" | "DELETE" | "PUT";
let getRequest: requestType;

// getRequest = "GET";

function requestHandler(reqType: requestType) {
  console.log(reqType);
}
requestHandler("PUT");
