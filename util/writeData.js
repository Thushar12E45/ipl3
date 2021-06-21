const fs = require('fs');

function writeData(path, result) {
  try {
    const string1 = JSON.stringify(result);

    fs.writeFile(path, string1, function (err) {
      if (err) throw err;
      console.log('file writing complete');
    });
  } catch (err) {
    console.log(err.message);
  }
}
module.exports = writeData;
