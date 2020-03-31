function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    document.getElementById('sound').innerHTML = getAnimalSound(animal);
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        document.getElementById('learner-' + idx + '-average').innerHTML = getAverageMark(marks);
    }
}

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    document.getElementById('disclaimer').innerHTML = checkBirthday(birthday) ? "Да" : "Нет";
}