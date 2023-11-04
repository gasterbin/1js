document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim().replace(/\s+/g, ' ');

    const formData = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    };

    console.log(formData);
});
