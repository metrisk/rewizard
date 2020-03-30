/**
 * Exclude properties from an object (shallow)
 *
 * @param {Object} obj
 * The object
 *
 * @param {Array} keys
 * The key:val pairs to exclude
 */
const excludeFromObj = (obj: { [key: string]: any }, keys: string[]) =>
  Object.keys(obj).reduce((acc: any, x: any) => {
    if (keys.includes(x)) return acc
    acc[x] = obj[x]
    return acc
  }, {})

export default excludeFromObj
