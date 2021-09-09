const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const path = require("path");
const fs = require("fs");
//const generateHTML = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "finalteam.html");

const render = require("./lib/htmlRenderer");
const templateDir = path.resolve(__dirname, "./template");

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
      } else if (answer.role === "Intern") {
        addIntern();
      } else if (answer.role === "Engineer") {
        addEngineer();
      } else if (answer.role === "Do not add new employee at this time");
      generateHTML(); //(outputPath, render(employees));
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
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employees.push(manager);
    addEmployee();
  });
}
function addIntern() {
  let intern = [
    {
      type: "input",
      name: "name",
      message: "What is the new interns name",
    },
    {
      type: "input",
      name: "id",
      message: "What is the new interns id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the new interns email?",
    },
    {
      type: "input",
      name: "school",
      message: "What is interns school?",
    },
  ];
  inquirer.prompt(intern).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    employees.push(intern);
    addEmployee();
  });
}
function addEngineer() {
  let engineer = [
    {
      type: "input",
      name: "name",
      message: "What is the new engineers name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the new engineers id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the new engineers email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the new engineers github?",
    },
  ];
  inquirer.prompt(engineer).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    employees.push(engineer);
    addEmployee();
  });
}

// Function that will render and generate the HTML file
const generateHTML = () => {
  fs.writeFileSync(outputPath, render(employees), "utf-8");
  console.log("Team profile sucessfully generated!");
};

addEmployee();
