$(document).ready(function() {
    // Toggle dropdown menus on hover
    $('.dropdown').hover(function() {
        $(this).find('.dropdown-content').show();
    }, function() {
        $(this).find('.dropdown-content').hide();
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

    // Browse by Health Needs Card Hover Effect
    $('.need-card').hover(function() {
        $(this).find('p').show(); // Show description on hover
        $(this).css('transform', 'translateY(-5px) scale(1.05)'); // Zoom slightly
    }, function() {
        $(this).find('p').hide(); // Hide description on mouseout
        $(this).css('transform', 'translateY(0) scale(1)'); // Reset transform
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
        $(this).next('p').slideToggle();
        $(this).toggleClass('active'); // Toggle the active class for styling
    });
});
