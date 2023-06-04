const Task = require('./task');

class Tasks {
  _list = {
    abc: 123,
  };

  get listArr() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });
    return list;
  }

  constructor() {
    this._list = {};
  }

  deleteTask(id = '') {
    if (this._list[id]) {
      delete this._list[id];
    }
  }

  loadTasksFromArray(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  createTask(desc = '') {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  fullList() {
    console.log();
    this.listArr.forEach((task, i) => {
      const idx = `${i + 1}`.red;
      const { desc, completedIn } = task;
      const state = completedIn ? 'Completed'.white : 'Pending'.blue;

      console.log(`${idx} ${desc} :: ${state}`);
    });
  }
  listCompletedPending(completed = true) {
    console.log();
    let counter = 0;
    this.listArr.forEach((task) => {
      const { desc, completedIn } = task;
      const state = completedIn ? 'Completed'.green : 'Pending'.blue;
      if (completed) {
        if (completedIn) {
          counter += 1;
          console.log(`${(counter + '.').red}. ${desc} :: ${completedIn}`);
        }
      } else {
        if (!completedIn) {
          counter += 1;
          console.log(`${(counter + '.').red} ${desc} :: ${state}`);
        }
      }
    });
  }
}
module.exports = Tasks;
