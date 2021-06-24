const fetchData = require('../util/fetchData.js');
const matchesWinPerTeam = require('../tasks/matchesWinPerTeam.js');
const matchesWinTestData = require('../testData/matchesWonPerTeam.json');
const { MATCHES_FILE_PATH } = require('../util/constants.js');
const unsupportedData = require('../testData/unsupportedData.json');
const unsupportedData2 = require('../testData/unsupportedData2.json');
const dummyData = require('../testData/dummyData.json');

let matchesData;
async function receiveData() {
  matchesData = await fetchData(MATCHES_FILE_PATH);
}
beforeAll(receiveData);

test(' Expect matches-data to be present', () => {
  expect(matchesData.length).toBeTruthy();
});

test('Expect matchesWinPerTeam() to give correct data as output when matchesData is passed as argument', () => {
  expect(matchesWinPerTeam(matchesData)).toEqual(matchesWinTestData);
});

test('Expect matchesWinPerTeam() to give incorrect data as output when dummyData is passed as argument', () => {
  expect(matchesWinPerTeam(dummyData)).not.toEqual(matchesWinTestData);
});

test('Expect matchesWinPerTeam() to throw error when undefined data is passed as parameter', () => {
  expect(() => {
    matchesWinPerTeam(undefined);
  }).toThrow();
});

test('Expect matchesWinPerTeam() to throw error when null data is passed as parameter', () => {
  expect(() => {
    matchesWinPerTeam(null);
  }).toThrow();
});

test('Expect matchesWinPerTeam() to throw error when unsupported data is passed as parameter', () => {
  expect(() => {
    matchesWinPerTeam(unsupportedData);
  }).toThrow();
});

test('Expect matchesWinPerTeam() to throw error when unsupported data (includes season) is passed as parameter', () => {
  expect(() => {
    matchesWinPerTeam(unsupportedData2);
  }).toThrow();
});

test('Expect matchesWinPerTeam() to throw error when string is passed as parameter', () => {
  expect(() => {
    matchesWinPerTeam('This is a string data');
  }).toThrow();
});
