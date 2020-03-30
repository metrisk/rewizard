import { expect } from 'chai'

/**
 * Components
 */
import { getRemovedFields } from '.'

describe('----- Get Removed Fields -----', () => {
  it('Should get all the fieldIds which don\'t belong to a step', async () => {
    const steps = {
      one: {
        fieldIds: ['apple', 'carrot'],
        valid: true,
        invalidate: [],
        prevId: null,
        nextId: 'two',
      },
      two: {
        fieldIds: ['orange'],
        valid: true,
        invalidate: [],
        prevId: null,
        nextId: 'two',
      }
    }
    const fields = {
      apple: {
        stepId: null,
        valid: true,
        value: 'test'
      },
      carrot: {
        stepId: null,
        valid: true,
        value: 'test'
      },
      banana: {
        stepId: null,
        valid: true,
        value: 'test'
      },
      orange: {
        stepId: null,
        valid: true,
        value: 'test'
      },
    }
    
    expect(getRemovedFields(steps, fields)).to.deep.equal(['banana'])
  })
})