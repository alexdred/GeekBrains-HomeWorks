"use strict";

//1. Понимаю, что на простое решение не похоже, но так тоже работает).

let randomNum = +prompt('введите цело число от 0 до 999');

if (!parseInt(randomNum) || (randomNum ^ 0) !== randomNum || randomNum > 999) {
    alert('Нужно написать цело число от 0 до 999');
} else {

    randomNum = randomNum.toString();
    let numLen = randomNum.length;

    switch (numLen) {
        case 2:
            randomNum = "0" + randomNum;
            break;
        case 1:
            randomNum = "00" + randomNum;
            break;
    }

    class Number {
        constructor(num) {
            this.hundereds = num.charAt(0);
            this.tens = num.charAt(1);
            this.units = num.charAt(2);
        }
    }

    const result = new Number(randomNum);

    console.log(randomNum);
    console.log(result);
}

// 1.1 es5

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * .25);
}

//1.2 es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function () {
    this.text = prompt("напишите текст");
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date)
    this.highlighted = false;
}

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

// 1.1 es6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * .25);
    }
}

//1.2 es6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        this.text = prompt("напишите текст");
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}
