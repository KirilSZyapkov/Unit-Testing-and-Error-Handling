const isSymmetric = require('./checkForSymmetry');
const { expect } = require('chai');

describe('Simetric Array', () => {
    it('it is symetric', () => {
        expect(isSymmetric([1, 1])).to.true;
    });
    it('is not symetric', () => {
        expect(isSymmetric([1, 2])).to.be.false;
    });
    it ('not array', ()=>{
        expect(isSymmetric('a')).to.be.false;
    });
    it('it is symetric with more numbers', () => {
        expect(isSymmetric([1, 1, 1])).to.true;
    });
    it('it is symetric with strings', () => {
        expect(isSymmetric(['a', 'a'])).to.true;
    });
    it('it is not symetric with mixed elements', () => {
        expect(isSymmetric([1,'1'])).to.be.false;
    });
    it('it is not symetric with string', () => {
        expect(isSymmetric(['a','b'])).to.be.false;
    });
})