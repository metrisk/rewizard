import IForm from '../../context/Form/types'
import { isInvalidated } from '../isInvalidated'

/**
 * Get the previous step ID
 *
 * @param {Object} steps
 * The current state of all steps
 *
 * @param {Object} step
 * The current step config
 */
const getPrevId = (steps: IForm.IStepsState, currentStep: string) => {
  const allPrevIds = Object.keys(steps).filter((x) => steps[x]?.nextId === currentStep) || null
  const validPrev = allPrevIds.find((x) => !isInvalidated(steps, x))
  return validPrev || null
}

export default getPrevId
