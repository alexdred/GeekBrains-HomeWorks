"use strict";

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

/*
правильное решение в итоге подсмотрел у вас.

У меня в таком варианте подтягивался пустой массив:

let havePhotos = products.filter(function (product) {
    return product.photos;
});

хотел решить это так, но product.photos.length выдает ощибку:

let havePhotos = products.filter(function (product) {
    return product.photos.length > 0;
});

*/

let havePhotos = products.filter(product => "photos" in product && product.photos.length > 0);

console.log(havePhotos);

// 4.2. Отсортируйте товары по цене (от низкой цены к высокой).

let queue = products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;
});


console.log(queue);