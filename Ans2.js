var a = 2, b = 1;
//var result = --a - --b + ++b +b--;
//document.write("Result: ",result,"<br><br>");

var firstStep = --a
document.write("First step --a: ",firstStep,"<br>");
var secondStep = firstStep - --b;
document.write("Second step --a - --b: ",secondStep,"<br>");
var thirdStep = secondStep + ++b;
document.write("Third step --a - --b + ++b: ",thirdStep,"<br>");
var lastStep = thirdStep + b--;
document.write("Last step --a - --b + ++b + b--: ",lastStep,"<br>");