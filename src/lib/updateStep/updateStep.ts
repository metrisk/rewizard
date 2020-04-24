import IForm from '../../context/Form/types'
import IStep from '../../components/Step/types'
import { validateStep, getNextId, getPrevId, getInvalidatedSteps, excludeFromObj } from '../'

/**
 * Update the steps object with new props
 *
 * @param {String} id
 * The field that is being interacted with
 *
 * @param {Any} value
 * The value of the field
 */
const updateStep = (fields: IForm.IFieldsState, step: any) => (prev: IForm.IStepsState) => {
  /**
   * Process the current step's properties
   */
  const valid = validateStep(prev[step.id], fields)
  const prevId = getPrevId(prev, step.id)
  const nextId = getNextId(step.next, step.nextId, fields)
  const invalidate = getInvalidatedSteps(prev, step.id, nextId)

  const thisStep: IStep.IState = {
    fieldIds: step.fieldIds,
    valid,
    invalidate,
    prevId,
    nextId,
    next: step.next || null
  }

  const allSteps = {
    ...prev,
    [step.id]: {
      ...prev[step.id],
      ...thisStep
    }
  }

  /**
   * Determine whether the current step should remain
   * in the global state
   */
  const show = step.entryPoint || prev[prevId]?.valid || prev[step.id]
  const hide = [...invalidate, !show && step.id].filter(Boolean)
  const final = excludeFromObj(allSteps, hide)

  /**
   * Debugging
   */
  // console.log(`
  //   id: ${config.id},
  //   hide: ${hide},
  //   nextId: ${nextId},
  //   prevId: ${prevId}
  // `)

  return final
}

export default updateStep
