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
// hint 3. - if the function you're testing requires a * cb *, make sure you use a spy like sinon

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
    it('Should be a cb for items in array'), () => {
      const spy = sinon.spy();
      const callTimes = testArray.length;
      arrayFunctions.each(testArray, spy);
      expect(spy).to.have.callCount(callTimes);
    }
  })

  describe('`map`', () => {
    const map = arrayFunctions.map;
    const cb = sinon.spy();
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('Should expect a cb', () => {
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
    const cb = sinon.spy();

    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });

    it('Should expect a cb', () => {
      const reducedArray = reduce(testArray, cb);
      expect(cb).to.have.callCount(testArray.length);
    });
    it('Should return a correct sum using reduce', () => {
      const sumArray = reduce([1, 2, 3, 4, 5], (a, b) => a + b);
      expect(sumArray).to.be.a('number');
      expect(sumArray).to.equal(15);
    });
  });

  describe('`find`', () => {
    const find = arrayFunctions.find;

    it('should be a function', () => {
      expect(find).to.be.an('function');
    });
    it('Should find the item for which is being searched', () => {
      const cb = (element) => {
        return element === 'hot' ? element : undefined;
      };
      const thisElement = find([1, 2, 'hot', 'cold'], cb);
      expect(thisElement).to.equal('hot');
    });
    it('Should return item same type for which is being searched', () => {
      const cb = (element) => {
        return element === 'near' ? element : undefined;
      };
      const thisElement = find([1, 2, 3, 'near', 'far'], cb);
      expect(thisElement).to.be.a('string');
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;

    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('Should return items that have been filtered', () => {
      const cb = (element) => { return element > 25; };
      const filteredArray = filter([10, 200, 5, 24, 30], cb);
      expect(filteredArray).to.eql([200, 30]);
    });
    it('Should return an array', () => {
      const cb = (element) => { return element > 1; };
      const filteredArray = filter([1, 2, 3, 4, 5], cb);
      expect(filteredArray).to.be.an('array');
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
    it('Should flatten a nested array', () => {
      const flattenArray = flatten([1, 2, [3, [4]]]);
      expect(flattenArray).to.eql([1, 2, 3, 4]);
    });
    it('Should return an array', () => {
      const flattenArray = flatten([1, 2, [3, [4]]]);
      expect(flattenArray).to.be.an('array');
    });
  });
});
