const imgSlider = new Swiper('.imgSlider', {
    spaceBetween: 11,  
    slidesPerView : 1.2,
    speed:1000,
  });


  const relProSlider = new Swiper('.relProSlider', {
    spaceBetween:16,
    centeredSlides : true,
    loop: true,
    slidesPerView : 1.2,
    // Navigation arrows
    navigation: {
      nextEl: '.nextBtn',
      prevEl: '.prevBtn',
    },
  

  });