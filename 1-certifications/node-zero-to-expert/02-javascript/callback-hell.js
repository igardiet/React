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
  const employee = employees.find((e) => e.id === id)?.name;
  if (employee) {
    callback(null, employee);
  } else {
    callback(`Employee nº ${id} doesn't exist!`);
  }
};

const getSalary = (id, callback) => {
  const salary = salaries.find((s) => s.id === id)?.salary;
  if (salary) {
    callback(null, salary);
  } else {
    callback(`Salary from employee nº ${id} is not registered!`);
  }
};

const id = 1;

getEmployee(id, (err, employee) => {
  if (err) {
    return console.log(`ERROR!: ${err}`);
  }
  console.log(`Employee: ${employee}`);
});

getSalary(id, (err, salary) => {
  if (err) {
    return console.log(`ERROR!: ${err}`);
  }
  console.log(`Salary: ${salary}`);
});
