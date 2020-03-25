'use strict';

function getResult(a, b, c) {
    let d = (b * b) - (4 * a * c),
        x = [];
    if (d < 0) {

        return x;
    } else if (d === 0) {
        x.push(-b / (2 * a));

        return x;
    } else if (d > 0) {
        x.push((-b + Math.sqrt(d)) / (2 * a));
        x.push((-b - Math.sqrt(d)) / (2 * a));

        return x;
    }
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log('Введено больше пяти оценок');
        marks.splice(5);

        return marks.reduce((sum, current) => sum + current, 0) / marks.length;
    } else {

        return marks.reduce((sum, current) => sum + current, 0) / marks.length;
    }
}

function askDrink(name, dateOfBirthday) {
    let date = new Date(),
        year = date.getFullYear() - dateOfBirthday.getFullYear();
    if (year > 18) {

        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {

        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}