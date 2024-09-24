"use strict";

//const obj = new Object(); //один из вариантов создания объектов

//самый частый вариант создания объекта
const option = {
    name:'test',
    width: '640', 
    height:'480',
    colors:{
        border:'black',
        bg:'red'
    }
};

console.log(option.name);
console.log(option['name']); //реже используемый вариант нотации

console.log(option);

for(let key in option){
    console.log(`Свойство ${key} имеет значение ${option[key]}`)
}

let counter = 0;
for(let key in option){
    if(typeof(option[key]) === 'object'){
        for(let i in option[key]){
            console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
            counter++;
        }
    }else{
        console.log(`Свойство${key} имеет значение ${option[key]}`);
        counter++;
    }
}

console.log(counter);

console.log(Object.keys(option));
console.log(Object.keys(option).length);

//добавим поведение для объекта
const option2 = {
    name: 'test',
    width: '640',
    height: '480',
    colors:{
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Yes!");
    }
};

//деструктуризация объекта (вытягивание нужных свойств)
const{border, bg} = option2.colors;
console.log(border);

/*Задание
Создайте объект game
в нем 7 свойств
одно из свойств сделайте в виде объекта, состоящего из 3 свойств
добавьте 2 метода и вызовите их.
С помощью деструктуризации выведите два любых свойства в консоль */

const game={
    name: "The Last Andventure", 
    rating: 4.8,
    isMultiPlayer: true,
    releaseYear: 2017,
    creators:{
        developer: "mizandarii",
        producer: "bobkelso",
        artist: "darkro"
    },
    genre: "horror",
    downloads: 232,

    summary: function(){
        console.log(`name: ${this.name} \n rating: ${this.rating} \n genre: ${this.genre}`);
    },
    showRating: function(){
        console.log(`the game has an average rating of ${this.rating}  with ${this.downloads} downloads`)
    }

};

game.summary();
game.showRating();

const{developer, artist} = game.creators;
console.log(developer)