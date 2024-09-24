"use strict";

function server(){
    setTimeout(function(){
        console.log(1);
    }, 1000)
}
function foo(){
    console.log(2);
}

server();
foo();

function serverNew(host, callback){
    console.log(`Server ${host} is starting...`)
    callback();
}

//serverNew('MyServer', function(){
//  console.log('connect success!');
//});

function done(){
    console.log('connect success!');
}

serverNew('MyServer', done);


/*Задание
Реализовать свой пример call-back функции
сохранить в github*/


function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    const name = 'John';
    callback(name);
  }
  processUserInput(greeting); 
  