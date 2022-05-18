const sum = require('./index');
const { assert } = require('chai');

describe('sum function test', () => {

    it('test with two numbers', () => {
        assert.equal(sum(3, 4), 7);
    });
    it('test with number and string', () => {
        assert.equal(sum('3', 4), 7);
    });

});