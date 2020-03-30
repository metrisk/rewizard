import { expect } from 'chai'

/**
 * Components
 */
import { getNextId } from '.'

describe('----- Get Next Id -----', () => {
  it('Should get the correct nextId - linear', () => {
    const step = {
      id: 'one',
      fieldIds: ['one'],
      valid: true,
      invalidate: [],
      prevId: null,
      nextId: 'two'
    }
    const fields = {}

    expect(getNextId(null, step.nextId, fields)).to.equal('two')
  })

  it('Should get the nextId, using direct string match - non-linear', async () => {
    const step = {
      id: 'one',
      fieldIds: ['one'],
      valid: true,
      invalidate: [],
      prevId: null,
      next: [
        { fieldId: 'one', value: 'apple', nextId: 'fruits' },
        { fieldId: 'one', value: 'carrot', nextId: 'veg' },
      ]
    }
    const fieldsA = {
      one: {
        valid: true,
        value: 'apple',
        stepId: 'one'
      }
    }
    const fieldsB: any = {
      one: {
        valid: true,
        value: 'apples123',
        stepId: 'one'
      }
    }
    const fieldsC: any = {
      one: {
        valid: true,
        value: 'carrot',
        stepId: 'one'
      }
    }

    expect(getNextId(step.next, null, fieldsA)).to.equal('fruits')
    expect(getNextId(step.next, null, fieldsB)).to.equal(null)
    expect(getNextId(step.next, null, fieldsC)).to.equal('veg')
  })

  it('Should get the nextId, using regex match - non-linear', async () => {
    const step = {
      id: 'one',
      fieldIds: ['one'],
      valid: true,
      invalidate: [],
      prevId: null,
      nextId: null,
      next: [
        { fieldId: 'one', value: /(apple|banana)$/, nextId: 'fruits' },
        { fieldId: 'one', value: /carrot/, nextId: 'veg' },
      ]
    }
    const fieldsA = {
      one: {
        valid: true,
        value: 'apple',
        stepId: 'one'
      }
    }
    const fieldsB = {
      one: {
        valid: true,
        value: 'banana',
        stepId: 'one'
      }
    }
    const fieldsC = {
      one: {
        valid: true,
        value: 'carrot',
        stepId: 'one'
      }
    }

    expect(getNextId(step.next, null, fieldsA)).to.equal('fruits')
    expect(getNextId(step.next, null, fieldsB)).to.equal('fruits')
    expect(getNextId(step.next, null, fieldsC)).to.equal('veg')
  })
})