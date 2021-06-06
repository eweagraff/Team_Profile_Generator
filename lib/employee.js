// create an employee class that includes name, id, email
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;


// const hannah = new Manager("Hannah Folk", 1, "hfolk25@gmail.com", "A123");

// const hannah = {
//   name: "Hannah Folk",
//   id: 1,
//   email: "hfolk25@gmail.com",
//   getName: function() {
//     return this.name;
//   },
//   getId: function() {
//     return this.id;
//   },
//   getEmail: function() {
//     return this.email;
//   },
//   getRole: function() {
//     console.log(this);
//     return "Manager";
//   }
// };
// console.log(this);

// hannah.getRole();