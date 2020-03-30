import 'jsdom-global/register'
import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import { configure, mount } from 'enzyme'

/**
 * Setup
 */
configure({ adapter: new Adapter() })

/**
 * Components
 */
import { Form } from '.'
import { Field } from '../../components/Field'

describe('----- Form Component -----', () => {
  it('Renders the correct HTML', () => {
    const Input = ({ type }) => <input type={type} />
    const nocontext = mount(
      <Form onSubmit={() => {}}>
        {() => (
          <form>
            <Field id={'name'}>{() => <Input type={'text'} />}</Field>
            <Field id={'age'}>{() => <Input type={'number'} />}</Field>
            <Field id={'gender'}>{() => <Input type={'text'} />}</Field>
            <button>Submit</button>
          </form>
        )}
      </Form>
    )
    expect(nocontext.html()).to.equal('<form><input type="text"><input type="number"><input type="text"><button>Submit</button></form>')
  })
})