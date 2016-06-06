var paragraph = "TODAY IS MONDAY, THE FIRST MONDAY OF THE MONTH. TODAY IS A PRODUCTIVE DAY.";

var splitpara = paragraph.split('');
var change = splitpara.map(function(letter) {
  if (letter === "A") {
    return 4;
  }
  else if (letter === "E") {
    return 3;
  }
  else if (letter === "G") {
    return 6;
  }
  else if (letter === "I") {
    return 1;
  }
  else if (letter === "O") {
    return 0;
  }
  else if (letter === "S") {
    return 5;
  }
  else if (letter === "T") {
    return 7;
  }
  else {
    return letter;
  }
});
var result = change.join("");
