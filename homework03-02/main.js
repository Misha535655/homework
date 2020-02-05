var a, b, c;
a =	Math.round(Math.random()*10);
b = a * 3;
c = a + b;
alert("a = " + a);
alert("b = " + b);
alert("c = " + c);

// <<<<<<<<<<<<task2>>>>>>>>>>
var  firstName, lastName;
firstName = prompt("your firstname","");
lastName = prompt("your lastname","");
alert("What’s up " + firstName.toUpperCase()+ "  " + lastName.toUpperCase());
// <<<<<<<<<<<<<<<<task3>>>>>>>>>>>>>>>>
var x = +prompt("enter 1 number","");
var y = +prompt("enter 2 number","");
alert( x + "+" + y + "=" + (x + y));
alert( x + "-" + y + "=" + (x - y));
alert( x + "/" + y + "=" + (x / y));
alert( x + "*" + y + "=" + (x * y));
// <<<<<<<<<<<<<<<<<<<<<<<task4>>>>>>>>>>>>>>>>>>
var speed = +prompt("enter speed","");
var distance = 384400;
var time = distance/speed;
alert ("time = " + time + " minutes");
// <<<<<<<<<<<<<<<<<<<<<<<<task5>>>>>>>>>>>>>>>>>>
var z = Math.round(+prompt("enter number",""))
alert ( z % 2 );
// <<<<<<<<<<<<<<<<<<<task6>>>>>>>>>>>>>>>>>
var f = prompt("enter number","");
alert(isFinite(f));
// <<<<<<<<<<<<<<<<<<<task7>>>>>>>>>>>>>>>>
var bite, kbite, mbite, gbite;
gbite = +prompt ("ebtre number gbite","");
gbite = gbite;
bite = gbite * (1e+9);
kbite = gbite*(1e+6);
mbite = gbite*(1000);

alert  ("bite = " + bite );
alert  ("kbite = " + kbite );
alert  ("mbite = " + mbite );
alert  ("gbite = " + gbite );
