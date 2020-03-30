context('Saved Data', () => {
  const formIds = ['examples-saved-data--single-step']

  const savedData = {
    name: 'Jane',
    age: 23,
    gender: 'female'
  }

  const formData = {
    name: 'Bob',
    age: '25',
    gender: 'male',
  }

  formIds.forEach((formId) => {
    describe(`Form data - ${formId}`, () => {
      it('Checks for pre-populated data', () => {
        const stub = cy.stub()
        cy.visit(`http://localhost:3000/iframe.html?id=${formId}`)
        cy.on('window:alert', stub)

        cy.get('form').submit().then(() => {
          const formResult = JSON.parse(stub.getCall(0).args[0])
          expect(formResult).to.deep.equal(savedData)
        })
      })

      it('Handles a change', () => {
        const stub = cy.stub()
        cy.visit(`http://localhost:3000/iframe.html?id=${formId}`)
        cy.on('window:alert', stub)

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
