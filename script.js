$(document).ready(function() {

    // Scroll down to main section when clicking on the proceed button in the splash section
    $('#splash-proceed').on('click', function(){
        $('html,body').animate({ scrollTop: $('.article-text').first().offset().top - 50 }, 800); 
    });

    // Navigation toggle (on small displays)
    $('#navtoggle').click(function(){
        
        // If showing, then hide
        if($('#navtoggle').hasClass('navtoggle-showing')) {
            $('nav').animate({
                left: '-100vw'
            });   
            $('#navtoggle').removeClass('navtoggle-showing');
        }
        // If hidden, then show
        else {
            $('nav').animate({
                left: '0'
            }); 
            $('#navtoggle').addClass('navtoggle-showing');
        }
    });

});