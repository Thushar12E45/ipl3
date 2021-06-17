/* const matchesPlayed = require('../tasks/matchesPlayed.js');
const fetchData = require('../util/fetchData.js');
const matchesPlayedTestData = require('../testData/matchesPlayedPerYear.json');
const { matchesFilePath } = require('../util/constants.js');
const unsupportedData = require('../testData/unsupportedData.json');

let matchesData;

async function receiveData() {
  matchesData = await fetchData(matchesFilePath);
}
beforeAll(receiveData);

test(' check whether the matches-data is defiend or not ', () => {
  expect(matchesData).toBeDefined();
});

test(' check whether the matches-data is not null', () => {
  expect(matchesData).not.toBeNull();
});

test(' Total Matches played in IPL ', () => {
  expect(matchesPlayed(matchesData)).toEqual(matchesPlayedTestData);
});

test('Checking for error if the data sent to the task-function is undefiend ', () => {
  expect(() => {
    matchesPlayed();
  }).toThrow();
});

test('Checking for error if the data sent to the task-function is  null', () => {
  expect(() => {
    matchesPlayed('');
  }).toThrow();
});

test('Checking for unsupported data', () => {
  expect(() => {
    matchesPlayed(unsupportedData);
  }).toThrow();
});
 */