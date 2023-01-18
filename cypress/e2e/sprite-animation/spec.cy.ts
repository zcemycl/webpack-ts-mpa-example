describe('Sprite animation spec', () => {
  beforeEach(() => {
    cy.visit('/sprite-animation/')
  })

  it('Test select option', () => {
    cy.wait(2000)
    cy.get('select').select('Sit').select('Dizzy')
  })
})
