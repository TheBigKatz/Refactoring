// Positive Numbers
//
// Write a function which takes an array of numbers as input and returns a new array
// containing only the positive numbers in the given array.

var numbers = [-1, 3, -2, 6, -8, 10, -22, 7, 100];

function positive(numbers) {
  return numbers.filter(function(n) {
    return n > 0;
  });
}

var result = positive(numbers);
