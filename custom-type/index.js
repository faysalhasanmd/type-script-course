"use strict";
let employee;
employee = [];
let employee1;
employee1 = { employeeName: "sad", employeeId: 122 };
let employee2;
employee2 = { employeeName: "faysal", employeeId: 4555 };
employee.push(employee1, employee2);
let getRequest;
// getRequest = "GET";
function requestHandler(reqType) {
    console.log(reqType);
}
requestHandler("PUT");
