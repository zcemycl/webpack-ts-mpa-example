describe('Home spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('passes', () => {
    cy.get('button').contains('New Number').click()
    cy.get('button').contains('About').click()
    cy.url().should('include', '/about/')
  })
})
