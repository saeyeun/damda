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
    autoplaySpeed: 1500,
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
    centerPadding: '50px',
    slidesToShow: 4,
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

  $('.left_menu .menu_1dp_list>li').mouseenter(function () {
    $(this).find('.menu_2dp').addClass('on');
  })
  $('.left_menu .menu_1dp_list>li').mouseleave(function () {
    $(this).find('.menu_2dp').removeClass('on');
  })







  //.best_item_slide .item영역에 마우스 오버시 상품 정보 노출
  $('.best_item_slide .item').mouseenter(function () {
    $(this).find('.item_info').addClass('active');
  })
  $('.best_item_slide .item').mouseleave(function () {
    $(this).find('.item_info').removeClass('active');
  })


  // keyword 영역 tab바 구현
  // .tab_menu li의 순번찾기
  $('.tab .tab_menu li').click(function(){
    let i = $(this).index()
    console.log(i)

    $('.tab_item').hide()
  $('.tab_item').eq(i).show()

  $('.tab .tab_menu li').removeClass('on')
  $(this).addClass('on')
  })
  


})


