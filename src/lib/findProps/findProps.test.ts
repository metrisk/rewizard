import { expect } from 'chai'

/**
 * Components
 */
import { findProps } from '.'

describe('----- Find Props -----', () => {
  it('Should get all React children\'s props of a given key (id)', () => {
    const arr = [
      { 
        props: {
          id: 'test1'
        }
      },
      {
        props: {
          children: [
            { 
              props: {
                id: 'test2'
              }
            },
            { 
              props: {
                children: [
                  {
                    props: {
                      id: 'test3'
                    }
                  }
                ]
              }
            },
            { 
              props: {
                children: [
                  {
                    props: {
                      children: [
                        {
                          props: {
                            id: 'test4'
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
    const key = 'id'

    expect(findProps(arr, key)).to.deep.equal(['test1', 'test2', 'test3', 'test4'])
  })
})