/**
 * Exclude properties from an object (shallow)
 *
 * @param {Object} obj
 * The object
 *
 * @param {Array} keys
 * The key:val pairs to exclude
 */
declare const excludeFromObj: (obj: {
    [key: string]: any;
}, keys: string[]) => any;
export default excludeFromObj;
