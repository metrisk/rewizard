/**
 * Check whether a step or field has been invalidated
 *
 * @param {Object} obj
 * An object containing all steps/fields
 *
 * @param {String} id
 * The id of the current step/field
 *
 */
const isInvalidated = (obj: any, id: string) => Object.keys(obj).some((x) => obj[x]?.invalidate?.includes(id))

export default isInvalidated
