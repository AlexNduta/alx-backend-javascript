import from './0-get_list_students.js';
export default function getStudentsByLocation(array, city){
    const extractedCities = array.filter((item) => item.location === city);
    return extractedCities;
}
