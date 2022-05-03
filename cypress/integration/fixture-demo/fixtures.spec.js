// Loads a fixed set of data located in a file
// file location: /fixtures/fixtures-demo/sauceCredentials.json

describe('Fixtures Demo', function(){

beforeEach(function(){
    cy.visit("https://www.saucedemo.com/");

    cy.fixture('fixtures-demo/sauceCredentials')
    .then(credentials =>{
        this.credentials = credentials;
    });
});

it('Standard Username', function(){
    cy.get('[data-test="username"]').type(this.credentials.standardUser);
    cy.get('[data-test="password"]').type(this.credentials.systemPassword);
    cy.get('[data-test="login-button"]').click();

    cy.get('.title').should('contain.text', 'Products');
});

it('Incorrect Username', function(){
    cy.get('[data-test="username"]').type(this.credentials.invalidUsername);
    cy.get('[data-test="password"]').type(this.credentials.systemPassword);
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
});

it('Incorrect Password', function(){
    cy.get('[data-test="username"]').type(this.credentials.standardUser);
    cy.get('[data-test="password"]').type(this.credentials.invalidPassword);
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
});

it('Locked out Username', function(){
    cy.get('[data-test="username"]').type(this.credentials.lockedUsername);
    cy.get('[data-test="password"]').type(this.credentials.systemPassword);
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
});

});