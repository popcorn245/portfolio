function submitContactForm() {
    event.preventDefault();
    var x = document.forms["contactForm"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    } else {
        $(this).slideUp();
        $("#success").slideDown();
        //alert('Thank you for submitting the form');
    }
}