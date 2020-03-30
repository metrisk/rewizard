import IForm from '../../context/Form/types'

/**
 * Get the next step Id
 */
const getNextId = (next: any, nextId: any, fields: IForm.IFieldsState) => {
  if (!next) return nextId || null

  const option = next.find((x: any) => {
    if (!fields[x.fieldId]) return
    const matches =
      x.value instanceof RegExp
        ? new RegExp(x.value, 'g').test(fields[x.fieldId].value)
        : x.value === fields[x.fieldId].value

    return matches
  })

  return option ? option.nextId : null
}

export default getNextId
