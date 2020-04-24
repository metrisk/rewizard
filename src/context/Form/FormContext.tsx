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
  autoStep: true,
  setCurrentStep: () => {},
  setSteps: () => {},
  setFields: () => {},
  handleSubmit: () => {}
})

export default FormContext
