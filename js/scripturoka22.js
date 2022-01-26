"use strict";

let b = 10, a = b; // Передача по значению (точнее передается копия)

b = b + 5;

console.log(a);
console.log(b);


const obj = {
    a: 5,
    b: 10,
    c: {
        x: 2,
        y: 4
    }
};

const copy = obj; // Передача по ссылке (точнее передается ссылка к оригиналу)
copy.a = 0;

console.log(obj);
console.log(copy);

const add = {
    d: 20,
    e: 25
};

console.log(Object.assign(obj, add)); // Поверхностное копирование

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // Поверхностное копирование

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'ok'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [1, 2, 3];
log(...num);

const array = ["a", "b"];
const newArr = [...array]; // Поверхностное копирование с помощью spread 