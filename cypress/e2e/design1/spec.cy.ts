describe('design1 spec', () => {
  beforeEach(() => {
    cy.visit('/design1')
  })
  it('click some nav button', () => {
    cy.get('article[data-index="0"]').should('exist')
    cy.get('button[class="article-nav-button"]').eq(0).click()
    cy.get('button[class="article-nav-button"]').eq(7).click()
  })
})
