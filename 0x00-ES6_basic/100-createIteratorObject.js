export default function createIteratorObject(report) {
  const employees = [];

  for (const department of Object.keys(report.allEmployees)) {
    employees.push(...report.allEmployees[department]);
  }

  return {
    * [Symbol.iterator]() {
      for (const employee of employees) {
        yield employee;
      }
    },
  };
}
