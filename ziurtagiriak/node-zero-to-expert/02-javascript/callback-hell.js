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

const getEmployee = (id, callback) => {
  const employee = employees.find((e) => e.id === id);
  if (employee) {
    callback(null, employee);
  } else {
    callback(`Employee nº ${id} doesn't exist!`);
  }
};

getEmployee(1, (err, employee) => {
  if (err) {
    console.log('ERROR!');
    return console.log(err);
  }
  console.log('Employee exists!');
  console.log(employee);
});
