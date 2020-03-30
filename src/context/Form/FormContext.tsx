import IForm from './types'
import { createContext } from 'react'

/**
 * Initialise context
 */
const FormContext = createContext<IForm.IContext>({
  currentStep: null,
  steps: {},
  fields: {},
  valid: false,
  setCurrentStep: () => {},
  setSteps: () => {},
  setFields: () => {},
  handleSubmit: () => {}
})

export default FormContext
