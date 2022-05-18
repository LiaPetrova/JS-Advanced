const createCalculator = require('./07').createCalculator;
const expect = require('chai').expect;

describe('Summator', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });

    it('adds one number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });
    it('adds  multiple numbers', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    });
    it('substracts one number', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    });
    it('substracts  multiple numbers', () => {
        instance.subtract(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3);
    });
    it('adds one string', () => {
        instance.add('1');
        expect(instance.get()).to.equal(1);
    });
    it('adds  multiple string', () => {
        instance.add('1');
        instance.add('2');
        expect(instance.get()).to.equal(3);
    });
    it('substracts one string', () => {
        instance.subtract('1');
        expect(instance.get()).to.equal(-1);
    });
    it('substracts  multiple string', () => {
        instance.subtract('1');
        instance.subtract('2');
        expect(instance.get()).to.equal(-3);
    });
    it('starts empty', () => {
        expect(instance.get()).to.equal(0);
    });
    it('can add and subtract  multiple numbers', () => {
        instance.subtract(1);
        instance.add(2);
        expect(instance.get()).to.equal(1);
    });


});