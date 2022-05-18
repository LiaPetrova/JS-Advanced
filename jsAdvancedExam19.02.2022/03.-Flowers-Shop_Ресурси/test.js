const flowerShop = require('./flowerShop');
const { expect } = require('chai');
let obj;

describe('all Methods', () => {
    beforeEach(() => { obj = flowerShop });
    describe('Tests for calcPriceOfFlowers', () => {
        it('Works with correct params', () => {
            expect(obj.calcPriceOfFlowers('Rose', 1, 2)).to.equal(`You need $2.00 to buy Rose!`);
            expect(obj.calcPriceOfFlowers('Rose', 1, 2)).to.equal(`You need $2.00 to buy Rose!`);
        });
        it('Throws error with price and quantity not integers', () => {
            expect(() => obj.calcPriceOfFlowers('Rose', 1.5, 2)).to.throw(`Invalid input!`);
            expect(() => obj.calcPriceOfFlowers('Rose', 1, 2.5)).to.throw(`Invalid input!`);
        });
        it('Throws error with invalid input', () => {
            expect(() => obj.calcPriceOfFlowers(['Rose'], 1, 2)).to.throw(`Invalid input!`);
            expect(() => obj.calcPriceOfFlowers(5, 1, 2)).to.throw(`Invalid input!`);
            expect(() => obj.calcPriceOfFlowers('Rose', 'one', 2)).to.throw(`Invalid input!`);
            expect(() => obj.calcPriceOfFlowers('Rose', 1, 'two')).to.throw(`Invalid input!`);
            expect(() => obj.calcPriceOfFlowers('Rose', 1)).to.throw(`Invalid input!`);
            expect(() => obj.calcPriceOfFlowers('Rose', [1], 2)).to.throw(`Invalid input!`);
            expect(() => obj.calcPriceOfFlowers('Rose', 1, [2])).to.throw(`Invalid input!`);
        });
    });
    describe('Tests for   checkFlowersAvailable', () => {
        it('Works with correct params and available', () => {
            expect(obj.checkFlowersAvailable('Roses', ['Roses', 'Lily'])).to.equal(`The Roses are available!`);
            expect(obj.checkFlowersAvailable('Roses', ['Roses'])).to.equal(`The Roses are available!`);
        });
        it('Works with correct params and not available', () => {
            expect(obj.checkFlowersAvailable('Roses', ['Orchid', 'Lily'])).to.equal(`The Roses are sold! You need to purchase more!`);
            expect(obj.checkFlowersAvailable('Roses', [])).to.equal(`The Roses are sold! You need to purchase more!`);
        });
    });
    describe('Tests for sellFlowers', () => {
        it('Works with correct params', () => {
            expect(obj.sellFlowers(['Orchid', 'Lily'], 1)).to.equal(`Orchid`);
            expect(obj.sellFlowers(['Orchid', 'Lily', 'Rose'], 0)).to.equal(`Lily / Rose`);
            expect(obj.sellFlowers(['Orchid', 'Lily', 'Rose'], 2)).to.equal(`Orchid / Lily`);

        });
        it('Throws error with incorrect index', () => {
            expect(() => obj.sellFlowers(['Orchid', 'Lily'], -1)).to.throw(`Invalid input!`);
            expect(() => obj.sellFlowers(['Orchid', 'Lily'], 1.5)).to.throw(`Invalid input!`);
            expect(() => obj.sellFlowers(['Orchid', 'Lily'], 3)).to.throw(`Invalid input!`);
            expect(() => obj.sellFlowers(['Orchid', 'Lily'], 2)).to.throw(`Invalid input!`);
            expect(() => obj.sellFlowers(['Orchid', 'Lily'], 'one')).to.throw(`Invalid input!`);
            expect(() => obj.sellFlowers(['Orchid', 'Lily'], [])).to.throw(`Invalid input!`);
            expect(() => obj.sellFlowers(['Orchid', 'Lily'])).to.throw(`Invalid input!`);
        });
        it('Throws error with incorrect index', () => {
            expect(() => obj.sellFlowers([], 0)).to.throw(`Invalid input!`);
            expect(() => obj.sellFlowers('Orchid', 1)).to.throw(`Invalid input!`);
            expect(() => obj.sellFlowers({ 'Orchid': 1, 'Lily': 1 }, 3)).to.throw(`Invalid input!`);
            expect(() => obj.sellFlowers(1)).to.throw(`Invalid input!`);
            expect(() => obj.sellFlowers(1, 1)).to.throw(`Invalid input!`);
        });

    });
});