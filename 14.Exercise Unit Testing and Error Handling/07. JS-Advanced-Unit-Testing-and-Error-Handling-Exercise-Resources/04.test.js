const mathEnforcer = require('./04');
const { expect } = require('chai');
const { closeTo } = require('chai');

// ⦁	addFive(num) - A function that accepts a single parameter:
// ⦁	If the parameter is NOT a number, the function should return undefined.
// ⦁	If the parameter is a number, add 5 to it, and return the result.
// ⦁	subtractTen(num) - A function that accepts a single parameter:
// ⦁	If the parameter is NOT a number, the function should return undefined.
// ⦁	If the parameter is a number, subtract 10 from it, and return the result.
// ⦁	sum(num1, num2) - A function that accepts two parameters:
// ⦁	If any of the 2 parameters is NOT a number, the function should return undefined.
// ⦁	If both parameters are numbers, the function should return their sum. 

describe('mathEnforcer', () => {
    let obj = null;

    beforeEach(() => {
        obj = mathEnforcer;
    });
    describe('check addFive method', () => {
        it('when parameter is not a number', () => {
            expect(obj.addFive('a')).to.be.undefined;
        });
        it('when given a integer as parameter', () => {
            expect(obj.addFive(1)).to.equal(6);
        });
        it('when given a number as parameter', () => {
            expect(obj.addFive(1.5)).closeTo(6.5, 0.1);
        });
        it('when given a negative number as parameter', () => {
            expect(obj.addFive(-1)).to.equal(4);
        });

    });

    describe('check subtractTen method', () => {
        it('when parameter is not a number', () => {
            expect(obj.subtractTen('a')).to.be.undefined;
        });
        it('when given a number as parameter', () => {
            expect(obj.subtractTen(1)).to.equal(-9);
        });
        it('when given a negative number as parameter', () => {
            expect(obj.subtractTen(-1)).to.equal(-11);
        });
    });
    it('when given a number as parameter', () => {
        expect(obj.subtractTen(1.5)).closeTo(-8.5, 0.1);
    });

    describe('check sum method', () => {
        it('when the first parameter is not a number', () => {
            expect(obj.sum('a', 1)).to.be.undefined;
        });
        it('when the second parameter is not a number', () => {
            expect(obj.sum(1, 'a')).to.be.undefined;
        });
        it('when given numbers as parameters', () => {
            expect(obj.sum(1, 2)).to.equal(3);
        });
        it('when given negative numbers as parameters', () => {
            expect(obj.sum(-1, -2)).to.equal(-3);
        });
        it('when given one negative number as parameter', () => {
            expect(obj.sum(-1, 2)).to.equal(1);
        });
        it('when given one negative number as parameter', () => {
            expect(obj.sum(1, -2)).to.equal(-1);
        });
        it('when given numbers as parameters', () => {
            expect(obj.sum(1.1, 2.2)).closeTo(3.3, 0.1);
        });
        it('when given negative numbers as parameters', () => {
            expect(obj.sum(-1.1, -2.2)).closeTo(-3.3, 0.1);
        });
        it('when given negative numbers as parameters', () => {
            expect(obj.sum(1.1, -2.2)).closeTo(-1.1, 0.1);
        });
        it('when given negative numbers as parameters', () => {
            expect(obj.sum(-1.1, 2.2)).closeTo(1.1, 0.1);
        });
    });
});