const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const fileCode = loginForm.fileCode.value;

    if (fileCode === "928357023958923042") {
        window.open("sophieDoss.html", "blank_");
    } else if(fileCode === "7773423428"){
        window.open("decryptEmails.html", "blank_");
    }
    else {
        console.log(fileCode);
        alert("Invalid File Code");
    }
})