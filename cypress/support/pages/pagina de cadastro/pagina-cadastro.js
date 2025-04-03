const el = require('./elements').ELEMENTS

class Cadastro{
    acessarPaginaDeCadastro(){
        cy.visit('http://localhost:4200/#/home');
        cy.get('[data-test="register"]').click();
    }

    preencherFormulario(){
        cy.get('[data-test="email"]').type(usuario.email)
        cy.get('[data-test="fullName"]').type(usuario.fullName)
        cy.get('[data-test="registerUserName"]').type(usuario.userName)
        cy.get('[data-test="registerPassword"]').type(usuario.password)
    }

    submeterCadastro(){
        cy.get('[data-test="btnRegister"]').click();
    }
}

export default new Cadastro();