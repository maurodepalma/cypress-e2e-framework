describe('Retry-Ability session', function(){
//Hook - beforeEach
    beforeEach(function(){
        cy.visit('http://localhost:8888/#/'); //Command -> Visits a page

        cy.get('.new-todo') // Command -> Get one or more elements from DOM. (The "." indicates it's a class)
        .type('todo-A{enter}') // Command -> For typing. (Also "{enter}" is a parameter to press Enter)
        .type('todo-B{enter}')
    })

    it('Should create two items', ()=> {
        cy.get('.todo-list li')
        .should('have.length', 2) // Assertion. (With have.length we can set a specific number of items for the expected result)
    });

})