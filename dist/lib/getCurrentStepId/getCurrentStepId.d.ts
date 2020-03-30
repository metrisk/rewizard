import IForm from '../../context/Form/types';
/**
 * Using the current field id, get the id of the step we're currently on
 */
declare const getCurrentStepId: (steps: IForm.IStepsState, id: string) => string;
export default getCurrentStepId;
