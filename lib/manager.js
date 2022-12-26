// Import parent class
const Employee = require("./Employee");

// Create a Manager class that extends Employee class and includes an office number property
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // Override the role as Manager
  getRole() {
    return "Manager";
  }
}
