// The constructor function creates the new object
// the NEW keyword:
// 1. creates a new empty object {}
// 2. set the value of 'this' to be the new empty object
// 3. calls the constructor method

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.number = 0;
  }
  login() {
    console.log(this.name, 'Has logged in!');
    return this;
  }
  logout() {
    console.log(this.name, 'Has logged out!');
    return this;
  }
  updateNumber() {
    this.number++;
    console.log(this.name, 'number is now', this.number);
    return this;
  }
}

const firstPerson = new Person('Bob', 'Dylan');
const secondPerson = new Person('Lucky', 'Strike');

firstPerson.login().updateNumber().updateNumber().logout();
