'use strict';

class Weapon {

    constructor(options) {
        this.name = options.name;
        this.attack = options.attack;
        this.durability = options.durability;
        this.range = options.range;
        this.startDurability = this.durability;
    }

    takeDamage(damage) {

        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {

        if (this.durability === 0) {
            this.attack = 0;
        }

        return (this.durability >= this.startDurability * .3) ? this.attack : this.attack / 2;

    }

    isBroken() {
        return this.durability <= 0;
    }
}

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});

const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

const oldSword = new Weapon({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1,
});

const longBow = new Weapon({
    name: 'Длинный лук',
    attack: 15,
    durability: bow.durability,
    range: 4,
});

const axe = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: sword.range,
});

const stormStaff = new Weapon({
    name: 'Посох Бури',
    attack: 10,
    durability: staff.durability,
    range: 3,
});

sword.takeDamage(5);
console.log(sword.durability); // 5

sword.takeDamage(50);
console.log(sword.durability); // 0

arm.takeDamage(20);
console.log(arm.durability); // Infinity

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

class Arm extends Weapon {
    constructor() {
        super({
            name: 'Рука',
            attack: 1,
            durability: Infinity,
            range: 1,
        });
    }
}

class Bow extends Weapon {
    constructor() {
        super({
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3,
        });
    }
}

class Sword extends Weapon {
    constructor() {
        super({
            name: 'Меч',
            attack: 25,
            durability: 500,
            range: 1,
        });
    }
}

class Knife extends Weapon {
    constructor() {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1,
        });
    }
}

class Staff extends Weapon {
    constructor() {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2,
        });
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        {
            this.name = 'Длинный лук';
            this.attack = 15;
            this.range = 4;
        }
    }
}

class Axe extends Sword {
    constructor() {
        super();
        {
            this.name = 'Секира';
            this.attack = 27;
            this.durability = 800;
        }
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
        {
            this.name = 'Посох Бури';
            this.attack = 10;
            this.range = 3;
        }
    }
}

const newBow = new Bow();

console.log(newBow.name); // Лук
console.log(newBow.attack); // 10
console.log(newBow.durability); // 200
console.log(newBow.range); // 3