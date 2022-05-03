// Variables
let add = (a,b) => a+b;
let substract = (a,b) => a-b;
let divide = (a,b) => a/b;
let multiply = (a,b) => a*b;

// Describe - Context
describe('Unit testing for math app', () =>{
    context('Math with Positive numbers', () =>{
        // It - Specify
        it('should add positive numbers', () =>{
            expect(add(1,2)).to.eq(3);
        });

        it('should substract positive numbers', () =>{
            expect(substract(4,2)).to.eq(2);
        });
        
        it('should divide positive numbers', () =>{
            expect(divide(4,2)).to.eq(2);
        });
        
        it('should multiply positive numbers', () =>{
            expect(multiply(2,2)).to.eq(4);
        });
    });
    context('Math with Decimal numbers', () =>{
        it('should add decimal numbers', () =>{
            expect(add(2.2,2.2)).to.eq(4.4);
        });
        it('should substract decimal numbers', () =>{
            expect(substract(4.4,2.2)).to.eq(2.2);
        });
    }); 
});