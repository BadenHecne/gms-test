Cypress.Commands.add('preencherCadastro', (firstname, lastname, email, phone, password) => {
    cy.get('#signup-firstname').type(firstname)
    cy.get('#signup-lastname').type(lastname)
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type(phone)
    cy.get('#signup-password').type(password)
    cy.get('#signup-button').click()
  })
