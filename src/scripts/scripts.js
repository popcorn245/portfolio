$(document).ready(function() {
    // ON LOAD
    setProjects();
    backgroundChanger();

    // EVENT BINDING
    $('#contactForm').on('submit', submitContactForm);
    $("#profile-picture").on('click', mindBlown);
});