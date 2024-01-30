$('.mobileHamburger').on('click', function () {
    $('#navbar').toggleClass('d-block');
    $('.mobileHamburger').toggleClass('crossIcon');
    $('.navBarItem').toggleClass('active')
});