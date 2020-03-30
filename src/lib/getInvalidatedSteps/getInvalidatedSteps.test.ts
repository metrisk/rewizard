import { expect } from 'chai'

/**
 * Components
 */
import { getInvalidatedSteps } from '.'

describe('----- Get Invalidated Steps -----', () => {
  it('Should get the stepIds which have been invalidated by the current nextId', async () => {
    const steps = {
      one: {
        fieldIds: ['meat', 'veg'],
        valid: true,
        invalidate: [],
        prevId: null,
        nextId: 'two',
        next: [
          { fieldId: 'one', value: 'meat', nextId: 'meat' },
          { fieldId: 'one', value: 'veg', nextId: 'veg' },
        ]
      },
      meat: {
        fieldIds: ['animal'],
        valid: true,
        invalidate: [],
        prevId: null,
        nextId: 'two',
        next: [
          { fieldId: 'animal', value: 'pig', nextId: 'pig' },
        ]
      },
      veg: {
        fieldIds: ['type'],
        valid: true,
        invalidate: [],
        prevId: null,
        nextId: 'two',
        next: [
          { fieldId: 'type', value: 'leafy', nextId: 'leafy' },
        ]
      },
      pig: {
        fieldIds: ['pig'],
        valid: true,
        invalidate: [],
        prevId: null,
        nextId: 'end'
      },
      leafy: {
        fieldIds: ['leafy'],
        valid: true,
        invalidate: [],
        prevId: null,
        nextId: 'end'
      }
    }
    const id = 'one'
    const nextIdA = 'meat'
    const nextIdB = 'veg'
    
    expect(getInvalidatedSteps(steps, id, nextIdA)).to.deep.equal(['veg', 'leafy'])
    expect(getInvalidatedSteps(steps, id, nextIdB)).to.deep.equal(['meat', 'pig'])
  })
})