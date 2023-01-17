const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const fileCode = loginForm.fileCode.value;

    if (fileCode === "The Bear") {
        alert("You have successfully logged in.");
        window.open("bennyProfile.html", "blank_");
    } else {
        console.log(fileCode);
        alert("get out");
    }
})