"use strict";

//1
let Tc = +prompt("Введите температуру в градусах по Цельсию");
let Tf = (9 / 5) * Tc + 32;
alert("температура по Фаренгейту - " + Tf + " градусов.");

//2
let adminName = "Василий";
let admin = adminName;
console.log(admin);

//3

/*
1. Сумируем два первых числа
2. Поскольку третье значение строчное оно не будет сумироваться, а добавится справа от суммы двух первых чисел (2010)
3. 2010 присваиваем в переменную result1
4. с помощью console.log выводим result1 в консоль
*/
let result1 = 10 + 10 + "10";
console.log(result1);

/*
1. Поскольку второе значение строчное все три цифры станут в один ряд(101010)
2. 101010 присваиваем в переменную result2
3. с помощью console.log выводим result2 в консоль
*/
let result2 = 10 + "10" + 10;
console.log(result2);

/*
1. Унарный плюс преобразовал строчное значение в число.
2. Сумируем числа
3. 30 присваиваем в переменную result3
4. с помощью console.log выводим result3 в консоль
*/
let result3 = 10 + 10 + +"10";
console.log(result3);

/*
1. Унарный минус преобразовал пустое значение в -0.
2. В результате деления получаем отрицательную безконечность
3. Отрицательную безконечность присваиваем в переменную result4
4. с помощью console.log выводим result4 в консоль
*/
let result4 = 10 / -"";
console.log(result4);

/*
1. Унарный плюс не может преобразовать строчное значение в число, потому что в нем используется заятая, а не точка.
2. В результате деления получаем не число
3. NaN присваиваем в переменную result5
4. с помощью console.log выводим result5 в консоль.
*/
let result5 = 10 / +"2,5";
console.log(result5);