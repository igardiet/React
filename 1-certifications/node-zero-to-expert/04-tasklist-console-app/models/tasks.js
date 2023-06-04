const Task = require('./task');

class Tasks {
  _list = {};

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
}
module.exports = Tasks;
