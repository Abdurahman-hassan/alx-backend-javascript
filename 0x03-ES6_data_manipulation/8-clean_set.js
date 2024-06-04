/**
 * Function to clean a set of values starting with a specific string
 * @param {Set} set - The set of values to be cleaned
 * @param {string} startString - The string to match the start of values
 * @returns {string} - The cleaned string with values separated by '-'
 */
export default function cleanSet(set, startString) {
    if (startString === '' || startString === undefined
        || !(set instanceof Set) || typeof startString !== 'string') { return ''; }

    const filteredValues = Array.from(set)
        .filter((value) => (value !== undefined ? value.startsWith(startString) : ''))
        .map((value) => (value !== undefined ? value.slice(startString.length) : ''));

    return filteredValues.join('-');
}
