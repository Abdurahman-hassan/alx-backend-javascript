import createIteratorObject from './100-createIteratorObject.js'; //eslint-disable-line

import createEmployeesObject from './11-createEmployeesObject.js'; //eslint-disable-line
import createReportObject from './12-createReportObject.js'; //eslint-disable-line

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
  console.log(item);
}
