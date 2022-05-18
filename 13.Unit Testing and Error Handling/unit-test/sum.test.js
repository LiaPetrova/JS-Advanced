const sum = require('./sum');
const { expect } = require('chai');

describe('Sum Checker', () => {
    it('Works with Array of number', () => {
        // expect(sum([1, 2, 3])).to.equal(6);
        // Alternative 
        const numbers = [1, 2, 3];
        const resultSum = 6;
        let actualSum = sum(numbers);
        expect(actualSum).to.equal(resultSum);
    });
    it('Works with negative number', () => {
        // expect(sum([1, 2, 3])).to.equal(6);
        // Alternative 
        const numbers = [0, 0, 0];
        const resultSum = 0;
        let actualSum = sum(numbers);
        expect(actualSum).to.equal(resultSum);
    });
    it('Works with only zeros', () => {
        // expect(sum([1, 2, 3])).to.equal(6);
        // Alternative 
        const numbers = [1, -2, 3];
        const resultSum = 2;
        let actualSum = sum(numbers);
        expect(actualSum).to.equal(resultSum);
    });
});