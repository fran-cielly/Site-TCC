$(document).ready(function() {

  $("#owl-demo").owlCarousel({
        
        // Most important owl features
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 2],
    itemsMobile: [479, 1],
   
    //Autoplay
    autoPlay: 15000, //Set AutoPlay to 15 seconds
    stopOnHover: true,
 
    //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
 
    // Navigation
    navigation : true,
    navigationText : ["prev","next"],
    rewindNav : true,
    scrollPerPage : false,
 
    //Pagination
    pagination : false,
    paginationNumbers: false,
 
    // CSS Styles
    baseClass : "owl-carousel",
    theme : "owl-theme",
 
    //Auto height
    autoHeight : false,
 
    //Mouse Events
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,
 
    //Transitions
    transitionStyle : false,

  });

});