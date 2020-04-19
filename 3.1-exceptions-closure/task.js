'use strict';

function parseCount(arg) {

    if (isNaN(Number.parseInt(arg))) throw new Error('Невалидное значение');

    return Number.parseInt(arg);
}

function validateCount(arg) {

    try {

        return parseCount(arg);
    } catch (e) {

        return e;
    }

}

class Triangle {

    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) throw new Error('Треугольник с такими сторонами не существует');

        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {

        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }
}

function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getPerimeter: () => 'Ошибка! Неправильный треугольник',
            getArea: () => 'Ошибка! Неправильный треугольник',
        }
    }

}