"use strict";

// 1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 включительно.

for (let i = 0; i <= 10; i++) {

    let desc = "ноль";
    let even = i % 2;

    switch (even) {
        case 0:
            desc = "четное число"
            break;
        default:
            desc = "нечетное число"
    }
    switch (i) {
        case 0:
            desc = "ноль"
    }

    console.log(i + " - это " + desc);
}

// 2.  Выведите в консоль значения, указанные рядом с комментариями.

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author + " " + post.comments[0].rating.dislikes + " " + post.comments[1].userId + " " + post.comments[1].text);

// 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%, можете использовать метод forEach 

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product) {
    product.price = product.price - (product.price * (15 / 100));
    console.log(product.id + " " + product.price)
});

// 4. 1. Получить все товары, у которых есть фотографии. 2. Отсортируйте товары по цене (от низкой цены к высокой).

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];