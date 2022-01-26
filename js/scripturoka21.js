"use strict";

const arr = [1, 2, 3, 4, 5];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
});

// arr.pop(); // удаляет последний элемент

// console.log(arr);

// arr.push(10); // добавляет новый элемент в конец массива

// console.log(arr);

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
console.log(products.join("; "));