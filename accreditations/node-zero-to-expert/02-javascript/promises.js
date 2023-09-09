const employees = [
  {
    id: 1,
    name: 'George',
  },
  {
    id: 2,
    name: 'John',
  },
  {
    id: 3,
    name: 'Paul',
  },
];
const salaries = [
  {
    id: 1,
    salary: 1000,
  },
  {
    id: 2,
    salary: 1500,
  },
];

const getEmployee = ( id ) =>
{
  return new Promise( ( resolve, reject ) =>
  {
    const employee = employees.find( ( e ) => e.id === id )?.name;
    employee
      ? resolve( employee )
      : reject( `There is no employee with an id nº ${id}` );
  } );
};

const getSalary = ( id ) =>
{
  return new Promise( ( resolve, reject ) =>
  {
    const salary = salaries.find( ( s ) => s.id === id )?.salary;
    salary
      ? resolve( salary )
      : reject( `There is no salary registered for the id nº ${id}` );
  } );
};

const id = 11;

// CHAINED PROMISES
let name;
getEmployee( id )
  .then( ( employee ) =>
  {
    name = employee;
    return getSalary( id );
  } )
  .then( ( salary ) => console.log( `Employee ${name} has a salary of ${salary}` ) )
  .catch( ( err ) => console.log( err ) );

// UNCHAINED PROMISES
// getEmployee(id)
//   .then((employee) => console.log(employee))
//   .catch((err) => console.log(err));

// getSalary(id)
//   .then((salary) => console.log(salary))
//   .catch((err) => console.log(err));

// DO NOT CODE CALLBACK HELL LIKE THIS!
// getEmployee(id)
//   .then((employee) => {
//     getSalary(id)
//       .then((salary) => {
//         console.log(`Employee ${name} has a salary of ${salary}`);
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));
