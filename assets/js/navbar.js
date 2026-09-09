(function ($) {


  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    navFunction()
  };

  // Get the header
  var header = document.getElementById("nav-header");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function navFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }


  $("#dropdownSignInButton").on({
    mouseenter: function () {
      $(".dropsignin").show();
      $('#dropdownSignInButton').addClass('arrowup');
      $(".dropsignin").on({
        mouseenter: function () {
          $(".dropsignin").show();
          $('#dropdownSignInButton').addClass('arrowup');
        },
        mouseleave: function () {
          $(".dropsignin").hide();
          $('#dropdownSignInButton').removeClass('arrowup');
        }
      })
    },
    mouseleave: function () {
      $(".dropsignin").hide();
      $('#dropdownSignInButton').removeClass('arrowup');
    }
  })

  $("#dropdownLangButton").on({
    mouseenter: function () {
      $(".droplang").show();
      $('#dropdownLangButton').addClass('arrowup');
      $(".droplang").on({
        mouseenter: function () {
          $(".droplang").show();
          $('#dropdownLangButton').addClass('arrowup');
        },
        mouseleave: function () {
          $(".droplang").hide();
          $('#dropdownLangButton').removeClass('arrowup');
        }
      })
    },
    mouseleave: function () {
      $(".droplang").hide();
      $('#dropdownLangButton').removeClass('arrowup');
    }
  })

  var size;

  //SMALLER HEADER WHEN SCROLL PAGE
  function smallerMenu() {
    var sc = $(window).scrollTop();
    if (sc > 40) {
      $('#header-sroll').addClass('small');
    } else {
      $('#header-sroll').removeClass('small');
    }
  }

  // VERIFY WINDOW SIZE
  function windowSize() {
    size = $(document).width();
    if (size >= 991) {
      $('body').removeClass('open-menu');
      $('.hamburger-menu .bar').removeClass('animate');
    }
  }

  // ESC BUTTON ACTION
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      $('.bar').removeClass('animate');
      $('body').removeClass('open-menu');
      $('header .desk-menu .menu-container .menu .menu-item-has-children a ul').each(function (index) {
        $(this).removeClass('open-sub');
      });
    }
  });

  $('#cd-primary-nav > li').hover(function () {
    $whidt_item = $(this).width();
    $whidt_item = $whidt_item - 8;

    $prevEl = $(this).prev('li');
    $preWidth = $(this).prev('li').width();
    var pos = $(this).position();
    pos = pos.left + 4;
    $('header .desk-menu .menu-container .menu>li.line').css({
      width: $whidt_item,
      left: pos,
      opacity: 0
    });
  });

  // ANIMATE HAMBURGER MENU
  $('.hamburger-menu').on('click', function () {
    $('.hamburger-menu .bar').toggleClass('animate');
    if ($('body').hasClass('open-menu')) {
      $('body').removeClass('open-menu');
      $('.sub-menu').removeClass('open-sub');
    } else {
      $('body').toggleClass('open-menu');
    }
  });


  // RESPONSIVE MENU NAVIGATION
  $('header .desk-menu .menu-container .menu .menu-item-has-children > a').on('click', function (e) {
    e.preventDefault();
    if (size <= 991) {
      $(this).next('ul').addClass('open-sub');
    }
  });

  // CLICK FUNCTION BACK MENU RESPONSIVE
  $('header .desk-menu .menu-container .menu .menu-item-has-children ul .back').on('click', function (e) {
    e.preventDefault();
    $(this).parent('ul').removeClass('open-sub');
  });

  $('body .over-menu').on('click', function () {
    $('body').removeClass('open-menu');
    $('.bar').removeClass('animate');
  });

  var width = $(window).width();
  $(window).on('resize', function () {
    if ($(window).width() > 991) {
      if ($(this).width() !== width) {
        width = $(this).width();

        // $('.sub-menu').removeClass('open-sub');
      }
    }
  });


  $(document).ready(function () {
    windowSize();
  });

  $(window).scroll(function () {
    smallerMenu();
  });

  $(window).resize(function () {
    windowSize();
  });

})(jQuery);
