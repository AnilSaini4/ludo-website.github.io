


$(window).scroll(function () {
  //more then or equals to 
  if ($(window).scrollTop() >= 100) {
    $("#main-bottom-section, .mobile-bottom-menu").css("display", "flex");

    //less then 100px from top 
  } else {

    $("#main-bottom-section, .mobile-bottom-menu").css("display", "none");
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $(".mobile-header").addClass("header-blur");
  } else {

    $(".mobile-header").removeClass("header-blur");
  }
});



var swiper = new Swiper(".mob-home-slider", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mob-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


$(".desktop-have-menu .desktop-drop-open").click(function () {
  $(this).siblings(".desktop-menu").toggleClass("open");
})

$(".desktop-menu .menu").click(function () {
  $(this).siblings(".game-options").toggle();
  $(this).find("img").toggleClass("minus");
  if ($(this).find("img").hasClass("minus")) {
    $(this).find("img").attr("src", "./assets/images/homepage/minus_icon.png");

  } else {
    $(this).find("img").attr("src", "./assets/images/homepage/plus_icon.png");

  }
})


$(document).mouseup(function (e) {
  var container = $(".desktop-menu.open");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(container).removeClass("open");
  }
});



$(".language-change-btn").click(function () {
  $(this).siblings(".language-menu").toggleClass("open");
})

$(document).mouseup(function (e) {
  var langDiv = $(".language-menu.open");
  if (!langDiv.is(e.target) && langDiv.has(e.target).length === 0) {
    $(langDiv).removeClass("open");
  }
});



$(".nav-open-icon").click(function () {
  $("#mobile-hamburger-menu").addClass("show");
  $("#mobile-hamburger-menu-bg").addClass("d-block");
  $("body").addClass("h-100 overflow-hidden");
})
$("#mobile-hamburger-menu .cancel-menu").click(function () {
  $("#mobile-hamburger-menu").removeClass("show");
  $("#mobile-hamburger-menu-bg").removeClass("d-block");
  $("body").removeClass("h-100 overflow-hidden");
})


$(".language-change-mobile-icon").click(function () {
  $("#mobile-language-menu").addClass("show");
  $("#mobile-hamburger-menu-bg").addClass("d-block");
  $("body").addClass("h-100 overflow-hidden");
})
$("#mobile-language-menu .cancel-menu").click(function () {
  $("#mobile-language-menu").removeClass("show");
  $("#mobile-hamburger-menu-bg").removeClass("d-block");
  $("body").removeClass("h-100 overflow-hidden");
})


$(".main-item-container.have-menu").click(function () {
  $(this).siblings(".secondary-link-container").toggleClass("menu-open");
  // $(this).toggleClass("mb-4");
  $(this).find("img").toggleClass("minus");
  if ($(this).find("img").hasClass("minus")) {
    $(this).find("img").attr("src", "./assets/images/homepage/minus_icon.png");

  } else {
    $(this).find("img").attr("src", "./assets/images/homepage/plus_icon.png");

  }
})

$(".secondary-link.have-menu").click(function () {
  $(this).siblings(".secondary-link-list").toggleClass("menu-open");
  $(this).find("img").toggleClass("minus");
  if ($(this).find("img").hasClass("minus")) {
    $(this).find("img").attr("src", "./assets/images/homepage/minus_icon.png");

  } else {
    $(this).find("img").attr("src", "./assets/images/homepage/plus_icon.png");

  }

})
$(document).ready(function () {

})