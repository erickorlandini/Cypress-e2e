const { expect } = require("chai");

describe('Api Alurapic', () => {
   /* it('Dados da Api', () => {
        cy.request({
            method:'POST',
            url:'https//localhost:3000/user/login',
            body: cypress.env()
        }).then((res) => {
            expect(res.status).to.calledBefore.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(4)
        })  
    })*/
  
    it('Fotos do usuario', () => {
        const tempoEsperado = Math.random() * 50;


        cy.request({
            method:'GET',
            url:'https//localhost:3000/carowl/photos',
        }).then((res) => {
            expect(res.status).to.calledBefore.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('porquinho')
            expect(res.duration).to.be.lte(tempoEsperado)
        }) 
    })   

})



