const fetchData = require('../util/fetchData.js');
const economicalBowlers = require('../tasks/economicalBowlers.js');
const economicalBowlersTestData = require('../testData/bowlersEconomy.json');
const { matchesFilePath, deliveriesFilePath } = require('../util/constants.js');
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

test(' check whether the matches-data or delivery data is present or not', () => {
  expect(matchesData.length).toBeTruthy();
  expect(deliveriesData.length).toBeTruthy();
});

test('Checking the output data of top 10 Economical bowlers in 2015', () => {
  expect(economicalBowlers(matchesData, deliveriesData)).toEqual(economicalBowlersTestData);
});

test('Checking for incorrect output when provided with wrong data', () => {
  expect(economicalBowlers(wrongData, wrongData)).not.toEqual(economicalBowlersTestData);
});

test('Checking for error  when data sent to the task-function is undefiend ', () => {
  expect(() => {
    economicalBowlers(undefined);
  }).toThrow();
});

test('Checking for error  when data sent to the task-function is null', () => {
  expect(() => {
    economicalBowlers(null, null);
  }).toThrow();
});

test('Checking for unsupported data', () => {
  expect(() => {
    economicalBowlers(unsupportedData, unsupportedData);
  }).toThrow();
});

test('Checking for unsupported data which includes season', () => {
  expect(() => {
    economicalBowlers(unsupportedData2, unsupportedData2, 2012);
  }).toThrow();
});

test('Checking for different types data, edge cases', () => {
  expect(() => {
    economicalBowlers(unsupportedData, unsupportedData2, 2012);
  }).toThrow();
  expect(() => {
    economicalBowlers(unsupportedData2, unsupportedData, 2012);
  }).toThrow();
});
