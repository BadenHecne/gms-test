/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/') // Executa antes de cada teste
  });

  afterEach(() =>{
    //cy.screenshot();
  });   

 context('Cenários positivos', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `baden${Date.now()}@teste.com`
    cy.preencherCadastro('Baden', 'Hecne', email, '11914128179', 'Baden@123')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})   

  context('Cenários negativos', () => {
    const cenariosInvalidos = [
      { firstname: '', lastname: 'Hecne', mensagem: 'Nome não pode estar vazio' },
      { firstname: 'Baden', lastname: '', mensagem: 'Sobrenome não pode estar vazio' },
      { firstname: 'Baden', lastname: 'Hecne', email: '', mensagem: 'E-mail não pode estar vazio' },
      { firstname: 'Baden', lastname: 'Hecne', email: 'badenbaden@gmail.com', senha: '', mensagem: 'Senha não pode estar vazia' },
      { firstname: '123', lastname: 'Hecne', mensagem: 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços' },
      { firstname: 'Baden', lastname: '123', mensagem: 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços' },
      { firstname: 'Baden', lastname: 'Hecne', email: '123@123', mensagem: 'E-mail deve ser um email válido' },
      { firstname: 'Baden', lastname: 'Hecne', email: 'badenbaden@hotmail.com', senha: 'nirvanna@3310', mensagem: 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)' },
      { firstname: 'Baden', lastname: 'Hecne', email: 'badenbaden@hotmail.com', telefone: 'ABCDEFGHIJL', senha: 'Nirvanna@3310', mensagem: 'Telefone deve conter apenas números' },
    ]

    cenariosInvalidos.forEach(({ firstname, lastname, email, telefone, senha, mensagem }) => {
      it(`Deve exibir mensagem: ${mensagem}`, () => {
        if (firstname) cy.get('#signup-firstname').type(firstname)
        if (lastname) cy.get('#signup-lastname').type(lastname)
        if (email) cy.get('#signup-email').type(email)  
        if (telefone) cy.get('#signup-phone').type(telefone) 
        if (senha) cy.get('#signup-password').type(senha)  

        cy.get('#signup-button').click()
        cy.get('#signup-response', { timeout: 10000 }).should('contain', mensagem)
      })
    })
  })
})
