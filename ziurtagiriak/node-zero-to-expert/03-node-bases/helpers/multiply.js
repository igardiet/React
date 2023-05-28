const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, list = false, until = 10) => {
  try {
    let exit,
      terminal = '';

    for (let i = 1; i <= until; i++) {
      exit += `${base} x ${i} = ${base * i}\n`;
      terminal += `${base} ${'x'.cyan} ${i} ${'='.cyan} ${base * i}\n`;
    }

    if (list) {
      console.log('==============='.red);
      console.log('Table of:'.blue, colors.white(base));
      console.log('==============='.red);
      console.log(terminal);
    }

    fs.writeFileSync(`./exit/table-${base}.txt`, exit);
    return `table-${base}.txt successfully created!`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
