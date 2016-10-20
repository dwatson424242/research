// Assertion Testing for Unit Tests...

console.log("\n\nThis is for UNIT TESTING. You should see an assert error below");
const assert = require('assert');

assert(true);  // OK
assert(1);     // OK
assert(false);
// throws "AssertionError: false == true"
assert(0);
// throws "AssertionError: 0 == true"
assert(false, 'it\'s false');
// throws "AssertionError: it's false"


// More Examples:

const obj1 = {
  a : {
    b : 1
  }
};
const obj2 = {
  a : {
    b : 2
  }
};
const obj3 = {
  a : {
    b : 1
  }
}
const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
  // OK, object is equal to itself

assert.deepEqual(obj1, obj2);
  // AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
  // values of b are different

assert.deepEqual(obj1, obj3);
  // OK, objects are equal

assert.deepEqual(obj1, obj4);
  // AssertionError: { a: { b: 1 } } deepEqual {}
  // Prototypes are ignored


