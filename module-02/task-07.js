'use strict'

let input;
let sum = 0;
const numbers = [];


do {
    input = prompt('Введи число');
    if (input !== null) {
        numbers.push(Number(input));
    }
} while (input !== null);

if (numbers.length !== 0) {
    for (let number of numbers) {
        sum += number;
    }
    console.log(`Общая сумма чисел равна ${sum}`);
}