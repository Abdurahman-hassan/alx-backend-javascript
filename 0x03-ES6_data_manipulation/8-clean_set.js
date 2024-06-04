/**
 * Function to clean a set of values starting with a specific string
 * @param {Set} set - The set of values to be cleaned
 * @param {string} startString - The string to match the start of values
 * @returns {string} - The cleaned string with values separated by '-'
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
