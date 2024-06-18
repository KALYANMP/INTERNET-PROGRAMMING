function toggle(){
    const a = document.getElementById("register");
    const b = document.getElementById("login");
    a.style.display = "none";
    b.style.display = "flex";
    b.style.justifyContent = "center";
    b.style.alignContent = "center";
}
function sign(){
    const a = document.getElementById("register");
    const b = document.getElementById("login");
    a.style.display = "flex";
    a.style.justifyContent = "center";
    a.style.alignContent = "center";
    b.style.display = "none";
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    // Send form data via AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Successful response received
                var response = xhr.responseText;
                if (response === "success") {
                    // Redirect to home.html or another page
                    window.location.href = "home.html";
                } else {
                    // Display error message
                    document.getElementById("error-message").textContent = response;
                }
            } else {
                // Error occurred
                console.error("AJAX request failed with status: " + xhr.status);
            }
        }
    };
    xhr.send(formData);
});
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "register.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = xhr.responseText;
                if (response === "success") {
                    window.location.href = "home.html";
                } else {
                    document.getElementById("error-message1").textContent = response;
                }
            } else {
                console.error("AJAX request failed with status: " + xhr.status);
            }
        }
    };
    xhr.send(formData);
});