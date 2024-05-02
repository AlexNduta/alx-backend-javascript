/*
 * Tests
 * test1: check if the passed numbers are rounded to nearest whole nums
 */
const mocha = require('mocha');
const assert = require('assert');
const calculateNum = require('./0-calcul.js').calculateNumber;

describe('calculateNums', ()=>{
    it('should confirm the number returned is a whole number', ()=>{
        const expectedRoundedNum1 = Math.round(4.5);
        const expectedRoundedNum2 = Math.round(5);
        const results = calculateNum(expectedRoundedNum1, expectedRoundedNum2);
        assert.equal(results, expectedRoundedNum1 + expectedRoundedNum2
        );
    });

});
