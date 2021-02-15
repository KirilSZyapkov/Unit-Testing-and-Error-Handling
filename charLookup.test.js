const lookupChar = require('./charLookup');
const { expect } = require('chai');

describe('Test', () => {
    it('undefine with both parametars', () => {
        expect(lookupChar(1, 'a')).to.be.undefined;
    });
    it('undefine with first parametars', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
    });
    it('undefine with second parametars', () => {
        expect(lookupChar('a', 'a')).to.be.undefined;
    });
    it('undefine with empty string', () => {
        expect(lookupChar('a', 0.1)).to.be.undefined;
    });
    it('incorect second parametar', () => {
        expect(lookupChar('a', 2)).to.equal('Incorrect index');
    });
    it('incorect second parametar part two', () => {
        expect(lookupChar('a', 1)).to.equal('Incorrect index');
    });
    it('incorect second parametar part three', () => {
        expect(lookupChar('a', -1)).to.equal('Incorrect index');
    });
    it('both parametar are correct', () => {
        expect(lookupChar('a', 0)).to.equal('a');
    });
    it('both parametar are correct part two', () => {
        expect(lookupChar('hello', 2)).to.equal('l');
    });
    it('incorect second parametar length', () => {
        expect(lookupChar('hello', 5)).to.equal('Incorrect index');
    });
})
