
$('.subnav-header').click( function(e) {
    e.preventDefault();
    console.log(e);
    console.log($(e.target).next('.subnav').toggleClass('visible'))
});
