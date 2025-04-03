const { beforeEach } = require("mocha")

describe('Pagina de login', () => {

    beforeEach(() => {
        cy.visit('https://localhost:4200/#/home')                                                                                                                           
    })
    
    it('Preecher os campos de login corretamente para realizar login', () => {
     cy.login('catarinap', 'catarina123')
    })

    
  })