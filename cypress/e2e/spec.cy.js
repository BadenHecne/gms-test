/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {

    cy.visit('http://127.0.0.1:8081')
    cy.get('#signup-firstname').type('Baden')
    cy.get('#signup-lastname').type('Hecne')
    cy.get('#signup-email').type('hecnebaden@gmail.com')
    cy.get('#signup-phone').type('11914128179')
    cy.get('#signup-password').type('Baden@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })  

})