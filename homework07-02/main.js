// Создайте объект person,
// описывающий персону,
// с произвольным количеством произвольных полей.
// С помощью оператора in или typeof проверьте наличие в объекте свойства,
// прочитанного из prompt, и выведите его на экран.
// Если свойства нет,
// то добавляйте его в объект со значением,
// которое также запрашивается из prompt.
// <<<<<<<<<<<<<<<<<task1>>>>>>>>>>>>>>>
var person = {
  name: "Misha",
  sername: "Symonenko",
  age: "19",
  phone: "",};
var key = prompt ("enter person");
if (key in person){
  alert (person.key);
} else {
  person.key = prompt("enter property name ");
}
console.log (person[key]);
 // <<<<<<<<<<<<<<<<<task2>>>>>>>>>>>>>>>
var phone = {
  brand: "",
  model:"",
  resolution:"",
  color: "",
};
phone.brand = prompt("Enter brand phone");
phone.model = prompt("Enter model");
phone.resolution = prompt("Enter resolution");
phone.color = prompt("Enter color");
person.phone = phone;
 // <<<<<<<<<<<<<<<<<task3>>>>>>>>>>>>>>>
 while (true){
   var a = prompt("enter delete or update");
   if ( a == "delete"){
     deleter = prompt("what to delete?");
     delete person[deleter];
   }
   else if (a == "update"){
     updater = prompt("what to update?");
     person[updater] = prompt("enter value");
   }else {break;}
 }
 console.log(person)
 // <<<<<<<<<<<<<<<<<task4>>>>>>>>>>>>>>>
 let dl = document.createElement("dl");
  let persons = document.querySelector(".person")
persons.appendChild(dl);
 for (let keys in person){
   let dt = document.createElement("dt");
   dt.innerText = keys;
   let dd = document.createElement("dd");
   dd.innerText = person[keys];
   dl.appendChild(dt);
   dl.appendChild(dd);
 }
