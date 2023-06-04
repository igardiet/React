require('colors');
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveDb, readDb } = require('./helpers/saveFile');
const Tasks = require('./models/Tasks');

const main = async () => {
  let opt = '';
  const tasks = new Tasks();

  const tasksDb = readDb();
  if (tasksDb) {
    // Load tasks
    tasks.loadTasksFromArray(tasksDb);
  }

  do {
    opt = await inquirerMenu(); // Prints menu
    switch (opt) {
      case '1':
        const desc = await readInput('Description: '); // Create option
        tasks.createTask(desc);
        break;
      case '2':
        tasks.fullList();
        break;
    }
    saveDb(tasks.listArr);

    await pause();
  } while (opt !== '0');
};

main();
