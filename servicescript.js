new Swiper ('.brand__slider', {

  navigation: {
      nextE1:'.swiper-buton-next',
      prevE1:'.swiper-buton-prew'
  },
    
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        // dynamicBullets:true,
    },

    slideToClickedSlide:true,
    slidesPerView:'auto',
    watchOverflow: true,
    spaceBetween: 20,
    slidesPerGroup: 1,
    // centeredSlides: true,
    loop: true,
    freeMode:true,
    observer: true,
    watchOverflow: true

});