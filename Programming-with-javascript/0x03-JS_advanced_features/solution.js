// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (item of dairy) {
        console.log(item);
    }
}
logDairy();

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (condition of Object.keys(bird)) {
        console.log(condition + ': ' + bird[condition]);
    } 
}
birdCan();

// Task 3
function animalCan() {
    for (prop in bird) {
        console.log(prop + ': ' + bird[prop]);
    }
}
animalCan();
