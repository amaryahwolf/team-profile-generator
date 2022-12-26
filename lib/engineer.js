// Import parent class
const Employee = require("./Employee");

// Create an Engineer class that extends Employee class and includes a github username property and method
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
  // Override the role as Engineer
  getRole() {
    return "Engineer";
  }
}
