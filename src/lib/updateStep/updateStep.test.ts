import { expect } from 'chai'

/**
 * Components
 */
import { updateStep } from './'

describe('----- Update Step -----', () => {
  it('Should load the first step into the global state', () => {
    const step = {
      id: 'one',
      entryPoint: true,
      fieldIds: ['one'],
      nextId: 'end',
      prevId: null,
      valid: false,
      invalidate: null
    }
    const prev = {}
    const fields = {
      one: {
        value: null,
        valid: false,
        stepId: 'one',
      }
    }

    expect(updateStep(fields, step)(prev)).to.deep.equal({
      one: {
        fieldIds: ['one'],
        invalidate: [],
        valid: false,
        prevId: null,
        nextId: 'end',
        next: null
      }
    })
  })

  it('Should load the next step into the global state - linear', () => {
    const step = {
      id: 'two',
      fieldIds: ['two'],
      nextId: 'end',
      prevId: null,
      valid: false,
      invalidate: null
    }
    const prev = {
      one: {
        fieldIds: ['one'],
        invalidate: [],
        valid: true,
        prevId: null,
        nextId: 'two',
      }
    }
    const fields = {
      one: {
        value: 'test',
        valid: true,
        stepId: 'one',
      },
      two: {
        value: null,
        valid: false,
        stepId: 'two',
      }
    }

    expect(updateStep(fields, step)(prev)).to.deep.equal({
      one: {
        fieldIds: ['one'],
        invalidate: [],
        valid: true,
        prevId: null,
        nextId: 'two',
      },
      two: {
        fieldIds: ['two'],
        invalidate: [],
        valid: false,
        prevId: 'one',
        nextId: 'end',
        next: null
      }
    })
  })
  

  it('Should load the next step into the global state - non-linear', () => {
    const step = {
      id: 'one',
      fieldIds: ['one'],
      next: [
        { fieldId: 'one', value: 'two_a', nextId: 'two_a'},
        { fieldId: 'one', value: 'two_b', nextId: 'two_b'},
      ]
    }
    const prev = {
      one: {
        entryPoint: true,
        fieldIds: ['one'],
        invalidate: [],
        valid: false,
        prevId: null,
        nextId: null,
        next: [
          { fieldId: 'one', value: 'two_a', nextId: 'two_a'},
          { fieldId: 'one', value: 'two_b', nextId: 'two_b'},
        ]
      }
    }
    const fields = {
      one: {
        value: 'two_a',
        valid: true,
        stepId: 'one',
      },
      two: {
        value: null,
        valid: false,
        stepId: 'two_a',
      }
    }

    expect(updateStep(fields, step)(prev)).to.deep.equal({
      one: {
        entryPoint: true,
        fieldIds: ['one'],
        invalidate: ['two_b'],
        valid: true,
        prevId: null,
        nextId: 'two_a',
        next: [
          { fieldId: 'one', value: 'two_a', nextId: 'two_a'},
          { fieldId: 'one', value: 'two_b', nextId: 'two_b'},
        ]
      }
    })
  })
})