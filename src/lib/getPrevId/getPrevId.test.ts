import { expect } from 'chai'

/**
 * Components
 */
import { getPrevId } from '.'

describe('----- Get Prev Id -----', () => {
  it('Should get the correct prevId (basic)', () => {
    const steps = {
      one: {
        fieldIds: ['one'],
        invalidate: ['two_a'],
        valid: true,
        prevId: null,
        nextId: 'two'
      },
      two_a: {
        fieldIds: ['one'],
        invalidate: [],
        valid: true,
        prevId: null,
        nextId: 'three'
      },
      two_b: {
        fieldIds: ['one'],
        valid: true,
        invalidate: [],
        prevId: null,
        nextId: 'three'
      },
      three: {
        fieldIds: ['one'],
        valid: true,
        invalidate: [],
        prevId: null,
        nextId: 'four'
      }
    }
    const currentStep = 'three'

    expect(getPrevId(steps, currentStep)).to.equal('two_b')
  })
})