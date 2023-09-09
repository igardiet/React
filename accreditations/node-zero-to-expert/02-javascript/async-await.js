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

const getUserInfo = async ( id ) =>
{
  try
  {
    const employee = await getEmployee( id );
    const salary = await getSalary( id );
    return `${employee}'s salary is: $${salary}`;
  } catch ( error )
  {
    return error;
  }
};

const id = 1;

getUserInfo( id )
  .then( ( msg ) => console.log( msg ) )
  .catch( ( err ) => console.log( err ) );
