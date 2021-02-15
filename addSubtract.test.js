const createCalculator = require('./addSubtract');
const {expect} = require('chai');
let action = createCalculator();


describe('Test calculation', ()=>{
    it ('summing numbers', ()=>{
        expect(action.add('a')).to.be.undefined;
    })
})