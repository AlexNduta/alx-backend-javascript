/*
 * test for the 1-cacul.js methodds
 */

const assert = require('assert');
const calc = require('./1-calcul.js').calculateNumber;

describe('1-calcul', ()=>{
    it('Should return a whole value', ()=>{
        var result =calc('SUM',10,5);
        assert.equal(result, 15);
    });

    it('This is a confirmation that input values are rounded', ()=>{
        const rounded_a = Math.round(-4.5);
        const rounded_b = Math.round(5);
        var results = calc('SUM', rounded_a, rounded_b);
        assert.equal(results, rounded_a + rounded_b);
    });
    it('This is a confirmation that the Subtraction feature works', ()=>{
        var result =calc('SUBTRACT',10,5);
        assert.equal(result, 5);
    });
    it('This is a  confirmation that the DIvide feature works', ()=>{
        var result =calc('DIVIDE',10,2);
        assert.equal(result, 5);
    });

});
