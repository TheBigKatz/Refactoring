// Good Job!
//
// Given an array of people's names
// Print out 'Good Job, {{name}}!' for each person's name, one on a line.
// Hint: You can use "\n" as the newline character and array's `join()`
// method to put together an array of strings.
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join


var people = [
  'Sandhya',
  'Dave',
  'Carolyn',
  'DeeAnn',
  'Allen',
  'Anthony',
  'Kyle',
  'Shanda',
  'Cody',
  'Tim',
  'Regan',
  'Matt',
  'Andrew'
];
var sentence = people.map(function(person) {
  return 'Good Job, ' + person;
});
var result = sentence.join('\n');
console.log(result);
