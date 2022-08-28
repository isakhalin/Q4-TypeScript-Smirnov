"use strict";
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const runTimer = () => rl.question('Установите количество секунд, через которое сработает таймер: ', (time: string): void => {
    let timeValue: number = +time;

    if (isNaN(timeValue)) {
        console.log('Необходимо ввести число больше нуля');
        return runTimer();
    } else {
        console.log(`Вы установили таймер на: ${timeValue} секунд`);

        const timer = setInterval(() => {
            console.log(`Осталось: ${--timeValue}`);
        }, (1000));

        setTimeout(() => {
            clearInterval(timer);
            console.log('Время вышло');
            rl.close();
        }, (timeValue * 1000));
    }
});

runTimer();