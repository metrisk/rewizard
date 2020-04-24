import IForm from './types'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { FormContext } from '.'

/**
 * Form
 */
const Form: React.FC<IForm.IProps> = ({ savedData, onSubmit, config, children }) => {
  const [currentStep, setCurrentStep] = useState<string>(null)
  const [steps, setSteps] = useState<IForm.IStepsState>({})
  const [fields, setFields] = useState<IForm.IFieldsState>({})
  const [valid, setValid] = useState(false)

  const resolvedConfig = {
    autoStep: true,
    ...config
  }

  /**
   * Shape an object to form data format
   */
  const shapeData = (obj: any) =>
    Object.keys(obj).reduce(
      (acc: any, x: any) => ({
        ...acc,
        [x]: obj[x].value
      }),
      {}
    )

  /**
   * Shape an object to match field state
   */
  const unshapeData = (obj: any) =>
    Object.keys(obj).reduce(
      (acc: any, x: any) => ({
        ...acc,
        [x]: {
          value: obj[x],
          valid: true
        }
      }),
      {}
    )

  /**
   * Handle the submission of the form
   *
   * @param {Event} e
   * The default form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(shapeData(fields))
  }

  /**
   * On component mount, check for existing data
   */
  useEffect(() => {
    if (!savedData) return
    const data = unshapeData(savedData)
    setFields(data)
  }, [])

  /**
   * On field change, validate the whole form
   */
  useEffect(() => {
    const valid = Object.keys(fields).every((x) => fields[x].valid)
    setValid(valid)
  }, [fields])

  return (
    <FormContext.Provider
      value={{
        currentStep,
        steps,
        fields,
        valid,
        autoStep: resolvedConfig.autoStep,
        setCurrentStep,
        setSteps,
        setFields,
        handleSubmit
      }}
    >
      <FormContext.Consumer>{children}</FormContext.Consumer>
    </FormContext.Provider>
  )
}

export default Form
