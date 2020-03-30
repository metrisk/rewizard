import IStep from './types'
import { useEffect, useContext } from 'react'
import { updateStep } from '../../lib/updateStep'
import { FormContext } from '../../context/Form'

/**
 * Step
 */
const Step: React.FC<IStep.IProps> = ({
  id,
  entryPoint = false,
  fieldIds = [],
  next = null,
  nextId = '',
  children
}) => {
  const { steps, fields, setSteps } = useContext(FormContext)

  /**
   * Handle the change of an input
   *
   * @param {Any} value
   * The value of the field
   */
  const handleChange = () => {
    setSteps(updateStep(fields, { id, entryPoint, next, nextId, fieldIds }))
  }

  /**
   * Update steps object when field values change
   */
  useEffect(() => {
    handleChange()
  }, [fields])

  /**
   * If the step doesn't exist in the global state, don't render it
   */
  if (!steps[id]) return null

  return children({
    valid: steps[id]?.valid || false,
    prevId: steps[id]?.prevId,
    nextId: steps[id]?.nextId
  })
}

export default Step
