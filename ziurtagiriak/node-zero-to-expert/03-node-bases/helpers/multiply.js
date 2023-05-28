const fs = require('fs');

const createFile = async (base = 5, list = false) => {
  try {
    let exit = '';

    for (let i = 1; i <= 10; i++) {
      exit += `${base} * ${i} = ${base * i}\n`;
    }

    if (list) {
      console.log('===============');
      console.log('Table of:', base);
      console.log('===============');
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
