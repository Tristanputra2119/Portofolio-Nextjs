describe('Responsive Test', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })
  it('Responsive',()=>{
      cy.viewport('iphone-xr')
    })
    it('Navbar Test',()=>{
      cy.get('')
    })
})
export{}