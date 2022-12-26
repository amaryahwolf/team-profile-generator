// Create parent class with name, id and email properties and methods
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
        return `${this.name}`;
    }

    getId() {
        return `ID: ${this.id}`;
    }

    getEmail() {
        return `Email: <a href="mailto: ${this.email}">${this.email}</a>`;
    }

    getRole() {
        return `Employee`;
    }
  }

  module.exports = Employee;