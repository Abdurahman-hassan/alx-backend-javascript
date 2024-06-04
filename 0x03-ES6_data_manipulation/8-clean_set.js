/**
 * Function to clean a set of values starting with a specific string
 * @param {Set} set - The set of values to be cleaned
 * @param {string} startString - The string to match the start of values
 * @returns {string} - The cleaned string with values separated by '-'
 */
function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  const result = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}

export default cleanSet;
