describe('svg button spec', () => {
  beforeEach(() => {
    cy.visit('/svg-button/')
  })
  it('passes', () => {
    cy.get('button[class="button-one"]').click()
    cy.get('button[class="button-two"]').click()
    cy.get('button[class="button-three"]').click()
  })
})
