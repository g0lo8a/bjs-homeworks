'use strict';

function getAnimalSound(animal) {

    return animal === undefined ? null : animal.sound;
}

function getAverageMark(marks) {

    return Math.round(marks.reduce((sum, current) => sum + +current, 0) / marks.length) || 0;
}

function checkBirthday(birthday) {

    return ((Date.now() - +new Date(birthday)) / (60000 * 60 * 24 * 365.25)) > 18;
}