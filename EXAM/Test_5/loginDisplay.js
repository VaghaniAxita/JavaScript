document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = JSON.parse(localStorage.getItem("user"));

    if (username && username.email === email && username.password === password) {
        localStorage.setItem("loggedInUser", JSON.stringify(username));
        alert('Login successful!');
        window.location.href = "./index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});