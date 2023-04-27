// The constructor function creates the new object
// the NEW keyword:
// 1. creates a new empty object {}
// 2. set the value of 'this' to be the new empty object
// 3. calls the constructor method

class User {
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

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.name != user.name;
    });
  }
}

const firstUser = new User('Bob', 'Dylan');
const secondUser = new User('Lucky', 'Strike');
const admin = new Admin('John', 'Lennon');

let users = [firstUser, secondUser, admin];

admin.deleteUser(firstUser);

console.log(users);

// firstUser.login().updateNumber().updateNumber().logout();

///// constructor

function Animal(species, breed) {
  this.species = species;
  this.breed = breed;
  this.adult = false;
}

Animal.prototype.awake = function () {
  this.adult = true;
  console.log(this.species, 'Is awake');
};

Animal.prototype.asleep = function () {
  this.adult = false;
  console.log(this.species, 'Is asleep');
};

const animalOne = new Animal('Feline', 'Lion');
const animalTwo = new Animal('Canine', 'Wolf');

console.log(animalOne);
animalTwo.awake();
