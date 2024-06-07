let removeElement = (array, n) => {


    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[n]) {
            return array[i];
        }
    }
};


let passed_in_array = [1, 2, 3, 4, 5];
let element_to_be_searched = 2;
let result = removeElement(passed_in_array, element_to_be_searched);


console.log("Remaining elements: " + result);
