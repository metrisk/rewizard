import IForm from '../../context/Form/types';
/**
 * Get any fields that have been removed because of
 * its parent step being removed
 *
 * @param {Object} steps
 * The global steps object
 *
 * @param {Object} fields
 * The global fields object
 */
declare const getRemovedFields: (steps: IForm.IStepsState, fields: IForm.IFieldsState) => string[];
export default getRemovedFields;
