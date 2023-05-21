const fs = require('fs');

const createFile = async (base = 5) => {
  try {
    console.log('===============');
    console.log('Table of:', base);
    console.log('===============');

    let exit = '';

    for (let i = 1; i <= 10; i++) {
      exit += `${base} * ${i} = ${base * i}\n`;
    }

    console.log(exit);

    fs.writeFileSync(`table-${base}.txt`, exit);
    return `table-${base}.txt successfully created!`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
