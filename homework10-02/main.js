// Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
// Посчитайте сумму всех его чисел, включая строковые.
// Выведите сумму в alert.
debugger;
var arr = [1, 2, 3, "a", "b", "c", "4", "5", "6"];
var counter = 0;
for (let i = 0; i < arr.length; i++){
if(typeof(+arr[i]) == "number" && !isNaN(+arr[i])){counter = (+arr[i])+counter;}
}
