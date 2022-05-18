const { isOddOrEven } = require('./02');
const { expect } = require('chai');

describe('String is with odd or even length checker', () => {
    it('Returns undefined to parameters which are not strings', () => {
        expect(isOddOrEven([1, 2, 3, 4])).to.be.undefined;
        expect(isOddOrEven(1, 2, 3, 4)).to.be.undefined;
    });
    it('Return odd to a string with odd length', () => {
        expect(isOddOrEven('abc')).to.equal('odd');
    });
    it('Return even to a string with even length', () => {
        expect(isOddOrEven('abcd')).to.equal('even');
    });
});