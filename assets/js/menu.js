
$('.subnav-header').click( function(e) {
    e.preventDefault();
    console.log($(e.target).next('.subnav').toggleClass('visible'))
});


$('.product button').click( function(e) {
    location.href = 'rendeles.html'
});