const fs = require('fs');

// Write the files to output folder
function writeData(path, result) {
  try {
    const string1 = JSON.stringify(result);
    fs.writeFile(path, string1, function (err) {
      if (err) throw err;
      console.log('file writing complete');
    });
  } catch (err) {
    console.log(err);
  }
}
module.exports = writeData;
