const rgbToHexColor = require('./rgbToHex');
const { expect } = require('chai');

describe('test RGB', ()=>{
    it ('test white coller', ()=>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });

    it ('test black coller', ()=>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });

    it ('test red coller', ()=>{
        expect(rgbToHexColor(255,0,0)).to.equal('#FF0000');
    });
    it ('test blue coller', ()=>{
        expect(rgbToHexColor(0,255,0)).to.equal('#00FF00');
    });
    it ('test green coller', ()=>{
        expect(rgbToHexColor(0,0,255)).to.equal('#0000FF');
    });

    it ('returns udefine with strings', ()=>{
        expect(rgbToHexColor('a','a','a')).to.be.undefined;
    });
    
    it ('returns udefine with red', ()=>{
        expect(rgbToHexColor(256,0,0)).to.be.undefined;
    });
    it ('returns udefine with blue', ()=>{
        expect(rgbToHexColor(0,256,0)).to.be.undefined;
    });
    it ('returns udefine with green', ()=>{
        expect(rgbToHexColor(0,0,256)).to.be.undefined;
    });
    it ('returns udefine with negativ number', ()=>{
        expect(rgbToHexColor(-1,0,0)).to.be.undefined;
    });
    it ('returns udefine with negativ number', ()=>{
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
    }); it ('returns udefine with negativ number', ()=>{
        expect(rgbToHexColor(0,0,-1)).to.be.undefined;
    });
    it ('convert 151, 104, 172 to hex', ()=>{
        expect(rgbToHexColor(151,104,172)).to.equal('#9768AC');
    });
    it ('convert 42, 173, 170 to hex', ()=>{
        expect(rgbToHexColor(42,173,170)).to.equal('#2AADAA');
    });
})