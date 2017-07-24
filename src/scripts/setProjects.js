function setProjects() {
    var projects = [
        {
            "name": "Claim Academy",
            "image": "images/claim-academy.jpg",
            "link": "http://claimacademystl.com/"
        }, {
            "name": "DexSphere"
        }
    ];

    $.each(projects, function(index, project) {
        console.log(project);
        $('#projects').append('<a href="' + project.link + '" target="_blank"><img class="animated pulse infinite" src="' + project.image + '" />' + project.name + '</a>');
    });
}