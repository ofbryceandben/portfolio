const targetElement = document.querySelector('#lightBox');
bodyScrollLock.disableBodyScroll(targetElement);
bodyScrollLock.enableBodyScroll(targetElement);

    
/*=============================
  Copyright Date
============================ */
var copy = document.getElementById("date");
copy.innerHTML = new Date().getFullYear();

/*=============================
  Loading Screen
============================ */
// If the window is still needing time to be ready, then the loading screen will come up. Once the document is ready, it will fade out. 
$(window).on('load', function () {
    $('#loading').fadeOut(1000);

});


/*=============================
  Lightbox Slider
============================ */
var slider = document.getElementById("toggle");

slider.oninput = function () {  

    if (slider.value >= 50) {
        // Body Scroll Lock Disabled
        bodyScrollLock.enableBodyScroll(targetElement);

        slider.value = 100;
        $('#switchBulb').css({
            display: 'none'
        })

        // Fade out the lightBox after a delay of .5s at a rate of 1.5s
        $('#lightBox').delay(500).fadeOut(1500);

        //Run Banner Animation
        banner();
    }
}
slider.onclick = function(){
    slider.value = 100;

    if (slider.value >= 50) {
        // Body Scroll Lock Disabled
        bodyScrollLock.enableBodyScroll(targetElement);



        // Fade out the lightBox after a delay of .5s at a rate of 1.5s
        $('#lightBox').delay(500).fadeOut(1500);

        //Run Banner Animation
        banner();
    }
}

/*=============================
BANNER ANIMATION: Memoji Source Change + icon slide-in
============================ */
function banner() {
    //Variable connecting to the memojiBox
    var allofEm = $('#memojiBox img');

    //Set the img to first image in squence
    var $active = allofEm.eq(0);

    //Show the first image
    $active.show();

    //set the variable next
    var $next = $active.next();

    //Put it all together!
    var timer = setInterval(function () {

        //add class "switch" to the 'em' element in head
        $('.head em').addClass('switch');

        //fade in the next image
        $next.fadeIn();

        //hide the previous image
        $active.hide();

        //slide in the icons in order left to right
        $('#i1').animate({
            left: 0
        }, 1000);
        $('#i2').delay(300).animate({
            left: 0
        }, 1000);
        $('#i3').delay(600).animate({
            left: 0
        }, 1000);

        // fade in the Down arrow after 3 seconds
        $('#bnrArrw').delay(3000).animate({
            opacity: 100
        }, 1000);

    }, 2000);
}

