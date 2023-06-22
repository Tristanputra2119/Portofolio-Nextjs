
describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })
  it('Form Test',()=>{
  cy.fillOutForm({
    name: 'Test',
    email : 'cypress@test.com',
    message : 'Testttt'
  });
  })
})
export{}