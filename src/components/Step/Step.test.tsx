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
import { Step } from '.'

describe('----- Step Component -----', () => {
  it('Renders the correct HTML', () => {
    const nocontext = shallow(<Step id={'email'}>{() => <div></div>}</Step>)
    expect(nocontext.html()).to.equal(null)
  })
})