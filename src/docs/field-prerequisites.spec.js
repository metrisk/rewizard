context('Field Prerequisities', () => {
  const formIds = ['examples-field-prerequisites--single-step']

  const formData1 = {
    name: 'Bob',
    age: '25',
    adult: 'male'
  }

  const formData2 = {
    name: 'Jane',
    age: '10',
    child: 'female'
  }

  formIds.forEach((formId) => {
    describe(`Form data - ${formId}`, () => {
      it('Fills out adult route', () => {
        const stub = cy.stub()
        cy.visit(`http://localhost:3000/iframe.html?id=${formId}`)
        cy.on('window:alert', stub)

        cy.get('[name="name"]').type(formData1.name)
        cy.get('[name="age"]').type(formData1.age)
        cy.get('[name="adult"]').type(formData1.adult)

        cy.get('form').submit().then(() => {
          const formResult = JSON.parse(stub.getCall(0).args[0])
          expect(formResult).to.deep.equal(formData1)
        })
      })

      it('Fills out child route', () => {
        const stub = cy.stub()
        cy.visit(`http://localhost:3000/iframe.html?id=${formId}`)
        cy.on('window:alert', stub)

        cy.get('[name="name"]').type(formData2.name)
        cy.get('[name="age"]').type(formData2.age)
        cy.get('[name="child"]').type(formData2.child)

        cy.get('form').submit().then(() => {
          const formResult = JSON.parse(stub.getCall(0).args[0])
          expect(formResult).to.deep.equal(formData2)
        })
      })

      it('Handles a change', () => {
        const stub = cy.stub()
        cy.visit(`http://localhost:3000/iframe.html?id=${formId}`)
        cy.on('window:alert', stub)

        cy.get('[name="name"]').type(formData1.name)
        cy.get('[name="age"]').type(formData1.age)
        cy.get('[name="adult"]').type(formData1.adult)

        cy.get('[name="name"]').clear().type(formData2.name)
        cy.get('[name="age"]').clear().type(formData2.age)
        cy.get('[name="child"]').clear().type(formData2.child)

        cy.get('form').submit().then(() => {
          const formResult = JSON.parse(stub.getCall(0).args[0])
          expect(formResult).to.deep.equal(formData2)
        })
      })
    })
  })
})
