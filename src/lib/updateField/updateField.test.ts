import { expect } from 'chai'

/**
 * Components
 */
import { updateField } from '.'

describe('----- Update Field -----', () => {
  it('Should load the first field into the global state with all properties', () => {
    const steps = {}
    const prev = {}
    const config = { 
      id: 'one', 
      validation: () => true, 
      value: 'test', 
      prereq: () => true 
    }
    
    expect(updateField(steps, config)(prev)).to.deep.equal({
      one: {
        stepId: null,
        valid: true,
        value: 'test'
      }
    })
  })
  
  it('Should update the global state with a changed value', () => {
    const steps = {}
    const prev = {
      one: {
        valid: true,
        value: 'test'
      }
    }
    const config = { 
      id: 'one', 
      validation: () => true, 
      value: 'changed', 
      prereq: () => true 
    }
    
    expect(updateField(steps, config)(prev)).to.deep.equal({
      one: {
        stepId: null,
        valid: true,
        value: 'changed'
      }
    })
  })
  
  it('Should include a field that has a prerequisite that is met', () => {
    const steps = {
      one: {
        fieldIds: ['one'],
        valid: true,
        invalidate: [],
        prevId: null,
        nextId: 'two',
      },
      two: {
        fieldIds: ['two'],
        valid: true,
        invalidate: [],
        prevId: 'one',
        nextId: 'end',
      },
    }
    const config = { 
      id: 'two', 
      validation: () => true, 
      value: 'test2', 
      prereq: (fields) => fields.one.value === 'test' 
    }
    const prev = {
      one: {
        stepId: 'one',
        valid: true,
        value: 'test'
      },
      two: {
        stepId: 'two',
        valid: true,
        value: null
      }
    }

    expect(updateField(steps, config)(prev)).to.deep.equal({
      one: {
        stepId: 'one',
        valid: true,
        value: 'test'
      },
      two: {
        stepId: 'two',
        valid: true,
        value: 'test2'
      }
    })
  })
  
  it('Should exclude a field that has a prerequisite that isn\'t met', () => {
    const steps = {
      one: {
        fieldIds: ['one'],
        valid: true,
        invalidate: [],
        prevId: null,
        nextId: 'two',
      },
      two: {
        fieldIds: ['two'],
        valid: true,
        invalidate: [],
        prevId: 'one',
        nextId: 'end',
      },
    }
    const config = { 
      id: 'two', 
      validation: () => true, 
      value: 'test2', 
      prereq: (fields) => fields.one.value === 'test' 
    }
    const prev = {
      one: {
        stepId: 'one',
        valid: true,
        value: 'not test'
      },
      two: {
        stepId: 'two',
        valid: true,
        value: null
      }
    }

    expect(updateField(steps, config)(prev)).to.deep.equal({
      one: {
        stepId: 'one',
        valid: true,
        value: 'not test'
      }
    })
  })
  
  it('Should exclude fields that don\'t belong to a step', () => {
    const steps = {
      one: {
        fieldIds: ['one'],
        valid: true,
        invalidate: [],
        prevId: null,
        nextId: '',
      }
    }
    const config = { 
      id: 'two', 
      validation: () => true, 
      value: 'test2', 
      prereq: (fields) => fields.one.value === 'test' 
    }
    const prev = {
      one: {
        stepId: 'one',
        valid: true,
        value: 'not test'
      },
      two: {
        stepId: 'two',
        valid: true,
        value: null
      }
    }

    expect(updateField(steps, config)(prev)).to.deep.equal({
      one: {
        stepId: 'one',
        valid: true,
        value: 'not test'
      }
    })
  })
})