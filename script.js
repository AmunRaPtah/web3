$(document).ready(function() {
    // Toggle dropdown menus on hover
    $('.dropdown').on('mouseenter', function() {
        $(this).find('.dropdown-content').stop(true, true).slideDown(200); // Smooth slide down
    }).on('mouseleave', function() {
        $(this).find('.dropdown-content').stop(true, true).slideUp(200); // Smooth slide up
    });

    // Add smooth scrolling for navigation links
    $('nav a').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); // Adjust scroll speed (1000 milliseconds = 1 second)
    });

    // Hero Slider Initialization
    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // Bundles Carousel Initialization
    $('.bundles-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Reasons Carousel Initialization
    $('.reasons-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // Browse by Health Needs Card Hover Effect
    $('.need-card').hover(function() {
        $(this).find('.card-overlay').stop(true, true).fadeIn(200); // Show overlay on hover
    }, function() {
        $(this).find('.card-overlay').stop(true, true).fadeOut(200); // Hide overlay on mouseout
    });

    // Add click event for cards (replace with your actual redirect logic)
    $('.need-card').click(function() {
        var need = $(this).data('need');
        window.location.href = '/health-needs/' + need; // Replace with the correct URL structure
    });

    // Testimonials Slider
    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });

    // FAQ Accordion
    $('.faq-item h3').click(function() {
        $(this).next('p').slideToggle(200); // Smooth slide toggle
        $(this).toggleClass('active'); // Toggle the active class for styling
    });

    // Contact Form Validation (Client-Side)
    $('#contact form').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // Basic validation (you can add more checks)
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // If validation passes, submit the form
        $(this).unbind('submit').submit(); // Re-enable form submission
    });

    // Email Validation Function
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
