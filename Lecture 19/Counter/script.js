const StartWith = (number) => {
    return number < 10 ? '0' + number : number;
}

const Clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    
    let hoursString = StartWith(hours);
    let minutesString = StartWith(minutes);
    let secondsString = StartWith(seconds);

    let day = date.getDay();
    let dayOfMonth = date.getDate();
    let month = date.getMonth();

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let dayName = weekdays[day];
    let monthName = months[month];

    let timeString = `${hoursString}:${minutesString}:${secondsString} ${ampm}`;
    let dateString = `${dayName}, ${monthName}, ${dayOfMonth}`;

    let clock = document.getElementById('clock');
    clock.innerHTML = '';

    let timeElement = document.createElement('div');
    timeElement.id = 'time';
    timeElement.className = 'display-4';
    timeElement.textContent = timeString;

    let dateElement = document.createElement('div');
    dateElement.id = 'date';
    dateElement.className = 'h5';
    dateElement.textContent = dateString;

    let message = '';
    let imgSrc = '';
    if (date.getHours() >= 5 && date.getHours() < 12) {
        message = 'Good Morning!';
        imgSrc = '/img/morning.jpg'; 
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        message = 'Good Afternoon!';
        imgSrc = '/img/afternoon.jpg'; 
    } else if (date.getHours() >= 18 && date.getHours() < 21) {
        message = 'Good Evening!';
        imgSrc = '/img/evening.jpg'; 
    } else {
        message = 'Good Night!';
        imgSrc = '/img/night.jpg'; 
    }

    // Create the message element
    let messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.className = 'h4';
    messageElement.textContent = message;

    // Create the image element
    let imgElement = document.createElement('img');
    imgElement.id = 'timeImage';
    imgElement.src = imgSrc;
    imgElement.alt = message;
    imgElement.className = 'img-fluid';

    // Append all elements at once
    clock.append(timeElement, dateElement, messageElement, imgElement);
};

setInterval(Clock, 1000);
Clock();