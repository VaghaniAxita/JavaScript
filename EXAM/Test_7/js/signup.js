import navbar from "../components/navbar.js";
import getValue from "../components/help.js";

const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: getValue("username"),
        email: getValue("email"),
        password: getValue("password")
    };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", true);
    window.location.href = "/EXAM/Test_7/pages/login.html";
};

document.getElementById("signupForm").addEventListener("submit", handleData);
document.getElementById("navbar").innerHTML = navbar();