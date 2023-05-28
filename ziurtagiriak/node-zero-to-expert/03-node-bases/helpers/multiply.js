const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, list = false) => {
  try {
    let exit = '';

    for (let i = 1; i <= 10; i++) {
      exit += `${base} ${'X'.cyan} ${i} ${'='.cyan} ${base * i}\n`;
    }

    if (list) {
      console.log('==============='.red);
      console.log('Table of:'.blue, colors.white(base));
      console.log('==============='.red);
      console.log(exit);
    }

    fs.writeFileSync(`table-${base}.txt`, exit);
    return `table-${base}.txt successfully created!`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
