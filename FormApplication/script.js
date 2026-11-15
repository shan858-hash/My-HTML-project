
document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let valid = true;

    // Username
    if (!/^[A-Za-z0-9]{3,15}$/.test(username)) {
        document.getElementById("userError").innerHTML = "Invalid Username";
        valid = false;
    } else {
        document.getElementById("userError").innerHTML = "";
    }

    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid Email";
        valid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    // Password
    if (password.length < 6 || password.length > 10 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[0-9]/.test(password) ||
        !/[@$%&*!]/.test(password)) {

        document.getElementById("passError").innerHTML = "Invalid Password";
        valid = false;

    } else {
        document.getElementById("passError").innerHTML = "";
    }

    // Success
    if (valid) {
        document.getElementById("success").innerHTML = "Form Submitted Successfully!";
    } else {
        document.getElementById("success").innerHTML = "";
    }

});
