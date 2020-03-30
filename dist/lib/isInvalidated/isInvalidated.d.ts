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
declare const isInvalidated: (obj: any, id: string) => boolean;
export default isInvalidated;
