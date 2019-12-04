const path = require("path");
const fs = require("fs");
const templatesDirectory = path.resolve(__dirname, "../templates");

const render = employees => {
    const html = []
    html.push(employees.filter(employee => employee.getRole == "Manager").map(manager => renderManager(manager)))
    html.push(employees.filter(employee => employee.getRole == "Intern").map(intern => renderIntern(intern)))
    html.push(employees.filter(employee => employee.getRole == "employee").map(employee => renderEmployee(employee)))
    html.push(employees.filter(employee => employee.getRole == "Engineer").map(engineer => renderEngineer(engineer)))
    return renderMain(html.join(""))

}

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDirectory, "Manager.html"),"utf8");
    template = replacePlaceHolder(template, "name", manager.getName);
    template = replacePlaceHolder(template, "role", manager.getRole);
    template = replacePlaceHolder(template, "email", manager.getEmail);
    template = replacePlaceHolder(template, "id", manager.getId);
    template = replacePlaceHolder(template, "officeNumber", manager.getOfficeNumber);



}

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDirectory, "Intern.html"),"utf8");
    template = replacePlaceHolder(template, "name", intern.getName);
    template = replacePlaceHolder(template, "role", intern.getRole);
    template = replacePlaceHolder(template, "email", intern.getEmail);
    template = replacePlaceHolder(template, "id", intern.getId);
    template = replacePlaceHolder(template, "school", intern.getSchool);


}

const renderEmployee = employee => {
    let template = fs.readFileSync(path.resolve(templatesDirectory, "Employee.html"),"utf8");
    template = replacePlaceHolder(template, "name", employee.getName);
    template = replacePlaceHolder(template, "role", employee.getRole);
    template = replacePlaceHolder(template, "email", employee.getEmail);
    template = replacePlaceHolder(template, "id", employee.getId);
    template = replacePlaceHolder(template, "gitHub", employee.getGitHub);


}

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDirectory, "Engineer.html"),"utf8");
    template = replacePlaceHolder(template, "name", engineer.getName);
    template = replacePlaceHolder(template, "role", engineer.getRole);
    template = replacePlaceHolder(template, "email", engineer.getEmail);
    template = replacePlaceHolder(template, "id", engineer.getId);
    template = replacePlaceHolder(template, "gitHub", engineer.getGitHub);


}

const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDirectory, "Main.html"),"utf8");
    return replacePlaceHolder(template, "team", html)
}

const replacePlaceHolder = (template, placeholder, value) => {
    const pattern = new RegExp("{{ "+placeholder+" }}", "gm")
    return template.replace(pattern, value);

}
module.exports = render