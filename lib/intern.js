// Import parent class
const Employee = require("./Employee");

// Create an Intenr class that extends Employee class and includes a school property and method
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  // Override the role as Intern
  getRole() {
    return "Intern";
  }
}

module.exports = Intern
