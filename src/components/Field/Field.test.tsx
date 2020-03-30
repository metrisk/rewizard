import 'jsdom-global/register'
import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import { configure, shallow } from 'enzyme'

/**
 * Setup
 */
configure({ adapter: new Adapter() })

/**
 * Components
 */
import { Field } from '.'

describe('----- Field Component -----', () => {
  it('Renders the correct HTML', () => {
    const Input = ({ type }) => <input type={type} />
    const nocontext = shallow(<Field id={'email'}>{() => <Input type={'email'} />}</Field>)
    expect(nocontext.html()).to.equal(null)
  })
})