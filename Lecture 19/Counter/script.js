const timer = document.querySelector(".counter");


let seconds = 59;
let minutes = 59;
let hours = 23;

const count = () => {
    if (seconds > 0) {
        seconds -= 1;
    } else if (seconds === 0 && minutes > 0) {
        minutes -= 1;
        seconds = 59;
    } else if (minutes === 0 && seconds === 0) {
        hours -= 1;
        minutes = 59;
        seconds = 59;
    }
    if (seconds === 0 && minutes === 0 && hours === 0) {
        clearInterval(counter);
    }

    timer.innerHTML = `${hours} : ${minutes} : ${seconds}`;
};



const counter = setInterval(count, 1000);

