/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    const multiplyByTen = funcs.multiplyByTen;
    const twenty = multiplyByTen(2);
    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });
    it('Should a return a number',() => {
      assert.typeOf(twenty, 'number');
    });
    it('Should return a number multiplied by 10', () => {
      assert.equal(twenty, 20)
    })
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    const five = subtractFive(10);
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('Should a return a number',() => {
      assert.typeOf(five, 'number');
    });
    it('Should return a number subtracted by five', () => {
      assert.equal(five, 5)
    })
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    const equalLength = areSameLength('dog', 'cat')
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('Should be same length',() => {
      assert.typeOf(equalLength, 'boolean');
    });
    it('Should return true if strings are of equal length', () => {
      assert.equal(equalLength, true)
    })
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    const equalNumber = areEqual(10, 10);
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('Should a return a boolean statement',() => {
      assert.typeOf(equalNumber, 'boolean');
    });
    it('Should return true if numbers are equal', () => {
      assert.equal(equalNumber, true);
    })
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    const numberLess = greaterThanFifty(75);
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('Should a return a boolean statement',() => {
      assert.typeOf(numberLess, 'boolean');
    });
    it('Should return a number less than 90', () => {
      assert.isTrue(numberLess);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    const numberGreater = greaterThanFifty(75);
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('Should a return a boolean statement',() => {
      assert.typeOf(numberGreater, 'boolean');
    });
    it('Should return a number less than 90', () => {
      assert.isTrue(numberGreater);
    });
  });

  describe('`add`', () => {
    const { add } = funcs;
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('Should return the sum of two numbers', () => {
      const thirty = add(15, 15);
      assert.typeOf(thirty, 'number');
      assert.equal(thirty, 30);
    })
  });

  describe('`subtract`', () => {
    const { subtract } = funcs;
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('Should return the sum of two numbers', () => {
      const thirty = subtract(40, 10);
      assert.typeOf(thirty, 'number');
      assert.equal(thirty, 30);
    })
  });

  describe('`divide`', () => {
    const { divide } = funcs;
    it('Should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return the quotient of two numbers', () => {
      const thirty = divide(300, 10);
      assert.typeOf(thirty, 'number');
      assert.equal(thirty, 30);
    });
  });

  describe('`multiply`', () => {
    const { multiply } = funcs;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('Should return the product of two numbers', () => {
      const thirty = multiply(15, 2);
      assert.typeOf(thirty, 'number');
      assert.equal(thirty, 30);
    });
  });

  describe('`getRemainder`', () => {
    const { getRemainder } = funcs;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('Should return the remainderof two numbers', () => {
      const threeHundredEighty = getRemainder(120, 60);
      assert.typeOf(threeHundredEighty, 'number');
      assert.equal(threeHundredEighty, 0);
    });
  });

  describe('`isEven`', () => {
    const { isEven } = funcs;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('If the number is even return true', () => {
      const evenNumber = isEven(100);
      assert.typeOf(evenNumber, 'boolean');
      assert.isTrue(evenNumber);
    });
  });

  describe('`isOdd`', () => {
    const { isOdd } = funcs;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('If the number is odd return false', () => {
      const oddNumber = isOdd(13);
      assert.typeOf(oddNumber, 'boolean');
      assert.isTrue(oddNumber);
    });
  });

  describe('`square`', () => {
    const { square } = funcs;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('Should return the number squared', () => {
      const thirtySix = square(6);
      assert.typeOf(thirtySix, 'number');
      assert.equal(thirtySix, 36);
    });
  });

  describe('`cube`', () => {
    const { cube } = funcs;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('Should return the number cubed', () => {
      const twentySeven = cube(3);
      assert.typeOf(twentySeven, 'number');
      assert.equal(twentySeven, 27);
    });
  });

  describe('`raiseToPower`', () => {
    const { raiseToPower } = funcs;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('Should return a number raised to the power of a given exponent', () => {
      const twentyFive = raiseToPower(5, 2);
      assert.typeOf(twentyFive, 'number');
      assert.equal(twentyFive, 25);
    });
  });

  describe('`roundNumber`', () => {
    const { roundNumber } = funcs;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('Should round a given number', () => {
      const thirtyTwo = roundNumber(31.569);
      assert.typeOf(thirtyTwo, 'number');
      assert.equal(thirtyTwo, 32);
    });
  });

  describe('`roundUp`', () => {
    const { roundUp } = funcs;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('Should round up a given number', () => {
      const five = roundUp(4.2);
      assert.typeOf(five, 'number');
      assert.equal(five, 5);
    });
  });

  describe('`addExclamationPoint`', () => {
    const { addExclamationPoint } = funcs;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('Should contain a `!` at the end of the string', () => {
      const exclamation = addExclamationPoint('Hip-Hip-Hooray');
      assert.typeOf(exclamation, 'string');
      assert.equal(exclamation, 'Hip-Hip-Hooray!');
    });
  });

  describe('`combineNames`', () => {
    const { combineNames } = funcs;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('Sound return first and last names combined', () => {
      const fullName = combineNames('Timothy', 'Smith');
      assert.typeOf(fullName, 'string');
      assert.equal(fullName, 'Timothy Smith');
    });
  });

  describe('`getGreeting`', () => {
    const { getGreeting } = funcs;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('Should return a greeting in the form of a string', () => {
      const greeting = getGreeting('Tobias');
      assert.typeOf(greeting, 'string');
      assert.equal(greeting, 'Hello Tobias!');
    });
  });

  describe('`getRectangleArea`', () => {
    const { getRectangleArea } = funcs;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('Should return the area of a rectancle', () => {
      const area = getRectangleArea(20, 10);
      assert.typeOf(area, 'number');
      assert.equal(area, 200);
    });
  });

  describe('`getTriangleArea`', () => {
    const { getTriangleArea } = funcs;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('Should return the area of a triangle', () => {
      const area = getTriangleArea(5, 10);
      assert.typeOf(area, 'number');
      assert.equal(area, 25);
    });
  });

  describe('`getCircleArea`', () => {
    const { getCircleArea } = funcs;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('Should return the area of a circle', () => {
      const area = getCircleArea(50);
      assert.typeOf(area, 'number');
      assert.equal(area, Math.PI * Math.pow(50, 2));
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const { getRectangularPrismVolume } = funcs;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('Should return the volume of a rectangular prism', () => {
      const volume = getRectangularPrismVolume(10, 10, 10);
      assert.typeOf(volume, 'number');
      assert.equal(volume, 1000);
    });
  });
});