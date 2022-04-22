// Hooks -> Mocha

/* --
1. before() -> Executed at the beginning of the script and only one time
2. beforeEach() -> Executed before each test
3. Test Execution
4. afterEach() -> Executed after each test
5. beforeEach()
6. Test Execution
7. afterEach()
8. after() -> Executed at the end of the script and only one time
*/

//Skip - Only

describe('Hooks Demo', function(){

    before(function(){
        cy.log('Before');
    })

    beforeEach(function(){
        cy.log('Before Each');
    })

    it('Should be test #1', function(){
        console.log('test #1')

    })

    //Skip - It won't be executed
    //Only - It will execute only this test
    it.skip('Should be test #2', function(){
        console.log('test #2')
    })

    it('Should be test #3', function(){
        console.log('test #3')
    })

    afterEach(function(){
        cy.log('After Each')
    })

    after(function(){
        cy.log('After')
    })
})