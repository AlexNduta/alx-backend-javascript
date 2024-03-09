export default function appendToEachArrayValue(array, appendString) {
    let idx;
    for (idx of array) {
    let value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}


console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
