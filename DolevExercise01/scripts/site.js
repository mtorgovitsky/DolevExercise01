function passwordsMatch() {
    var password = document.getElementById("password");
    var confirm = document.getElementById("confirm");
    var matchText = document.getElementById("passwordsMatch");
    if (password.value !== confirm.value) {
        password.style.borderColor = "red";
        confirm.style.borderColor = "red";
        matchText.style.display = "block";
        matchText.innerHTML = "Passwords Don't Match!";
    }
    else {
        password.style.borderColor = "inherit";
        confirm.style.borderColor = "inherit";
        matchText.style.display = "none";
    }
}