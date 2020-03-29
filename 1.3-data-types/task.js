'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || date <= (Date.now() + (60000 * 60 * 24 * 30))) {

        return 'Данные не верны!';
    }

    const isValidParams = percent >= 10 && contribution >= 0 && amount >= 10000;

    if (!isValidParams) {
        return 'Данные не верны!';
    }
    const loanBody = amount - contribution,
        p = percent / 100 / 12,
        nowDate = new Date(),
        month = date.getMonth() - nowDate.getMonth() + (12 * (date.getFullYear() - nowDate.getFullYear())),
        totalAmount = +(loanBody * (p + p / (((1 + p) ** month) - 1)) * month).toFixed(2);

    console.log(totalAmount);

    return totalAmount;
}

function getGreeting(name) {

    return `Привет, мир! Меня зовут ${name || 'Аноним'}`;
}