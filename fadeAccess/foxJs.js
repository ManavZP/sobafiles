const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "The Bear" && password === "candy") {
        alert("You have successfully logged in.");
        window.open("bennyProfile.html", "blank_");
    } else {
        console.log(username + " " + password);
        alert("get out");
    }
})