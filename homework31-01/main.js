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
//<<<<<<<<<<<<<<<task9>>>>>>>>>>>
let greeting;
let lang = prompt("enter language ru end or de").toUpperCase();
switch (lang) {
  case "RU" : greeting = "Привет мир"; break;
  case "ENG" : greeting = "hellow world"; break;
  case "de" : greeting = "oups i dont know Deutsch"; break;
}
if (lang = "RU"){
  greeting = "Привет мир";
}else if(lang = "ENG"){
  greeting = "hellow world";
}else {
  greeting = "oups i dont know Deutsch";
}
alert(greeting);
//<<<<<<<<<<<<<<<task11>>>>>>>>>>>
let language = prompt("eng or ru").toUpperCase();
let days = +prompt("enter day 0 - sunday ...");
let result;
if (language == "ENG"){
switch (days) {
  case 0: result = "Sunday";   break;
  case 1: result = "Saturday";   break;
  case 2: result = "Friday";   break;
  case 3: result = "Thursday";   break;
  case 4: result = "Wednesday";   break;
  case 5: result = "Tuesday";   break;
  case 6: result = "Monday";   break;
}
}else {
  switch (days) {
    case 0: result = "Воскресенье";   break;
    case 1: result = "Суббота";   break;
    case 2: result = "Пятница";   break;
    case 3: result = "Четверг";   break;
    case 4: result = "Среда";   break;
    case 5: result = "Вторник";   break;
    case 6: result = "Понедельник";   break;
  }
}
alert(result);
