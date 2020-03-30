import { expect } from 'chai'

/**
 * Components
 */
import { validateStep } from '.'

describe('----- Validate Step -----', () => {
  it('Should check whether all fields within this step are valid', () => {
    const step = {
      valid: true,
      invalidate: [],
      nextId: '',
      prevId: '',
      fieldIds: ['one', 'two', 'three']
    }
    const fieldsA = {
      one: {
        valid: true,
        value: null,
        stepId: '',
      },
      two: {
        valid: true,
        value: null,
        stepId: '',
      },
      three: {
        valid: true,
        value: null,
        stepId: '',
      }
    }
    const fieldsB = {
      one: {
        valid: true,
        value: null,
        stepId: '',
      },
      two: {
        valid: true,
        value: null,
        stepId: '',
      },
      three: {
        valid: false,
        value: null,
        stepId: '',
      }
    }

    expect(validateStep(step, fieldsA)).to.deep.equal(true)
    expect(validateStep(step, fieldsB)).to.deep.equal(false)
  })
})