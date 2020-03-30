import IForm from '../../context/Form/types'
import IStep from '../../components/Step/types'

/**
 * Validate the current step
 */
const validateStep = (step: IStep.IState, fields: IForm.IFieldsState) =>
  step?.fieldIds.every((x) => fields[x] && fields[x].valid === true) || false

export default validateStep
