
$('.subnav-header').click( function(e) {
    e.preventDefault();
    $(e.target).next('.subnav').toggleClass('visible')
});


$('.product button').click( function(e) {
    e.preventDefault();
    location.href = 'rendeles.html'
});