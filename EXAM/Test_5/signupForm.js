document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const imgUrl = document.getElementById("imgUrl").value;
    const password = document.getElementById("password").value;
    const country = document.getElementById("country").value;

    const user = {
        fullName,
        email,
        imgUrl,
        password,
        country
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert('Sign up successful!');
    window.location.href = "./login.html";
});