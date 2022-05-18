// App for this project is under /testing-lists folder. repo: https://github.com/maurodepalma/testing-lists
// Mock API responses may be useful during developmenr and testing when live data is either unavailable or unreliable
// While designing an API, you can use mock APIs to work concurrently on the front and back-end, as well as to gather feedback from developers.
describe('Intercept Demo', () => {

    it('Initial validation', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#todo-list li')
        .should('have.length', 2)
        .and('contain', 'buy milk')
        .and('contain', 'wash dishes')
    });

    it('Mocked API Response', ()=> {

        cy.intercept('GET', '/todos', {
            fixture: 'intercept/interceptFixture.json'
        }).as('getTodos-Fixture'); //This is an alias.

        cy.visit('http://localhost:3000/')

        cy.get('#todo-list li')
        .should('have.length', 3)
        .and('contain', 'todo-a')
        .and('contain', 'todo-b')
        .and('contain', 'todo-c')
    });


});