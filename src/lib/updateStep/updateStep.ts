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
const updateStep = (fields: IForm.IFieldsState, config: any) => (prev: IForm.IStepsState) => {
  /**
   * Process the current step's properties
   */
  const valid = validateStep(prev[config.id], fields)
  const prevId = getPrevId(prev, config.id)
  const nextId = getNextId(config.next, config.nextId, fields)
  const invalidate = getInvalidatedSteps(prev, config.id, nextId)

  const thisStep: IStep.IState = {
    fieldIds: config.fieldIds,
    valid,
    invalidate,
    prevId,
    nextId,
    next: config.next || null
  }

  const allSteps = {
    ...prev,
    [config.id]: {
      ...prev[config.id],
      ...thisStep
    }
  }

  /**
   * Determine whether the current step should remain
   * in the global state
   */
  const show = config.entryPoint || prev[prevId]?.valid || prev[config.id]
  const hide = [...invalidate, !show && config.id]
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
