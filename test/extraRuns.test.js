/* const fetchData = require('../util/fetchData.js');
const extraRuns = require('../tasks/extraRuns.js');
const { matchesFilePath, deliveriesFilePath } = require('../util/constants.js');
const extraRunsTestData = require('../testData/extraRuns.json');
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

test('Extra Runs conceded by each team in year 2016', () => {
  expect(extraRuns(matchesData, deliveriesData)).toEqual(extraRunsTestData);
});

test('Checking for error if the data sent to the task-function is undefiend ', () => {
  expect(() => {
    extraRuns();
  }).toThrow();
});

test('Checking for error if the data sent to the task-function is  null', () => {
  expect(() => {
    extraRuns('', '');
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
 */