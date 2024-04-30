let arr = [2, 3, 4, 5, 6, 9, 10, 3]

const print = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(arr[i]);
    }
}
console.log( "Array :\n")
print(arr);

const Max = (arr) => {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log("Find max : \n")
console.log(Max(arr)); 