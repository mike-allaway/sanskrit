$(document).ready(function() {

    // Scroll down to main section when clicking on the proceed button in the splash section
    $('#splash-proceed').on('click', function(){
        $('html,body').animate({ scrollTop: $('.article-text').first().offset().top - 50 }, 800); 
    });

});