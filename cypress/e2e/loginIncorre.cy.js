describe('Pagina de login', () => {
      
      beforeEach(() =>{
        cy.visit('http://localhost:4200/#/home')

        cy.intercept('POST', 'https//localhost:4200', {
          statusCode: 400
        }).as('stubPost')
          
      })
      
      
      it('Verificar mensagem de campos obrigatórios', () => {
      cy.contains('User name is required').should('be.visible');
      cy.contains('Password is required').should('be.visible');
    })

      it('Deve falhar mesme que os campos estejam preenchidos corretamente', () => {
      cy.login('carowl', '12345678');
      cy.wait('@stubPost');
    })
  })