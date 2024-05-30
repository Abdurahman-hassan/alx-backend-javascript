import ClassRoom from './0-classroom.js'; // eslint-disable-line

export default function initializeRooms() {
  const classRoom1 = new ClassRoom(19);
  const classRoom2 = new ClassRoom(20);
  const classRoom3 = new ClassRoom(21);

  return [classRoom1, classRoom2, classRoom3];
}
