function cleanSet(set, startString) {
  if (!set || !(set instanceof Set) || !startString) {
    return '';
  }

  return Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.substring(startString.length))
    .join('-');
}

export default cleanSet;
