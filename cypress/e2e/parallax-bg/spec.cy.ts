describe('Parallax Background spec', () => {
  beforeEach(() => {
    cy.visit('/parallax-bg/')
  })
  it('Test Slider', () => {
    cy.get('input').invoke('val', 0).trigger('change')
    cy.wait(5000).get('input').invoke('val', 20).trigger('change')
  })
})
