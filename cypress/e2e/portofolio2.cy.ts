describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })
  it('Navbar test',()=>{
    cy.get('.active').click()
    cy.get('.flex-1 > .items-center > :nth-child(2)').click()
    cy.get('.flex-1 > .items-center > :nth-child(3)').click()
    cy.get('.flex-1 > .items-center > :nth-child(4)').click()
  })
  it('Project Test',()=>{
    cy.get('#project1').click()
    cy.go('back')
    cy.visit('http://localhost:3000')
    cy.get('#project2').click()
    cy.go('back')
    cy.visit('http://localhost:3000')
    cy.get('#project3').click()
    cy.go('back')
  it('button test',()=>{
    cy.get('#home').screenshot()
    cy.get('#home').click()
  })
  })
  it('Form Test',()=>{
  cy.fillOutForm({
    name: 'Cypress',
    email : 'cypress@email.com',
    message : 'Ok'
  });
  })
  it('Responsive Test',()=>{
    cy.viewport('iphone-xr').screenshot()
  })
})
export{}