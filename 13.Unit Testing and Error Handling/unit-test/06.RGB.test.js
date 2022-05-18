const rgbToHexColor = require('./06.RGB');
const { expect } = require('chai');

describe('Color Checker', () => {

    describe('Happy Path', () => {
        it('converts white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });
        it('converts black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });
        it('converts random orange', () => {
            expect(rgbToHexColor(200, 125, 0)).to.equal('#C87D00');
        });
    });
    describe('Returns undefined', () => {
        it('value over the range', () => {
            expect(rgbToHexColor(256, 255, 255)).to.be.undefined;
            expect(rgbToHexColor(256, 255, 256)).to.be.undefined;
            expect(rgbToHexColor(256, 256, 255)).to.be.undefined;
        });
        it('value under the range', () => {
            expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
            expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
            expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
        });
        it('arguments in other type', () => {
            expect(rgbToHexColor('a', 125, 0)).to.be.undefined;
        });
    });

});