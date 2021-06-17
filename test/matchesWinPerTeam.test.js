const fetchData = require('../util/fetchData.js');
const matchesWinPerTeam = require('../tasks/matchesWinPerTeam.js');
const matchesWinTestData = require('../testData/matchesWonPerTeam.json');
const { matchesFilePath, emptyfile } = require('../util/constants.js');
const unsupportedData = require('../testData/unsupportedData.json');

let matchesData;
async function receiveData() {
  matchesData = await fetchData(emptyfile);
}
beforeAll(receiveData);

test(' check whether the matches-data is defiend or not ', () => {
  expect(matchesData).toBeDefined();
});

test(' check whether the matches-data is not null', () => {
  expect(matchesData).not.toBeNull();
});

/* test(' Number of wins per team per year', () => {
  expect(matchesWinPerTeam(matchesData)).toEqual(matchesWinTestData);
});

test('Checking for error if the data sent to the task-function is undefiend ', () => {
  expect(() => {
    matchesWinPerTeam();
  }).toThrow();
});

test('Checking for error if the data sent to the task-function is  null', () => {
  expect(() => {
    matchesWinPerTeam('');
  }).toThrow();
});

test('Checking for unsupported data', () => {
  expect(() => {
    matchesWinPerTeam(unsupportedData);
  }).toThrow();
}); */
