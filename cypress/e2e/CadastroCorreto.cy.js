import Cadastro from '../support/pages/pagina de cadastro'

describe('Pagina de cadastro', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home')
  })

  const usuarios = require('../fixtures/usuarios.json')
 

    it('Preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
      
      // cy.get('[data-test="register"]').click();
      // cy.get('[data-test="email"]').type(usuario.email)
      // cy.get('[data-test="fullName"]').type(usuario.fullName)
      // cy.get('[data-test="registerUserName"]').type(usuario.userName)
      // cy.get('[data-test="registerPassword"]').type(usuario.password)
      // cy.get('[data-test="btnRegister"]').click();

      Cadastro.acessarPaginaDeCadastro();
      Cadastro.preencherFormulario();
      Cadastro.submeterCadastro();
  })

    //referencia ao que vai ser utilizado para teste. EX: a = link(codigo html), button = botao(codigo html)
                   // |              
    //cy.contains('button', 'Register now').click();
  })
