'use strict'

function logItems(array) {
    let counter = 1;
    for (let i = 0; i < array.length; i++) {
        console.log(`${counter} - ${array[i]}`);
        counter++;
    }
}

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);