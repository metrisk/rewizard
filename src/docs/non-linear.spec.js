context('Conditional Routes', () => {
  const formIds = ['examples-non-linear-forms--multi-step']

  const formData1 = {
    'food-group': 'meat',
    animal: 'cow',
    cut: 'steak',
    notes: 'tasty'
  }

  const formData2 = {
    'food-group': 'veg',
    type: 'leafy',
    name: 'spinach',
    notes: 'green'
  }

  formIds.forEach((formId) => {
    describe(`Form data - ${formId}`, () => {
      it('Fills out meat cow route', () => {
        const stub = cy.stub()
        cy.visit(`http://localhost:3000/iframe.html?id=${formId}`)
        cy.on('window:alert', stub)

        cy.get('[name="food-group"]').select(formData1['food-group'])
        cy.get('[name="animal"]').select(formData1.animal)
        cy.get('[name="cut"]').type(formData1.cut)
        cy.get('[name="notes"]').type(formData1.notes)

        cy.get('form').submit().then(() => {
          const formResult = JSON.parse(stub.getCall(0).args[0])
          expect(formResult).to.deep.equal(formData1)
        })
      })

      it('Fills out leafy veg route', () => {
        const stub = cy.stub()
        cy.visit(`http://localhost:3000/iframe.html?id=${formId}`)
        cy.on('window:alert', stub)

        cy.get('[name="food-group"]').select(formData2['food-group'])
        cy.get('[name="type"]').select(formData2.type)
        cy.get('[name="name"]').type(formData2.name)
        cy.get('[name="notes"]').type(formData2.notes)

        cy.get('form').submit().then(() => {
          const formResult = JSON.parse(stub.getCall(0).args[0])
          expect(formResult).to.deep.equal(formData2)
        })
      })

      it('Handles a change', () => {
        const stub = cy.stub()
        cy.visit(`http://localhost:3000/iframe.html?id=${formId}`)
        cy.on('window:alert', stub)

        cy.get('[name="food-group"]').select(formData1['food-group'])
        cy.get('[name="animal"]').select(formData1.animal)
        cy.get('[name="cut"]').type(formData1.cut)
        cy.get('[name="notes"]').type(formData1.notes)

        cy.get('[name="food-group"]').select(formData2['food-group'])
        cy.get('[name="type"]').select(formData2.type)
        cy.get('[name="name"]').clear().type(formData2.name)
        cy.get('[name="notes"]').clear().type(formData2.notes)

        cy.get('form').submit().then(() => {
          const formResult = JSON.parse(stub.getCall(0).args[0])
          expect(formResult).to.deep.equal(formData2)
        })
      })
    })
  })
})
