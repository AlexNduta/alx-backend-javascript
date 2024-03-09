export default function appendToEachArrayValue(array, appendString) {
  const arrayToReturn = [];
  for (const idx of array) {
    arrayToReturn.push(appendString + idx);
  }

  return arrayToReturn;
}

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
