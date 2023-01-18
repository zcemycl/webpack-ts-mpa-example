describe('glitch-text spec', () => {
  beforeEach(() => {
    cy.visit('/glitch-text')
  })

  it('visit only', () => {
    cy.get('p[class="glitch"]').contains('Hello World!!')
    cy.get('span[aria-hidden="true"]').contains('Hello World!!')
  })
})
