import IForm from '../../context/Form/types'

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
const getRemovedFields = (steps: IForm.IStepsState, fields: IForm.IFieldsState) => {
  const hasSteps = Object.keys(steps).length > 0
  if (!hasSteps) return []

  const allFields = Object.keys(steps).reduce((acc: any, x: any) => [...acc, ...steps[x].fieldIds], [])
  const removed = Object.keys(fields).filter((x: any) => !allFields.includes(x))
  return removed
}

export default getRemovedFields
