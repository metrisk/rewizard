import IForm from '../../context/Form/types';
/**
 * Update the steps object with new props
 *
 * @param {String} id
 * The field that is being interacted with
 *
 * @param {Any} value
 * The value of the field
 */
declare const updateStep: (fields: IForm.IFieldsState, config: any) => (prev: IForm.IStepsState) => any;
export default updateStep;
