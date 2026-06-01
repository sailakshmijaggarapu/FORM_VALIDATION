document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let error = document.getElementById("error");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let namePattern = /^[A-Za-z ]+$/;
    let phonePattern = /^[0-9]{10}$/;

    error.style.color = "red";

    // Empty fields
    if(name === "" || email === "" || phone === "" || message === ""){
        error.innerHTML = "All fields are required!";
        return;
    }

    // Name validation
    if(!namePattern.test(name)){
        error.innerHTML = "Name should contain only letters!";
        return;
    }

    // Email validation
    if(!emailPattern.test(email)){
        error.innerHTML = "Enter a valid email address!";
        return;
    }

    // Phone validation
    if(!phonePattern.test(phone)){
        error.innerHTML = "Phone number must contain exactly 10 digits!";
        return;
    }

    // Message validation
    if(message.length < 5){
        error.innerHTML = "Message should contain at least 5 characters!";
        return;
    }

    error.style.color = "green";
    error.innerHTML = "Form submitted successfully!";
});