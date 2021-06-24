const fetchData = require('../util/fetchData.js');
const economicalBowlers = require('../tasks/economicalBowlers.js');
const economicalBowlersTestData = require('../testData/bowlersEconomy.json');
const { MATCHES_FILE_PATH, DELIVERIES_FILE_PATH } = require('../util/constants.js');
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

test('Expect economicalBowlers() to return correct-data when provided with matches and delivereies data', () => {
  expect(economicalBowlers(matchesData, deliveriesData, 2015)).toEqual(economicalBowlersTestData);
});

test('Expect economicalBowlers() to return incorrect-data when provided with dummy data', () => {
  expect(economicalBowlers(dummyData, dummyData)).not.toEqual(economicalBowlersTestData);
});

test('Expect extraBowlers() to throw error when undefiend data is passed as parameter', () => {
  expect(() => {
    economicalBowlers(undefined);
  }).toThrow();
});

test('Expect extraBowlers() to throw error when null data is passed as parameter', () => {
  expect(() => {
    economicalBowlers(null, null);
  }).toThrow();
});

test('Expect economicalBowlers() to throw error when passed with unSupported data', () => {
  expect(() => {
    economicalBowlers(unsupportedData, unsupportedData);
  }).toThrow();
});

test('Expect economicalBowlers() to throw error when passed with unsupported data which includes season', () => {
  expect(() => {
    economicalBowlers(unsupportedData2, unsupportedData2, 2012);
  }).toThrow();
});

test('Expect extraRuns() to throw error when passed with different types of unSupported data, edge cases', () => {
  expect(() => {
    economicalBowlers(unsupportedData, unsupportedData2, 2012);
  }).toThrow();
  expect(() => {
    economicalBowlers(unsupportedData2, unsupportedData, 2012);
  }).toThrow();
});
