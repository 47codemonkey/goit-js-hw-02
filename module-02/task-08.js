'use strict'

const logs = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

function isLoginValid(log) {
    if (log.length >= 4 && log.length <= 16) {
        return true;
    } else return false;
}

function isLoginUnique(allLogs, log) {
    if (allLogs.includes(log)) {
        return false;
    } else return true;
}

function addLogin(allLogs, log) {
    if (isLoginValid(log)) {
        if (isLoginUnique(allLogs, log)) {
            logs.push(log);
            return console.log('Логин успешно добавлен!');
        } else return console.log('Такой логин уже используется!');
    } else return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
}


addLogin(logs, 'Ajax');
addLogin(logs, 'robotGoogles');
addLogin(logs, 'Zod');
addLogin(logs, 'jqueryisextremelyfast');