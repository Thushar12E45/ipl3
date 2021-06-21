const matchesPlayed = require('../tasks/matchesPlayed.js');
const fetchData = require('../util/fetchData.js');
const matchesPlayedTestData = require('../testData/matchesPlayedPerYear.json');
const { matchesFilePath } = require('../util/constants.js');
const unsupportedData = require('../testData/unsupportedData.json');
const wrongData = require('../testData/wrongData.json');

let matchesData;

async function receiveData() {
  matchesData = await fetchData(matchesFilePath);
}
beforeAll(receiveData);

test(' check whether the matches-data is present or not', () => {
  expect(matchesData.length).toBeTruthy();
});

test(' Check for errors if provided with wrong path while fetching data ', async () => {
  await expect(fetchData('../wrongpath/wrongfile.csv')).rejects.toThrow();
});

test(' Total Matches played in IPL ', () => {
  expect(matchesPlayed(matchesData)).toEqual(matchesPlayedTestData);
});

test(' Total Matches played in IPL when provided with wrong data ', () => {
  expect(matchesPlayed(wrongData)).not.toEqual(matchesPlayedTestData);
});

test('Checking for error when data sent to the task-function is undefiend ', () => {
  expect(() => {
    matchesPlayed(undefined);
  }).toThrow();
});

test('Checking for error when data sent to the task-function is  null', () => {
  expect(() => {
    matchesPlayed(null);
  }).toThrow();
});

test('Checking for unsupported data', () => {
  expect(() => {
    matchesPlayed(unsupportedData);
  }).toThrow();
});

test('Checking for string data', () => {
  expect(() => {
    matchesPlayed('This is a string data');
  }).toThrow();
});
