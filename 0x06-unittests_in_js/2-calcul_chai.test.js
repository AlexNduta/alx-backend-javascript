/*
 * test for the 1-cacul.js methodds
 */
const expect = require('chai').expect;
const calc = require('./2-calcul_chai.js').calculateNumber;

describe('2-calcul', ()=>{
    it('Should return a whole value', ()=>{
        var result =calc('SUM',10,5);
        expect(result).to.be.equal(15);
    });

    it('This is a confirmation that input values are rounded', ()=>{
        const rounded_a = Math.round(-4.5);
        const rounded_b = Math.round(5);
        var results = calc('SUM', rounded_a, rounded_b);
        const round_val = rounded_a + rounded_b;
        expect(results).to.be.equal(round_val);
    });

    it('This is a confirmation that the Subtraction feature works', ()=>{
        var result =calc('SUBTRACT',10,5);
        expect(result).to.be.equal(5);
    });

    it('This is a confirmation that the Subtraction feature works', ()=>{
        var result =calc('DIVIDE',10,2);
        expect(result).to.be.equal(5);
    });
   });
