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
