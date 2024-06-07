function deleteAtIndex(arr, index) {
    // Check for empty array or invalid index
    if (!arr.length || index < 0 || index >= arr.length) {
        throw new Error("Invalid array or index");
    }


    // Loop through elements after the index
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }


    // Decrement the length property to reflect the removed element
    arr.length = arr.length - 1;


    // Return the modified array (optional)
    return arr;
}


// Example usage
const myArray = [1, 2, 3, 4, 5];
console.log(myArray);
const deletedArray = deleteAtIndex(myArray, 2);


// Output: [1, 2, 4, 5] (original array modified)
console.log(deletedArray); // Output: [1, 2, 4, 5] (same as myArray, if returned)
