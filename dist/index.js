"use strict";
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const runTimer = () => rl.question('Установите количество секунд, через которое сработает таймер: ', (time) => {
    let timeValue = +time;
    if (isNaN(timeValue)) {
        console.log('Необходимо ввести число больше нуля');
        return runTimer();
    }
    else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXJDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7SUFDaEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO0lBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtDQUN6QixDQUFDLENBQUM7QUFFSCxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGdFQUFnRSxFQUFFLENBQUMsSUFBWSxFQUFRLEVBQUU7SUFDeEgsSUFBSSxTQUFTLEdBQVcsQ0FBQyxJQUFJLENBQUM7SUFFOUIsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sUUFBUSxFQUFFLENBQUM7S0FDckI7U0FBTTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLFNBQVMsU0FBUyxDQUFDLENBQUM7UUFFNUQsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFWCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDMUI7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnN0IHJlYWRsaW5lID0gcmVxdWlyZSgncmVhZGxpbmUnKTtcclxuXHJcbmNvbnN0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcclxuICAgIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxyXG4gICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dFxyXG59KTtcclxuXHJcbmNvbnN0IHJ1blRpbWVyID0gKCkgPT4gcmwucXVlc3Rpb24oJ9Cj0YHRgtCw0L3QvtCy0LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INGB0LXQutGD0L3QtCwg0YfQtdGA0LXQtyDQutC+0YLQvtGA0L7QtSDRgdGA0LDQsdC+0YLQsNC10YIg0YLQsNC50LzQtdGAOiAnLCAodGltZTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICBsZXQgdGltZVZhbHVlOiBudW1iZXIgPSArdGltZTtcclxuXHJcbiAgICBpZiAoaXNOYU4odGltZVZhbHVlKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQndC10L7QsdGF0L7QtNC40LzQviDQstCy0LXRgdGC0Lgg0YfQuNGB0LvQviDQsdC+0LvRjNGI0LUg0L3Rg9C70Y8nKTtcclxuICAgICAgICByZXR1cm4gcnVuVGltZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYNCS0Ysg0YPRgdGC0LDQvdC+0LLQuNC70Lgg0YLQsNC50LzQtdGAINC90LA6ICR7dGltZVZhbHVlfSDRgdC10LrRg9C90LRgKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQntGB0YLQsNC70L7RgdGMOiAkey0tdGltZVZhbHVlfWApO1xyXG4gICAgICAgIH0sICgxMDAwKSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9CS0YDQtdC80Y8g0LLRi9GI0LvQvicpO1xyXG4gICAgICAgICAgICBybC5jbG9zZSgpO1xyXG4gICAgICAgIH0sICh0aW1lVmFsdWUgKiAxMDAwKSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxucnVuVGltZXIoKTsiXX0=