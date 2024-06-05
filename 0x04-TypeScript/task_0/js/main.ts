interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Abdelrahman',
    lastName: 'Hassan',
    age: 27,
    location: 'Egypt',
};

const student2: Student = {
    firstName: 'Omar',
    lastName: 'Ahmed',
    age: 27,
    location: 'Egypt',
};

const studentsList: Student[] = [student1, student2];

// Create table
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

// Create table header
const thead: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = thead.insertRow();
headerRow.insertCell().textContent = 'First Name';
headerRow.insertCell().textContent = 'Location';

// Populate table with student data
for (const student of studentsList) {
    const row: HTMLTableRowElement = table.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
}