const csv = require('csvtojson');

async function fetchData(filePath) {
  try {
    const Data = await csv().fromFile(filePath);
    return Data;
  } catch (err) {
    console.log(err);
  }
}
module.exports = fetchData;
