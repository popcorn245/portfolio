function backgroundChanger() {
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
}