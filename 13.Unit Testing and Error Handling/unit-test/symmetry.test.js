const { isSymmetric } = require('./symmetry');
const { expect } = require('chai');
describe('', () => {
    describe('Happy Path!', () => {
        it('Works with symmetric Array with even count of numbers', () => {
            expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
        });
        it('Works with symmetric Array with odd count of numbers', () => {
            expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
        });
        it('Works with symmetric Array from strings with odd count of numbers', () => {
            expect(isSymmetric(['a', 'b', 'c', 'b', 'a'])).to.be.true;
        });
        it('Works with symmetric Array from strings with even count of numbers', () => {
            expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
        });
    });
    describe('Throw Error', () => {
        it('Does not work with mixed Array from strings and numbers with odd count of elements', () => {
            expect(isSymmetric([1, '2', '3', 2, '1'])).to.be.false;
        });
        it('Does not work with mixed Array from strings and numbers with even count of elements', () => {
            expect(isSymmetric([1, '2', 2, '1'])).to.be.false;
        });
        it('Does not work with arguments that are numbers', () => {
            expect(isSymmetric(2, 3, 3, 2)).to.be.false;
        });
        it('Does not work with argument that is an object', () => {
            expect(isSymmetric({ a: 2, b: 3, a: 2 })).to.be.false;
        });
    });
});