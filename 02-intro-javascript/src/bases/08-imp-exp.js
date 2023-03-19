import heroes, { owners } from "../data/heroes";

console.log(owners);
// LONG WAY
// const getHeroById = (id) => {
//     return heroes.find((hero) => {
//         if (hero.id === id) {
//             return true
//         } else {
//             return false
//         }
//     })
// }

const getHeroById = (id) => heroes.find((hero) => hero.id === id); // SHORT WAY
console.log(getHeroById(2));

const getHeroesByOwner = (owner) =>
  heroes.filter((hero) => hero.owner === owner);
console.log(getHeroesByOwner("DC"));
