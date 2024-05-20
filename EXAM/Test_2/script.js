// Countdown
const StartWith = (number) => {
    return number < 10 ? '0' + number : number;
}

const calculateRemainingTime = (targetTime) => {
    let now = new Date();
    let timeDifference = targetTime - now;

    if (timeDifference <= 0) {
        return { hours: 0, minutes: 0, seconds: 0 };
    }

    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
}

const Countdown = (targetTime) => {
    return () => {
        let { hours, minutes, seconds } = calculateRemainingTime(targetTime);

        let hoursString = StartWith(hours);
        let minutesString = StartWith(minutes);
        let secondsString = StartWith(seconds);

        let timeString = `${hoursString}:${minutesString}:${secondsString}`;
        let countdown = document.getElementById('countdown');
        countdown.innerHTML = timeString;
    };
}

let targetTime = new Date();
targetTime.setHours(targetTime.getHours() + 24);

const updateCountdown = Countdown(targetTime);
setInterval(updateCountdown, 1000);
updateCountdown();

// Form
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;

    // Create a new product element
    const productElement = document.createElement('div');
    productElement.className = 'product';

    // Create image element
    const productImageElement = document.createElement('img');
    productImageElement.src = 'placeholder.jpg'; // Replace 'placeholder.jpg' with the actual image URL
    productImageElement.alt = productName + ' Image';

    // Create product details container
    const productDetails = document.createElement('div');
    productDetails.className = 'product-details';

    // Create product name element
    const productNameElement = document.createElement('h3');
    productNameElement.textContent = productName;

    // Create product description element
    const productDescriptionElement = document.createElement('p');
    productDescriptionElement.textContent = productDescription;

    // Create buy button
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';
    buyButton.className = 'buy-button btn btn-success';

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button btn btn-danger';

    // Append all elements to the product container
    productDetails.appendChild(productNameElement);
    productDetails.appendChild(productDescriptionElement);
    productDetails.appendChild(buyButton);
    productDetails.appendChild(deleteButton);

    // Append image and product details container to the product element
    productElement.appendChild(productImageElement);
    productElement.appendChild(productDetails);

    // Add the new product to the products section
    const productsSection = document.getElementById('products');
    productsSection.appendChild(productElement);

    // Clear the form
    document.getElementById('productForm').reset();
});
