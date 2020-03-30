import IForm from '../../context/Form/types'
import IField from '../../components/Field/types'

/**
 * Validate the current step
 */
const validateField = (
  fields: IForm.IFieldsState,
  value: any,
  validation: IField.IProps['validation'],
  required: boolean
) => {
  const hasAValue = value !== null && value !== '' && value !== undefined

  if (hasAValue) {
    return validation(fields, value)
  }

  return required ? false : true
}

export default validateField
