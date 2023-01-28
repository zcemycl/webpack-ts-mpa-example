describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/login')
  })
  it('passes', () => {
    cy.get('input[name="email"]')
      .type('abc@gmail.com')
      .get('input[name="pwd"]')
      .type('Abcd1234.!')
      .get('button.submit')
      .click()
  })
})
