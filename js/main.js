$(document).ready(function () {

    $('#profile_section').load('../templates/profile.html');
    $('#header_section').load('../templates/header.html');
    $('#footer_section').load('../templates/footer.html');

});

"use strict";
$(window).load(function () {
    // PRELOADER
    $('#preloader').fadeOut(); // will fade out the white DIV that covers the website.
}); // window load end