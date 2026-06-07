

$(document).ready(function () {

 // Initialize Waypoints and Counter-Up
$('.counter-sec').waypoint(function() {
    $('.counter-card h3').each(function() {
      var $this = $(this);
      var countTo = $this.closest('.counter-card').attr('count'); // Get the count from the data-count attribute
      var symbol = $this.closest('.counter-card').data('symbol'); // Access the data-symbol attribute
  
      $this.prop('Counter', 0).animate({
        Counter: countTo
      }, {
        duration: 2000,
        easing: 'swing',
        step: function(now) {
          // Wrap the symbol in a span
          $this.html(Math.ceil(now) + '<span>' + symbol + '</span>'); // Append the symbol inside a span after the number
        }
      });
    });
  }, {
    offset: '80%' // Counter triggers when 80% of the section is visible
  });
  

  $('#navigation nav').slimNav_sk78();
  $('#nav-icon0').click(function() {
      $(this).toggleClass('open');
  });
 


  // banner
  var owl = $(".banner-section .owl-carousel");
  owl.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: false,
      dots: true,
      // dotsContainer: '#custom-owl-dots',
      animateIn: 'fadeIn', // add this
      animateOut: 'fadeOut', // and this
      //   navText: [
      //     '<img src="images/prev.svg" alt="">',
      //     '<img src="images/next.svg" alt="">'
      // ],

      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },

          1000: {
              items: 1
          },
      }
      
  });



  $('.plus').click(function() {
    let input = $(this).siblings('input');
    input.val(parseInt(input.val()) + 1);
});

$('.minus').click(function() {
    let input = $(this).siblings('input');
    let currentVal = parseInt(input.val());
    if (currentVal > 0) {
        input.val(currentVal - 1);
    }
});
  

   // Equal height
   $(function () {
    $(".pd-card .img").matchHeight();
    $(".pd-card h5").matchHeight();
    $(".why-card h5").matchHeight();
    $(".ft-pd .img").matchHeight();
    $(".sup-card").matchHeight();
   });

  //  accordian
  $(".accordian li .toggle").on("click", function() {
    // Remove 'active' class from all siblings
    $(this).parent().siblings().removeClass("active");
  
    // Add 'active' class to the clicked item
    $(this).parent().toggleClass("active");
  
    // Slide up all sibling contents
    $(this).parent().siblings().find('.content').slideUp();
  
    // Slide toggle the current clicked content
    $(this).siblings('.content').slideToggle();
  });



  //  profile-images-uploder
  var readURL = function(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
 
        reader.onload = function (e) {
            $('.profile-pic').attr('src', e.target.result);
        }
 
        reader.readAsDataURL(input.files[0]);
    }
}
 
 
$(".file-upload").on('change', function(){
    readURL(this);
});
 
$(".upload-button").on('click', function() {
   $(".file-upload").click();
});


$(".toggle-password").click(function() {
  // Get the input field associated with this eye icon
  var input = $($(this).attr("toggle"));
  
  // Toggle between password and text type
  if (input.attr("type") === "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
  
  // Toggle the eye icon class between fa-eye and fa-eye-slash
  $(this).toggleClass("fa-eye fa-eye-slash");
});

  



$('.paybox').click(function() {
  // Remove active class from all payboxes
  $('.paybox').removeClass('active');

  // Add active class to the clicked paybox
  $(this).addClass('active');

  // Check the associated radio button
  $(this).find('input[type="radio"]').prop('checked', true);
});
 
});


window.onscroll = function () {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
  

        



  (function($){

    function ultraWideFix(){

        let win = $(window).width();
        let base = 1500;

 if(!$("#viewportScaler").length){

            $("body").children().wrapAll(
                '<div id="viewportScaler"></div>'
            );

        }

        
        if(win <= base){

            $("#viewportScaler").css({
                zoom:"",
                width:"",
                margin:""
            });

            return;
        }


       


        let scale = win / base;


        $("#viewportScaler").css({

            width: base + "px",
            margin: "0 auto",
            zoom: scale

        });

    }


    $(window).on("load resize", ultraWideFix);


})(jQuery);





