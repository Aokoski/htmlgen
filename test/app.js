const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const employee = require("./lib/Employee");
const intern = require("./lib/Intern");
const engineer = require("./lib/Engineer");
const manager = require("./lib/Manager");



const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter employee's name"
    },
    {
      type: "input",
      name: "role",
      message: "Enter employee's role"
    },
    {
      type: "input",
      name: "github",
      message: "Enter employee's GitHub Username"
    },
    {
      type: "input",
      name: "email",
      message: "Enter employee's email?"
    },
    {
        type: "input",
        name: "id",
        message: "Enter employee's id?"
      },
      {
        type: "input",
        name: "school",
        message: "Enter employee's school?"
      },
  ]);
}
//gen html for required use cards//
function addManager(){
    
}



//get info for each employee subclass and saves intern and engineer info to an array async function

