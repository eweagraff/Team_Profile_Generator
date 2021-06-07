const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      message: "Enter team member's name",
      name: "name",
    },
    {
      type: "list",
      message: "Select team member's role",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);
};

const init = () => {
  promptUser()
    .then(( => writeFileAsync("index1.html"))
    .then(() => console.log("Successfully wrote to index1.html"))
    .catch((err) => console.error(err));
};

init();
