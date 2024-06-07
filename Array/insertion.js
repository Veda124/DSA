let array = [1, 2, 3, 4, 5, 6];
let indexu = 2
let toPush = 45
for (let index = 0; index < array.length; index++) {
    if (array[index] === array[indexu]) {
        array[index] = toPush
    }
    console.log('after', array);
}
