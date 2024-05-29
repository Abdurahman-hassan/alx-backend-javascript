export default function createIteratorObject(report) {
  const employees = [];

  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  return {
    * [Symbol.iterator]() {
      for (let i = 0; i < employees.length; i++) {
        yield employees[i];
      }
    },
  };
}
