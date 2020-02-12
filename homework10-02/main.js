// Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
// Посчитайте сумму всех его чисел, включая строковые.
// Выведите сумму в alert.
var arr = [1, 2, 3, "a", "b", "c", "4", "5", "6"];
var counter = 0;
for (let i = 0; i < arr.length; i++){
if(typeof(+arr[i]) == "number" && !isNaN(+arr[i])){counter = (+arr[i])+counter;}
};


// Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// Добавьте в начало массива значение ‘Backbone.js’
// Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// Добавьте в массив значение ‘CommonJS’ вторым элементом
// Найдите и удалите из массива значение ‘jQuery’,
// выведите его в alert со словами “Это здесь лишнее”
var arr2 = ["AngularJS", "jQuery"];
arr2.push("ReactJS","Vue.js");
arr2.unshift("Backbone.js");
arr2.splice(1, 0, "CommonJS");
alert(arr2.splice(arr2.indexOf("jQuery"),1) );
