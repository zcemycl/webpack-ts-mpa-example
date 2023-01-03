describe('3d spec', () => {
  beforeEach(() => {
    cy.visit('/3d/')
  })
  it('passes', () => {
    const x = 400
    const y = 400

    const wheelOptions = {
      clientX: x,
      clientY: y,
      deltaX: 0,
      deltaY: -53,
      deltaZ: 0,
      deltaMode: 0,
    }

    // TODO: I tried to assert that when mousemove-ing on the cube, the
    // tooltip becomes visible
    cy.get('canvas[id="root"]')
      .wait(2000)
      .trigger('mousemove', { clientX: 300, clientY: 300 })
      .wait(1000)
      .trigger('wheel', wheelOptions)
      .trigger('mousemove', { clientX: 0, clientY: 0 })
  })
})
