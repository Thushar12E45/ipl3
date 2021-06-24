const matchesPlayed = require('../tasks/matchesPlayed.js');
const fetchData = require('../util/fetchData.js');
const matchesPlayedTestData = require('../testData/matchesPlayedPerYear.json');
const { MATCHES_FILE_PATH } = require('../util/constants.js');
const unsupportedData = require('../testData/unsupportedData.json');
const dummyData = require('../testData/dummyData.json');

let matchesData;

async function receiveData() {
  matchesData = await fetchData(MATCHES_FILE_PATH);
}
beforeAll(receiveData);

test(' Expect matches-data to be present', () => {
  expect(matchesData.length).toBeTruthy();
});

test(' Expect fetch() to throw error if provided with wrong path while fetching data ', async () => {
  await expect(fetchData('../wrongpath/wrongfile.csv')).rejects.toThrow();
});

test(' Expect matchesPlayed() to give correct data as output when matchesData is passed as argument ', () => {
  expect(matchesPlayed(matchesData)).toEqual(matchesPlayedTestData);
});

test('Expect matchesPlayed() to give incorrect result when dummy Data is passed as argument', () => {
  expect(matchesPlayed(dummyData)).not.toEqual(matchesPlayedTestData);
});

test('Expect matchesPlayed() to throw error when undefined data is passed as parameter ', () => {
  expect(() => {
    matchesPlayed(undefined);
  }).toThrow();
});

test('Expect matchesPlayed() to throw error when null data is passed as parameter ', () => {
  expect(() => {
    matchesPlayed(null);
  }).toThrow();
});

test('Expect matchesPlayed() to throw error when unsupported data is passed as parameter ', () => {
  expect(() => {
    matchesPlayed(unsupportedData);
  }).toThrow();
});

test('Expect matchesPlayed() to throw error when string data is passed as parameter', () => {
  expect(() => {
    matchesPlayed('This is a string data');
  }).toThrow();
});
