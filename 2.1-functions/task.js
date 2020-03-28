'use strict';

function getSolutions(a, b, c) {
    const D = (b * b) - (4 * a * c),
        x = [];

    if (D === 0) {
        x.push(-b / (2 * a));
    } else if (D > 0) {
        x.push((-b + Math.sqrt(D)) / (2 * a));
        x.push((-b - Math.sqrt(D)) / (2 * a));
    }

    return {D: D, roots: x};
}

function showSolutionsMessage(a, b, c) {
    const result = getSolutions(a, b, c);
    const message = result.D < 0 ? 'Уравнение не имеет вещественных корней' :
        (result.D === 0 ? `Уравнение имеет один корень X₁ = ${result.roots[0]}` :
            `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);

    return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\nЗначение дискриминанта: ${result.D}\n${message}`;
}

console.log(showSolutionsMessage(1, 2, 3));
console.log(showSolutionsMessage(7, 20, -3));
console.log(showSolutionsMessage(2, 4, 2));

const journalSemWhite = {
    /*algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4],*/
};

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
    return marks.reduce((sum, current) => sum + current, 0) / marks.length
}

function getAverageScore(data) {
    let i = 0,
        average = 0,
        obj = {};

    if (Object.keys(data).length === 0) {
        obj.average = 0;
        return obj;
    }

    for (let key in data) {
        obj[key] = getAverageMark(data[key]);
        i++;
        average += obj[key];
    }
    obj.average = average / i;

    return obj;
}

console.log(getAverageScore(journalSemWhite));

function getDecodedValue(secret) {
    if (secret === 0) {

        return 'Родриго';
    } else {

        return 'Эмильо';
    }
}

function getPersonData(secretData) {

    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    };
}

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));