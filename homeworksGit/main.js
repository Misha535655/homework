// var a, b, c;
// a =	Math.round(Math.random()*10);
// b = a * 3;
// c = a + b;
// alert("a = " + a);
// alert("b = " + b);
// alert("c = " + c);
//
// // <<<<<<<<<<<<task2>>>>>>>>>>
// var  firstName, lastName;
// firstName = prompt("your firstname","");
// lastName = prompt("your lastname","");
// alert("What’s up " + firstName.toUpperCase()+ "  " + lastName.toUpperCase());
// // <<<<<<<<<<<<<<<<task3>>>>>>>>>>>>>>>>
// var x = +prompt("enter 1 number","");
// var y = +prompt("enter 2 number","");
// alert( x + "+" + y + "=" + (x + y));
// alert( x + "-" + y + "=" + (x - y));
// alert( x + "/" + y + "=" + (x / y));
// alert( x + "*" + y + "=" + (x * y));
// // <<<<<<<<<<<<<<<<<<<<<<<task4>>>>>>>>>>>>>>>>>>
// var speed = +prompt("enter speed","");
// var distance = 384400;
// var time = distance/speed;
// alert ("time = " + time + " minutes");
// // <<<<<<<<<<<<<<<<<<<<<<<<task5>>>>>>>>>>>>>>>>>>
// var z = Math.round(+prompt("enter number",""))
// alert ( z % 2 );
// // <<<<<<<<<<<<<<<<<<<task6>>>>>>>>>>>>>>>>>
// var f = prompt("enter number","");
// alert(isFinite(f));
// var bite kbite, mbite, gbite;
// gbite = +prompt ("ebtre number gbite","");
//
// kbite = bite*1024;
// mbite = bite*1024;
// gbite = gbite;
//
//
// alert  ()
debugger;

var gotImpechment = Math.random()>0.5 ? true : false;
let image = document.createElement("img");
document.querySelector(".container").appendChild(image);
let logo;
if (gotImpechment){
logo = "https://www.sq.com.ua/img/news/2020/01/01/1559396.jpg";
}else{
logo = "https://s.tcdn.co/68d/ea3/68dea335-8260-376e-b4d9-d5c3fb5228f8/1.png";
}
image.setAttribute("src", logo);
