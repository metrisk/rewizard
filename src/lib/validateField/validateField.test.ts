import { expect } from 'chai'

/**
 * Components
 */
import { validateField } from '.'

describe('----- Validate Field -----', () => {
  it('Should validate an optional field with no rule', () => {
    const fields = {}
    const value = null
    const validation = () => true
    const required = false

    expect(validateField(fields, value, validation, required)).to.equal(true)
  })

  it('Should validate an optional field with a regex rule', () => {
    const fields = {}
    const valueA = 'cat'
    const valueB = null
    const valueC = 'dog'
    const validation = (fields, value) => new RegExp(/cat/).test(value)
    const required = false

    expect(validateField(fields, valueA, validation, required)).to.equal(true)
    expect(validateField(fields, valueB, validation, required)).to.equal(true)
    expect(validateField(fields, valueC, validation, required)).to.equal(false)
  })

  it('Should validate a required field with no rule', () => {
    const fields = {}
    const value = null
    const validation = () => true
    const required = true

    expect(validateField(fields, value, validation, required)).to.equal(false)
  })

  it('Should validate a required field with a regex rule', () => {
    const fields = {}
    const valueA = 'cat'
    const valueB = null
    const valueC = 'dog'
    const validation = (fields, value) => new RegExp(/cat/).test(value)
    const required = true

    expect(validateField(fields, valueA, validation, required)).to.equal(true)
    expect(validateField(fields, valueB, validation, required)).to.equal(false)
    expect(validateField(fields, valueC, validation, required)).to.equal(false)
  })

  it('Should validate a field based on another field', () => {
    const fieldsA = {
      one: {
        value: 'test',
        valid: true,
        stepId: null
      }
    }
    const fieldsB = {
      one: {
        value: 'not test',
        valid: true,
        stepId: null
      }
    }
    const value = 'cat'
    const validation = (fields) => fields.one.value === 'test'
    const required = false

    expect(validateField(fieldsA, value, validation, required)).to.equal(true)
    expect(validateField(fieldsB, value, validation, required)).to.equal(false)
  })
})