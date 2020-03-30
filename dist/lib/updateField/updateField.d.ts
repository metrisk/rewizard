import IForm from '../../context/Form/types';
/**
 * Handle the change of an input
 *
 * @param {String} id
 * The field that is being interacted with
 *
 * @param {Any} value
 * The value of the field
 */
declare const updateField: (steps: IForm.IStepsState, config: any) => (prev: IForm.IFieldsState) => any;
export default updateField;
