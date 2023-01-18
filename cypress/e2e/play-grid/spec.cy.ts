describe('play grid spec', () => {
  beforeEach(() => {
    cy.visit('/play-grid/')
  })

  it('test grid', () => {
    cy.get('div[class="card"]').should('have.length', 5).should('have.css', 'display', 'flex')
    cy.wait(5000)
    cy.viewport('iphone-6').get('div[id="root"]').should('have.css', 'display', 'flex')
  })
})
