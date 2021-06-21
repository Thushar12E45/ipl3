const fetchData = require('../util/fetchData.js');
const matchesWinPerTeam = require('../tasks/matchesWinPerTeam.js');
const matchesWinTestData = require('../testData/matchesWonPerTeam.json');
const { matchesFilePath } = require('../util/constants.js');
const unsupportedData = require('../testData/unsupportedData.json');
const unsupportedData2 = require('../testData/unsupportedData2.json');
const wrongData = require('../testData/wrongData.json');

let matchesData;
async function receiveData() {
  matchesData = await fetchData(matchesFilePath);
}
beforeAll(receiveData);

test(' check whether the matches-data is present or not', () => {
  expect(matchesData.length).toBeTruthy();
});

test(' Number of wins per team per year', () => {
  expect(matchesWinPerTeam(matchesData)).toEqual(matchesWinTestData);
});

test(' Number of wins per team per year when provided with wrong data', () => {
  expect(matchesWinPerTeam(wrongData)).not.toEqual(matchesWinTestData);
});

test('Checking for error when data sent to the task-function is undefiend ', () => {
  expect(() => {
    matchesWinPerTeam(undefined);
  }).toThrow();
});

test('Checking for error when data sent to the task-function is  null', () => {
  expect(() => {
    matchesWinPerTeam(null);
  }).toThrow();
});

test('Checking for error when unsupported data sent to the task-function ', () => {
  expect(() => {
    matchesWinPerTeam(unsupportedData);
  }).toThrow();
});

test('Checking for edge cases for different type of data', () => {
  expect(() => {
    matchesWinPerTeam(unsupportedData2);
  }).toThrow();
});

test('Checking for string Data', () => {
  expect(() => {
    matchesWinPerTeam('This is a string data');
  }).toThrow();
});
