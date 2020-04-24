import IField from './types'
import { useEffect, useContext } from 'react'
import { updateField } from '../../lib/updateField'
import { FormContext } from '../../context/Form'

/**
 * Field
 */
const Field: React.FC<IField.IProps> = ({
  id,
  required = false,
  validation = () => true,
  prereq = () => true,
  children
}) => {
  const { currentStep, steps, autoStep, fields, setCurrentStep, setFields } = useContext(FormContext)

  /**
   * Handle the change of an input
   *
   * @param {Any} value
   * The value of the field
   */
  const handleChange = (value: any = null) => {
    const fieldStepId = fields[id]?.stepId
    const sameStep = currentStep === fieldStepId
    setFields(updateField(steps, { id, required, validation, prereq, value }))

    if (sameStep) return
    if (autoStep && fieldStepId) setCurrentStep(fieldStepId)
  }

  /**
   * On mount, load field and its config into the global state
   */
  useEffect(() => {
    handleChange()
  }, [])

  /**
   * On mount, load field and its config into the global state
   */
  useEffect(() => {
    handleChange(fields[id]?.value)
  }, [fields])

  /**
   * If the field doesn't exist in the global state, don't render it
   */
  if (!fields[id]) return null

  return children({
    name: id,
    valid: fields[id].valid,
    value: fields[id].value,
    onChange: (value) => handleChange(value)
  })
}

export default Field
