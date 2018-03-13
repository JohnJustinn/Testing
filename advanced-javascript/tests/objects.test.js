const chai = require('chai');
const objectFunctions = require('../src/objects');

const { expect, assert } = chai;

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
  describe('keys', () => {
    const { keys } = objectFunctions;

    it('Should be a function', () => {
      expect(keys).to.be.a('function');
    });

    it('should return object keys', () => {
      const keysArray = keys({ movie: 'Pans Labyrinth', director: 'Guillermo del Toro' });
      expect(keysArray).to.deep.equal(['movie', 'director']);
    });

    it('should return an array', () => {
      const keysArray = keys({ grocieries: 'finished', yoga: 'skipped', market: 'finished' });
      expect(keysArray).to.be.an('array');
    });
  });

  describe('values', () => {
    const { values } = objectFunctions;

    it('Should be a function', () => {
      expect(values).to.be.a('function');
    });

    it('Should return the values of an object', () => {
      const valuesArray = values({ movie: 'Pans Labyrinth', director: 'Guillermo del Toro' });
      expect(valuesArray).to.deep.equal(['Pans Labyrinth', 'Guillermo del Toro']);
    });

    it('should return an array', () => {
      const valuesArray = values({ grocieries: 'finished', yoga: 'skipped', market: 'finished' });
      expect(valuesArray).to.be.an('array');
    });
  });

  describe('mapObject', () => {
    const { mapObject } = objectFunctions;

    it('should be a function', () => {
      expect(mapObject).to.be.a('function');
    });

    it('Should return a key-value pair with updated value ', () => {
      const callback = (value) => {
        return value + 1;
      };
      const mappedObject = mapObject({ movie: 1, director: 2 }, callback);
      expect(mappedObject).to.deep.equal({ movie: 2, director: 3 });
    });

    it('Should return an object', () => {
      const callback = (value) => {
        return value.concat(' with it');
      };
      const mappedObject = mapObject({ grocieries: 'finished', yoga: 'skipped', market: 'finished' });
      expect(mappedObject).to.be.an('object');
    });
  });

  describe('pairs', () => {
    const { pairs } = objectFunctions;

    it('Should be a function', () => {
      expect(pairs).to.be.a('function');
    });

    it('Should return a nested array with key-value pairs', () => {
      const pairsArray = pairs({ movie: 1, director: 2 });
      expect(pairsArray).to.deep.equal([['movie', 1], ['director', 2]]);
    });

    it('should return an array', () => {
      const pairsArray = pairs({ grocieries: 'finished', yoga: 'skipped', market: 'finished' });
      expect(pairsArray).to.be.an('array');
    });
  });

  describe('invert', () => {
    const { invert } = objectFunctions;

    it('should be a function', () => {
      expect(invert).to.be.a('function');
    });

    it('Should return a key-value pair in opposite order ', () => {
      const invertedObject = invert({ movie: 1, director: 2 });
      expect(invertedObject).to.deep.equal({ 1: 'movie', 2: 'director' });
    });

    it('should return an object', () => {
      const invertedObject = invert({ grocieries: 'finished', yoga: 'skipped', market: 'finished' });
      expect(invertedObject).to.be.an('object');
    });
  });

  describe('defaults', () => {
    const { defaults } = objectFunctions;

    it('should be a function', () => {
      expect(defaults).to.be.a('function');
    });

    it('Should return an object that includes all properties', () => {
      const obj = { key1: 1, key2: 2 };
      const defaultsObj = { key2: 3, key3: 4 };
      const newObj = objectFunctions.defaults(obj, defaultsObj);
      expect(newObj).to.eql(obj);
    });

    it('should return an object', () => {
      const defaultProps = { username: 1, password: 2, };
      expect(typeof (defaults({ grocieries: 'finished', yoga: 'skipped', market: 'finished' }), defaultProps)).to.equal('object');
    });
  });
});