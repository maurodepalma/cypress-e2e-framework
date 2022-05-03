// We are working with the cypress-example-todomvc-master app
/* To start the app type the following lines on console:
cd cypress-example-todomvc-master
npm start */
// Added a setTimeout to the line 39 in js/todoModel.js to test the retry-ability

describe('Retry-Ability session', function(){
//Hook - beforeEach
    beforeEach(function(){
        cy.visit('http://localhost:8888/#/'); //Command -> Visits a page

        cy.get('.new-todo') // Command -> Get one or more elements from DOM. (The "." indicates it's a class)
        .type('todo-A{enter}') // Command -> For typing. (Also "{enter}" is a parameter to press Enter)
        .type('todo-B{enter}')
    })

// Test #1
    it('Should create two items', ()=> {
        cy.get('.todo-list li', {timeout:20000}) // Added a timeout to make the retry-ability wait longer
        .should('have.length', 2) // Assertion. (With have.length we can set a specific number of items for the expected result)
    });

// Test #2
    it('Should contain the expected text', ()=> {
        cy.get('.todo-list li')
        .should('have.length', 2)
        .and($li => { // Assertion to not repeat .should from line 20. $ sets an alias
            expect($li.get(0).textContent, 'first-item').to.equal('todo-A') // Search the alias on the first item of the list + searchs a specific string
            expect($li.get(1).textContent, 'second-item').to.equal('todo-B')
        })
    });

});