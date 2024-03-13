export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // returns list of students from specific city with their new grade
  // if student does not have Gradez, the final
  // use filter() and map()
  // step1: extract the student from the studentsList
  const studentFromSpecificCity = studentList.filter((item) => item.location === city);
  const studentsUpdated = studentFromSpecificCity.map((student) => {
    // find matching grade
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    // update the studentgrade if a match is found
    // return {...student, grade: matchingGrade ? matchingGrade.grade: 'N/A'};
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: matchingGrade ? matchingGrade.grade : 'N/A',
    };
  });
  return studentsUpdated;
}
