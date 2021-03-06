/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
                Team
============================================ */
$(function () {

  // $.getJSON("./info/teamMembers.json", function (data) {  
  let array = staff
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const $element = '<div class="team-member"><img src="' + element.image + '" alt="team member" class="img-responsive"><div class="team-member-overlay"><div class="team-member-info text-center"><h6>' + element.name + '</h6><p>' + element.occupation + '</p><p class="member">' + element.description + '</p></div></div></div>'

    $('#team-members').append($element)

  }
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 480 up
      480: {
        items: 2
      }
    }
  });
  // });
  staff = undefined
});



/* =========================================
                Progress Bars
============================================ */
$(function () {

  $("#progress-elements").waypoint(function () {

    $(".progress-bar").each(function () {

      $(this).animate({
        width: $(this).attr("aria-valuenow") + "%"
      }, 2000);

    });

    this.destroy();
  }, {
      offset: 'bottom-in-view'
    });

});

/* =========================================
               Responsive Tabs
============================================ */
$(function () {

  $("#services-tabs").responsiveTabs({
    animation: 'slide'
  });

});


/* =========================================
               Portfolio
============================================ */
$(window).on('load', function () {

  // Initialize Isotope
  $("#isotope-container").isotope({
    filter: '.professionalism'
  });

  // filter items on button click
  $("#isotope-filters").on('click', 'button', function () {

    // get filter value
    var filterValue = $(this).attr('data-filter');

    // filter portfolio
    $("#isotope-container").isotope({
      filter: filterValue
    });

    // active button
    $("#isotope-filters").find('.active').removeClass('active');
    $(this).addClass('active');
  });
});
/* =========================================
               Magnifier
============================================ */
$(function () {

  $("#portfolio-wrapper1").magnificPopup({
    // delegate: 'a', // child items selector, by clicking on it popup will open
    items: [
      {
        src: $(
          `
                    <h3 style="color:white; text-align:center">
                    Interim Coaching/ID Development
                    </h3>
                    <div style="color:white; text-align:center; margin: 30px 100px";>
                       Talk about stuff here
                    </div>
                    <div style="text-align:center">
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
        ),
        type: 'inline'
      }
    ],
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $("#portfolio-wrapper2").magnificPopup({
    // delegate: 'a', // child items selector, by clicking on it popup will open
    items: [
      {
        src: $(
          `
                    <h3 style="color:white; text-align:center">
                    Workshops/Tech/Mentorship by Companies
                    </h3>
                    <div style="color:white; text-align:center; margin: 30px 100px";>
                       Talk about stuff here
                    </div>
                    <div style="text-align:center">
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
        ),
        type: 'inline'
      }
    ],
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $("#portfolio-wrapper3").magnificPopup({
    // delegate: 'a', // child items selector, by clicking on it popup will open
    items: [
      {
        src: $(
          `
                    <h3 style="color:white; text-align:center">
                    Soft Skills
                    </h3>
                    <div style="color:white; text-align:center; margin: 30px 100px";>
                       Talk about stuff here
                    </div>
                    <div style="text-align:center">
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
        ),
        type: 'inline'
      }
    ],
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $("#portfolio-wrapper4").magnificPopup({
    // delegate: 'a', // child items selector, by clicking on it popup will open
    items: [
      {
        src: $(
          `
                    <h3 style="color:white; text-align:center">
                    Visiting Tech Mentors
                    </h3>
                    <div style="color:white; text-align:center; margin: 30px 100px";>
                    Don’t be surprised if you see a western guy or girl @ RBK. We have an exchange program whereby highly experienced developers come from all over the world to share their experience and help you get in-depth understanding of what you’re learning and how to apply it. They take time off from their work and fly to Jordan just to be with you, share your culture and learn how to pronounce your name !
                    </div>
                    <div style="text-align:center">
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
        ),
        type: 'inline'
      }
    ],
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $("#portfolio-wrapper5").magnificPopup({
    // delegate: 'a', // child items selector, by clicking on it popup will open
    items: [
      {
        src: $(
          `
                    <h3 style="color:white; text-align:center">
                    Health/Meditation
                    </h3>
                    <div style="color:white; text-align:center; margin: 30px 100px";>
                       Talk about stuff here
                    </div>
                    <div style="text-align:center">
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
        ),
        type: 'inline'
      }
    ],
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $("#portfolio-wrapper6").magnificPopup({
    // delegate: 'a', // child items selector, by clicking on it popup will open
    items: [
      {
        src: $(
          `
                    <h3 style="color:white; text-align:center">
                    Social Nights
                    </h3>
                    <div style="color:white; text-align:center; margin: 30px 100px";>
                    Every end of week ends with a bang ! Water-balloon fights, relaxing in a candle-lit garden, BBQ, music, or bring your own instrument, bowling, AR games, movies, …, etc., is how we wrap up a hard week’s work. You’ll deserve it !
                    </div>
                    <div style="text-align:center">
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
        ),
        type: 'inline'
      }
    ],
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $("#portfolio-wrapper7").magnificPopup({
    // delegate: 'a', // child items selector, by clicking on it popup will open
    items: [
      {
        src: $(
          `
                    <h3 style="color:white; text-align:center">
                    Counselor
                    </h3>
                    <div style="color:white; text-align:center; margin: 30px 100px";>
                    Throughout your journey, you will be supported, If you’re feeling down, want to give up and break something, then talk to our class counsellor. Don’t be shy, they also take care of our staff !
                    </div>
                    <div style="text-align:center">
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
        ),
        type: 'inline'
      }
    ],
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $("#portfolio-wrapper8").magnificPopup({
    // delegate: 'a', // child items selector, by clicking on it popup will open
    items: [
      {
        src: $(
          `
                    <h3 style="color:white; text-align:center">
                    Transportation
                    </h3>
                    <div style="color:white; text-align:center; margin: 30px 100px";>
                    Starting from Immersive phase, RBK provides local transportation for those who live in Greater Amman area. 
                    </div>
                    <div style="text-align:center">
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
        ),
        type: 'inline'
      }
    ],
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $("#portfolio-wrapper9").magnificPopup({
    // delegate: 'a', // child items selector, by clicking on it popup will open
    items: [
      {
        src: $(
          `
                    <h3 style="color:white; text-align:center">
                    Housing
                    </h3>
                    <div style="color:white; text-align:center; margin: 30px 100px";>
                    Starting from Immersive phase, Housing is limited and only available to those living outside Amman. It is available on a first come, first served basis. RBK does not provide stipends to students. 
                    </div>
                    <div style="text-align:center">
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
        ),
        type: 'inline'
      }
    ],
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $("#portfolio-wrapper10").magnificPopup({
    // delegate: 'a', // child items selector, by clicking on it popup will open
    items: [
      {
        src: $(
          `
                    <h3 style="color:white; text-align:center">
                    Meals
                    </h3>
                    <div style="color:white; text-align:center; margin: 30px 100px";>
                    Starting from Immersive phase, RBK provides 3 healthy meals a day and considers all nutrition needs for its students.
                    </div>
                    <div style="text-align:center">
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
        ),
        type: 'inline'
      }
    ],
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $("#portfolio-wrapper11").magnificPopup({
    // delegate: 'a', // child items selector, by clicking on it popup will open
    items: [
      {
        src: $(
          `
                    <h3 style="color:white; text-align:center">
                    Labs with Computers
                    </h3>
                    <div style="color:white; text-align:center; margin: 30px 100px";>
                       Talk about stuff here
                    </div>
                    <div style="text-align:center">
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
        ),
        type: 'inline'
      }
    ],
    type: 'image',
    gallery: {
      enabled: true
    }
  });


});

/* =========================================
               Testimonials
============================================ */

$(function () {
  let array = graduates
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //change the div contan class bfore h3 col-md-6 col-sm-6 col-xs-6
    const $element = '<div class="testimonial">'

      + '<div class="row">'
      + '<h3>' + element.occupation + '</h3>'
      + '<p>' + element.company + '</p>' + '</div>'

      + '<div class="author">'

      + '<div class="row">'

      + '<div class="col-md-2 col-sm-3 col-xs-6" style="padding-left:0px;padding-right:0px;">'

      + '<img src="' + element.image + '" alt="client" class="img-responsive img-circle">'

      + '</div>'
//d-flex justify-content-center align-items-center
      + '<div class="col-md-10 col-sm-3 col-xs-6 ">'
      + '<div class="author-name-des">'
      + '<p><b>' + element.name + '</b></p>'
      + '<p>' + element.cohort_number + '</p>'
      + '<p><b>' + element.nationality + '</b></p>'
      + '</div>'
      + '<p style="margin:0px;">“' + element.quote + '”</p>'
      + '</div> </div> </div> </div>'
    $('#testimonial-slider').append($element)
  }
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
  graduates = undefined
});


/* =========================================
              Stats
============================================ */
$(function () {

  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });

});


/* =========================================
              Clients
============================================ */
$(function () {
  //  $.getJSON("./info/graduates.json", function (data) {  
  let array = hiringPartners
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const $element = '<div class="client"><a target="_blank" href="' + element.url + '"><img src="' + element.image + '" class="img-responsive" alt="client"></a></div>'
    
    //  $('a').on('click', function() {
    //    console.log('element url', element.url)
    //    window.open(`${element.url}`);
    //  });

    $('#clients-list').append($element)

  }
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2
      },
      // breakpoint from 480 up
      480: {
        items: 3
      },
      // breakpoint from 768 up
      768: {
        items: 6
      }
    }
  });
  //    })
  hiringPartners = undefined
});


/* =========================================
              Google Map
============================================ */
$(window).on('load', function () {

  // Map Variables
  var addressString = '19 Zarkashi Street, Khalda, Amman, Jordan';
  var myLatlng = {
    lat: 31.986680,
    lng: 35.837785
  };

  // 1. Render Map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatlng
  });

  // 2. Add Marker
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Click To See Address"
  });

  // 3. Add Info Window
  var infowindow = new google.maps.InfoWindow({
    content: addressString
  });

  // Show info window when user clicks marker
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });

  // 4. Resize Function
  google.maps.event.addDomListener(window, 'resize', function () {

    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);

  });

});


/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function () {

  // show/hide nav on page load
  showHideNav();

  $(window).scroll(function () {

    // show/hide nav on window's scroll
    showHideNav();
  });

  function showHideNav() {

    if ($(window).scrollTop() > 20) {

      // Show white nav
      $("#navbar").addClass("white-nav-top");

      // Show Dark logo
      $("#logo img").attr("src", "img/logo/logo.png");

      // Show back to top button
      $("#back-to-top").fadeIn();

    } else {

      // Hide white nav
      $("#navbar").removeClass("white-nav-top");

      // Show White logo
      $("#logo img").attr("src", "img/logo/white-logo.png");

      // Hide back to top button
      $("#back-to-top").fadeOut();
    }
  }
});

// Smooth Scrolling
$(function () {

  $("a.smooth-scroll").click(function (event) {

    event.preventDefault();

    // get section id like #about, #servcies, #work, #team and etc.
    var section_id = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 64
    }, 1250, "easeInOutExpo");

  });

});

/* =========================================
              Mobile Menu
============================================ */
$(function () {

  // Show mobile nav
  $("#mobile-nav-open-btn").click(function () {
    $("#mobile-nav").css("height", "100%");
  });

  // Hide mobile nav
  $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
    $("#mobile-nav").css("height", "0%");
  });

});

/* =========================================
                Animation
============================================ */
// animate on scroll
$(function () {
  new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

  $("#home-heading-1").addClass("animated fadeInDown");
  $("#founding-partner").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated fadeInLeft");
  $("#home-text").addClass("animated zoomIn");
  $("#home-btn").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animated fadeInDown infinite");
});


/* =========================================
                Reactor logo
============================================ */
$(function () {
  $("#hackreactor").on({
    mouseenter: function () {
      $(this).attr('src', './img/logo/hack-reactor-logo.png');
    },
    mouseleave: function () {
      $(this).attr('src', './img/logo/hack-reactor-logo-white.png');
    }
  });
});


/* =========================================
            Vertical Navigation Bar
============================================ */
$(function () {
  if ($('.vertical-nav').length > 0) {
    var stretchyNavs = $('.vertical-nav');

    stretchyNavs.each(function () {
      var stretchyNav = $(this),
        stretchyNavTrigger = stretchyNav.find('.vertical-trigger');

      stretchyNavTrigger.on('click', function (event) {
        event.preventDefault();
        stretchyNav.toggleClass('nav-is-visible');
      });
    });

    $(document).on('click', function (event) {
      (!$(event.target).is('.vertical-trigger') && !$(event.target).is('.vertical-trigger span')) && stretchyNavs.removeClass('nav-is-visible');
    });
  }
});

// Vertical Navbar Smooth Scrolling 
$(function () {
  $('.vertical-nav ul li a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    var target = this.hash,
      $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 64
    }, 1250, 'easeInOutExpo');
  });
});


 function test(){
  
        $('.submit').click(function() {
            $.ajax({
                type: 'POST',
                url: "https://docs.google.com/forms/d/e/1FAIpQLScHAIv8OFLYtPhGqZK-JmyyjEghSaWAtO9M5AVh0Kx5OOqn8w/formResponse",
                data: $(this).serialize(),
                error: function()
                {
                    window.location.reload()
                },
                success: function(response)
                {  
                   window.location.reload()
                }
            });
            return false;
        }); 
 
}