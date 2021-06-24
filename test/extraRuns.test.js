const fetchData = require('../util/fetchData.js');
const extraRuns = require('../tasks/extraRuns.js');
const { MATCHES_FILE_PATH, DELIVERIES_FILE_PATH } = require('../util/constants.js');
const extraRunsTestData = require('../testData/extraRuns.json');
const unsupportedData = require('../testData/unsupportedData.json');
const unsupportedData2 = require('../testData/unsupportedData2.json');
const dummyData = require('../testData/dummyData.json');

let matchesData;
let deliveriesData;
async function receiveData() {
  matchesData = await fetchData(MATCHES_FILE_PATH);
  deliveriesData = await fetchData(DELIVERIES_FILE_PATH);
}
beforeAll(receiveData);

test('Expect matches-data and deliveries-data to be present', () => {
  expect(matchesData.length).toBeTruthy();
  expect(deliveriesData.length).toBeTruthy();
});

test('Expect extraRuns() to return correct-data when provided with matches and delivereies data', () => {
  expect(extraRuns(matchesData, deliveriesData)).toEqual(extraRunsTestData);
});

test('Expect extraRuns() to return incorrect-output when provided with dummy data ', () => {
  expect(extraRuns(dummyData, dummyData)).not.toEqual(extraRunsTestData);
});

test('Expect extraRuns() to throw error when undefiend data is passed as parameter ', () => {
  expect(() => {
    extraRuns(undefined, undefined);
  }).toThrow();
});

test('Expect extraRuns() to throw error when null data is passed as parameter ', () => {
  expect(() => {
    extraRuns(null, null);
  }).toThrow();
});

test('Expect extraRuns() to throw error when the passed data does not season', () => {
  expect(() => {
    extraRuns(unsupportedData, unsupportedData);
  }).toThrow();
});

test('Expect extraRuns() to throw error when passed with unSupported data', () => {
  expect(() => {
    extraRuns(unsupportedData2, unsupportedData2, 2012);
  }).toThrow();
});

test('Expect extraRuns() to throw error when passed with different types of unSupported data', () => {
  expect(() => {
    extraRuns(unsupportedData, unsupportedData2, 2012);
  }).toThrow();
  expect(() => {
    extraRuns(unsupportedData2, unsupportedData, 2012);
  }).toThrow();
});
