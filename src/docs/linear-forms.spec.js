context('Single Step', () => {
  const formIds = ['examples-linear-forms--single-step', 'examples-using-config--single-step']

  const formData = {
    name: 'Bob',
    age: '25',
    gender: 'male',
  }

  formIds.forEach((formId) => {
    describe(`Form data - ${formId}`, () => {
      it('Fills out simple form', () => {
        const stub = cy.stub()
        cy.visit(`http://localhost:3000/iframe.html?id=${formId}`)
        cy.on('window:alert', stub)

        cy.get('[name="name"]').type(formData.name)
        cy.get('[name="age"]').type(formData.age)
        cy.get('[name="gender"]').select(formData.gender)

        cy.get('form').submit().then(() => {
          const formResult = JSON.parse(stub.getCall(0).args[0])
          expect(formResult).to.deep.equal(formData)
        })
      })

      it('Handles a change', () => {
        const stub = cy.stub()
        cy.visit(`http://localhost:3000/iframe.html?id=${formId}`)
        cy.on('window:alert', stub)

        cy.get('[name="name"]').type('foo')
        cy.get('[name="age"]').type('123')
        cy.get('[name="gender"]').select('male')

        cy.get('[name="name"]').clear().type(formData.name)
        cy.get('[name="age"]').clear().type(formData.age)
        cy.get('[name="gender"]').select(formData.gender)

        cy.get('form').submit().then(() => {
          const formResult = JSON.parse(stub.getCall(0).args[0])
          expect(formResult).to.deep.equal(formData)
        })
      })
    })
  })
})

context('Multi Step Form', () => {
  const formIds = ['examples-linear-forms--multi-step', 'examples-using-config--multi-step']

  const formData = {
    name: 'Bob',
    age: '25',
    gender: 'male',
    comments: 'no comment'
  }

  formIds.forEach((formId) => {
    describe(`Form data - ${formId}`, () => {
      it('Fills out simple form', () => {
        const stub = cy.stub()
        cy.visit(`http://localhost:3000/iframe.html?id=${formId}`)
        cy.on('window:alert', stub)

        cy.get('[name="name"]').type(formData.name)
        cy.get('[name="age"]').type(formData.age)
        cy.get('[name="gender"]').select(formData.gender)
        cy.get('[name="comments"]').type(formData.comments)

        cy.get('form').submit().then(() => {
          const formResult = JSON.parse(stub.getCall(0).args[0])
          expect(formResult).to.deep.equal(formData)
        })
      })

      it('Handles a change', () => {
        const stub = cy.stub()
        cy.visit(`http://localhost:3000/iframe.html?id=${formId}`)
        cy.on('window:alert', stub)

        cy.get('[name="name"]').type('foo')
        cy.get('[name="age"]').type('123')
        cy.get('[name="gender"]').select('male')
        cy.get('[name="comments"]').type('baz')

        cy.get('[name="name"]').clear().type(formData.name)
        cy.get('[name="age"]').clear().type(formData.age)
        cy.get('[name="gender"]').select(formData.gender)
        cy.get('[name="comments"]').clear().type(formData.comments)

        cy.get('form').submit().then(() => {
          const formResult = JSON.parse(stub.getCall(0).args[0])
          expect(formResult).to.deep.equal(formData)
        })
      })
    })
  })
})
