const batman = {
  name: 'Bruce',
  surname: 'Wayne',
  power: 'Money',

  getName()
  {
    return `${this.name} ${this.surname} ${this.power}`;
  },
};

// const name = batman.name
// const surname = batman.surname
// const power = batman.power

const printHero = ( { name, surname, power, age = 35 } ) =>
{
  console.log( name, surname, power, age );
};
// printHero(batman)

const heroes = ['Batman', 'Superman', 'Deadpool'];

// const h1 = heroes[0]
// const h2 = heroes[1]
// const h3 = heroes[2]
const [, , h3] = heroes;

console.log( h3 );
