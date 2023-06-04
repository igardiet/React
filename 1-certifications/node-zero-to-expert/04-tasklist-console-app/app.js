require('colors');
const { inquirerMenu, pause } = require('./helpers/inquirer');
const Tasks = require('./models/Tasks');

const main = async () => {
  console.log('Start');
  let opt = '';

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    await pause();
  } while (opt !== '0');
};

main();
