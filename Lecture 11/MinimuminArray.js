let array = [2, 3, 4, 5, 6, 9, 10, 3]

const print = (array) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(array[i]);
    }
}
console.log("Array :\n")
print(array);

const Min = (array) => {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }

    }
    return min
}
console.log("Find Min:");
console.log(Min(array));