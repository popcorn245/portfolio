$(document).ready(function() {
    
    $('#contactForm').on('submit', submitContactForm);

    var colors = ['red', 'blue', 'green'];
    setInterval(function() {
        var currentColor = colors[Math.floor(Math.random() * 2)];  
        $('body').css('background-color', currentColor);
    }, 1000);
});



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