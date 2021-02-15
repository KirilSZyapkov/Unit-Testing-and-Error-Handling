const mathEnforcer = require('./mathEnforcer');
const {expect } = require('chai');

describe('mathEnforcer', ()=>{
    describe('addFive', ()=>{
        it ('works with numbers', ()=>{
            expect(mathEnforcer.addFive(1)).to.equal(6);
        });
        it ('works with numbers part two', ()=>{
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it ('does not work with string', ()=>{
            expect(mathEnforcer.addFive('a')).to.be.undefined;
        });
        it ('works with megativ numbers', ()=>{
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        });
        it ('works with floting point numbers', ()=>{
            expect(mathEnforcer.addFive(1.1)).to.equal(6.1);
        });
        
    });
    describe('subtractTen', ()=>{
        it ('works with numbers', ()=>{
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
        });
        it ('works with numbers part two', ()=>{
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
        it ('does not work with string', ()=>{
            expect(mathEnforcer.subtractTen('a')).to.be.undefined;
        });
        it ('works with negativ numbers', ()=>{
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });
        it ('works with floting point numbers', ()=>{
            expect(mathEnforcer.subtractTen(1.1)).to.equal(-8.9);
        });
    });
    describe('sum', ()=>{
        it ('works with numbers', ()=>{
            expect(mathEnforcer.sum(1,1)).to.equal(2);
        });
        it ('works with numbers part two', ()=>{
            expect(mathEnforcer.sum(5,6)).to.equal(11);
        });
        it ('does not work with string', ()=>{
            expect(mathEnforcer.sum('a','a')).to.be.undefined;
        });
        it ('does not work with one string', ()=>{
            expect(mathEnforcer.sum('a',1)).to.be.undefined;
        });
        it ('does not work with noe string part two', ()=>{
            expect(mathEnforcer.sum(1,'a')).to.be.undefined;
        });
        it ('works with negativ numbers', ()=>{
            expect(mathEnforcer.sum(-1,-1)).to.equal(-2);
        });
        it ('works with floting point numbers', ()=>{
            expect(mathEnforcer.sum(1.1, 1.1)).to.equal(2.2);
        });
    })
})