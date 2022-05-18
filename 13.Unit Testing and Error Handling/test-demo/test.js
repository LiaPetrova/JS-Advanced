const { sum } = require('./myModule');
const { expect } = require('chai');

describe('Demo Test', () => {
    it('works with 5 and 3', () => {
        expect(sum(5, 3)).to.equal(8)
            // if (sum(5, 3) != 8) {
            //     throw Error('Did not work as expected');
            // }
    });
});