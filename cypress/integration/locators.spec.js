// Variables for login
let username = 'standard_user';
let password = 'secret_sauce';

describe('Locators in Cypress', function(){
    beforeEach(function(){
        cy.visit("https://www.saucedemo.com/");
    })

    // GET method is used to select CSS locators
    it('GET method', function(){
        cy.get("#user-name").type(username); // Searching for id (#)
        cy.get("input#password").type(password); // Searching input + id
        cy.get('[data-test="login-button"]').click(); // Searching for another selector
    });

    // At saucedemo.com there are only 3 inputs: 1. username 2. password 3. login button
    it('EQ/First/Last method', function(){
        cy.get('input').first().type(username); // We don't specify the attribute, instead we get the first item of the DOM (username is first input on the DOM)
        cy.get('input').eq(1).type(password); // eq.(1) selects a specific item from the list order, in this case is the #2 input from the list of the DOM (password)
        cy.get('input').last().click(); // last() selects the last item of the list of inputs from the DOM (login-button)
    });

    // Filter helps us to get an element from DOM that matches a specific selector
    it('FILTER method', function(){
        cy.get('input').filter('[type="text"]').type(username); // Using get to select all inputs and then using filter to specify a selector
        cy.get('input').filter('[type="password"]').type(password);
        cy.get('input').filter('[type="submit"]').click();
    });

    // Find method get all elements from a specific selector
    it('FIND method', function(){
        cy.get('form').find('input').first().type(username); // Using get to select <form> and using find to select all the inputs from that parent
        cy.get('form').find('input').eq(1).type(password);
        cy.get('form').find('input').last().click();
    });

    // Parent method gets the parent from an element
    it('PARENT mwthod', function(){
        cy.get('form').parent().should('have.class', 'login-box') // We select <form> and then their parent and validate that parent has a class "login-box"
    })
});