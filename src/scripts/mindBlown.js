function mindBlown() {
    var profilePic = $(this)
    profilePic.attr('src', 'images/explosion.gif');
    setTimeout(function() {
        profilePic.attr('src', 'images/me.png');
    }, 2000);
}