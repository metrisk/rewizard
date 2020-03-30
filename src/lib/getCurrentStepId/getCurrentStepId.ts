import IForm from '../../context/Form/types'

/**
 * Using the current field id, get the id of the step we're currently on
 */
const getCurrentStepId = (steps: IForm.IStepsState, id: string) =>
  Object.keys(steps).find((x: string) => steps[x]?.fieldIds?.includes(id)) || null

export default getCurrentStepId
