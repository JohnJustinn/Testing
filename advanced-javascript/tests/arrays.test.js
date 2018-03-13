/* eslint-disable prefer-destructuring */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe('Arrays', () => {
  let testArray = [];
  beforeEach(() => {
    testArray = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  });
  afterEach(() => {
    testArray = [];
  });

  describe('`each`', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(each).to.be.a('function');
    });
    it('Should be a callback for items in array'), () => {
      const spy = sinon.spy();
      const callTimes = testArray.length;
      arrayFunctions.each(testArray, spy);
      expect(spy).to.have.callCount(callTimes);
    }
  })

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('Should expect a callback', () => {
      const cb = sinon.spy();
      const callTimes = testArray.length;
      arrayFunctions.map(testArray, cb);
      expect(cb).to.have.callCount(callTimes);
    });
    it('Should return a new array', () => {
      const mapArray = map(testArray, cb);
      expect(mapArray).to.have.lengthOf(testArray.length);
      expect(mapArray).to.not.equal(testArray);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('Should expect a callback', () => {
      const cb = sinon.spy();
      const callTimes = testArray.length;
      arrayFunctions.reduce(testArray, cb);
      expect(cb).to.have.callCount(callTimes);
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.an('function');
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
  });
});
