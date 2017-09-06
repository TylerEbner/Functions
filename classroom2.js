var STEM = {
  classroom: "f103",
  students: 18,
};

var userInput = prompt("classroom or students?");
var lowerCase = userInput.toLowerCase();
if ((lowerCase === "classroom" || lowerCase === "students")) {
  window.alert(STEM[lowerCase]);
//If the user enters classroom or students, then window.alert will run
}
else {
	for(i =1; i < 4; i++) {
  	var userInput = prompt("classroom or students. You have tried " +i+ " time(s)");
		var lowerCase = userInput.toLowerCase();
		if ((lowerCase === "classroom" || lowerCase === "students")) {
  		i = 4;
      window.alert(STEM[lowerCase]);
      //If the user enters something other than classroom or students, then
		}
	}
}
