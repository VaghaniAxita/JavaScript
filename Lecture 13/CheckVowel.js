let str = "red and white"
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
        count++;
    }
}

if (count > 0) {
    console.log(true);
}
else {
    console.log(false);
} 