class Employee {
  constructor(id, firstName, lastName, position, salary, workingHours) {
    this.idEmp = id;
    this.firstNameEmp = firstName;
    this.lastNameEmp = lastName;
    this.positionEmp = position;
    this.salaryEmp = salary;
    this.workingHoursEmp = workingHours;
  }

  get id() {
    return this.idEmp;
  }

  get firstName() {
    return this.firstNameEmp;
  }

  get lastName() {
    return this.lastNameEmp;
  }

  get position() {
    return this.positionEmp;
  }

  get salary() {
    return this.salaryEmp;
  }

  get workingHours() {
    return this.workingHoursEmp;
  }

  set id(id) {
    this.idEmp = id;
  }

  set firstName(fName) {
    this.firstNameEmp = fName;
  }

  set lastName(lName) {
    this.lastNameEmp = lName;
  }

  set position(pos) {
    this.positionEmp = pos;
  }

  set salary(amount) {
    this.salaryEmp = amount;
  }

  set workingHours(wh) {
    this.workingHoursEmp = wh;
  }

  getFullName() {
    return `Full name: ${this.firstName} ${this.lastName}`;
  }

  getAnnularSalary() {
    return this.salaryEmp * 365;
  }

  raiseSalary(percent) {
    this.salaryEmp = this.salaryEmp * (1 + percent / 100);
    return this.salaryEmp;
  }
}

const employee1 = new Employee(01, "Garabed", "Baghsarian", "junior", 540, 8);
console.log(employee1.getFullName());
console.log(employee1.raiseSalary(2));
console.log(employee1.salary);
