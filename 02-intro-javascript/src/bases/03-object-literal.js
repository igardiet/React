const person = {
    name: 'Inaki',
    surname: 'Dietze',
    age: 25,
    address: {
        city: 'Barcelona',
        zip: '28934',
        lat: 14.3423,
        lng: 76.453476
    }
}

// console.table(person)

// HOW TO CLONE AN OBJECT:
const person2 = {...person}
person2.name = 'Ringo'
person2.surname = 'Starr'
person2.age = 75

console.log(person)
console.log(person2)