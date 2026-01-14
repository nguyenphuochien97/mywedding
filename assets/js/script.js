(function ($) {
  "use strict";

  $(".select").niceSelect();
  function _0x2b27f6() {
    var _0xd50a2a = $(".navigation-holder");
    var _0x19732a = $(".mobail-menu .open-btn");
    var _0x26cdf6 = $(".mobail-menu .navbar-toggler");
    _0x19732a.on("click", function (_0x5f4ef0) {
      _0x5f4ef0.stopImmediatePropagation();
      _0xd50a2a.toggleClass("slideInn");
      _0x26cdf6.toggleClass("x-close");
      return false;
    });
  }
  _0x2b27f6();
  function _0x492389() {
    var _0x31ece9 = window.innerWidth;
    var _0x35c9e0 = $("#navbar > ul");
    if (_0x31ece9 <= 0x3df) {
      _0x35c9e0.addClass("small-nav");
    } else {
      _0x35c9e0.removeClass("small-nav");
    }
  }
  _0x492389();
  function _0x4487bf() {
    var _0x35c4e6 = window.innerWidth;
    var _0x3d60f7 = $(".navigation-holder");
    var _0x50ab39 = $(".navigation-holder > .small-nav");
    var _0xfd49dc = _0x50ab39.find(".sub-menu");
    var _0x28c249 = _0x50ab39.find(".mega-menu");
    var _0x159b35 = _0x50ab39.find(".menu-item-has-children > a");
    if (_0x35c4e6 <= 0x3df) {
      _0xfd49dc.hide();
      _0x28c249.hide();
      _0x159b35.on("click", function (_0x3340cb) {
        var _0x324c49 = $(this);
        _0x324c49.siblings().slideToggle();
        _0x3340cb.preventDefault();
        _0x3340cb.stopImmediatePropagation();
        _0x324c49.toggleClass("rotate");
      });
    } else if (_0x35c4e6 > 0x3df) {
      _0x3d60f7.find(".sub-menu").show();
      _0x3d60f7.find(".mega-menu").show();
    }
  }
  _0x4487bf();
  function _0x148302(_0x2affd7) {
    var _0x2ea8a4 = $(window).scrollTop();
    var _0x16e7f0 = _0x2ea8a4 + 0x2;
    var _0x146cff = $("section");
    var _0x246298 = _0x2affd7.outerHeight();
    _0x146cff.each(function () {
      var _0x42060a = $(this).offset().top - _0x246298;
      var _0x5da333 = _0x42060a + $(this).outerHeight();
      if (_0x16e7f0 >= _0x42060a && _0x16e7f0 <= _0x5da333) {
        _0x2affd7.find("> ul > li > a").parent().removeClass("current-menu-item");
        _0x2affd7.find("a[href='#" + $(this).attr("id") + "']").parent().addClass("current-menu-item");
      } else if (_0x16e7f0 === 0x2) {
        _0x2affd7.find("> ul > li > a").parent().removeClass("current-menu-item");
      }
    });
  }
  function _0x178153(_0x40f6df, _0x4f513c) {
    _0x40f6df.on("click", function () {
      if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
        var _0x50b3a7 = $(this.hash);
        _0x50b3a7 = _0x50b3a7.length ? _0x50b3a7 : $("[name=" + this.hash.slice(0x1) + "]");
        if (_0x50b3a7.length) {
          $("html, body").animate({
            scrollTop: _0x50b3a7.offset().top - _0x4f513c
          }, 0x3e8, "easeInOutExpo");
          return false;
        }
      }
      return false;
    });
  }
  $("body").on("click", function () {
    $(".navigation-holder").removeClass("slideInn");
  });
  $(".menu-close").on("click", function () {
    $(".navigation-holder").removeClass("slideInn");
  });
  $(".menu-close").on("click", function () {
    $(".open-btn").removeClass("x-close");
  });
  $("#toggle1").on("click", function () {
    $(".create-account").slideToggle();
    $(".caupon-wrap.s1").toggleClass("active-border");
  });
  $("#toggle2").on("click", function () {
    $("#open2").slideToggle();
    $(".caupon-wrap.s2").toggleClass("coupon-2");
  });
  $("#toggle3").on("click", function () {
    $("#open3").slideToggle();
    $(".caupon-wrap.s2").toggleClass("coupon-2");
  });
  $("#toggle4").on("click", function () {
    $("#open4").slideToggle();
    $(".caupon-wrap.s3").toggleClass("coupon-2");
  });
  $(".payment-select .addToggle").on("click", function () {
    $(".payment-name").addClass("active");
    $(".payment-option").removeClass("active");
  });
  $(".payment-select .removeToggle").on("click", function () {
    $(".payment-option").addClass("active");
    $(".payment-name").removeClass("active");
  });
  $(function () {
    $("#datepicker").datepicker();
  });
  if ($("#scene").length) {
    var _0x834c0 = document.getElementById("scene");
    var _0x5e1e8f = new Parallax(_0x834c0);
  }
  if ($("#scene-2").length) {
    var _0x834c0 = document.getElementById("scene-2");
    var _0x5e1e8f = new Parallax(_0x834c0);
  }
  if ($(".pointparallax").length) {
    $(".pointparallax").pointparallax();
  }
  var _0x1a8341 = $(".moreload");
  var _0x5b8955 = $(".loadmore-btn");
  var _0xdb4860 = _0x1a8341.length;
  _0x1a8341.hide();
  if (_0xdb4860 > 0x8) {
    _0x5b8955.show();
  }
  _0x1a8341.slice(0x0, 0x8).show();
  _0x5b8955.on("click", function () {
    var _0x4db2f1 = _0x1a8341.filter(":visible").length;
    _0x1a8341.slice(_0x4db2f1 - 0x1, _0x4db2f1 + 0x8).fadeIn();
    var _0x3e8e57 = _0x1a8341.filter(":visible").length;
    if (_0x3e8e57 >= _0xdb4860) {
      _0x5b8955.hide();
    }
  });
  var _0x2e51ea = [];
  jQuery(".swiper-slide").each(function (_0x5664cb) {
    _0x2e51ea.push(jQuery(this).find(".slide-inner").attr("data-text"));
  });
  var _0x2d5cd6 = $(".slide-bg-image");
  _0x2d5cd6.each(function (_0x48f228) {
    if ($(this).attr("data-background")) {
      $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
  });
  if ($(".music-box").length) {
    var _0x11b97b = $(".music-box-toggle-btn");
    var _0x3160a7 = $(".music-holder");
    _0x11b97b.on("click", function () {
      _0x3160a7.toggleClass("toggle-music-box");
      return false;
    });
  }
  function _0x289a03() {
    if ($(".preloader").length) {
      $(".preloader").delay(0x64).fadeOut(0x1f4, function () {
        _0x10cd3c.init();
      });
    }
  }
  var _0x10cd3c = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0x0,
    mobile: true,
    live: true,
    callback: function (box) {
      if (box.querySelectorAll('.counter').length > 0) {
        box.querySelectorAll('.counter').forEach(function (el) {
          $(el).countUp();
        });
      }
    }
  });
  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      openEffect: "elastic",
      closeEffect: "elastic",
      wrapCSS: "project-fancybox-title-style"
    });
  }
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 0xa0,
    preloader: false,
    fixedContentPos: false
  });
  if ($(".video-btn").length) {
    $(".video-btn").on("click", function () {
      $.fancybox({
        href: this.href,
        aspectRatio: true,
        type: $(this).data("type"),
        title: this.title,
        helpers: {
          title: {
            type: "inside"
          },
          media: {}
        },
        beforeShow: function () {
          $(".fancybox-wrap").addClass("gallery-fancybox");
        }
      });
      return false;
    });
  }
  if ($(".popup-gallery").length) {
    $(".popup-gallery").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 0x12c,
        easing: "ease-in-out",
        opener: function (_0x4b5ee2) {
          return _0x4b5ee2.is("img") ? _0x4b5ee2 : _0x4b5ee2.find("img");
        }
      }
    });
  }
  function _0x4c5bf2() {
    if ($(".sortable-gallery .gallery-filters").length) {
      var _0x428835 = $(".gallery-container");
      _0x428835.isotope({
        filter: "*",
        animationOptions: {
          duration: 0x2ee,
          easing: "linear",
          queue: false
        }
      });
      $(".gallery-filters li a").on("click", function () {
        $(".gallery-filters li .current").removeClass("current");
        $(this).addClass("current");
        var _0x2193bb = $(this).attr("data-filter");
        _0x428835.isotope({
          filter: _0x2193bb,
          animationOptions: {
            duration: 0x2ee,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    }
  }
  _0x4c5bf2();
  if ($(".odometer").length) {
    $(".odometer").appear();
    $(document.body).on("appear", ".odometer", function (_0x8323a9) {
      var _0x40203a = $(".odometer");
      _0x40203a.each(function () {
        var _0x119af8 = $(this).attr("data-count");
        $(this).html(_0x119af8);
      });
    });
  }
  function _0x37b610(_0x23386b, _0xabd35d) {
    _0x23386b.addClass("original").clone().insertAfter(_0x23386b).addClass(_0xabd35d).removeClass("original");
  }
  if ($(".wpo-site-header .navigation").length) {
    _0x37b610($(".wpo-site-header .navigation"), "sticky-header");
  }
  var _0x5b5558 = "";
  function _0x1de7c8(_0x3f7c08, _0x3fc979, _0x26c974) {
    var _0x3ddfa4 = $(window).scrollTop();
    if ($(window).scrollTop() > 0x1f4) {
      if (_0x3ddfa4 > _0x5b5558) {
        _0x3f7c08.addClass(_0x3fc979);
      } else {
        _0x3f7c08.addClass(_0x3fc979);
      }
    } else {
      _0x3f7c08.removeClass(_0x3fc979);
    }
    _0x5b5558 = _0x3ddfa4;
  }
  if ($(".header-search-form-wrapper").length) {
    var _0xb77aa = $(".search-toggle-btn");
    var _0x45401f = $(".search-toggle-btn i");
    var _0x14c42c = $(".header-search-form");
    var _0x42d1bb = $("body");
    _0xb77aa.on("click", function (_0x2dea38) {
      _0x14c42c.toggleClass("header-search-content-toggle");
      _0x45401f.toggleClass("fi flaticon-search fi ti-close");
      _0x2dea38.stopPropagation();
    });
    _0x42d1bb.on("click", function () {
      _0x14c42c.removeClass("header-search-content-toggle");
    }).find(_0x14c42c).on("click", function (_0x5bf41f) {
      _0x5bf41f.stopPropagation();
    });
  }
  if ($(".mini-cart").length) {
    var _0x52b6db = $(".cart-toggle-btn");
    var _0x54ee28 = $(".mini-cart-content");
    var _0x2d5dc9 = $(".mini-cart-close");
    var _0x42d1bb = $("body");
    _0x52b6db.on("click", function (_0x46ff4d) {
      _0x54ee28.toggleClass("mini-cart-content-toggle");
      _0x46ff4d.stopPropagation();
    });
    _0x2d5dc9.on("click", function (_0x18ddaf) {
      _0x54ee28.removeClass("mini-cart-content-toggle");
      _0x18ddaf.stopPropagation();
    });
    _0x42d1bb.on("click", function () {
      _0x54ee28.removeClass("mini-cart-content-toggle");
    }).find(_0x54ee28).on("click", function (_0xd6213e) {
      _0xd6213e.stopPropagation();
    });
  }
  if ($(".portfolio-slide").length) {
    $(".portfolio-slide").owlCarousel({
      autoplay: true,
      smartSpeed: 0x12c,
      margin: 0x0,
      loop: false,
      autoplayHoverPause: true,
      dots: false,
      nav: true,
      navText: ["<i class=\"fi flaticon-left-arrow\"></i>", "<i class=\"fi flaticon-right-arrow-1\"></i>"],
      items: 0x5,
      stagePadding: 20,
      margin: 10,
      responsive: {
        0x0: {
          items: 0x3
        },
        0x2ff: {
          items: 0x3
        },
        0x4b0: {
          items: 0x3
        },
        0x514: {
          items: 0x4
        },
        0x578: {
          items: 0x4
        },
        0x5dc: {
          items: 0x5
        }
      }
    });
  }
  if ($(".wpo-testimonial-wrap").length) {
    $(".slider-for").slick({
      slidesToShow: 0x1,
      slidesToScroll: 0x1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
      dots: false,
      responsive: [{
        breakpoint: 0x3df,
        settings: {
          dots: false
        }
      }]
    });
    $(".slider-nav").slick({
      slidesToShow: 0x1,
      slidesToScroll: 0x1,
      asNavFor: ".slider-for",
      focusOnSelect: true,
      arrows: false,
      dots: true,
      responsive: [{
        breakpoint: 0x3df,
        settings: {
          dots: true
        }
      }]
    });
  }
  if ($(".wpo-testimonial-wrap").length) {
    $(".wpo-testimonial-active").slick({
      slidesToShow: 0x1,
      slidesToScroll: 0x1,
      focusOnSelect: true,
      arrows: false,
      dots: true
    });
  }
  if ($(".wpo-testimonial-wrap-s2").length) {
    $(".wpo-testimonial-active-s2").slick({
      slidesToShow: 0x1,
      slidesToScroll: 0x1,
      focusOnSelect: true,
      arrows: false,
      dots: true
    });
  }
  if ($(".wpo-portfolio-section-s4").length) {
    $(".gallery-slide").slick({
      slidesToShow: 0x6,
      slidesToScroll: 0x1,
      focusOnSelect: true,
      arrows: false,
      dots: false,
      variableWidth: true,
      loop: false,
      autoplay: false
    });
  }
  if ($(".wpo-portfolio-section-s4").length) {
    $(".gallery-slide2").slick({
      slidesToShow: 0x6,
      slidesToScroll: 0x1,
      focusOnSelect: true,
      arrows: false,
      dots: false,
      variableWidth: true,
      loop: false,
      autoplay: false
    });
  }
  if ($(".static-hero-s6").length) {
    $(".slider-for").slick({
      slidesToShow: 0x1,
      slidesToScroll: 0x1,
      arrows: false,
      asNavFor: ".slider-nav",
      dots: false
    });
    $(".slider-nav").slick({
      slidesToShow: 0x1,
      slidesToScroll: 0x1,
      asNavFor: ".slider-for",
      focusOnSelect: true,
      arrows: false,
      fade: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 0xbb8,
      speed: 0x7d0
    });
  }
  if ($(".wpo-service-slider").length) {
    $(".wpo-service-slider").owlCarousel({
      autoplay: false,
      smartSpeed: 0x12c,
      margin: 0x14,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      nav: true,
      navText: ["<i class=\"fi flaticon-left-arrow\"></i>", "<i class=\"fi flaticon-right-arrow-1\"></i>"],
      responsive: {
        0x0: {
          items: 0x1,
          dots: true,
          nav: false
        },
        0x1f4: {
          items: 0x1,
          dots: true,
          nav: false
        },
        0x300: {
          items: 0x2,
          dots: false
        },
        0x4b0: {
          items: 0x3
        },
        0x578: {
          items: 0x3
        }
      }
    });
  }
  if ($(".partners-slider").length) {
    $(".partners-slider").owlCarousel({
      autoplay: true,
      smartSpeed: 0x12c,
      margin: 0x0,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      arrows: false,
      nav: false,
      responsive: {
        0x0: {
          items: 0x2
        },
        0x226: {
          items: 0x3
        },
        0x3e0: {
          items: 0x4
        },
        0x4b0: {
          items: 0x5
        }
      }
    });
  }
  if ($(".hero-items").length) {
    $(".hero-items").owlCarousel({
      autoplay: true,
      smartSpeed: 0x190,
      margin: 0x1e,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      arrows: false,
      nav: true,
      center: true,
      navText: ["<i class=\"fi flaticon-left-arrow\"></i>", "<i class=\"fi flaticon-right-arrow-1\"></i>"],
      responsive: {
        0x0: {
          items: 0x1,
          margin: 0xa
        },
        0x1c2: {
          items: 0x1,
          margin: 0xa
        },
        0x23f: {
          items: 0x2,
          center: false,
          margin: 0x14
        },
        0x2ff: {
          items: 0x2,
          center: false
        },
        0x3e0: {
          items: 0x3
        },
        0x4b0: {
          items: 0x3
        }
      }
    });
  }
  if ($(".post-slider".length)) {
    $(".post-slider").owlCarousel({
      mouseDrag: false,
      smartSpeed: 0x1f4,
      margin: 0x1e,
      loop: true,
      nav: true,
      navText: ["<i class=\"fi ti-arrow-left\"></i>", "<i class=\"fi ti-arrow-right\"></i>"],
      dots: false,
      items: 0x1
    });
  }
  if ($(".shop-single-slider").length) {
    $(".slider-for").slick({
      slidesToShow: 0x1,
      slidesToScroll: 0x1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav"
    });
    $(".slider-nav").slick({
      slidesToShow: 0x5,
      slidesToScroll: 0x1,
      asNavFor: ".slider-for",
      vertical: true,
      verticalSwiping: true,
      focusOnSelect: true,
      arrows: false,
      responsive: [{
        breakpoint: 0x1f4,
        settings: {
          slidesToShow: 0x5,
          infinite: true
        }
      }, {
        breakpoint: 0x190,
        settings: {
          slidesToShow: 0x5
        }
      }]
    });
  }
  if ($("input[name='product-count']").length) {
    $("input[name='product-count']").TouchSpin({
      verticalbuttons: true
    });
  }
  if ($("#slider-range").length) {
    $("#slider-range").slider({
      range: true,
      min: 0xc,
      max: 0xc8,
      values: [0x0, 0x64],
      slide: function (_0x525569, _0x2c1914) {
        $("#amount").val("$" + _0x2c1914.values[0x0] + " - $" + _0x2c1914.values[0x1]);
      }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0x0) + " - $" + $("#slider-range").slider("values", 0x1));
  }
  $(".cart-plus-minus").append("<div class=\"dec qtybutton\">-</div><div class=\"inc qtybutton\">+</div>");
  $(".qtybutton").on("click", function () {
    var _0x1ea746 = $(this);
    var _0x577e7a = _0x1ea746.parent().find("input").val();
    if (_0x1ea746.text() == "+") {
      var _0x421433 = parseFloat(_0x577e7a) + 0x1;
    } else {
      if (_0x577e7a > 0x0) {
        var _0x421433 = parseFloat(_0x577e7a) - 0x1;
      } else {
        _0x421433 = 0x0;
      }
    }
    _0x1ea746.parent().find("input").val(_0x421433);
  });
  $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");
  function _0x532a1f() {
    if ($(window).scrollTop() > 0x3e8) {
      $("a.back-to-top").fadeIn("slow");
    } else {
      $("a.back-to-top").fadeOut("slow");
    }
  }
  $(".back-to-top").on("click", function () {
    $("html,body").animate({
      scrollTop: 0x0
    }, 0x2bc);
    return false;
  });
  if ($("#clock").length) {
    $("#clock").countdown("2024-11-30 20:30:00", function (_0x56ad7a) {});
  }
  if ($("#clock2").length) {
    $("#clock2").countdown("2024-11-30 20:30:00", function (_0x31cee3) {});
  }
  if ($("#clock3").length) {
    $("#clock3").countdown("2023-11-01 20:30:00", function (_0x4a74d0) {});
  }
  if ($("#contact-form-main").length) {
    $("#contact-form-main").validate({
      rules: {
        name: {
          required: true,
          minlength: 0x2
        },
        email: "required",
        phone: "required",
        adress: "required",
        guest: "required",
        meal: "required",
        date: "required",
        what: "required",
        service: "required"
      },
      messages: {
        name: "Please enter your name",
        email: "Please enter your email address",
        phone: "Please enter your phone number",
        adress: "Please enter your adress",
        guest: "Please select your guest Number",
        meal: "Please select your Meal Name",
        date: "Please select your Date",
        what: "Please select your Reason",
        service: "Please select your Service"
      },
      submitHandler: function (_0x321663) {
        $.ajax({
          type: "POST",
          url: "mail-contact.php",
          data: $(_0x321663).serialize(),
          success: function () {
            $("#loader").hide();
            $("#success").slideDown("slow");
            setTimeout(function () {
              $("#success").slideUp("slow");
            }, 0xbb8);
            _0x321663.reset();
          },
          error: function () {
            $("#loader").hide();
            $("#error").slideDown("slow");
            setTimeout(function () {
              $("#error").slideUp("slow");
            }, 0xbb8);
          }
        });
        return false;
      }
    });
  }
  $(window).on("load", function () {
    _0x289a03();
    _0x4c5bf2();
    _0x2b27f6();
    _0x4487bf();
    _0x178153($("#navbar > ul > li > a[href^='#'], a.theme-btn-s2[href^='#'] "), $(".wpo-site-header .navigation, .site-header .nav").innerHeight());
  });
  $(window).on("scroll", function () {
    _0x532a1f();
    _0x148302($(".navigation-holder"));
    if ($(".wpo-site-header").length) {
      _0x1de7c8($(".wpo-site-header .navigation"), "sticky-on");
    }
  });
  $(window).on("resize", function () {
    _0x492389();
    clearTimeout($.data(this, "resizeTimer"));
    $.data(this, "resizeTimer", setTimeout(function () {
      _0x4487bf();
    }, 0xc8));
  });
  if ($(".color-switcher-wrap").length) {
    var _0x52c4f4 = $(".color-toggle-btn");
    var _0x9eb988 = $(".color-switcher-item");
    var _0x42d1bb = $("body");
    _0x52c4f4.on("click", function (_0x1edcb6) {
      _0x9eb988.toggleClass("color-switcher-open");
      _0x1edcb6.stopPropagation();
    });
    _0x42d1bb.on("click", function () {
      _0x9eb988.removeClass("color-switcher-open");
    }).find(_0x14c42c).on("click", function (_0x8b2bc7) {
      _0x8b2bc7.stopPropagation();
    });
  }
  $(".color-switcher-wrap ul li.btn").on("click", function (_0x4490d0) {
    _0x4490d0.stopPropagation();
    $(".color-switcher-wrap ul li.btn").removeClass("active");
    $(this).addClass("active");
    let _0x4f4053 = $(this).attr("id");
    $("body").attr("class", "");
    if (_0x4f4053 == "Button1") {
      $("body").addClass("color1");
      localStorage.setItem("switerColor", "color1");
    } else {
      if (_0x4f4053 == "Button2") {
        $("body").addClass("color2");
        localStorage.setItem("switerColor", "color2");
      } else {
        if (_0x4f4053 == "Button3") {
          $("body").addClass("color3");
          localStorage.setItem("switerColor", "color3");
        } else {
          if (_0x4f4053 == "Button4") {
            $("body").addClass("color4");
            localStorage.setItem("switerColor", "color4");
          } else {
            if (_0x4f4053 == "Button5") {
              $("body").addClass("color5");
              localStorage.setItem("switerColor", "color5");
            } else {
              if (_0x4f4053 == "Button6") {
                $("body").addClass("color6");
                localStorage.setItem("switerColor", "color6");
              } else {
                if (_0x4f4053 == "Button7") {
                  $("body").addClass("color7");
                  localStorage.setItem("switerColor", "color7");
                } else {
                  if (_0x4f4053 == "Button8") {
                    $("body").addClass("color8");
                    localStorage.setItem("switerColor", "color8");
                  } else {
                    if (_0x4f4053 == "Button9") {
                      $("body").addClass("color9");
                      localStorage.setItem("switerColor", "color9");
                    } else {
                      if (_0x4f4053 == "Button10") {
                        $("body").addClass("color10");
                        localStorage.setItem("switerColor", "color10");
                      } else {
                        if (_0x4f4053 == "Button11") {
                          $("body").addClass("color11");
                          localStorage.setItem("switerColor", "color11");
                        } else {
                          if (_0x4f4053 == "Button12") {
                            $("body").addClass("color12");
                            localStorage.setItem("switerColor", "color12");
                          } else {
                            if (_0x4f4053 == "Button13") {
                              $("body").addClass("color13");
                              localStorage.setItem("switerColor", "color13");
                            } else {
                              if (_0x4f4053 == "Button14") {
                                $("body").addClass("color14");
                                localStorage.setItem("switerColor", "color14");
                              } else if (_0x4f4053 == "Button15") {
                                $("body").addClass("color15");
                                localStorage.setItem("switerColor", "color15");
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  $(window).on("load", function () {
    if (localStorage.getItem("switerColor") == "color1") {
      $("body").addClass("color1");
      $("#Button1").addClass("active");
    } else {
      if (localStorage.getItem("switerColor") == "color2") {
        $("body").addClass("color2");
        $("#Button2").addClass("active");
      } else {
        if (localStorage.getItem("switerColor") == "color3") {
          $("body").addClass("color3");
          $("#Button3").addClass("active");
        } else {
          if (localStorage.getItem("switerColor") == "color4") {
            $("body").addClass("color4");
            $("#Button4").addClass("active");
          } else {
            if (localStorage.getItem("switerColor") == "color5") {
              $("body").addClass("color5");
              $("#Button5").addClass("active");
            } else {
              if (localStorage.getItem("switerColor") == "color6") {
                $("body").addClass("color6");
                $("#Button6").addClass("active");
              } else {
                if (localStorage.getItem("switerColor") == "color7") {
                  $("body").addClass("color7");
                  $("#Button7").addClass("active");
                } else {
                  if (localStorage.getItem("switerColor") == "color8") {
                    $("body").addClass("color8");
                    $("#Button8").addClass("active");
                  } else {
                    if (localStorage.getItem("switerColor") == "color9") {
                      $("body").addClass("color9");
                      $("#Button9").addClass("active");
                    } else {
                      if (localStorage.getItem("switerColor") == "color10") {
                        $("body").addClass("color10");
                        $("#Button10").addClass("active");
                      } else {
                        if (localStorage.getItem("switerColor") == "color11") {
                          $("body").addClass("color11");
                          $("#Button11").addClass("active");
                        } else {
                          if (localStorage.getItem("switerColor") == "color12") {
                            $("body").addClass("color12");
                            $("#Button12").addClass("active");
                          } else {
                            if (localStorage.getItem("switerColor") == "color13") {
                              $("body").addClass("color13");
                              $("#Button13").addClass("active");
                            } else {
                              if (localStorage.getItem("switerColor") == "color14") {
                                $("body").addClass("color14");
                                $("#Button14").addClass("active");
                              } else if (localStorage.getItem("switerColor") == "color15") {
                                $("body").addClass("color15");
                                $("#Button15").addClass("active");
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  $(".reveal6").on("click", function () {
    var _0x20bbcc = $(".pwd6");
    if (_0x20bbcc.attr("type") === "text") {
      _0x20bbcc.attr("type", "password");
    } else {
      _0x20bbcc.attr("type", "text");
    }
  });
  $(".reveal3").on("click", function () {
    var _0x568ac3 = $(".pwd2");
    if (_0x568ac3.attr("type") === "text") {
      _0x568ac3.attr("type", "password");
    } else {
      _0x568ac3.attr("type", "text");
    }
  });
  $(".reveal2").on("click", function () {
    var _0x393ca4 = $(".pwd3");
    if (_0x393ca4.attr("type") === "text") {
      _0x393ca4.attr("type", "password");
    } else {
      _0x393ca4.attr("type", "text");
    }
  });
})(window.jQuery);