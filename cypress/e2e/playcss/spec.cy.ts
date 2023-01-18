describe('playcss spec', () => {
  beforeEach(() => {
    cy.visit('/playcss/')
  })

  it('passes', () => {
    cy.get('div[class="card"]').contains('Something awesome')
  })
})
