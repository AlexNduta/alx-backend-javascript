import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const array = [];
  const classroom1 = new ClassRoom(19);
  const classroom2 = new ClassRoom(20);
  const classroom3 = new ClassRoom(34);
  array.push(classroom1, classroom2, classroom3);
  return array;
}