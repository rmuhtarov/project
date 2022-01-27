"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = {
    health: 100
};

// const john = Object.create(soldier); 

// john.__proto__ = soldier; // Старая  версия прототипного наследование

Object.setPrototypeOf(john, soldier);

john.sayHello();