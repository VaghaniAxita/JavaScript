let str = "white"
const print = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (i % 2 != 0) {
            console.log(str[i]);
        }
    }
}
print(str)