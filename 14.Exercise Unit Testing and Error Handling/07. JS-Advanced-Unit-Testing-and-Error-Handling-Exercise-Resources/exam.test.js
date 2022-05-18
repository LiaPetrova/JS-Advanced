const {
    hiringEmployee,
    calculateSalary,
    firedEmployee
} = require('./companyAdministration');
const { expect } = require('chai');


describe('Test for hiringEmployee', () => {

    it('Throws erossition', () => {
        expect(hiringEmployee('Gosho', 'Programmer', 13)).to.equal(`Gosho was successfully hired for the position Programmer.`);
    });
    it('Throws erossition', () => {
        expect(hiringEmployee('Gosho', 'Programmer', 13)).to.equal(`Gosho was successfully hired for the position Programmer.`);
    });
    it('Throws erossition', () => {
        expect(hiringEmployee('Gosho', 'Programmer', 13)).to.equal(`Gosho was successfully hired for the position Programmer.`);
    });
});