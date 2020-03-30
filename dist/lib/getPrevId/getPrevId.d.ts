import IForm from '../../context/Form/types';
/**
 * Get the previous step ID
 *
 * @param {Object} steps
 * The current state of all steps
 *
 * @param {Object} step
 * The current step config
 */
declare const getPrevId: (steps: IForm.IStepsState, currentStep: string) => string;
export default getPrevId;
