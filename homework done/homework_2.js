"use strict";

//1_____________________________________________

//переменная "с" будет иметь значение 2 так как используется префиксный инкремент и переменной "а" сперва присваивается значение "2"
let a = 1, b = 1, c, d;
c = ++a;
console.log(c); // ответ: 2

//переменная "d" будет иметь значение 1 так как используется постфиксный инкремент и переменной "d" сперва присваивается исходное значение переменной "b"
d = b++;
console.log(d); //ответ: 1

//переменная "c" будет иметь значение 5 так как переменной "a" в первом примере было присвоено значение 2 префиксным инерементом. В данном примере "а" увеличилась еще на 1.
c = 2 + ++a;
console.log(c); //ответ: 5

//пример 4
d = 2 + b++;
console.log(d); //ответ: 4 "b" было присвоено значение 2 во втором примере. Так как здесь постфиксный инкремент "b" по прежнему имеет значение 2 и толькпо после сумирования увеличивается на 1.
console.log(a); //3 в третьем примере значение переменной "a" было увеличено до 3.
console.log(b); //3 в этом примере постфиксным инкрементом значение переменной "b" увеличилось на 1.

//2_____________________________________________

//Переменная x=5, a=4. Во второй строке выполняется умножение с присваиванием (a = a * 2)
let a = 2;
let x = 1 + (a *= 2);

//3_____________________________________________

//- если a и b положительные, вывести их разность(ноль можно считать положительным числом);
let a = 2, b = 3, result;

if (a < 0 || b < 0) {
    alert("Все числа должны быть положительными");
}

if (a >= 0 && b >= 0 && a > b) {
    result = a - b;
} else {
    result = b - a;
}

console.log("Разность чисел: " + result);

// - если а и b отрицательные, вывести их произведение;
let a = -2, b = -3, result;

if (a < 0 && b < 0) {
    result = a * b;
} else {
    alert("Все числа должны быть отрицательными");
}

console.log("Произведение чисел: " + result);

// - * если а и b разных знаков, вывести их сумму;
let a = -2, b = 3, result;

if (a < 0 && b >= 0 || a >= 0 && b < 0) {
    result = a + b;
} else {
    alert("Числа должны быть разных знаков");
}

console.log("Сумма чисел разных знаков: " + result);

//4_____________________________________________

// Реализовать основные 4 арифметические операции(+, -, /, *) в виде функций с двумя
// параметрами.Т.е.например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return.

/**
 * 
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @returns cложение  чисел
 */
function sum(num1, num2) {
    return num1 + num2;
}

/**
 * 
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @returns вычитание чисел
 */
function sub(num1, num2) {
    return num1 - num2;
}

/**
 * 
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @returns умножение чисел
 */
function mul(num1, num2) {
    return num1 * num2;
}

/**
 * 
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @returns деление чисел
 */
function div(num1, num2) {
    return num1 / num2;
}

console.log("Результат cложения: " + sum(2, 3));
console.log("Результат вычитания: " + sub(10, 3));
console.log("Результат умножения: " + mul(2, 3));
console.log("Результат деления: " + div(10, 2));

//5_____________________________________________

// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.В зависимости от
// переданного значения операции(использовать switch) выполнить одну из арифметических
// операций
//     (использовать функции из задания 4) и вернуть полученное значение.

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "cложение":
            function sum(num1, num2) {
                return num1 + num2;
            }
            console.log("Результат cложения: " + sum(arg1, arg2));
            break;
        case "вычитание":
            function sub(num1, num2) {
                return num1 - num2;
            }
            console.log("Результат вычетания: " + sub(arg1, arg2));
            break;
        case "умножение":
            function mul(num1, num2) {
                return num1 * num2;
            }
            console.log("Результат умножения: " + mul(arg1, arg2));
            break;
        case "деление":
            function div(num1, num2) {
                return num1 / num2;
            }
            console.log("Результат деления: " + div(arg1, arg2));
            break;
    }
}

mathOperation(2, 3, "cложение");
mathOperation(10, 5, "вычитание");
mathOperation(3, 6, "умножение");
mathOperation(15, 3, "деление");

/*
6 **. (Это задание не является частью курса, можете его не делать, оно для тех кому мало
обычных заданий, требует времени и возможно гугления, делайте по желанию.)
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
положить на счет в банке.Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
числа.
*/

let userNumb = +prompt("Введите сумму депозита");
let stringNumb = String(userNumb);
let strinLength = stringNumb.length - 1;
let lastNumb = Number(stringNumb.charAt(strinLength));
let rubleСase = "рубль";

switch (lastNumb) {
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        rubleСase = "рублей";
        break;
    case 1:
        rubleСase = "рубль";
        break;
    case 2:
    case 3:
    case 4:
        rubleСase = "рубля";
        break;
}

document.write("Ваша сумма в " + userNumb + " " + rubleСase + " успешно зачислена.")
