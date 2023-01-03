describe('About spec', () => {
  beforeEach(() => {
    cy.visit('/about/')
  })
  it('passes', () => {
    cy.wait(1000).get('button').contains('Home').click()
    cy.url().should('include', '/')
  })
})
