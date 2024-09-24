"use strict";

let number = 10;
//замыкание (сама функция, вместе с тем что ей доступно)
function showMessage(text){
    console.log(text);
    //let number = 20;
    console.log(number);
}

showMessage("Hello!!!");
console.log(number);

const server = function(){
    console.log('server start...')
};

server();

const calc = (x, y) => x + y;
//const calc = (x, y) => {
//    return x+y    
//};

//const calc = x => x+10;

console.log(calc(10, 5));

//Задание
//Реализовать пример стрелочной функции
//Функция должна выдавать приветствие и после приветствия выдать число пи
const greet = () => {
    console.log("HOLA!");
    console.log(Math.PI)
}

greet();