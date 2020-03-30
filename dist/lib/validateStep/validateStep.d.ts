import IForm from '../../context/Form/types';
import IStep from '../../components/Step/types';
/**
 * Validate the current step
 */
declare const validateStep: (step: IStep.IState, fields: IForm.IFieldsState) => boolean;
export default validateStep;
