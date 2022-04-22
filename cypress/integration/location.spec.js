describe('Location Tests', function(){

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');
    });

    it('Should have title Swag Labs', function(){
        cy.title().should('eq', 'Swag Labs')
    });

    it('URL should be https://www.saucedemo.com/', function(){
        cy.url().should('eq', 'https://www.saucedemo.com/')
    });

    it('Should use https', function(){
        cy.location('protocol').should('contains', 'https')
    });

    it('Should have hostname www.saucedemo.com', function(){
        cy.location('hostname').should('eq', 'www.saucedemo.com')
    });

    it('Should redirect to /invetory', function(){
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.location('pathname').should('eq', '/inventory.html');
    });

});