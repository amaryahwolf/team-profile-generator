// Import parent class
const Employee = require("./Employee");

// Create an Engineer class that extends Employee class and includes a github username property and method
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return `Github: <a target="_blank" href="https://github.com/${this.github}">${this.github}</a>`;
  }
  // Override the role as Engineer
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer
