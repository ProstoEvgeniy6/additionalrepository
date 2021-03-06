/*  Это задание выполняется отдельно от нашего проекта с бюджетом!
Для этого задания создайте отдельный репозиторий.
Используйте функции alert, confirm, prompt для общения с пользователем.
Написать игровой бот.
"Загадывание случайного числа от 1 до 100"
Что должна делать программа:
— спрашивает пользователя: "Угадай число от 1 до 100".
— если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
— если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
— если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
— если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".
—  если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение  "Поздравляю, Вы угадали!!!".
Программа должны быть выполнена с помощью рекурсии, без единого цикла.
Загаданное число должно храниться «в замыкании»      */

let userNumber;
let rendomNumber;
const numbeAtClosure = () => { 
    const result = Math.ceil( Math.random() * 100 );
    return () => result;
}

const newNumber = numbeAtClosure();

alert("Загадывание случайного числа от 1 до 100");

rendomNumber = newNumber();

let enterNumber = (text) => {
    let result = prompt(text);
    return result;
} 

userNumber = enterNumber("   Введи число от 1 до 100   ");

let start = (arg) => {

    if(typeof parseFloat(userNumber) === 'number' && ! isNaN(parseFloat(userNumber))) {        
        if(arg > +userNumber) {
            userNumber = enterNumber("Ваше число меньше. Введите число от 1 до 100 ещё раз");
            start(arg);
        } else if (arg < +userNumber) {
            userNumber = enterNumber("Ваше число больше. Введите число от 1 до 100 ещё раз");
            start(arg);
        } else if (arg === +userNumber ) {
            alert("Поздравляю, Вы угадали!!!");
            return;
        }
    } else if ( isNaN(parseFloat(userNumber)) && userNumber != null) {
        userNumber = enterNumber("Введи число!");
        start(arg);
    } else if (userNumber == null) {
        alert("Игра окончена");
        return;
    }
};
console.log(newNumber());
console.log(newNumber());
start(rendomNumber);
