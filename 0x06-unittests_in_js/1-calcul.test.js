/*
 * test for the 1-cacul.js methodds
 */

const assert = require('assert');
const calc = require('./1-calcul.js').calculateNumber;

describe('1-calcul', ()=>{
    it('Should return a whole value', ()=>{
        var result =calc('SUM',10,5);
        assert.equal(result, 15)
    });
    it('Should return a rounded value', ()=>{
        const rounded_a = Math.round()
    })
});
