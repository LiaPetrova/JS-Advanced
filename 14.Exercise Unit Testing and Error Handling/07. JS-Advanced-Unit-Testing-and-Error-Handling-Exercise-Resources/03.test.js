const lookupChar = require('./03');
const { expect } = require('chai');

// check if the first argument is not a string and return undefined
// check if the second argument is not a number and return undefined

// check if the index is bigger or smaller than the string length and return incorrect index
// if both arg are correct value and type return the char at the specific index

describe('Ckeck Char at specific position', () => {
    it('first argument is a not string', () => {
        expect(lookupChar(5, 0)).to.be.undefined;
    });
    it('second argument is not a number', () => {
        expect(lookupChar('school', 's')).to.be.undefined;
    });
    it('second argument is not an integer', () => {
        expect(lookupChar('school', 5.5)).to.be.undefined;
    });
    it('the argument index is a negative value', () => {
        expect(lookupChar('school', -1)).to.equal('Incorrect index');
    });
    it('both arguments are not the correct type', () => {
        expect(lookupChar(1, 'school')).to.be.undefined;
    });
    it('the argument index is bigger than number of char in the string', () => {
        expect(lookupChar('school', 6)).to.equal('Incorrect index');
    });
    it('the argument index is bigger than number of char in the string', () => {
        expect(lookupChar('school', 7)).to.equal('Incorrect index');
    });
    it('works with arguments that have the correct value and type', () => {
        expect(lookupChar('school', 5)).to.equal('l');
    });
    it('when accepting an empty string', () => {
        expect(lookupChar('', 0)).to.equal('Incorrect index')
    });

});