// When DOM is ready, it will have access to execute these fucntions. 
$(document).ready(function () {
    
    if($('#lightBox').is(":visible")){
        bodyScrollLock.disableBodyScroll(targetElement);
    }

    /*=============================
    Smooth Scroll
    ============================ */
    // Add smooth scrolling to all links
    $('a').on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    /*=============================
     Lightbox Animation
     ============================ */

    // Once the toggle is clicked...
    $('.switch').on('click', function () {

        bodyScrollLock.enableBodyScroll(targetElement);

        slider.value = 100;
        
        $('#switchBulb').css({
            display: 'none'
        })

        // Fade out the lightBox after a delay of .5s at a rate of 1.5s
        $('#lightBox').delay(500).fadeOut(1500);

        //Run Banner Animation
        banner();
    });



    /*=============================
      Next Anchor Point
    ============================ */
    //Funciton to bring in and out the projects section
    function animateProj() {

        //For each of the sections, run this function
        $('.section').each(function () {

            //Setting Variable of topOfWindow which is equal to 0,0 
            var topOfWindow = $(window).scrollTop();

            // setting Project section value to what the pixel offset is. in the window
            var proj = $('#proj').offset().top;

            //switch statement saying if the top of the window is between 0 & 150 or greater than 1600, remove the "projInLeft" or "Right classes".
            switch (true) {
                case ((topOfWindow > 0 && topOfWindow < 150) || topOfWindow > 1600):
                    $('#proj1').removeClass('projInLeft');
                    $('#proj3').removeClass('projInLeft');
                    $('#proj2').removeClass('projInRight');
                    break;

                // But if the project is within the window frame, then add the classes back.
                case (proj < (topOfWindow + $(window).height() - 100)):
                    $('#proj1').addClass('projInLeft');
                    $('#proj3').addClass('projInLeft');
                    $('#proj2').addClass('projInRight');
                    $('#projArrw').attr('href', '#abt').removeClass('up');
                    $('.arrwTrig').delay(1000).animate({
                        opacity: 100
                    }, 4000);

                    break;

            }
        });

    }
    //always run the funciton
    animateProj();
    //On scroll, run the function
    $(window).scroll(animateProj);


    /*=============================
     Modal Activation
    ============================ */
    // on click of the modal button, fade out the modal.
    $('#modalBtn').on('click', function () {
        $('#modal').fadeOut(300);
        bodyScrollLock.enableBodyScroll(targetElement);
    });
    // For each of the elements with ".projCont" class
    $('.projCont').each(function () {

        //When they're clicked
        $(this).on('click', function () {
            bodyScrollLock.disableBodyScroll(targetElement);
            //Check the "data-proj" value to see if it's true
            switch (true) {
                //if "data-proj" is strictly equal to 1
                case ($(this).data('proj') === 1):

                    //change the background of element ".modalImage" to the following.
                    $('.modalImage').css({
                        background: 'url(img/sunrain.png)',
                    });
                    $('#gitHub').css({
                        display: 'block',

                    });
                    // Change the text in element "modalDesc" to the following
                    $('#modalDesc').html(
                        '<strong>//</strong> Come explore my sassy Weather Application I created. <strong>This application uses jQuery and OpenWeather API</strong> to create a fun experience while the user explores the weather in different cities.'
                    );
                    //Change the text in element "modalHeader" to the following
                    $('#modalHeader').text(
                        'Weather Application'
                    );
                    //change the element "liveSite" attributes as followed
                    $('#liveSite').attr('href', 'https://brycemaloney.ca/weather-app/').attr('title', 'Link the Weather Application').attr('alt', 'Link the Weather Application');

                    //change the element "gitHub" attributes as followed
                    $('#gitHub').attr('href', 'https://github.com/ofbryceandben/weather-app').attr('title', 'Link to Weather Application Documents on GitHub.').attr('alt', 'Link to Weather Application Documents on GitHub.');

                    break;

                //if "data-proj" is strictly equal to 2
                case ($(this).data('proj') === 2):
                    $('.modalImage').css({
                        background: 'url(img/chefwhites.png)',

                    });
                    $('#modalDesc').html(
                        '<strong>//</strong> Check out my demo-site of Chef Whites. Chef Whites is a Charity Apparel company that focuses on the Restaurant Industry Workers. <strong>This site was made using WordPress & the Woostify Theme.</strong>'
                    );
                    $('#modalHeader').text(
                        'Chef Whites'
                    );
                    $('#liveSite').attr('href', 'https://chefwhites.brycemaloney.ca').attr('title', 'Chef Whites Landing Page');
                    $('#gitHub').css({
                        display: 'none',

                    });

                    break;

                //if "data-proj" is strictly equal to 3
                case ($(this).data('proj') === 3):
                    $('.modalImage').css({
                        backgroundColor: '#white'
                    });
                    $('#gitHub').css({
                        display: 'block',

                    });
                    $('#modalDesc').html(
                        '<strong>//</strong> Sorry!! I haven\'t quite got this beautiful new project up and running yet. But just you wait! It\'s going to be AMAZING!'
                    );
                    $('#modalHeader').text(
                        'Coming Soon!'
                    );
                    $('#liveSite').attr('href', '').attr('title', 'Not quite ready yet!');
                    $('#gitHub').attr('href', '').attr('title', 'Not quite ready yet!');

                    break;
            }
            //Fade in the modal, display as Flex instead of Block.
            $('#modal').fadeIn().css({
                display: 'flex'
            });
        });
    });

});