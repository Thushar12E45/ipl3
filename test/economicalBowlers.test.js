/* const fetchData = require('../util/fetchData.js');
const economicalBowlers = require('../tasks/economicalBowlers.js');
const economicalBowlersTestData = require('../testData/bowlersEconomy.json');
const { matchesFilePath, deliveriesFilePath } = require('../util/constants.js');
const unsupportedData = require('../testData/unsupportedData.json');
const unsupportedData2 = require('../testData/unsupportedData2.json');

let matchesData;
let deliveriesData;
async function receiveData() {
  matchesData = await fetchData(matchesFilePath);
  deliveriesData = await fetchData(deliveriesFilePath);
}
beforeAll(receiveData);

test(' check whether the received-data is defiend or not ', () => {
  expect(matchesData).toBeDefined();
  expect(deliveriesData).toBeDefined();
});

test(' check whether the received-data is not null', () => {
  expect(matchesData).not.toBeNull();
  expect(deliveriesData).not.toBeNull();
});

test('Checking the output data of top 10 Economical bowlers in 2015', () => {
  expect(economicalBowlers(matchesData, deliveriesData)).toEqual(economicalBowlersTestData);
});

test('Checking for error if the data sent to the task-function is undefiend ', () => {
  expect(() => {
    economicalBowlers();
  }).toThrow();
});

test('Checking for error if the data sent to the task-function is null', () => {
  expect(() => {
    economicalBowlers('', '');
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
 */