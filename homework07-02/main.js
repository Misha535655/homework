// <<<<<<<<<<<<<<<<<task1>>>>>>>>>>>>>>>
var person = {
  name: "Misha",
  sername: "Symonenko",
  age: "19",
};
var key = prompt ("enter person");
if (key in person){
  alert (person[key]);
} else {
  person[key] = prompt("enter property name ");
}
alert (person[key]);
