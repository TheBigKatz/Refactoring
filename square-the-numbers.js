// Square the Numbers
//
// Write a function which takes an array of numbers as input and returns a new array
// containing result of squaring each of the numbers in the given array by two.
// Example: `squareTheNumbers([1, 2, 3])` should give `[1, 4, 9]`.

var array = ([3,5,7,1,10,8,9]);

var doubled = array.map(function(n) {
  return n * 2;
});
