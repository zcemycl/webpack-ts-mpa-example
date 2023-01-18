describe('Neon button spec', () => {
  beforeEach(() => {
    cy.visit('/neon-button/')
  })

  it('test button', () => {
    cy.get('a[class="neon-button"]').contains('Neon').click()
  })
})
