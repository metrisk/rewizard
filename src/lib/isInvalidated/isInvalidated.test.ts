import { expect } from 'chai'

/**
 * Components
 */
import { isInvalidated } from '.'

describe('----- Is Invalidated -----', () => {
  it('Should check whether a stepId has been invalidated by any other step', () => {
    const obj = {
      one: {
        valid: true,
        invalidate: ['three']
      },
      two: {
        valid: true,
        invalidate: ['one', 'three']
      },
      three: {
        valid: true,
      }
    }
    const idA = 'three'
    const idB = 'two'

    expect(isInvalidated(obj, idA)).to.equal(true)
    expect(isInvalidated(obj, idB)).to.equal(false)
  })
})