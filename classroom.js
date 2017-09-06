var STEM = {
  classroom: "f103",
  students: 18,
};

var userInput = prompt("classroom or students?");
var lowerCase = userInput.toLowerCase();

if ((lowerCase === "classroom" || lowerCase === "students")) {
  window.alert(STEM[lowerCase]);
} else {
  askAgain();
}

function askAgain() {
  var userInput = prompt("classroom or students?");
  var lowerCase = userInput.toLowerCase();

  if ((lowerCase === "classroom" || lowerCase === "students")) {
    window.alert(STEM[lowerCase]);
} else {
  askAgain();
}
}
