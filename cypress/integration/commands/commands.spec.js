/*Cypress comes with its own API for creating custom commands
and overwriting exiting commands. The built in Cypress commands
use the very same API that's defined below
*/

/*First step is creating a new command file under /support/commands.js
Why there? since it is loaded before any test files are evaluated via
an import statement in your supportFile (cypress/support/index.js by default)
*/

describe('Commands Example', function(){

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/')
        cy.typeLogin('standard_user', 'secret_sauce') // It uses the command added on commands.js, then we just need to specify the username and password we want to use
    });

    it('Test', function(){
        cy.log('Test');
    });

    afterEach(function(){
        cy.logout();
    });
});