describe('Demo APP', () => {
  it('login form is shown initially', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Email')
    cy.contains('Password')
  })

  it('should display an error message when login fails', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[name=email]').type('wrong_email')
    cy.get('input[name=password]').type('wrong-password')
    cy.get('button[type=submit]').click()
    cy.contains('Error en el login')
  })
})
