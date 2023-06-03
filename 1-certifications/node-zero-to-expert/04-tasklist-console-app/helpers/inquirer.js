require('colors');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What would you like to do ?',
    choices: ['opt1', 'opt2', 'opt3'],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log('==================='.green);
  console.log('Select an option'.red);
  console.log('===================\n'.green);

  const opt = await inquirer.prompt(questions);
  return opt;
};
module.exports = {
  inquirerMenu,
};
