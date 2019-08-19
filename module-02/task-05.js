'use strict'

const formatString = string => {
    const stringLength = string.length;

    if (stringLength <= 40) {
        return string;
    } else {
        let formatedString = string.split("");
        formatedString.splice(39, formatedString.length, "...");
        return formatedString.join("");
    }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
    )
);