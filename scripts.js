var projects = [
    {
        "name": "Claim Academy",
        "image": "images/claim-academy.jpg",
        "link": "http://claimacademystl.com/"
    }, {
        "name": "DexSphere"
    }
];


$(document).ready(function() {
    
    $.each(projects, function(index, project) {
        console.log(project);
        $('#projects').append('<a href="' + project.link + '" target="_blank"><img src="' + project.image + '" />' + project.name + '</a>');
    });


    $('#contactForm').on('submit', submitContactForm);
    $("#profile-picture").on('click', function() {
        var profilePic = $(this)
        profilePic.attr('src', 'images/explosion.gif');
        setTimeout(function() {
            profilePic.attr('src', 'images/me.png');
        }, 2000);
    });

    var backgroundImages = [
        '1.jpg',
        '2.jpg',
        '3.jpg'
    ];
    var i = 0;
    setInterval(function() {
        $("body").css('background-image', 'url("images/backgrounds/' + backgroundImages[i] + '")');
        i = i + 1;
        if (i == 3) {
            i = 0;
        }
    }, 2000);
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