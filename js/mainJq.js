$(document).ready(function () {
    $(".clients__body").slick({
        slidesToShow: 3,
        autoplay: true,
        speed: 900,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            } 
          },
          {
            breakpoint: 920,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });

    $(".service-blocks__body").slick({
      slidesToShow: 3,
      autoplay: true,
      speed: 900,
      dots: true,
      arrows: false,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
          slidesToShow: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
          centerMode: false,
          slidesToShow: 1,
          }
        }
      ]
    })
})