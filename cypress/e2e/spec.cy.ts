describe('test website', () => {
  it('sukses!', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Home').click
    cy.go('back')
    cy.contains('About').click
    cy.contains('Project').click
    cy.contains('Contact').click
  })
  
})
export{}