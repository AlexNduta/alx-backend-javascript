export default function getListStudentIds(arr) {
  if (arr instanceof Object) {
    const resultId = arr.map((item) => (item.id));
    return resultId;
  }
  return [];
}
