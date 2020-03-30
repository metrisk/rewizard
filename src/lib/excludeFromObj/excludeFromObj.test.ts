import { expect } from 'chai'

/**
 * Components
 */
import { excludeFromObj } from '.'

describe('----- Exclude From object -----', () => {
  it('Should return a new obj with the supplied keys removed', () => {
    const obj = {
      one: {},
      two: {},
      three: {}
    }
    const keys = ['one', 'two']
    
    expect(excludeFromObj(obj, keys)).to.deep.equal({
      three: {}
    })
  })
})