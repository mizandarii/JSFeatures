"use strict";

const arr = [1, 2, 5, 8, 9];

console.log(arr);

//delete last element in array
arr.pop();
console.log(arr);

arr.push(10); //добавить элемент в конец массива
console.log(arr);

for (let i = 0; i< arr.length; i++){
    console.log(arr[i]);
}

for (let value of arr){ //не работает с объектом
    console.log(value);
}

const arr2 = [1, 2, 5, 8, 9];
//arr2[99] = 0; //так делать нельзя

console.log(arr2.length);
console.log(arr2);

//array methods
//часто используются для перебора. недостаток - в отличие от обычных циклов - нельзя остановить
arr2.forEach(function(item, i, arr2){ //callback function
    console.log(`${i}: ${item} внутри массива ${arr2}`);
});

const str = prompt("", "");
const products = str.split(",");
console.log(products);
products.sort(); //всегда сортирует как строки
console.log(products);

//обратная операция
console.log(producrs.join("; "));

//функция для сортировки чисел. передается в callback
products.sort(compareNum);
function compareNum(a, b){
    return a-b;
}
console.log(products);

//методы не работают для псевдомассивов