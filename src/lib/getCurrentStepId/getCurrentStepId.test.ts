import { expect } from 'chai'

/**
 * Components
 */
import { getCurrentStepId } from '.'

describe('----- Get Current Step Id -----', () => {
  it('Should get the current stepId based off the current fieldId', () => {
    const steps = {
      one: {
        fieldIds: ['one', 'two'],
        valid: true,
        invalidate: [],
        prevId: null,
        nextId: 'two',
      },
      two: {
        fieldIds: ['three', 'four'],
        valid: true,
        invalidate: [],
        prevId: 'one',
        nextId: 'two',
      },
    }
    const id = 'two'

    expect(getCurrentStepId(steps, id)).to.equal('one')
  })
  
  it('Should return null if no steps', () => {
    const steps = {}
    const id = 'two'
    
    expect(getCurrentStepId(steps, id)).to.equal(null)
  })
})