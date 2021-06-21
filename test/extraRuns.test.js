const fetchData = require('../util/fetchData.js');
const extraRuns = require('../tasks/extraRuns.js');
const { matchesFilePath, deliveriesFilePath } = require('../util/constants.js');
const extraRunsTestData = require('../testData/extraRuns.json');
const unsupportedData = require('../testData/unsupportedData.json');
const unsupportedData2 = require('../testData/unsupportedData2.json');
const wrongData = require('../testData/wrongData.json');

let matchesData;
let deliveriesData;
async function receiveData() {
  matchesData = await fetchData(matchesFilePath);
  deliveriesData = await fetchData(deliveriesFilePath);
}
beforeAll(receiveData);

test(' check whether the matches-data or delivery-data is present or not', () => {
  expect(matchesData.length).toBeTruthy();
  expect(deliveriesData.length).toBeTruthy();
});

test('Extra Runs conceded by each team in year 2016', () => {
  expect(extraRuns(matchesData, deliveriesData)).toEqual(extraRunsTestData);
});

test('Checking for incorrect output when provided with wrong data ', () => {
  expect(extraRuns(wrongData, wrongData)).not.toEqual(extraRunsTestData);
});

test('Checking for error when data sent to the task-function is undefiend ', () => {
  expect(() => {
    extraRuns(undefined, undefined);
  }).toThrow();
});

test('Checking for error  when data sent to the task-function is  null', () => {
  expect(() => {
    extraRuns(null, null);
  }).toThrow();
});

test('Checking for unsupported data', () => {
  expect(() => {
    extraRuns(unsupportedData, unsupportedData);
  }).toThrow();
});

test('Checking for unsupported data which includes season', () => {
  expect(() => {
    extraRuns(unsupportedData2, unsupportedData2, 2012);
  }).toThrow();
});

test('Checking for different types of data edge-cases', () => {
  expect(() => {
    extraRuns(unsupportedData, unsupportedData2, 2012);
  }).toThrow();
  expect(() => {
    extraRuns(unsupportedData2, unsupportedData, 2012);
  }).toThrow();
});
