function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const grade = newGrades.filter((grade) => grade.studentId === student.id);
    student.grade = grade.length ? grade[0].grade : 'N/A'; // eslint-disable-line no-param-reassign
    return student;
  });
}

export default updateStudentGradeByCity;
