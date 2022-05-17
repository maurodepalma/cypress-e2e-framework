describe('Intercept Demo', () => {

    beforeEach(function(){
        cy.visit('http://localhost:8888/')
    });

    it('Initial validation', () => {
        cy.get('.todo-list')
        .should('have.lenght', 2)
        .and('contain', 'todo-a')
        .and('contain', 'todo-b')
    });
});