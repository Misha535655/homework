// <<<<<<<<<<<<task2>>>>>>>>>>>>>
var speed = +prompt("enter speed snail");
if (speed > 0)
{
  alert("snail going forward");
}
else if (speed < 0){
  alert (" snail going back");
}
else {
  alert("snail standing still");
}
// <<<<<<<<<<<<<<<task3>>>>>>>>>>>>>
let myMoney = +prompt("how much money u have");
let friendMoney = +prompt("how much money ur friend has");
let allMoney = friendMoney + myMoney;
if (allMoney >= 5000 ){
  alert("flight in Malta");
}else if (allMoney >= 1000){
  alert("go learn eng");
}else {
  alert ("go drink beer");
}
//<<<<<<<<<<<<<<task4>>>>>>>>>>>>
let age = +prompt("how old are you", "");
if (age >= 20 && age <= 30 )
{
  alert("hellow army");
} else {
  alert("bye bye");
}
//<<<<<<<<<<<<<<<task5>>>>>>>>>>>>
var busNumber = +prompt("enter number bus at the stop");
if (busNumber == 7 || busNumber == 225 || busNumber == 255){
  alert ("this is your bus")
}else{
  alert("ohh wait next bus")
}
//<<<<<<<<<<<<<<<task6>>>>>>>>>>>
let day = prompt("what today is the day of the week").toUpperCase();
if (day == "SATURDAY" || day == "SANDAY"){
  alert ("u can sleeep")
}else {
  alert("go to work")
}
//<<<<<<<<<<<<<<<task7>>>>>>>>>>>
let hellower = prompt("what is your name?");
if (hellower == null || hellower == ""){
  alert("oh sry i'm dont know your name");
}else {
  alert("hellow " + hellower);

//<<<<<<<<<<<<<<<task8>>>>>>>>>>>
let typeOperation = prompt("enter operation","");
let sum = +prompt("enter quantity money","");
let money;
switch (typeOperation.toUpperCase()) {
  case "USD": money = sum / 24;  break;
  case "UAN": money = sum * 24;  break;
}
alert(money);
