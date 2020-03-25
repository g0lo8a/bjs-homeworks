'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    let loanBody = amount - contribution,
        p = percent / 100 / 12,
        nowDate = new Date(),
        month = date.getMonth() - nowDate.getMonth() + (12 * (date.getFullYear() - nowDate.getFullYear())),
        totalAmount = +(loanBody * (p + p / (((1 + p) ** month) - 1)) * month).toFixed(2);

    console.log(totalAmount);

    return totalAmount;
}

function getGreeting(name) {
    if (!name) {

        return 'Привет, мир! Меня зовут Аноним';
    } else {

        return `Привет, мир! Меня зовут ${name}`;
    }
}