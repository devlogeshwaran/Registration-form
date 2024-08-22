function validateForm() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const message = document.getElementById('message');

    if (firstname === "" || lastname === "" || email === "" || contact === "" || address === "" || city === "") {
        message.textContent = "All fields are required!";
        message.style.color = "red";
        return false;
    }

    // Basic email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        message.textContent = "Please enter a valid email!";
        message.style.color = "red";
        return false;
    }

    // Basic contact number validation (10 digits)
    if (contact.length !== 10 || isNaN(contact)) {
        message.textContent = "Please enter a valid 10-digit contact number!";
        message.style.color = "red";
        return false;
    }

    message.textContent = "Registration complete!";
    message.style.color = "green";
    return false; // Prevent form submission for demo purposes
}