const isOddOrEven = require('./evenOrOdd');
const { expect } = require('chai');

describe('Test', () => {
    it('even with string', () => {
        expect(isOddOrEven('aa')).to.equal('even');
    });
    it('odd with string', () => {
        expect(isOddOrEven('a')).to.equal('odd');
    });
    it('undefined with non string', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });
    it('odd with string', () => {
        expect(isOddOrEven('hello')).to.equal('odd');
    });
    it('even with string', () => {
        expect(isOddOrEven('even')).to.equal('even');
    });
})