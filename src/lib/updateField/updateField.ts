import IForm from '../../context/Form/types'
import IField from '../../components/Field/types'
import { validateField, getCurrentStepId, getRemovedFields, excludeFromObj } from '../'

/**
 * Handle the change of an input
 *
 * @param {String} id
 * The field that is being interacted with
 *
 * @param {Any} value
 * The value of the field
 */
const updateField = (steps: IForm.IStepsState, field: any) => (prev: IForm.IFieldsState) => {
  /**
   * Process the current field's properties
   */
  const valid = validateField(prev, field.value, field.validation, field.required)
  const stepId = getCurrentStepId(steps, field.id)
  const removed = getRemovedFields(steps, prev)

  const thisField: IField.IState = {
    value: field?.value,
    valid,
    stepId
  }

  const allFields = {
    ...prev,
    [field.id]: {
      ...prev[field.id],
      ...thisField
    }
  }

  /**
   * Determine whether the current field should remain
   * in the global state
   */
  const show = field.prereq(allFields)
  const hide = [...removed, !show && field.id]
  const final = excludeFromObj(allFields, hide)
  const same = JSON.stringify(prev) == JSON.stringify(final)

  /**
   * Debugging
   */
  // console.log(`
  //   id: ${config.id},
  //   hide: ${hide},
  //   removed: ${removed},
  //   invalidate: ${invalidate},
  //   prereq: ${config.prereq(fields)},
  // `)

  return same ? prev : final
}

export default updateField
