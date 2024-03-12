import getListStudents from './getListStudents.js';

export default function getStudentIdsSum(array) {
  const studentIds = array.reduce((acumulator, item) => item.id + acumulator, 0);

  return studentIds;
}
