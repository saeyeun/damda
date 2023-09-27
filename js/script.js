$(document).ready(function () {
  $('.mainSlide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    speed: 500,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 1000,
    draggable: false,
    //   responsive: [
    //           {
    //             breakpoint: 733,
    //             settings: {
    //               arrows: true,
    //               infinite: true,
    //               dots: true
    //             }
    //           },
    //           // {
    //           //   breakpoint: 600,
    //           //   settings: {
    //           //     slidesToShow: 2,
    //           //     slidesToScroll: 2
    //           //   }
    //           // },
    //           // {
    //           //   breakpoint: 480,
    //           //   settings: {
    //           //     slidesToShow: 1,
    //           //     slidesToScroll: 1
    //           //   }
    //           // }
    //           // You can unslick at a given breakpoint now by adding:
    //           // settings: "unslick"
    //           // instead of a settings object
    //         ]
    // });
  })

  $('.best_item_slide').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 5,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    speed: 1500,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });

  //.best_item_slide .item영역에 마우스 오버시 상품 정보 노출
  $('.best_item_slide .item').mouseenter(function () {
    $(this).find('.txt').addClass('active');
  })
  $('.best_item_slide .item').mouseleave(function () {
    $(this).find('.txt').removeClass('active');
  })

})


