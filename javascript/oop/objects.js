// The constructor function creates the new object
// the NEW keyword:
// 1. creates a new empty object {}
// 2. set the value of 'this' to be the new empty object
// 3. calls the constructor method

class Person {
    constructor(name, surname){
        this.name = name
        this.surname = surname
    }
}

const firstPerson = new Person('Bob', 'Dylan')
const secondPerson = new Person('Lucky', 'Strike')