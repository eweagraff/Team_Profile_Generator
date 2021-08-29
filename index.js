const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generateHTML = require("./lib/htmlRenderer");

const employees = [];

function addEmployee() {
  inquirer
    .prompt({
      type: "list",
      name: "role",
      message: "What is the position of the new employee?",
      choices: [
        "Manager",
        "Intern",
        "Engineer",
        "Do not add new employee at this time",
      ],
    })

    .then((answer) => {
      if (answer.role === "Manager") {
        addManager();
      }
      if (answer.role === "Intern") {
        addIntern();
      }
      if (answer.role === "Engineer") {
        addEngineer();
      }
      if (answer.role === "Do not add new employee at this time") {
        exit();
      }
    });
}

function addManager() {
  let manager = [
    {
      type: "input",
      name: "name",
      message: "What is the managers Name",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the new managers email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the managers office number?",
    },
  ];
  inquirer.prompt(manager).then((answers) => {
    const newManger = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employees.push(newManager);
    addEmployee();
  });
}

addEmployee();
